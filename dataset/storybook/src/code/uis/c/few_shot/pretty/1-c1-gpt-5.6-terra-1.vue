<template>
  <div class="flex min-h-screen bg-slate-50 text-slate-700">
    <aside class="w-64 bg-slate-100 px-6 py-6">
      <p class="mb-6 text-sm">Navigation</p>
      <nav class="flex flex-col gap-4">
        <Button label="Dashboard" icon="pi pi-th-large" severity="success" class="!justify-start" />
        <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined class="!justify-start" />
        <Button label="Berichte" icon="pi pi-file" severity="secondary" outlined class="!justify-start" />
        <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" outlined class="!justify-start" />
      </nav>
    </aside>

    <main class="w-[1010px] px-6 py-4">
      <header class="mb-5">
        <h1 class="text-3xl font-bold leading-tight">Dashboard</h1>
        <p class="text-sm text-slate-500">Bekomme eine Übersicht über die Projekte.</p>
      </header>

      <section class="mb-6 grid grid-cols-4 gap-4">
        <Card v-for="metric in metrics" :key="metric.label" :pt="{ body: '!p-4', content: '!p-0' }">
          <template #content>
            <div class="text-2xl font-medium">{{ metric.value }}</div>
            <p class="mt-1 text-sm text-slate-500">{{ metric.label }}</p>
            <Tag :value="metric.change" :severity="metric.severity" class="mt-2" />
          </template>
        </Card>
      </section>

      <section class="mb-6 flex items-start gap-4">
        <Card class="w-[694px]" :pt="{ body: '!p-4', content: '!p-0' }">
          <template #content>
            <div class="mb-4 flex items-center justify-between">
              <span class="text-sm font-semibold">Filter</span>
              <i class="pi pi-angle-down text-sm"></i>
            </div>

            <div class="flex gap-5">
              <div class="w-[268px]">
                <label for="date-range" class="mb-2 block text-sm">Zeitraum</label>
                <InputText
                  v-model="dateRange"
                  input-id="date-range"
                  placeholder="Zeitraum wählen"
                  class="w-full"
                />
                <DatePicker v-model="selectedDate" inline class="mt-1 w-full" />
              </div>

              <div class="w-[216px]">
                <label for="status-filter" class="mb-2 block text-sm">Status</label>
                <Select
                  v-model="selectedStatus"
                  :options="statusOptions"
                  input-id="status-filter"
                  option-label="label"
                  placeholder="Status auswählen"
                  class="w-full"
                />
                <Listbox
                  v-model="selectedStatus"
                  :options="statusOptions"
                  option-label="label"
                  filter
                  filter-placeholder="Suche..."
                  class="mt-1 w-full"
                  :pt="{ list: '!py-1', option: '!py-2 !px-3' }"
                />
              </div>

              <div class="w-[138px]">
                <span class="mb-2 block text-sm">Zustand</span>
                <div class="flex items-center gap-3">
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="active" input-id="active" binary />
                    <label for="active" class="text-sm">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="archive" input-id="archive" binary />
                    <label for="archive" class="text-sm">Archiv</label>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Card>

        <div class="flex flex-col gap-3">
          <Button label="Exportieren" icon="pi pi-file-export" icon-pos="right" severity="success" />
          <Menu
            :model="exportItems"
            :pt="{
              root: '!static !block w-[192px]',
              list: 'flex flex-col !gap-2 !p-2',
              item: 'border border-slate-200 rounded',
              itemLink: '!px-3 !py-2',
            }"
          />
        </div>
      </section>

      <section class="relative">
        <DataTable :value="orders" class="w-full" :pt="{ headerCell: '!py-3 !px-4', bodyCell: '!py-3 !px-4' }">
          <Column field="product" header="Produkt" class="w-[38%]" />
          <Column header="Status" class="w-[16%]">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="data.severity" />
            </template>
          </Column>
          <Column field="date" header="Bestelldatum" />
          <Column field="sum" header="Summe" />
          <Column field="pieces" header="Stück" />
          <Column header="Aktionen">
            <template #body="{ data }">
              <Button
                icon="pi pi-ellipsis-h"
                text
                rounded
                :severity="data.product === 'Widget Pro' ? 'success' : 'secondary'"
              />
            </template>
          </Column>
        </DataTable>

        <Menu
          :model="orderActions"
          class="absolute right-[-136px] top-[174px] w-52"
          :pt="{
            list: 'flex flex-col !gap-2 !p-2',
            item: 'border border-slate-200 rounded',
            itemLink: '!px-3 !py-2',
          }"
        />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import InputText from 'primevue/inputtext'
import DatePicker from 'primevue/datepicker'
import Select from 'primevue/select'
import Listbox from 'primevue/listbox'
import Checkbox from 'primevue/checkbox'
import Menu from 'primevue/menu'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const dateRange = ref('')
const selectedDate = ref(new Date(2024, 6, 1))
const selectedStatus = ref({ label: 'Bezahlt' })
const active = ref(true)
const archive = ref(false)

const metrics = [
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
  { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' },
]

const statusOptions = [
  { label: 'Bezahlt' },
  { label: 'In Bearbeitung' },
  { label: 'Versendet' },
  { label: 'Angekommen' },
]

const exportItems = [
  { label: 'Als CSV exportieren' },
  { label: 'Als PDF exportieren' },
]

const orderActions = [
  { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
  { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
  { label: 'Löschen', icon: 'pi pi-trash' },
]

const orders = [
  { product: 'Widget Pro', status: 'Angekommen', severity: 'success', date: '15.04.2026', sum: '12.400 €', pieces: '312' },
  { product: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warn', date: '24.04.2026', sum: '8.920 €', pieces: '485' },
  { product: 'Sensor X1', status: 'Versendet', severity: 'secondary', date: '09.05.2026', sum: '6.100 €', pieces: '150' },
  { product: 'System V5', status: 'Bezahlt', severity: 'info', date: '12.06.2026', sum: '10.250 €', pieces: '2' },
]
</script>