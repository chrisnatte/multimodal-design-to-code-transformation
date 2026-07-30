<template>
  <div class="min-h-screen min-w-[1280px] bg-white font-[Inter] text-slate-700">
    <aside class="fixed inset-y-0 left-0 w-64 bg-slate-100 px-6 py-6">
      <nav class="flex flex-col">
        <span class="mb-6 text-base">Navigation</span>
        <div class="flex flex-col gap-4">
          <Button label="Dashboard" icon="pi pi-home" class="w-full !justify-start !border-emerald-200 !bg-emerald-100 !text-slate-700" />
          <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined class="w-full !justify-start" />
          <Button label="Berichte" icon="pi pi-chart-bar" severity="secondary" outlined class="w-full !justify-start" />
          <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" outlined class="w-full !justify-start" />
        </div>
      </nav>
    </aside>

    <main class="ml-64 px-8 py-4">
      <div class="mx-auto w-[1008px]">
        <header class="mb-6">
          <h1 class="m-0 text-[32px] font-bold leading-tight text-slate-800">Dashboard</h1>
          <p class="mt-1 text-base">Bekomme eine Übersicht über die Projekte.</p>
        </header>

        <section class="mb-6 flex gap-5">
          <div
            v-for="metric in metrics"
            :key="metric.label"
            class="h-[117px] w-48 rounded-xl bg-slate-100 p-[17px]"
          >
            <div class="text-2xl font-medium leading-7 text-slate-800">{{ metric.value }}</div>
            <div class="mt-2 text-sm">{{ metric.label }}</div>
            <Tag :value="metric.change" :class="['mt-2 !px-2 !py-0.5 !text-[12px] !font-bold', metric.tone]" />
          </div>
        </section>

        <section class="mb-5 flex items-start gap-4">
          <div class="w-[693px] overflow-hidden rounded-lg bg-slate-100">
            <div class="flex h-[46px] items-center justify-between border border-slate-200 px-4">
              <span class="text-sm font-semibold text-slate-800">Filter</span>
              <i class="pi pi-chevron-up text-sm"></i>
            </div>

            <div class="flex gap-5 p-4 pt-0">
              <div class="w-[268px]">
                <label class="mb-2 block text-sm">Zeitraum</label>
                <DatePicker
                  v-model="dateRange"
                  selection-mode="range"
                  placeholder="Zeitraum wählen"
                  class="w-[216px]"
                  input-class="!h-[33px] !border-emerald-500 !text-sm"
                />
                <DatePicker
                  v-model="dateRange"
                  selection-mode="range"
                  inline
                  class="mt-1 w-[268px] border border-slate-200 bg-white"
                />
              </div>

              <div class="w-[216px]">
                <label class="mb-2 block text-sm">Status</label>
                <Select
                  v-model="status"
                  :options="statusOptions"
                  option-label="label"
                  placeholder="Status auswählen"
                  class="w-[216px]"
                />
                <div class="mt-1 rounded-md border border-slate-200 bg-white p-2.5">
                  <div class="relative">
                    <InputText v-model="statusSearch" placeholder="Suche..." class="h-[33px] w-full !text-sm" />
                    <i class="pi pi-search absolute right-3 top-2.5 text-sm text-slate-500"></i>
                  </div>
                  <div class="mt-1 flex flex-col">
                    <Button
                      v-for="option in statusOptions"
                      :key="option.label"
                      :label="option.label"
                      text
                      class="h-[31px] !justify-start !px-2.5 !text-sm !text-slate-700 first:!bg-slate-100"
                      @click="status = option"
                    />
                  </div>
                </div>
              </div>

              <div class="w-[137px]">
                <label class="mb-2 block text-sm">Zustand</label>
                <div class="mt-2 flex gap-3">
                  <div class="flex items-center gap-1.5">
                    <Checkbox v-model="active" binary input-id="active" />
                    <label for="active" class="text-sm">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <Checkbox v-model="archived" binary input-id="archived" />
                    <label for="archived" class="text-sm">Archiv</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-48">
            <Button label="Exportieren" icon="pi pi-download" icon-pos="right" class="h-[33px] !bg-emerald-500 !text-sm !border-emerald-500" />
            <div class="mt-3 rounded-md border border-slate-200 bg-white p-2.5">
              <div class="flex flex-col gap-2">
                <Button label="Als CSV exportieren" outlined severity="secondary" class="h-[33px] w-full !text-sm" />
                <Button label="Als PDF exportieren" outlined severity="secondary" class="h-[33px] w-full !text-sm" />
              </div>
            </div>
          </div>
        </section>

        <section class="relative">
          <DataTable
            :value="orders"
            class="w-full text-sm"
            table-style="min-width: 1008px"
            :pt="{
              headerCell: { class: '!bg-white !border-slate-200 !px-3.5 !py-[10px] !font-semibold !text-slate-800' },
              bodyCell: { class: '!h-[50px] !border-slate-200 !px-3.5 !py-2 !text-sm' }
            }"
          >
            <Column field="product" header="Produkt" header-style="width: 384px" body-style="width: 384px" />
            <Column header="Status" header-style="width: 160px" body-style="width: 160px">
              <template #body="{ data }">
                <Tag :value="data.status" :class="['!px-2 !py-0.5 !text-[12px] !font-bold', data.statusClass]" />
              </template>
            </Column>
            <Column field="date" header="Bestelldatum" header-style="width: 124px" body-style="width: 124px" />
            <Column field="total" header="Summe" header-style="width: 124px" body-style="width: 124px" />
            <Column field="quantity" header="Stück" header-style="width: 124px" body-style="width: 124px" />
            <Column header="Aktionen" header-style="width: 92px" body-style="width: 92px">
              <template #body>
                <Button icon="pi pi-ellipsis-h" text rounded class="!h-7 !w-9" />
              </template>
            </Column>
          </DataTable>

          <div class="absolute -right-[137px] top-[186px] w-[200px] rounded-md border border-slate-200 bg-white p-2.5 shadow-sm">
            <div class="flex flex-col gap-2">
              <Button label="Bearbeiten" icon="pi pi-pencil" severity="secondary" outlined class="h-[33px] w-full !justify-start !text-sm" />
              <Button label="Status aktualisieren" icon="pi pi-refresh" severity="secondary" outlined class="h-[33px] w-full !justify-start !text-sm" />
              <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="h-[33px] w-full !justify-start !text-sm" />
            </div>
          </div>
        </section>
      </div>
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

const dateRange = ref(null)
const status = ref(null)
const statusSearch = ref('')
const active = ref(true)
const archived = ref(false)

const metrics = [
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', tone: '!bg-emerald-100 !text-slate-700' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', tone: '!bg-emerald-100 !text-slate-700' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', tone: '!bg-orange-100 !text-slate-700' },
  { value: '89', label: 'Retouren', change: '+23 %', tone: '!bg-red-100 !text-slate-700' }
]

const statusOptions = [
  { label: 'Bezahlt' },
  { label: 'In Bearbeitung' },
  { label: 'Versendet' },
  { label: 'Angekommen' }
]

const orders = [
  { product: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', total: '12.400 €', quantity: '312', statusClass: '!bg-emerald-100 !text-slate-700' },
  { product: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', total: '8.920 €', quantity: '485', statusClass: '!bg-orange-100 !text-slate-700' },
  { product: 'Sensor X1', status: 'Versendet', date: '09.05.2026', total: '6.100 €', quantity: '150', statusClass: '!bg-slate-100 !text-slate-700' },
  { product: 'System V5', status: 'Bezahlt', date: '12.06.2026', total: '10.250 €', quantity: '2', statusClass: '!bg-sky-100 !text-slate-700' }
]
</script>