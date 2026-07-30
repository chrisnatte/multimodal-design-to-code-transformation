<template>
  <div class="flex h-screen w-full bg-slate-50 font-sans text-slate-800">
    <!-- Sidebar -->
    <div class="w-64 flex-shrink-0 p-6 flex flex-col gap-8 border-r border-slate-200 bg-slate-50">
      <div class="text-lg font-medium px-3">Navigation</div>
      <div class="flex flex-col gap-2">
        <Button
          v-for="item in sidebarItems"
          :key="item.label"
          :label="item.label"
          :icon="item.icon"
          :severity="item.active ? 'success' : 'secondary'"
          :variant="item.active ? 'outlined' : 'text'"
          class="w-full !justify-start"
        />
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col p-8 gap-8 overflow-y-auto bg-white">
      <!-- Header -->
      <div class="flex justify-between items-start">
        <div class="flex flex-col gap-2">
          <h1 class="text-3xl font-bold m-0">Dashboard</h1>
          <p class="text-slate-500 m-0">Bekomme eine Übersicht über die Projekte.</p>
        </div>
        <div>
          <Button label="Exportieren" icon="pi pi-download" severity="success" @click="toggleExportMenu" />
          <Menu ref="exportMenu" :model="exportItems" :popup="true" />
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-4 gap-6">
        <div class="bg-slate-50 rounded-xl p-5 flex flex-col gap-4 border border-slate-100">
          <div class="flex flex-col gap-1">
            <span class="text-2xl font-medium">42.8 Tsd.</span>
            <span class="text-sm text-slate-500">Umsatz in €</span>
          </div>
          <Tag value="+ 12 %" severity="success" class="w-fit" />
        </div>
        <div class="bg-slate-50 rounded-xl p-5 flex flex-col gap-4 border border-slate-100">
          <div class="flex flex-col gap-1">
            <span class="text-2xl font-medium">1.247</span>
            <span class="text-sm text-slate-500">Bestellungen</span>
          </div>
          <Tag value="+ 8 %" severity="success" class="w-fit" />
        </div>
        <div class="bg-slate-50 rounded-xl p-5 flex flex-col gap-4 border border-slate-100">
          <div class="flex flex-col gap-1">
            <span class="text-2xl font-medium">3.891</span>
            <span class="text-sm text-slate-500">Nutzer</span>
          </div>
          <Tag value="+ 2 %" severity="warn" class="w-fit" />
        </div>
        <div class="bg-slate-50 rounded-xl p-5 flex flex-col gap-4 border border-slate-100">
          <div class="flex flex-col gap-1">
            <span class="text-2xl font-medium">89</span>
            <span class="text-sm text-slate-500">Retouren</span>
          </div>
          <Tag value="+ 23 %" severity="danger" class="w-fit" />
        </div>
      </div>

      <!-- Filter Section -->
      <div class="bg-slate-50 rounded-lg border border-slate-200 flex flex-col">
        <div class="px-4 py-3 border-b border-slate-200 flex items-center gap-2 font-semibold">
          <i class="pi pi-filter"></i>
          Filter
        </div>
        <div class="p-4 flex gap-8">
          <div class="flex flex-col gap-2 w-64">
            <label class="text-sm">Zeitraum</label>
            <DatePicker v-model="dateRange" selectionMode="range" placeholder="Zeitraum wählen" class="w-full" />
          </div>
          <div class="flex flex-col gap-2 w-64">
            <label class="text-sm">Status</label>
            <Select v-model="selectedStatus" :options="statusOptions" placeholder="Status auswählen" class="w-full" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm">Zustand</label>
            <SelectButton v-model="selectedState" :options="stateOptions" />
          </div>
        </div>
      </div>

      <!-- Data Table -->
      <DataTable :value="products" class="border border-slate-200 rounded-lg overflow-hidden">
        <Column field="name" header="Produkt" />
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
          </template>
        </Column>
        <Column field="date" header="Bestelldatum" />
        <Column field="total" header="Summe" />
        <Column field="count" header="Stück" />
        <Column header="Aktionen" bodyStyle="text-align: center">
          <template #body="{ data }">
            <Button icon="pi pi-ellipsis-h" variant="text" rounded severity="secondary" @click="toggleActionMenu($event, data)" />
          </template>
        </Column>
      </DataTable>
      <Menu ref="actionMenu" :model="actionItems" :popup="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Menu from 'primevue/menu'
import Tag from 'primevue/tag'
import DatePicker from 'primevue/datepicker'
import Select from 'primevue/select'
import SelectButton from 'primevue/selectbutton'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const sidebarItems = ref([
  { label: 'Dashboard', icon: 'pi pi-home', active: true },
  { label: 'Kunden', icon: 'pi pi-users', active: false },
  { label: 'Berichte', icon: 'pi pi-chart-bar', active: false },
  { label: 'Einstellungen', icon: 'pi pi-cog', active: false }
])

const exportMenu = ref()
const exportItems = ref([
  { label: 'Als CSV exportieren', icon: 'pi pi-file-excel' },
  { label: 'Als PDF exportieren', icon: 'pi pi-file-pdf' }
])

const toggleExportMenu = (event: Event) => {
  exportMenu.value.toggle(event)
}

const dateRange = ref()
const selectedStatus = ref()
const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])
const selectedState = ref('Aktiv')
const stateOptions = ref(['Aktiv', 'Archiv'])

const products = ref([
  { name: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', total: '12.400 €', count: 312 },
  { name: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', total: '8.920 €', count: 485 },
  { name: 'Sensor X1', status: 'Versendet', date: '09.05.2026', total: '6.100 €', count: 150 },
  { name: 'System V5', status: 'Bezahlt', date: '12.06.2026', total: '10.250 €', count: 2 }
])

const getStatusSeverity = (status: string) => {
  switch (status) {
    case 'Angekommen': return 'success'
    case 'In Bearbeitung': return 'warn'
    case 'Versendet': return 'secondary'
    case 'Bezahlt': return 'info'
    default: return 'info'
  }
}

const actionMenu = ref()
const selectedProduct = ref()
const actionItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])

const toggleActionMenu = (event: Event, data: any) => {
  selectedProduct.value = data
  actionMenu.value.toggle(event)
}
</script>