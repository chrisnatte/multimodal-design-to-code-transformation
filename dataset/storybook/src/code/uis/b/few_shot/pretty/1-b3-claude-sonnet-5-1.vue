<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <div class="flex w-64 flex-col gap-6 bg-slate-100 p-6">
      <div class="flex flex-col gap-6">
        <span class="text-base">Navigation</span>
        <div class="flex flex-col gap-4">
          <Button label="Dashboard" icon="pi pi-th-large" severity="primary" outlined class="w-full !justify-start" />
          <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined class="w-full !justify-start" />
          <Button label="Berichte" icon="pi pi-file" severity="secondary" outlined class="w-full !justify-start" />
          <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" outlined class="w-full !justify-start" />
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="flex flex-1 flex-col gap-6 p-6">
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Dashboard</h1>
        <span class="text-base text-gray-600">Bekomme eine Übersicht über die Projekte.</span>
      </div>

      <!-- Stat cards -->
      <div class="flex items-center gap-5">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="flex flex-col gap-2 rounded-xl bg-slate-100 p-[17.5px]"
        >
          <div class="flex flex-col gap-2">
            <span class="text-2xl font-medium">{{ stat.value }}</span>
            <span class="text-sm">{{ stat.label }}</span>
          </div>
          <Tag :value="stat.change" :severity="stat.severity" />
        </div>
      </div>

      <!-- Filter Accordion -->
      <Accordion value="0">
        <AccordionPanel value="0">
          <AccordionHeader>Filter</AccordionHeader>
          <AccordionContent>
            <div class="flex items-start gap-5">
              <DatePicker v-model="dateRange" placeholder="Zeitraum wählen" selection-mode="range" show-icon class="w-64" />
              <div class="flex flex-col gap-1">
                <label for="status-select" class="text-sm">Status</label>
                <Select v-model="statusFilter" :options="statusOptions" input-id="status-select" placeholder="Status auswählen" filter class="w-56" />
              </div>
              <div class="flex flex-col gap-3">
                <span class="text-sm">Zustand</span>
                <div class="flex items-center gap-3">
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="showActive" input-id="active" binary />
                    <label for="active">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="showArchive" input-id="archive" binary />
                    <label for="archive">Archiv</label>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>

      <!-- Export Button + Popover -->
      <div class="flex justify-end">
        <Button label="Exportieren" icon-pos="right" icon="pi pi-file-export" severity="primary" @click="exportPopover?.toggle" />
        <Popover ref="export-popover">
          <div class="flex flex-col gap-2">
            <Button label="Als CSV exportieren" severity="secondary" outlined class="w-full !justify-start" />
            <Button label="Als PDF exportieren" severity="secondary" outlined class="w-full !justify-start" />
          </div>
        </Popover>
      </div>

      <!-- DataTable -->
      <DataTable :value="products">
        <Column field="name" header="Produkt" />
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
          </template>
        </Column>
        <Column field="date" header="Bestelldatum" />
        <Column field="total" header="Summe" />
        <Column field="quantity" header="Stück" />
        <Column header="Aktionen" header-class="w-24" body-class="w-24 flex justify-center">
          <template #body>
            <Button icon="pi pi-ellipsis-h" severity="secondary" text @click="actionsPopover?.toggle" />
          </template>
        </Column>
      </DataTable>

      <Popover ref="actions-popover">
        <div class="flex flex-col gap-2">
          <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined class="w-full !justify-start" />
          <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" outlined class="w-full !justify-start" />
          <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="w-full !justify-start" />
        </div>
      </Popover>
    </div>
  </div>
</template>

<script setup lang="ts">
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
    { label: 'Retouren', value: '89', change: '+23 %', severity: 'danger' },
  ])

  const dateRange = ref()
  const statusFilter = ref()
  const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])
  const showActive = ref(true)
  const showArchive = ref(false)

  const exportPopover = useTemplateRef('export-popover')
  const actionsPopover = useTemplateRef('actions-popover')

  const products = ref([
    { name: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', total: '12.400 €', quantity: '312' },
    { name: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', total: '8.920 €', quantity: '485' },
    { name: 'Sensor X1', status: 'Versendet', date: '09.05.2026', total: '6.100 €', quantity: '150' },
    { name: 'System V5', status: 'Bezahlt', date: '12.06.2026', total: '10.250 €', quantity: '2' },
  ])

  function getStatusSeverity(status: string) {
    switch (status) {
      case 'Angekommen':
        return 'success'
      case 'In Bearbeitung':
        return 'warn'
      case 'Versendet':
        return 'secondary'
      case 'Bezahlt':
        return 'info'
    }
  }
</script>