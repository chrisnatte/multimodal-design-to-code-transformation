<template>
  <div class="flex min-h-screen">
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

    <div class="flex flex-1 flex-col gap-6 p-6">
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Dashboard</h1>
        <p class="text-base">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <div class="flex gap-5">
        <Card v-for="stat in stats" :key="stat.label" :pt="{ body: '!p-4.5 gap-2', content: '!p-0' }" class="!bg-slate-100 w-48">
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium">{{ stat.value }}</span>
              <span class="text-sm">{{ stat.label }}</span>
            </div>
            <Tag :value="stat.change" :severity="stat.severity" class="mt-2" />
          </template>
        </Card>
      </div>

      <Accordion value="0">
        <AccordionPanel value="0">
          <AccordionHeader>Filter</AccordionHeader>
          <AccordionContent>
            <div class="flex gap-5">
              <DatePicker v-model="dateRange" placeholder="Zeitraum wählen" selection-mode="range" input-id="date-range" show-icon />
              <Select v-model="status" :options="statusOptions" filter placeholder="Status auswählen" input-id="status-select" class="w-52" />
              <div class="flex flex-col gap-6">
                <span>Zustand</span>
                <div class="flex items-center gap-3">
                  <Checkbox v-model="showActive" input-id="show-active" binary />
                  <label for="show-active">Aktiv</label>
                  <Checkbox v-model="showArchived" input-id="show-archived" binary />
                  <label for="show-archived">Archiv</label>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>

      <div class="flex justify-end">
        <Button label="Exportieren" severity="primary" icon-pos="right" icon="pi pi-file-export" @click="exportMenu?.toggle" />
        <Menu ref="export-menu" id="export-menu" :model="exportOptions" popup :pt="{ list: 'flex flex-col !gap-2 !p-2.5' }">
          <template #item="{ item }">
            <Button :label="item.label" severity="secondary" outlined class="w-full !justify-start" />
          </template>
        </Menu>
      </div>

      <DataTable :value="products">
        <Column field="name" header="Produkt" />
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
          </template>
        </Column>
        <Column field="date" header="Bestelldatum" />
        <Column field="total" header="Summe" />
        <Column field="qty" header="Stück" />
        <Column header="Aktionen" header-class="w-24" body-class="w-24 flex justify-center">
          <template #body>
            <Button
              icon="pi pi-ellipsis-h"
              severity="secondary"
              text
              aria-haspopup="true"
              aria-controls="row-actions-menu"
              @click="rowActionsMenu?.toggle"
            />
            <Menu ref="row-actions-menu" id="row-actions-menu" :model="rowActionOptions" popup :pt="{ list: 'flex flex-col !gap-2 !p-2.5' }">
              <template #item="{ item }">
                <Button :label="item.label" :icon="item.icon" severity="secondary" outlined class="w-full !justify-start" />
              </template>
            </Menu>
          </template>
        </Column>
      </DataTable>
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
  import Menu from 'primevue/menu'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'

  const stats = ref([
    { label: 'Umsatz in €', value: '42.8 Tsd.', change: '+12 %', severity: 'success' },
    { label: 'Bestellungen', value: '1.247', change: '+8 %', severity: 'success' },
    { label: 'Nutzer', value: '3.891', change: '+2 %', severity: 'warn' },
    { label: 'Retouren', value: '89', change: '+23 %', severity: 'danger' },
  ])

  const dateRange = ref()
  const status = ref()
  const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])
  const showActive = ref(true)
  const showArchived = ref(false)

  const exportMenu = useTemplateRef('export-menu')
  const exportOptions = [{ label: 'Als CSV exportieren' }, { label: 'Als PDF exportieren' }]

  const rowActionsMenu = useTemplateRef('row-actions-menu')
  const rowActionOptions = [
    { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
    { label: 'Löschen', icon: 'pi pi-trash' },
  ]

  const products = ref([
    { name: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', total: '12.400 €', qty: '312' },
    { name: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', total: '8.920 €', qty: '485' },
    { name: 'Sensor X1', status: 'Versendet', date: '09.05.2026', total: '6.100 €', qty: '150' },
    { name: 'System V5', status: 'Bezahlt', date: '12.06.2026', total: '10.250 €', qty: '2' },
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