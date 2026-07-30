<template>
  <div class="min-h-screen bg-white font-sans text-slate-700">
    <aside class="fixed inset-y-0 left-0 w-64 bg-slate-100 p-6">
      <div class="flex flex-col gap-6">
        <span class="text-base text-slate-700">Navigation</span>

        <nav class="flex flex-col gap-4">
          <Button
            label="Dashboard"
            icon="pi pi-th-large"
            class="h-8 justify-start border border-emerald-200 !bg-emerald-100 !px-3 !text-sm !font-medium !text-emerald-500"
          />
          <Button
            label="Kunden"
            icon="pi pi-users"
            outlined
            class="h-8 justify-start !border-slate-500 !px-3 !text-sm !font-medium !text-slate-500"
          />
          <Button
            label="Berichte"
            icon="pi pi-file"
            outlined
            class="h-8 justify-start !border-slate-500 !px-3 !text-sm !font-medium !text-slate-500"
          />
          <Button
            label="Einstellungen"
            icon="pi pi-cog"
            outlined
            class="h-8 justify-start !border-slate-500 !px-3 !text-sm !font-medium !text-slate-500"
          />
        </nav>
      </div>
    </aside>

    <main class="ml-64 px-8 pt-4">
      <section class="w-[1144px]">
        <header>
          <h1 class="text-[32px] font-bold leading-[39px] text-slate-700">Dashboard</h1>
          <p class="mt-1 text-base leading-5 text-slate-500">Bekomme eine Übersicht über die Projekte.</p>
        </header>

        <section class="mt-5 flex gap-4">
          <div
            v-for="metric in metrics"
            :key="metric.label"
            class="h-[117px] w-48 rounded-xl bg-slate-100 px-[18px] py-[17px]"
          >
            <div class="text-2xl font-medium leading-7 text-slate-700">{{ metric.value }}</div>
            <div class="mt-2 text-sm text-slate-500">{{ metric.label }}</div>
            <Tag
              :value="metric.change"
              :class="metric.tagClass"
              class="mt-2 !rounded-md !px-2 !py-0.5 !text-xs !font-bold"
            />
          </div>
        </section>

        <section class="mt-6 flex items-start gap-4">
          <div class="h-[395px] w-[693px] rounded-lg bg-slate-100">
            <div class="flex h-[46px] items-center justify-between border-b border-slate-200 px-4">
              <span class="text-sm font-semibold">Filter</span>
              <i class="pi pi-chevron-down text-sm"></i>
            </div>

            <div class="flex gap-[72px] px-4 pt-3">
              <div class="relative w-[216px]">
                <label class="mb-1 block text-sm">Zeitraum</label>
                <InputText
                  v-model="dateText"
                  class="h-[33px] w-[216px] !border-emerald-500 !px-3 !py-2 !text-sm"
                  placeholder="Zeitraum wählen"
                />
                <div class="absolute left-0 top-[63px] z-20 w-[270px] rounded-md border border-slate-200 bg-white p-3 shadow-md">
                  <div class="mb-2 flex items-center justify-between border-b border-slate-200 pb-2">
                    <Button icon="pi pi-chevron-left" text rounded class="!h-7 !w-7 !text-slate-500" />
                    <div class="flex items-center gap-4 text-sm font-medium">
                      <span>July</span>
                      <span>2024</span>
                    </div>
                    <Button icon="pi pi-chevron-right" text rounded class="!h-7 !w-7 !text-slate-500" />
                  </div>
                  <div class="grid grid-cols-7 text-center text-sm">
                    <span v-for="day in weekDays" :key="day" class="py-1 font-medium">{{ day }}</span>
                    <span
                      v-for="(day, index) in calendarDays"
                      :key="`${day}-${index}`"
                      :class="index < 2 || index > 32 ? 'text-slate-400' : 'text-slate-700'"
                      class="py-2"
                    >
                      {{ day }}
                    </span>
                  </div>
                </div>
              </div>

              <div class="relative w-[216px]">
                <label class="mb-1 block text-sm">Status</label>
                <Select
                  v-model="status"
                  :options="statusOptions"
                  option-label="label"
                  placeholder="Status auswählen"
                  class="h-[33px] w-[216px] !border-emerald-500 !text-sm"
                />
                <div class="absolute left-0 top-[63px] z-20 w-[216px] rounded-md border border-slate-200 bg-white py-2 shadow-md">
                  <div class="px-3 pb-1">
                    <span class="p-input-icon-right block">
                      <InputText v-model="searchStatus" placeholder="Suche..." class="h-[33px] w-full !py-1 !text-sm" />
                      <i class="pi pi-search text-sm text-slate-400"></i>
                    </span>
                  </div>
                  <div class="px-1">
                    <div
                      v-for="item in statusOptions"
                      :key="item.value"
                      :class="{ 'bg-slate-100': item.value === 'paid' }"
                      class="rounded px-3 py-2 text-sm"
                    >
                      {{ item.label }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-[137px]">
                <label class="mb-1 block text-sm">Zustand</label>
                <div class="mt-2 flex items-center gap-3">
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="active" input-id="active" binary />
                    <label for="active" class="text-sm">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="archive" input-id="archive" binary />
                    <label for="archive" class="text-sm">Archiv</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-48">
            <Button
              label="Exportieren"
              icon="pi pi-file-export"
              icon-pos="right"
              class="h-[33px] !bg-emerald-500 !px-3 !py-2 !text-sm !font-medium !text-white"
            />
            <div class="mt-3 rounded-md border border-slate-200 bg-white p-[10px] shadow-md">
              <Button
                label="Als CSV exportieren"
                outlined
                class="mb-2 h-[33px] w-full justify-start !border-slate-200 !px-3 !text-sm !font-medium !text-slate-500"
              />
              <Button
                label="Als PDF exportieren"
                outlined
                class="h-[33px] w-full justify-start !border-slate-200 !px-3 !text-sm !font-medium !text-slate-500"
              />
            </div>
          </div>
        </section>

        <section class="relative mt-6 w-[1008px]">
          <DataTable :value="orders" class="text-sm">
            <Column field="product" header="Produkt" header-class="w-[384px]" body-class="w-[384px]" />
            <Column header="Status" header-class="w-[160px]" body-class="w-[160px]">
              <template #body="{ data }">
                <Tag :value="data.status" :class="data.statusClass" class="!rounded-md !px-2 !py-1 !text-xs !font-bold" />
              </template>
            </Column>
            <Column field="date" header="Bestelldatum" header-class="w-[124px]" body-class="w-[124px]" />
            <Column field="sum" header="Summe" header-class="w-[124px]" body-class="w-[124px]" />
            <Column field="quantity" header="Stück" header-class="w-[124px]" body-class="w-[124px]" />
            <Column header="Aktionen" header-class="w-[92px]" body-class="w-[92px] text-center">
              <template #body="{ index }">
                <Button
                  icon="pi pi-ellipsis-h"
                  text
                  rounded
                  :class="index === 2 ? '!bg-slate-100' : ''"
                  class="!h-7 !w-9 !text-slate-600"
                />
              </template>
            </Column>
          </DataTable>

          <div class="absolute left-[945px] top-[148px] z-10 w-[200px] rounded-md border border-slate-200 bg-white p-[10px] shadow-md">
            <Button
              label="Bearbeiten"
              icon="pi pi-pencil"
              outlined
              class="mb-2 h-[33px] w-full justify-start !border-slate-200 !px-3 !text-sm !font-medium !text-slate-500"
            />
            <Button
              label="Status aktualisieren"
              icon="pi pi-list-check"
              outlined
              class="mb-2 h-[33px] w-full justify-start !border-slate-200 !px-3 !text-sm !font-medium !text-slate-500"
            />
            <Button
              label="Löschen"
              icon="pi pi-trash"
              outlined
              class="h-[33px] w-full justify-start !border-slate-200 !px-3 !text-sm !font-medium !text-slate-500"
            />
          </div>
        </section>
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
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const dateText = ref('')
const status = ref(null)
const searchStatus = ref('')
const active = ref(true)
const archive = ref(false)

const metrics = [
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', tagClass: '!bg-emerald-100 !text-emerald-700' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', tagClass: '!bg-emerald-100 !text-emerald-700' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', tagClass: '!bg-orange-100 !text-orange-700' },
  { value: '89', label: 'Retouren', change: '+23 %', tagClass: '!bg-red-100 !text-red-700' }
]

const statusOptions = [
  { label: 'Bezahlt', value: 'paid' },
  { label: 'In Bearbeitung', value: 'processing' },
  { label: 'Versendet', value: 'sent' },
  { label: 'Angekommen', value: 'arrived' }
]

const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const calendarDays = ['27', '28', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '1', '2']

const orders = [
  { product: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', sum: '12.400 €', quantity: '312', statusClass: '!bg-emerald-100 !text-emerald-700' },
  { product: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', sum: '8.920 €', quantity: '485', statusClass: '!bg-orange-100 !text-orange-700' },
  { product: 'Sensor X1', status: 'Versendet', date: '09.05.2026', sum: '6.100 €', quantity: '150', statusClass: '!bg-slate-100 !text-slate-600' },
  { product: 'System V5', status: 'Bezahlt', date: '12.06.2026', sum: '10.250 €', quantity: '2', statusClass: '!bg-sky-100 !text-sky-700' }
]
</script>