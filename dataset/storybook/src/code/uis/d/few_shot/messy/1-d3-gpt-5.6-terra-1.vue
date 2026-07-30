<template>
  <div class="min-h-screen bg-white font-sans text-[#34435b]">
    <aside class="fixed inset-y-0 left-0 w-64 bg-[#f1f5f9] px-6 py-6">
      <div class="flex flex-col gap-6">
        <span class="text-base">Navigation</span>
        <nav class="flex flex-col gap-4">
          <Button label="Dashboard" icon="pi pi-th-large" size="small" class="!justify-start" />
          <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined size="small" class="!justify-start" />
          <Button label="Berichte" icon="pi pi-file" severity="secondary" outlined size="small" class="!justify-start" />
          <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" outlined size="small" class="!justify-start" />
        </nav>
      </div>
    </aside>

    <main class="ml-64 w-[1008px] px-8 py-4">
      <header class="mb-5">
        <h1 class="m-0 text-[32px] font-bold leading-10">Dashboard</h1>
        <p class="m-0 text-base text-[#667895]">Bekomme eine Übersicht über die Projekte.</p>
      </header>

      <section class="mb-6 flex gap-4">
        <Card
          v-for="metric in metrics"
          :key="metric.label"
          :pt="{ root: 'w-48 !rounded-xl !bg-[#f1f5f9] !shadow-none', body: '!p-[17px]', content: '!p-0' }"
        >
          <template #content>
            <div class="flex flex-col gap-1">
              <span class="text-2xl font-medium">{{ metric.value }}</span>
              <span class="text-sm text-[#667895]">{{ metric.label }}</span>
              <Tag :value="metric.change" :severity="metric.severity" class="mt-2 w-fit !text-xs" />
            </div>
          </template>
        </Card>
      </section>

      <section class="mb-6 flex items-start gap-4">
        <Card
          :pt="{
            root: 'w-[693px] !rounded-lg !bg-[#f1f5f9] !shadow-none',
            body: '!p-0',
            content: '!p-0',
          }"
        >
          <template #content>
            <div class="flex h-[46px] items-center justify-between border-b border-[#e2e8f0] px-4">
              <span class="text-sm font-semibold">Filter</span>
              <i class="pi pi-angle-down text-sm"></i>
            </div>

            <div class="flex gap-18 px-4 pt-3 pb-4">
              <div class="w-[268px]">
                <label class="mb-1 block text-sm">Zeitraum</label>
                <InputText v-model="periodText" class="h-[33px] w-[216px]" placeholder="Zeitraum wählen" />
                <DatePicker v-model="selectedDate" inline class="mt-0 w-[268px]" />
              </div>

              <div class="w-[216px]">
                <label class="mb-1 block text-sm">Status</label>
                <Select
                  v-model="selectedStatus"
                  :options="statuses"
                  placeholder="Status auswählen"
                  class="h-[33px] w-[216px]"
                />
                <div class="mt-0 rounded-md border border-[#e2e8f0] bg-white p-2 shadow-md">
                  <IconField>
                    <InputIcon class="pi pi-search" />
                    <InputText v-model="statusSearch" placeholder="Suche..." class="h-[33px] w-full" />
                  </IconField>
                  <Listbox
                    v-model="selectedStatus"
                    :options="filteredStatuses"
                    class="mt-1 border-0"
                    list-style="max-height: 132px"
                  />
                </div>
              </div>

              <div class="w-[137px]">
                <label class="mb-1 block text-sm">Zustand</label>
                <div class="mt-3 flex items-center gap-3">
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="activeOnly" input-id="active" binary />
                    <label for="active" class="text-sm">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="archive" input-id="archive" binary />
                    <label for="archive" class="text-sm">Archiv</label>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Card>

        <div class="flex flex-col gap-3">
          <Button label="Exportieren" icon="pi pi-file-export" icon-pos="right" size="small" />
          <Card :pt="{ root: 'w-48 !shadow-md', body: '!p-2.5', content: '!p-0' }">
            <template #content>
              <div class="flex flex-col gap-2">
                <Button label="Als CSV exportieren" severity="secondary" outlined size="small" class="!justify-start" />
                <Button label="Als PDF exportieren" severity="secondary" outlined size="small" class="!justify-start" />
              </div>
            </template>
          </Card>
        </div>
      </section>

      <section class="relative">
        <DataTable
          :value="orders"
          class="w-full"
          :pt="{
            headerCell: '!bg-white !px-[14px] !py-[11px] !text-sm !font-semibold',
            bodyCell: '!px-[14px] !py-[10px] !text-sm',
          }"
        >
          <Column field="product" header="Produkt" style="width: 384px" />
          <Column header="Status" style="width: 160px">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="data.severity" class="!text-xs" />
            </template>
          </Column>
          <Column field="date" header="Bestelldatum" style="width: 124px" />
          <Column field="total" header="Summe" style="width: 124px" />
          <Column field="quantity" header="Stück" style="width: 124px" />
          <Column header="Aktionen" style="width: 92px">
            <template #body="{ index }">
              <Button
                icon="pi pi-ellipsis-h"
                :severity="index === 2 ? 'secondary' : 'primary'"
                text
                size="small"
                aria-label="Aktionen"
              />
            </template>
          </Column>
        </DataTable>

        <Card
          class="absolute right-[-136px] top-[174px]"
          :pt="{ root: 'w-[200px] !shadow-md', body: '!p-2.5', content: '!p-0' }"
        >
          <template #content>
            <div class="flex flex-col gap-2">
              <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined size="small" class="!justify-start" />
              <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" outlined size="small" class="!justify-start" />
              <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined size="small" class="!justify-start" />
            </div>
          </template>
        </Card>
      </section>
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
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const periodText = ref('')
const selectedDate = ref(new Date(2024, 6, 1))
const selectedStatus = ref<string | null>(null)
const statusSearch = ref('')
const activeOnly = ref(true)
const archive = ref(false)

const metrics = [
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
  { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' },
]

const statuses = ['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']

const filteredStatuses = computed(() =>
  statuses.filter((status) => status.toLowerCase().includes(statusSearch.value.toLowerCase())),
)

const orders = [
  { product: 'Widget Pro', status: 'Angekommen', severity: 'success', date: '15.04.2026', total: '12.400 €', quantity: '312' },
  { product: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warn', date: '24.04.2026', total: '8.920 €', quantity: '485' },
  { product: 'Sensor X1', status: 'Versendet', severity: 'secondary', date: '09.05.2026', total: '6.100 €', quantity: '150' },
  { product: 'System V5', status: 'Bezahlt', severity: 'info', date: '12.06.2026', total: '10.250 €', quantity: '2' },
]
</script>