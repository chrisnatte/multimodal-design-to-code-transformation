<template>
  <div class="flex min-h-screen bg-white text-slate-700">
    <aside class="w-64 shrink-0 bg-slate-100 p-6">
      <div class="flex flex-col gap-6">
        <span class="text-base">Navigation</span>
        <nav class="flex flex-col gap-4">
          <Button label="Dashboard" icon="pi pi-home" class="!justify-start" />
          <Button label="Kunden" icon="pi pi-users" severity="secondary" variant="outlined" class="!justify-start" />
          <Button label="Berichte" icon="pi pi-chart-bar" severity="secondary" variant="outlined" class="!justify-start" />
          <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" variant="outlined" class="!justify-start" />
        </nav>
      </div>
    </aside>

    <main class="flex min-w-0 flex-1 flex-col gap-6 px-8 py-4">
      <header class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-slate-900">Dashboard</h1>
        <span class="text-base">Bekomme eine Übersicht über die Projekte.</span>
      </header>

      <section class="flex flex-wrap gap-5">
        <Card
          v-for="metric in metrics"
          :key="metric.label"
          class="w-48 bg-slate-100"
          :pt="{ body: '!p-0', content: '!p-0' }"
        >
          <template #content>
            <div class="flex h-[117px] flex-col gap-2 p-[17px]">
              <span class="text-2xl font-medium text-slate-900">{{ metric.value }}</span>
              <span class="text-sm">{{ metric.label }}</span>
              <Tag :value="metric.change" :severity="metric.severity" class="mt-auto w-fit" />
            </div>
          </template>
        </Card>
      </section>

      <section class="flex flex-wrap items-start gap-4">
        <Card class="w-full max-w-[693px] bg-slate-100" :pt="{ body: '!p-0', content: '!p-0' }">
          <template #content>
            <div class="flex items-center justify-between border-b border-slate-200 px-4 py-3">
              <span class="text-sm font-semibold">Filter</span>
              <Button icon="pi pi-chevron-up" severity="secondary" variant="text" rounded aria-label="Filter schließen" />
            </div>

            <div class="flex flex-wrap gap-5 p-4">
              <div class="flex flex-col gap-2">
                <label for="period" class="text-sm">Zeitraum</label>
                <DatePicker
                  v-model="period"
                  input-id="period"
                  placeholder="Zeitraum wählen"
                  class="w-[216px]"
                />
                <DatePicker v-model="period" inline class="w-[268px]" />
              </div>

              <div class="flex flex-col gap-2">
                <label for="status" class="text-sm">Status</label>
                <Select
                  v-model="status"
                  input-id="status"
                  :options="statusOptions"
                  placeholder="Status auswählen"
                  class="w-[216px]"
                />
                <Card class="w-[216px]" :pt="{ body: '!p-0', content: '!p-0' }">
                  <template #content>
                    <div class="flex flex-col gap-1 p-3">
                      <InputText v-model="statusSearch" placeholder="Suche..." />
                      <Button
                        v-for="option in statusOptions"
                        :key="option"
                        :label="option"
                        severity="secondary"
                        variant="text"
                        class="!justify-start"
                        :class="{ 'bg-slate-100': option === 'Bezahlt' }"
                        @click="status = option"
                      />
                    </div>
                  </template>
                </Card>
              </div>

              <div class="flex flex-col gap-2">
                <span class="text-sm">Zustand</span>
                <div class="flex gap-3 pt-1">
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="active" input-id="active" binary />
                    <label for="active">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="archive" input-id="archive" binary />
                    <label for="archive">Archiv</label>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Card>

        <div class="flex w-48 flex-col gap-3">
          <Button label="Exportieren" icon="pi pi-download" icon-pos="right" class="w-fit" />
          <Card class="w-48" :pt="{ body: '!p-0', content: '!p-0' }">
            <template #content>
              <div class="flex flex-col gap-2 p-3">
                <Button label="Als CSV exportieren" severity="secondary" variant="outlined" fluid />
                <Button label="Als PDF exportieren" severity="secondary" variant="outlined" fluid />
              </div>
            </template>
          </Card>
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <DataTable :value="orders" class="w-full max-w-[1008px]">
          <Column field="product" header="Produkt" header-class="w-[384px]" body-class="w-[384px]" />
          <Column header="Status" header-class="w-40" body-class="w-40">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="data.severity" />
            </template>
          </Column>
          <Column field="date" header="Bestelldatum" header-class="w-[124px]" body-class="w-[124px]" />
          <Column field="total" header="Summe" header-class="w-[124px]" body-class="w-[124px]" />
          <Column field="quantity" header="Stück" header-class="w-[124px]" body-class="w-[124px]" />
          <Column header="Aktionen" header-class="w-[92px]" body-class="w-[92px]">
            <template #body>
              <Button icon="pi pi-ellipsis-h" severity="secondary" variant="text" aria-label="Aktionen" />
            </template>
          </Column>
        </DataTable>

        <Card class="ml-auto w-[200px]" :pt="{ body: '!p-0', content: '!p-0' }">
          <template #content>
            <div class="flex flex-col gap-2 p-3">
              <Button label="Bearbeiten" icon="pi pi-pencil" severity="secondary" variant="outlined" class="!justify-start" />
              <Button label="Status aktualisieren" icon="pi pi-refresh" severity="secondary" variant="outlined" class="!justify-start" />
              <Button label="Löschen" icon="pi pi-trash" severity="secondary" variant="outlined" class="!justify-start" />
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
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import DatePicker from 'primevue/datepicker'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const period = ref<Date | null>(new Date(2024, 0, 1))
const status = ref<string | null>(null)
const statusSearch = ref('')
const active = ref(true)
const archive = ref(false)

const statusOptions = ['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']

const metrics = [
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
  { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' },
]

const orders = ref([
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
])
</script>