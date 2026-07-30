<template>
  <div class="flex min-h-screen w-full bg-white">
    <!-- Sidebar -->
    <div class="w-64 flex-shrink-0 bg-surface-50 p-6">
      <div class="mb-8 text-base font-normal text-black">Navigation</div>
      <div class="flex flex-col gap-2">
        <Button
          v-for="item in navigation"
          :key="item.label"
          :label="item.label"
          :icon="item.icon"
          :severity="item.active ? 'success' : 'secondary'"
          :variant="item.active ? 'light' : 'text'"
          class="w-full !justify-start"
        />
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex flex-1 flex-col gap-8 p-8">
      <!-- Header -->
      <div class="flex items-start justify-between">
        <div>
          <h1 class="mb-2 text-3xl font-bold text-black">Dashboard</h1>
          <p class="text-base text-black">Bekomme eine Übersicht über die Projekte.</p>
        </div>
        <div>
          <Button
            label="Exportieren"
            icon="pi pi-chevron-down"
            icon-pos="right"
            severity="success"
            @click="toggleExportMenu"
          />
          <Menu ref="exportMenu" :model="exportOptions" popup />
        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-4 gap-6">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="flex flex-col gap-4 rounded-xl bg-surface-50 p-6"
        >
          <div>
            <div class="text-2xl font-medium text-black">{{ stat.value }}</div>
            <div class="text-sm text-black">{{ stat.label }}</div>
          </div>
          <div :class="['w-fit rounded-md px-2 py-1 text-xs font-bold', stat.trendColor]">
            {{ stat.trend }}
          </div>
        </div>
      </div>

      <!-- Filter -->
      <div class="flex flex-col rounded-lg bg-surface-50">
        <div class="flex items-center justify-between border-b border-surface-200 px-4 py-3">
          <span class="text-sm font-semibold text-black">Filter</span>
          <i class="pi pi-chevron-up text-black"></i>
        </div>
        <div class="flex gap-8 p-4">
          <div class="flex flex-1 flex-col gap-2">
            <label class="text-sm text-black">Zeitraum</label>
            <DatePicker
              v-model="dateRange"
              selection-mode="range"
              placeholder="Zeitraum wählen"
              class="w-full"
            />
          </div>
          <div class="flex flex-1 flex-col gap-2">
            <label class="text-sm text-black">Status</label>
            <Select
              v-model="selectedStatus"
              :options="statusOptions"
              placeholder="Status auswählen"
              class="w-full"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm text-black">Zustand</label>
            <SelectButton v-model="selectedZustand" :options="zustandOptions" />
          </div>
        </div>
      </div>

      <!-- Table -->
      <div class="rounded-lg border border-surface-200 bg-white">
        <DataTable :value="products">
          <Column field="name" header="Produkt" />
          <Column field="status" header="Status">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
            </template>
          </Column>
          <Column field="date" header="Bestelldatum" />
          <Column field="total" header="Summe" />
          <Column field="count" header="Stück" />
          <Column header="Aktionen">
            <template #body>
              <Button
                icon="pi pi-ellipsis-h"
                variant="text"
                severity="secondary"
                @click="toggleActionMenu"
              />
            </template>
          </Column>
        </DataTable>
        <Menu ref="actionMenu" :model="actionOptions" popup />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import Button from 'primevue/button'
  import Menu from 'primevue/menu'
  import DatePicker from 'primevue/datepicker'
  import Select from 'primevue/select'
  import SelectButton from 'primevue/selectbutton'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import Tag from 'primevue/tag'

  const navigation = [
    { label: 'Dashboard', icon: 'pi pi-home', active: true },
    { label: 'Kunden', icon: 'pi pi-users', active: false },
    { label: 'Berichte', icon: 'pi pi-chart-bar', active: false },
    { label: 'Einstellungen', icon: 'pi pi-cog', active: false },
  ]

  const stats = [
    {
      value: '42.8 Tsd.',
      label: 'Umsatz in €',
      trend: '+ 12 %',
      trendColor: 'bg-green-100 text-green-800',
    },
    {
      value: '1.247',
      label: 'Bestellungen',
      trend: '+ 8 %',
      trendColor: 'bg-green-100 text-green-800',
    },
    { value: '3.891', label: 'Nutzer', trend: '+ 2 %', trendColor: 'bg-orange-100 text-orange-800' },
    { value: '89', label: 'Retouren', trend: '+ 23 %', trendColor: 'bg-red-100 text-red-800' },
  ]

  const dateRange = ref()
  const selectedStatus = ref()
  const statusOptions = ['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']

  const selectedZustand = ref('Aktiv')
  const zustandOptions = ['Aktiv', 'Archiv']

  const products = ref([
    { name: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', total: '12.400 €', count: 312 },
    {
      name: 'Gadget Mini',
      status: 'In Bearbeitung',
      date: '24.04.2026',
      total: '8.920 €',
      count: 485,
    },
    { name: 'Sensor X1', status: 'Versendet', date: '09.05.2026', total: '6.100 €', count: 150 },
    { name: 'System V5', status: 'Bezahlt', date: '12.06.2026', total: '10.250 €', count: 2 },
  ])

  const exportMenu = useTemplateRef('exportMenu')
  const exportOptions = [
    { label: 'Als CSV exportieren', icon: 'pi pi-file-excel' },
    { label: 'Als PDF exportieren', icon: 'pi pi-file-pdf' },
  ]

  const actionMenu = useTemplateRef('actionMenu')
  const actionOptions = [
    { label: 'Bearbeiten', icon: 'pi pi-pencil' },
    { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
    { label: 'Löschen', icon: 'pi pi-trash' },
  ]

  const toggleExportMenu = (event: Event) => {
    exportMenu.value?.toggle(event)
  }

  const toggleActionMenu = (event: Event) => {
    actionMenu.value?.toggle(event)
  }

  const getStatusSeverity = (status: string) => {
    switch (status) {
      case 'Angekommen':
        return 'success'
      case 'In Bearbeitung':
        return 'warn'
      case 'Versendet':
        return 'secondary'
      case 'Bezahlt':
        return 'info'
      default:
        return 'info'
    }
  }
</script>