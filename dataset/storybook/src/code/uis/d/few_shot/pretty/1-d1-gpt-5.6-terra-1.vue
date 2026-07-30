<template>
  <div class="flex min-h-screen bg-white text-slate-700">
    <aside class="flex w-64 shrink-0 flex-col bg-slate-100 p-6">
      <span class="text-base">Navigation</span>
      <nav class="mt-6 flex flex-col gap-4">
        <Button label="Dashboard" icon="pi pi-th-large" severity="primary" outlined class="!justify-start" />
        <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined class="!justify-start" />
        <Button label="Berichte" icon="pi pi-file" severity="secondary" outlined class="!justify-start" />
        <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" outlined class="!justify-start" />
      </nav>
    </aside>

    <main class="w-full max-w-[1080px] px-8 py-4">
      <header class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold leading-tight">Dashboard</h1>
        <p class="text-base text-slate-500">Bekomme eine Übersicht über die Projekte.</p>
      </header>

      <section class="mt-5 flex gap-5">
        <Card
          v-for="metric in metrics"
          :key="metric.label"
          :pt="{ root: 'w-48 !bg-slate-100 !shadow-none', body: '!p-[18px]', content: '!p-0' }"
        >
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium">{{ metric.value }}</span>
              <span class="text-sm text-slate-500">{{ metric.label }}</span>
              <Tag :value="metric.change" :severity="metric.severity" class="w-fit" />
            </div>
          </template>
        </Card>
      </section>

      <section class="mt-6 flex items-start gap-4">
        <Accordion value="0" class="w-[693px]">
          <AccordionPanel value="0">
            <AccordionHeader>Filter</AccordionHeader>
            <AccordionContent>
              <div class="flex gap-5 pb-0">
                <div class="flex w-64 flex-col gap-1">
                  <label for="period">Zeitraum</label>
                  <DatePicker
                    ref="datePicker"
                    v-model="period"
                    input-id="period"
                    placeholder="Zeitraum wählen"
                    date-format="dd.mm.yy"
                    class="w-[216px]"
                  />
                </div>

                <div class="flex w-[216px] flex-col gap-1">
                  <label for="status">Status</label>
                  <Select
                    ref="statusSelect"
                    v-model="status"
                    input-id="status"
                    :options="statusOptions"
                    placeholder="Status auswählen"
                    filter
                    filter-placeholder="Suche..."
                    class="w-[216px]"
                  />
                </div>

                <div class="flex flex-col gap-1">
                  <label>Zustand</label>
                  <div class="flex items-center gap-3 pt-2">
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
            </AccordionContent>
          </AccordionPanel>
        </Accordion>

        <div class="flex flex-col gap-3">
          <Button label="Exportieren" icon="pi pi-file-export" icon-pos="right" severity="primary" class="w-fit" />
          <div class="flex w-48 flex-col gap-2 rounded-md border border-slate-200 bg-white p-3 shadow-md">
            <Button label="Als CSV exportieren" severity="secondary" outlined class="!justify-start" />
            <Button label="Als PDF exportieren" severity="secondary" outlined class="!justify-start" />
          </div>
        </div>
      </section>

      <section class="relative mt-6 w-[1008px]">
        <DataTable
          :value="orders"
          :pt="{
            table: 'text-sm',
            headerCell: '!bg-white !px-[14px] !py-[10px] !font-semibold',
            bodyCell: '!px-[14px] !py-[10px]',
          }"
        >
          <Column field="product" header="Produkt" header-class="w-[384px]" />
          <Column header="Status" header-class="w-40">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="data.severity" />
            </template>
          </Column>
          <Column field="date" header="Bestelldatum" header-class="w-[124px]" />
          <Column field="total" header="Summe" header-class="w-[124px]" />
          <Column field="quantity" header="Stück" header-class="w-[124px]" />
          <Column header="Aktionen" header-class="w-[92px]">
            <template #body="{ index }">
              <div class="flex justify-center">
                <Button
                  icon="pi pi-ellipsis-h"
                  severity="secondary"
                  text
                  :class="{ '!bg-slate-100': index === 2 }"
                />
              </div>
            </template>
          </Column>
        </DataTable>

        <div class="absolute right-[-136px] top-[122px] flex w-52 flex-col gap-2 rounded-md border border-slate-200 bg-white p-3 shadow-md">
          <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined class="!justify-start" />
          <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" outlined class="!justify-start" />
          <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="!justify-start" />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Accordion from 'primevue/accordion'
import AccordionContent from 'primevue/accordioncontent'
import AccordionHeader from 'primevue/accordionheader'
import AccordionPanel from 'primevue/accordionpanel'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import DatePicker from 'primevue/datepicker'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const period = ref<Date | null>(null)
const status = ref<string | null>(null)
const active = ref(true)
const archive = ref(false)

const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])

const metrics = ref([
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
  { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' },
])

const orders = ref([
  { product: 'Widget Pro', status: 'Angekommen', severity: 'success', date: '15.04.2026', total: '12.400 €', quantity: '312' },
  { product: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warn', date: '24.04.2026', total: '8.920 €', quantity: '485' },
  { product: 'Sensor X1', status: 'Versendet', severity: 'secondary', date: '09.05.2026', total: '6.100 €', quantity: '150' },
  { product: 'System V5', status: 'Bezahlt', severity: 'info', date: '12.06.2026', total: '10.250 €', quantity: '2' },
])
</script>