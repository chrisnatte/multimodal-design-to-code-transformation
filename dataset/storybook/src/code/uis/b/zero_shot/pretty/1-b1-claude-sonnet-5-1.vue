<template>
  <div class="flex min-h-screen bg-white">
    <!-- Sidebar -->
    <div class="w-64 bg-slate-100 flex flex-col items-center p-6 gap-6">
      <div class="w-full flex flex-col gap-6">
        <span class="text-base">Navigation</span>
        <div class="flex flex-col gap-4 w-full">
          <Button
            label="Dashboard"
            icon="pi pi-th-large"
            outlined
            class="w-full justify-start bg-emerald-100"
          />
          <Button
            label="Kunden"
            icon="pi pi-users"
            severity="secondary"
            outlined
            class="w-full justify-start"
          />
          <Button
            label="Berichte"
            icon="pi pi-file"
            severity="secondary"
            outlined
            class="w-full justify-start"
          />
          <Button
            label="Einstellungen"
            icon="pi pi-cog"
            severity="secondary"
            outlined
            class="w-full justify-start"
          />
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="flex-1 p-8">
      <!-- Header -->
      <div class="flex flex-col gap-1 mb-6">
        <h1 class="text-3xl font-bold">Dashboard</h1>
        <p class="text-base text-gray-600">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Stat Cards Row -->
      <div class="flex gap-5 mb-8 flex-wrap">
        <div class="bg-slate-100 rounded-xl p-4 w-48">
          <div class="flex flex-col gap-2">
            <span class="text-2xl font-medium">42.8 Tsd.</span>
            <span class="text-sm text-gray-600">Umsatz in €</span>
            <Tag value="+12 %" severity="success" :rounded="false" />
          </div>
        </div>
        <div class="bg-slate-100 rounded-xl p-4 w-48">
          <div class="flex flex-col gap-2">
            <span class="text-2xl font-medium">1.247</span>
            <span class="text-sm text-gray-600">Bestellungen</span>
            <Tag value="+8 %" severity="success" :rounded="false" />
          </div>
        </div>
        <div class="bg-slate-100 rounded-xl p-4 w-48">
          <div class="flex flex-col gap-2">
            <span class="text-2xl font-medium">3.891</span>
            <span class="text-sm text-gray-600">Nutzer</span>
            <Tag value="+2 %" severity="warn" :rounded="false" />
          </div>
        </div>
        <div class="bg-slate-100 rounded-xl p-4 w-48">
          <div class="flex flex-col gap-2">
            <span class="text-2xl font-medium">89</span>
            <span class="text-sm text-gray-600">Retouren</span>
            <Tag value="+23 %" severity="danger" :rounded="false" />
          </div>
        </div>
      </div>

      <!-- Filter Accordion + Export Popover Row -->
      <div class="flex items-start gap-5 mb-8 flex-wrap">
        <Accordion :value="0" class="w-full max-w-3xl">
          <AccordionPanel value="0">
            <AccordionHeader>Filter</AccordionHeader>
            <AccordionContent>
              <div class="flex gap-5 flex-wrap">
                <DatePicker
                  v-model="dateRange"
                  showIcon
                  selectionMode="range"
                  placeholder="Zeitraum wählen"
                  class="w-64"
                >
                  <template #inputicon="slotProps">
                    <i class="pi pi-calendar" @click="slotProps.clickCallback" />
                  </template>
                </DatePicker>
                <label class="hidden">Zeitraum</label>

                <Select
                  v-model="selectedStatus"
                  :options="statusOptions"
                  optionLabel="label"
                  placeholder="Status auswählen"
                  filter
                  filterPlaceholder="Suche..."
                  class="w-56"
                />

                <div class="flex flex-col gap-2">
                  <span class="text-sm">Zustand</span>
                  <div class="flex items-center gap-3">
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="stateFilters" inputId="aktiv" value="Aktiv" />
                      <label for="aktiv">Aktiv</label>
                    </div>
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="stateFilters" inputId="archiv" value="Archiv" />
                      <label for="archiv">Archiv</label>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>

        <!-- Export Popover Button -->
        <div class="flex flex-col gap-3">
          <Button
            label="Exportieren"
            icon="pi pi-file-export"
            iconPos="right"
            @click="toggleExportMenu"
          />
          <Popover ref="exportMenu">
            <div class="flex flex-col gap-2 w-44">
              <Button
                label="Als CSV exportieren"
                severity="secondary"
                outlined
                class="w-full"
              />
              <Button
                label="Als PDF exportieren"
                severity="secondary"
                outlined
                class="w-full"
              />
            </div>
          </Popover>
        </div>
      </div>

      <!-- DataTable -->
      <DataTable :value="orders" class="w-full">
        <Column field="produkt" header="Produkt"></Column>
        <Column field="status" header="Status">
          <template #body="slotProps">
            <Tag
              :value="slotProps.data.status"
              :severity="slotProps.data.statusSeverity"
              :rounded="false"
            />
          </template>
        </Column>
        <Column field="bestelldatum" header="Bestelldatum"></Column>
        <Column field="summe" header="Summe"></Column>
        <Column field="stueck" header="Stück"></Column>
        <Column header="Aktionen">
          <template #body="slotProps">
            <Button
              icon="pi pi-ellipsis-h"
              text
              rounded
              severity="plain"
              @click="toggleRowMenu($event, slotProps.data)"
            />
          </template>
        </Column>
      </DataTable>

      <!-- Row Actions Popover -->
      <Popover ref="rowMenu">
        <div class="flex flex-col gap-2 w-44">
          <Button
            label="Bearbeiten"
            icon="pi pi-pencil"
            severity="secondary"
            outlined
            class="w-full justify-start"
          />
          <Button
            label="Status aktualisieren"
            icon="pi pi-list-check"
            severity="secondary"
            outlined
            class="w-full justify-start"
          />
          <Button
            label="Löschen"
            icon="pi pi-trash"
            severity="secondary"
            outlined
            class="w-full justify-start"
          />
        </div>
      </Popover>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Tag from 'primevue/tag'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
