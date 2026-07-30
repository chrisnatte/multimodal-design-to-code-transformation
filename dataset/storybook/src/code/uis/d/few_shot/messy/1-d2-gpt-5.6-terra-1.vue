<template>
  <div class="flex min-h-screen bg-white text-slate-700">
    <aside class="w-64 shrink-0 bg-slate-100 p-6">
      <div class="flex flex-col gap-6">
        <span class="text-base">Navigation</span>
        <div class="flex flex-col gap-4">
          <Button
            label="Dashboard"
            icon="pi pi-th-large"
            severity="success"
            class="!h-8 w-full !justify-start !text-sm"
          />
          <Button
            label="Kunden"
            icon="pi pi-users"
            severity="secondary"
            outlined
            class="!h-8 w-full !justify-start !text-sm"
          />
          <Button
            label="Berichte"
            icon="pi pi-file"
            severity="secondary"
            outlined
            class="!h-8 w-full !justify-start !text-sm"
          />
          <Button
            label="Einstellungen"
            icon="pi pi-cog"
            severity="secondary"
            outlined
            class="!h-8 w-full !justify-start !text-sm"
          />
        </div>
      </div>
    </aside>

    <main class="w-full px-8 py-4">
      <div class="max-w-[1008px]">
        <header class="mb-5 flex flex-col">
          <h1 class="text-3xl font-bold leading-tight">Dashboard</h1>
          <span class="text-base text-slate-500">Bekomme eine Übersicht über die Projekte.</span>
        </header>

        <section class="mb-6 flex gap-4">
          <Card
            v-for="metric in metrics"
            :key="metric.label"
            :pt="{ root: 'w-48 !bg-slate-100 !shadow-none', body: '!p-[17px]', content: '!p-0' }"
          >
            <template #content>
              <div class="flex flex-col gap-1">
                <span class="text-2xl font-medium">{{ metric.value }}</span>
                <span class="text-sm text-slate-500">{{ metric.label }}</span>
                <Tag :value="metric.change" :severity="metric.severity" class="mt-2 w-fit !text-xs" />
              </div>
            </template>
          </Card>
        </section>

        <section class="mb-6 flex items-start gap-4">
          <Panel
            header="Filter"
            toggleable
            :collapsed="false"
            class="w-[693px]"
            :pt="{
              root: '!border-0 !bg-slate-100',
              header: '!border-b !border-slate-200 !bg-slate-100 !px-4 !py-3',
              content: '!bg-slate-100 !p-4',
            }"
          >
            <div class="flex gap-5">
              <div class="w-[268px]">
                <label class="mb-1 block text-sm">Zeitraum</label>
                <DatePicker
                  v-model="dateRange"
                  selection-mode="range"
                  placeholder="Zeitraum wählen"
                  class="w-[216px]"
                  input-class="!h-8 !text-sm"
                />
                <DatePicker
                  v-model="calendarDate"
                  inline
                  class="mt-1"
                  :pt="{
                    root: '!w-[268px]',
                    header: '!p-2',
                    table: '!text-sm',
                  }"
                />
              </div>

              <div class="w-[216px]">
                <label class="mb-1 block text-sm">Status</label>
                <Select
                  v-model="selectedStatus"
                  :options="statusOptions"
                  option-label="label"
                  placeholder="Status auswählen"
                  class="w-[216px]"
                  input-class="!text-sm"
                />
                <div class="mt-1 rounded-md border border-slate-200 bg-white p-1 shadow-md">
                  <IconField>
                    <InputText v-model="statusSearch" placeholder="Suche..." class="!h-8 w-full !text-sm" />
                    <InputIcon class="pi pi-search" />
                  </IconField>
                  <Listbox
                    v-model="selectedStatus"
                    :options="filteredStatusOptions"
                    option-label="label"
                    class="mt-1 border-0 !text-sm"
                    :pt="{ list: '!p-0', option: '!px-2 !py-2' }"
                  />
                </div>
              </div>

              <div class="w-[137px]">
                <label class="mb-2 block text-sm">Zustand</label>
                <div class="flex items-center gap-4">
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="activeOnly" input-id="active" binary />
                    <label for="active" class="text-sm">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="includeArchive" input-id="archive" binary />
                    <label for="archive" class="text-sm">Archiv</label>
                  </div>
                </div>
              </div>
            </div>
          </Panel>

          <div class="flex flex-col gap-3">
            <Button label="Exportieren" icon="pi pi-file-export" icon-pos="right" class="!h-8 !text-sm" />
            <Menu :model="exportItems" class="w-48 !p-2 shadow-md">
              <template #item="{ item }">
                <Button :label="item.label" severity="secondary" outlined class="mb-2 w-full !justify-start !text-sm last:mb-0" />
              </template>
            </Menu>
          </div>
        </section>

        <section>
          <DataTable
            :value="orders"
            class="w-full"
            :pt="{
              header: '!p-0',
              thead: '[&>tr>th]:!bg-white [&>tr>th]:!px-[14px] [&>tr>th]:!py-3',
              tbody: '[&>tr>td]:!px-[14px] [&>tr>td]:!py-2',
            }"
          >
            <Column field="product" header="Produkt" header-class="w-[384px]" />
            <Column field="status" header="Status" header-class="w-[160px]">
              <template #body="{ data }">
                <Tag :value="data.status" :severity="data.severity" class="!text-xs" />
              </template>
            </Column>
            <Column field="date" header="Bestelldatum" header-class="w-[124px]" />
            <Column field="amount" header="Summe" header-class="w-[124px]" />
            <Column field="quantity" header="Stück" header-class="w-[124px]" />
            <Column header="Aktionen" header-class="w-[92px]">
              <template #body="{ index }">
                <Button
                  icon="pi pi-ellipsis-h"
                  severity="secondary"
                  text
                  class="!h-7 !w-9"
                  :class="{ '!bg-slate-100': index === 2 }"
                />
              </template>
            </Column>
          </DataTable>

          <div class="flex justify-end">
            <Menu :model="rowActions" class="mt-[-53px] w-[200px] !p-2 shadow-md">
              <template #item="{ item }">
                <Button
                  :label="item.label"
                  :icon="item.icon"
                  severity="secondary"
                  outlined
                  class="mb-2 w-full !justify-start !text-sm last:mb-0"
                />
              </template>
            </Menu>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import DatePicker from 'primevue/datepicker'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Menu from 'primevue/menu'
