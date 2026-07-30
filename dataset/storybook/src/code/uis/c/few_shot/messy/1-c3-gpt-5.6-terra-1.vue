<template>
  <div class="flex min-h-screen bg-slate-50 font-sans text-slate-700">
    <aside class="w-64 shrink-0 bg-slate-100 px-6 py-6">
      <p class="mb-6 text-sm">Navigation</p>
      <nav class="flex flex-col gap-4">
        <Button label="Dashboard" icon="pi pi-th-large" severity="success" class="!justify-start" />
        <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined class="!justify-start" />
        <Button label="Berichte" icon="pi pi-file" severity="secondary" outlined class="!justify-start" />
        <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" outlined class="!justify-start" />
      </nav>
    </aside>

    <main class="w-[1008px] px-8 py-4">
      <header class="mb-4">
        <h1 class="text-3xl font-bold leading-tight text-slate-700">Dashboard</h1>
        <p class="text-base text-slate-500">Bekomme eine Übersicht über die Projekte.</p>
      </header>

      <section class="mb-6 flex gap-5">
        <Card
          v-for="metric in metrics"
          :key="metric.label"
          :pt="{ root: 'w-48 bg-slate-100 shadow-sm', body: '!p-4', content: '!p-0' }"
        >
          <template #content>
            <div class="text-2xl font-medium">{{ metric.value }}</div>
            <div class="mt-1 text-sm text-slate-500">{{ metric.label }}</div>
            <Tag :value="metric.change" :severity="metric.severity" class="mt-2 text-xs" />
          </template>
        </Card>
      </section>

      <section class="mb-6 flex items-start gap-4">
        <Card
          :pt="{
            root: 'w-[694px] bg-slate-100',
            body: '!p-4',
            content: '!p-0',
          }"
        >
          <template #content>
            <div class="mb-4 flex items-center justify-between">
              <span class="text-sm font-semibold">Filter</span>
              <i class="pi pi-angle-down text-sm" />
            </div>

            <div class="flex gap-4">
              <div class="w-68">
                <label for="date-range" class="mb-2 block text-sm">Zeitraum</label>
                <DatePicker
                  v-model="dateRange"
                  input-id="date-range"
                  placeholder="Zeitraum wählen"
                  date-format="dd.mm.yy"
                  selection-mode="range"
                  show-icon
                  class="w-full"
                />
                <Calendar v-model="calendarDate" inline class="mt-1 w-full" />
              </div>

              <div class="w-56">
                <label for="status" class="mb-2 block text-sm">Status</label>
                <Select
                  v-model="selectedStatus"
                  input-id="status"
                  :options="statuses"
                  placeholder="Status auswählen"
                  class="w-full"
                />
                <Listbox
                  v-model="selectedStatus"
                  :options="statuses"
                  filter
                  filter-placeholder="Suche..."
                  class="mt-1 w-full"
                  list-style="max-height: 134px"
                />
              </div>

              <div class="w-36">
                <span class="mb-2 block text-sm">Zustand</span>
                <div class="flex items-center gap-2">
                  <Checkbox v-model="active" input-id="active" binary />
                  <label for="active" class="text-sm">Aktiv</label>
                </div>
                <div class="mt-3 flex items-center gap-2">
                  <Checkbox v-model="archive" input-id="archive" binary />
                  <label for="archive" class="text-sm">Archiv</label>
                </div>
              </div>
            </div>
          </template>
        </Card>

        <div class="flex flex-col gap-3">
          <Button label="Exportieren" icon="pi pi-file-export" icon-pos="right" severity="success" />
          <Card :pt="{ root: 'w-48 shadow-md', body: '!p-2', content: '!p-0' }">
            <template #content>
              <div class="flex flex-col gap-2">
                <Button label="Als CSV exportieren" severity="secondary" outlined class="!justify-start !text-sm" />
                <Button label="Als PDF exportieren" severity="secondary" outlined class="!justify-start !text-sm" />
              </div>
            </template>
          </Card>
        </div>
      </section>

      <section class="w-[1008px]">
        <DataTable :value="orders" size="small" class="text-sm">
          <Column field="product" header="Produkt" header-class="w-[38%]" />
          <Column field="status" header="Status" header-class="w-[16%]">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="data.severity" class="text-xs" />
            </template>
          </Column>
          <Column field="date" header="Bestelldatum" />
          <Column field="amount" header="Summe" />
          <Column field="count" header="Stück" />
          <Column header="Aktionen" header-class="w-24 text-center" body-class="text-center">
            <template #body="{ data }">
              <Button
                icon="pi pi-ellipsis-h"
                text
                rounded
                :severity="data.product === 'Widget Pro' ? 'success' : 'secondary'"
                @click="selectedOrder = data.product"
              />
            </template>
          </Column>
        </DataTable>

        <Card
          :pt="{ root: 'ml-auto -mt-14 w-52 shadow-md', body: '!p-2', content: '!p-0' }"
        >
          <template #content>
            <div class="flex flex-col gap-2">
              <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined class="!justify-start !text-sm" />
              <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" outlined class="!justify-start !text-sm" />
              <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="!justify-start !text-sm" />
            </div>
          </template>
        </Card>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Calendar from 'primevue/calendar'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import DatePicker from 'primevue/datepicker'
import Listbox from 'primevue/listbox'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const metrics = [
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
  { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' }
]

const statuses = ['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']
const dateRange = ref()
const calendarDate = ref(new Date(2024, 6, 1))
const selectedStatus = ref('Bezahlt')
const active = ref(true)
const archive = ref(false)
const selectedOrder = ref('System V5')

const orders = ref([
  { product: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', amount: '12.400 €', count: '312', severity: 'success' },
  { product: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', amount: '8.920 €', count: '485', severity: 'warn' },
  { product: 'Sensor X1', status: 'Versendet', date: '09.05.2026', amount: '6.100 €', count: '150', severity: 'secondary' },
  { product: 'System V5', status: 'Bezahlt', date: '12.06.2026', amount: '10.250 €', count: '2', severity: 'info' }
])
</script>