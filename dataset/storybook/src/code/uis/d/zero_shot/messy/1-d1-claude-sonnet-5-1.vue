<template>
  <div class="flex bg-white min-h-screen">
    <!-- Sidebar -->
    <div class="w-64 bg-slate-100 p-6">
      <h2 class="text-base font-normal text-slate-800 mb-4">Navigation</h2>
      <div class="flex flex-col gap-3">
        <Button
          label="Dashboard"
          icon="pi pi-th-large"
          class="w-full justify-start bg-emerald-100 border border-emerald-200 text-emerald-700 hover:bg-emerald-100"
          text
        />
        <Button
          label="Kunden"
          icon="pi pi-users"
          class="w-full justify-start border border-slate-300 text-slate-600"
          outlined
        />
        <Button
          label="Berichte"
          icon="pi pi-file"
          class="w-full justify-start border border-slate-300 text-slate-600"
          outlined
        />
        <Button
          label="Einstellungen"
          icon="pi pi-cog"
          class="w-full justify-start border border-slate-300 text-slate-600"
          outlined
        />
      </div>
    </div>

    <!-- Main content -->
    <div class="flex-1 p-8">
      <h1 class="text-3xl font-bold text-slate-800">Dashboard</h1>
      <p class="text-slate-500 mt-1 mb-6">Bekomme eine Übersicht über die Projekte.</p>

      <!-- Stat cards -->
      <div class="flex gap-4 mb-6">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="bg-slate-100 rounded-xl p-4 w-48"
        >
          <div class="text-2xl font-medium text-slate-800">{{ stat.value }}</div>
          <div class="text-sm text-slate-500 mt-1 mb-2">{{ stat.label }}</div>
          <span
            class="text-xs font-bold rounded-md px-2 py-1"
            :class="stat.badgeClass"
          >{{ stat.change }}</span>
        </div>
      </div>

      <!-- Filter + Export -->
      <div class="flex gap-4 mb-6 items-start">
        <Panel header="Filter" toggleable class="flex-1">
          <div class="flex gap-8">
            <!-- Zeitraum -->
            <div class="flex flex-col gap-2 w-64">
              <label class="text-sm text-slate-700">Zeitraum</label>
              <Calendar
                v-model="zeitraum"
                placeholder="Zeitraum wählen"
                class="w-full"
                inline
              />
            </div>

            <!-- Status -->
            <div class="flex flex-col gap-2 w-64">
              <label class="text-sm text-slate-700">Status</label>
              <MultiSelect
                v-model="selectedStatus"
                :options="statusOptions"
                filter
                placeholder="Status auswählen"
                class="w-full"
              />
            </div>

            <!-- Zustand -->
            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-700">Zustand</label>
              <div class="flex gap-4">
                <div class="flex items-center gap-2">
                  <Checkbox v-model="aktiv" binary inputId="aktiv" />
                  <label for="aktiv" class="text-sm">Aktiv</label>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox v-model="archiv" binary inputId="archiv" />
                  <label for="archiv" class="text-sm">Archiv</label>
                </div>
              </div>
            </div>
          </div>
        </Panel>

        <div class="flex flex-col gap-2">
          <Button
            label="Exportieren"
            icon="pi pi-file-export"
            iconPos="right"
            class="bg-emerald-500 border-emerald-500"
            @click="toggleExportMenu"
          />
          <div class="bg-white border border-slate-200 rounded-md p-2 flex flex-col gap-2 w-48">
            <Button
              label="Als CSV exportieren"
              class="w-full border border-slate-200 text-slate-700"
              text
              outlined
            />
            <Button
              label="Als PDF exportieren"
              class="w-full border border-slate-200 text-slate-700"
              text
              outlined
            />
          </div>
        </div>
      </div>

      <!-- Table -->
      <DataTable :value="products" class="mt-4">
        <Column field="produkt" header="Produkt" />
        <Column field="status" header="Status">
          <template #body="slotProps">
            <Tag
              :value="slotProps.data.status"
              :style="{
                backgroundColor: statusColors[slotProps.data.status]?.bg,
                color: statusColors[slotProps.data.status]?.color,
              }"
            />
          </template>
        </Column>
        <Column field="bestelldatum" header="Bestelldatum" />
        <Column field="summe" header="Summe" />
        <Column field="stueck" header="Stück" />
        <Column header="Aktionen">
          <template #body="slotProps">
            <Button
              icon="pi pi-ellipsis-h"
              text
              rounded
              @click="toggleActionMenu($event, slotProps.data)"
            />
          </template>
        </Column>
      </DataTable>

      <Menu ref="actionMenu" :model="actionItems" :popup="true" />
      <Menu ref="exportMenu" :model="exportItems" :popup="true" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Panel from 'primevue/panel'
import Calendar from 'primevue/calendar'
import MultiSelect from 'primevue/multiselect'
import Checkbox from 'primevue/checkbox'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import Menu from 'primevue/menu'

const stats = ref([
  { label: 'Umsatz in €', value: '42.8 Tsd.', change: '+12 %', badgeClass: 'bg-emerald-100 text-emerald-700' },
  { label: 'Bestellungen', value: '1.247', change: '+8 %', badgeClass: 'bg-emerald-100 text-emerald-700' },
  { label: 'Nutzer', value: '3.891', change: '+2 %', badgeClass: 'bg-orange-100 text-orange-600' },
  { label: 'Retouren', value: '89', change: '+23 %', badgeClass: 'bg-red-100 text-red-600' },
])

const zeitraum = ref(null)

const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])
const selectedStatus = ref([])

const aktiv = ref(true)
const archiv = ref(false)

const products = ref([
  { produkt: 'Widget Pro', status: 'Angekommen', bestelldatum: '15.04.2026', summe: '12.400 €', stueck: '312' },
  { produkt: 'Gadget Mini', status: 'In Bearbeitung', bestelldatum: '24.04.2026', summe: '8.920 €', stueck: '485' },
  { produkt: 'Sensor X1', status: 'Versendet', bestelldatum: '09.05.2026', summe: '6.100 €', stueck: '150' },
  { produkt: 'System V5', status: 'Bezahlt', bestelldatum: '12.06.2026', summe: '10.250 €', stueck: '2' },
])

const statusColors = {
  Angekommen: { bg: '#d1fae5', color: '#047857' },
  'In Bearbeitung': { bg: '#ffedd5', color: '#c2410c' },
  Versendet: { bg: '#f1f5f9', color: '#334155' },
  Bezahlt: { bg: '#e0f2fe', color: '#0369a1' },
}

const actionMenu = ref()
const exportMenu = ref()

const actionItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' },
])

const exportItems = ref([
  { label: 'Als CSV exportieren' },
  { label: 'Als PDF exportieren' },
])

function toggleActionMenu(event) {
  actionMenu.value.toggle(event)
}

function toggleExportMenu(event) {
  exportMenu.value.toggle(event)
}
</script>