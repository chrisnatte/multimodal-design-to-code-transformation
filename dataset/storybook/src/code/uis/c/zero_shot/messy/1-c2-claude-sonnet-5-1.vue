<template>
  <div class="flex bg-gray-50 min-h-screen">
    <!-- Sidebar -->
    <aside class="w-64 p-6 bg-gray-50">
      <h2 class="text-gray-700 font-semibold mb-4">Navigation</h2>
      <div class="flex flex-col gap-2">
        <Button label="Dashboard" icon="pi pi-th-large" class="justify-start w-full bg-green-100 text-green-700 border-green-200" text />
        <Button label="Kunden" icon="pi pi-users" class="justify-start w-full text-gray-700 border-gray-200" outlined />
        <Button label="Berichte" icon="pi pi-file" class="justify-start w-full text-gray-700 border-gray-200" outlined />
        <Button label="Einstellungen" icon="pi pi-cog" class="justify-start w-full text-gray-700 border-gray-200" outlined />
      </div>
    </aside>

    <!-- Main content -->
    <main class="flex-1 p-8">
      <h1 class="text-3xl font-bold text-gray-800">Dashboard</h1>
      <p class="text-gray-500 mb-6">Bekomme eine Übersicht über die Projekte.</p>

      <!-- Stat cards -->
      <div class="grid grid-cols-4 gap-4 mb-6">
        <Card v-for="stat in stats" :key="stat.label">
          <template #content>
            <div class="text-2xl font-bold text-gray-800">{{ stat.value }}</div>
            <div class="text-gray-500 mb-2">{{ stat.label }}</div>
            <Tag :value="stat.change" :severity="stat.severity" />
          </template>
        </Card>
      </div>

      <!-- Filter + Export -->
      <div class="flex gap-4 mb-6 items-start">
        <Card class="flex-1">
          <template #content>
            <div class="flex justify-between items-center mb-4">
              <span class="font-semibold text-gray-700">Filter</span>
              <i class="pi pi-chevron-down text-gray-500"></i>
            </div>
            <div class="grid grid-cols-3 gap-6">
              <div class="flex flex-col gap-2">
                <label class="text-gray-600 text-sm">Zeitraum</label>
                <DatePicker v-model="dateRange" placeholder="Zeitraum wählen" inline showIcon />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-gray-600 text-sm">Status</label>
                <Select
                  v-model="selectedStatus"
                  :options="statusOptions"
                  optionLabel="label"
                  placeholder="Status auswählen"
                  filter
                  class="w-full"
                />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-gray-600 text-sm">Zustand</label>
                <div class="flex gap-4 items-center">
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="aktiv" binary inputId="aktiv" />
                    <label for="aktiv" class="text-gray-700">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="archiv" binary inputId="archiv" />
                    <label for="archiv" class="text-gray-700">Archiv</label>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Card>

        <div class="flex flex-col gap-3">
          <Button label="Exportieren" icon="pi pi-file-export" iconPos="right" class="bg-green-600 border-green-600" />
          <Card>
            <template #content>
              <div class="flex flex-col gap-2">
                <Button label="Als CSV exportieren" outlined class="text-gray-700 border-gray-200" />
                <Button label="Als PDF exportieren" outlined class="text-gray-700 border-gray-200" />
              </div>
            </template>
          </Card>
        </div>
      </div>

      <!-- Data table -->
      <Card>
        <template #content>
          <DataTable :value="products">
            <Column field="produkt" header="Produkt"></Column>
            <Column field="status" header="Status">
              <template #body="slotProps">
                <Tag :value="slotProps.data.status" :severity="slotProps.data.severity" />
              </template>
            </Column>
            <Column field="bestelldatum" header="Bestelldatum"></Column>
            <Column field="summe" header="Summe"></Column>
            <Column field="stueck" header="Stück"></Column>
            <Column header="Aktionen">
              <template #body="slotProps">
                <Button icon="pi pi-ellipsis-h" text @click="toggleMenu($event, slotProps.data)" />
              </template>
            </Column>
          </DataTable>
        </template>
      </Card>

      <Menu ref="actionMenu" :model="menuItems" :popup="true" />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import DatePicker from 'primevue/datepicker'
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Menu from 'primevue/menu'

const stats = ref([
  { label: 'Umsatz in €', value: '42.8 Tsd.', change: '+12 %', severity: 'success' },
  { label: 'Bestellungen', value: '1.247', change: '+8 %', severity: 'success' },
  { label: 'Nutzer', value: '3.891', change: '+2 %', severity: 'danger' },
  { label: 'Retouren', value: '89', change: '+23 %', severity: 'danger' },
])

const dateRange = ref(null)

const statusOptions = ref([
  { label: 'Bezahlt' },
  { label: 'In Bearbeitung' },
  { label: 'Versendet' },
  { label: 'Angekommen' },
])
const selectedStatus = ref(null)

const aktiv = ref(true)
const archiv = ref(false)

const products = ref([
  { produkt: 'Widget Pro', status: 'Angekommen', severity: 'success', bestelldatum: '15.04.2026', summe: '12.400 €', stueck: 312 },
  { produkt: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warning', bestelldatum: '24.04.2026', summe: '8.920 €', stueck: 485 },
  { produkt: 'Sensor X1', status: 'Versendet', severity: 'secondary', bestelldatum: '09.05.2026', summe: '6.100 €', stueck: 150 },
  { produkt: 'System V5', status: 'Bezahlt', severity: 'info', bestelldatum: '12.06.2026', summe: '10.250 €', stueck: 2 },
])

const actionMenu = ref()
const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' },
])

const toggleMenu = (event, data) => {
  actionMenu.value.toggle(event)
}
</script>