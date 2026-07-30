<template>
  <div class="flex min-h-screen bg-white">
    <!-- Sidebar -->
    <aside class="w-64 bg-slate-50 p-6">
      <span class="text-base text-gray-700 block mb-6">Navigation</span>
      <PanelMenu :model="navItems" class="w-full" />
    </aside>

    <!-- Main content -->
    <main class="flex-1 p-8">
      <!-- Header -->
      <div class="mb-6">
        <h1 class="text-3xl font-bold">Dashboard</h1>
        <p class="text-base text-gray-600">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Stat cards -->
      <div class="flex gap-4 mb-8 flex-wrap">
        <Card v-for="stat in stats" :key="stat.label" class="w-48">
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium">{{ stat.value }}</span>
              <span class="text-sm text-gray-600">{{ stat.label }}</span>
              <Tag :value="stat.change" :severity="stat.severity" class="w-fit"></Tag>
            </div>
          </template>
        </Card>
      </div>

      <div class="flex gap-6 mb-8 items-start">
        <!-- Filter Panel -->
        <Panel header="Filter" class="flex-1">
          <div class="flex gap-6 flex-wrap">
            <div class="flex flex-col gap-2">
              <label class="text-sm">Zeitraum</label>
              <DatePicker v-model="dateRange" selectionMode="range" placeholder="Zeitraum wählen" showIcon class="w-56" />
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-sm">Status</label>
              <Select v-model="selectedStatus" :options="statusOptions" optionLabel="label" placeholder="Status auswählen" class="w-56" />
              <div class="flex flex-col gap-1 mt-2">
                <div v-for="s in statusOptions" :key="s.label" class="p-2 rounded text-sm">{{ s.label }}</div>
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-sm">Zustand</label>
              <SelectButton v-model="selectedZustand" :options="zustandOptions" optionLabel="label" class="w-fit" />
            </div>
          </div>

          <div class="mt-4">
            <IconField iconPosition="left" class="w-72">
              <InputIcon class="pi pi-search" />
              <InputText v-model="searchTerm" placeholder="Suche..." class="w-full" />
            </IconField>
          </div>
        </Panel>

        <!-- Export button -->
        <div class="flex flex-col gap-2">
          <Button label="Exportieren" icon="pi pi-download" class="w-48" @click="toggleExportMenu" />
          <Menu ref="exportMenuRef" :model="exportOptions" :popup="true" />
        </div>
      </div>

      <!-- Orders Table -->
      <DataTable :value="orders" class="w-full">
        <Column field="produkt" header="Produkt"></Column>
        <Column field="status" header="Status">
          <template #body="slotProps">
            <Tag :value="slotProps.data.status" :severity="slotProps.data.severity"></Tag>
          </template>
        </Column>
        <Column field="bestelldatum" header="Bestelldatum"></Column>
        <Column field="summe" header="Summe"></Column>
        <Column field="stueck" header="Stück"></Column>
        <Column header="Aktionen">
          <template #body="slotProps">
            <Button icon="pi pi-ellipsis-h" text @click="toggleActionMenu($event, slotProps.data)" />
          </template>
        </Column>
      </DataTable>

      <Menu ref="actionMenuRef" :model="actionOptions" :popup="true" />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PanelMenu from 'primevue/panelmenu'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import Panel from 'primevue/panel'
import DatePicker from 'primevue/datepicker'
import Select from 'primevue/select'
import SelectButton from 'primevue/selectbutton'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import Button from 'primevue/button'
import Menu from 'primevue/menu'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const navItems = ref([
  { label: 'Dashboard', icon: 'pi pi-home' },
  { label: 'Kunden', icon: 'pi pi-users' },
  { label: 'Berichte', icon: 'pi pi-chart-bar' },
  { label: 'Einstellungen', icon: 'pi pi-cog' }
])

const stats = ref([
  { label: 'Umsatz in €', value: '42.8 Tsd.', change: '+12 %', severity: 'success' },
  { label: 'Bestellungen', value: '1.247', change: '+8 %', severity: 'success' },
  { label: 'Nutzer', value: '3.891', change: '+2 %', severity: 'warn' },
  { label: 'Retouren', value: '89', change: '+23 %', severity: 'danger' }
])

const dateRange = ref(null)

const statusOptions = ref([
  { label: 'Bezahlt' },
  { label: 'In Bearbeitung' },
  { label: 'Versendet' },
  { label: 'Angekommen' }
])
const selectedStatus = ref(null)

const zustandOptions = ref([
  { label: 'Aktiv' },
  { label: 'Archiv' }
])
const selectedZustand = ref(zustandOptions.value[0])

const searchTerm = ref('')

const exportMenuRef = ref()
const exportOptions = ref([
  { label: 'Als CSV exportieren', icon: 'pi pi-file' },
  { label: 'Als PDF exportieren', icon: 'pi pi-file-pdf' }
])
function toggleExportMenu(event) {
  exportMenuRef.value.toggle(event)
}

const actionMenuRef = ref()
const actionOptions = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])
function toggleActionMenu(event) {
  actionMenuRef.value.toggle(event)
}

const orders = ref([
  { produkt: 'Widget Pro', status: 'Angekommen', severity: 'success', bestelldatum: '15.04.2026', summe: '12.400 €', stueck: '312' },
  { produkt: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warn', bestelldatum: '24.04.2026', summe: '8.920 €', stueck: '485' },
  { produkt: 'Sensor X1', status: 'Versendet', severity: 'secondary', bestelldatum: '09.05.2026', summe: '6.100 €', stueck: '150' },
  { produkt: 'System V5', status: 'Bezahlt', severity: 'info', bestelldatum: '12.06.2026', summe: '10.250 €', stueck: '2' }
])
</script>