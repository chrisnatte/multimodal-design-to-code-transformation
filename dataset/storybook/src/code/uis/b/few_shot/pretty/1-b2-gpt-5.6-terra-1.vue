<template>
  <div class="flex min-h-screen bg-white text-surface-900">
    <aside class="flex w-64 shrink-0 flex-col bg-surface-100 p-6">
      <div class="flex flex-col gap-6">
        <span class="text-base">Navigation</span>
        <nav class="flex flex-col gap-4">
          <Button
            label="Dashboard"
            icon="pi pi-th-large"
            variant="outlined"
            fluid
            class="!justify-start"
          />
          <Button
            label="Kunden"
            icon="pi pi-users"
            severity="secondary"
            variant="outlined"
            fluid
            class="!justify-start"
          />
          <Button
            label="Berichte"
            icon="pi pi-file"
            severity="secondary"
            variant="outlined"
            fluid
            class="!justify-start"
          />
          <Button
            label="Einstellungen"
            icon="pi pi-cog"
            severity="secondary"
            variant="outlined"
            fluid
            class="!justify-start"
          />
        </nav>
      </div>
    </aside>

    <main class="flex min-w-0 flex-1 flex-col gap-6 px-8 py-4">
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Dashboard</h1>
        <span class="text-base">Bekomme eine Übersicht über die Projekte.</span>
      </div>

      <div class="flex flex-wrap items-center gap-5">
        <Card
          v-for="metric in metrics"
          :key="metric.label"
          class="w-48 bg-surface-100"
          :pt="{ body: 'p-[17.5px]', content: 'p-0' }"
        >
          <template #content>
            <div class="flex flex-col gap-[7px]">
              <span class="text-2xl font-medium">{{ metric.value }}</span>
              <span class="text-sm">{{ metric.label }}</span>
              <Tag :value="metric.change" :severity="metric.severity" class="w-fit" />
            </div>
          </template>
        </Card>
      </div>

      <div class="flex items-start justify-between gap-4">
        <Accordion v-model:value="activeFilter" class="w-full max-w-[693px]">
          <AccordionPanel value="filter">
            <AccordionHeader>Filter</AccordionHeader>
            <AccordionContent>
              <div class="flex flex-wrap gap-5">
                <div class="flex w-[268px] flex-col gap-2">
                  <label for="period">Zeitraum</label>
                  <DatePicker
                    v-model="period"
                    input-id="period"
                    selection-mode="range"
                    placeholder="Zeitraum wählen"
                    show-icon
                    fluid
                  />
                </div>

                <div class="flex w-[216px] flex-col gap-2">
                  <label for="status">Status</label>
                  <Select
                    v-model="selectedStatus"
                    input-id="status"
                    :options="statuses"
                    placeholder="Status auswählen"
                    filter
                    filter-placeholder="Suche..."
                    fluid
                  />
                </div>

                <div class="flex flex-col gap-3">
                  <span>Zustand</span>
                  <div class="flex items-center gap-3 py-3">
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="activeOnly" input-id="active-only" binary />
                      <label for="active-only">Aktiv</label>
                    </div>
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="includeArchive" input-id="include-archive" binary />
                      <label for="include-archive">Archiv</label>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>

        <div class="flex flex-col gap-[14px]">
          <Button
            label="Exportieren"
            icon="pi pi-file-export"
            icon-pos="right"
            @click="exportPopover?.toggle($event)"
          />
          <Popover ref="exportPopover">
            <div class="flex w-[169px] flex-col gap-2">
              <Button
                label="Als CSV exportieren"
                severity="secondary"
                variant="outlined"
                fluid
              />
              <Button
                label="Als PDF exportieren"
                severity="secondary"
                variant="outlined"
                fluid
              />
            </div>
          </Popover>
        </div>
      </div>

      <DataTable
        :value="orders"
        table-style="width: 100%; min-width: 1008px"
        :pt="{ root: 'max-w-[1008px]', table: 'text-sm' }"
      >
        <Column field="product" header="Produkt" style="width: 384px" />
        <Column header="Status" style="width: 160px">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="data.severity" />
          </template>
        </Column>
        <Column field="orderDate" header="Bestelldatum" style="width: 124px" />
        <Column field="total" header="Summe" style="width: 124px" />
        <Column field="quantity" header="Stück" style="width: 124px" />
        <Column header="Aktionen" style="width: 92px">
          <template #body="{ data }">
            <div class="flex justify-center">
              <Button
                icon="pi pi-ellipsis-h"
                severity="secondary"
                variant="text"
                aria-label="Aktionen anzeigen"
                @click="openActions($event, data)"
              />
            </div>
          </template>
        </Column>
      </DataTable>

      <Popover ref="actionsPopover">
        <div class="flex w-[177px] flex-col gap-2">
          <Button
            label="Bearbeiten"
            icon="pi pi-pen-to-square"
            severity="secondary"
            variant="outlined"
            fluid
            class="!justify-start"
          />
          <Button
            label="Status aktualisieren"
            icon="pi pi-list-check"
            severity="secondary"
            variant="outlined"
            fluid
            class="!justify-start"
          />
          <Button
            label="Löschen"
            icon="pi pi-trash"
            severity="secondary"
            variant="outlined"
            fluid
            class="!justify-start"
          />
        </div>
      </Popover>
    </main>
  </div>
</template>

<script setup>
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
import Popover from 'primevue/popover'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const activeFilter = ref('filter')
const period = ref(null)
const selectedStatus = ref(null)
const activeOnly = ref(true)
const includeArchive = ref(false)
const selectedOrder = ref(null)
const exportPopover = ref()
const actionsPopover = ref()

const statuses = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])

const metrics = ref([
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
  { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' },
])

const orders = ref([
  {
    product: 'Widget Pro',
    status: 'Angekommen',
    severity: 'success',
    orderDate: '15.04.2026',
    total: '12.400 €',
    quantity: '312',
  },
  {
    product: 'Gadget Mini',
    status: 'In Bearbeitung',
    severity: 'warn',
    orderDate: '24.04.2026',
    total: '8.920 €',
    quantity: '485',
  },
  {
    product: 'Sensor X1',
    status: 'Versendet',
    severity: 'secondary',
    orderDate: '09.05.2026',
    total: '6.100 €',
    quantity: '150',
  },
  {
    product: 'System V5',
    status: 'Bezahlt',
    severity: 'info',
    orderDate: '12.06.2026',
    total: '10.250 €',
    quantity: '2',
  },
])

function openActions(event, order) {
  selectedOrder.value = order
  actionsPopover.value?.toggle(event)
}
</script>