<template>
  <div class="min-h-screen bg-white font-sans text-slate-900">
    <aside class="fixed inset-y-0 left-0 w-64 bg-slate-100 px-6 py-6">
      <div class="flex flex-col gap-6">
        <span class="text-base">Navigation</span>
        <nav class="flex flex-col gap-4">
          <Button label="Dashboard" icon="pi pi-th-large" severity="success" class="justify-start" />
          <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined class="justify-start" />
          <Button label="Berichte" icon="pi pi-chart-bar" severity="secondary" outlined class="justify-start" />
          <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" outlined class="justify-start" />
        </nav>
      </div>
    </aside>

    <main class="ml-64 min-h-screen px-8 py-4">
      <header class="mb-6">
        <h1 class="text-3xl font-bold">Dashboard</h1>
        <p class="mt-1 text-base">Bekomme eine Übersicht über die Projekte.</p>
      </header>

      <section class="mb-6 flex gap-5">
        <div
          v-for="metric in metrics"
          :key="metric.label"
          class="flex h-[117px] w-48 flex-col justify-between rounded-xl bg-slate-100 p-[17px]"
        >
          <div>
            <div class="text-2xl font-medium">{{ metric.value }}</div>
            <div class="mt-1 text-sm">{{ metric.label }}</div>
          </div>
          <Tag :value="metric.change" :class="metric.tagClass" class="w-fit text-xs font-bold" />
        </div>
      </section>

      <section class="mb-5 flex items-start gap-4">
        <div class="w-[693px] overflow-hidden rounded-lg bg-slate-100">
          <div class="flex items-center justify-between border-b border-slate-200 px-4 py-[13px]">
            <span class="text-sm font-semibold">Filter</span>
            <i class="pi pi-chevron-up text-sm" />
          </div>

          <div class="flex gap-5 p-4">
            <div class="w-[268px]">
              <label class="mb-2 block text-sm">Zeitraum</label>
              <DatePicker
                v-model="selectedDate"
                placeholder="Zeitraum wählen"
                class="w-[216px]"
                showIcon
                dateFormat="dd.mm.yy"
              />
              <DatePicker v-model="selectedDate" inline class="mt-1 w-[268px]" />
            </div>

            <div class="w-[216px]">
              <label class="mb-2 block text-sm">Status</label>
              <Select
                v-model="selectedStatus"
                :options="statusOptions"
                placeholder="Status auswählen"
                class="w-[216px]"
              />
              <div class="mt-1 rounded-md border border-slate-200 bg-white p-3">
                <InputText v-model="statusSearch" placeholder="Suche..." class="mb-2 w-full" />
                <div class="flex flex-col gap-1">
                  <Button
                    v-for="status in statusOptions"
                    :key="status"
                    :label="status"
                    text
                    severity="secondary"
                    class="justify-start"
                    :class="{ 'bg-slate-100': status === 'Bezahlt' }"
                    @click="selectedStatus = status"
                  />
                </div>
              </div>
            </div>

            <div class="w-[137px]">
              <span class="mb-2 block text-sm">Zustand</span>
              <div class="flex items-center gap-3 pt-2">
                <div class="flex items-center gap-2">
                  <Checkbox v-model="activeOnly" inputId="active" binary />
                  <label for="active" class="text-sm">Aktiv</label>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox v-model="archived" inputId="archived" binary />
                  <label for="archived" class="text-sm">Archiv</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="relative w-48">
          <Button label="Exportieren" icon="pi pi-download" iconPos="right" severity="success" @click="exportOpen = !exportOpen" />
          <div v-if="exportOpen" class="mt-3 rounded-md border border-slate-200 bg-white p-3 shadow-sm">
            <div class="flex flex-col gap-2">
              <Button label="Als CSV exportieren" severity="secondary" outlined class="justify-start" />
              <Button label="Als PDF exportieren" severity="secondary" outlined class="justify-start" />
            </div>
          </div>
        </div>
      </section>

      <section class="relative w-[1008px]">
        <DataTable :value="orders" showGridlines class="text-sm">
          <Column field="product" header="Produkt" headerClass="w-[384px]" />
          <Column header="Status" headerClass="w-[160px]">
            <template #body="{ data }">
              <Tag :value="data.status" :class="statusClass(data.status)" class="text-xs font-bold" />
            </template>
          </Column>
          <Column field="date" header="Bestelldatum" headerClass="w-[124px]" />
          <Column field="amount" header="Summe" headerClass="w-[124px]" />
          <Column field="quantity" header="Stück" headerClass="w-[124px]" />
          <Column header="Aktionen" headerClass="w-[92px]">
            <template #body="{ data }">
              <Button icon="pi pi-ellipsis-v" text rounded severity="secondary" @click="selectedOrder = data" />
            </template>
          </Column>
        </DataTable>

        <div
          v-if="selectedOrder"
          class="absolute -right-[137px] bottom-[-85px] z-10 w-[200px] rounded-md border border-slate-200 bg-white p-3 shadow-sm"
        >
          <div class="flex flex-col gap-2">
            <Button label="Bearbeiten" icon="pi pi-pencil" severity="secondary" outlined class="justify-start" />
            <Button label="Status aktualisieren" icon="pi pi-refresh" severity="secondary" outlined class="justify-start" />
            <Button label="Löschen" icon="pi pi-trash" severity="danger" outlined class="justify-start" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import DatePicker from 'primevue/datepicker'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const selectedDate = ref(new Date(2024, 6, 1))
const selectedStatus = ref(null)
const statusSearch = ref('')
const activeOnly = ref(true)
const archived = ref(false)
const exportOpen = ref(true)
const selectedOrder = ref(null)

const metrics = [
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', tagClass: 'bg-emerald-100 text-slate-900' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', tagClass: 'bg-emerald-100 text-slate-900' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', tagClass: 'bg-amber-100 text-slate-900' },
  { value: '89', label: 'Retouren', change: '+23 %', tagClass: 'bg-red-100 text-slate-900' }
]

const statusOptions = ['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']

const orders = ref([
  { product: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', amount: '12.400 €', quantity: '312' },
  { product: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', amount: '8.920 €', quantity: '485' },
  { product: 'Sensor X1', status: 'Versendet', date: '09.05.2026', amount: '6.100 €', quantity: '150' },
  { product: 'System V5', status: 'Bezahlt', date: '12.06.2026', amount: '10.250 €', quantity: '2' }
])

const statusClass = (status) => {
  const classes = {
    Angekommen: 'bg-emerald-100 text-slate-900',
    'In Bearbeitung': 'bg-amber-100 text-slate-900',
    Versendet: 'bg-slate-100 text-slate-900',
    Bezahlt: 'bg-sky-100 text-slate-900'
  }

  return classes[status]
}
</script>