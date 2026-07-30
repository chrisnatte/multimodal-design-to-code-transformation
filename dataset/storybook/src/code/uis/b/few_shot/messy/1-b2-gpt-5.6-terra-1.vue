<template>
  <div class="flex min-h-screen bg-white text-slate-900">
    <aside class="w-64 shrink-0 bg-slate-100 p-6">
      <div class="flex flex-col gap-6">
        <span class="text-base">Navigation</span>
        <nav class="flex flex-col gap-4">
          <Button label="Dashboard" icon="pi pi-home" severity="success" class="!justify-start" />
          <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined class="!justify-start" />
          <Button label="Berichte" icon="pi pi-chart-bar" severity="secondary" outlined class="!justify-start" />
          <Button
            label="Einstellungen"
            icon="pi pi-cog"
            severity="secondary"
            outlined
            class="!justify-start"
          />
        </nav>
      </div>
    </aside>

    <main class="flex w-full flex-col gap-6 px-8 py-4">
      <header>
        <h1 class="text-3xl font-bold">Dashboard</h1>
        <p class="mt-1 text-base">Bekomme eine Übersicht über die Projekte.</p>
      </header>

      <section class="flex flex-wrap gap-5">
        <Card
          v-for="metric in metrics"
          :key="metric.label"
          class="w-48 bg-slate-100"
          :pt="{ body: 'p-0', content: 'p-4' }"
        >
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium">{{ metric.value }}</span>
              <span class="text-sm">{{ metric.label }}</span>
              <Tag :value="metric.change" :severity="metric.severity" class="w-fit" />
            </div>
          </template>
        </Card>
      </section>

      <section class="flex flex-wrap items-start gap-4">
        <Panel header="Filter" toggleable :collapsed="false" class="w-full max-w-[693px]">
          <div class="flex flex-wrap gap-5">
            <div class="flex w-[268px] flex-col gap-2">
              <label for="date-range" class="text-sm">Zeitraum</label>
              <DatePicker
                v-model="dateRange"
                input-id="date-range"
                selection-mode="range"
                placeholder="Zeitraum wählen"
                class="w-[216px]"
              />
              <DatePicker v-model="calendarDate" inline class="w-[268px]" />
            </div>

            <div class="flex w-[216px] flex-col gap-2">
              <label for="status-select" class="text-sm">Status</label>
              <Select
                v-model="selectedStatus"
                :options="statusOptions"
                option-label="label"
                option-value="value"
                input-id="status-select"
                placeholder="Status auswählen"
                class="w-[216px]"
              />
              <Card class="w-[216px]" :pt="{ body: 'p-0', content: 'p-3' }">
                <template #content>
                  <div class="flex flex-col gap-2">
                    <InputText v-model="statusSearch" placeholder="Suche..." class="w-full" />
                    <Button
                      v-for="status in statusOptions"
                      :key="status.value"
                      :label="status.label"
                      severity="secondary"
                      text
                      class="!justify-start"
                      :class="{ 'bg-slate-100': status.value === 'Bezahlt' }"
                      @click="selectedStatus = status.value"
                    />
                  </div>
                </template>
              </Card>
            </div>

            <div class="flex flex-col gap-2">
              <span class="text-sm">Zustand</span>
              <div class="flex items-center gap-3 pt-2">
                <div class="flex items-center gap-2">
                  <Checkbox v-model="activeOnly" input-id="active-only" binary />
                  <label for="active-only">Aktiv</label>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox v-model="archivedOnly" input-id="archived-only" binary />
                  <label for="archived-only">Archiv</label>
                </div>
              </div>
            </div>
          </div>
        </Panel>

        <div class="flex w-48 flex-col gap-3">
          <Button label="Exportieren" icon="pi pi-download" icon-pos="right" severity="success" />
          <Card class="w-48" :pt="{ body: 'p-0', content: 'p-3' }">
            <template #content>
              <div class="flex flex-col gap-2">
                <Button label="Als CSV exportieren" severity="secondary" outlined class="w-full" />
                <Button label="Als PDF exportieren" severity="secondary" outlined class="w-full" />
              </div>
            </template>
          </Card>
        </div>
      </section>

      <section class="flex flex-col gap-4">
        <DataTable :value="orders" show-gridlines class="w-full max-w-[1008px]">
          <Column field="product" header="Produkt" header-class="w-[384px]" />
          <Column header="Status" header-class="w-40">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="data.severity" />
            </template>
          </Column>
          <Column field="date" header="Bestelldatum" header-class="w-[124px]" />
          <Column field="total" header="Summe" header-class="w-[124px]" />
          <Column field="quantity" header="Stück" header-class="w-[124px]" />
          <Column header="Aktionen" header-class="w-[92px]">
            <template #body>
              <Button icon="pi pi-ellipsis-h" severity="secondary" text aria-label="Aktionen" />
            </template>
          </Column>
        </DataTable>

        <div class="ml-auto w-50">
          <Card :pt="{ body: 'p-0', content: 'p-3' }">
            <template #content>
              <div class="flex flex-col gap-2">
                <Button label="Bearbeiten" icon="pi pi-pencil" severity="secondary" outlined class="!justify-start" />
                <Button
                  label="Status aktualisieren"
                  icon="pi pi-refresh"
                  severity="secondary"
                  outlined
                  class="!justify-start"
                />
                <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="!justify-start" />
              </div>
            </template>
          </Card>
        </div>
      </section>
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
import InputText from 'primevue/inputtext'
import Panel from 'primevue/panel'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const dateRange = ref<Date[] | null>(null)
const calendarDate = ref(new Date(2024, 6, 1))
const selectedStatus = ref<string | null>(null)
const statusSearch = ref('')
const activeOnly = ref(true)
const archivedOnly = ref(false)

const metrics = [
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
  { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' },
]

const statusOptions = [
  { label: 'Bezahlt', value: 'Bezahlt' },
  { label: 'In Bearbeitung', value: 'In Bearbeitung' },
  { label: 'Versendet', value: 'Versendet' },
  { label: 'Angekommen', value: 'Angekommen' },
]

const orders = [
  {
    product: 'Widget Pro',
    status: 'Angekommen',
    severity: 'success',
    date: '15.04.2026',
    total: '12.400 €',
    quantity: '312',
  },
  {
    product: 'Gadget Mini',
    status: 'In Bearbeitung',
    severity: 'warn',
    date: '24.04.2026',
    total: '8.920 €',
    quantity: '485',
  },
  {
    product: 'Sensor X1',
    status: 'Versendet',
    severity: 'secondary',
    date: '09.05.2026',
    total: '6.100 €',
    quantity: '150',
  },
  {
    product: 'System V5',
    status: 'Bezahlt',
    severity: 'info',
    date: '12.06.2026',
    total: '10.250 €',
    quantity: '2',
  },
]
</script>