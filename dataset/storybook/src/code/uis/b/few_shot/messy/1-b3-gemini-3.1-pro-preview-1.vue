<template>
  <div class="flex min-h-screen w-full bg-white font-sans">
    <!-- Sidebar -->
    <div class="w-64 bg-slate-50 p-6 flex flex-col gap-4 border-r border-slate-200">
      <div class="text-lg font-medium mb-4 text-slate-800">Navigation</div>
      <Button
        label="Dashboard"
        icon="pi pi-home"
        class="w-full !justify-start !bg-green-100 !text-green-800 !border-green-200"
      />
      <Button
        label="Kunden"
        icon="pi pi-users"
        class="w-full !justify-start text-slate-600"
        text
        severity="secondary"
      />
      <Button
        label="Berichte"
        icon="pi pi-chart-bar"
        class="w-full !justify-start text-slate-600"
        text
        severity="secondary"
      />
      <Button
        label="Einstellungen"
        icon="pi pi-cog"
        class="w-full !justify-start text-slate-600"
        text
        severity="secondary"
      />
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-8 flex flex-col gap-8">
      <!-- Header -->
      <div class="flex justify-between items-start">
        <div>
          <h1 class="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p class="text-slate-600 mt-1">Bekomme eine Übersicht über die Projekte.</p>
        </div>
        <div>
          <Button
            label="Exportieren"
            icon="pi pi-download"
            severity="success"
            @click="toggleExportMenu"
          />
          <Menu ref="exportMenu" :model="exportOptions" popup />
        </div>
      </div>

      <!-- Summary Cards -->
      <div class="grid grid-cols-4 gap-6">
        <Card class="bg-slate-50 shadow-none border border-slate-200 !rounded-xl">
          <template #content>
            <div class="flex flex-col gap-2">
              <div class="text-2xl font-medium text-slate-900">42.8 Tsd.</div>
              <div class="text-sm text-slate-600">Umsatz in €</div>
              <Tag value="+ 12 %" severity="success" class="w-fit mt-2" />
            </div>
          </template>
        </Card>
        <Card class="bg-slate-50 shadow-none border border-slate-200 !rounded-xl">
          <template #content>
            <div class="flex flex-col gap-2">
              <div class="text-2xl font-medium text-slate-900">1.247</div>
              <div class="text-sm text-slate-600">Bestellungen</div>
              <Tag value="+ 8 %" severity="success" class="w-fit mt-2" />
            </div>
          </template>
        </Card>
        <Card class="bg-slate-50 shadow-none border border-slate-200 !rounded-xl">
          <template #content>
            <div class="flex flex-col gap-2">
              <div class="text-2xl font-medium text-slate-900">3.891</div>
              <div class="text-sm text-slate-600">Nutzer</div>
              <Tag value="+ 2 %" severity="warn" class="w-fit mt-2" />
            </div>
          </template>
        </Card>
        <Card class="bg-slate-50 shadow-none border border-slate-200 !rounded-xl">
          <template #content>
            <div class="flex flex-col gap-2">
              <div class="text-2xl font-medium text-slate-900">89</div>
              <div class="text-sm text-slate-600">Retouren</div>
              <Tag value="+ 23 %" severity="danger" class="w-fit mt-2" />
            </div>
          </template>
        </Card>
      </div>

      <!-- Filter Section -->
      <div class="bg-slate-50 p-4 rounded-lg border border-slate-200 flex flex-col gap-4">
        <div class="flex items-center gap-2 font-medium text-slate-800">
          <i class="pi pi-filter"></i> Filter
        </div>
        <div class="flex gap-6 items-end">
          <div class="flex flex-col gap-2 flex-1">
            <label class="text-sm text-slate-700">Zeitraum</label>
            <DatePicker
              v-model="dateRange"
              selectionMode="range"
              placeholder="Zeitraum wählen"
              class="w-full"
            />
          </div>
          <div class="flex flex-col gap-2 flex-1">
            <label class="text-sm text-slate-700">Status</label>
            <Select
              v-model="selectedStatus"
              :options="statusOptions"
              placeholder="Status auswählen"
              filter
              class="w-full"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm text-slate-700">Zustand</label>
            <SelectButton v-model="selectedState" :options="stateOptions" />
          </div>
        </div>
      </div>

      <!-- DataTable -->
      <DataTable
        :value="orders"
        class="border border-slate-200 rounded-lg overflow-hidden"
        responsiveLayout="scroll"
      >
        <Column field="product" header="Produkt" class="font-medium text-slate-900" />
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
          </template>
        </Column>
        <Column field="date" header="Bestelldatum" />
        <Column field="total" header="Summe" />
        <Column field="pieces" header="Stück" />
        <Column header="Aktionen" bodyClass="text-right">
          <template #body="{ data }">
            <Button
              icon="pi pi-ellipsis-h"
              text
              severity="secondary"
              @click="toggleActionsMenu($event, data)"
            />
          </template>
        </Column>
      </DataTable>
      <Menu ref="actionsMenu" :model="actionOptions" popup />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import DatePicker from 'primevue/datepicker'
import Select from 'primevue/select'
import SelectButton from 'primevue/selectbutton'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import Menu from 'primevue/menu'

const dateRange = ref()
const selectedStatus = ref()
const statusOptions = ['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']
const stateOptions = ['Aktiv', 'Archiv']
const selectedState = ref('Aktiv')

const exportMenu = useTemplateRef('exportMenu')
const exportOptions = [
  { label: 'Als CSV exportieren', icon: 'pi pi-file-excel' },
  { label: 'Als PDF exportieren', icon: 'pi pi-file-pdf' }
]

const toggleExportMenu = (event: Event) => {
  exportMenu.value?.toggle(event)
}

const actionsMenu = useTemplateRef('actionsMenu')
const selectedRow = ref()
const actionOptions = [
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]

const toggleActionsMenu = (event: Event, data: any) => {
  selectedRow.value = data
  actionsMenu.value?.toggle(event)
}

const orders = ref([
  { product: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', total: '12.400 €', pieces: 312 },
  { product: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', total: '8.920 €', pieces: 485 },
  { product: 'Sensor X1', status: 'Versendet', date: '09.05.2026', total: '6.100 €', pieces: 150 },
  { product: 'System V5', status: 'Bezahlt', date: '12.06.2026', total: '10.250 €', pieces: 2 }
])

function getStatusSeverity(status: string) {
  switch (status) {
    case 'Angekommen':
      return 'success'
    case 'In Bearbeitung':
      return 'warn'
    case 'Versendet':
      return 'info'
    case 'Bezahlt':
      return 'secondary'
    default:
      return 'info'
  }
}
</script>