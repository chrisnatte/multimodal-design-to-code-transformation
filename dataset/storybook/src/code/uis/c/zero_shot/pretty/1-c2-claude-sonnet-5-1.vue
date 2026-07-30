<template>
  <div class="flex min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <div class="w-64 bg-white p-4 flex flex-col gap-2">
      <h2 class="text-gray-700 font-semibold mb-4 px-2">Navigation</h2>
      <Button label="Dashboard" icon="pi pi-th-large" class="w-full justify-start" severity="success" outlined />
      <Button label="Kunden" icon="pi pi-users" class="w-full justify-start" severity="secondary" outlined />
      <Button label="Berichte" icon="pi pi-file" class="w-full justify-start" severity="secondary" outlined />
      <Button label="Einstellungen" icon="pi pi-cog" class="w-full justify-start" severity="secondary" outlined />
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-1">Dashboard</h1>
      <p class="text-gray-500 mb-6">Bekomme eine Übersicht über die Projekte.</p>

      <!-- KPI Cards -->
      <div class="grid grid-cols-4 gap-4 mb-6">
        <Card>
          <template #content>
            <div class="text-2xl font-bold text-gray-800">42.8 Tsd.</div>
            <div class="text-gray-500 text-sm mb-2">Umsatz in €</div>
            <Tag severity="success" value="+12 %" />
          </template>
        </Card>
        <Card>
          <template #content>
            <div class="text-2xl font-bold text-gray-800">1.247</div>
            <div class="text-gray-500 text-sm mb-2">Bestellungen</div>
            <Tag severity="success" value="+8 %" />
          </template>
        </Card>
        <Card>
          <template #content>
            <div class="text-2xl font-bold text-gray-800">3.891</div>
            <div class="text-gray-500 text-sm mb-2">Nutzer</div>
            <Tag severity="danger" value="+2 %" />
          </template>
        </Card>
        <Card>
          <template #content>
            <div class="text-2xl font-bold text-gray-800">89</div>
            <div class="text-gray-500 text-sm mb-2">Retouren</div>
            <Tag severity="danger" value="+23 %" />
          </template>
        </Card>
      </div>

      <!-- Filter + Export -->
      <div class="flex gap-4 mb-6 items-start">
        <Card class="flex-1">
          <template #content>
            <div class="flex justify-between items-center mb-4">
              <span class="font-semibold text-gray-700">Filter</span>
              <i class="pi pi-chevron-down text-gray-500"></i>
            </div>
            <div class="grid grid-cols-3 gap-6">
              <div>
                <label class="block text-sm text-gray-600 mb-2">Zeitraum</label>
                <DatePicker v-model="dateRange" placeholder="Zeitraum wählen" showIcon inline class="w-full" />
              </div>
              <div>
                <label class="block text-sm text-gray-600 mb-2">Status</label>
                <Select v-model="selectedStatus" :options="statusOptions" optionLabel="label" filter placeholder="Status auswählen" class="w-full" />
              </div>
              <div>
                <label class="block text-sm text-gray-600 mb-2">Zustand</label>
                <div class="flex gap-4">
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="active" binary />
                    <label>Aktiv</label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="archive" binary />
                    <label>Archiv</label>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Card>

        <div class="flex flex-col gap-2 w-56">
          <Button label="Exportieren" icon="pi pi-file-export" severity="success" />
          <Card>
            <template #content>
              <div class="flex flex-col gap-2">
                <Button label="Als CSV exportieren" outlined severity="secondary" />
                <Button label="Als PDF exportieren" outlined severity="secondary" />
              </div>
            </template>
          </Card>
        </div>
      </div>

      <!-- Data Table -->
      <Card>
        <template #content>
          <DataTable :value="products">
            <Column field="name" header="Produkt"></Column>
            <Column field="status" header="Status">
              <template #body="slotProps">
                <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
              </template>
            </Column>
            <Column field="date" header="Bestelldatum"></Column>
            <Column field="sum" header="Summe"></Column>
            <Column field="qty" header="Stück"></Column>
            <Column header="Aktionen">
              <template #body="slotProps">
                <Button icon="pi pi-ellipsis-h" text rounded severity="secondary" @click="toggleMenu($event, slotProps.data)" />
              </template>
            </Column>
          </DataTable>
        </template>
      </Card>

      <Popover ref="menu">
        <div class="flex flex-col gap-1 w-48">
          <Button label="Bearbeiten" icon="pi pi-pencil" text class="justify-start" />
          <Button label="Status aktualisieren" icon="pi pi-list" text class="justify-start" />
          <Button label="Löschen" icon="pi pi-trash" text severity="danger" class="justify-start" />
        </div>
      </Popover>
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
import Checkbox from 'primevue/checkbox';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Popover from 'primevue/popover';

const dateRange = ref(null);
const selectedStatus = ref(null);
const statusOptions = ref([
  { label: 'Bezahlt' },
  { label: 'In Bearbeitung' },
  { label: 'Versendet' },
  { label: 'Angekommen' }
]);

const active = ref(true);
const archive = ref(false);

const products = ref([
  { name: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', sum: '12.400 €', qty: 312 },
  { name: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', sum: '8.920 €', qty: 485 },
  { name: 'Sensor X1', status: 'Versendet', date: '09.05.2026', sum: '6.100 €', qty: 150 },
  { name: 'System V5', status: 'Bezahlt', date: '12.06.2026', sum: '10.250 €', qty: 2 }
]);

const menu = ref();
const toggleMenu = (event) => {
  menu.value.toggle(event);
};

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
      return null;
  }
};
</script>