<template>
  <div class="flex min-h-screen bg-white font-sans text-slate-600">
    <aside class="w-44 shrink-0 bg-slate-100 px-4 py-4">
      <div class="flex flex-col gap-4">
        <span class="text-xs text-slate-600">Navigation</span>
        <nav class="flex flex-col gap-3">
          <Button label="Dashboard" icon="pi pi-th-large" size="small" class="!justify-start !border-emerald-200 !bg-emerald-100 !text-emerald-600" />
          <Button label="Kunden" icon="pi pi-users" size="small" outlined severity="secondary" class="!justify-start" />
          <Button label="Berichte" icon="pi pi-file" size="small" outlined severity="secondary" class="!justify-start" />
          <Button label="Einstellungen" icon="pi pi-cog" size="small" outlined severity="secondary" class="!justify-start" />
        </nav>
      </div>
    </aside>

    <main class="w-full max-w-5xl px-5 py-3">
      <header class="mb-3 flex flex-col gap-0">
        <h1 class="text-2xl font-bold leading-tight text-slate-700">Dashboard</h1>
        <p class="text-xs text-slate-500">Bekomme eine Übersicht über die Projekte.</p>
      </header>

      <section class="mb-4 flex gap-3">
        <div v-for="metric in metrics" :key="metric.label" class="flex h-[85px] w-[138px] flex-col gap-1 rounded-lg bg-slate-100 p-3">
          <span class="text-lg font-medium leading-none text-slate-700">{{ metric.value }}</span>
          <span class="text-[10px] text-slate-500">{{ metric.label }}</span>
          <Tag :value="metric.change" :severity="metric.severity" class="w-fit !px-1 !py-0 !text-[9px]" />
        </div>
      </section>

      <section class="mb-4 flex items-start gap-3">
        <div class="w-[494px] rounded-lg bg-slate-100">
          <div class="flex h-8 items-center justify-between border-b border-slate-200 px-3">
            <span class="text-[10px] font-semibold text-slate-600">Filter</span>
            <i class="pi pi-chevron-down text-[10px]"></i>
          </div>

          <div class="flex gap-3 p-3 pt-2">
            <div class="w-48">
              <label class="mb-1 block text-[10px]">Zeitraum</label>
              <InputText v-model="periodText" placeholder="Zeitraum wählen" size="small" class="w-full !border-emerald-400 !text-[10px]" />
              <div class="mt-1 rounded-md border border-slate-200 bg-white p-1 shadow-md">
                <DatePicker v-model="selectedDate" inline class="!w-full" />
              </div>
            </div>

            <div class="w-40">
              <label class="mb-1 block text-[10px]">Status</label>
              <Select v-model="selectedStatus" :options="statuses" optionLabel="label" placeholder="Status auswählen" size="small" class="w-full !border-emerald-400 !text-[10px]" />
              <div class="mt-1 rounded-md border border-slate-200 bg-white py-1 shadow-md">
                <div class="px-2 pb-1">
                  <IconField>
                    <InputText v-model="statusSearch" placeholder="Suche..." size="small" class="w-full !text-[10px]" />
                    <InputIcon class="pi pi-search !text-[10px]" />
                  </IconField>
                </div>
                <div class="flex flex-col">
                  <button
                    v-for="status in statuses"
                    :key="status.label"
                    type="button"
                    class="px-2 py-1 text-left text-[10px] hover:bg-slate-100"
                    :class="{ 'bg-slate-100': status.label === 'Bezahlt' }"
                    @click="selectedStatus = status"
                  >
                    {{ status.label }}
                  </button>
                </div>
              </div>
            </div>

            <div class="w-[105px]">
              <label class="mb-2 block text-[10px]">Zustand</label>
              <div class="flex items-center gap-2 pt-1">
                <div class="flex items-center gap-1">
                  <Checkbox v-model="active" binary inputId="active" />
                  <label for="active" class="text-[10px]">Aktiv</label>
                </div>
                <div class="flex items-center gap-1">
                  <Checkbox v-model="archive" binary inputId="archive" />
                  <label for="archive" class="text-[10px]">Archiv</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <Button label="Exportieren" icon="pi pi-file-export" iconPos="right" severity="success" size="small" class="!text-[10px]" />
          <div class="w-[138px] rounded-md border border-slate-200 bg-white p-2 shadow-sm">
            <div class="flex flex-col gap-1">
              <Button label="Als CSV exportieren" severity="secondary" outlined size="small" class="!justify-start !text-[10px]" />
              <Button label="Als PDF exportieren" severity="secondary" outlined size="small" class="!justify-start !text-[10px]" />
            </div>
          </div>
        </div>
      </section>

      <section class="relative w-[718px]">
        <DataTable :value="orders" class="text-[10px]">
          <Column field="product" header="Produkt" headerClass="!py-2 !text-[10px]" bodyClass="!py-2">
            <template #body="{ data }">
              <span>{{ data.product }}</span>
            </template>
          </Column>
          <Column header="Status" headerClass="!py-2 !text-[10px]" bodyClass="!py-2">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="data.severity" class="!px-1 !py-0 !text-[9px]" />
            </template>
          </Column>
          <Column field="date" header="Bestelldatum" headerClass="!py-2 !text-[10px]" bodyClass="!py-2" />
          <Column field="amount" header="Summe" headerClass="!py-2 !text-[10px]" bodyClass="!py-2" />
          <Column field="quantity" header="Stück" headerClass="!py-2 !text-[10px]" bodyClass="!py-2" />
          <Column header="Aktionen" headerClass="!py-2 !text-[10px]" bodyClass="!py-1">
            <template #body="{ index }">
              <Button icon="pi pi-ellipsis-h" text severity="secondary" size="small" @click="activeMenu = index" />
            </template>
          </Column>
        </DataTable>

        <div v-if="activeMenu === 2" class="absolute right-[-98px] top-[146px] w-36 rounded-md border border-slate-200 bg-white p-2 shadow-md">
          <div class="flex flex-col gap-1">
            <Button label="Bearbeiten" icon="pi pi-pencil" severity="secondary" outlined size="small" class="!justify-start !text-[10px]" />
            <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" outlined size="small" class="!justify-start !text-[10px]" />
            <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined size="small" class="!justify-start !text-[10px]" />
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
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const periodText = ref('')
const selectedDate = ref(new Date(2024, 6, 1))
const selectedStatus = ref(null)
const statusSearch = ref('')
const active = ref(true)
const archive = ref(false)
const activeMenu = ref(2)

const statuses = [
  { label: 'Bezahlt' },
  { label: 'In Bearbeitung' },
  { label: 'Versendet' },
  { label: 'Angekommen' }
]

const metrics = [
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
  { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' }
]

const orders = [
  { product: 'Widget Pro', status: 'Angekommen', severity: 'success', date: '15.04.2026', amount: '12.400 €', quantity: '312' },
  { product: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warn', date: '24.04.2026', amount: '8.920 €', quantity: '485' },
  { product: 'Sensor X1', status: 'Versendet', severity: 'secondary', date: '09.05.2026', amount: '6.100 €', quantity: '150' },
  { product: 'System V5', status: 'Bezahlt', severity: 'info', date: '12.06.2026', amount: '10.250 €', quantity: '2' }
]
</script>