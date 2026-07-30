<template>
  <div class="flex min-h-screen bg-white">
    <!-- Sidebar -->
    <aside class="w-64 bg-slate-50 p-6 flex flex-col gap-4">
      <span class="text-base text-gray-700 mb-2">Navigation</span>
      <nav class="flex flex-col gap-2">
        <Button
          v-for="item in navItems"
          :key="item.label"
          :label="item.label"
          :icon="item.icon"
          text
          class="justify-start w-full"
          :class="item.active ? 'bg-emerald-100 border border-emerald-300 text-emerald-700' : 'border border-slate-300 text-slate-600'"
        />
      </nav>
    </aside>

    <!-- Main content -->
    <main class="flex-1 p-8">
      <!-- Header -->
      <div class="mb-6">
        <h1 class="text-3xl font-bold">Dashboard</h1>
        <p class="text-base text-gray-500">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Stat cards -->
      <div class="flex gap-4 mb-8 flex-wrap">
        <Card v-for="stat in stats" :key="stat.label" class="w-48 bg-slate-50">
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium">{{ stat.value }}</span>
              <span class="text-sm text-gray-500">{{ stat.label }}</span>
              <Tag :value="stat.change" :severity="stat.severity" class="w-fit" />
            </div>
          </template>
        </Card>
      </div>

      <div class="flex gap-6 items-start flex-wrap">
        <!-- Filter Panel -->
        <Card class="w-[692px] bg-slate-50">
          <template #title>
            <div class="flex justify-between items-center">
              <span class="text-sm font-semibold">Filter</span>
              <i class="pi pi-chevron-down text-sm"></i>
            </div>
          </template>
          <template #content>
            <div class="flex gap-4 flex-wrap">
              <div class="flex flex-col gap-2 w-56">
                <label class="text-sm">Zeitraum</label>
                <Calendar
                  v-model="dateRange"
                  selectionMode="range"
                  placeholder="Zeitraum wählen"
                  class="w-full"
                  showIcon
                />
              </div>
              <div class="flex flex-col gap-2 w-56">
                <label class="text-sm">Status</label>
                <MultiSelect
                  v-model="selectedStatuses"
                  :options="statusOptions"
                  optionLabel="label"
                  placeholder="Status auswählen"
                  class="w-full"
                  filter
                  filterPlaceholder="Suche..."
                />
              </div>
              <div class="flex flex-col gap-2 w-36">
                <label class="text-sm">Zustand</label>
                <SelectButton
                  v-model="zustand"
                  :options="zustandOptions"
                  optionLabel="label"
                  optionValue="value"
                />
              </div>
            </div>
          </template>
        </Card>

        <!-- Export -->
        <div class="flex flex-col gap-2">
          <Button
            label="Exportieren"
            icon="pi pi-download"
            iconPos="right"
            class="bg-emerald-500 border-emerald-500"
            @click="toggleExportMenu"
          />
          <Menu ref="exportMenuRef" :model="exportItems" :popup="true" />
        </div>
      </div>

      <!-- Data Table -->
      <div class="mt-8">
        <DataTable :value="products" class="w-full">
          <Column field="produkt" header="Produkt" />
          <Column field="status" header="Status">
            <template #body="slotProps">
              <Tag :value="slotProps.data.status" :severity="slotProps.data.severity" />
            </template>
          </Column>
          <Column field="bestelldatum" header="Bestelldatum" />
          <Column field="summe" header="Summe" />
          <Column field="stueck" header="Stück" />
          <Column header="Aktionen">
            <template #body="slotProps">
              <Button icon="pi pi-ellipsis-h" text @click="(e) => toggleActionMenu(e, slotProps.data)" />
            </template>
          </Column>
        </DataTable>
        <Menu ref="actionMenuRef" :model="actionItems" :popup="true" />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import Calendar from 'primevue/calendar'
import MultiSelect from 'primevue/multiselect'
import SelectButton from 'primevue/selectbutton'
import Menu from 'primevue/menu'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

// Sidebar nav
const navItems = ref([
  { label: 'Dashboard', icon: 'pi pi-home', active: true },
  { label: 'Kunden', icon: 'pi pi-users', active: false },
  { label: 'Berichte', icon: 'pi pi-chart-bar', active: false },
  { label: 'Einstellungen', icon: 'pi pi-cog', active: false }
])

// Stat cards
const stats = ref([
  { label: 'Umsatz in €', value: '42.8 Tsd.', change: '+12 %', severity: 'success' },
  { label: 'Bestellungen', value: '1.247', change: '+8 %', severity: 'success' },
  { label: 'Nutzer', value: '3.891', change: '+2 %', severity: 'warning' },
  { label: 'Retouren', value: '89', change: '+23 %', severity: 'danger' }
])

// Filter state
const dateRange = ref(null)
const selectedStatuses = ref([])
const statusOptions = ref([
  { label: 'Bezahlt' },
  { label: 'In Bearbeitung' },
  { label: 'Versendet' },
  { label: 'Angekommen' }
])
const zustand = ref('aktiv')
const zustandOptions = ref([
  { label: 'Aktiv', value: 'aktiv' },
  { label: 'Archiv', value: 'archiv' }
])

// Export menu
const exportMenuRef = ref(null)
const exportItems = ref([
  { label: 'Als CSV exportieren', icon: 'pi pi-file' },
  { label: 'Als PDF exportieren', icon: 'pi pi-file-pdf' }
])
const toggleExportMenu = (event) => {
  exportMenuRef.value.toggle(event)
}

// Data table
const products = ref([
  {
    produkt: 'Widget Pro',
    status: 'Angekommen',
    severity: 'success',
    bestelldatum: '15.04.2026',
    summe: '12.400 €',
    stueck: '312'
  },
  {
    produkt: 'Gadget Mini',
    status: 'In Bearbeitung',
    severity: 'warning',
    bestelldatum: '24.04.2026',
    summe: '8.920 €',
    stueck: '485'
  },
  {
    produkt: 'Sensor X1',
    status: 'Versendet',
    severity: 'secondary',
    bestelldatum: '09.05.2026',
    summe: '6.100 €',
    stueck: '150'
  },
  {
    produkt: 'System V5',
    status: 'Bezahlt',
    severity: 'info',
    bestelldatum: '12.06.2026',
    summe: '10.250 €',
    stueck: '2'
  }
])

// Row action menu
const actionMenuRef = ref(null)
const selectedRow = ref(null)
const actionItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])
const toggleActionMenu = (event, rowData) => {
  selectedRow.value = rowData
  actionMenuRef.value.toggle(event)
}
</script>