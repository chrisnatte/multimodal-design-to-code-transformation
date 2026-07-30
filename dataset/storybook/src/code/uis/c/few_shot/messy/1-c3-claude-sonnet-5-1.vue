<template>
  <div class="flex min-h-screen bg-white">
    <!-- Sidebar -->
    <div class="w-56 border-r border-gray-200 p-6">
      <h2 class="mb-4 text-sm font-medium text-gray-500">Navigation</h2>
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
    </div>

    <!-- Main content -->
    <div class="flex-1 p-8">
      <h1 class="text-3xl font-bold text-gray-800">Dashboard</h1>
      <p class="mt-1 text-gray-500">Bekomme eine Übersicht über die Projekte.</p>

      <!-- Stat cards -->
      <div class="mt-6 grid grid-cols-4 gap-4">
        <Card
          v-for="stat in stats"
          :key="stat.label"
          :pt="{ body: '!p-0', content: 'flex flex-col gap-2' }"
          class="!p-4"
        >
          <template #content>
            <span class="text-2xl font-semibold text-gray-800">{{ stat.value }}</span>
            <span class="text-sm text-gray-500">{{ stat.label }}</span>
            <Tag :value="stat.change" :severity="stat.severity" class="w-fit" />
          </template>
        </Card>
      </div>

      <!-- Filter + Export -->
      <div class="mt-6 flex gap-4">
        <Panel header="Filter" toggleable class="flex-1">
          <div class="flex gap-8">
            <div class="flex flex-col gap-2">
              <label class="text-sm text-gray-500">Zeitraum</label>
              <Calendar v-model="dateRange" placeholder="Zeitraum wählen" show-icon />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-gray-500">Status</label>
              <Dropdown
                v-model="status"
                :options="statusOptions"
                filter
                placeholder="Status auswählen"
                class="w-56"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-gray-500">Zustand</label>
              <div class="flex gap-4">
                <div class="flex items-center gap-2">
                  <Checkbox v-model="active" input-id="active" binary />
                  <label for="active">Aktiv</label>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox v-model="archive" input-id="archive" binary />
                  <label for="archive">Archiv</label>
                </div>
              </div>
            </div>
          </div>
        </Panel>

        <div class="flex flex-col items-start gap-2">
          <Button
            label="Exportieren"
            icon="pi pi-file-export"
            severity="success"
            aria-haspopup="true"
            aria-controls="export-menu"
            @click="exportMenu?.toggle"
          />
          <Menu
            ref="export-menu"
            id="export-menu"
            :model="exportOptions"
            popup
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
        <Column field="name" header="Produkt" />
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
          </template>
        </Column>
        <Column field="date" header="Bestelldatum" />
        <Column field="sum" header="Summe" />
        <Column field="quantity" header="Stück" />
        <Column header="Aktionen" header-class="w-24" body-class="w-24 flex justify-center">
          <template #body="{ data }">
            <Button
              icon="pi pi-ellipsis-h"
              severity="secondary"
              text
              aria-haspopup="true"
              aria-controls="row-actions-menu"
              @click="(e) => toggleRowMenu(e, data)"
            />
          </template>
        </Column>
      </DataTable>
      <Menu
        ref="row-actions-menu"
        id="row-actions-menu"
        :model="rowActionOptions"
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
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import Button from 'primevue/button'
  import Card from 'primevue/card'
  import Tag from 'primevue/tag'
  import Panel from 'primevue/panel'
  import Calendar from 'primevue/calendar'
  import Dropdown from 'primevue/dropdown'
  import Checkbox from 'primevue/checkbox'
  import Menu from 'primevue/menu'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'

  const stats = [
    { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
    { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
    { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'success' },
    { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' },
  ]

  const dateRange = ref()
  const status = ref()
  const statusOptions = ['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']
  const active = ref(true)
  const archive = ref(false)

  const exportMenu = useTemplateRef('export-menu')
  const exportOptions = [{ label: 'Als CSV exportieren' }, { label: 'Als PDF exportieren' }]

  const products = ref([
    { name: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', sum: '12.400 €', quantity: 312 },
    { name: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', sum: '8.920 €', quantity: 485 },
    { name: 'Sensor X1', status: 'Versendet', date: '09.05.2026', sum: '6.100 €', quantity: 150 },
    { name: 'System V5', status: 'Bezahlt', date: '12.06.2026', sum: '10.250 €', quantity: 2 },
  ])

  const rowActionsMenu = useTemplateRef('row-actions-menu')
  const rowActionOptions = [
    { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Status aktualisieren', icon: 'pi pi-list' },
    { label: 'Löschen', icon: 'pi pi-trash' },
  ]

  function toggleRowMenu(event: Event, data: any) {
    rowActionsMenu.value?.toggle(event)
  }

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