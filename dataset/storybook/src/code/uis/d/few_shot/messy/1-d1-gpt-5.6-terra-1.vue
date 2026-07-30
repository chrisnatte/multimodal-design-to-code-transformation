<template>
  <div class="flex min-h-screen bg-white text-slate-700">
    <aside class="w-64 shrink-0 bg-slate-100 p-6">
      <div class="flex flex-col gap-6">
        <span class="text-base">Navigation</span>
        <nav class="flex flex-col gap-4">
          <Button label="Dashboard" icon="pi pi-th-large" severity="success" class="!justify-start" />
          <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined class="!justify-start" />
          <Button label="Berichte" icon="pi pi-file" severity="secondary" outlined class="!justify-start" />
          <Button
            label="Einstellungen"
            icon="pi pi-cog"
            severity="secondary"
            outlined
            class="!justify-start"
          />
        </nav>
      </div>
    </aside>

    <main class="w-full max-w-6xl px-8 py-4">
      <header class="mb-5">
        <h1 class="text-3xl font-bold leading-tight">Dashboard</h1>
        <p class="text-base text-slate-500">Bekomme eine Übersicht über die Projekte.</p>
      </header>

      <section class="mb-6 flex gap-4">
        <Card
          v-for="metric in metrics"
          :key="metric.label"
          class="w-48 !rounded-xl !bg-slate-100 !shadow-none"
          :pt="{ body: '!p-[18px]', content: '!p-0' }"
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

      <section class="mb-7 flex items-start gap-4">
        <Panel
          header="Filter"
          toggleable
          :collapsed="false"
          class="w-[693px] !border-0 !bg-slate-100"
          :pt="{
            header: '!border-slate-200 !bg-slate-100 !px-4 !py-3',
            content: '!border-0 !bg-slate-100 !p-4',
          }"
        >
          <div class="flex gap-5">
            <div class="flex w-[268px] flex-col gap-2">
              <label for="period">Zeitraum</label>
              <DatePicker
                v-model="period"
                input-id="period"
                placeholder="Zeitraum wählen"
                class="w-[216px]"
                date-format="dd.mm.yy"
              />
              <DatePicker v-model="period" inline class="w-[268px]" />
            </div>

            <div class="flex w-[216px] flex-col gap-2">
              <label for="status">Status</label>
              <Select
                v-model="selectedStatus"
                :options="statuses"
                input-id="status"
                placeholder="Status auswählen"
                class="w-[216px]"
              />
              <div class="rounded-md border border-slate-200 bg-white p-2 shadow-md">
                <IconField>
                  <InputText v-model="statusSearch" placeholder="Suche..." class="w-full" />
                  <InputIcon class="pi pi-search" />
                </IconField>
                <Listbox
                  v-model="selectedStatus"
                  :options="filteredStatuses"
                  class="mt-1 border-0"
                  :pt="{ list: '!p-0', option: '!px-2.5 !py-2' }"
                />
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label>Zustand</label>
              <div class="flex items-center gap-4 pt-2">
                <div class="flex items-center gap-2">
                  <Checkbox v-model="active" input-id="active" binary />
                  <label for="active">Aktiv</label>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox v-model="archive" input-id="archive" binary />
                  <label for="archive">Archiv</label>
                </div>
              </div>
            </div>
          </div>
        </Panel>

        <div class="flex flex-col gap-3">
          <Button label="Exportieren" icon="pi pi-file-export" icon-pos="right" severity="success" />
          <Card class="w-48 !shadow-md" :pt="{ body: '!p-2.5', content: '!p-0' }">
            <template #content>
              <div class="flex flex-col gap-2">
                <Button label="Als CSV exportieren" severity="secondary" outlined class="!justify-start" />
                <Button label="Als PDF exportieren" severity="secondary" outlined class="!justify-start" />
              </div>
            </template>
          </Card>
        </div>
      </section>

      <DataTable
        :value="orders"
        class="w-[1008px]"
        :pt="{
          headerCell: '!bg-white !px-3.5 !py-3 !text-sm !font-semibold',
          bodyCell: '!px-3.5 !py-3',
        }"
      >
        <Column field="product" header="Produkt" header-class="w-[384px]" />
        <Column field="status" header="Status" header-class="w-[160px]">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="statusSeverity(data.status)" class="!text-xs" />
          </template>
        </Column>
        <Column field="date" header="Bestelldatum" header-class="w-[124px]" />
        <Column field="amount" header="Summe" header-class="w-[124px]" />
        <Column field="quantity" header="Stück" header-class="w-[124px]" />
        <Column header="Aktionen" header-class="w-[92px]" body-class="text-center">
          <template #body="{ index }">
            <Button
              icon="pi pi-ellipsis-h"
              text
              rounded
              :severity="index === 0 ? 'success' : 'secondary'"
              @click="selectedOrder = index"
            />
          </template>
        </Column>
      </DataTable>

      <Card
        class="relative -mt-[52px] ml-[945px] w-[200px] !shadow-md"
        :pt="{ body: '!p-2.5', content: '!p-0' }"
      >
        <template #content>
          <div class="flex flex-col gap-2">
            <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined class="!justify-start" />
            <Button
              label="Status aktualisieren"
              icon="pi pi-list-check"
              severity="secondary"
              outlined
              class="!justify-start"
            />
            <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="!justify-start" />
          </div>
        </template>
      </Card>
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
import Panel from 'primevue/panel'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const period = ref<Date | null>(null)
const selectedStatus = ref('Bezahlt')
const statusSearch = ref('')
const active = ref(true)
const archive = ref(false)
const selectedOrder = ref(3)

const statuses = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])

const filteredStatuses = computed(() =>
  statuses.value.filter((status) => status.toLowerCase().includes(statusSearch.value.toLowerCase())),
)

const metrics = ref([
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
  { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' },
])

const orders = ref([
  { product: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', amount: '12.400 €', quantity: '312' },
  { product: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', amount: '8.920 €', quantity: '485' },
  { product: 'Sensor X1', status: 'Versendet', date: '09.05.2026', amount: '6.100 €', quantity: '150' },
  { product: 'System V5', status: 'Bezahlt', date: '12.06.2026', amount: '10.250 €', quantity: '2' },
])

function statusSeverity(status: string) {
  if (status === 'Angekommen') return 'success'
  if (status === 'In Bearbeitung') return 'warn'
  if (status === 'Bezahlt') return 'info'
  return 'secondary'
}
</script>