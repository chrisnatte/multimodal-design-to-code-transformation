<template>
  <div class="flex min-h-screen">
    <div class="flex w-64 flex-col gap-6 bg-slate-100 p-6">
      <div class="flex flex-col gap-6">
        <span class="text-base">Navigation</span>
        <div class="flex flex-col gap-4">
          <Button label="Dashboard" icon="pi pi-objects-column" severity="primary" outlined class="!justify-start" />
          <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined class="!justify-start" />
          <Button label="Berichte" icon="pi pi-file" severity="secondary" outlined class="!justify-start" />
          <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" outlined class="!justify-start" />
        </div>
      </div>
    </div>

    <div class="flex flex-1 flex-col gap-6 p-6">
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Dashboard</h1>
        <span class="text-base">Bekomme eine Übersicht über die Projekte.</span>
      </div>

      <div class="flex gap-5">
        <div v-for="stat in stats" :key="stat.label" class="flex w-48 flex-col gap-2 rounded-xl bg-slate-100 p-4">
          <div class="flex flex-col gap-2">
            <span class="text-2xl font-medium">{{ stat.value }}</span>
            <span class="text-sm">{{ stat.label }}</span>
          </div>
          <Tag :value="stat.change" :severity="stat.severity" />
        </div>
      </div>

      <Accordion value="0">
        <AccordionPanel value="0">
          <AccordionHeader>Filter</AccordionHeader>
          <AccordionContent>
            <div class="flex flex-wrap items-start gap-5">
              <DatePicker v-model="dateRange" selectionMode="range" placeholder="Zeitraum wählen" showIcon class="w-64" />
              <Select v-model="statusFilter" :options="statusOptions" placeholder="Status auswählen" filter class="w-56" />
              <div class="flex flex-col gap-2">
                <span class="text-sm">Zustand</span>
                <div class="flex items-center gap-3 py-3">
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="stateFilter" inputId="active" value="active" />
                    <label for="active">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="stateFilter" inputId="archive" value="archive" />
                    <label for="archive">Archiv</label>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>

      <div class="flex flex-col gap-3">
        <div class="flex justify-end">
          <Button label="Exportieren" icon="pi pi-file-export" iconPos="right" severity="primary" @click="exportPopover?.toggle" />
          <Popover ref="exportPopover">
            <div class="flex flex-col gap-2 w-44">
              <Button label="Als CSV exportieren" severity="secondary" outlined />
              <Button label="Als PDF exportieren" severity="secondary" outlined />
            </div>
          </Popover>
        </div>

        <DataTable :value="orders" tableStyle="min-width: 50rem">
          <Column field="product" header="Produkt" />
          <Column field="status" header="Status">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
            </template>
          </Column>
          <Column field="date" header="Bestelldatum" />
          <Column field="total" header="Summe" />
          <Column field="quantity" header="Stück" />
          <Column header="Aktionen">
            <template #body="{ data }">
              <Button icon="pi pi-ellipsis-h" severity="secondary" text @click="(e) => toggleRowMenu(e, data)" />
            </template>
          </Column>
        </DataTable>
      </div>

      <Popover ref="rowActionsPopover">
        <div class="flex flex-col gap-2 w-44">
          <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined class="!justify-start" />
          <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" outlined class="!justify-start" />
          <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="!justify-start" />
        </div>
      </Popover>
    </div>
  </div>
</template>

<script setup>
  import { ref, useTemplateRef } from 'vue'
  import Button from 'primevue/button'
  import Tag from 'primevue/tag'
  import Accordion from 'primevue/accordion'
  import AccordionPanel from 'primevue/accordionpanel'
  import AccordionHeader from 'primevue/accordionheader'
  import AccordionContent from 'primevue/accordioncontent'
  import DatePicker from 'primevue/datepicker'
  import Select from 'primevue/select'
  import Checkbox from 'primevue/checkbox'
  import Popover from 'primevue/popover'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'

  const stats = ref([
    { label: 'Umsatz in €', value: '42.8 Tsd.', change: '+12 %', severity: 'success' },
    { label: 'Bestellungen', value: '1.247', change: '+8 %', severity: 'success' },
    { label: 'Nutzer', value: '3.891', change: '+2 %', severity: 'warn' },
    { label: 'Retouren', value: '89', change: '+23 %', severity: 'danger' }
  ])

  const dateRange = ref(null)
  const statusFilter = ref(null)
  const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])
  const stateFilter = ref(['active'])

  const orders = ref([
    { product: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', total: '12.400 €', quantity: '312' },
    { product: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', total: '8.920 €', quantity: '485' },
    { product: 'Sensor X1', status: 'Versendet', date: '09.05.2026', total: '6.100 €', quantity: '150' },
    { product: 'System V5', status: 'Bezahlt', date: '12.06.2026', total: '10.250 €', quantity: '2' }
  ])

  const exportPopover = useTemplateRef('exportPopover')
  const rowActionsPopover = useTemplateRef('rowActionsPopover')
  const selectedRow = ref(null)

  const toggleRowMenu = (event, data) => {
    selectedRow.value = data
    rowActionsPopover.value?.toggle(event)
  }

  const getStatusSeverity = (status) => {
    switch (status) {
      case 'Angekommen':
        return 'primary'
      case 'In Bearbeitung':
        return 'warn'
      case 'Versendet':
        return 'secondary'
      case 'Bezahlt':
        return 'info'
      default:
        return null
    }
  }
</script>