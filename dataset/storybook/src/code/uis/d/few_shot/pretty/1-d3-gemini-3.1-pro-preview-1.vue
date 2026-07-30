<template>
  <div class="flex min-h-screen w-full bg-white font-sans text-slate-800">
    <!-- Sidebar -->
    <div class="flex w-64 flex-col gap-8 bg-slate-50 p-6">
      <div class="text-base text-slate-600">Navigation</div>
      <div class="flex flex-col gap-4">
        <Button
          label="Dashboard"
          icon="pi pi-objects-column"
          class="!border-none !bg-green-100 !text-green-700 !justify-start"
        />
        <Button
          label="Kunden"
          icon="pi pi-users"
          severity="secondary"
          variant="outlined"
          class="!border-slate-200 !text-slate-700 !justify-start bg-white"
        />
        <Button
          label="Berichte"
          icon="pi pi-file"
          severity="secondary"
          variant="outlined"
          class="!border-slate-200 !text-slate-700 !justify-start bg-white"
        />
        <Button
          label="Einstellungen"
          icon="pi pi-cog"
          severity="secondary"
          variant="outlined"
          class="!border-slate-200 !text-slate-700 !justify-start bg-white"
        />
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex flex-1 flex-col gap-8 p-16">
      <!-- Header -->
      <div>
        <h1 class="mb-2 text-3xl font-bold text-slate-900">Dashboard</h1>
        <p class="text-slate-500">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Metric Cards -->
      <div class="flex gap-5">
        <div class="flex flex-1 flex-col gap-1 rounded-xl bg-slate-50 p-5">
          <div class="text-2xl font-medium text-slate-900">42.8 Tsd.</div>
          <div class="text-sm text-slate-500">Umsatz in €</div>
          <Tag value="+12 %" severity="success" class="mt-3 w-fit !bg-green-100 !text-green-700" />
        </div>
        <div class="flex flex-1 flex-col gap-1 rounded-xl bg-slate-50 p-5">
          <div class="text-2xl font-medium text-slate-900">1.247</div>
          <div class="text-sm text-slate-500">Bestellungen</div>
          <Tag value="+8 %" severity="success" class="mt-3 w-fit !bg-green-100 !text-green-700" />
        </div>
        <div class="flex flex-1 flex-col gap-1 rounded-xl bg-slate-50 p-5">
          <div class="text-2xl font-medium text-slate-900">3.891</div>
          <div class="text-sm text-slate-500">Nutzer</div>
          <Tag value="+2 %" severity="warn" class="mt-3 w-fit !bg-orange-100 !text-orange-700" />
        </div>
        <div class="flex flex-1 flex-col gap-1 rounded-xl bg-slate-50 p-5">
          <div class="text-2xl font-medium text-slate-900">89</div>
          <div class="text-sm text-slate-500">Retouren</div>
          <Tag value="+23 %" severity="danger" class="mt-3 w-fit !bg-red-100 !text-red-700" />
        </div>
      </div>

      <!-- Filter & Export -->
      <div class="flex items-start justify-between gap-4">
        <Accordion value="0" class="max-w-3xl flex-1">
          <AccordionPanel value="0" class="!border-none !bg-slate-50">
            <AccordionHeader class="!bg-transparent !p-4">
              <span class="font-semibold text-slate-800">Filter</span>
            </AccordionHeader>
            <AccordionContent class="!bg-transparent !p-4 !pt-0">
              <div class="flex gap-5">
                <div class="flex flex-1 flex-col gap-2">
                  <label class="text-sm text-slate-700">Zeitraum</label>
                  <DatePicker v-model="date" placeholder="Zeitraum wählen" class="w-full" />
                </div>
                <div class="flex flex-1 flex-col gap-2">
                  <label class="text-sm text-slate-700">Status</label>
                  <Select
                    v-model="selectedStatus"
                    :options="statusOptions"
                    placeholder="Status auswählen"
                    class="w-full"
                  />
                </div>
                <div class="flex w-32 flex-col gap-2">
                  <label class="text-sm text-slate-700">Zustand</label>
                  <div class="flex h-10 items-center gap-4">
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="isActive" inputId="active" binary />
                      <label for="active" class="text-sm text-slate-700">Aktiv</label>
                    </div>
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="isArchive" inputId="archive" binary />
                      <label for="archive" class="text-sm text-slate-700">Archiv</label>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>

        <div>
          <Button
            label="Exportieren"
            icon="pi pi-file-export"
            iconPos="right"
            severity="primary"
            @click="toggleExportMenu"
            class="!bg-emerald-500 !border-emerald-500 hover:!bg-emerald-600"
          />
          <Menu ref="exportMenu" :model="exportMenuItems" popup />
        </div>
      </div>

      <!-- DataTable -->
      <DataTable :value="products" class="mt-4">
        <Column field="product" header="Produkt" class="font-medium" />
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="getSeverity(data.status)" />
          </template>
        </Column>
        <Column field="date" header="Bestelldatum" />
        <Column field="total" header="Summe" />
        <Column field="pieces" header="Stück" />
        <Column header="Aktionen" headerClass="w-24" bodyClass="text-center">
          <template #body="{ data }">
            <Button
              icon="pi pi-ellipsis-h"
              severity="secondary"
              variant="text"
              rounded
              aria-haspopup="true"
              aria-controls="action_menu"
              @click="toggleActionMenu($event, data)"
            />
          </template>
        </Column>
      </DataTable>
      <Menu ref="actionMenu" id="action_menu" :model="actionMenuItems" popup />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import Button from 'primevue/button'
import Tag from 'primevue/tag'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
import DatePicker from 'primevue/datepicker'
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'
import Menu from 'primevue/menu'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

// Filter State
const date = ref()
const selectedStatus = ref()
const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen'])
const isActive = ref(true)
const isArchive = ref(false)

// Export Menu
const exportMenu = useTemplateRef('exportMenu')
const exportMenuItems = ref([
  { label: 'Als CSV exportieren', icon: 'pi pi-file' },
  { label: 'Als PDF exportieren', icon: 'pi pi-file-pdf' }
])
const toggleExportMenu = (event: Event) => {
  exportMenu.value?.toggle(event)
}

// Action Menu
const actionMenu = useTemplateRef('actionMenu')
const selectedProduct = ref()
const actionMenuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
  { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])
const toggleActionMenu = (event: Event, data: any) => {
  selectedProduct.value = data
  actionMenu.value?.toggle(event)
}

// DataTable Data
const products = ref([
  { product: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', total: '12.400 €', pieces: 312 },
  { product: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', total: '8.920 €', pieces: 485 },
  { product: 'Sensor X1', status: 'Versendet', date: '09.05.2026', total: '6.100 €', pieces: 150 },
  { product: 'System V5', status: 'Bezahlt', date: '12.06.2026', total: '10.250 €', pieces: 2 }
])

const getSeverity = (status: string) => {
  switch (status) {
    case 'Angekommen':
      return 'success'
    case 'In Bearbeitung':
      return 'warn'
    case 'Versendet':
      return 'secondary'
    case 'Bezahlt':
      return 'info'
    default:
      return 'info'
  }
}
</script>