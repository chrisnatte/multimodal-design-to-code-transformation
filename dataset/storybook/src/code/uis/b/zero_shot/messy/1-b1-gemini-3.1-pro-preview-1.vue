<template>
  <div class="flex min-h-screen bg-slate-50 font-sans">
    <!-- Sidebar -->
    <div class="w-64 bg-slate-50 p-6 flex flex-col gap-4 border-r border-slate-200">
      <div class="text-base font-normal text-slate-900 mb-4">Navigation</div>
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-3 p-3 bg-emerald-100 text-emerald-800 rounded-md border border-emerald-300 font-medium text-sm cursor-pointer">
          <i class="pi pi-home"></i> Dashboard
        </div>
        <div class="flex items-center gap-3 p-3 text-slate-600 rounded-md border border-transparent hover:bg-slate-100 font-medium text-sm cursor-pointer">
          <i class="pi pi-users"></i> Kunden
        </div>
        <div class="flex items-center gap-3 p-3 text-slate-600 rounded-md border border-transparent hover:bg-slate-100 font-medium text-sm cursor-pointer">
          <i class="pi pi-chart-bar"></i> Berichte
        </div>
        <div class="flex items-center gap-3 p-3 text-slate-600 rounded-md border border-transparent hover:bg-slate-100 font-medium text-sm cursor-pointer">
          <i class="pi pi-cog"></i> Einstellungen
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-8 flex flex-col gap-8">
      <!-- Header -->
      <div class="flex justify-between items-start">
        <div>
          <h1 class="text-3xl font-bold text-slate-900 m-0">Dashboard</h1>
          <p class="text-base text-slate-600 mt-2">Bekomme eine Übersicht über die Projekte.</p>
        </div>
        <div>
          <Button label="Exportieren" icon="pi pi-download" iconPos="right" severity="success" @click="toggleExportMenu" />
          <Menu ref="exportMenu" :model="exportItems" :popup="true" />
        </div>
      </div>

      <!-- Summary Cards -->
      <div class="grid grid-cols-4 gap-6">
        <!-- Card 1 -->
        <div class="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col gap-4">
          <div>
            <div class="text-2xl font-medium text-slate-900">42.8 Tsd.</div>
            <div class="text-sm text-slate-600">Umsatz in €</div>
          </div>
          <div>
            <span class="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded-md">+ 12 %</span>
          </div>
        </div>
        <!-- Card 2 -->
        <div class="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col gap-4">
          <div>
            <div class="text-2xl font-medium text-slate-900">1.247</div>
            <div class="text-sm text-slate-600">Bestellungen</div>
          </div>
          <div>
            <span class="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded-md">+ 8 %</span>
          </div>
        </div>
        <!-- Card 3 -->
        <div class="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col gap-4">
          <div>
            <div class="text-2xl font-medium text-slate-900">3.891</div>
            <div class="text-sm text-slate-600">Nutzer</div>
          </div>
          <div>
            <span class="bg-orange-100 text-orange-800 text-xs font-bold px-2 py-1 rounded-md">+ 2 %</span>
          </div>
        </div>
        <!-- Card 4 -->
        <div class="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col gap-4">
          <div>
            <div class="text-2xl font-medium text-slate-900">89</div>
            <div class="text-sm text-slate-600">Retouren</div>
          </div>
          <div>
            <span class="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded-md">+ 23 %</span>
          </div>
        </div>
      </div>

      <!-- Filter Section -->
      <div class="bg-slate-50 rounded-lg border border-slate-200">
        <div class="p-4 border-b border-slate-200 flex justify-between items-center">
          <span class="font-semibold text-sm text-slate-900">Filter</span>
          <i class="pi pi-filter text-slate-500"></i>
        </div>
        <div class="p-6 flex gap-8">
          <div class="flex flex-col gap-2 w-64">
            <label class="text-sm text-slate-700">Zeitraum</label>
            <DatePicker v-model="dateRange" selectionMode="range" placeholder="Zeitraum wählen" class="w-full" />
          </div>
          <div class="flex flex-col gap-2 w-64">
            <label class="text-sm text-slate-700">Status</label>
            <Select v-model="selectedStatus" :options="statusOptions" optionLabel="label" placeholder="Status auswählen" filter class="w-full" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm text-slate-700">Zustand</label>
            <SelectButton v-model="selectedState" :options="stateOptions" />
          </div>
        </div>
      </div>

      <!-- Data Table -->
      <div class="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <DataTable :value="products" class="p-datatable-sm">
          <Column field="product" header="Produkt" class="font-medium text-slate-900"></Column>
          <Column field="status" header="Status">
            <template #body="slotProps">
              <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
            </template>
          </Column>
          <Column field="date" header="Bestelldatum"></Column>
          <Column field="sum" header="Summe"></Column>
          <Column field="pieces" header="Stück"></Column>
          <Column header="Aktionen" :exportable="false" style="min-width:8rem">
            <template #body="slotProps">
              <Button icon="pi pi-ellipsis-h" text rounded aria-haspopup="true" aria-controls="overlay_menu" @click="toggleActionMenu($event, slotProps.data)" />
            </template>
          </Column>
        </DataTable>
        <Menu ref="actionMenu" id="overlay_menu" :model="actionItems" :popup="true" />
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
import SelectButton from 'primevue/selectbutton';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';

const exportMenu = ref();
const exportItems = ref([
  { label: 'Als CSV exportieren', icon: 'pi pi-file-excel' },
  { label: 'Als PDF exportieren', icon: 'pi pi-file-pdf' }
]);

const toggleExportMenu = (event) => {
  exportMenu.value.toggle(event);
};

const dateRange = ref();

const selectedStatus = ref();
const statusOptions = ref([
  { label: 'Bezahlt', value: 'bezahlt' },
  { label: 'In Bearbeitung', value: 'in_bearbeitung' },
  { label: 'Versendet', value: 'versendet' },
  { label: 'Angekommen', value: 'angekommen' }
]);

const selectedState = ref('Aktiv');
const stateOptions = ref(['Aktiv', 'Archiv']);

const products = ref([
  { product: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', sum: '12.400 €', pieces: 312 },
  { product: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', sum: '8.920 €', pieces: 485 },
  { product: 'Sensor X1', status: 'Versendet', date: '09.05.2026', sum: '6.100 €', pieces: 150 },
  { product: 'System V5', status: 'Bezahlt', date: '12.06.2026', sum: '10.250 €', pieces: 2 }
]);

const getSeverity = (status) => {
  switch (status) {
    case 'Angekommen': return 'success';
    case 'In Bearbeitung': return 'warn';
    case 'Versendet': return 'secondary';
    case 'Bezahlt': return 'info';
    default: return 'info';
  }
};

const actionMenu = ref();
const actionItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);

const toggleActionMenu = (event, data) => {
  actionMenu.value.toggle(event);
};
</script>