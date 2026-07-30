<template>
  <div class="min-h-screen bg-white font-sans text-slate-900">
    <aside class="fixed inset-y-0 left-0 w-64 bg-slate-100 p-6">
      <div class="flex flex-col gap-6">
        <span class="text-base">Navigation</span>
        <nav class="flex flex-col gap-4">
          <Button label="Dashboard" icon="pi pi-home" class="!h-8 !justify-start !border-emerald-200 !bg-emerald-100 !text-slate-900" />
          <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined class="!h-8 !justify-start !border-slate-500 !text-slate-900" />
          <Button label="Berichte" icon="pi pi-chart-bar" severity="secondary" outlined class="!h-8 !justify-start !border-slate-500 !text-slate-900" />
          <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" outlined class="!h-8 !justify-start !border-slate-500 !text-slate-900" />
        </nav>
      </div>
    </aside>

    <main class="ml-64 min-h-screen px-8 py-4">
      <header class="mb-5">
        <h1 class="m-0 text-[32px] font-bold leading-tight">Dashboard</h1>
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
          <Tag :value="metric.change" :class="metric.changeClass" class="w-fit !px-2 !py-0.5 !text-xs !font-bold" />
        </div>
      </section>

      <section class="relative mb-5 flex w-[1008px] items-start gap-4">
        <div class="w-[693px] rounded-lg bg-slate-100">
          <div class="flex h-[46px] items-center justify-between border-b border-slate-200 px-4">
            <span class="text-sm font-semibold">Filter</span>
            <i class="pi pi-chevron-up text-sm"></i>
          </div>

          <div class="flex gap-5 px-4 pb-4 pt-0">
            <div class="w-[268px]">
              <label class="mb-2 block text-sm">Zeitraum</label>
              <DatePicker
                v-model="selectedPeriod"
                selection-mode="range"
                placeholder="Zeitraum wählen"
                class="w-[216px]"
                input-class="!h-[33px] !text-sm"
              />
              <div class="mt-0.5 rounded-md border border-slate-200 bg-white p-2.5">
                <DatePicker v-model="selectedDate" inline class="w-full" />
              </div>
            </div>

            <div class="w-[216px]">
              <label class="mb-2 block text-sm">Status</label>
              <Select
                v-model="selectedStatus"
                :options="statusOptions"
                placeholder="Status auswählen"
                class="w-[216px]"
                input-class="!h-[33px] !text-sm"
              />
              <div class="mt-0.5 rounded-md border border-slate-200 bg-white p-2.5">
                <span class="p-input-icon-right mb-1 block">
                  <InputText v-model="statusSearch" placeholder="Suche..." class="h-[33px] w-full text-sm" />
                  <i class="pi pi-search"></i>
                </span>
                <div class="flex flex-col gap-0.5">
                  <Button
                    v-for="status in statusOptions"
                    :key="status"
                    :label="status"
                    text
                    class="!h-[31px] !justify-start !px-2.5 !text-sm !font-normal !text-slate-900"
                    :class="{ '!bg-slate-100': status === 'Bezahlt' }"
                  />
                </div>
              </div>
            </div>

            <div class="w-[137px]">
              <label class="mb-2 block text-sm">Zustand</label>
              <div class="flex h-[49px] items-center gap-3">
                <div class="flex items-center gap-2">
                  <Checkbox v-model="activeState" binary input-id="active" />
                  <label for="active" class="text-sm">Aktiv</label>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox v-model="archivedState" binary input-id="archived" />
                  <label for="archived" class="text-sm">Archiv</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-48">
          <Button label="Exportieren" icon="pi pi-download" icon-pos="right" class="!h-[33px] !bg-emerald-500 !px-3 !text-sm !font-medium !border-emerald-500" />
          <div class="mt-3 rounded-md border border-slate-200 bg-white p-2.5">
            <div class="flex flex-col gap-2">
              <Button label="Als CSV exportieren" severity="secondary" outlined class="!h-[33px] !justify-start !text-sm !font-medium !text-slate-900" />
              <Button label="Als PDF exportieren" severity="secondary" outlined class="!h-[33px] !justify-start !text-sm !font-medium !text-slate-900" />
            </div>
          </div>
        </div>
      </section>

      <section class="relative w-[1008px]">
        <DataTable :value="orders" show-gridlines class="text-sm">
          <Column field="product" header="Produkt" header-class="!w-[384px]" body-class="!w-[384px]" />
          <Column header="Status" header-class="!w-[160px]" body-class="!w-[160px]">
            <template #body="{ data }">
              <Tag :value="data.status" class="!rounded-md !px-2 !py-0.5 !text-xs !font-bold" :class="data.statusClass" />
            </template>
          </Column>
          <Column field="date" header="Bestelldatum" header-class="!w-[124px]" body-class="!w-[124px]" />
          <Column field="sum" header="Summe" header-class="!w-[124px]" body-class="!w-[124px]" />
          <Column field="units" header="Stück" header-class="!w-[124px]" body-class="!w-[124px]" />
          <Column header="Aktionen" header-class="!w-[92px]" body-class="!w-[92px]">
            <template #body>
              <Button icon="pi pi-ellipsis-h" text rounded class="!h-7 !w-9 !text-slate-700" />
            </template>
          </Column>
        </DataTable>

        <div class="absolute right-[-137px] top-[186px] w-[200px] rounded-md border border-slate-200 bg-white p-2.5">
          <div class="flex flex-col gap-2">
            <Button label="Bearbeiten" icon="pi pi-pencil" severity="secondary" outlined class="!h-[33px] !justify-start !text-sm !font-medium !text-slate-900" />
            <Button label="Status aktualisieren" icon="pi pi-sync" severity="secondary" outlined class="!h-[33px] !justify-start !text-sm !font-medium !text-slate-900" />
            <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="!h-[33px] !justify-start !text-sm !font-medium !text-slate-900" />
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

const selectedPeriod = ref(null)
const selectedDate = ref(new Date(2024, 6, 1))
const selectedStatus = ref(null)
const statusSearch = ref('')
const activeState = ref(true)
const archivedState = ref(false)

const statusOptions = ['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']

const metrics = [
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', changeClass: '!bg-emerald-100 !text-slate-900' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', changeClass: '!bg-emerald-100 !text-slate-900' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', changeClass: '!bg-amber-100 !text-slate-900' },
  { value: '89', label: 'Retouren', change: '+23 %', changeClass: '!bg-red-100 !text-slate-900' }
]

const orders = [
  { product: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', sum: '12.400 €', units: '312', statusClass: '!bg-emerald-100 !text-slate-900' },
  { product: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', sum: '8.920 €', units: '485', statusClass: '!bg-amber-100 !text-slate-900' },
  { product: 'Sensor X1', status: 'Versendet', date: '09.05.2026', sum: '6.100 €', units: '150', statusClass: '!bg-slate-100 !text-slate-900' },
  { product: 'System V5', status: 'Bezahlt', date: '12.06.2026', sum: '10.250 €', units: '2', statusClass: '!bg-sky-100 !text-slate-900' }
]
</script>