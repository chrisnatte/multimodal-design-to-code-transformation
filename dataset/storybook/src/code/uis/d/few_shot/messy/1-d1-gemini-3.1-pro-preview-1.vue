<template>
  <div class="flex min-h-screen bg-white font-sans text-slate-800">
    <!-- Sidebar -->
    <div class="flex w-64 flex-col gap-2 bg-slate-50 p-6">
      <div class="mb-4 text-base text-slate-600">Navigation</div>
      <div class="flex cursor-pointer items-center gap-3 rounded-md border border-emerald-200 bg-emerald-100 p-2 font-medium text-emerald-800">
        <i class="pi pi-th-large"></i> Dashboard
      </div>
      <div class="flex cursor-pointer items-center gap-3 rounded-md border border-slate-300 p-2 font-medium text-slate-600 hover:bg-slate-100">
        <i class="pi pi-users"></i> Kunden
      </div>
      <div class="flex cursor-pointer items-center gap-3 rounded-md border border-slate-300 p-2 font-medium text-slate-600 hover:bg-slate-100">
        <i class="pi pi-file"></i> Berichte
      </div>
      <div class="flex cursor-pointer items-center gap-3 rounded-md border border-slate-300 p-2 font-medium text-slate-600 hover:bg-slate-100">
        <i class="pi pi-cog"></i> Einstellungen
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex flex-1 flex-col gap-8 p-10">
      <!-- Header -->
      <div>
        <h1 class="mb-2 text-3xl font-bold text-slate-800">Dashboard</h1>
        <p class="text-slate-500">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Stats Cards -->
      <div class="flex gap-6">
        <div class="flex w-48 flex-col gap-4 rounded-xl bg-slate-50 p-6">
          <div>
            <div class="text-2xl font-medium text-slate-800">42.8 Tsd.</div>
            <div class="text-sm text-slate-500">Umsatz in €</div>
          </div>
          <div class="w-fit rounded bg-emerald-100 px-2 py-1 text-xs font-bold text-emerald-800">+12 %</div>
        </div>
        <div class="flex w-48 flex-col gap-4 rounded-xl bg-slate-50 p-6">
          <div>
            <div class="text-2xl font-medium text-slate-800">1.247</div>
            <div class="text-sm text-slate-500">Bestellungen</div>
          </div>
          <div class="w-fit rounded bg-emerald-100 px-2 py-1 text-xs font-bold text-emerald-800">+8 %</div>
        </div>
        <div class="flex w-48 flex-col gap-4 rounded-xl bg-slate-50 p-6">
          <div>
            <div class="text-2xl font-medium text-slate-800">3.891</div>
            <div class="text-sm text-slate-500">Nutzer</div>
          </div>
          <div class="w-fit rounded bg-orange-100 px-2 py-1 text-xs font-bold text-orange-800">+2 %</div>
        </div>
        <div class="flex w-48 flex-col gap-4 rounded-xl bg-slate-50 p-6">
          <div>
            <div class="text-2xl font-medium text-slate-800">89</div>
            <div class="text-sm text-slate-500">Retouren</div>
          </div>
          <div class="w-fit rounded bg-red-100 px-2 py-1 text-xs font-bold text-red-800">+23 %</div>
        </div>
      </div>

      <!-- Filter & Export -->
      <div class="flex items-start justify-between">
        <div class="flex w-[692px] flex-col gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <div class="flex items-center gap-2 font-semibold text-slate-800">
            <i class="pi pi-filter"></i> Filter
          </div>
          <div class="flex gap-6">
            <div class="flex flex-1 flex-col gap-2">
              <label class="text-sm text-slate-700">Zeitraum</label>
              <DatePicker v-model="selectedDate" placeholder="Zeitraum wählen" class="w-full" />
            </div>
            <div class="flex flex-1 flex-col gap-2">
              <label class="text-sm text-slate-700">Status</label>
              <Select v-model="selectedStatus" :options="statuses" placeholder="Status auswählen" class="w-full" />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-700">Zustand</label>
              <div class="flex h-10 items-center gap-4">
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
        </div>

        <div>
          <Button label="Exportieren" icon="pi pi-file-export" iconPos="right" severity="success" @click="toggleExportMenu" />
          <Menu ref="exportMenu" :model="exportItems" popup />
        </div>
      </div>

      <!-- Data Table -->
      <DataTable :value="products" class="w-full">
        <Column field="product" header="Produkt"></Column>
        <Column field="status" header="Status">
          <template #body="slotProps">
            <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
          </template>
        </Column>
        <Column field="date" header="Bestelldatum"></Column>
        <Column field="total" header="Summe"></Column>
        <Column field="quantity" header="Stück"></Column>
        <Column header="Aktionen">
          <template #body>
            <Button icon="pi pi-ellipsis-h" text rounded severity="secondary" @click="toggleActionMenu" />
          </template>
        </Column>
      </DataTable>
      <Menu ref="actionMenu" :model="actionItems" popup />
    </div>
  </div>
</template>

<script setup>
import { ref, useTemplateRef } from 'vue';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import Menu from 'primevue/menu';

const selectedDate = ref(null);
const selectedStatus = ref(null);
const isAktiv = ref(true);
const isArchiv = ref(false);

const statuses = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']);

const products = ref([
  { product: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', total: '12.400 €', quantity: 312 },
  { product: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', total: '8.920 €', quantity: 485 },
  { product: 'Sensor X1', status: 'Versendet', date: '09.05.2026', total: '6.100 €', quantity: 150 },
  { product: 'System V5', status: 'Bezahlt', date: '12.06.2026', total: '10.250 €', quantity: 2 },
]);

const exportMenu = useTemplateRef('exportMenu');
const exportItems = ref([
  { label: 'Als CSV exportieren' },
  { label: 'Als PDF exportieren' }
]);

const actionMenu = useTemplateRef('actionMenu');
const actionItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);

const toggleExportMenu = (event) => {
  exportMenu.value.toggle(event);
};

const toggleActionMenu = (event) => {
  actionMenu.value.toggle(event);
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
      return 'info';
  }
};
</script>