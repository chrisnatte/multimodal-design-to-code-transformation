<template>
  <div class="min-h-screen bg-white font-sans text-slate-700">
    <div class="flex min-h-screen">
      <aside class="w-[182px] shrink-0 bg-slate-100 px-4 py-4">
        <nav class="flex flex-col gap-4">
          <span class="text-xs font-medium">Navigation</span>
          <div class="flex flex-col gap-3">
            <Button label="Dashboard" icon="pi pi-th-large" size="small" class="!h-6 !justify-start !border-emerald-200 !bg-emerald-100 !px-2 !text-[10px] !text-emerald-600" />
            <Button label="Kunden" icon="pi pi-users" size="small" outlined class="!h-6 !justify-start !border-slate-400 !px-2 !text-[10px] !text-slate-500" />
            <Button label="Berichte" icon="pi pi-file" size="small" outlined class="!h-6 !justify-start !border-slate-400 !px-2 !text-[10px] !text-slate-500" />
            <Button label="Einstellungen" icon="pi pi-cog" size="small" outlined class="!h-6 !justify-start !border-slate-400 !px-2 !text-[10px] !text-slate-500" />
          </div>
        </nav>
      </aside>

      <main class="w-[740px] px-[22px] py-3">
        <header class="mb-3">
          <h1 class="text-2xl font-bold leading-7 text-slate-700">Dashboard</h1>
          <p class="mt-0.5 text-xs text-slate-500">Bekomme eine Übersicht über die Projekte.</p>
        </header>

        <section class="mb-4 flex gap-3">
          <Card v-for="metric in metrics" :key="metric.label" class="!w-[139px] !bg-slate-100 !shadow-none">
            <template #content>
              <div class="-m-1 flex h-[67px] flex-col justify-between">
                <div>
                  <div class="text-lg font-medium leading-5 text-slate-700">{{ metric.value }}</div>
                  <div class="mt-1 text-[9px] text-slate-500">{{ metric.label }}</div>
                </div>
                <Tag :value="metric.change" :severity="metric.severity" class="!w-fit !px-1 !py-0 !text-[8px]" />
              </div>
            </template>
          </Card>
        </section>

        <section class="relative mb-4 flex gap-3">
          <div class="w-[494px] rounded-lg bg-slate-100">
            <div class="flex h-7 items-center justify-between border-b border-slate-200 px-3">
              <span class="text-[10px] font-semibold">Filter</span>
              <i class="pi pi-chevron-down text-[10px]"></i>
            </div>
            <div class="flex h-[252px] gap-3 p-3">
              <div class="w-[193px]">
                <label class="mb-1 block text-[10px]">Zeitraum</label>
                <DatePicker v-model="dateRange" selectionMode="range" placeholder="Zeitraum wählen" :manualInput="false" class="w-full" inputClass="!h-6 !text-[10px]" />
                <DatePicker v-model="calendarDate" inline class="mt-1 w-full scale-[0.79] origin-top-left" />
              </div>

              <div class="w-[155px]">
                <label class="mb-1 block text-[10px]">Status</label>
                <Select v-model="selectedStatus" :options="statuses" optionLabel="label" placeholder="Status auswählen" class="w-full" size="small" />
                <div class="mt-1 rounded border border-slate-300 bg-white p-1 shadow-md">
                  <IconField>
                    <InputText v-model="searchStatus" placeholder="Suche..." class="!h-6 !w-full !text-[10px]" />
                    <InputIcon class="pi pi-search !text-[10px]" />
                  </IconField>
                  <Listbox v-model="selectedStatus" :options="statuses" optionLabel="label" class="mt-1 !border-0 !text-[10px]" listStyle="max-height: 96px" />
                </div>
              </div>

              <div class="w-[100px]">
                <label class="mb-1 block text-[10px]">Zustand</label>
                <div class="mt-2 flex gap-2">
                  <div class="flex items-center gap-1">
                    <Checkbox v-model="active" inputId="active" binary />
                    <label for="active" class="text-[10px]">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-1">
                    <Checkbox v-model="archived" inputId="archived" binary />
                    <label for="archived" class="text-[10px]">Archiv</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <Button label="Exportieren" icon="pi pi-file-export" iconPos="right" size="small" class="!h-6 !bg-emerald-500 !px-2 !text-[9px] !border-emerald-500" />
            <Card class="!w-[137px] !shadow-sm">
              <template #content>
                <div class="-m-1 flex flex-col gap-1">
                  <Button label="Als CSV exportieren" outlined size="small" class="!h-6 !justify-start !text-[9px] !text-slate-500 !border-slate-200" />
                  <Button label="Als PDF exportieren" outlined size="small" class="!h-6 !justify-start !text-[9px] !text-slate-500 !border-slate-200" />
                </div>
              </template>
            </Card>
          </div>
        </section>

        <section class="relative">
          <DataTable :value="orders" class="text-[10px]" tableStyle="min-width: 718px">
            <Column field="product" header="Produkt" style="width: 38%"></Column>
            <Column header="Status" style="width: 16%">
              <template #body="{ data }">
                <Tag :value="data.status" :severity="data.severity" class="!px-1 !py-0 !text-[8px]" />
              </template>
            </Column>
            <Column field="date" header="Bestelldatum" style="width: 14%"></Column>
            <Column field="sum" header="Summe" style="width: 12%"></Column>
            <Column field="quantity" header="Stück" style="width: 10%"></Column>
            <Column header="Aktionen" style="width: 10%">
              <template #body="{ index }">
                <Button icon="pi pi-ellipsis-h" text rounded size="small" class="!h-5 !w-6 !text-slate-600" @click="actionMenuVisible = index === 3 ? !actionMenuVisible : false" />
              </template>
            </Column>
          </DataTable>

          <Card v-if="actionMenuVisible" class="absolute right-[-97px] top-[147px] z-10 !w-[142px] !shadow-md">
            <template #content>
              <div class="-m-1 flex flex-col gap-1">
                <Button label="Bearbeiten" icon="pi pi-pencil" outlined size="small" class="!h-6 !justify-start !text-[9px] !text-slate-500 !border-slate-200" />
                <Button label="Status aktualisieren" icon="pi pi-list" outlined size="small" class="!h-6 !justify-start !text-[9px] !text-slate-500 !border-slate-200" />
                <Button label="Löschen" icon="pi pi-trash" outlined size="small" class="!h-6 !justify-start !text-[9px] !text-slate-500 !border-slate-200" />
              </div>
            </template>
          </Card>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import DatePicker from 'primevue/datepicker'
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import Listbox from 'primevue/listbox'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const dateRange = ref(null)
const calendarDate = ref(new Date(2024, 6, 1))
const selectedStatus = ref(null)
const searchStatus = ref('')
const active = ref(true)
const archived = ref(false)
const actionMenuVisible = ref(true)

const metrics = [
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
  { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' }
]

const statuses = [
  { label: 'Bezahlt' },
  { label: 'In Bearbeitung' },
  { label: 'Versendet' },
  { label: 'Angekommen' }
]

const orders = [
  { product: 'Widget Pro', status: 'Angekommen', severity: 'success', date: '15.04.2026', sum: '12.400 €', quantity: '312' },
  { product: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warn', date: '24.04.2026', sum: '8.920 €', quantity: '485' },
  { product: 'Sensor X1', status: 'Versendet', severity: 'secondary', date: '09.05.2026', sum: '6.100 €', quantity: '150' },
  { product: 'System V5', status: 'Bezahlt', severity: 'info', date: '12.06.2026', sum: '10.250 €', quantity: '2' }
]
</script>