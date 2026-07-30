<template>
  <div class="flex bg-gray-50 min-h-screen">
    <!-- Sidebar -->
    <div class="w-64 bg-gray-50 p-6">
      <h2 class="text-gray-700 font-semibold mb-4">Navigation</h2>
      <div class="flex flex-col gap-3">
        <Button label="Dashboard" icon="pi pi-th-large" class="w-full justify-start" outlined
          style="background-color:#d1fae5;border-color:#d1fae5;color:#059669" />
        <Button label="Kunden" icon="pi pi-users" class="w-full justify-start" outlined severity="secondary" />
        <Button label="Berichte" icon="pi pi-file" class="w-full justify-start" outlined severity="secondary" />
        <Button label="Einstellungen" icon="pi pi-cog" class="w-full justify-start" outlined severity="secondary" />
      </div>
    </div>

    <!-- Main content -->
    <div class="flex-1 p-8">
      <h1 class="text-3xl font-bold text-gray-800">Dashboard</h1>
      <p class="text-gray-500 mt-1 mb-6">Bekomme eine Übersicht über die Projekte.</p>

      <!-- Stats cards -->
      <div class="grid grid-cols-4 gap-4 mb-6">
        <Card>
          <template #content>
            <div class="text-2xl font-bold text-gray-800">42.8 Tsd.</div>
            <div class="text-gray-500 text-sm mb-2">Umsatz in €</div>
            <Tag value="+12 %" severity="success" />
          </template>
        </Card>
        <Card>
          <template #content>
            <div class="text-2xl font-bold text-gray-800">1.247</div>
            <div class="text-gray-500 text-sm mb-2">Bestellungen</div>
            <Tag value="+8 %" severity="success" />
          </template>
        </Card>
        <Card>
          <template #content>
            <div class="text-2xl font-bold text-gray-800">3.891</div>
            <div class="text-gray-500 text-sm mb-2">Nutzer</div>
            <Tag value="+2 %" severity="danger" />
          </template>
        </Card>
        <Card>
          <template #content>
            <div class="text-2xl font-bold text-gray-800">89</div>
            <div class="text-gray-500 text-sm mb-2">Retouren</div>
            <Tag value="+23 %" severity="danger" />
          </template>
        </Card>
      </div>

      <!-- Filter + Export -->
      <div class="flex gap-4 mb-6">
        <Card class="flex-1">
          <template #content>
            <div class="flex items-center justify-between mb-4">
              <span class="font-semibold text-gray-700">Filter</span>
              <i class="pi pi-chevron-down text-gray-500"></i>
            </div>
            <div class="flex gap-8">
              <div class="flex flex-col gap-2">
                <label class="text-gray-600 text-sm">Zeitraum</label>
                <Calendar v-model="dateRange" placeholder="Zeitraum wählen" inline showIcon />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-gray-600 text-sm">Status</label>
                <Dropdown
                  v-model="selectedStatus"
                  :options="statusOptions"
                  optionLabel="label"
                  placeholder="Status auswählen"
                  filter
                  filterPlaceholder="Suche..."
                  class="w-56"
                />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-gray-600 text-sm">Zustand</label>
                <div class="flex items-center gap-4 mt-1">
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

        <div class="flex flex-col gap-3 w-64">
          <Button label="Exportieren" icon="pi pi-file-export" iconPos="right" severity="success" />
          <Card>
            <template #content>
              <div class="flex flex-col gap-3">
                <Button label="Als CSV exportieren" outlined severity="secondary" />
                <Button label="Als PDF exportieren" outlined severity="secondary" />
              </div>
            </template>
          </Card>
        </div>
      </div>

      <!-- Table -->
      <Card>
        <template #content>
          <DataTable :value="products">
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
  { produkt: 'Widget Pro', status: 'Angekommen', severity: 'success', datum: '15.04.2026', summe: '12.400 €', stueck: 312 },
  { produkt: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warning', datum: '24.04.2026', summe: '8.920 €', stueck: 485 },
  { produkt: 'Sensor X1', status: 'Versendet', severity: 'secondary', datum: '09.05.2026', summe: '6.100 €', stueck: 150 },
  { produkt: 'System V5', status: 'Bezahlt', severity: 'info', datum: '12.06.2026', summe: '10.250 €', stueck: 2 }
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