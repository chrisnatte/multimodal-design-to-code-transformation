<template>
  <div class="flex bg-white min-h-screen">
    <!-- Sidebar -->
    <div class="w-64 bg-slate-100 p-6 flex flex-col gap-6">
      <span class="text-base text-gray-700">Navigation</span>
      <div class="flex flex-col gap-2">
        <Button
          v-for="item in navItems"
          :key="item.label"
          :label="item.label"
          :icon="item.icon"
          text
          class="justify-start w-full"
          :class="item.active ? '!bg-emerald-100 !text-emerald-700 !border-emerald-200' : '!text-slate-600'"
        />
      </div>
    </div>

    <!-- Main content -->
    <div class="flex-1 p-8 flex flex-col gap-8">
      <!-- Page header -->
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Dashboard</h1>
        <span class="text-base text-gray-600">Bekomme eine Übersicht über die Projekte.</span>
      </div>

      <!-- Stat cards -->
      <div class="flex gap-4 flex-wrap">
        <Card v-for="stat in stats" :key="stat.label" class="w-48 !bg-slate-100 !shadow-none">
          <template #content>
            <div class="flex flex-col gap-3">
              <div class="flex flex-col">
                <span class="text-2xl font-medium">{{ stat.value }}</span>
                <span class="text-sm text-gray-600">{{ stat.label }}</span>
              </div>
              <Tag :value="stat.change" :severity="stat.severity" rounded />
            </div>
          </template>
        </Card>
      </div>

      <!-- Filter + Export row -->
      <div class="flex gap-4 items-start">
        <!-- Filter Panel -->
        <Card class="flex-1 !bg-slate-100 !shadow-none">
          <template #title>
            <div class="flex justify-between items-center">
              <span class="text-sm font-semibold">Filter</span>
              <i class="pi pi-filter-slash text-sm"></i>
            </div>
          </template>
          <template #content>
            <div class="flex gap-6 flex-wrap">
              <div class="flex flex-col gap-2 w-56">
                <label class="text-sm">Zeitraum</label>
                <Calendar v-model="dateRange" selectionMode="range" placeholder="Zeitraum wählen" showIcon class="w-full" />
              </div>
              <div class="flex flex-col gap-2 w-56">
                <label class="text-sm">Status</label>
                <Dropdown v-model="selectedStatus" :options="statusOptions" optionLabel="label" filter placeholder="Status wählen" class="w-full" />
              </div>
              <div class="flex flex-col gap-2 w-36">
                <label class="text-sm">Zustand</label>
                <div class="flex gap-4 items-center pt-2">
                  <div class="flex items-center gap-1">
                    <Checkbox v-model="zustand" value="aktiv" inputId="aktiv" />
                    <label for="aktiv" class="text-sm">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-1">
                    <Checkbox v-model="zustand" value="archiv" inputId="archiv" />
                    <label for="archiv" class="text-sm">Archiv</label>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Card>

        <!-- Export button -->
        <div class="flex flex-col gap-2">
          <Button label="Exportieren" icon="pi pi-download" iconPos="right" severity="success" @click="toggleExportMenu" />
          <Menu ref="exportMenu" :model="exportItems" :popup="true" />
        </div>
      </div>

      <!-- Table -->
      <Card class="!shadow-none">
        <template #content>
          <DataTable :value="products" class="w-full">
            <Column field="produkt" header="Produkt" />
            <Column field="status" header="Status">
              <template #body="{ data }">
                <Tag :value="data.status" :severity="data.statusSeverity" rounded />
              </template>
            </Column>
            <Column field="bestelldatum" header="Bestelldatum" />
            <Column field="summe" header="Summe" />
            <Column field="stueck" header="Stück" />
            <Column header="Aktionen">
              <template #body="{ data }">
                <Button icon="pi pi-ellipsis-h" text rounded @click="toggleActionMenu($event, data)" />
                <Menu ref="actionMenu" :model="actionItems" :popup="true" />
              </template>
            </Column>
          </DataTable>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Calendar from 'primevue/calendar'
import Dropdown from 'primevue/dropdown'
import Checkbox from 'primevue/checkbox'
import Menu from 'primevue/menu'

const navItems = ref([
  { label: 'Dashboard', icon: 'pi pi-home', active: true },
  { label: 'Kunden', icon: 'pi pi-users', active: false },
  { label: 'Berichte', icon: 'pi pi-chart-bar', active: false },
  { label: 'Einstellungen', icon: 'pi pi-cog', active: false }
])

const stats = ref([
  { label: 'Umsatz in €', value: '42.8 Tsd.', change: '+12 %', severity: 'success' },
  { label: 'Bestellungen', value: '1.247', change: '+8 %', severity: 'success' },
  { label: 'Nutzer', value: '3.891', change: '+2 %', severity: 'warning' },
  { label: 'Retouren', value: '89', change: '+23 %', severity: 'danger' }
])

const dateRange = ref(null)

const statusOptions = ref([
  { label: 'Angekommen' },
  { label: 'In Bearbeitung' },
  { label: 'Versendet' },
  { label: 'Bezahlt' }
])
const selectedStatus = ref(null)

const zustand = ref([])

const products = ref([
  { produkt: 'Widget Pro', status: 'Angekommen', statusSeverity: 'success', bestelldatum: '15.04.2026', summe: '12.400 €', stueck: '312' },
  { produkt: 'Gadget Mini', status: 'In Bearbeitung', statusSeverity: 'warning', bestelldatum: '24.04.2026', summe: '8.920 €', stueck: '485' },
  { produkt: 'Sensor X1', status: 'Versendet', statusSeverity: 'secondary', bestelldatum: '09.05.2026', summe: '6.100 €', stueck: '150' },
  { produkt: 'System V5', status: 'Bezahlt', statusSeverity: 'info', bestelldatum: '12.06.2026', summe: '10.250 €', stueck: '2' }
])

const exportMenu = ref(null)
const exportItems = ref([
  { label: 'Als CSV exportieren', icon: 'pi pi-file' },
  { label: 'Als PDF exportieren', icon: 'pi pi-file-pdf' }
])
const toggleExportMenu = (event) => {
  exportMenu.value.toggle(event)
}

const actionMenu = ref(null)
const actionItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])
const toggleActionMenu = (event) => {
  actionMenu.value.toggle(event)
}
</script>