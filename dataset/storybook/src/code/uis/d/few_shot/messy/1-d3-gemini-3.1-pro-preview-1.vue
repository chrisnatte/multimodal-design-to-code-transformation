<template>
  <div class="flex h-screen w-full bg-white font-sans text-slate-800">
    <!-- Sidebar Navigation -->
    <div class="flex w-64 flex-col gap-2 border-r border-slate-200 bg-slate-50 p-6">
      <div class="mb-2 text-sm text-slate-500">Navigation</div>
      <Button
        label="Dashboard"
        icon="pi pi-th-large"
        class="!justify-start !border-emerald-200 !bg-emerald-100 !text-emerald-800"
      />
      <Button
        label="Kunden"
        icon="pi pi-users"
        severity="secondary"
        outlined
        class="!justify-start !border-slate-300 !text-slate-700"
      />
      <Button
        label="Berichte"
        icon="pi pi-file"
        severity="secondary"
        outlined
        class="!justify-start !border-slate-300 !text-slate-700"
      />
      <Button
        label="Einstellungen"
        icon="pi pi-cog"
        severity="secondary"
        outlined
        class="!justify-start !border-slate-300 !text-slate-700"
      />
    </div>

    <!-- Main Content -->
    <div class="flex flex-1 flex-col gap-8 overflow-y-auto p-10">
      <!-- Header -->
      <div>
        <h1 class="text-3xl font-bold text-slate-800">Dashboard</h1>
        <p class="mt-1 text-slate-500">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- KPI Cards -->
      <div class="flex gap-4">
        <div class="flex flex-1 flex-col gap-4 rounded-xl bg-slate-50 p-5">
          <div>
            <div class="text-2xl font-medium text-slate-800">42.8 Tsd.</div>
            <div class="text-sm text-slate-500">Umsatz in €</div>
          </div>
          <Tag value="+12 %" class="w-fit !bg-emerald-100 !text-emerald-700" />
        </div>
        <div class="flex flex-1 flex-col gap-4 rounded-xl bg-slate-50 p-5">
          <div>
            <div class="text-2xl font-medium text-slate-800">1.247</div>
            <div class="text-sm text-slate-500">Bestellungen</div>
          </div>
          <Tag value="+8 %" class="w-fit !bg-emerald-100 !text-emerald-700" />
        </div>
        <div class="flex flex-1 flex-col gap-4 rounded-xl bg-slate-50 p-5">
          <div>
            <div class="text-2xl font-medium text-slate-800">3.891</div>
            <div class="text-sm text-slate-500">Nutzer</div>
          </div>
          <Tag value="+2 %" class="w-fit !bg-orange-100 !text-orange-700" />
        </div>
        <div class="flex flex-1 flex-col gap-4 rounded-xl bg-slate-50 p-5">
          <div>
            <div class="text-2xl font-medium text-slate-800">89</div>
            <div class="text-sm text-slate-500">Retouren</div>
          </div>
          <Tag value="+23 %" class="w-fit !bg-red-100 !text-red-700" />
        </div>
      </div>

      <!-- Filters & Actions -->
      <div class="flex items-start justify-between">
        <!-- Filter Box -->
        <div class="flex w-[692px] flex-col gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div class="flex items-center justify-between">
            <span class="font-semibold text-slate-800">Filter</span>
            <i class="pi pi-chevron-down text-slate-500"></i>
          </div>
          <div class="flex gap-6">
            <div class="flex flex-1 flex-col gap-2">
              <label class="text-sm text-slate-600">Zeitraum</label>
              <DatePicker
                v-model="dateRange"
                selectionMode="range"
                placeholder="Zeitraum wählen"
                class="w-full"
              />
            </div>
            <div class="flex flex-1 flex-col gap-2">
              <label class="text-sm text-slate-600">Status</label>
              <Select
                v-model="selectedStatus"
                :options="statusOptions"
                placeholder="Status auswählen"
                class="w-full"
              />
            </div>
            <div class="flex w-32 flex-col gap-2">
              <label class="text-sm text-slate-600">Zustand</label>
              <div class="flex h-10 items-center gap-4">
                <div class="flex items-center gap-2">
                  <Checkbox v-model="isAktiv" inputId="aktiv" binary />
                  <label for="aktiv" class="text-sm">Aktiv</label>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox v-model="isArchiv" inputId="archiv" binary />
                  <label for="archiv" class="text-sm">Archiv</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Export Button -->
        <div>
          <Button
            label="Exportieren"
            icon="pi pi-file-export"
            class="!border-emerald-500 !bg-emerald-500"
            @click="exportMenu?.toggle($event)"
          />
          <Menu ref="exportMenu" :model="exportOptions" popup />
        </div>
      </div>

      <!-- Data Table -->
      <DataTable :value="products" class="w-full">
        <Column field="produkt" header="Produkt" />
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :class="getStatusClass(data.status)" />
          </template>
        </Column>
        <Column field="bestelldatum" header="Bestelldatum" />
        <Column field="summe" header="Summe" />
        <Column field="stueck" header="Stück" />
        <Column header="Aktionen" bodyStyle="text-align: center">
          <template #body>
            <Button
              icon="pi pi-ellipsis-h"
              text
              plain
              rounded
              @click="actionMenu?.toggle($event)"
            />
          </template>
        </Column>
      </DataTable>
      <Menu ref="actionMenu" :model="actionOptions" popup />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import Button from 'primevue/button'
import Tag from 'primevue/tag'
import DatePicker from 'primevue/datepicker'
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'
import Menu from 'primevue/menu'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const dateRange = ref()
const selectedStatus = ref()
const statusOptions = ['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']
const isAktiv = ref(true)
const isArchiv = ref(false)

const exportMenu = useTemplateRef('exportMenu')
const exportOptions = ref([
  { label: 'Als CSV exportieren', icon: 'pi pi-file-excel' },
  { label: 'Als PDF exportieren', icon: 'pi pi-file-pdf' }
])

const actionMenu = useTemplateRef('actionMenu')
const actionOptions = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])

const products = ref([
  {
    produkt: 'Widget Pro',
    status: 'Angekommen',
    bestelldatum: '15.04.2026',
    summe: '12.400 €',
    stueck: '312'
  },
  {
    produkt: 'Gadget Mini',
    status: 'In Bearbeitung',
    bestelldatum: '24.04.2026',
    summe: '8.920 €',
    stueck: '485'
  },
  {
    produkt: 'Sensor X1',
    status: 'Versendet',
    bestelldatum: '09.05.2026',
    summe: '6.100 €',
    stueck: '150'
  },
  {
    produkt: 'System V5',
    status: 'Bezahlt',
    bestelldatum: '12.06.2026',
    summe: '10.250 €',
    stueck: '2'
  }
])

const getStatusClass = (status: string) => {
  switch (status) {
    case 'Angekommen':
      return '!bg-emerald-100 !text-emerald-700'
    case 'In Bearbeitung':
      return '!bg-orange-100 !text-orange-700'
    case 'Versendet':
      return '!bg-slate-100 !text-slate-700'
    case 'Bezahlt':
      return '!bg-sky-100 !text-sky-700'
    default:
      return ''
  }
}
</script>