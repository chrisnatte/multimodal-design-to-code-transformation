<template>
  <div class="flex h-screen w-full bg-white font-sans text-slate-900">
    <!-- Sidebar -->
    <div class="w-64 bg-slate-50 p-6 flex flex-col gap-4 border-r border-slate-200">
      <div class="text-lg font-normal text-slate-900 mb-4">Navigation</div>
      <Menu :model="sidebarItems" class="w-full bg-transparent border-none p-0" />
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-8 flex flex-col gap-8 overflow-y-auto">
      <!-- Header -->
      <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p class="text-base text-slate-600">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Stat Cards -->
      <div class="flex gap-6">
        <Card class="flex-1 bg-slate-50 shadow-none border border-slate-200 rounded-xl">
          <template #content>
            <div class="flex flex-col gap-1">
              <div class="text-2xl font-medium text-slate-900">42.8 Tsd.</div>
              <div class="text-sm text-slate-600">Umsatz in €</div>
              <Tag value="+ 12 %" severity="success" class="w-fit mt-3" />
            </div>
          </template>
        </Card>
        <Card class="flex-1 bg-slate-50 shadow-none border border-slate-200 rounded-xl">
          <template #content>
            <div class="flex flex-col gap-1">
              <div class="text-2xl font-medium text-slate-900">1.247</div>
              <div class="text-sm text-slate-600">Bestellungen</div>
              <Tag value="+ 8 %" severity="success" class="w-fit mt-3" />
            </div>
          </template>
        </Card>
        <Card class="flex-1 bg-slate-50 shadow-none border border-slate-200 rounded-xl">
          <template #content>
            <div class="flex flex-col gap-1">
              <div class="text-2xl font-medium text-slate-900">89</div>
              <div class="text-sm text-slate-600">Retouren</div>
              <Tag value="+ 23 %" severity="danger" class="w-fit mt-3" />
            </div>
          </template>
        </Card>
      </div>

      <!-- Filters & Export -->
      <div class="flex justify-between items-end gap-6">
        <div class="flex flex-col bg-slate-50 rounded-lg border border-slate-200 flex-1">
          <div class="flex justify-between items-center p-3 border-b border-slate-200">
            <span class="font-semibold text-sm text-slate-900">Filter</span>
            <i class="pi pi-filter text-slate-500"></i>
          </div>
          <div class="flex gap-6 p-4">
            <div class="flex flex-col gap-2 flex-1">
              <label class="text-sm text-slate-600">Zeitraum</label>
              <DatePicker v-model="dateRange" selectionMode="range" placeholder="Zeitraum wählen" class="w-full" />
            </div>
            <div class="flex flex-col gap-2 flex-1">
              <label class="text-sm text-slate-600">Status</label>
              <Select v-model="selectedStatus" :options="statuses" placeholder="Status auswählen" class="w-full" />
            </div>
            <div class="flex flex-col gap-2 flex-1">
              <label class="text-sm text-slate-600">Zustand</label>
              <SelectButton v-model="selectedState" :options="stateOptions" aria-labelledby="basic" class="w-full" />
            </div>
          </div>
        </div>

        <div class="pb-4">
          <Button type="button" label="Exportieren" icon="pi pi-download" @click="toggleExport" severity="success" class="px-4 py-2" />
          <Menu ref="exportMenu" id="overlay_menu" :model="exportItems" :popup="true" />
        </div>
      </div>

      <!-- Data Table -->
      <div class="border border-slate-200 rounded-lg overflow-hidden bg-white">
        <DataTable :value="products" tableStyle="min-width: 50rem" class="p-datatable-sm">
          <Column field="product" header="Produkt" class="font-semibold"></Column>
          <Column field="status" header="Status">
            <template #body="slotProps">
              <Tag :value="slotProps.data.status" :severity="getStatusSeverity(slotProps.data.status)" />
            </template>
          </Column>
          <Column field="date" header="Bestelldatum"></Column>
          <Column field="total" header="Summe"></Column>
          <Column field="pieces" header="Stück"></Column>
          <Column header="Aktionen">
            <template #body="slotProps">
              <Button icon="pi pi-ellipsis-h" text rounded aria-haspopup="true" aria-controls="overlay_menu_action" @click="toggleAction($event, slotProps.data)" />
            </template>
          </Column>
        </DataTable>
        <Menu ref="actionMenu" id="overlay_menu_action" :model="actionItems" :popup="true" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Menu from 'primevue/menu';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import SelectButton from 'primevue/selectbutton';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const sidebarItems = ref([
  { label: 'Dashboard', icon: 'pi pi-home' },
  { label: 'Kunden', icon: 'pi pi-users' },
  { label: 'Berichte', icon: 'pi pi-chart-bar' },
  { label: 'Einstellungen', icon: 'pi pi-cog' }
]);

const dateRange = ref(null);
const selectedStatus = ref(null);
const statuses = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']);
const stateOptions = ref(['Aktiv', 'Archiv']);
const selectedState = ref('Aktiv');

const exportMenu = ref();
const exportItems = ref([
  { label: 'Als CSV exportieren', icon: 'pi pi-file-excel' },
  { label: 'Als PDF exportieren', icon: 'pi pi-file-pdf' }
]);

const toggleExport = (event) => {
  exportMenu.value.toggle(event);
};

const products = ref([
  { product: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', total: '12.400 €', pieces: 312 },
  { product: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', total: '8.920 €', pieces: 485 },
  { product: 'Sensor X1', status: 'Versendet', date: '09.05.2026', total: '6.100 €', pieces: 150 },
  { product: 'System V5', status: 'Bezahlt', date: '12.06.2026', total: '10.250 €', pieces: 2 },
]);

const getStatusSeverity = (status) => {
  switch (status) {
    case 'Angekommen': return 'success';
    case 'In Bearbeitung': return 'warning';
    case 'Versendet': return 'secondary';
    case 'Bezahlt': return 'info';
    default: return 'info';
  }
};

const actionMenu = ref();
const selectedProduct = ref();
const actionItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);

const toggleAction = (event, product) => {
  selectedProduct.value = product;
  actionMenu.value.toggle(event);
};
</script>