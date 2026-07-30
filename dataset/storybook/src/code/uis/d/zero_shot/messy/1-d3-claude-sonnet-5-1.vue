<template>
  <div class="flex bg-white min-h-screen">
    <!-- Sidebar -->
    <div class="w-64 bg-slate-100 p-6">
      <h2 class="text-base font-normal text-slate-700 mb-4">Navigation</h2>
      <div class="flex flex-col gap-3">
        <Button label="Dashboard" icon="pi pi-th-large" class="w-full justify-start" severity="success" outlined />
        <Button label="Kunden" icon="pi pi-users" class="w-full justify-start" severity="secondary" outlined />
        <Button label="Berichte" icon="pi pi-file" class="w-full justify-start" severity="secondary" outlined />
        <Button label="Einstellungen" icon="pi pi-cog" class="w-full justify-start" severity="secondary" outlined />
      </div>
    </div>

    <!-- Main content -->
    <div class="flex-1 p-8">
      <h1 class="text-3xl font-bold text-slate-800 mb-1">Dashboard</h1>
      <p class="text-slate-500 mb-6">Bekomme eine Übersicht über die Projekte.</p>

      <!-- Stat cards -->
      <div class="flex gap-4 mb-6">
        <Card v-for="stat in stats" :key="stat.label" class="w-48 bg-slate-100 border border-slate-200">
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium text-slate-800">{{ stat.value }}</span>
              <span class="text-sm text-slate-500">{{ stat.label }}</span>
              <Tag :value="stat.change" :severity="stat.severity" class="w-fit" />
            </div>
          </template>
        </Card>
      </div>

      <div class="flex gap-4 mb-6 items-start">
        <!-- Filter panel -->
        <Panel header="Filter" toggleable class="flex-1 bg-slate-100">
          <div class="flex gap-8">
            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-700">Zeitraum</label>
              <DatePicker v-model="dateRange" placeholder="Zeitraum wählen" inline class="w-64" />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-700">Status</label>
              <MultiSelect
                v-model="selectedStatus"
                :options="statusOptions"
                placeholder="Status auswählen"
                filter
                filterPlaceholder="Suche..."
                class="w-54"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-700">Zustand</label>
              <div class="flex gap-4 mt-2">
                <div class="flex items-center gap-2">
                  <Checkbox v-model="active" binary inputId="active" />
                  <label for="active" class="text-sm">Aktiv</label>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox v-model="archive" binary inputId="archive" />
                  <label for="archive" class="text-sm">Archiv</label>
                </div>
              </div>
            </div>
          </div>
        </Panel>

        <!-- Export section -->
        <div class="flex flex-col gap-3 w-48">
          <Button label="Exportieren" icon="pi pi-file-export" iconPos="right" severity="success" />
          <Card class="border border-slate-200">
            <template #content>
              <div class="flex flex-col gap-2">
                <Button label="Als CSV exportieren" outlined class="w-full" />
                <Button label="Als PDF exportieren" outlined class="w-full" />
              </div>
            </template>
          </Card>
        </div>
      </div>

      <!-- Data Table -->
      <DataTable :value="orders" class="w-full">
        <Column field="produkt" header="Produkt" />
        <Column field="status" header="Status">
          <template #body="slotProps">
            <Tag :value="slotProps.data.status" :severity="slotProps.data.statusSeverity" />
          </template>
        </Column>
        <Column field="bestelldatum" header="Bestelldatum" />
        <Column field="summe" header="Summe" />
        <Column field="stueck" header="Stück" />
        <Column header="Aktionen">
          <template #body="slotProps">
            <Button icon="pi pi-ellipsis-h" text rounded @click="toggleMenu($event, slotProps.data)" />
            <Menu ref="menu" :model="menuItems" :popup="true" />
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Panel from 'primevue/panel'
import DatePicker from 'primevue/datepicker'
import MultiSelect from 'primevue/multiselect'
import Checkbox from 'primevue/checkbox'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import Menu from 'primevue/menu'

const stats = ref([
  { label: 'Umsatz in €', value: '42.8 Tsd.', change: '+12 %', severity: 'success' },
  { label: 'Bestellungen', value: '1.247', change: '+8 %', severity: 'success' },
  { label: 'Nutzer', value: '3.891', change: '+2 %', severity: 'warn' },
  { label: 'Retouren', value: '89', change: '+23 %', severity: 'danger' }
])

const dateRange = ref(null)
const selectedStatus = ref([])
const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])
const active = ref(true)
const archive = ref(false)

const orders = ref([
  { produkt: 'Widget Pro', status: 'Angekommen', statusSeverity: 'success', bestelldatum: '15.04.2026', summe: '12.400 €', stueck: 312 },
  { produkt: 'Gadget Mini', status: 'In Bearbeitung', statusSeverity: 'warn', bestelldatum: '24.04.2026', summe: '8.920 €', stueck: 485 },
  { produkt: 'Sensor X1', status: 'Versendet', statusSeverity: 'secondary', bestelldatum: '09.05.2026', summe: '6.100 €', stueck: 150 },
  { produkt: 'System V5', status: 'Bezahlt', statusSeverity: 'info', bestelldatum: '12.06.2026', summe: '10.250 €', stueck: 2 }
])

const menu = ref()
const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])

function toggleMenu(event) {
  menu.value.toggle(event)
}
</script>