<template>
  <div class="flex min-h-screen bg-white">
    <!-- Sidebar -->
    <aside class="w-64 border-r border-gray-200 p-6">
      <h2 class="mb-4 text-sm text-gray-500">Navigation</h2>
      <div class="flex flex-col gap-2">
        <Button
          label="Dashboard"
          icon="pi pi-th-large"
          severity="success"
          outlined
          class="!justify-start"
        />
        <Button
          label="Kunden"
          icon="pi pi-users"
          severity="secondary"
          outlined
          class="!justify-start"
        />
        <Button
          label="Berichte"
          icon="pi pi-file"
          severity="secondary"
          outlined
          class="!justify-start"
        />
        <Button
          label="Einstellungen"
          icon="pi pi-cog"
          severity="secondary"
          outlined
          class="!justify-start"
        />
      </div>
    </aside>

    <!-- Main content -->
    <main class="flex-1 p-8">
      <h1 class="text-3xl font-bold text-gray-800">Dashboard</h1>
      <p class="mt-1 text-gray-500">Bekomme eine Übersicht über die Projekte.</p>

      <!-- Stat cards -->
      <div class="mt-6 grid grid-cols-4 gap-4">
        <Card v-for="stat in stats" :key="stat.label" :pt="{ body: '!p-4', content: '!p-0' }">
          <template #content>
            <div class="text-2xl font-bold text-gray-800">{{ stat.value }}</div>
            <div class="mt-1 text-sm text-gray-500">{{ stat.label }}</div>
            <Tag :value="stat.change" :severity="stat.severity" class="mt-2" />
          </template>
        </Card>
      </div>

      <!-- Filter panel + export -->
      <div class="mt-6 flex items-start gap-4">
        <Panel header="Filter" toggleable class="flex-1">
          <div class="grid grid-cols-3 gap-6">
            <div class="flex flex-col gap-2">
              <label class="text-sm text-gray-600">Zeitraum</label>
              <DatePicker
                v-model="dateRange"
                placeholder="Zeitraum wählen"
                selection-mode="range"
                inline
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-gray-600">Status</label>
              <Select
                v-model="status"
                :options="statusOptions"
                placeholder="Status auswählen"
                filter
                filter-placeholder="Suche..."
                class="w-full"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-gray-600">Zustand</label>
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
        </Panel>

        <div class="flex flex-col gap-2">
          <Button
            label="Exportieren"
            icon="pi pi-file-export"
            icon-pos="right"
            severity="primary"
            @click="exportMenu?.toggle"
            aria-haspopup="true"
            aria-controls="export-menu"
          />
          <Menu
            ref="export-menu"
            id="export-menu"
            :model="exportOptions"
            :popup="false"
            :pt="{ list: 'flex flex-col !gap-2 !p-2.5' }"
          >
            <template #item="{ item }">
              <Button
                :label="item.label"
                severity="secondary"
                outlined
                class="w-full !justify-start"
              />
            </template>
          </Menu>
        </div>
      </div>

      <!-- Table -->
      <DataTable :value="products" class="mt-6">
        <Column field="produkt" header="Produkt" />
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
          </template>
        </Column>
        <Column field="bestelldatum" header="Bestelldatum" />
        <Column field="summe" header="Summe" />
        <Column field="stueck" header="Stück" />
        <Column header="Aktionen" header-class="w-16" body-class="w-16 flex justify-center">
          <template #body="{ data }">
            <Button
              icon="pi pi-ellipsis-h"
              severity="secondary"
              text
              aria-haspopup="true"
              aria-controls="row-menu"
              @click="rowMenu?.toggle($event); selectedRow = data"
            />
          </template>
        </Column>
      </DataTable>
      <Menu
        ref="row-menu"
        id="row-menu"
        :model="rowActions"
        popup
        :pt="{ list: 'flex flex-col !gap-2 !p-2.5' }"
      >
        <template #item="{ item }">
          <Button
            :label="item.label"
            :icon="item.icon"
            severity="secondary"
            outlined
            class="w-full !justify-start"
          />
        </template>
      </Menu>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import Button from 'primevue/button'
  import Card from 'primevue/card'
  import Tag from 'primevue/tag'
  import Panel from 'primevue/panel'
  import DatePicker from 'primevue/datepicker'
  import Select from 'primevue/select'
  import Checkbox from 'primevue/checkbox'
  import Menu from 'primevue/menu'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'

  const stats = ref([
    { label: 'Umsatz in €', value: '42.8 Tsd.', change: '+12 %', severity: 'success' },
    { label: 'Bestellungen', value: '1.247', change: '+8 %', severity: 'success' },
    { label: 'Nutzer', value: '3.891', change: '+2 %', severity: 'danger' },
    { label: 'Retouren', value: '89', change: '+23 %', severity: 'danger' },
  ])

  const dateRange = ref()
  const status = ref()
  const statusOptions = ['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']
  const aktiv = ref(true)
  const archiv = ref(false)

  const exportMenu = useTemplateRef('export-menu')
  const exportOptions = [{ label: 'Als CSV exportieren' }, { label: 'Als PDF exportieren' }]

  const products = ref([
    {
      produkt: 'Widget Pro',
      status: 'Angekommen',
      bestelldatum: '15.04.2026',
      summe: '12.400 €',
      stueck: 312,
    },
    {
      produkt: 'Gadget Mini',
      status: 'In Bearbeitung',
      bestelldatum: '24.04.2026',
      summe: '8.920 €',
      stueck: 485,
    },
    {
      produkt: 'Sensor X1',
      status: 'Versendet',
      bestelldatum: '09.05.2026',
      summe: '6.100 €',
      stueck: 150,
    },
    {
      produkt: 'System V5',
      status: 'Bezahlt',
      bestelldatum: '12.06.2026',
      summe: '10.250 €',
      stueck: 2,
    },
  ])

  const rowMenu = useTemplateRef('row-menu')
  const selectedRow = ref()
  const rowActions = [
    { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Status aktualisieren', icon: 'pi pi-list' },
    { label: 'Löschen', icon: 'pi pi-trash' },
  ]

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