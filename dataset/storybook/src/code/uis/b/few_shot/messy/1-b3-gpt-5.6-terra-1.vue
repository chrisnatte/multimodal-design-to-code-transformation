<template>
  <div class="flex min-h-screen bg-white text-sm">
    <aside class="w-64 shrink-0 bg-slate-100 p-6">
      <div class="flex flex-col gap-6">
        <span class="text-base">Navigation</span>
        <nav class="flex flex-col gap-4">
          <Button label="Dashboard" icon="pi pi-home" severity="success" class="!justify-start" />
          <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined class="!justify-start" />
          <Button label="Berichte" icon="pi pi-chart-bar" severity="secondary" outlined class="!justify-start" />
          <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" outlined class="!justify-start" />
        </nav>
      </div>
    </aside>

    <main class="flex w-full flex-col gap-6 p-8">
      <header>
        <h1 class="text-3xl font-bold">Dashboard</h1>
        <p class="mt-1 text-base">Bekomme eine Übersicht über die Projekte.</p>
      </header>

      <section class="flex flex-wrap gap-5">
        <Card
          v-for="metric in metrics"
          :key="metric.label"
          class="w-48 bg-slate-100"
          :pt="{ body: 'p-0', content: 'flex flex-col gap-2 !p-[17px]' }"
        >
          <template #content>
            <span class="text-2xl font-medium">{{ metric.value }}</span>
            <span>{{ metric.label }}</span>
            <Tag :value="metric.change" :severity="metric.severity" class="w-fit" />
          </template>
        </Card>
      </section>

      <section class="flex flex-wrap items-start gap-4">
        <Card class="w-full max-w-[693px] bg-slate-100" :pt="{ body: 'p-0', content: '!p-4' }">
          <template #title>
            <div class="flex items-center justify-between border-b border-slate-200 px-4 py-3 text-sm font-semibold">
              <span>Filter</span>
              <Button icon="pi pi-chevron-up" text rounded severity="secondary" aria-label="Filter einklappen" />
            </div>
          </template>
          <template #content>
            <div class="flex flex-wrap gap-5">
              <div class="flex w-[268px] flex-col gap-2">
                <label for="period">Zeitraum</label>
                <DatePicker
                  v-model="period"
                  input-id="period"
                  selection-mode="range"
                  placeholder="Zeitraum wählen"
                  show-icon
                  class="w-[216px]"
                  :pt="{ panel: 'static w-[268px]' }"
                />
              </div>

              <div class="flex w-[216px] flex-col gap-2">
                <label for="status">Status</label>
                <Select
                  v-model="selectedStatus"
                  input-id="status"
                  :options="statuses"
                  placeholder="Status auswählen"
                  class="w-[216px]"
                />
                <Card class="w-[216px]" :pt="{ body: 'p-0', content: 'flex flex-col gap-1 !p-2.5' }">
                  <template #content>
                    <InputText v-model="statusSearch" placeholder="Suche..." class="w-full" />
                    <Button
                      v-for="status in statuses"
                      :key="status"
                      :label="status"
                      text
                      severity="secondary"
                      class="!justify-start"
                      :class="{ 'bg-slate-100': status === 'Bezahlt' }"
                      @click="selectedStatus = status"
                    />
                  </template>
                </Card>
              </div>

              <div class="flex flex-col gap-2">
                <span>Zustand</span>
                <div class="flex gap-4">
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="activeOnly" input-id="active" binary />
                    <label for="active">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="archived" input-id="archived" binary />
                    <label for="archived">Archiv</label>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Card>

        <div class="flex w-48 flex-col gap-3">
          <Button label="Exportieren" icon="pi pi-download" icon-pos="right" severity="success" />
          <Card :pt="{ body: 'p-0', content: 'flex flex-col gap-2 !p-2.5' }">
            <template #content>
              <Button label="Als CSV exportieren" severity="secondary" outlined class="w-full" />
              <Button label="Als PDF exportieren" severity="secondary" outlined class="w-full" />
            </template>
          </Card>
        </div>
      </section>

      <section class="flex flex-col gap-2">
        <DataTable :value="orders" show-gridlines table-style="min-width: 1008px">
          <Column field="product" header="Produkt" header-style="width: 384px" />
          <Column field="status" header="Status" header-style="width: 160px">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="statusSeverity(data.status)" />
            </template>
          </Column>
          <Column field="date" header="Bestelldatum" header-style="width: 124px" />
          <Column field="sum" header="Summe" header-style="width: 124px" />
          <Column field="quantity" header="Stück" header-style="width: 124px" />
          <Column header="Aktionen" header-style="width: 92px">
            <template #body>
              <Button icon="pi pi-ellipsis-h" text rounded severity="secondary" aria-label="Aktionen" />
            </template>
          </Column>
        </DataTable>

        <div class="ml-auto w-[200px]">
          <Card :pt="{ body: 'p-0', content: 'flex flex-col gap-2 !p-2.5' }">
            <template #content>
              <Button label="Bearbeiten" icon="pi pi-pencil" severity="secondary" outlined class="w-full !justify-start" />
              <Button label="Status aktualisieren" icon="pi pi-refresh" severity="secondary" outlined class="w-full !justify-start" />
              <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="w-full !justify-start" />
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
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const period = ref<Date[] | null>(null)
const selectedStatus = ref<string | null>(null)
const statusSearch = ref('')
const activeOnly = ref(true)
const archived = ref(false)

const statuses = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])

const metrics = ref([
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
  { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' }
])

const orders = ref([
  { product: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', sum: '12.400 €', quantity: '312' },
  { product: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', sum: '8.920 €', quantity: '485' },
  { product: 'Sensor X1', status: 'Versendet', date: '09.05.2026', sum: '6.100 €', quantity: '150' },
  { product: 'System V5', status: 'Bezahlt', date: '12.06.2026', sum: '10.250 €', quantity: '2' }
])

function statusSeverity(status: string) {
  if (status === 'Angekommen') return 'success'
  if (status === 'In Bearbeitung') return 'warn'
  if (status === 'Bezahlt') return 'info'
  return 'secondary'
}
</script>