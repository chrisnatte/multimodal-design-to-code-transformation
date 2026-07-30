<template>
  <div class="flex min-h-screen bg-white">
    <!-- Sidebar Navigation -->
    <aside class="w-64 bg-slate-50 p-6">
      <h2 class="mb-4 text-base text-gray-800">Navigation</h2>
      <nav class="flex flex-col gap-2">
        <Button
          label="Dashboard"
          icon="pi pi-th-large"
          text
          class="!justify-start !border !border-emerald-200 !bg-emerald-100 !text-emerald-700"
        />
        <Button
          label="Kunden"
          icon="pi pi-users"
          text
          class="!justify-start !border !border-slate-300 !text-slate-600"
        />
        <Button
          label="Berichte"
          icon="pi pi-file"
          text
          class="!justify-start !border !border-slate-300 !text-slate-600"
        />
        <Button
          label="Einstellungen"
          icon="pi pi-cog"
          text
          class="!justify-start !border !border-slate-300 !text-slate-600"
        />
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-8">
      <h1 class="text-3xl font-bold text-slate-800">Dashboard</h1>
      <p class="mt-1 text-slate-500">Bekomme eine Übersicht über die Projekte.</p>

      <!-- Stat Cards -->
      <div class="mt-6 grid grid-cols-4 gap-4">
        <div v-for="stat in stats" :key="stat.label" class="rounded-xl bg-slate-100 p-4">
          <div class="text-2xl font-medium text-slate-800">{{ stat.value }}</div>
          <div class="mt-1 text-sm text-slate-500">{{ stat.label }}</div>
          <Tag :value="stat.change" :severity="stat.severity" class="mt-2 !text-xs" />
        </div>
      </div>

      <!-- Filter Panel + Export -->
      <div class="mt-6 flex items-start gap-4">
        <div class="flex-1 rounded-lg bg-slate-100">
          <div class="flex items-center justify-between border-b border-slate-200 px-4 py-3">
            <span class="text-sm font-semibold text-slate-800">Filter</span>
            <i class="pi pi-chevron-down text-slate-500"></i>
          </div>
          <div class="flex gap-6 p-4">
            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-700">Zeitraum</label>
              <Calendar v-model="dateRange" placeholder="Zeitraum wählen" show-icon />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-700">Status</label>
              <MultiSelect
                v-model="selectedStatus"
                :options="statusOptions"
                placeholder="Status auswählen"
                filter
                filter-placeholder="Suche..."
                class="w-56"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-700">Zustand</label>
              <div class="flex items-center gap-4">
                <div class="flex items-center gap-2">
                  <Checkbox v-model="isAktiv" input-id="aktiv" binary />
                  <label for="aktiv" class="text-sm">Aktiv</label>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox v-model="isArchiv" input-id="archiv" binary />
                  <label for="archiv" class="text-sm">Archiv</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <Button label="Exportieren" icon="pi pi-file-export" icon-pos="right" severity="primary" @click="exportMenu?.toggle" />
          <Menu ref="export-menu" :model="exportOptions" popup />
        </div>
      </div>

      <!-- Data Table -->
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
          </template>
        </Column>
      </DataTable>
      <Menu
        ref="row-actions-menu"
        id="row-actions-menu"
        :model="rowActionOptions"
        popup
      />
    </main>
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import Button from 'primevue/button'
  import Tag from 'primevue/tag'
  import Calendar from 'primevue/calendar'
  import MultiSelect from 'primevue/multiselect'
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
  const selectedStatus = ref([])
  const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])
  const isAktiv = ref(true)
  const isArchiv = ref(false)

  const exportMenu = useTemplateRef('export-menu')
  const exportOptions = [
    { label: 'Als CSV exportieren', icon: 'pi pi-file' },
    { label: 'Als PDF exportieren', icon: 'pi pi-file-pdf' },
  ]

  const products = ref([
    { produkt: 'Widget Pro', status: 'Angekommen', bestelldatum: '15.04.2026', summe: '12.400 €', stueck: 312 },
    { produkt: 'Gadget Mini', status: 'In Bearbeitung', bestelldatum: '24.04.2026', summe: '8.920 €', stueck: 485 },
    { produkt: 'Sensor X1', status: 'Versendet', bestelldatum: '09.05.2026', summe: '6.100 €', stueck: 150 },
    { produkt: 'System V5', status: 'Bezahlt', bestelldatum: '12.06.2026', summe: '10.250 €', stueck: 2 },
  ])

  const rowActionsMenu = useTemplateRef('row-actions-menu')
  const rowActionOptions = [
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