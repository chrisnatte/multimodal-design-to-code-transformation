<template>
  <div class="flex min-h-screen bg-white">
    <!-- Sidebar -->
    <div class="w-64 bg-[#F1F5F9] p-6 flex flex-col gap-4">
      <div class="text-base font-normal text-gray-900 mb-2">Navigation</div>
      <div class="flex flex-col gap-2">
        <Button label="Dashboard" icon="pi pi-home" class="w-full justify-start !bg-[#D1FAE5] !text-gray-900 !border-[#A7F3D0]" variant="outlined" />
        <Button label="Kunden" icon="pi pi-users" class="w-full justify-start !text-gray-600" variant="text" />
        <Button label="Berichte" icon="pi pi-chart-bar" class="w-full justify-start !text-gray-600" variant="text" />
        <Button label="Einstellungen" icon="pi pi-cog" class="w-full justify-start !text-gray-600" variant="text" />
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-10 flex flex-col gap-10">
      <!-- Header -->
      <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p class="text-base text-gray-600">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Stat Cards -->
      <div class="grid grid-cols-4 gap-6">
        <div class="bg-[#F1F5F9] p-4 rounded-xl flex flex-col gap-2">
          <div class="text-2xl font-medium text-gray-900">42.8 Tsd.</div>
          <div class="text-sm text-gray-600">Umsatz in €</div>
          <Tag value="+ 12 %" severity="success" class="w-fit mt-2 !bg-[#D1FAE5] !text-green-800" />
        </div>
        <div class="bg-[#F1F5F9] p-4 rounded-xl flex flex-col gap-2">
          <div class="text-2xl font-medium text-gray-900">1.247</div>
          <div class="text-sm text-gray-600">Bestellungen</div>
          <Tag value="+ 8 %" severity="success" class="w-fit mt-2 !bg-[#D1FAE5] !text-green-800" />
        </div>
        <div class="bg-[#F1F5F9] p-4 rounded-xl flex flex-col gap-2">
          <div class="text-2xl font-medium text-gray-900">3.891</div>
          <div class="text-sm text-gray-600">Nutzer</div>
          <Tag value="+ 2 %" severity="warn" class="w-fit mt-2 !bg-[#FFEDD5] !text-orange-800" />
        </div>
        <div class="bg-[#F1F5F9] p-4 rounded-xl flex flex-col gap-2">
          <div class="text-2xl font-medium text-gray-900">89</div>
          <div class="text-sm text-gray-600">Retouren</div>
          <Tag value="+ 23 %" severity="danger" class="w-fit mt-2 !bg-[#FEE2E2] !text-red-800" />
        </div>
      </div>

      <!-- Filters & Export -->
      <div class="flex justify-between items-start">
        <div class="bg-[#F1F5F9] rounded-lg border border-gray-200 w-fit">
          <div class="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
            <span class="font-semibold text-sm text-gray-900">Filter</span>
            <i class="pi pi-filter text-gray-500"></i>
          </div>
          <div class="p-4 flex gap-8">
            <div class="flex flex-col gap-2">
              <label class="text-sm text-gray-600">Zeitraum</label>
              <DatePicker v-model="dateRange" selectionMode="range" placeholder="Zeitraum wählen" class="w-56" />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-gray-600">Status</label>
              <Select v-model="selectedStatus" :options="statusOptions" placeholder="Status auswählen" class="w-56" />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-gray-600">Zustand</label>
              <SelectButton v-model="selectedZustand" :options="zustandOptions" />
            </div>
          </div>
        </div>
        
        <div class="pt-10">
          <Button label="Exportieren" icon="pi pi-chevron-down" iconPos="right" severity="success" @click="toggleExportMenu" class="!bg-[#10B981] !border-[#10B981]" />
          <Menu ref="exportMenu" :model="exportItems" :popup="true" />
        </div>
      </div>

      <!-- Data Table -->
      <div class="border border-gray-200 rounded-lg overflow-hidden">
        <DataTable :value="products" class="p-datatable-sm">
          <Column field="name" header="Produkt" class="font-medium text-gray-900"></Column>
          <Column field="status" header="Status">
            <template #body="slotProps">
              <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
            </template>
          </Column>
          <Column field="date" header="Bestelldatum" class="text-gray-600"></Column>
          <Column field="total" header="Summe" class="text-gray-600"></Column>
          <Column field="count" header="Stück" class="text-gray-600"></Column>
          <Column header="Aktionen">
            <template #body>
              <Button icon="pi pi-ellipsis-h" variant="text" severity="secondary" @click="toggleActionMenu" />
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
const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']);

const zustandOptions = ref(['Aktiv', 'Archiv']);
const selectedZustand = ref('Aktiv');

const products = ref([
  { name: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', total: '12.400 €', count: 312 },
  { name: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', total: '8.920 €', count: 485 },
  { name: 'Sensor X1', status: 'Versendet', date: '09.05.2026', total: '6.100 €', count: 150 },
  { name: 'System V5', status: 'Bezahlt', date: '12.06.2026', total: '10.250 €', count: 2 }
]);

const actionMenu = ref();
const actionItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);

const toggleActionMenu = (event) => {
  actionMenu.value.toggle(event);
};

const getSeverity = (status) => {
  switch (status) {
    case 'Angekommen': return 'success';
    case 'In Bearbeitung': return 'warn';
    case 'Versendet': return 'info';
    case 'Bezahlt': return 'secondary';
    default: return 'info';
  }
};
</script>