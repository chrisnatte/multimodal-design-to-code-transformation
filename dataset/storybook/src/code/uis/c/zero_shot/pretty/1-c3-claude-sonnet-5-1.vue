<template>
  <div class="flex bg-gray-50 min-h-screen">
    <!-- Sidebar -->
    <div class="w-64 p-6 bg-white border-r border-gray-200">
      <h2 class="text-gray-700 font-medium mb-4">Navigation</h2>
      <div class="flex flex-col gap-3">
        <Button label="Dashboard" icon="pi pi-th-large" class="justify-start" severity="success" outlined />
        <Button label="Kunden" icon="pi pi-users" class="justify-start" severity="secondary" outlined />
        <Button label="Berichte" icon="pi pi-file" class="justify-start" severity="secondary" outlined />
        <Button label="Einstellungen" icon="pi pi-cog" class="justify-start" severity="secondary" outlined />
      </div>
    </div>

    <!-- Main content -->
    <div class="flex-1 p-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-1">Dashboard</h1>
      <p class="text-gray-500 mb-6">Bekomme eine Übersicht über die Projekte.</p>

      <!-- Stat cards -->
      <div class="grid grid-cols-4 gap-4 mb-6">
        <Card>
          <template #content>
            <div class="text-2xl font-bold text-gray-800">42.8 Tsd.</div>
            <div class="text-gray-500 text-sm mb-2">Umsatz in €</div>
            <Tag severity="success" value="+12 %" />
          </template>
        </Card>
        <Card>
          <template #content>
            <div class="text-2xl font-bold text-gray-800">1.247</div>
            <div class="text-gray-500 text-sm mb-2">Bestellungen</div>
            <Tag severity="success" value="+8 %" />
          </template>
        </Card>
        <Card>
          <template #content>
            <div class="text-2xl font-bold text-gray-800">3.891</div>
            <div class="text-gray-500 text-sm mb-2">Nutzer</div>
            <Tag severity="danger" value="+2 %" />
          </template>
        </Card>
        <Card>
          <template #content>
            <div class="text-2xl font-bold text-gray-800">89</div>
            <div class="text-gray-500 text-sm mb-2">Retouren</div>
            <Tag severity="danger" value="+23 %" />
          </template>
        </Card>
      </div>

      <!-- Filter + Export -->
      <div class="flex gap-4 mb-6">
        <Card class="flex-1">
          <template #content>
            <div class="flex justify-between items-center mb-4">
              <span class="font-medium text-gray-700">Filter</span>
              <i class="pi pi-chevron-down text-gray-500"></i>
            </div>
            <div class="flex gap-8">
              <div class="flex flex-col gap-2">
                <label class="text-gray-600 text-sm">Zeitraum</label>
                <DatePicker v-model="dateRange" placeholder="Zeitraum wählen" inline class="w-64" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-gray-600 text-sm">Status</label>
                <Select v-model="status" :options="statusOptions" placeholder="Status auswählen" filter filterPlaceholder="Suche..." class="w-56" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-gray-600 text-sm">Zustand</label>
                <div class="flex gap-4 mt-1">
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

        <div class="flex flex-col gap-2">
          <Button label="Exportieren" icon="pi pi-file-export" iconPos="right" severity="success" @click="toggleExport" />
          <Popover ref="exportPopover">
            <div class="flex flex-col gap-2 w-48">
              <Button label="Als CSV exportieren" severity="secondary" outlined text class="justify-start" />
              <Button label="Als PDF exportieren" severity="secondary" outlined text class="justify-start" />
            </div>
          </Popover>
        </div>
      </div>

      <!-- Table -->
      <Card>
        <template #content>
          <DataTable :value="products">
            <Column field="produkt" header="Produkt"></Column>
            <Column field="status" header="Status">
              <template #body="slotProps">
                <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
              </template>
            </Column>
            <Column field="bestelldatum" header="Bestelldatum"></Column>
            <Column field="summe" header="Summe"></Column>
            <Column field="stueck" header="Stück"></Column>
            <Column header="Aktionen">
              <template #body="slotProps">
                <Button icon="pi pi-ellipsis-h" text severity="secondary" @click="toggleActions($event, slotProps.data)" />
              </template>
            </Column>
          </DataTable>
          <Popover ref="actionsPopover">
            <div class="flex flex-col gap-2 w-56">
              <Button label="Bearbeiten" icon="pi pi-pencil" severity="secondary" outlined text class="justify-start" />
              <Button label="Status aktualisieren" icon="pi pi-list" severity="secondary" outlined text class="justify-start" />
              <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined text class="justify-start" />
            </div>
          </Popover>
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
import DatePicker from 'primevue/datepicker'
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'
import Popover from 'primevue/popover'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const dateRange = ref(null)
const status = ref(null)
const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])
const aktiv = ref(true)
const archiv = ref(false)

const exportPopover = ref(null)
const actionsPopover = ref(null)

const toggleExport = (event) => {
  exportPopover.value.toggle(event)
}

const toggleActions = (event, data) => {
  actionsPopover.value.toggle(event)
}

const products = ref([
  { produkt: 'Widget Pro', status: 'Angekommen', bestelldatum: '15.04.2026', summe: '12.400 €', stueck: 312 },
  { produkt: 'Gadget Mini', status: 'In Bearbeitung', bestelldatum: '24.04.2026', summe: '8.920 €', stueck: 485 },
  { produkt: 'Sensor X1', status: 'Versendet', bestelldatum: '09.05.2026', summe: '6.100 €', stueck: 150 },
  { produkt: 'System V5', status: 'Bezahlt', bestelldatum: '12.06.2026', summe: '10.250 €', stueck: 2 }
])

const getSeverity = (statusValue) => {
  switch (statusValue) {
    case 'Angekommen':
      return 'success'
    case 'In Bearbeitung':
      return 'warn'
    case 'Versendet':
      return 'secondary'
    case 'Bezahlt':
      return 'info'
    default:
      return 'secondary'
  }
}
</script>