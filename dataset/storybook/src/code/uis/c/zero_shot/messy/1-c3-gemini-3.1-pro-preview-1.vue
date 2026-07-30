<template>
  <div class="flex min-h-screen bg-white font-sans text-slate-800">
    <!-- Sidebar -->
    <aside class="w-64 bg-slate-50 border-r border-slate-200 flex flex-col">
      <div class="p-6">
        <h2 class="text-sm font-semibold text-slate-500 mb-4">Navigation</h2>
        <nav class="flex flex-col gap-2">
          <Button
            label="Dashboard"
            icon="pi pi-th-large"
            class="w-full justify-start bg-emerald-100 text-emerald-700 border-none hover:bg-emerald-200 font-medium px-4 py-2 rounded-md"
          />
          <Button
            label="Kunden"
            icon="pi pi-users"
            variant="outlined"
            class="w-full justify-start text-slate-600 border-slate-300 hover:bg-slate-100 font-medium px-4 py-2 rounded-md"
          />
          <Button
            label="Berichte"
            icon="pi pi-file"
            variant="outlined"
            class="w-full justify-start text-slate-600 border-slate-300 hover:bg-slate-100 font-medium px-4 py-2 rounded-md"
          />
          <Button
            label="Einstellungen"
            icon="pi pi-cog"
            variant="outlined"
            class="w-full justify-start text-slate-600 border-slate-300 hover:bg-slate-100 font-medium px-4 py-2 rounded-md"
          />
        </nav>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-8">
      <!-- Header -->
      <header class="mb-8">
        <h1 class="text-3xl font-bold text-slate-800 mb-1">Dashboard</h1>
        <p class="text-slate-500">Bekomme eine Übersicht über die Projekte.</p>
      </header>

      <!-- KPI Cards -->
      <div class="grid grid-cols-4 gap-6 mb-8">
        <div class="bg-slate-50 p-5 rounded-xl border border-slate-100">
          <div class="text-2xl font-bold text-slate-800 mb-1">42.8 Tsd.</div>
          <div class="text-sm text-slate-500 mb-3">Umsatz in €</div>
          <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-700">
            +12 %
          </span>
        </div>
        <div class="bg-slate-50 p-5 rounded-xl border border-slate-100">
          <div class="text-2xl font-bold text-slate-800 mb-1">1.247</div>
          <div class="text-sm text-slate-500 mb-3">Bestellungen</div>
          <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-700">
            +8 %
          </span>
        </div>
        <div class="bg-slate-50 p-5 rounded-xl border border-slate-100">
          <div class="text-2xl font-bold text-slate-800 mb-1">3.891</div>
          <div class="text-sm text-slate-500 mb-3">Nutzer</div>
          <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-700">
            +2 %
          </span>
        </div>
        <div class="bg-slate-50 p-5 rounded-xl border border-slate-100">
          <div class="text-2xl font-bold text-slate-800 mb-1">89</div>
          <div class="text-sm text-slate-500 mb-3">Retouren</div>
          <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-700">
            +23 %
          </span>
        </div>
      </div>

      <!-- Filter & Export Section -->
      <div class="flex items-start gap-4 mb-8">
        <!-- Filter Panel -->
        <div class="flex-1 bg-slate-50 p-5 rounded-xl border border-slate-100">
          <div class="flex justify-between items-center mb-4">
            <h3 class="font-semibold text-slate-700">Filter</h3>
            <i class="pi pi-chevron-down text-slate-400 text-sm"></i>
          </div>
          <div class="flex gap-6">
            <div class="flex flex-col gap-2 flex-1">
              <label class="text-sm text-slate-600">Zeitraum</label>
              <DatePicker v-model="date" placeholder="Zeitraum wählen" class="w-full" />
            </div>
            <div class="flex flex-col gap-2 flex-1">
              <label class="text-sm text-slate-600">Status</label>
              <Select
                v-model="selectedStatus"
                :options="statusOptions"
                optionLabel="label"
                placeholder="Status auswählen"
                filter
                class="w-full"
              />
            </div>
            <div class="flex flex-col gap-2 flex-1">
              <label class="text-sm text-slate-600">Zustand</label>
              <div class="flex items-center gap-4 h-10">
                <div class="flex items-center gap-2">
                  <Checkbox v-model="isAktiv" inputId="aktiv" :binary="true" />
                  <label for="aktiv" class="text-sm text-slate-700">Aktiv</label>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox v-model="isArchiv" inputId="archiv" :binary="true" />
                  <label for="archiv" class="text-sm text-slate-700">Archiv</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Export Button -->
        <div class="pt-11">
          <Button
            type="button"
            label="Exportieren"
            icon="pi pi-file-export"
            class="bg-emerald-500 hover:bg-emerald-600 border-none text-white"
            @click="toggleExportMenu"
            aria-haspopup="true"
            aria-controls="export_menu"
          />
          <Menu ref="exportMenu" id="export_menu" :model="exportItems" :popup="true" />
        </div>
      </div>

      <!-- Data Table -->
      <div class="bg-white">
        <DataTable :value="products" tableStyle="min-width: 50rem">
          <Column field="name" header="Produkt" class="text-slate-700 font-medium"></Column>
          <Column field="status" header="Status">
            <template #body="slotProps">
              <Tag
                :value="slotProps.data.status"
                :class="getStatusClass(slotProps.data.status)"
                class="px-2 py-1 text-xs font-medium rounded"
              />
            </template>
          </Column>
          <Column field="date" header="Bestelldatum" class="text-slate-600"></Column>
          <Column field="total" header="Summe" class="text-slate-600"></Column>
          <Column field="quantity" header="Stück" class="text-slate-600"></Column>
          <Column header="Aktionen" :exportable="false" style="min-width: 8rem">
            <template #body="slotProps">
              <Button
                icon="pi pi-ellipsis-h"
                text
                rounded
                class="text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                @click="toggleActionMenu($event, slotProps.data)"
                aria-haspopup="true"
                aria-controls="action_menu"
              />
            </template>
          </Column>
        </DataTable>
        <Menu ref="actionMenu" id="action_menu" :model="actionItems" :popup="true" />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';
