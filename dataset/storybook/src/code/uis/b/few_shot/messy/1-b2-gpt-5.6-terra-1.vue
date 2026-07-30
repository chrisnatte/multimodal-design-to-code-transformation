<template>
  <div class="flex min-h-screen bg-white text-sm">
    <aside class="w-64 shrink-0 bg-slate-50 p-6">
      <div class="flex flex-col gap-6">
        <span class="text-base">Navigation</span>
        <nav class="flex flex-col gap-4">
          <Button
            label="Dashboard"
            icon="pi pi-home"
            severity="success"
            class="!justify-start"
            @click="activeNavigation = 'Dashboard'"
          />
          <Button
            label="Kunden"
            icon="pi pi-users"
            severity="secondary"
            variant="outlined"
            class="!justify-start"
            @click="activeNavigation = 'Kunden'"
          />
          <Button
            label="Berichte"
            icon="pi pi-chart-bar"
            severity="secondary"
            variant="outlined"
            class="!justify-start"
            @click="activeNavigation = 'Berichte'"
          />
          <Button
            label="Einstellungen"
            icon="pi pi-cog"
            severity="secondary"
            variant="outlined"
            class="!justify-start"
            @click="activeNavigation = 'Einstellungen'"
          />
        </nav>
      </div>
    </aside>

    <main class="flex min-w-0 flex-1 flex-col gap-6 p-8">
      <header class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Dashboard</h1>
        <span class="text-base">Bekomme eine Übersicht über die Projekte.</span>
      </header>

      <section class="flex flex-wrap gap-5">
        <Card
          v-for="metric in metrics"
          :key="metric.label"
          class="w-48 bg-slate-50"
          :pt="{ body: 'p-4', content: 'p-0' }"
        >
          <template #content>
            <div class="flex flex-col gap-6">
              <div class="flex flex-col gap-1">
                <span class="text-2xl font-medium">{{ metric.value }}</span>
                <span>{{ metric.label }}</span>
              </div>
              <Tag :value="metric.change" :severity="metric.severity" class="w-fit" />
            </div>
          </template>
        </Card>
      </section>

      <section class="flex flex-wrap items-start justify-between gap-4">
        <Card class="w-full max-w-[693px] bg-slate-50" :pt="{ body: 'p-0', content: 'p-4' }">
          <template #title>
            <div class="flex items-center justify-between border-b border-slate-200 px-4 py-3">
              <span class="text-sm font-semibold">Filter</span>
              <Button
                icon="pi pi-chevron-up"
                severity="secondary"
                variant="text"
                rounded
                size="small"
                aria-label="Filter einklappen"
              />
            </div>
          </template>
          <template #content>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-[268px_216px_137px]">
              <div class="flex flex-col gap-2">
                <label for="period">Zeitraum</label>
                <DatePicker
                  v-model="period"
                  input-id="period"
                  selection-mode="range"
                  placeholder="Zeitraum wählen"
                  date-format="dd.mm.yy"
                  show-icon
                  fluid
                />
                <DatePicker
                  v-model="period"
                  inline
                  selection-mode="range"
                  view-date="2024-01-01"
                  class="border border-slate-200"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label for="status">Status</label>
                <Select
                  v-model="selectedStatus"
                  input-id="status"
                  :options="statusOptions"
                  placeholder="Status auswählen"
                  fluid
                />
                <Card class="border border-slate-200" :pt="{ body: 'p-2', content: 'p-0' }">
                  <template #content>
                    <div class="flex flex-col gap-1">
                      <InputText v-model="statusSearch" placeholder="Suche..." class="w-full" />
                      <Button
                        v-for="status in statusOptions"
                        :key="status"
                        :label="status"
                        severity="secondary"
                        variant="text"
                        class="!justify-start"
                        :class="{ 'bg-slate-50': status === 'Bezahlt' }"
                        @click="selectedStatus = status"
                      />
                    </div>
                  </template>
                </Card>
              </div>

              <div class="flex flex-col gap-2">
                <span>Zustand</span>
                <div class="flex items-center gap-3">
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="activeOnly" input-id="active" binary />
                    <label for="active">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="archived" input-id="archive" binary />
                    <label for="archive">Archiv</label>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Card>

        <div class="flex w-48 flex-col gap-3">
          <Button
            label="Exportieren"
            icon="pi pi-download"
            icon-pos="right"
            severity="success"
            @click="exportMenuVisible = !exportMenuVisible"
          />
          <Card v-if="exportMenuVisible" class="border border-slate-200" :pt="{ body: 'p-2', content: 'p-0' }">
            <template #content>
              <div class="flex flex-col gap-2">
                <Button label="Als CSV exportieren" severity="secondary" variant="outlined" fluid />
                <Button label="Als PDF exportieren" severity="secondary" variant="outlined" fluid />
              </div>
            </template>
          </Card>
        </div>
      </section>

      <section class="flex items-start gap-4">
        <DataTable
          :value="orders"
          class="w-full max-w-[1008px]"
          table-style="min-width: 1008px"
          :pt="{
            headerCell: 'border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold',
            bodyCell: 'border border-slate-200 px-3.5 py-2.5',
          }"
        >
          <Column field="product" header="Produkt" style="width: 384px" />
          <Column header="Status" style="width: 160px">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="data.severity" />
            </template>
          </Column>
          <Column field="date" header="Bestelldatum" style="width: 124px" />
          <Column field="total" header="Summe" style="width: 124px" />
          <Column field="quantity" header="Stück" style="width: 124px" />
          <Column header="Aktionen" style="width: 92px">
            <template #body="{ data }">
              <div class="flex justify-center">
                <Button
                  icon="pi pi-ellipsis-h"
                  severity="secondary"
                  variant="text"
                  aria-label="Aktionen"
                  @click="selectedOrder = data"
                />
              </div>
            </template>
          </Column>
        </DataTable>

        <Card
          v-if="selectedOrder"
          class="w-50 shrink-0 border border-slate-200"
          :pt="{ body: 'p-2.5', content: 'p-0' }"
        >
          <template #content>
            <div class="flex flex-col gap-2">
              <Button
                label="Bearbeiten"
                icon="pi pi-pencil"
                severity="secondary"
                variant="outlined"
                class="!justify-start"
                fluid
              />
              <Button
                label="Status aktualisieren"
                icon="pi pi-refresh"
                severity="secondary"
                variant="outlined"
                class="!justify-start"
                fluid
              />
              <Button
                label="Löschen"
                icon="pi pi-trash"
                severity="secondary"
                variant="outlined"
                class="!justify-start"
                fluid
              />
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

const activeNavigation = ref('Dashboard')
const period = ref<[Date, Date] | null>(null)
const selectedStatus = ref<string | null>(null)
const statusSearch = ref('')
const activeOnly = ref(true)
const archived = ref(false)
const exportMenuVisible = ref(true)

const metrics = [
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
  { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' },
]

const statusOptions = ['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']

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

const selectedOrder = ref(orders.value[3])
</script>