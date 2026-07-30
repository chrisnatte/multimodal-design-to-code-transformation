<template>
  <div class="flex min-h-screen bg-white font-sans text-slate-800">
    <!-- Sidebar -->
    <div class="w-64 bg-slate-50 border-r border-gray-200 p-4 flex flex-col gap-3">
      <div class="text-gray-500 text-sm mb-2 px-2">Navigation</div>
      <Button
        label="Dashboard"
        icon="pi pi-th-large"
        class="w-full justify-start bg-green-100 text-green-700 border-none hover:bg-green-200 px-4 py-2 rounded-md font-medium"
      />
      <Button
        label="Kunden"
        icon="pi pi-users"
        class="w-full justify-start text-gray-600 bg-transparent border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded-md font-medium"
      />
      <Button
        label="Berichte"
        icon="pi pi-file"
        class="w-full justify-start text-gray-600 bg-transparent border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded-md font-medium"
      />
      <Button
        label="Einstellungen"
        icon="pi pi-cog"
        class="w-full justify-start text-gray-600 bg-transparent border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded-md font-medium"
      />
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-slate-800 mb-2">Dashboard</h1>
        <p class="text-gray-500">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-4 gap-6 mb-8">
        <div class="bg-slate-50 p-5 rounded-xl flex flex-col gap-2">
          <div class="text-2xl font-bold text-slate-800">42.8 Tsd.</div>
          <div class="text-sm text-gray-500">Umsatz in €</div>
          <div>
            <span class="inline-flex items-center px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-700">
              +12 %
            </span>
          </div>
        </div>
        <div class="bg-slate-50 p-5 rounded-xl flex flex-col gap-2">
          <div class="text-2xl font-bold text-slate-800">1.247</div>
          <div class="text-sm text-gray-500">Bestellungen</div>
          <div>
            <span class="inline-flex items-center px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-700">
              +8 %
            </span>
          </div>
        </div>
        <div class="bg-slate-50 p-5 rounded-xl flex flex-col gap-2">
          <div class="text-2xl font-bold text-slate-800">3.891</div>
          <div class="text-sm text-gray-500">Nutzer</div>
          <div>
            <span class="inline-flex items-center px-2 py-1 rounded text-xs font-bold bg-orange-100 text-orange-700">
              +2 %
            </span>
          </div>
        </div>
        <div class="bg-slate-50 p-5 rounded-xl flex flex-col gap-2">
          <div class="text-2xl font-bold text-slate-800">89</div>
          <div class="text-sm text-gray-500">Retouren</div>
          <div>
            <span class="inline-flex items-center px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">
              +23 %
            </span>
          </div>
        </div>
      </div>

      <!-- Filter & Export Section -->
      <div class="flex items-start gap-6 mb-8">
        <!-- Filter Panel -->
        <div class="bg-slate-50 p-5 rounded-xl flex-1">
          <div class="flex justify-between items-center mb-4">
            <span class="font-semibold text-slate-800">Filter</span>
            <i class="pi pi-chevron-down text-gray-500 text-sm"></i>
          </div>
          <div class="flex gap-8">
            <div class="flex flex-col gap-2">
              <label class="text-sm text-gray-600">Zeitraum</label>
              <DatePicker v-model="date" placeholder="Zeitraum wählen" class="w-64" />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-gray-600">Status</label>
              <Select
                v-model="selectedStatus"
                :options="statuses"
                optionLabel="name"
                placeholder="Status auswählen"
                class="w-64"
                filter
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-gray-600">Zustand</label>
              <div class="flex items-center gap-4 h-10">
                <div class="flex items-center gap-2">
                  <Checkbox v-model="aktiv" inputId="aktiv" :binary="true" />
                  <label for="aktiv" class="text-sm text-gray-700 cursor-pointer">Aktiv</label>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox v-model="archiv" inputId="archiv" :binary="true" />
                  <label for="archiv" class="text-sm text-gray-700 cursor-pointer">Archiv</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Export Button -->
        <div class="pt-0">
          <Button
            label="Exportieren"
            icon="pi pi-file-export"
            class="bg-emerald-500 border-none hover:bg-emerald-600 text-white px-4 py-2 rounded-md"
            @click="toggleExport"
          />
          <Menu ref="exportMenu" :model="exportItems" :popup="true" />
        </div>
      </div>

      <!-- Data Table -->
      <DataTable :value="products" class="p-datatable-sm">
        <Column field="product" header="Produkt" class="py-4 border-b border-gray-100"></Column>
        <Column field="status" header="Status" class="py-4 border-b border-gray-100">
          <template #body="slotProps">
            <span :class="['px-2 py-1 rounded text-xs font-bold', slotProps.data.statusClass]">
              {{ slotProps.data.status }}
            </span>
          </template>
        </Column>
        <Column field="date" header="Bestelldatum" class="py-4 border-b border-gray-100"></Column>
        <Column field="sum" header="Summe" class="py-4 border-b border-gray-100"></Column>
        <Column field="pieces" header="Stück" class="py-4 border-b border-gray-100"></Column>
        <Column header="Aktionen" class="py-4 border-b border-gray-100 w-24">
          <template #body>
            <Button icon="pi pi-ellipsis-h" text rounded class="text-gray-500 hover:bg-gray-100" @click="toggleAction" />
            <Menu ref="actionMenu" :model="actionItems" :popup="true" />
          </template>
        </Column>
      </DataTable>
    </div>
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

// Filter State
const date = ref(null);
const selectedStatus = ref(null);
const statuses = ref([
  { name: 'Bezahlt', code: 'bezahlt' },
  { name: 'In Bearbeitung', code: 'in_bearbeitung' },
  { name: 'Versendet', code: 'versendet' },
  { name: 'Angekommen', code: 'angekommen' }
]);
const aktiv = ref(true);
const archiv = ref(false);

// Export Menu State
const exportMenu = ref();
const exportItems = ref([
  { label: 'Als CSV exportieren' },
  { label: 'Als PDF exportieren' }
]);
const toggleExport = (event) => {
  exportMenu.value.toggle(event);
};

// Action Menu State
const actionMenu = ref();
const actionItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);
const toggleAction = (event) => {
  actionMenu.value.toggle(event);
};

// Table Data
const products = ref([
  {
    product: 'Widget Pro',
    status: 'Angekommen',
    date: '15.04.2026',
    sum: '12.400 €',
    pieces: 312,
    statusClass: 'bg-green-100 text-green-700'
  },
  {
    product: 'Gadget Mini',
    status: 'In Bearbeitung',
    date: '24.04.2026',
    sum: '8.920 €',
    pieces: 485,
    statusClass: 'bg-orange-100 text-orange-700'
  },
  {
    product: 'Sensor X1',
    status: 'Versendet',
    date: '09.05.2026',
    sum: '6.100 €',
    pieces: 150,
    statusClass: 'bg-indigo-100 text-indigo-700'
  },
  {
    product: 'System V5',
    status: 'Bezahlt',
    date: '12.06.2026',
    sum: '10.250 €',
    pieces: 2,
    statusClass: 'bg-blue-100 text-blue-700'
  }
]);
</script>