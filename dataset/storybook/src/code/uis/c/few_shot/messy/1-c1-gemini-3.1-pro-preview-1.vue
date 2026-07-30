<template>
  <div class="flex min-h-screen bg-white font-sans text-slate-800">
    <!-- Sidebar -->
    <div class="w-64 bg-slate-50 p-4 flex flex-col gap-4 border-r border-slate-200">
      <div class="text-sm text-slate-500 px-2 mt-2">Navigation</div>
      <div class="flex flex-col gap-2">
        <Button label="Dashboard" icon="pi pi-th-large" class="w-full justify-start !bg-green-100 !text-green-800 !border-green-200" />
        <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined class="w-full justify-start !bg-white !text-slate-700 !border-slate-300" />
        <Button label="Berichte" icon="pi pi-file" severity="secondary" outlined class="w-full justify-start !bg-white !text-slate-700 !border-slate-300" />
        <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" outlined class="w-full justify-start !bg-white !text-slate-700 !border-slate-300" />
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-8 flex flex-col gap-8">
      <!-- Header -->
      <div>
        <h1 class="text-3xl font-bold mb-2 text-slate-900">Dashboard</h1>
        <p class="text-slate-500">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-4 gap-4">
        <div class="bg-slate-50 p-5 rounded-xl flex flex-col gap-2 border border-slate-100">
          <div class="text-2xl font-semibold text-slate-800">42.8 Tsd.</div>
          <div class="text-sm text-slate-500">Umsatz in €</div>
          <Tag value="+12 %" class="w-fit mt-1 !bg-green-100 !text-green-700 !font-bold" />
        </div>
        <div class="bg-slate-50 p-5 rounded-xl flex flex-col gap-2 border border-slate-100">
          <div class="text-2xl font-semibold text-slate-800">1.247</div>
          <div class="text-sm text-slate-500">Bestellungen</div>
          <Tag value="+8 %" class="w-fit mt-1 !bg-green-100 !text-green-700 !font-bold" />
        </div>
        <div class="bg-slate-50 p-5 rounded-xl flex flex-col gap-2 border border-slate-100">
          <div class="text-2xl font-semibold text-slate-800">3.891</div>
          <div class="text-sm text-slate-500">Nutzer</div>
          <Tag value="+2 %" class="w-fit mt-1 !bg-orange-100 !text-orange-700 !font-bold" />
        </div>
        <div class="bg-slate-50 p-5 rounded-xl flex flex-col gap-2 border border-slate-100">
          <div class="text-2xl font-semibold text-slate-800">89</div>
          <div class="text-sm text-slate-500">Retouren</div>
          <Tag value="+23 %" class="w-fit mt-1 !bg-red-100 !text-red-700 !font-bold" />
        </div>
      </div>

      <!-- Filter & Export -->
      <div class="flex gap-4 items-start">
        <Panel header="Filter" toggleable class="flex-1 !bg-slate-50 !border-none rounded-xl" :pt="{ header: '!bg-slate-50 !border-none rounded-t-xl', content: '!bg-slate-50 !border-none rounded-b-xl !pt-0' }">
          <div class="flex gap-8 mt-2">
            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-700">Zeitraum</label>
              <DatePicker v-model="date" placeholder="Zeitraum wählen" class="w-64" />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-700">Status</label>
              <Select v-model="selectedStatus" :options="statusOptions" filter placeholder="Status auswählen" class="w-64" />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-700">Zustand</label>
              <div class="flex gap-4 items-center h-10">
                <div class="flex items-center gap-2">
                  <Checkbox v-model="isAktiv" inputId="aktiv" binary />
                  <label for="aktiv" class="text-sm text-slate-700">Aktiv</label>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox v-model="isArchiv" inputId="archiv" binary />
                  <label for="archiv" class="text-sm text-slate-700">Archiv</label>
                </div>
              </div>
            </div>
          </div>
        </Panel>
        
        <div class="flex flex-col gap-2">
          <Button label="Exportieren" icon="pi pi-file-export" class="!bg-emerald-500 !border-emerald-500 hover:!bg-emerald-600" @click="toggleExportMenu" aria-haspopup="true" aria-controls="export_menu" />
          <Menu ref="exportMenu" id="export_menu" :model="exportOptions" popup />
        </div>
      </div>

      <!-- Data Table -->
      <DataTable :value="products" class="w-full">
        <Column field="produkt" header="Produkt" class="w-1/5 font-medium text-slate-800"></Column>
        <Column field="status" header="Status" class="w-1/5">
          <template #body="{ data }">
            <Tag :value="data.status" :class="getStatusClass(data.status)" class="!font-semibold" />
          </template>
        </Column>
        <Column field="bestelldatum" header="Bestelldatum" class="w-1/5 text-slate-600"></Column>
        <Column field="summe" header="Summe" class="w-1/5 text-slate-600"></Column>
        <Column field="stueck" header="Stück" class="w-1/12 text-slate-600"></Column>
        <Column header="Aktionen" class="w-1/12 text-center">
          <template #body>
            <Button icon="pi pi-ellipsis-h" text severity="secondary" rounded @click="toggleActionMenu" aria-haspopup="true" aria-controls="action_menu" class="!text-emerald-500" />
          </template>
        </Column>
      </DataTable>
      <Menu ref="actionMenu" id="action_menu" :model="actionOptions" popup />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import Panel from 'primevue/panel';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Menu from 'primevue/menu';

const date = ref();
const selectedStatus = ref();
const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']);
const isAktiv = ref(true);
const isArchiv = ref(false);

const exportMenu = ref();
const exportOptions = ref([
  { label: 'Als CSV exportieren' },
  { label: 'Als PDF exportieren' }
]);

const toggleExportMenu = (event: Event) => {
  exportMenu.value.toggle(event);
};

const actionMenu = ref();
const actionOptions = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);

const toggleActionMenu = (event: Event) => {
  actionMenu.value.toggle(event);
};

const products = ref([
  { produkt: 'Widget Pro', status: 'Angekommen', bestelldatum: '15.04.2026', summe: '12.400 €', stueck: 312 },
  { produkt: 'Gadget Mini', status: 'In Bearbeitung', bestelldatum: '24.04.2026', summe: '8.920 €', stueck: 485 },
  { produkt: 'Sensor X1', status: 'Versendet', bestelldatum: '09.05.2026', summe: '6.100 €', stueck: 150 },
  { produkt: 'System V5', status: 'Bezahlt', bestelldatum: '12.06.2026', summe: '10.250 €', stueck: 2 }
]);

const getStatusClass = (status: string) => {
  switch (status) {
    case 'Angekommen': return '!bg-green-100 !text-green-700';
    case 'In Bearbeitung': return '!bg-orange-100 !text-orange-700';
    case 'Versendet': return '!bg-indigo-100 !text-indigo-700';
    case 'Bezahlt': return '!bg-blue-100 !text-blue-700';
    default: return '';
  }
};
</script>