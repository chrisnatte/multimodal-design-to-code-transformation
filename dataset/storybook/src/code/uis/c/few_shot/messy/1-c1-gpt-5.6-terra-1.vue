<template>
  <div class="flex min-h-screen bg-slate-50 text-slate-700">
    <aside class="w-64 bg-slate-100 px-6 py-6">
      <nav class="flex flex-col gap-4">
        <span class="text-sm">Navigation</span>
        <div class="flex flex-col gap-4">
          <Button label="Dashboard" icon="pi pi-th-large" severity="success" outlined class="!justify-start" />
          <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined class="!justify-start" />
          <Button label="Berichte" icon="pi pi-file" severity="secondary" outlined class="!justify-start" />
          <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" outlined class="!justify-start" />
        </div>
      </nav>
    </aside>

    <main class="w-full max-w-6xl px-14 py-4">
      <header class="mb-5">
        <h1 class="text-3xl font-bold text-slate-700">Dashboard</h1>
        <p class="text-sm text-slate-500">Bekomme eine Übersicht über die Projekte.</p>
      </header>

      <section class="mb-6 flex gap-4">
        <Card v-for="metric in metrics" :key="metric.label" class="w-48 bg-slate-100 shadow-sm">
          <template #content>
            <div class="flex flex-col gap-1">
              <span class="text-2xl font-medium">{{ metric.value }}</span>
              <span class="text-sm text-slate-500">{{ metric.label }}</span>
              <Tag :value="metric.change" :severity="metric.severity" class="w-fit text-xs" />
            </div>
          </template>
        </Card>
      </section>

      <section class="mb-6 flex items-start gap-4">
        <div class="h-[395px] w-[694px] rounded-lg bg-slate-100 p-4">
          <div class="mb-4 flex items-center justify-between">
            <span class="text-sm font-semibold">Filter</span>
            <i class="pi pi-angle-down text-sm"></i>
          </div>

          <div class="flex gap-5">
            <div class="flex w-67 flex-col gap-2">
              <label class="text-sm">Zeitraum</label>
              <DatePicker
                v-model="dateRange"
                selection-mode="range"
                placeholder="Zeitraum wählen"
                show-icon
                class="w-full"
                input-class="w-full"
              />
              <DatePicker
                v-model="calendarDate"
                inline
                class="w-full rounded-md bg-white shadow-md"
                :pt="{
                  root: 'border-0',
                  header: '!p-3',
                  calendarContainer: '!p-3',
                  day: 'text-sm',
                }"
              />
            </div>

            <div class="flex w-54 flex-col gap-2">
              <label class="text-sm">Status</label>
              <Select
                v-model="status"
                :options="statuses"
                option-label="label"
                placeholder="Status auswählen"
                class="w-full"
              />
              <div class="rounded-md bg-white p-1 shadow-md">
                <IconField>
                  <InputText v-model="statusSearch" placeholder="Suche..." class="w-full" />
                  <InputIcon class="pi pi-search" />
                </IconField>
                <div class="mt-1 flex flex-col gap-1">
                  <Button
                    v-for="item in statuses"
                    :key="item.label"
                    :label="item.label"
                    text
                    severity="secondary"
                    class="!justify-start !px-2 !py-1.5"
                    :class="{ 'bg-slate-100': item.label === 'Bezahlt' }"
                    @click="status = item"
                  />
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-3">
              <label class="text-sm">Zustand</label>
              <div class="flex items-center gap-4">
                <div class="flex items-center gap-2">
                  <Checkbox v-model="activeOnly" input-id="active" binary />
                  <label for="active" class="text-sm">Aktiv</label>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox v-model="archived" input-id="archived" binary />
                  <label for="archived" class="text-sm">Archiv</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <Button label="Exportieren" icon="pi pi-file-export" icon-pos="right" severity="success" class="w-fit" />
          <div class="flex w-48 flex-col gap-2 rounded-md bg-white p-2 shadow-md">
            <Button label="Als CSV exportieren" severity="secondary" outlined class="!justify-start !text-sm" />
            <Button label="Als PDF exportieren" severity="secondary" outlined class="!justify-start !text-sm" />
          </div>
        </div>
      </section>

      <DataTable :value="orders" class="w-full" table-style="min-width: 100%">
        <Column field="product" header="Produkt" />
        <Column header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="data.statusSeverity" class="text-xs" />
          </template>
        </Column>
        <Column field="date" header="Bestelldatum" />
        <Column field="sum" header="Summe" />
        <Column field="quantity" header="Stück" />
        <Column header="Aktionen" class="w-20">
          <template #body="{ index }">
            <Button
              icon="pi pi-ellipsis-h"
              text
              severity="secondary"
              rounded
              :class="{ 'bg-slate-100': index === 2 }"
            />
          </template>
        </Column>
      </DataTable>

      <div class="ml-auto mt-[-53px] w-50 rounded-md bg-white p-2 shadow-md">
        <div class="flex flex-col gap-2">
          <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined class="!justify-start !text-sm" />
          <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" outlined class="!justify-start !text-sm" />
          <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="!justify-start !text-sm" />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import DatePicker from 'primevue/datepicker'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const dateRange = ref()
const calendarDate = ref(new Date(2024, 6, 1))
const status = ref()
const statusSearch = ref('')
const activeOnly = ref(true)
const archived = ref(false)

const metrics = ref([
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
  { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' }
])

const statuses = ref([
  { label: 'Bezahlt' },
  { label: 'In Bearbeitung' },
  { label: 'Versendet' },
  { label: 'Angekommen' }
])

const orders = ref([
  { product: 'Widget Pro', status: 'Angekommen', statusSeverity: 'success', date: '15.04.2026', sum: '12.400 €', quantity: '312' },
  { product: 'Gadget Mini', status: 'In Bearbeitung', statusSeverity: 'warn', date: '24.04.2026', sum: '8.920 €', quantity: '485' },
  { product: 'Sensor X1', status: 'Versendet', statusSeverity: 'secondary', date: '09.05.2026', sum: '6.100 €', quantity: '150' },
  { product: 'System V5', status: 'Bezahlt', statusSeverity: 'info', date: '12.06.2026', sum: '10.250 €', quantity: '2' }
])
</script>