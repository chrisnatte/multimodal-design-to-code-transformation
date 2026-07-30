<template>
  <div class="flex min-h-screen bg-white font-sans text-slate-800">
    <!-- Sidebar -->
    <aside class="w-64 bg-slate-50 p-6 border-r border-slate-200 flex flex-col gap-4">
      <div class="text-base font-normal text-slate-500 mb-2">Navigation</div>
      <nav class="flex flex-col gap-2">
        <a href="#" class="flex items-center gap-3 px-3 py-2 bg-emerald-100 text-emerald-800 rounded-md font-medium">
          <i class="pi pi-home"></i> Dashboard
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-md font-medium">
          <i class="pi pi-users"></i> Kunden
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-md font-medium">
          <i class="pi pi-chart-bar"></i> Berichte
        </a>
        <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-md font-medium">
          <i class="pi pi-cog"></i> Einstellungen
        </a>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-8 flex flex-col gap-8">
      <!-- Header -->
      <header class="flex justify-between items-start">
        <div>
          <h1 class="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p class="text-slate-500 mt-1">Bekomme eine Übersicht über die Projekte.</p>
        </div>
        <div>
          <Button label="Exportieren" icon="pi pi-chevron-down" iconPos="right" severity="success" @click="toggleExportMenu" />
          <Menu ref="exportMenu" :model="exportOptions" :popup="true" />
        </div>
      </header>

      <!-- Stat Cards -->
      <div class="grid grid-cols-4 gap-6">
        <div class="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col gap-4">
          <div>
            <div class="text-2xl font-medium text-slate-900">42.8 Tsd.</div>
            <div class="text-sm text-slate-500">Umsatz in €</div>
          </div>
          <div class="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded w-fit">+ 12 %</div>
        </div>
        <div class="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col gap-4">
          <div>
            <div class="text-2xl font-medium text-slate-900">1.247</div>
            <div class="text-sm text-slate-500">Bestellungen</div>
          </div>
          <div class="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded w-fit">+ 8 %</div>
        </div>
        <div class="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col gap-4">
          <div>
            <div class="text-2xl font-medium text-slate-900">3.891</div>
            <div class="text-sm text-slate-500">Nutzer</div>
          </div>
          <div class="bg-orange-100 text-orange-800 text-xs font-bold px-2 py-1 rounded w-fit">+ 2 %</div>
        </div>
        <div class="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col gap-4">
          <div>
            <div class="text-2xl font-medium text-slate-900">89</div>
            <div class="text-sm text-slate-500">Retouren</div>
          </div>
          <div class="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded w-fit">+ 23 %</div>
        </div>
      </div>

      <!-- Filter Section -->
      <div class="bg-slate-50 border border-slate-200 rounded-lg flex flex-col">
        <div class="px-4 py-3 border-b border-slate-200 flex justify-between items-center">
          <span class="font-semibold text-slate-800">Filter</span>
          <i class="pi pi-chevron-down text-slate-500"></i>
        </div>
        <div class="p-4 flex gap-6 items-end">
          <div class="flex flex-col gap-2 w-64">
            <label class="text-sm text-slate-600">Zeitraum</label>
            <DatePicker v-model="dateRange" selectionMode="range" placeholder="Zeitraum wählen" class="w-full" />
          </div>
          <div class="flex flex-col gap-2 w-52">
            <label class="text-sm text-slate-600">Status</label>
            <Select v-model="selectedStatus" :options="statusOptions" placeholder="Status auswählen" class="w-full" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm text-slate-600">Zustand</label>
            <SelectButton v-model="selectedZustand" :options="zustandOptions" />
          </div>
        </div>
      </div>

      <!-- DataTable -->
      <div class="bg-white border border-slate-200 rounded-lg overflow-hidden">
        <DataTable :value="products" responsiveLayout="scroll">
          <Column field="name" header="Produkt" class="font-medium"></Column>
          <Column field="status" header="Status">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
            </template>
          </Column>
          <Column field="date" header="Bestelldatum"></Column>
          <Column field="total" header="Summe"></Column>
          <Column field="count" header="Stück"></Column>
          <Column header="Aktionen" bodyStyle="text-align: center">
            <template #body>
              <Button icon="pi pi-ellipsis-h" text rounded @click="toggleRowMenu" aria-haspopup="true" aria-controls="row-menu" />
            </template>
          </Column>
        </DataTable>
        <Menu ref="rowMenu" id="row-menu" :model="rowOptions" :popup="true" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import Button from 'primevue/button'
import Menu from 'primevue/menu'
import Select from 'primevue/select'
import DatePicker from 'primevue/datepicker'
import SelectButton from 'primevue/selectbutton'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'

const exportMenu = useTemplateRef('exportMenu')
const exportOptions = [
  { label: 'Als CSV exportieren', icon: 'pi pi-file-excel' },
  { label: 'Als PDF exportieren', icon: 'pi pi-file-pdf' }
]

const toggleExportMenu = (event: Event) => {
  exportMenu.value?.toggle(event)
}

const dateRange = ref()
const selectedStatus = ref()
const statusOptions = ['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']

const zustandOptions = ['Aktiv', 'Archiv']
const selectedZustand = ref('Aktiv')

const products = ref([
  { name: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', total: '12.400 €', count: 312 },
  { name: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', total: '8.920 €', count: 485 },
  { name: 'Sensor X1', status: 'Versendet', date: '09.05.2026', total: '6.100 €', count: 150 },
  { name: 'System V5', status: 'Bezahlt', date: '12.06.2026', total: '10.250 €', count: 2 }
])

const rowMenu = useTemplateRef('rowMenu')
const rowOptions = [
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]

const toggleRowMenu = (event: Event) => {
  rowMenu.value?.toggle(event)
}

const getStatusSeverity = (status: string) => {
  switch (status) {
    case 'Angekommen': return 'success'
    case 'In Bearbeitung': return 'warn'
    case 'Versendet': return 'secondary'
    case 'Bezahlt': return 'info'
    default: return 'info'
  }
}
</script>