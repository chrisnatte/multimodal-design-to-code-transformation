<template>
  <div class="flex min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <div class="w-60 p-4 bg-gray-50">
      <h3 class="text-gray-700 font-semibold mb-4">Navigation</h3>
      <div class="flex flex-col gap-2">
        <Button label="Dashboard" icon="pi pi-th-large" outlined
          class="justify-start bg-green-50 border-green-300 text-green-700 w-full" />
        <Button label="Kunden" icon="pi pi-users" outlined
          class="justify-start text-gray-600 w-full" />
        <Button label="Berichte" icon="pi pi-file" outlined
          class="justify-start text-gray-600 w-full" />
        <Button label="Einstellungen" icon="pi pi-cog" outlined
          class="justify-start text-gray-600 w-full" />
      </div>
    </div>

    <!-- Main content -->
    <div class="flex-1 p-8">
      <h1 class="text-3xl font-bold text-gray-800">Dashboard</h1>
      <p class="text-gray-500 mb-6">Bekomme eine Übersicht über die Projekte.</p>

      <!-- Stat Cards -->
      <div class="grid grid-cols-4 gap-4 mb-6">
        <Card>
          <template #content>
            <div class="text-2xl font-bold text-gray-800">42.8 Tsd.</div>
            <div class="text-gray-500 text-sm mb-2">Umsatz in €</div>
            <Tag value="+12 %" severity="success" class="text-xs" />
          </template>
        </Card>
        <Card>
          <template #content>
            <div class="text-2xl font-bold text-gray-800">1.247</div>
            <div class="text-gray-500 text-sm mb-2">Bestellungen</div>
            <Tag value="+8 %" severity="success" class="text-xs" />
          </template>
        </Card>
        <Card>
          <template #content>
            <div class="text-2xl font-bold text-gray-800">3.891</div>
            <div class="text-gray-500 text-sm mb-2">Nutzer</div>
            <Tag value="+2 %" severity="danger" class="text-xs" />
          </template>
        </Card>
        <Card>
          <template #content>
            <div class="text-2xl font-bold text-gray-800">89</div>
            <div class="text-gray-500 text-sm mb-2">Retouren</div>
            <Tag value="+23 %" severity="danger" class="text-xs" />
          </template>
        </Card>
      </div>

      <!-- Filter Panel + Export -->
      <div class="flex gap-4 mb-6">
        <Card class="flex-1">
          <template #content>
            <div class="flex items-center justify-between mb-4">
              <span class="font-semibold text-gray-700">Filter</span>
              <i class="pi pi-chevron-down text-gray-500"></i>
            </div>
            <div class="flex gap-8">
              <div class="flex flex-col gap-2">
                <label class="text-sm text-gray-600">Zeitraum</label>
                <Calendar v-model="dateRange" placeholder="Zeitraum wählen" inline class="w-72" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm text-gray-600">Status</label>
                <Dropdown
                  v-model="selectedStatus"
                  :options="statusOptions"
                  filter
                  optionLabel="label"
                  placeholder="Status auswählen"
                  class="w-56"
                />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm text-gray-600">Zustand</label>
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
          </template>
        </Card>

        <div class="flex flex-col gap-2 w-56">
          <Button label="Exportieren" icon="pi pi-file-export" iconPos="right" severity="success" />
          <Card>
            <template #content>
              <div class="flex flex-col gap-2">
                <Button label="Als CSV exportieren" outlined class="justify-start" />
                <Button label="Als PDF exportieren" outlined class="justify-start" />
              </div>
            </template>
          </Card>
        </div>
      </div>

      <!-- Data Table -->
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
                <Menu ref="menu" :model="menuItems" :popup="true" />
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
import Calendar from 'primevue/calendar'
import Dropdown from 'primevue/dropdown'
import Checkbox from 'primevue/checkbox'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Menu from 'primevue/menu'

const dateRange = ref(null)

const statusOptions = ref([
  { label: 'Bezahlt' },
  { label: 'In Bearbeitung' },
  { label: 'Versendet' },
  { label: 'Angekommen' }
])
const selectedStatus = ref(null)

const aktiv = ref(true)
const archiv = ref(false)

const products = ref([
  { produkt: 'Widget Pro', status: 'Angekommen', severity: 'success', bestelldatum: '15.04.2026', summe: '12.400 €', stueck: 312 },
  { produkt: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warning', bestelldatum: '24.04.2026', summe: '8.920 €', stueck: 485 },
  { produkt: 'Sensor X1', status: 'Versendet', severity: 'secondary', bestelldatum: '09.05.2026', summe: '6.100 €', stueck: 150 },
  { produkt: 'System V5', status: 'Bezahlt', severity: 'info', bestelldatum: '12.06.2026', summe: '10.250 €', stueck: 2 }
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