<template>
  <div class="flex min-h-screen bg-slate-50 font-sans">
    <!-- Sidebar -->
    <div class="w-64 bg-slate-50 p-6 flex flex-col gap-4 border-r border-slate-200">
      <div class="text-base font-normal text-slate-700 mb-2">Navigation</div>
      <Button 
        label="Dashboard" 
        icon="pi pi-th-large" 
        class="w-full justify-start bg-emerald-100 text-emerald-800 border-emerald-300 hover:bg-emerald-200" 
      />
      <Button 
        label="Kunden" 
        icon="pi pi-users" 
        class="w-full justify-start bg-white text-slate-700 border-slate-300 hover:bg-slate-100" 
      />
      <Button 
        label="Berichte" 
        icon="pi pi-file" 
        class="w-full justify-start bg-white text-slate-700 border-slate-300 hover:bg-slate-100" 
      />
      <Button 
        label="Einstellungen" 
        icon="pi pi-cog" 
        class="w-full justify-start bg-white text-slate-700 border-slate-300 hover:bg-slate-100" 
      />
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-10 flex flex-col gap-8 bg-white">
      <!-- Header -->
      <div>
        <h1 class="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p class="text-slate-500 mt-1 text-base">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Summary Cards -->
      <div class="flex gap-6">
        <div class="bg-slate-50 rounded-xl p-6 flex-1 border border-slate-100">
          <div class="text-2xl font-medium text-slate-900">42.8 Tsd.</div>
          <div class="text-sm text-slate-500 mt-1">Umsatz in €</div>
          <div class="mt-3 inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded">+12 %</div>
        </div>
        <div class="bg-slate-50 rounded-xl p-6 flex-1 border border-slate-100">
          <div class="text-2xl font-medium text-slate-900">1.247</div>
          <div class="text-sm text-slate-500 mt-1">Bestellungen</div>
          <div class="mt-3 inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded">+8 %</div>
        </div>
        <div class="bg-slate-50 rounded-xl p-6 flex-1 border border-slate-100">
          <div class="text-2xl font-medium text-slate-900">3.891</div>
          <div class="text-sm text-slate-500 mt-1">Nutzer</div>
          <div class="mt-3 inline-block bg-orange-100 text-orange-800 text-xs font-bold px-2 py-1 rounded">+2 %</div>
        </div>
        <div class="bg-slate-50 rounded-xl p-6 flex-1 border border-slate-100">
          <div class="text-2xl font-medium text-slate-900">89</div>
          <div class="text-sm text-slate-500 mt-1">Retouren</div>
          <div class="mt-3 inline-block bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded">+23 %</div>
        </div>
      </div>

      <!-- Filters & Export -->
      <div class="flex justify-between items-start gap-6">
        <!-- Filter Box -->
        <div class="bg-slate-50 rounded-lg border border-slate-200 flex-1">
          <div class="px-4 py-3 border-b border-slate-200 flex justify-between items-center">
            <span class="font-semibold text-sm text-slate-800">Filter</span>
            <i class="pi pi-chevron-down text-slate-500 text-sm"></i>
          </div>
          <div class="p-4 flex gap-6">
            <div class="flex flex-col gap-2 flex-1">
              <label class="text-sm text-slate-700">Zeitraum</label>
              <DatePicker v-model="date" placeholder="Zeitraum wählen" class="w-full" />
            </div>
            <div class="flex flex-col gap-2 flex-1">
              <label class="text-sm text-slate-700">Status</label>
              <Select v-model="selectedStatus" :options="statuses" placeholder="Status auswählen" class="w-full" />
            </div>
            <div class="flex flex-col gap-2 w-48">
              <label class="text-sm text-slate-700">Zustand</label>
              <div class="flex items-center gap-4 h-10">
                <div class="flex items-center gap-2">
                  <Checkbox v-model="aktiv" inputId="aktiv" binary />
                  <label for="aktiv" class="text-sm text-slate-700 cursor-pointer">Aktiv</label>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox v-model="archiv" inputId="archiv" binary />
                  <label for="archiv" class="text-sm text-slate-700 cursor-pointer">Archiv</label>
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
            iconPos="right" 
            @click="toggleExportMenu" 
            class="bg-emerald-500 border-emerald-500 hover:bg-emerald-600 hover:border-emerald-600 text-white" 
          />
          <Menu ref="exportMenu" :model="exportItems" :popup="true" />
        </div>
      </div>

      <!-- Data Table -->
      <div class="border border-slate-200 rounded-lg overflow-hidden">
        <DataTable :value="products" class="w-full text-sm">
          <Column field="name" header="Produkt" class="py-4 px-4 border-b border-slate-200"></Column>
          <Column field="status" header="Status" class="py-4 px-4 border-b border-slate-200">
            <template #body="slotProps">
              <Tag :value="slotProps.data.status" :severity="getStatusSeverity(slotProps.data.status)" class="font-bold text-xs px-2 py-1" />
            </template>
          </Column>
          <Column field="date" header="Bestelldatum" class="py-4 px-4 border-b border-slate-200"></Column>
          <Column field="total" header="Summe" class="py-4 px-4 border-b border-slate-200"></Column>
          <Column field="pieces" header="Stück" class="py-4 px-4 border-b border-slate-200"></Column>
          <Column header="Aktionen" class="py-4 px-4 border-b border-slate-200 w-24 text-center">
            <template #body="slotProps">
              <Button icon="pi pi-ellipsis-h" text rounded class="text-slate-400 hover:text-slate-600 bg-slate-50 hover:bg-slate-100 w-8 h-8 p-0" @click="toggleActionMenu($event, slotProps.data)" />
            </template>
          </Column>
        </DataTable>
        <Menu ref="actionMenu" :model="actionItems" :popup="true" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Menu from 'primevue/menu';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';

const date = ref(null);
const selectedStatus = ref(null);
const statuses = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']);
const aktiv = ref(true);
const archiv = ref(false);

const exportMenu = ref();
const exportItems = ref([
  { label: 'Als CSV exportieren' },
  { label: 'Als PDF exportieren' }
]);

const toggleExportMenu = (event) => {
  exportMenu.value.toggle(event);
};

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

const products = ref([
  { name: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', total: '12.400 €', pieces: '312' },
  { name: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', total: '8.920 €', pieces: '485' },
  { name: 'Sensor X1', status: 'Versendet', date: '09.05.2026', total: '6.100 €', pieces: '150' },
  { name: 'System V5', status: 'Bezahlt', date: '12.06.2026', total: '10.250 €', pieces: '2' }
]);

const getStatusSeverity = (status) => {
  switch (status) {
    case 'Angekommen':
      return 'success';
    case 'In Bearbeitung':
      return 'warn';
    case 'Versendet':
      return 'secondary';
    case 'Bezahlt':
      return 'info';
    default:
      return null;
  }
};
</script>