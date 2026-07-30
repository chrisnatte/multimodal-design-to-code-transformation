<template>
  <div class="flex min-h-screen bg-white">
    <!-- Sidebar -->
    <aside class="w-64 bg-slate-50 p-6">
      <h2 class="mb-4 text-base font-normal">Navigation</h2>
      <nav class="flex flex-col gap-2">
        <Button
          label="Dashboard"
          icon="pi pi-home"
          text
          class="w-full !justify-start !bg-emerald-100 !text-emerald-700 !border !border-emerald-200"
        />
        <Button label="Kunden" icon="pi pi-users" text severity="secondary" class="w-full !justify-start" />
        <Button label="Berichte" icon="pi pi-chart-bar" text severity="secondary" class="w-full !justify-start" />
        <Button label="Einstellungen" icon="pi pi-cog" text severity="secondary" class="w-full !justify-start" />
      </nav>
    </aside>

    <!-- Main content -->
    <main class="flex-1 p-6">
      <!-- Header -->
      <div class="mb-6">
        <h1 class="text-3xl font-bold">Dashboard</h1>
        <p class="text-base text-gray-600">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Stat cards -->
      <div class="mb-6 flex gap-4">
        <div class="flex w-48 flex-col gap-2 rounded-xl bg-slate-50 p-4">
          <span class="text-2xl font-medium">42.8 Tsd.</span>
          <span class="text-sm">Umsatz in €</span>
          <Tag value="+12 %" class="w-fit !bg-emerald-100 !text-emerald-700" />
        </div>
        <div class="flex w-48 flex-col gap-2 rounded-xl bg-slate-50 p-4">
          <span class="text-2xl font-medium">1.247</span>
          <span class="text-sm">Bestellungen</span>
          <Tag value="+8 %" class="w-fit !bg-emerald-100 !text-emerald-700" />
        </div>
        <div class="flex w-48 flex-col gap-2 rounded-xl bg-slate-50 p-4">
          <span class="text-2xl font-medium">3.891</span>
          <span class="text-sm">Nutzer</span>
          <Tag value="+2 %" class="w-fit !bg-orange-100 !text-orange-700" />
        </div>
        <div class="flex w-48 flex-col gap-2 rounded-xl bg-slate-50 p-4">
          <span class="text-2xl font-medium">89</span>
          <span class="text-sm">Retouren</span>
          <Tag value="+23 %" class="w-fit !bg-red-100 !text-red-700" />
        </div>
      </div>

      <div class="mb-6 flex items-start gap-4">
        <!-- Filter card -->
        <Card class="w-[692px]" :pt="{ body: '!p-0 !gap-0', content: '!p-4' }">
          <template #header>
            <div class="flex items-center justify-between border-b border-gray-200 p-3">
              <span class="text-sm font-semibold">Filter</span>
              <i class="pi pi-filter text-sm" />
            </div>
          </template>
          <template #content>
            <div class="flex gap-4">
              <div class="flex flex-col gap-2">
                <label class="text-sm">Zeitraum</label>
                <Calendar v-model="dateRange" selection-mode="range" placeholder="Zeitraum wählen" show-icon />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm">Status</label>
                <Dropdown
                  v-model="selectedStatus"
                  :options="statusOptions"
                  placeholder="Status auswählen"
                  filter
                  filter-placeholder="Suche..."
                  class="w-56"
                />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm">Zustand</label>
                <div class="flex gap-4">
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="zustand" input-id="aktiv" value="Aktiv" />
                    <label for="aktiv">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="zustand" input-id="archiv" value="Archiv" />
                    <label for="archiv">Archiv</label>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Card>

        <!-- Export card -->
        <div class="flex flex-col gap-2">
          <Button label="Exportieren" icon="pi pi-download" severity="success" @click="exportMenu?.toggle" />
          <Menu ref="export-menu" id="export-menu" :model="exportOptions" popup />
        </div>
      </div>

      <!-- Data table -->
      <DataTable :value="projects">
        <Column field="name" header="Projekt" />
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
          </template>
        </Column>
        <Column field="date" header="Bestelldatum" />
        <Column field="total" header="Summe" />
        <Column field="qty" header="Stück" />
        <Column header="Aktionen" body-class="flex justify-center">
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
      <Menu ref="row-actions-menu" id="row-actions-menu" :model="rowActionOptions" popup />
    </main>
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import Button from 'primevue/button'
  import Tag from 'primevue/tag'
  import Card from 'primevue/card'
  import Calendar from 'primevue/calendar'
  import Dropdown from 'primevue/dropdown'
  import Checkbox from 'primevue/checkbox'
  import Menu from 'primevue/menu'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'

  const dateRange = ref()
  const selectedStatus = ref()
  const statusOptions = ref(['Aktiv', 'In Bearbeitung', 'Versendet', 'Angekommen', 'Bezahlt'])
  const zustand = ref(['Aktiv'])

  const exportMenu = useTemplateRef('export-menu')
  const exportOptions = [{ label: 'Als CSV exportieren' }, { label: 'Als PDF exportieren' }]

  const rowActionsMenu = useTemplateRef('row-actions-menu')
  const rowActionOptions = [
    { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
    { label: 'Löschen', icon: 'pi pi-trash' },
  ]

  const projects = ref([
    { name: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', total: '12.400 €', qty: 312 },
    { name: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', total: '8.920 €', qty: 485 },
    { name: 'Sensor X1', status: 'Versendet', date: '09.05.2026', total: '6.100 €', qty: 150 },
    { name: 'System V5', status: 'Bezahlt', date: '12.06.2026', total: '10.250 €', qty: 2 },
  ])

  function getStatusSeverity(status: string) {
    switch (status) {
      case 'Angekommen':
        return 'success'
      case 'In Bearbeitung':
        return 'warn'
      case 'Versendet':
        return 'info'
      case 'Bezahlt':
        return 'contrast'
    }
  }
</script>