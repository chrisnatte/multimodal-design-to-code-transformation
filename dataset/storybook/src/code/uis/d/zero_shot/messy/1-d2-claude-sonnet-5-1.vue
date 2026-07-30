<template>
  <div class="flex bg-white min-h-screen">
    <!-- Sidebar -->
    <div class="w-64 bg-slate-100 p-6 flex flex-col gap-2">
      <span class="text-base text-gray-700 mb-4">Navigation</span>
      <Button
        label="Dashboard"
        icon="pi pi-th-large"
        class="w-full justify-start bg-emerald-100 border-emerald-200 text-emerald-700"
        text
      />
      <Button
        label="Kunden"
        icon="pi pi-users"
        class="w-full justify-start border-slate-300 text-slate-600"
        outlined
      />
      <Button
        label="Berichte"
        icon="pi pi-file"
        class="w-full justify-start border-slate-300 text-slate-600"
        outlined
      />
      <Button
        label="Einstellungen"
        icon="pi pi-cog"
        class="w-full justify-start border-slate-300 text-slate-600"
        outlined
      />
    </div>

    <!-- Main content -->
    <div class="flex-1 p-8">
      <h1 class="text-3xl font-bold text-slate-800 mb-1">Dashboard</h1>
      <p class="text-slate-500 mb-6">Bekomme eine Übersicht über die Projekte.</p>

      <!-- Stat Cards -->
      <div class="flex gap-4 mb-6">
        <div class="bg-slate-100 rounded-xl p-4 w-48" v-for="stat in stats" :key="stat.label">
          <div class="text-2xl font-medium text-slate-800">{{ stat.value }}</div>
          <div class="text-sm text-slate-500 mb-2">{{ stat.label }}</div>
          <Tag :value="stat.change" :severity="stat.severity" class="text-xs font-bold" />
        </div>
      </div>

      <div class="flex gap-4 mb-6 items-start">
        <!-- Filter Panel -->
        <div class="bg-slate-100 rounded-lg flex-1">
          <div class="flex items-center justify-between px-4 py-3 border-b border-slate-200">
            <span class="font-semibold text-sm text-slate-700">Filter</span>
            <i class="pi pi-chevron-down text-slate-500"></i>
          </div>
          <div class="p-4 flex gap-6">
            <!-- Zeitraum -->
            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-700">Zeitraum</label>
              <Calendar
                v-model="dateRange"
                inline
                placeholder="Zeitraum wählen"
                class="w-[268px]"
              />
            </div>

            <!-- Status -->
            <div class="flex flex-col gap-2 w-56">
              <label class="text-sm text-slate-700">Status</label>
              <Dropdown
                v-model="selectedStatus"
                :options="statusOptions"
                placeholder="Status auswählen"
                filter
                filterPlaceholder="Suche..."
                class="w-full"
              />
            </div>

            <!-- Zustand -->
            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-700">Zustand</label>
              <div class="flex gap-4 mt-2">
                <div class="flex items-center gap-2">
                  <Checkbox v-model="aktivChecked" binary inputId="aktiv" />
                  <label for="aktiv" class="text-sm">Aktiv</label>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox v-model="archivChecked" binary inputId="archiv" />
                  <label for="archiv" class="text-sm">Archiv</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Export -->
        <div class="flex flex-col gap-2">
          <Button
            label="Exportieren"
            icon="pi pi-file-export"
            iconPos="right"
            class="bg-emerald-500 border-emerald-500"
          />
          <div class="bg-white border border-slate-200 rounded-md p-2 flex flex-col gap-2 w-48">
            <Button
              label="Als CSV exportieren"
              text
              class="justify-start border border-slate-200 text-sm"
            />
            <Button
              label="Als PDF exportieren"
              text
              class="justify-start border border-slate-200 text-sm"
            />
          </div>
        </div>
      </div>

      <!-- Data Table -->
      <DataTable :value="orders" class="text-sm">
        <Column field="produkt" header="Produkt" />
        <Column field="status" header="Status">
          <template #body="slotProps">
            <Tag :value="slotProps.data.status" :severity="slotProps.data.severity" />
          </template>
        </Column>
        <Column field="datum" header="Bestelldatum" />
        <Column field="summe" header="Summe" />
        <Column field="stueck" header="Stück" />
        <Column header="Aktionen">
          <template #body="slotProps">
            <Button
              icon="pi pi-ellipsis-h"
              text
              rounded
              @click="toggleMenu($event, slotProps.data)"
            />
          </template>
        </Column>
      </DataTable>

      <Menu ref="menu" :model="menuItems" :popup="true" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Calendar from 'primevue/calendar'
import Dropdown from 'primevue/dropdown'
import Checkbox from 'primevue/checkbox'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import Menu from 'primevue/menu'

const stats = ref([
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warning' },
  { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' }
])

const dateRange = ref(null)

const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])
const selectedStatus = ref(null)

const aktivChecked = ref(true)
const archivChecked = ref(false)

const orders = ref([
  {
    produkt: 'Widget Pro',
    status: 'Angekommen',
    severity: 'success',
    datum: '15.04.2026',
    summe: '12.400 €',
    stueck: 312
  },
  {
    produkt: 'Gadget Mini',
    status: 'In Bearbeitung',
    severity: 'warning',
    datum: '24.04.2026',
    summe: '8.920 €',
    stueck: 485
  },
  {
    produkt: 'Sensor X1',
    status: 'Versendet',
    severity: 'secondary',
    datum: '09.05.2026',
    summe: '6.100 €',
    stueck: 150
  },
  {
    produkt: 'System V5',
    status: 'Bezahlt',
    severity: 'info',
    datum: '12.06.2026',
    summe: '10.250 €',
    stueck: 2
  }
])

const menu = ref()
const selectedRow = ref(null)

const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])

const toggleMenu = (event, row) => {
  selectedRow.value = row
  menu.value.toggle(event)
}
</script>