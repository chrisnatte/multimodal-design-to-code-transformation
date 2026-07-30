<template>
  <div class="flex min-h-screen bg-white font-sans text-slate-800">
    <!-- Sidebar -->
    <aside class="w-64 bg-slate-50 border-r border-slate-200 p-6 flex flex-col gap-6">
      <div class="text-slate-500 font-medium text-base">Navigation</div>
      <nav class="flex flex-col gap-3">
        <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-300 font-medium text-sm">
          <i class="pi pi-th-large"></i>
          Dashboard
        </a>
        <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-100 font-medium text-sm">
          <i class="pi pi-users"></i>
          Kunden
        </a>
        <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-100 font-medium text-sm">
          <i class="pi pi-file"></i>
          Berichte
        </a>
        <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-100 font-medium text-sm">
          <i class="pi pi-cog"></i>
          Einstellungen
        </a>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-10 flex flex-col gap-8">
      <!-- Header -->
      <div>
        <h1 class="text-3xl font-bold text-slate-900 mb-2">Dashboard</h1>
        <p class="text-slate-500 text-base">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Summary Cards -->
      <div class="grid grid-cols-4 gap-6">
        <div class="bg-slate-50 rounded-xl p-5 flex flex-col gap-4">
          <div>
            <div class="text-2xl font-medium text-slate-900">42.8 Tsd.</div>
            <div class="text-sm text-slate-500 mt-1">Umsatz in €</div>
          </div>
          <div>
            <span class="inline-flex items-center px-2 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold">
              +12 %
            </span>
          </div>
        </div>
        <div class="bg-slate-50 rounded-xl p-5 flex flex-col gap-4">
          <div>
            <div class="text-2xl font-medium text-slate-900">1.247</div>
            <div class="text-sm text-slate-500 mt-1">Bestellungen</div>
          </div>
          <div>
            <span class="inline-flex items-center px-2 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold">
              +8 %
            </span>
          </div>
        </div>
        <div class="bg-slate-50 rounded-xl p-5 flex flex-col gap-4">
          <div>
            <div class="text-2xl font-medium text-slate-900">3.891</div>
            <div class="text-sm text-slate-500 mt-1">Nutzer</div>
          </div>
          <div>
            <span class="inline-flex items-center px-2 py-1 rounded-md bg-orange-100 text-orange-800 text-xs font-bold">
              +2 %
            </span>
          </div>
        </div>
        <div class="bg-slate-50 rounded-xl p-5 flex flex-col gap-4">
          <div>
            <div class="text-2xl font-medium text-slate-900">89</div>
            <div class="text-sm text-slate-500 mt-1">Retouren</div>
          </div>
          <div>
            <span class="inline-flex items-center px-2 py-1 rounded-md bg-red-100 text-red-800 text-xs font-bold">
              +23 %
            </span>
          </div>
        </div>
      </div>

      <!-- Filter & Actions -->
      <div class="flex items-start justify-between gap-6">
        <!-- Filter Panel -->
        <div class="bg-slate-50 rounded-lg border border-slate-200 flex-1">
          <div class="px-4 py-3 border-b border-slate-200 flex justify-between items-center">
            <span class="font-semibold text-sm text-slate-800">Filter</span>
            <i class="pi pi-chevron-down text-slate-500 text-sm"></i>
          </div>
          <div class="p-4 flex gap-6">
            <div class="flex flex-col gap-2 w-64">
              <label class="text-sm text-slate-700">Zeitraum</label>
              <DatePicker v-model="dateRange" selectionMode="range" placeholder="Zeitraum wählen" class="w-full" />
            </div>
            <div class="flex flex-col gap-2 w-56">
              <label class="text-sm text-slate-700">Status</label>
              <Select v-model="selectedStatus" :options="statusOptions" placeholder="Status auswählen" class="w-full" />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-700">Zustand</label>
              <div class="flex items-center gap-4 h-10">
                <div class="flex items-center gap-2">
                  <Checkbox v-model="isAktiv" inputId="aktiv" :binary="true" />
                  <label for="aktiv" class="text-sm text-slate-700 cursor-pointer">Aktiv</label>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox v-model="isArchiv" inputId="archiv" :binary="true" />
                  <label for="archiv" class="text-sm text-slate-700 cursor-pointer">Archiv</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Export Button -->
        <div class="pt-1">
          <Button type="button" label="Exportieren" icon="pi pi-file-export" iconPos="right" class="!bg-emerald-500 !border-emerald-500 hover:!bg-emerald-600" @click="toggleExportMenu" aria-haspopup="true" aria-controls="export_menu" />
          <Menu ref="exportMenu" id="export_menu" :model="exportItems" :popup="true" />
        </div>
      </div>

      <!-- Data Table -->
      <div class="mt-4">
        <DataTable :value="products" class="p-datatable-sm">
          <Column field="name" header="Produkt" class="font-medium text-slate-800"></Column>
          <Column field="status" header="Status">
            <template #body="slotProps">
              <span :class="getStatusClass(slotProps.data.status)" class="px-2.5 py-1 rounded-md text-xs font-bold">
                {{ slotProps.data.status }}
              </span>
            </template>
          </Column>
          <Column field="date" header="Bestelldatum"></Column>
          <Column field="sum" header="Summe"></Column>
          <Column field="pieces" header="Stück"></Column>
          <Column header="Aktionen" :exportable="false" style="min-width: 8rem">
            <template #body="slotProps">
              <Button icon="pi pi-ellipsis-h" text rounded aria-haspopup="true" aria-controls="action_menu" @click="toggleActionMenu($event, slotProps.data)" class="text-slate-500 hover:bg-slate-100" />
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
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import Menu from 'primevue/menu';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const dateRange = ref(null);
const selectedStatus = ref(null);
const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']);
const isAktiv = ref(true);
const isArchiv = ref(false);

const exportMenu = ref(null);
const exportItems = ref([
  { label: 'Als CSV exportieren', icon: 'pi pi-file-excel' },
  { label: 'Als PDF exportieren', icon: 'pi pi-file-pdf' }
]);

const toggleExportMenu = (event) => {
  exportMenu.value.toggle(event);
};

const actionMenu = ref(null);
const selectedProduct = ref(null);
const actionItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);

const toggleActionMenu = (event, data) => {
  selectedProduct.value = data;
  actionMenu.value.toggle(event);
};

const products = ref([
  { name: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', sum: '12.400 €', pieces: 312 },
  { name: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', sum: '8.920 €', pieces: 485 },
  { name: 'Sensor X1', status: 'Versendet', date: '09.05.2026', sum: '6.100 €', pieces: 150 },
  { name: 'System V5', status: 'Bezahlt', date: '12.06.2026', sum: '10.250 €', pieces: 2 }
]);

const getStatusClass = (status) => {
  switch (status) {
    case 'Angekommen':
      return 'bg-emerald-100 text-emerald-800';
    case 'In Bearbeitung':
      return 'bg-orange-100 text-orange-800';
    case 'Versendet':
      return 'bg-slate-100 text-slate-800';
    case 'Bezahlt':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};
</script>

<style>
/* Minor overrides to match exact Figma styling if needed, though Tailwind handles most */
.p-datatable .p-datatable-thead > tr > th {
  background: transparent;
  border-bottom: 1px solid #e2e8f0;
  color: #64748b;
  font-weight: 600;
  padding: 1rem 0.5rem;
}
.p-datatable .p-datatable-tbody > tr > td {
  border-bottom: 1px solid #f1f5f9;
  padding: 1rem 0.5rem;
}
</style>