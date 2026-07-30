<template>
  <div class="flex min-h-screen bg-white">
    <!-- Sidebar -->
    <div class="flex w-64 flex-col gap-6 bg-surface-100 p-6">
      <span class="text-base text-surface-900">Navigation</span>
      <div class="flex flex-col gap-4">
        <Button label="Dashboard" icon="pi pi-objects-column" variant="outlined" severity="primary" class="w-full justify-start" />
        <Button label="Kunden" icon="pi pi-users" variant="outlined" severity="secondary" class="w-full justify-start" />
        <Button label="Berichte" icon="pi pi-file" variant="outlined" severity="secondary" class="w-full justify-start" />
        <Button label="Einstellungen" icon="pi pi-cog" variant="outlined" severity="secondary" class="w-full justify-start" />
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex flex-1 flex-col gap-8 p-16">
      <!-- Header -->
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-surface-900">Dashboard</h1>
        <p class="text-base text-surface-700">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Cards -->
      <div class="flex gap-5">
        <Card class="w-48 !bg-surface-100 shadow-none" :pt="{ body: 'p-4', content: 'p-0' }">
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium text-surface-900">42.8 Tsd.</span>
              <span class="text-sm text-surface-700">Umsatz in €</span>
              <Tag value="+12 %" severity="success" class="w-fit mt-2" />
            </div>
          </template>
        </Card>
        <Card class="w-48 !bg-surface-100 shadow-none" :pt="{ body: 'p-4', content: 'p-0' }">
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium text-surface-900">1.247</span>
              <span class="text-sm text-surface-700">Bestellungen</span>
              <Tag value="+8 %" severity="success" class="w-fit mt-2" />
            </div>
          </template>
        </Card>
        <Card class="w-48 !bg-surface-100 shadow-none" :pt="{ body: 'p-4', content: 'p-0' }">
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium text-surface-900">89</span>
              <span class="text-sm text-surface-700">Retouren</span>
              <Tag value="+23 %" severity="danger" class="w-fit mt-2" />
            </div>
          </template>
        </Card>
      </div>

      <!-- Accordion Filter -->
      <Accordion value="0" class="w-full max-w-[692px]">
        <AccordionPanel value="0">
          <AccordionHeader>Filter</AccordionHeader>
          <AccordionContent>
            <div class="flex gap-5">
              <div class="flex flex-col gap-2">
                <label class="text-sm text-surface-700">Zeitraum</label>
                <DatePicker v-model="date" placeholder="Zeitraum wählen" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm text-surface-700">Status</label>
                <Select v-model="status" :options="statusOptions" placeholder="Status auswählen" class="w-56" />
              </div>
              <div class="flex flex-col gap-3">
                <label class="text-sm text-surface-700">Zustand</label>
                <div class="flex h-[33px] items-center gap-3">
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="active" inputId="active" binary />
                    <label for="active" class="text-sm">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="archive" inputId="archive" binary />
                    <label for="archive" class="text-sm">Archiv</label>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>

      <!-- DataTable -->
      <div class="flex w-full max-w-[1008px] flex-col gap-4">
        <div class="flex justify-end">
          <Button label="Exportieren" icon="pi pi-file-export" iconPos="right" @click="toggleExport" />
          <Popover ref="exportPopover">
            <div class="flex flex-col gap-2 p-2">
              <Button label="Als CSV exportieren" icon="pi pi-file-excel" variant="outlined" severity="secondary" class="justify-start" />
              <Button label="Als PDF exportieren" icon="pi pi-file-pdf" variant="outlined" severity="secondary" class="justify-start" />
            </div>
          </Popover>
        </div>

        <DataTable :value="products" class="w-full">
          <Column field="name" header="Produkt"></Column>
          <Column field="status" header="Status">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
            </template>
          </Column>
          <Column field="date" header="Bestelldatum"></Column>
          <Column field="total" header="Summe"></Column>
          <Column field="quantity" header="Stück"></Column>
          <Column header="Aktionen" headerStyle="width: 5rem" bodyStyle="text-align: center">
            <template #body="{ data }">
              <Button icon="pi pi-ellipsis-h" variant="text" severity="secondary" rounded @click="toggleActions($event, data)" />
            </template>
          </Column>
        </DataTable>

        <Popover ref="actionsPopover">
          <div class="flex flex-col gap-2 p-2">
            <Button label="Bearbeiten" icon="pi pi-pen-to-square" variant="outlined" severity="secondary" class="justify-start" />
            <Button label="Status aktualisieren" icon="pi pi-list-check" variant="outlined" severity="secondary" class="justify-start" />
            <Button label="Löschen" icon="pi pi-trash" variant="outlined" severity="secondary" class="justify-start" />
          </div>
        </Popover>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
import DatePicker from 'primevue/datepicker'
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Popover from 'primevue/popover'

const date = ref(null)
const status = ref(null)
const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])
const active = ref(true)
const archive = ref(false)

const products = ref([
  { name: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', total: '12.400 €', quantity: '312' },
  { name: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', total: '8.920 €', quantity: '485' },
  { name: 'Sensor X1', status: 'Versendet', date: '09.05.2026', total: '6.100 €', quantity: '150' },
  { name: 'System V5', status: 'Bezahlt', date: '12.06.2026', total: '10.250 €', quantity: '2' }
])

const exportPopover = ref()
const toggleExport = (event) => {
  exportPopover.value.toggle(event)
}

const actionsPopover = ref()
const selectedProduct = ref()
const toggleActions = (event, product) => {
  selectedProduct.value = product
  actionsPopover.value.toggle(event)
}

const getStatusSeverity = (status) => {
  switch (status) {
    case 'Angekommen': return 'success'
    case 'In Bearbeitung': return 'warn'
    case 'Versendet': return 'secondary'
    case 'Bezahlt': return 'info'
    default: return 'info'
  }
}
</script>