import Menu from 'primevue/menu';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';

// Filter State
const date = ref(null);
const selectedStatus = ref(null);
const isAktiv = ref(true);
const isArchiv = ref(false);

const statusOptions = ref([
  { label: 'Bezahlt', value: 'bezahlt' },
  { label: 'In Bearbeitung', value: 'in_bearbeitung' },
  { label: 'Versendet', value: 'versendet' },
  { label: 'Angekommen', value: 'angekommen' }
]);

// Export Menu
const exportMenu = ref();
const exportItems = ref([
  { label: 'Als CSV exportieren' },
  { label: 'Als PDF exportieren' }
]);

const toggleExportMenu = (event) => {
  exportMenu.value.toggle(event);
};

// Action Menu
const actionMenu = ref();
const selectedProduct = ref(null);
const actionItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);

const toggleActionMenu = (event, product) => {
  selectedProduct.value = product;
  actionMenu.value.toggle(event);
};

// Table Data
const products = ref([
  {
    id: 1,
    name: 'Widget Pro',
    status: 'Angekommen',
    date: '15.04.2026',
    total: '12.400 €',
    quantity: 312
  },
  {
    id: 2,
    name: 'Gadget Mini',
    status: 'In Bearbeitung',
    date: '24.04.2026',
    total: '8.920 €',
    quantity: 485
  },
  {
    id: 3,
    name: 'Sensor X1',
    status: 'Versendet',
    date: '09.05.2026',
    total: '6.100 €',
    quantity: 150
  },
  {
    id: 4,
    name: 'System V5',
    status: 'Bezahlt',
    date: '12.06.2026',
    total: '10.250 €',
    quantity: 2
  }
]);

// Helper for Status Badge Colors
const getStatusClass = (status) => {
  switch (status) {
    case 'Angekommen':
      return 'bg-emerald-100 text-emerald-700 border-none';
    case 'In Bearbeitung':
      return 'bg-orange-100 text-orange-700 border-none';
    case 'Versendet':
      return 'bg-indigo-100 text-indigo-700 border-none';
    case 'Bezahlt':
      return 'bg-blue-100 text-blue-700 border-none';
    default:
      return 'bg-slate-100 text-slate-700 border-none';
  }
};
</script>