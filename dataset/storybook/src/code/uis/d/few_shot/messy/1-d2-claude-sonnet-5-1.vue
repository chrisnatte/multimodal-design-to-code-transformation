<template>
  <div class="flex min-h-screen bg-white">
    <!-- Sidebar -->
    <aside class="w-64 bg-slate-50 p-6">
      <h2 class="mb-6 text-base text-gray-800">Navigation</h2>
      <nav class="flex flex-col gap-2">
        <Button
          label="Dashboard"
          icon="pi pi-th-large"
          text
          class="!justify-start !bg-emerald-100 !text-emerald-700 !border !border-emerald-200"
        />
        <Button label="Kunden" icon="pi pi-users" text severity="secondary" class="!justify-start !border !border-slate-300" />
        <Button label="Berichte" icon="pi pi-file" text severity="secondary" class="!justify-start !border !border-slate-300" />
        <Button label="Einstellungen" icon="pi pi-cog" text severity="secondary" class="!justify-start !border !border-slate-300" />
      </nav>
    </aside>

    <!-- Main content -->
    <main class="flex-1 p-8">
      <div class="mb-6">
        <h1 class="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p class="mt-1 text-gray-500">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Stat cards -->
      <div class="mb-6 grid grid-cols-4 gap-4">
        <div v-for="stat in stats" :key="stat.label" class="rounded-xl bg-slate-50 p-4">
          <div class="text-2xl font-medium text-gray-800">{{ stat.value }}</div>
          <div class="mt-1 text-sm text-gray-500">{{ stat.label }}</div>
          <Tag :value="stat.change" :severity="stat.severity" class="mt-2" />
        </div>
      </div>

      <!-- Filter + Export -->
      <div class="mb-6 flex items-start gap-4">
        <div class="flex-1 rounded-lg bg-slate-50">
          <div class="flex items-center justify-between border-b border-slate-200 px-6 py-3">
            <span class="text-sm font-semibold text-gray-700">Filter</span>
            <i class="pi pi-chevron-down text-gray-500"></i>
          </div>
          <div class="flex gap-8 p-6">
            <div class="flex flex-col gap-2">
              <label class="text-sm text-gray-700">Zeitraum</label>
              <DatePicker v-model="dateRange" placeholder="Zeitraum wählen" show-icon input-class="w-56" />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-gray-700">Status</label>
              <Select
                v-model="selectedStatus"
                :options="statusOptions"
                filter
                placeholder="Status auswählen"
                class="w-56"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-gray-700">Zustand</label>
              <div class="flex gap-4 pt-2">
                <div class="flex items-center gap-2">
                  <Checkbox v-model="active" input-id="active" binary />
                  <label for="active">Aktiv</label>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox v-model="archived" input-id="archived" binary />
                  <label for="archived">Archiv</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <Button label="Exportieren" icon="pi pi-file-export" iconPos="right" severity="primary" @click="exportMenu?.toggle" />
          <Menu ref="export-menu" :model="exportOptions" popup />
        </div>
      </div>

      <!-- Table -->
      <DataTable :value="orders">
        <Column field="product" header="Produkt" />
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
        :pt="{
          list: 'flex flex-col !gap-2 !p-2.5',
        }"
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
  import Tag from 'primevue/tag'
  import DatePicker from 'primevue/datepicker'
  import Select from 'primevue/select'
  import Checkbox from 'primevue/checkbox'
  import Menu from 'primevue/menu'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'

  const stats = [
    { label: 'Umsatz in €', value: '42.8 Tsd.', change: '+12 %', severity: 'success' },
    { label: 'Bestellungen', value: '1.247', change: '+8 %', severity: 'success' },
    { label: 'Nutzer', value: '3.891', change: '+2 %', severity: 'warn' },
    { label: 'Retouren', value: '89', change: '+23 %', severity: 'danger' },
  ]

  const dateRange = ref()
  const selectedStatus = ref()
  const statusOptions = ['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']
  const active = ref(true)
  const archived = ref(false)

  const exportMenu = useTemplateRef('export-menu')
  const exportOptions = [{ label: 'Als CSV exportieren' }, { label: 'Als PDF exportieren' }]

  const orders = ref([
    { product: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', total: '12.400 €', quantity: 312 },
    { product: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', total: '8.920 €', quantity: 485 },
    { product: 'Sensor X1', status: 'Versendet', date: '09.05.2026', total: '6.100 €', quantity: 150 },
    { product: 'System V5', status: 'Bezahlt', date: '12.06.2026', total: '10.250 €', quantity: 2 },
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