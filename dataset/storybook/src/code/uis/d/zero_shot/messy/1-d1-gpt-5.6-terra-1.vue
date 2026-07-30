<template>
  <div class="min-h-screen bg-white font-sans text-slate-700">
    <aside class="fixed inset-y-0 left-0 w-64 bg-slate-100 p-6">
      <div class="flex flex-col gap-6">
        <span class="text-base text-slate-700">Navigation</span>

        <nav class="flex flex-col gap-4">
          <Button label="Dashboard" icon="pi pi-th-large" class="h-8 justify-start border border-emerald-200 !bg-emerald-100 !px-3 !text-sm !font-medium !text-emerald-600" />
          <Button label="Kunden" icon="pi pi-users" outlined class="h-8 justify-start !border-slate-500 !px-3 !text-sm !font-medium !text-slate-500" />
          <Button label="Berichte" icon="pi pi-file" outlined class="h-8 justify-start !border-slate-500 !px-3 !text-sm !font-medium !text-slate-500" />
          <Button label="Einstellungen" icon="pi pi-cog" outlined class="h-8 justify-start !border-slate-500 !px-3 !text-sm !font-medium !text-slate-500" />
        </nav>
      </div>
    </aside>

    <main class="ml-64 px-8 py-4">
      <div class="w-[1144px]">
        <header class="mb-5">
          <h1 class="text-[32px] font-bold leading-[39px] text-slate-700">Dashboard</h1>
          <p class="text-base text-slate-500">Bekomme eine Übersicht über die Projekte.</p>
        </header>

        <section class="mb-6 flex gap-4">
          <div
            v-for="metric in metrics"
            :key="metric.label"
            class="h-[118px] w-48 rounded-xl bg-slate-100 p-[18px]"
          >
            <div class="text-2xl font-medium text-slate-700">{{ metric.value }}</div>
            <div class="mt-1 text-sm text-slate-500">{{ metric.label }}</div>
            <Tag :value="metric.change" :class="['mt-2 !px-2 !py-0.5 !text-xs !font-bold', metric.changeClass]" />
          </div>
        </section>

        <section class="mb-7 flex gap-4">
          <div class="h-[395px] w-[693px] rounded-lg bg-slate-100">
            <div class="flex h-[46px] items-center justify-between border-b border-slate-200 px-4">
              <span class="text-sm font-semibold">Filter</span>
              <i class="pi pi-chevron-down text-xs"></i>
            </div>

            <div class="flex gap-5 px-4 pt-3">
              <div class="w-[268px]">
                <label class="mb-1 block text-sm">Zeitraum</label>
                <InputText v-model="period" placeholder="Zeitraum wählen" class="h-[33px] w-[216px] !border-emerald-500 !px-3 !text-sm" />

                <div class="mt-0.5 w-[270px] rounded-md border border-slate-200 bg-white p-[10px] shadow-md">
                  <div class="flex h-8 items-center justify-between border-b border-slate-200 px-1 pb-2">
                    <Button icon="pi pi-chevron-left" text rounded class="!h-7 !w-7 !text-slate-500" />
                    <div class="flex gap-5 text-sm font-medium">
                      <span>July</span>
                      <span>2024</span>
                    </div>
                    <Button icon="pi pi-chevron-right" text rounded class="!h-7 !w-7 !text-slate-500" />
                  </div>

                  <div class="mt-2 grid grid-cols-7 text-center text-sm">
                    <span v-for="day in weekdays" :key="day" class="h-6 font-medium">{{ day }}</span>
                    <span
                      v-for="(day, index) in calendarDays"
                      :key="`${day}-${index}`"
                      :class="['flex h-[35px] items-center justify-center', index < 2 || index > 32 ? 'text-slate-400' : '']"
                    >
                      {{ day }}
                    </span>
                  </div>
                </div>
              </div>

              <div class="w-[216px]">
                <label class="mb-1 block text-sm">Status</label>
                <Select
                  v-model="selectedStatus"
                  :options="statusOptions"
                  placeholder="Status auswählen"
                  class="h-[33px] w-[216px] !border-emerald-500 !text-sm"
                />

                <div class="mt-0.5 w-[216px] rounded-md border border-slate-200 bg-white p-[10px] shadow-md">
                  <div class="relative">
                    <InputText v-model="statusSearch" placeholder="Suche..." class="h-[33px] w-full !pr-9 !text-sm" />
                    <i class="pi pi-search absolute right-3 top-[10px] text-sm text-slate-400"></i>
                  </div>
                  <div class="mt-1 flex flex-col">
                    <Button
                      v-for="status in statusOptions"
                      :key="status"
                      :label="status"
                      text
                      class="h-[33px] justify-start !px-3 !text-sm !font-normal !text-slate-700"
                      :class="{ '!bg-slate-100': status === 'Bezahlt' }"
                    />
                  </div>
                </div>
              </div>

              <div class="w-[137px]">
                <label class="mb-1 block text-sm">Zustand</label>
                <div class="mt-1 flex items-center gap-3">
                  <div class="flex items-center gap-1">
                    <Checkbox v-model="active" input-id="active" binary />
                    <label for="active" class="text-sm">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-1">
                    <Checkbox v-model="archive" input-id="archive" binary />
                    <label for="archive" class="text-sm">Archiv</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-48">
            <Button label="Exportieren" icon="pi pi-file-export" icon-pos="right" class="h-[33px] !bg-emerald-500 !px-3 !text-sm !font-medium !text-white" />
            <div class="mt-3 w-48 rounded-md border border-slate-200 bg-white p-[10px] shadow-md">
              <div class="flex flex-col gap-2">
                <Button label="Als CSV exportieren" outlined class="h-[33px] justify-start !border-slate-200 !px-3 !text-sm !font-medium !text-slate-500" />
                <Button label="Als PDF exportieren" outlined class="h-[33px] justify-start !border-slate-200 !px-3 !text-sm !font-medium !text-slate-500" />
              </div>
            </div>
          </div>
        </section>

        <section class="relative w-[1008px]">
          <DataTable :value="orders" class="text-sm">
            <Column field="product" header="Produkt" header-class="w-[384px]" body-class="w-[384px]" />
            <Column header="Status" header-class="w-[160px]" body-class="w-[160px]">
              <template #body="{ data }">
                <Tag :value="data.status" :class="['!px-2 !py-0.5 !text-xs !font-bold', data.statusClass]" />
              </template>
            </Column>
            <Column field="date" header="Bestelldatum" header-class="w-[124px]" body-class="w-[124px]" />
            <Column field="total" header="Summe" header-class="w-[124px]" body-class="w-[124px]" />
            <Column field="quantity" header="Stück" header-class="w-[124px]" body-class="w-[124px]" />
            <Column header="Aktionen" header-class="w-[92px]" body-class="w-[92px] text-center">
              <template #body="{ index }">
                <Button icon="pi pi-ellipsis-h" text rounded class="!h-7 !w-9 !text-slate-600" :class="{ '!bg-slate-100': index === 2 }" />
              </template>
            </Column>
          </DataTable>

          <div class="absolute right-[-136px] top-[148px] w-[200px] rounded-md border border-slate-200 bg-white p-[10px] shadow-md">
            <div class="flex flex-col gap-2">
              <Button label="Bearbeiten" icon="pi pi-pencil" outlined class="h-[33px] justify-start !border-slate-200 !px-3 !text-sm !font-medium !text-slate-500" />
              <Button label="Status aktualisieren" icon="pi pi-list-check" outlined class="h-[33px] justify-start !border-slate-200 !px-3 !text-sm !font-medium !text-slate-500" />
              <Button label="Löschen" icon="pi pi-trash" outlined class="h-[33px] justify-start !border-slate-200 !px-3 !text-sm !font-medium !text-slate-500" />
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
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const period = ref('')
const selectedStatus = ref(null)
const statusSearch = ref('')
const active = ref(true)
const archive = ref(false)

const metrics = [
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', changeClass: '!bg-emerald-100 !text-emerald-700' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', changeClass: '!bg-emerald-100 !text-emerald-700' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', changeClass: '!bg-orange-100 !text-orange-700' },
  { value: '89', label: 'Retouren', change: '+23 %', changeClass: '!bg-red-100 !text-red-700' }
]

const statusOptions = ['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']
const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const calendarDays = ['27', '28', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '1', '2']

const orders = [
  { product: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', total: '12.400 €', quantity: '312', statusClass: '!bg-emerald-100 !text-emerald-700' },
  { product: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', total: '8.920 €', quantity: '485', statusClass: '!bg-orange-100 !text-orange-700' },
  { product: 'Sensor X1', status: 'Versendet', date: '09.05.2026', total: '6.100 €', quantity: '150', statusClass: '!bg-slate-100 !text-slate-600' },
  { product: 'System V5', status: 'Bezahlt', date: '12.06.2026', total: '10.250 €', quantity: '2', statusClass: '!bg-sky-100 !text-sky-700' }
]
</script>