import DatePicker from 'primevue/datepicker'
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Popover from 'primevue/popover'

const dateRange = ref(null)
const selectedStatus = ref(null)
const stateFilters = ref(['Aktiv'])

const statusOptions = ref([
  { label: 'Bezahlt', value: 'bezahlt' },
  { label: 'In Bearbeitung', value: 'in_bearbeitung' },
  { label: 'Versendet', value: 'versendet' },
  { label: 'Angekommen', value: 'angekommen' }
])

const orders = ref([
  {
    produkt: 'Widget Pro',
    status: 'Angekommen',
    statusSeverity: 'success',
    bestelldatum: '15.04.2026',
    summe: '12.400 €',
    stueck: '312'
  },
  {
    produkt: 'Gadget Mini',
    status: 'In Bearbeitung',
    statusSeverity: 'warn',
    bestelldatum: '24.04.2026',
    summe: '8.920 €',
    stueck: '485'
  },
  {
    produkt: 'Sensor X1',
    status: 'Versendet',
    statusSeverity: 'secondary',
    bestelldatum: '09.05.2026',
    summe: '6.100 €',
    stueck: '150'
  },
  {
    produkt: 'System V5',
    status: 'Bezahlt',
    statusSeverity: 'info',
    bestelldatum: '12.06.2026',
    summe: '10.250 €',
    stueck: '2'
  }
])

const exportMenu = ref(null)
const toggleExportMenu = (event) => {
  exportMenu.value.toggle(event)
}

const rowMenu = ref(null)
const selectedRow = ref(null)
const toggleRowMenu = (event, data) => {
  selectedRow.value = data
  rowMenu.value.toggle(event)
}
</script>