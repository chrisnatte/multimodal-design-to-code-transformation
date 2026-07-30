<template>
  <div class="flex min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <div class="w-64 bg-gray-50 p-6">
      <h2 class="text-gray-500 mb-4">Navigation</h2>
      <div class="flex flex-col gap-3">
        <Button label="Dashboard" icon="pi pi-th-large" class="w-full justify-start bg-green-100 text-green-700 border-green-200" text />
        <Button label="Kunden" icon="pi pi-users" class="w-full justify-start" outlined severity="secondary" />
        <Button label="Berichte" icon="pi pi-file" class="w-full justify-start" outlined severity="secondary" />
        <Button label="Einstellungen" icon="pi pi-cog" class="w-full justify-start" outlined severity="secondary" />
      </div>
    </div>

    <!-- Main content -->
    <div class="flex-1 p-8">
      <h1 class="text-3xl font-bold text-gray-800">Dashboard</h1>
      <p class="text-gray-500 mb-6">Bekomme eine Übersicht über die Projekte.</p>

      <!-- Stat cards -->
      <div class="grid grid-cols-4 gap-4 mb-6">
        <Card>
          <template #content>
            <div class="text-2xl font-bold text-gray-800">42.8 Tsd.</div>
            <div class="text-gray-500 text-sm mb-2">Umsatz in €</div>
            <Tag value="+12 %" severity="success" class="bg-green-100 text-green-700"/>
          </template>
        </Card>
        <Card>
          <template #content>
            <div class="text-2xl font-bold text-gray-800">1.247</div>
            <div class="text-gray-500 text-sm mb-2">Bestellungen</div>
            <Tag value="+8 %" severity="success" class="bg-green-100 text-green-700"/>
          </template>
        </Card>
        <Card>
          <template #content>
            <div class="text-2xl font-bold text-gray-800">3.891</div>
            <div class="text-gray-500 text-sm mb-2">Nutzer</div>
            <Tag value="+2 %" severity="danger" class="bg-red-100 text-red-500"/>
          </template>
        </Card>
        <Card>
          <template #content>
            <div class="text-2xl font-bold text-gray-800">89</div>
            <div class="text-gray-500 text-sm mb-2">Retouren</div>
            <Tag value="+23 %" severity="danger" class="bg-red-100 text-red-500"/>
          </template>
        </Card>
      </div>

      <!-- Filter panel + export -->
      <div class="flex gap-4 mb-6">
        <div class="flex-1 bg-white rounded-lg border border-gray-200 p-6">
          <div class="flex justify-between items-center mb-4">
            <span class="font-semibold text-gray-700">Filter</span>
            <i class="pi pi-chevron-down text-gray-500"></i>
          </div>
          <div class="flex gap-8">
            <div class="flex flex-col gap-2">
              <label class="text-sm text-gray-600">Zeitraum</label>
              <Calendar v-model="zeitraum" placeholder="Zeitraum wählen" inline showIcon class="w-64" />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-gray-600">Status</label>
              <Dropdown v-model="status" :options="statusOptions" filter placeholder="Status auswählen" class="w-56" />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-gray-600">Zustand</label>
              <div class="flex gap-4 mt-1">
                <div class="flex items-center gap-2">
                  <Checkbox v-model="aktiv" binary />
                  <label>Aktiv</label>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox v-model="archiv" binary />
                  <label>Archiv</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <Button label="Exportieren" icon="pi pi-file-export" severity="success" class="bg-emerald-500 border-emerald-500" />
          <div class="bg-white rounded-lg border border-gray-200 p-4 flex flex-col gap-2 w-56">
            <Button label="Als CSV exportieren" outlined severity="secondary" class="justify-start" />
            <Button label="Als PDF exportieren" outlined severity="secondary" class="justify-start" />
          </div>
        </div>
      </div>

      <!-- Table -->
      <DataTable :value="products" class="bg-white rounded-lg border border-gray-200">
        <Column field="produkt" header="Produkt" />
        <Column field="status" header="Status">
          <template #body="slotProps">
            <Tag :value="slotProps.data.status" :class="slotProps.data.statusClass" />
          </template>
        </Column>
        <Column field="bestelldatum" header="Bestelldatum" />
        <Column field="summe" header="Summe" />
        <Column field="stueck" header="Stück" />
        <Column field="aktionen" header="Aktionen">
          <template #body="slotProps">
            <Button icon="pi pi-ellipsis-h" text rounded @click="toggleMenu($event, slotProps.data)" />
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
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import Calendar from 'primevue/calendar'
import Dropdown from 'primevue/dropdown'
import Checkbox from 'primevue/checkbox'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Menu from 'primevue/menu'

const zeitraum = ref(null)
const status = ref(null)
const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])
const aktiv = ref(true)
const archiv = ref(false)

const products = ref([
  { produkt: 'Widget Pro', status: 'Angekommen', statusClass: 'bg-green-100 text-green-700', bestelldatum: '15.04.2026', summe: '12.400 €', stueck: 312 },
  { produkt: 'Gadget Mini', status: 'In Bearbeitung', statusClass: 'bg-orange-100 text-orange-600', bestelldatum: '24.04.2026', summe: '8.920 €', stueck: 485 },
  { produkt: 'Sensor X1', status: 'Versendet', statusClass: 'bg-gray-100 text-gray-600', bestelldatum: '09.05.2026', summe: '6.100 €', stueck: 150 },
  { produkt: 'System V5', status: 'Bezahlt', statusClass: 'bg-blue-100 text-blue-600', bestelldatum: '12.06.2026', summe: '10.250 €', stueck: 2 }
])

const menu = ref()
const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])

const toggleMenu = (event) => {
  menu.value.toggle(event)
}
</script>