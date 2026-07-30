<template>
  <div class="flex min-h-screen bg-white">
    <!-- Sidebar Navigation -->
    <div class="w-64 bg-slate-100 p-6 flex flex-col gap-6">
      <span class="text-base text-gray-700">Navigation</span>
      <div class="flex flex-col gap-4">
        <Button
          label="Dashboard"
          icon="pi pi-th-large"
          class="w-full justify-start bg-emerald-100 border-emerald-500 text-emerald-700"
          outlined
        />
        <Button
          label="Kunden"
          icon="pi pi-users"
          class="w-full justify-start"
          severity="secondary"
          outlined
        />
        <Button
          label="Berichte"
          icon="pi pi-file"
          class="w-full justify-start"
          severity="secondary"
          outlined
        />
        <Button
          label="Einstellungen"
          icon="pi pi-cog"
          class="w-full justify-start"
          severity="secondary"
          outlined
        />
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-8">
      <div class="flex flex-col gap-1 mb-6">
        <h1 class="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p class="text-base text-gray-500">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Stat Cards -->
      <div class="flex gap-5 mb-6">
        <div class="bg-slate-100 rounded-xl p-4 w-48">
          <div class="flex flex-col gap-2">
            <span class="text-2xl font-medium text-gray-800">42.8 Tsd.</span>
            <span class="text-sm text-gray-500">Umsatz in €</span>
            <Tag value="+12 %" class="bg-emerald-100 text-emerald-700 w-fit" />
          </div>
        </div>
        <div class="bg-slate-100 rounded-xl p-4 w-48">
          <div class="flex flex-col gap-2">
            <span class="text-2xl font-medium text-gray-800">1.247</span>
            <span class="text-sm text-gray-500">Bestellungen</span>
            <Tag value="+8 %" class="bg-emerald-100 text-emerald-700 w-fit" />
          </div>
        </div>
        <div class="bg-slate-100 rounded-xl p-4 w-48">
          <div class="flex flex-col gap-2">
            <span class="text-2xl font-medium text-gray-800">3.891</span>
            <span class="text-sm text-gray-500">Nutzer</span>
            <Tag value="+2 %" severity="warn" class="w-fit" />
          </div>
        </div>
        <div class="bg-slate-100 rounded-xl p-4 w-48">
          <div class="flex flex-col gap-2">
            <span class="text-2xl font-medium text-gray-800">89</span>
            <span class="text-sm text-gray-500">Retouren</span>
            <Tag value="+23 %" severity="danger" class="w-fit" />
          </div>
        </div>
      </div>

      <!-- Filter Accordion + Export -->
      <div class="flex gap-5 items-start mb-6">
        <div class="flex-1">
          <Accordion :activeIndex="0">
            <AccordionTab header="Filter">
              <div class="flex gap-5">
                <div class="flex flex-col gap-2 w-64">
                  <label class="text-sm">Zeitraum</label>
                  <Calendar
                    v-model="dateRange"
                    placeholder="Zeitraum wählen"
                    class="w-full"
                  />
                </div>
                <div class="flex flex-col gap-2 w-64">
                  <label class="text-sm">Status</label>
                  <Dropdown
                    v-model="selectedStatus"
                    :options="statusOptions"
                    optionLabel="label"
                    filter
                    filterPlaceholder="Suche..."
                    placeholder="Status auswählen"
                    class="w-full"
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm">Zustand</label>
                  <div class="flex items-center gap-3 py-3">
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="isActive" binary inputId="activeCheck" />
                      <label for="activeCheck" class="text-sm">Aktiv</label>
                    </div>
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="isArchive" binary inputId="archiveCheck" />
                      <label for="archiveCheck" class="text-sm">Archiv</label>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionTab>
          </Accordion>
        </div>
        <div class="relative">
          <Button label="Exportieren" icon="pi pi-file-export" iconPos="right" @click="toggleExportMenu" />
          <div
            v-if="showExportMenu"
            class="absolute right-0 mt-2 bg-white border border-slate-200 rounded-md p-3 flex flex-col gap-2 w-48 z-10"
          >
            <Button label="Als CSV exportieren" outlined severity="secondary" class="w-full" />
            <Button label="Als PDF exportieren" outlined severity="secondary" class="w-full" />
          </div>
        </div>
      </div>

      <!-- Data Table -->
      <DataTable :value="products" class="w-full">
        <Column field="produkt" header="Produkt" />
        <Column field="status" header="Status">
          <template #body="slotProps">
            <Tag :value="slotProps.data.status" :class="getStatusClass(slotProps.data.status)" />
          </template>
        </Column>
        <Column field="bestelldatum" header="Bestelldatum" />
        <Column field="summe" header="Summe" />
        <Column field="stueck" header="Stück" />
        <Column header="Aktionen">
          <template #body="slotProps">
            <div class="relative">
              <Button
                icon="pi pi-ellipsis-h"
                text
                severity="secondary"
                @click="toggleRowMenu(slotProps.data.id)"
              />
              <div
                v-if="activeRowMenu === slotProps.data.id"
                class="absolute right-0 mt-2 bg-white border border-slate-200 rounded-md p-3 flex flex-col gap-2 w-48 z-10"
              >
                <Button label="Bearbeiten" icon="pi pi-pen-to-square" outlined severity="secondary" class="w-full justify-start" />
                <Button label="Status aktualisieren" icon="pi pi-list-check" outlined severity="secondary" class="w-full justify-start" />
                <Button label="Löschen" icon="pi pi-trash" outlined severity="secondary" class="w-full justify-start" />
              </div>
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import Checkbox from 'primevue/checkbox';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';

const dateRange = ref(null);
const selectedStatus = ref(null);
const isActive = ref(true);
const isArchive = ref(false);
const showExportMenu = ref(false);
const activeRowMenu = ref(null);

const statusOptions = ref([
  { label: 'Bezahlt', value: 'bezahlt' },
  { label: 'In Bearbeitung', value: 'in-bearbeitung' },
  { label: 'Versendet', value: 'versendet' },
  { label: 'Angekommen', value: 'angekommen' },
]);

const products = ref([
  { id: 1, produkt: 'Widget Pro', status: 'Angekommen', bestelldatum: '15.04.2026', summe: '12.400 €', stueck: '312' },
  { id: 2, produkt: 'Gadget Mini', status: 'In Bearbeitung', bestelldatum: '24.04.2026', summe: '8.920 €', stueck: '485' },
  { id: 3, produkt: 'Sensor X1', status: 'Versendet', bestelldatum: '09.05.2026', summe: '6.100 €', stueck: '150' },
  { id: 4, produkt: 'System V5', status: 'Bezahlt', bestelldatum: '12.06.2026', summe: '10.250 €', stueck: '2' },
]);

function getStatusClass(status) {
  switch (status) {
    case 'Angekommen':
      return 'bg-emerald-100 text-emerald-700';
    case 'In Bearbeitung':
      return 'bg-orange-100 text-orange-700';
    case 'Versendet':
      return 'bg-slate-100 text-slate-700';
    case 'Bezahlt':
      return 'bg-blue-100 text-blue-700';
    default:
      return '';
  }
}

function toggleExportMenu() {
  showExportMenu.value = !showExportMenu.value;
}

function toggleRowMenu(id) {
  activeRowMenu.value = activeRowMenu.value === id ? null : id;
}
</script>