import Panel from 'primevue/panel'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const dateRange = ref()
const calendarDate = ref(new Date(2024, 6, 1))
const selectedStatus = ref()
const statusSearch = ref('')
const activeOnly = ref(true)
const includeArchive = ref(false)

const metrics = [
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
  { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' },
]

const statusOptions = [
  { label: 'Bezahlt' },
  { label: 'In Bearbeitung' },
  { label: 'Versendet' },
  { label: 'Angekommen' },
]

const filteredStatusOptions = computed(() =>
  statusOptions.filter((status) =>
    status.label.toLocaleLowerCase().includes(statusSearch.value.toLocaleLowerCase()),
  ),
)

const exportItems = [
  { label: 'Als CSV exportieren' },
  { label: 'Als PDF exportieren' },
]

const rowActions = [
  { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
  { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
  { label: 'Löschen', icon: 'pi pi-trash' },
]

const orders = [
  {
    product: 'Widget Pro',
    status: 'Angekommen',
    severity: 'success',
    date: '15.04.2026',
    amount: '12.400 €',
    quantity: '312',
  },
  {
    product: 'Gadget Mini',
    status: 'In Bearbeitung',
    severity: 'warn',
    date: '24.04.2026',
    amount: '8.920 €',
    quantity: '485',
  },
  {
    product: 'Sensor X1',
    status: 'Versendet',
    severity: 'secondary',
    date: '09.05.2026',
    amount: '6.100 €',
    quantity: '150',
  },
  {
    product: 'System V5',
    status: 'Bezahlt',
    severity: 'info',
    date: '12.06.2026',
    amount: '10.250 €',
    quantity: '2',
  },
]
</script>