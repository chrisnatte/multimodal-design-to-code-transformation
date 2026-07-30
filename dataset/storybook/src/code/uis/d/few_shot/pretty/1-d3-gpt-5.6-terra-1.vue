<template>
  <div class="flex min-h-screen bg-white text-slate-700">
    <aside class="w-64 shrink-0 bg-slate-100 p-6">
      <div class="flex flex-col gap-6">
        <span class="text-base">Navigation</span>
        <nav class="flex flex-col gap-4">
          <Button label="Dashboard" icon="pi pi-th-large" severity="success" outlined class="!justify-start" />
          <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined class="!justify-start" />
          <Button label="Berichte" icon="pi pi-file" severity="secondary" outlined class="!justify-start" />
          <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" outlined class="!justify-start" />
        </nav>
      </div>
    </aside>

    <main class="w-[1008px] p-4">
      <header class="mb-5 flex flex-col gap-1">
        <h1 class="m-0 text-3xl font-bold">Dashboard</h1>
        <span class="text-base text-slate-500">Bekomme eine Übersicht über die Projekte.</span>
      </header>

      <section class="mb-6 flex gap-5">
        <Card v-for="metric in metrics" :key="metric.label" class="w-48 bg-slate-100">
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium">{{ metric.value }}</span>
              <span class="text-sm text-slate-500">{{ metric.label }}</span>
              <Tag :value="metric.change" :severity="metric.severity" class="w-fit" />
            </div>
          </template>
        </Card>
      </section>

      <section class="mb-6 flex items-start gap-4">
        <Accordion value="0" class="w-[693px]">
          <AccordionPanel value="0">
            <AccordionHeader>Filter</AccordionHeader>
            <AccordionContent>
              <div class="flex gap-5 pb-4">
                <div class="flex w-[268px] flex-col gap-2">
                  <label for="period">Zeitraum</label>
                  <DatePicker
                    v-model="period"
                    input-id="period"
                    selection-mode="range"
                    placeholder="Zeitraum wählen"
                    inline
                    class="w-full"
                  />
                </div>

                <div class="flex w-54 flex-col gap-2">
                  <label for="status">Status</label>
                  <Select
                    v-model="selectedStatus"
                    input-id="status"
                    :options="statuses"
                    placeholder="Status auswählen"
                    filter
                    filter-placeholder="Suche..."
                    class="w-full"
                  />
                  <Listbox v-model="selectedStatus" :options="statuses" class="w-full" />
                </div>

                <div class="flex flex-col gap-2">
                  <span>Zustand</span>
                  <div class="flex items-center gap-3 pt-2">
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="activeOnly" input-id="active" binary />
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

        <div class="flex flex-col gap-4">
          <Button
            ref="exportButton"
            label="Exportieren"
            icon="pi pi-file-export"
            icon-pos="right"
            severity="success"
            @click="toggleExport"
          />
          <Popover ref="exportPopover">
            <div class="flex w-48 flex-col gap-2">
              <Button label="Als CSV exportieren" severity="secondary" outlined class="w-full !justify-start" />
              <Button label="Als PDF exportieren" severity="secondary" outlined class="w-full !justify-start" />
            </div>
          </Popover>
        </div>
      </section>

      <DataTable
        :value="orders"
        table-style="min-width: 63rem"
        :pt="{
          headerCell: 'bg-white border-b border-slate-200 !px-3.5 !py-2.5',
          bodyCell: 'border-b border-slate-200 !px-3.5 !py-2.5',
        }"
      >
        <Column field="product" header="Produkt" style="width: 384px" />
        <Column header="Status" style="width: 160px">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="data.severity" />
          </template>
        </Column>
        <Column field="date" header="Bestelldatum" style="width: 124px" />
        <Column field="total" header="Summe" style="width: 124px" />
        <Column field="quantity" header="Stück" style="width: 124px" />
        <Column header="Aktionen" style="width: 92px">
          <template #body="{ data }">
            <Button
              :ref="data.product === 'System V5' ? 'actionButton' : undefined"
              icon="pi pi-ellipsis-h"
              severity="secondary"
              text
              aria-label="Aktionen"
              @click="toggleActions"
            />
          </template>
        </Column>
      </DataTable>

      <Popover ref="actionsPopover">
        <div class="flex w-44 flex-col gap-2">
          <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined class="w-full !justify-start" />
          <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" outlined class="w-full !justify-start" />
          <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="w-full !justify-start" />
        </div>
      </Popover>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue'
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
import Listbox from 'primevue/listbox'
import Popover from 'primevue/popover'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const period = ref<Date[] | null>(null)
const selectedStatus = ref('Bezahlt')
const activeOnly = ref(true)
const archive = ref(false)

const exportButton = useTemplateRef('exportButton')
const actionButton = useTemplateRef('actionButton')
const exportPopover = useTemplateRef('exportPopover')
const actionsPopover = useTemplateRef('actionsPopover')

const statuses = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])

const metrics = [
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
  { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' },
]

const orders = [
  { product: 'Widget Pro', status: 'Angekommen', severity: 'success', date: '15.04.2026', total: '12.400 €', quantity: '312' },
  { product: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warn', date: '24.04.2026', total: '8.920 €', quantity: '485' },
  { product: 'Sensor X1', status: 'Versendet', severity: 'secondary', date: '09.05.2026', total: '6.100 €', quantity: '150' },
  { product: 'System V5', status: 'Bezahlt', severity: 'info', date: '12.06.2026', total: '10.250 €', quantity: '2' },
]

function toggleExport(event: Event) {
  exportPopover.value?.toggle(event)
}

function toggleActions(event: Event) {
  actionsPopover.value?.toggle(event)
}

onMounted(() => {
  if (exportButton.value) {
    exportPopover.value?.show({ currentTarget: exportButton.value } as Event)
  }

  if (actionButton.value) {
    actionsPopover.value?.show({ currentTarget: actionButton.value } as Event)
  }
})
</script>