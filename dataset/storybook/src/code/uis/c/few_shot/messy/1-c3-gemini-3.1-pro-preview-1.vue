<template>
  <div class="flex min-h-screen bg-white font-sans text-surface-900">
    <!-- Sidebar -->
    <div class="w-64 bg-slate-50 p-4 flex flex-col gap-3 border-r border-surface-200">
      <div class="text-sm text-surface-500 mb-1 px-2">Navigation</div>
      <Button label="Dashboard" icon="pi pi-th-large" class="w-full justify-start !bg-green-100 !text-green-700 !border-green-200" />
      <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined class="w-full justify-start !bg-transparent !border-surface-300 !text-surface-700" />
      <Button label="Berichte" icon="pi pi-file" severity="secondary" outlined class="w-full justify-start !bg-transparent !border-surface-300 !text-surface-700" />
      <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" outlined class="w-full justify-start !bg-transparent !border-surface-300 !text-surface-700" />
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-8 flex flex-col gap-8">
      <!-- Header -->
      <div>
        <h1 class="text-3xl font-bold mb-2">Dashboard</h1>
        <p class="text-surface-500">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-4 gap-6">
        <div class="bg-slate-50 p-5 rounded-xl flex flex-col gap-1">
          <div class="text-2xl font-semibold">42.8 Tsd.</div>
          <div class="text-sm text-surface-500 mb-3">Umsatz in €</div>
          <Tag value="+12 %" class="w-fit !bg-green-100 !text-green-700" />
        </div>
        <div class="bg-slate-50 p-5 rounded-xl flex flex-col gap-1">
          <div class="text-2xl font-semibold">1.247</div>
          <div class="text-sm text-surface-500 mb-3">Bestellungen</div>
          <Tag value="+8 %" class="w-fit !bg-green-100 !text-green-700" />
        </div>
        <div class="bg-slate-50 p-5 rounded-xl flex flex-col gap-1">
          <div class="text-2xl font-semibold">3.891</div>
          <div class="text-sm text-surface-500 mb-3">Nutzer</div>
          <Tag value="+2 %" class="w-fit !bg-orange-100 !text-orange-700" />
        </div>
        <div class="bg-slate-50 p-5 rounded-xl flex flex-col gap-1">
          <div class="text-2xl font-semibold">89</div>
          <div class="text-sm text-surface-500 mb-3">Retouren</div>
          <Tag value="+23 %" class="w-fit !bg-red-100 !text-red-700" />
        </div>
      </div>

      <!-- Filter & Export -->
      <div class="flex gap-4 items-start">
        <Panel header="Filter" toggleable :pt="{ root: 'flex-1 bg-slate-50 rounded-xl border-none', header: 'bg-transparent border-none p-5 pb-2', content: 'bg-transparent border-none p-5 pt-0', toggler: 'text-surface-500 hover:bg-surface-200' }">
          <div class="flex gap-8">
            <div class="flex flex-col gap-2">
              <label class="text-sm text-surface-600">Zeitraum</label>
              <DatePicker v-model="date" placeholder="Zeitraum wählen" class="w-64" />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-surface-600">Status</label>
              <Select v-model="selectedStatus" :options="statuses" filter placeholder="Status auswählen" class="w-64" />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-surface-600">Zustand</label>
              <div class="flex gap-4 mt-2">
                <div class="flex items-center gap-2">
                  <Checkbox v-model="zustandAktiv" inputId="aktiv" binary />
                  <label for="aktiv" class="text-sm">Aktiv</label>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox v-model="zustandArchiv" inputId="archiv" binary />
                  <label for="archiv" class="text-sm">Archiv</label>
                </div>
              </div>
            </div>
          </div>
        </Panel>
        
        <div>
          <Button label="Exportieren" icon="pi pi-file-export" severity="success" @click="toggleExportMenu" />
          <Menu ref="exportMenu" :model="exportItems" popup />
        </div>
      </div>

      <!-- Table -->
      <DataTable :value="products" class="w-full">
        <Column field="produkt" header="Produkt"></Column>
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :class="getStatusClass(data.status)" />
          </template>
        </Column>
        <Column field="datum" header="Bestelldatum"></Column>
        <Column field="summe" header="Summe"></Column>
        <Column field="stueck" header="Stück"></Column>
        <Column header="Aktionen">
          <template #body="{ data }">
            <Button icon="pi pi-ellipsis-h" text severity="secondary" rounded @click="toggleActionMenu($event, data)" />
          </template>
        </Column>
      </DataTable>
      <Menu ref="actionMenu" :model="actionItems" popup />

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import Panel from 'primevue/panel';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';
import Menu from 'primevue/menu';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const date = ref();
const selectedStatus = ref();
const statuses = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']);
const zustandAktiv = ref(true);
const zustandArchiv = ref(false);

const exportMenu = ref();
const exportItems = ref([
  { label: 'Als CSV exportieren' },
  { label: 'Als PDF exportieren' }
]);
const toggleExportMenu = (event) => {
  exportMenu.value.toggle(event);
};

const actionMenu = ref();
const actionItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);
const toggleActionMenu = (event, data) => {
  actionMenu.value.toggle(event);
};

const products = ref([
  { produkt: 'Widget Pro', status: 'Angekommen', datum: '15.04.2026', summe: '12.400 €', stueck: 312 },
  { produkt: 'Gadget Mini', status: 'In Bearbeitung', datum: '24.04.2026', summe: '8.920 €', stueck: 485 },
  { produkt: 'Sensor X1', status: 'Versendet', datum: '09.05.2026', summe: '6.100 €', stueck: 150 },
  { produkt: 'System V5', status: 'Bezahlt', datum: '12.06.2026', summe: '10.250 €', stueck: 2 }
]);

const getStatusClass = (status) => {
  switch(status) {
    case 'Angekommen': return '!bg-green-100 !text-green-700';
    case 'In Bearbeitung': return '!bg-orange-100 !text-orange-700';
    case 'Versendet': return '!bg-indigo-100 !text-indigo-700';
    case 'Bezahlt': return '!bg-blue-100 !text-blue-700';
    default: return '';
  }
};
</script>