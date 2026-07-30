<template>
  <div class="min-h-screen bg-white font-sans text-slate-900">
    <aside class="fixed inset-y-0 left-0 flex w-64 flex-col bg-slate-100 p-6">
      <div class="flex flex-col gap-6">
        <span class="text-base">Navigation</span>
        <nav class="flex flex-col gap-4">
          <Button label="Dashboard" icon="pi pi-th-large" outlined class="w-full justify-start" />
          <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined class="w-full justify-start" />
          <Button label="Berichte" icon="pi pi-file" severity="secondary" outlined class="w-full justify-start" />
          <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" outlined class="w-full justify-start" />
        </nav>
      </div>
    </aside>

    <main class="relative ml-64 min-h-screen px-8 py-4">
      <section class="w-[1008px]">
        <header class="flex flex-col gap-1">
          <h1 class="text-[32px] font-bold leading-tight">Dashboard</h1>
          <span class="text-base">Bekomme eine Übersicht über die Projekte.</span>
        </header>

        <section class="mt-5 flex gap-5">
          <div
            v-for="metric in metrics"
            :key="metric.label"
            class="flex h-[117px] w-48 flex-col gap-2 rounded-xl bg-slate-100 p-[18px]"
          >
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium leading-7">{{ metric.value }}</span>
              <span class="text-sm">{{ metric.label }}</span>
            </div>
            <Tag :value="metric.change" :severity="metric.severity" class="w-fit" />
          </div>
        </section>

        <section class="relative mt-6 w-[693px]">
          <Accordion :value="['filter']">
            <AccordionPanel value="filter">
              <AccordionHeader>Filter</AccordionHeader>
              <AccordionContent>
                <div class="flex gap-5 pb-4">
                  <div class="flex w-[268px] flex-col">
                    <label for="period" class="mb-2 text-sm">Zeitraum</label>
                    <DatePicker
                      id="period"
                      v-model="dateRange"
                      selection-mode="range"
                      placeholder="Zeitraum wählen"
                      date-format="dd.mm.yy"
                      class="w-[216px]"
                    />
                    <div class="mt-1 w-[268px]">
                      <DatePicker
                        v-model="dateRange"
                        selection-mode="range"
                        inline
                        class="w-full"
                      />
                    </div>
                  </div>

                  <div class="flex w-[216px] flex-col">
                    <label for="status" class="mb-2 text-sm">Status</label>
                    <Select
                      id="status"
                      v-model="selectedStatus"
                      :options="statusOptions"
                      option-label="label"
                      placeholder="Status auswählen"
                      class="w-full"
                    />
                    <div class="mt-1 rounded-md border border-slate-200 bg-white">
                      <div class="p-2 pb-1">
                        <InputText v-model="statusSearch" placeholder="Suche..." class="w-full" />
                      </div>
                      <Listbox
                        v-model="selectedStatus"
                        :options="filteredStatuses"
                        option-label="label"
                        class="border-0"
                        list-style="max-height: 132px"
                      />
                    </div>
                  </div>

                  <div class="flex flex-col">
                    <span class="text-sm">Zustand</span>
                    <div class="flex items-center gap-3 py-3">
                      <Checkbox v-model="isActive" input-id="active" binary />
                      <label for="active" class="text-sm">Aktiv</label>
                      <Checkbox v-model="isArchived" input-id="archived" binary />
                      <label for="archived" class="text-sm">Archiv</label>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>

          <div class="absolute left-[709px] top-0 flex w-48 flex-col gap-3">
            <Button label="Exportieren" icon="pi pi-file-export" icon-pos="right" />
            <div class="rounded-md border border-slate-200 bg-white p-[10px]">
              <div class="flex flex-col gap-2">
                <Button label="Als CSV exportieren" severity="secondary" outlined class="w-full" />
                <Button label="Als PDF exportieren" severity="secondary" outlined class="w-full" />
              </div>
            </div>
          </div>
        </section>

        <section class="relative mt-5 w-[1008px]">
          <DataTable :value="orders" class="text-sm">
            <Column field="product" header="Produkt" header-class="w-[384px]" body-class="w-[384px]" />
            <Column header="Status" header-class="w-[160px]" body-class="w-[160px]">
              <template #body="{ data }">
                <Tag :value="data.status" :severity="data.severity" />
              </template>
            </Column>
            <Column field="date" header="Bestelldatum" header-class="w-[124px]" body-class="w-[124px]" />
            <Column field="total" header="Summe" header-class="w-[124px]" body-class="w-[124px]" />
            <Column field="quantity" header="Stück" header-class="w-[124px]" body-class="w-[124px]" />
            <Column header="Aktionen" header-class="w-[92px]" body-class="w-[92px]">
              <template #body="{ index }">
                <div class="flex justify-center">
                  <Button
                    icon="pi pi-ellipsis-h"
                    severity="secondary"
                    text
                    :class="{ 'bg-slate-100': index === 2 }"
                    aria-label="Aktionen"
                  />
                </div>
              </template>
            </Column>
          </DataTable>

          <div class="absolute right-[-137px] top-[186px] w-[200px] rounded-md border border-slate-200 bg-white p-[10px]">
            <div class="flex flex-col gap-2">
              <Button label="Bearbeiten" icon="pi pi-pencil" severity="secondary" outlined class="w-full justify-start" />
              <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" outlined class="w-full justify-start" />
              <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="w-full justify-start" />
            </div>
          </div>
        </section>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import Accordion from 'primevue/accordion'
import AccordionContent from 'primevue/accordioncontent'
import AccordionHeader from 'primevue/accordionheader'
import AccordionPanel from 'primevue/accordionpanel'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import DatePicker from 'primevue/datepicker'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const dateRange = ref(null)
const selectedStatus = ref(null)
const statusSearch = ref('')
const isActive = ref(true)
const isArchived = ref(false)

const metrics = [
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
  { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' }
]

const statusOptions = [
  { label: 'Bezahlt' },
  { label: 'In Bearbeitung' },
  { label: 'Versendet' },
  { label: 'Angekommen' }
]

const filteredStatuses = computed(() => {
  const search = statusSearch.value.toLowerCase()
  return statusOptions.filter((status) => status.label.toLowerCase().includes(search))
})

const orders = [
  { product: 'Widget Pro', status: 'Angekommen', severity: 'success', date: '15.04.2026', total: '12.400 €', quantity: '312' },
  { product: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warn', date: '24.04.2026', total: '8.920 €', quantity: '485' },
  { product: 'Sensor X1', status: 'Versendet', severity: 'secondary', date: '09.05.2026', total: '6.100 €', quantity: '150' },
  { product: 'System V5', status: 'Bezahlt', severity: 'info', date: '12.06.2026', total: '10.250 €', quantity: '2' }
]
</script>