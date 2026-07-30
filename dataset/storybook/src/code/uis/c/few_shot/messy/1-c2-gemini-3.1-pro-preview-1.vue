<template>
  <div class="flex min-h-screen w-full bg-white font-sans text-slate-800">
    <!-- Sidebar -->
    <aside class="w-64 flex-shrink-0 bg-slate-50 p-6 flex flex-col gap-6 border-r border-slate-200">
      <div class="text-sm font-medium text-slate-500 px-3">Navigation</div>
      <nav class="flex flex-col gap-2">
        <Button label="Dashboard" icon="pi pi-objects-column" class="!justify-start !bg-green-100 !text-green-700 !border-green-200" />
        <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined class="!justify-start !text-slate-700 !border-slate-300 !bg-transparent" />
        <Button label="Berichte" icon="pi pi-file" severity="secondary" outlined class="!justify-start !text-slate-700 !border-slate-300 !bg-transparent" />
        <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" outlined class="!justify-start !text-slate-700 !border-slate-300 !bg-transparent" />
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-8 flex flex-col gap-8">
      <!-- Header -->
      <div>
        <h1 class="text-3xl font-bold text-slate-800 mb-2">Dashboard</h1>
        <p class="text-slate-500">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-4 gap-6">
        <div class="bg-slate-50 rounded-xl p-5 flex flex-col gap-2 border border-slate-100">
          <div class="text-2xl font-semibold">42.8 Tsd.</div>
          <div class="text-sm text-slate-500">Umsatz in €</div>
          <Tag value="+12 %" class="!bg-green-100 !text-green-700 w-fit mt-1 font-bold" />
        </div>
        <div class="bg-slate-50 rounded-xl p-5 flex flex-col gap-2 border border-slate-100">
          <div class="text-2xl font-semibold">1.247</div>
          <div class="text-sm text-slate-500">Bestellungen</div>
          <Tag value="+8 %" class="!bg-green-100 !text-green-700 w-fit mt-1 font-bold" />
        </div>
        <div class="bg-slate-50 rounded-xl p-5 flex flex-col gap-2 border border-slate-100">
          <div class="text-2xl font-semibold">3.891</div>
          <div class="text-sm text-slate-500">Nutzer</div>
          <Tag value="+2 %" class="!bg-orange-100 !text-orange-700 w-fit mt-1 font-bold" />
        </div>
        <div class="bg-slate-50 rounded-xl p-5 flex flex-col gap-2 border border-slate-100">
          <div class="text-2xl font-semibold">89</div>
          <div class="text-sm text-slate-500">Retouren</div>
          <Tag value="+23 %" class="!bg-red-100 !text-red-700 w-fit mt-1 font-bold" />
        </div>
      </div>

      <!-- Filter & Export -->
      <div class="flex items-start justify-between gap-6">
        <!-- Filter Panel -->
        <Panel header="Filter" toggleable class="flex-1 !border-none rounded-xl overflow-hidden" :pt="{ header: '!bg-slate-50 !border-none !py-4 !px-6', content: '!bg-slate-50 !border-none !pt-0 !pb-6 !px-6' }">
          <div class="flex gap-6 mt-2">
            <div class="flex flex-col gap-2 flex-1">
              <label class="text-sm text-slate-600">Zeitraum</label>
              <DatePicker v-model="date" placeholder="Zeitraum wählen" class="w-full" />
            </div>
            <div class="flex flex-col gap-2 flex-1">
              <label class="text-sm text-slate-600">Status</label>
              <Select v-model="selectedStatus" :options="statusOptions" placeholder="Status auswählen" class="w-full" />
            </div>
            <div class="flex flex-col gap-3 flex-1">
              <label class="text-sm text-slate-600">Zustand</label>
              <div class="flex items-center gap-4 mt-1">
                <div class="flex items-center gap-2">
                  <Checkbox v-model="zustandAktiv" inputId="aktiv" binary />
                  <label for="aktiv" class="text-sm text-slate-700">Aktiv</label>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox v-model="zustandArchiv" inputId="archiv" binary />
                  <label for="archiv" class="text-sm text-slate-700">Archiv</label>
                </div>
              </div>
            </div>
          </div>
        </Panel>

        <!-- Export Button -->
        <div class="pt-2">
          <Button label="Exportieren" icon="pi pi-file-export" class="!bg-emerald-500 !border-emerald-500 hover:!bg-emerald-600" @click="toggleExportMenu" aria-haspopup="true" aria-controls="export_menu" />
          <Menu ref="exportMenu" id="export_menu" :model="exportOptions" popup />
        </div>
      </div>

      <!-- Data Table -->
      <DataTable :value="products" class="mt-2">
        <Column field="produkt" header="Produkt" headerClass="text-slate-500 font-medium" bodyClass="text-slate-700 py-4"></Column>
        <Column field="status" header="Status" headerClass="text-slate-500 font-medium" bodyClass="py-4">
          <template #body="{ data }">
            <Tag :value="data.status" :class="getStatusClass(data.status)" class="font-semibold" />
          </template>
        </Column>
        <Column field="bestelldatum" header="Bestelldatum" headerClass="text-slate-500 font-medium" bodyClass="text-slate-700 py-4"></Column>
        <Column field="summe" header="Summe" headerClass="text-slate-500 font-medium" bodyClass="text-slate-700 py-4"></Column>
        <Column field="stueck" header="Stück" headerClass="text-slate-500 font-medium" bodyClass="text-slate-700 py-4"></Column>
        <Column header="Aktionen" headerClass="w-24 text-slate-500 font-medium" bodyClass="text-center py-4">
          <template #body="{ data }">
            <Button icon="pi pi-ellipsis-h" text severity="secondary" rounded @click="(event) => toggleActionMenu(event, data)" aria-haspopup="true" aria-controls="action_menu" />
          </template>
        </Column>
      </DataTable>
      <Menu ref="actionMenu" id="action_menu" :model="actionOptions" popup />

    </main>
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

