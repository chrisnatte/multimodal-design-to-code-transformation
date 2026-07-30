<template>
  <div class="flex min-h-screen bg-white">
    <!-- Sidebar -->
    <div class="w-64 bg-slate-100 p-6 flex flex-col gap-6">
      <span class="text-base text-slate-800">Navigation</span>
      <div class="flex flex-col gap-4">
        <Button
          label="Dashboard"
          icon="pi pi-th-large"
          severity="primary"
          outlined
          class="w-full !justify-start !bg-emerald-100"
        />
        <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined class="w-full !justify-start" />
        <Button label="Berichte" icon="pi pi-file" severity="secondary" outlined class="w-full !justify-start" />
        <Button
          label="Einstellungen"
          icon="pi pi-cog"
          severity="secondary"
          outlined
          class="w-full !justify-start"
        />
      </div>
    </div>

    <!-- Main content -->
    <div class="flex-1 p-10 flex flex-col gap-6">
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-slate-800">Dashboard</h1>
        <p class="text-base text-slate-600">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Stat Cards -->
      <div class="flex gap-5">
        <Card
          v-for="stat in stats"
          :key="stat.label"
          :pt="{ root: 'bg-slate-100 rounded-xl w-48', body: '!p-0', content: 'flex flex-col gap-2' }"
        >
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium text-slate-800">{{ stat.value }}</span>
              <span class="text-sm text-slate-600">{{ stat.label }}</span>
            </div>
            <Tag :value="stat.change" :severity="stat.severity" />
          </template>
        </Card>
      </div>

      <!-- Filter Accordion + Export -->
      <div class="flex gap-5 items-start">
        <Accordion value="0" class="flex-1">
          <AccordionPanel value="0">
            <AccordionHeader>Filter</AccordionHeader>
            <AccordionContent>
              <div class="flex gap-5 pt-2">
                <div class="flex flex-col gap-2">
                  <label for="date-range" class="text-sm">Zeitraum</label>
                  <DatePicker v-model="dateRange" input-id="date-range" placeholder="Zeitraum wählen" />
                </div>
                <div class="flex flex-col gap-2">
                  <label for="status-select" class="text-sm">Status</label>
                  <Select
                    v-model="selectedStatus"
                    :options="statusOptions"
                    input-id="status-select"
                    placeholder="Status auswählen"
                    filter
                    filter-placeholder="Suche..."
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm">Zustand</label>
                  <div class="flex items-center gap-3 py-3">
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="isActive" input-id="active" binary />
                      <label for="active">Aktiv</label>
                    </div>
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="isArchive" input-id="archive" binary />
                      <label for="archive">Archiv</label>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>

        <div class="flex flex-col gap-3.5">
          <Button
            label="Exportieren"
            icon-pos="right"
            icon="pi pi-file-export"
            severity="primary"
            @click="exportMenu?.toggle"
          />
          <Popover ref="export-menu">
            <div class="flex flex-col gap-2 w-44">
              <Button label="Als CSV exportieren" severity="secondary" outlined class="w-full" />
              <Button label="Als PDF exportieren" severity="secondary" outlined class="w-full" />
            </div>
          </Popover>
        </div>
      </div>

      <!-- Data Table -->
      <DataTable :value="orders">
        <Column field="product" header="Produkt" />
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
          </template>
        </Column>
        <Column field="orderDate" header="Bestelldatum" />
        <Column field="sum" header="Summe" />
        <Column field="quantity" header="Stück" />
        <Column header="Aktionen" header-class="w-24" body-class="w-24 flex justify-center">
          <template #body>
            <Button
              icon="pi pi-ellipsis-h"
              severity="secondary"
              text
              rounded
              aria-haspopup="true"
              aria-controls="row-actions-menu"
              @click="rowActionsMenu?.toggle"
            />
          </template>
        </Column>
      </DataTable>
      <Popover ref="row-actions-menu" id="row-actions-menu">
        <div class="flex flex-col gap-2 w-44">
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
  import Card from 'primevue/card'
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
    { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
    { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
    { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
    { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' },
  ])

  const dateRange = ref()
  const selectedStatus = ref()
  const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])
  const isActive = ref(true)
  const isArchive = ref(false)

  const exportMenu = useTemplateRef('export-menu')
  const rowActionsMenu = useTemplateRef('row-actions-menu')

  const orders = ref([
    { product: 'Widget Pro', status: 'Angekommen', orderDate: '15.04.2026', sum: '12.400 €', quantity: 312 },
    { product: 'Gadget Mini', status: 'In Bearbeitung', orderDate: '24.04.2026', sum: '8.920 €', quantity: 485 },
    { product: 'Sensor X1', status: 'Versendet', orderDate: '09.05.2026', sum: '6.100 €', quantity: 150 },
    { product: 'System V5', status: 'Bezahlt', orderDate: '12.06.2026', sum: '10.250 €', quantity: 2 },
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