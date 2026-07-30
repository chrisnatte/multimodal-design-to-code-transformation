<template>
  <div class="flex min-h-screen bg-white">
    <!-- Sidebar -->
    <aside class="w-64 bg-slate-50 p-6">
      <h3 class="text-base mb-6">Navigation</h3>
      <nav class="flex flex-col gap-2">
        <Button label="Dashboard" icon="pi pi-home" text class="!justify-start !bg-emerald-100 !border !border-emerald-300 !text-emerald-700" />
        <Button label="Kunden" icon="pi pi-users" text class="!justify-start !border !border-slate-300" />
        <Button label="Berichte" icon="pi pi-chart-bar" text class="!justify-start !border !border-slate-300" />
        <Button label="Einstellungen" icon="pi pi-cog" text class="!justify-start !border !border-slate-300" />
      </nav>
    </aside>

    <!-- Main content -->
    <main class="flex-1 p-8">
      <!-- Header -->
      <div class="mb-6">
        <h1 class="text-3xl font-bold mb-1">Dashboard</h1>
        <p class="text-base text-gray-600">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Stat Cards -->
      <div class="flex gap-4 mb-8 flex-wrap">
        <Card v-for="stat in stats" :key="stat.label" class="w-48 !bg-slate-50 !shadow-none">
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium">{{ stat.value }}</span>
              <span class="text-sm text-gray-600">{{ stat.label }}</span>
              <Tag :value="stat.change" :severity="stat.severity" rounded class="w-fit" />
            </div>
          </template>
        </Card>
      </div>

      <div class="flex gap-6">
        <!-- Filter Panel -->
        <Card class="w-[692px] !bg-slate-100">
          <template #title>
            <div class="flex items-center justify-between">
              <span class="text-sm font-semibold">Filter</span>
              <i class="pi pi-times cursor-pointer text-sm"></i>
            </div>
          </template>
          <template #content>
            <div class="flex gap-4 flex-wrap">
              <div class="flex flex-col gap-2 w-56">
                <label class="text-sm">Zeitraum</label>
                <DatePicker v-model="dateRange" placeholder="Zeitraum wählen" selectionMode="range" showIcon class="w-full" />
              </div>

              <div class="flex flex-col gap-2 w-56">
                <label class="text-sm">Status</label>
                <Select v-model="selectedStatus" :options="statusOptions" optionLabel="label" placeholder="Status auswählen" class="w-full" />
                <div class="mt-2">
                  <IconField class="w-full">
                    <InputIcon class="pi pi-search" />
                    <InputText v-model="searchTerm" placeholder="Suche..." class="w-full" />
                  </IconField>
                </div>
                <div class="flex flex-col gap-1 mt-2">
                  <div v-for="s in statusOptions" :key="s.label" class="flex items-center gap-2">
                    <Checkbox v-model="checkedStatuses" :value="s.label" :inputId="s.label" />
                    <label :for="s.label" class="text-sm">{{ s.label }}</label>
                  </div>
                </div>
              </div>

              <div class="flex flex-col gap-2 w-32">
                <label class="text-sm">Zustand</label>
                <div class="flex gap-2">
                  <ToggleButton v-model="zustandAktiv" onLabel="Aktiv" offLabel="Aktiv" class="text-sm" />
                  <ToggleButton v-model="zustandArchiv" onLabel="Archiv" offLabel="Archiv" class="text-sm" />
                </div>
              </div>
            </div>
          </template>
        </Card>

        <!-- Export panel -->
        <div class="flex flex-col gap-2 w-48">
          <Button label="Exportieren" icon="pi pi-download" iconPos="right" class="w-full" @click="toggleExportMenu" />
          <Menu ref="exportMenu" :model="exportItems" popup />
        </div>
      </div>

      <!-- Orders Table -->
      <div class="mt-8">
        <DataTable :value="orders" class="w-full">
          <Column field="produkt" header="Produkt" />
          <Column field="status" header="Status">
            <template #body="slotProps">
              <Tag :value="slotProps.data.status" :severity="slotProps.data.severity" rounded />
            </template>
          </Column>
          <Column field="bestelldatum" header="Bestelldatum" />
          <Column field="summe" header="Summe" />
          <Column field="stueck" header="Stück" />
          <Column header="Aktionen">
            <template #body="slotProps">
              <Button icon="pi pi-ellipsis-h" text rounded @click="toggleActionMenu($event, slotProps.data)" />
            </template>
          </Column>
        </DataTable>
        <Menu ref="actionMenu" :model="actionItems" popup />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Checkbox from 'primevue/checkbox';
import ToggleButton from 'primevue/togglebutton';
import Menu from 'primevue/menu';

const stats = ref([
  { label: 'Umsatz in €', value: '42.8 Tsd.', change: '+12 %', severity: 'success' },
  { label: 'Bestellungen', value: '1.247', change: '+8 %', severity: 'success' },
  { label: 'Nutzer', value: '3.891', change: '+2 %', severity: 'warn' },
  { label: 'Retouren', value: '89', change: '+23 %', severity: 'danger' }
]);

const dateRange = ref(null);

const statusOptions = ref([
  { label: 'Bezahlt' },
  { label: 'In Bearbeitung' },
  { label: 'Versendet' },
  { label: 'Angekommen' }
]);
const selectedStatus = ref(null);
const checkedStatuses = ref([]);
const searchTerm = ref('');

const zustandAktiv = ref(true);
const zustandArchiv = ref(false);

const orders = ref([
  { produkt: 'Widget Pro', status: 'Angekommen', severity: 'success', bestelldatum: '15.04.2026', summe: '12.400 €', stueck: '312' },
  { produkt: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warn', bestelldatum: '24.04.2026', summe: '8.920 €', stueck: '485' },
  { produkt: 'Sensor X1', status: 'Versendet', severity: 'secondary', bestelldatum: '09.05.2026', summe: '6.100 €', stueck: '150' },
  { produkt: 'System V5', status: 'Bezahlt', severity: 'info', bestelldatum: '12.06.2026', summe: '10.250 €', stueck: '2' }
]);

const exportMenu = ref();
const exportItems = ref([
  { label: 'Als CSV exportieren', icon: 'pi pi-file' },
  { label: 'Als PDF exportieren', icon: 'pi pi-file-pdf' }
]);
const toggleExportMenu = (event) => {
  exportMenu.value.toggle(event);
};

const actionMenu = ref();
const actionItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);
const toggleActionMenu = (event) => {
  actionMenu.value.toggle(event);
};
</script>