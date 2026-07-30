<template>
  <div class="min-h-screen bg-white font-sans text-surface-900">
    <aside class="fixed inset-y-0 left-0 flex w-64 flex-col bg-surface-100 p-6">
      <div class="flex flex-col gap-6">
        <span class="text-base">Navigation</span>
        <nav class="flex flex-col gap-4">
          <Button label="Dashboard" icon="pi pi-th-large" outlined class="w-full !justify-start !border-primary !bg-green-100" />
          <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined class="w-full !justify-start" />
          <Button label="Berichte" icon="pi pi-file" severity="secondary" outlined class="w-full !justify-start" />
          <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" outlined class="w-full !justify-start" />
        </nav>
      </div>
    </aside>

    <main class="ml-64 min-h-screen px-8 py-4">
      <div class="mx-auto max-w-[1008px]">
        <header class="flex flex-col gap-1">
          <h1 class="m-0 text-[32px] font-bold leading-tight">Dashboard</h1>
          <span class="text-base">Bekomme eine Übersicht über die Projekte.</span>
        </header>

        <section class="mt-5 flex gap-5">
          <Card v-for="metric in metrics" :key="metric.label" class="w-48 !rounded-xl !bg-surface-100 !shadow-none">
            <template #content>
              <div class="flex flex-col gap-2 p-1">
                <div class="flex flex-col gap-1">
                  <span class="text-2xl font-medium">{{ metric.value }}</span>
                  <span class="text-sm">{{ metric.label }}</span>
                </div>
                <Tag :value="metric.change" :severity="metric.severity" class="w-fit text-xs" />
              </div>
            </template>
          </Card>
        </section>

        <section class="relative mt-6 flex items-start gap-4">
          <Accordion value="0" class="w-[693px]">
            <AccordionPanel value="0">
              <AccordionHeader>Filter</AccordionHeader>
              <AccordionContent>
                <div class="flex gap-5 pb-4">
                  <div class="w-[268px]">
                    <label class="mb-2 block text-sm">Zeitraum</label>
                    <DatePicker v-model="dateRange" selectionMode="range" placeholder="Zeitraum wählen" inline class="w-full" />
                  </div>

                  <div class="w-[216px]">
                    <label class="mb-2 block text-sm">Status</label>
                    <Select
                      v-model="selectedStatus"
                      :options="statuses"
                      placeholder="Status auswählen"
                      class="w-full"
                      filter
                      filterPlaceholder="Suche..."
                    />
                    <div class="mt-2 rounded-md border border-surface-200 bg-white p-1">
                      <Button
                        v-for="status in statuses"
                        :key="status"
                        :label="status"
                        text
                        severity="secondary"
                        class="w-full !justify-start"
                        :class="{ '!bg-surface-100': status === 'Bezahlt' }"
                        @click="selectedStatus = status"
                      />
                    </div>
                  </div>

                  <div class="flex flex-col">
                    <label class="text-sm">Zustand</label>
                    <div class="flex gap-3 pt-3">
                      <div class="flex items-center gap-2">
                        <Checkbox v-model="activeOnly" inputId="active" binary />
                        <label for="active" class="text-sm">Aktiv</label>
                      </div>
                      <div class="flex items-center gap-2">
                        <Checkbox v-model="archived" inputId="archived" binary />
                        <label for="archived" class="text-sm">Archiv</label>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>

          <div class="flex flex-col gap-[14px]">
            <Button ref="exportButton" label="Exportieren" icon="pi pi-file-export" iconPos="right" @click="toggleExport" />
            <div class="w-48 rounded-md border border-surface-200 bg-white p-[10px]">
              <div class="flex flex-col gap-2">
                <Button label="Als CSV exportieren" severity="secondary" outlined class="w-full" />
                <Button label="Als PDF exportieren" severity="secondary" outlined class="w-full" />
              </div>
            </div>
          </div>
        </section>

        <section class="mt-5">
          <DataTable :value="orders" tableStyle="min-width: 1008px" class="text-sm">
            <Column field="product" header="Produkt" headerStyle="width: 384px" />
            <Column header="Status" headerStyle="width: 160px">
              <template #body="{ data }">
                <Tag :value="data.status" :severity="data.severity" class="text-xs" />
              </template>
            </Column>
            <Column field="date" header="Bestelldatum" headerStyle="width: 124px" />
            <Column field="total" header="Summe" headerStyle="width: 124px" />
            <Column field="quantity" header="Stück" headerStyle="width: 124px" />
            <Column header="Aktionen" headerStyle="width: 92px">
              <template #body="{ data }">
                <Button
                  :ref="data.product === 'System V5' ? 'actionButton' : undefined"
                  icon="pi pi-ellipsis-h"
                  text
                  severity="secondary"
                  aria-label="Aktionen"
                  @click="toggleActions"
                />
              </template>
            </Column>
          </DataTable>

          <div class="ml-auto mt-[-53px] w-[200px] translate-x-[137px] rounded-md border border-surface-200 bg-white p-[10px]">
            <div class="flex flex-col gap-2">
              <Button label="Bearbeiten" icon="pi pi-pencil" severity="secondary" outlined class="w-full !justify-start" />
              <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" outlined class="w-full !justify-start" />
              <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="w-full !justify-start" />
            </div>
          </div>
        </section>
      </div>
    </main>

    <Popover ref="exportPopover">
      <div class="flex w-48 flex-col gap-2">
        <Button label="Als CSV exportieren" severity="secondary" outlined class="w-full" />
        <Button label="Als PDF exportieren" severity="secondary" outlined class="w-full" />
      </div>
    </Popover>

    <Popover ref="actionsPopover">
      <div class="flex w-44 flex-col gap-2">
        <Button label="Bearbeiten" icon="pi pi-pencil" severity="secondary" outlined class="w-full !justify-start" />
        <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" outlined class="w-full !justify-start" />
        <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="w-full !justify-start" />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Popover from 'primevue/popover'
import DatePicker from 'primevue/datepicker'
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'

const dateRange = ref(null)
const selectedStatus = ref(null)
const activeOnly = ref(true)
const archived = ref(false)
const exportPopover = ref()
const actionsPopover = ref()

const statuses = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])

const metrics = ref([
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
  { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' }
])

const orders = ref([
  { product: 'Widget Pro', status: 'Angekommen', severity: 'success', date: '15.04.2026', total: '12.400 €', quantity: '312' },
  { product: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warn', date: '24.04.2026', total: '8.920 €', quantity: '485' },
  { product: 'Sensor X1', status: 'Versendet', severity: 'secondary', date: '09.05.2026', total: '6.100 €', quantity: '150' },
  { product: 'System V5', status: 'Bezahlt', severity: 'info', date: '12.06.2026', total: '10.250 €', quantity: '2' }
])

const toggleExport = (event) => exportPopover.value.toggle(event)
const toggleActions = (event) => actionsPopover.value.toggle(event)
</script>