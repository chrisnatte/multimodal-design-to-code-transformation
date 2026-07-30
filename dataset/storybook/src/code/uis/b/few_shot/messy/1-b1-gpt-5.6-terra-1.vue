<template>
  <div class="flex min-h-screen bg-white text-slate-700">
    <aside class="w-64 shrink-0 bg-slate-100 p-6">
      <div class="flex flex-col gap-6">
        <span class="text-base">Navigation</span>
        <nav class="flex flex-col gap-4">
          <Button
            label="Dashboard"
            icon="pi pi-home"
            severity="success"
            class="!justify-start"
          />
          <Button
            label="Kunden"
            icon="pi pi-users"
            severity="secondary"
            outlined
            class="!justify-start"
          />
          <Button
            label="Berichte"
            icon="pi pi-chart-bar"
            severity="secondary"
            outlined
            class="!justify-start"
          />
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

    <main class="w-full px-8 py-4">
      <div class="mx-auto flex max-w-[1008px] flex-col gap-6">
        <header class="flex flex-col gap-1">
          <h1 class="text-[32px] font-bold leading-tight text-slate-900">Dashboard</h1>
          <span class="text-base">Bekomme eine Übersicht über die Projekte.</span>
        </header>

        <div class="flex flex-wrap gap-5">
          <Card
            v-for="metric in metrics"
            :key="metric.label"
            class="w-48 bg-slate-100"
            :pt="{ body: { class: '!p-[17px]' } }"
          >
            <template #content>
              <div class="flex flex-col gap-2">
                <span class="text-2xl font-medium text-slate-900">{{ metric.value }}</span>
                <span class="text-sm">{{ metric.label }}</span>
                <Tag :value="metric.change" :severity="metric.severity" class="w-fit text-xs" />
              </div>
            </template>
          </Card>
        </div>

        <div class="flex items-start justify-between gap-4">
          <section class="w-full max-w-[693px] overflow-hidden rounded-lg bg-slate-100">
            <div class="flex items-center justify-between border border-slate-200 px-4 py-3">
              <span class="text-sm font-semibold">Filter</span>
              <Button icon="pi pi-chevron-up" severity="secondary" text rounded size="small" />
            </div>

            <div class="flex gap-5 p-4">
              <div class="flex w-[268px] flex-col gap-1">
                <label for="period" class="text-sm">Zeitraum</label>
                <DatePicker
                  v-model="period"
                  input-id="period"
                  placeholder="Zeitraum wählen"
                  show-icon
                  class="w-[216px]"
                />
                <div class="mt-0.5 w-[268px] rounded-md border border-slate-200 bg-white p-2.5">
                  <Calendar v-model="period" inline />
                </div>
              </div>

              <div class="flex w-[216px] flex-col gap-1">
                <label for="status" class="text-sm">Status</label>
                <Select
                  v-model="selectedStatus"
                  input-id="status"
                  :options="statusOptions"
                  placeholder="Status auswählen"
                  class="w-[216px]"
                />
                <div class="mt-0.5 rounded-md border border-slate-200 bg-white p-2.5">
                  <InputText
                    v-model="statusSearch"
                    placeholder="Suche..."
                    class="mb-1.5 w-full"
                  />
                  <div class="flex flex-col gap-0.5">
                    <Button
                      v-for="status in statusOptions"
                      :key="status"
                      :label="status"
                      text
                      severity="secondary"
                      class="!justify-start"
                      :class="{ 'bg-slate-100': status === 'Bezahlt' }"
                      @click="selectedStatus = status"
                    />
                  </div>
                </div>
              </div>

              <div class="flex flex-col gap-2">
                <span class="text-sm">Zustand</span>
                <div class="flex items-center gap-3">
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="activeOnly" input-id="active" binary />
                    <label for="active" class="text-sm">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="archiveOnly" input-id="archive" binary />
                    <label for="archive" class="text-sm">Archiv</label>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div class="flex w-48 flex-col gap-3">
            <Button
              label="Exportieren"
              icon="pi pi-chevron-down"
              icon-pos="right"
              severity="success"
              class="w-fit"
            />
            <div class="rounded-md border border-slate-200 bg-white p-2.5">
              <div class="flex flex-col gap-2">
                <Button label="Als CSV exportieren" severity="secondary" outlined class="w-full" />
                <Button label="Als PDF exportieren" severity="secondary" outlined class="w-full" />
              </div>
            </div>
          </div>
        </div>

        <section class="w-full">
          <DataTable
            :value="orders"
            show-gridlines
            class="w-full"
            :pt="{ table: { class: 'min-w-[1008px]' } }"
          >
            <Column field="product" header="Produkt" header-class="w-[384px]" />
            <Column field="status" header="Status" header-class="w-40">
              <template #body="{ data }">
                <Tag :value="data.status" :severity="data.severity" />
              </template>
            </Column>
            <Column field="date" header="Bestelldatum" header-class="w-[124px]" />
            <Column field="total" header="Summe" header-class="w-[124px]" />
            <Column field="quantity" header="Stück" header-class="w-[124px]" />
            <Column header="Aktionen" header-class="w-[92px]">
              <template #body>
                <Button icon="pi pi-ellipsis-h" severity="secondary" text rounded />
              </template>
            </Column>
          </DataTable>
        </section>

        <div class="ml-auto w-[200px] rounded-md border border-slate-200 bg-white p-2.5">
          <div class="flex flex-col gap-2">
            <Button
              label="Bearbeiten"
              icon="pi pi-pencil"
              severity="secondary"
              outlined
              class="w-full !justify-start"
            />
            <Button
              label="Status aktualisieren"
              icon="pi pi-refresh"
              severity="secondary"
              outlined
              class="w-full !justify-start"
            />
            <Button
              label="Löschen"
              icon="pi pi-trash"
              severity="secondary"
              outlined
              class="w-full !justify-start"
            />
          </div>
        </div>
      </div>
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
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const period = ref<Date | Date[] | null>(null)
const selectedStatus = ref<string | null>(null)
const statusSearch = ref('')
const activeOnly = ref(true)
const archiveOnly = ref(false)

const statusOptions = ['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']

const metrics = ref([
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
  { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' }
])

const orders = ref([
  {
    product: 'Widget Pro',
    status: 'Angekommen',
    severity: 'success',
    date: '15.04.2026',
    total: '12.400 €',
    quantity: '312'
  },
  {
    product: 'Gadget Mini',
    status: 'In Bearbeitung',
    severity: 'warn',
    date: '24.04.2026',
    total: '8.920 €',
    quantity: '485'
  },
  {
    product: 'Sensor X1',
    status: 'Versendet',
    severity: 'secondary',
    date: '09.05.2026',
    total: '6.100 €',
    quantity: '150'
  },
  {
    product: 'System V5',
    status: 'Bezahlt',
    severity: 'info',
    date: '12.06.2026',
    total: '10.250 €',
    quantity: '2'
  }
])
</script>