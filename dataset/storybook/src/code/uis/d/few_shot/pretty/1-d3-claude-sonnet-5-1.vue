<template>
  <div class="flex min-h-screen bg-white">
    <!-- Sidebar -->
    <div class="flex w-64 flex-col gap-6 bg-slate-100 p-6">
      <div class="flex flex-col gap-6">
        <span class="text-base text-black">Navigation</span>
        <div class="flex flex-col gap-4">
          <Button
            label="Dashboard"
            icon="pi pi-th-large"
            severity="primary"
            outlined
            class="w-full !justify-start"
          />
          <Button
            label="Kunden"
            icon="pi pi-users"
            severity="secondary"
            outlined
            class="w-full !justify-start"
          />
          <Button
            label="Berichte"
            icon="pi pi-file"
            severity="secondary"
            outlined
            class="w-full !justify-start"
          />
          <Button
            label="Einstellungen"
            icon="pi pi-cog"
            severity="secondary"
            outlined
            class="w-full !justify-start"
          />
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="flex flex-1 flex-col gap-6 p-8">
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Dashboard</h1>
        <p class="text-base text-gray-600">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Stat Cards -->
      <div class="flex flex-wrap gap-5">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="flex w-48 flex-col gap-2 rounded-xl bg-slate-100 p-4"
        >
          <div class="flex flex-col gap-2">
            <span class="text-2xl font-medium">{{ stat.value }}</span>
            <span class="text-sm text-gray-700">{{ stat.label }}</span>
          </div>
          <Tag :value="stat.change" :severity="stat.severity" />
        </div>
      </div>

      <!-- Filter Accordion + Export -->
      <div class="flex items-start gap-5">
        <Accordion value="0" class="flex-1">
          <AccordionPanel value="0">
            <AccordionHeader>Filter</AccordionHeader>
            <AccordionContent>
              <div class="flex flex-wrap items-start gap-5">
                <DatePicker
                  v-model="dateRange"
                  placeholder="Zeitraum wählen"
                  showIcon
                  class="w-64"
                >
                  <template #inputicon="{ toggleCallback }">
                    <span />
                  </template>
                </DatePicker>
                <div class="flex flex-col gap-2">
                  <label class="text-sm">Status</label>
                  <Select
                    v-model="statusFilter"
                    :options="statusOptions"
                    placeholder="Status auswählen"
                    filter
                    class="w-64"
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm">Zustand</label>
                  <div class="flex items-center gap-4">
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="aktiv" input-id="aktiv" binary />
                      <label for="aktiv">Aktiv</label>
                    </div>
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="archiv" input-id="archiv" binary />
                      <label for="archiv">Archiv</label>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>

        <div class="flex flex-col gap-2">
          <Button
            label="Exportieren"
            icon="pi pi-file-export"
            iconPos="right"
            severity="primary"
            aria-haspopup="true"
            aria-controls="export-popover"
            @click="exportPopover?.toggle"
          />
          <Popover ref="export-popover" id="export-popover">
            <div class="flex w-44 flex-col gap-2">
              <Button label="Als CSV exportieren" severity="secondary" outlined class="w-full" />
              <Button label="Als PDF exportieren" severity="secondary" outlined class="w-full" />
            </div>
          </Popover>
        </div>
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
        <Column field="sum" header="Summe" />
        <Column field="qty" header="Stück" />
        <Column header="Aktionen" header-class="w-16" body-class="w-16 flex justify-center">
          <template #body>
            <Button
              icon="pi pi-ellipsis-h"
              severity="secondary"
              text
              rounded
              aria-haspopup="true"
              aria-controls="row-actions-popover"
              @click="rowActionsPopover?.toggle"
            />
          </template>
        </Column>
      </DataTable>
      <Popover ref="row-actions-popover" id="row-actions-popover">
        <div class="flex w-44 flex-col gap-2">
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
  const aktiv = ref(true)
  const archiv = ref(false)

  const exportPopover = useTemplateRef('export-popover')
  const rowActionsPopover = useTemplateRef('row-actions-popover')

  const products = ref([
    { name: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', sum: '12.400 €', qty: '312' },
    { name: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', sum: '8.920 €', qty: '485' },
    { name: 'Sensor X1', status: 'Versendet', date: '09.05.2026', sum: '6.100 €', qty: '150' },
    { name: 'System V5', status: 'Bezahlt', date: '12.06.2026', sum: '10.250 €', qty: '2' },
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