const date = ref(null);
const selectedStatus = ref(null);
const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']);

const zustandAktiv = ref(true);
const zustandArchiv = ref(false);

const exportMenu = ref(null);
const exportOptions = ref([
    { label: 'Als CSV exportieren' },
    { label: 'Als PDF exportieren' }
]);

const toggleExportMenu = (event) => {
    exportMenu.value.toggle(event);
};

const products = ref([
    { produkt: 'Widget Pro', status: 'Angekommen', bestelldatum: '15.04.2026', summe: '12.400 €', stueck: 312 },
    { produkt: 'Gadget Mini', status: 'In Bearbeitung', bestelldatum: '24.04.2026', summe: '8.920 €', stueck: 485 },
    { produkt: 'Sensor X1', status: 'Versendet', bestelldatum: '09.05.2026', summe: '6.100 €', stueck: 150 },
    { produkt: 'System V5', status: 'Bezahlt', bestelldatum: '12.06.2026', summe: '10.250 €', stueck: 2 }
]);

const getStatusClass = (status) => {
    switch (status) {
        case 'Angekommen': return '!bg-green-100 !text-green-700';
        case 'In Bearbeitung': return '!bg-orange-100 !text-orange-700';
        case 'Versendet': return '!bg-slate-100 !text-slate-700';
        case 'Bezahlt': return '!bg-blue-100 !text-blue-700';
        default: return '';
    }
};

const actionMenu = ref(null);
const selectedProduct = ref(null);
const actionOptions = ref([
    { label: 'Bearbeiten', icon: 'pi pi-pencil' },
    { label: 'Status aktualisieren', icon: 'pi pi-list' },
    { label: 'Löschen', icon: 'pi pi-trash' }
]);

const toggleActionMenu = (event, data) => {
    selectedProduct.value = data;
    actionMenu.value.toggle(event);
};
</script>