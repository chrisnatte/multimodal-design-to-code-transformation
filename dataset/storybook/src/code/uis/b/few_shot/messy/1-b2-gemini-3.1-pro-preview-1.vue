<template>
  <div class="flex min-h-screen bg-surface-50">
    <!-- Sidebar -->
    <div class="w-64 flex-shrink-0 bg-surface-50 p-6 flex flex-col gap-6 border-r border-surface-200">
      <div class="text-lg font-normal text-surface-900">Navigation</div>
      <div class="flex flex-col gap-2">
        <Button 
          label="Dashboard" 
          icon="pi pi-home" 
          class="!justify-start w-full !bg-green-100 !text-green-700 hover:!bg-green-200" 
          variant="text" 
        />
        <Button 
          label="Kunden" 
          icon="pi pi-users" 
          class="!justify-start w-full !text-surface-600 hover:!bg-surface-200" 
          variant="text" 
        />
        <Button 
          label="Berichte" 
          icon="pi pi-chart-bar" 
          class="!justify-start w-full !text-surface-600 hover:!bg-surface-200" 
          variant="text" 
        />
        <Button 
          label="Einstellungen" 
          icon="pi pi-cog" 
          class="!justify-start w-full !text-surface-600 hover:!bg-surface-200" 
          variant="text" 
        />
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-8 flex flex-col gap-8 bg-white">
      <!-- Header -->
      <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-bold m-0 text-surface-900">Dashboard</h1>
        <p class="text-surface-600 m-0 text-base">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Summary Cards -->
      <div class="grid grid-cols-4 gap-6">
        <Card class="bg-surface-50 shadow-none border border-surface-200">
          <template #content>
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-1">
                <div class="text-2xl font-medium text-surface-900">42.8 Tsd.</div>
                <div class="text-surface-600 text-sm">Umsatz in €</div>
              </div>
              <Tag value="+ 12 %" severity="success" class="w-fit" />
            </div>
          </template>
        </Card>
        
        <Card class="bg-surface-50 shadow-none border border-surface-200">
          <template #content>
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-1">
                <div class="text-2xl font-medium text-surface-900">1.247</div>
                <div class="text-surface-600 text-sm">Bestellungen</div>
              </div>
              <Tag value="+ 8 %" severity="success" class="w-fit" />
            </div>
          </template>
        </Card>

        <Card class="bg-surface-50 shadow-none border border-surface-200">
          <template #content>
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-1">
                <div class="text-2xl font-medium text-surface-900">3.891</div>
                <div class="text-surface-600 text-sm">Nutzer</div>
              </div>
              <Tag value="+ 2 %" severity="warn" class="w-fit !bg-orange-100 !text-orange-700" />
            </div>
          </template>
        </Card>

        <Card class="bg-surface-50 shadow-none border border-surface-200">
          <template #content>
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-1">
                <div class="text-2xl font-medium text-surface-900">89</div>
                <div class="text-surface-600 text-sm">Retouren</div>
              </div>
              <Tag value="+ 23 %" severity="danger" class="w-fit !bg-red-100 !text-red-700" />
            </div>
          </template>
        </Card>
      </div>

      <!-- Filters -->
      <div class="flex flex-col gap-6 bg-surface-50 p-6 rounded-lg border border-surface-200">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2 font-semibold text-surface-900">
            Filter <i class="pi pi-filter"></i>
          </div>
          <div>
            <Button label="Exportieren" icon="pi pi-download" iconPos="right" severity="success" @click="toggleExportMenu" />
            <Menu ref="exportMenu" :model="exportMenuItems" popup />
          </div>
        </div>

        <div class="flex gap-6 items-end">
          <div class="flex flex-col gap-2 flex-1">
            <label class="text-sm text-surface-700">Zeitraum</label>
            <DatePicker v-model="date" placeholder="Zeitraum wählen" class="w-full" />
          </div>
          <div class="flex flex-col gap-2 flex-1">
            <label class="text-sm text-surface-700">Status</label>
            <Select v-model="status" :options="statusOptions" placeholder="Status auswählen" class="w-full" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm text-surface-700">Zustand</label>
            <SelectButton v-model="zustand" :options="['Aktiv', 'Archiv']" />
          </div>
        </div>
      </div>

      <!-- Data Table -->
      <DataTable :value="products" class="border border-surface-200 rounded-lg overflow-hidden">
        <Column field="name" header="Produkt" class="font-medium" />
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="getSeverity(data.status)" />
          </template>
        </Column>
        <Column field="date" header="Bestelldatum" />
        <Column field="total" header="Summe" />
        <Column field="pieces" header="Stück" />
        <Column header="Aktionen" bodyStyle="text-align: right">
          <template #body="{ data }">
            <Button icon="pi pi-ellipsis-h" variant="text" severity="secondary" rounded @click="toggleActionMenu($event, data)" />
          </template>
        </Column>
      </DataTable>
      <Menu ref="actionMenu" :model="actionMenuItems" popup />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import SelectButton from 'primevue/selectbutton';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Menu from 'primevue/menu';

const date = ref(null);
const status = ref(null);
const zustand = ref('Aktiv');

const statusOptions = ref(['Angekommen', 'In Bearbeitung', 'Versendet', 'Bezahlt']);

const products = ref([
  { name: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', total: '12.400 €', pieces: 312 },
  { name: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', total: '8.920 €', pieces: 485 },
  { name: 'Sensor X1', status: 'Versendet', date: '09.05.2026', total: '6.100 €', pieces: 150 },
  { name: 'System V5', status: 'Bezahlt', date: '12.06.2026', total: '10.250 €', pieces: 2 }
]);

const getSeverity = (status) => {
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
      return 'info';
  }
};

const exportMenu = ref();
const toggleExportMenu = (event) => {
  exportMenu.value.toggle(event);
};
const exportMenuItems = ref([
  { label: 'Als CSV exportieren', icon: 'pi pi-file-excel' },
  { label: 'Als PDF exportieren', icon: 'pi pi-file-pdf' }
]);

const actionMenu = ref();
const selectedProduct = ref();
const toggleActionMenu = (event, data) => {
  selectedProduct.value = data;
  actionMenu.value.toggle(event);
};
const actionMenuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);
</script>