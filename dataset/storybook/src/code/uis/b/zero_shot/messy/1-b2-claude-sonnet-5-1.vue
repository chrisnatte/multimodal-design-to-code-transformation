<template>
  <div class="flex min-h-screen bg-white">
    <!-- Sidebar -->
    <aside class="w-64 bg-slate-100 p-6">
      <span class="text-base text-gray-700 block mb-4">Navigation</span>
      <nav class="flex flex-col gap-2">
        <Button label="Dashboard" icon="pi pi-home" class="w-full justify-start" severity="success" variant="outlined" />
        <Button label="Kunden" icon="pi pi-users" class="w-full justify-start" severity="secondary" variant="text" />
        <Button label="Berichte" icon="pi pi-chart-bar" class="w-full justify-start" severity="secondary" variant="text" />
        <Button label="Einstellungen" icon="pi pi-cog" class="w-full justify-start" severity="secondary" variant="text" />
      </nav>
    </aside>

    <!-- Main content -->
    <main class="flex-1 p-8">
      <!-- Header -->
      <div class="mb-6">
        <h1 class="text-3xl font-bold">Dashboard</h1>
        <p class="text-base text-gray-500">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Stat cards -->
      <div class="flex gap-4 mb-8 flex-wrap">
        <Card class="w-48" v-for="(stat, i) in stats" :key="i" style="background: #f1f5f9">
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium">{{ stat.value }}</span>
              <span class="text-sm text-gray-600">{{ stat.label }}</span>
              <Tag :value="stat.change" :severity="stat.severity" rounded />
            </div>
          </template>
        </Card>
      </div>

      <div class="flex gap-8">
        <!-- Filter Card -->
        <Card class="w-full max-w-2xl" style="background:#f1f5f9">
          <template #title>
            <div class="flex items-center justify-between">
              <span class="text-sm font-semibold">Filter</span>
              <i class="pi pi-filter text-sm"></i>
            </div>
          </template>
          <template #content>
            <div class="flex gap-6 flex-wrap">
              <div class="flex flex-col gap-2 w-52">
                <label class="text-sm">Zeitraum</label>
                <Button label="Zeitraum wählen" icon="pi pi-calendar" iconPos="left" severity="success" variant="outlined" class="w-full justify-start" />
              </div>
              <div class="flex flex-col gap-2 w-52">
                <label class="text-sm">Status</label>
                <Select v-model="selectedStatus" :options="statusOptions" placeholder="Status auswählen" class="w-full" />
              </div>
              <div class="flex flex-col gap-2 w-36">
                <label class="text-sm">Zustand</label>
                <SelectButton v-model="selectedZustand" :options="zustandOptions" />
              </div>
            </div>
          </template>
        </Card>

        <!-- Export Buttons -->
        <div class="flex flex-col gap-3">
          <Button label="Exportieren" icon="pi pi-download" severity="success" class="w-48" />
          <Card class="w-48">
            <template #content>
              <div class="flex flex-col gap-2">
                <Button label="Als CSV exportieren" text class="w-full justify-start" />
                <Button label="Als PDF exportieren" text class="w-full justify-start" />
              </div>
            </template>
          </Card>
        </div>
      </div>

      <!-- Data Table -->
      <div class="mt-8">
        <DataTable :value="products" class="w-full">
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
            <template #body>
              <Button icon="pi pi-ellipsis-v" text rounded severity="secondary" @click="toggleMenu" />
              <Menu ref="menu" :model="menuItems" :popup="true" />
            </template>
          </Column>
        </DataTable>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Select from 'primevue/select';
import SelectButton from 'primevue/selectbutton';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Menu from 'primevue/menu';

const stats = ref([
  { value: '42.8 Tsd.', label: 'Umsatz in €', change: '+12 %', severity: 'success' },
  { value: '1.247', label: 'Bestellungen', change: '+8 %', severity: 'success' },
  { value: '3.891', label: 'Nutzer', change: '+2 %', severity: 'warn' },
  { value: '89', label: 'Retouren', change: '+23 %', severity: 'danger' }
]);

const selectedStatus = ref(null);
const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']);

const selectedZustand = ref('Aktiv');
const zustandOptions = ref(['Aktiv', 'Archiv']);

const products = ref([
  { produkt: 'Widget Pro', status: 'Angekommen', severity: 'success', bestelldatum: '15.04.2026', summe: '12.400 €', stueck: '312' },
  { produkt: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warn', bestelldatum: '24.04.2026', summe: '8.920 €', stueck: '485' },
  { produkt: 'Sensor X1', status: 'Versendet', severity: 'secondary', bestelldatum: '09.05.2026', summe: '6.100 €', stueck: '150' },
  { produkt: 'System V5', status: 'Bezahlt', severity: 'info', bestelldatum: '12.06.2026', summe: '10.250 €', stueck: '2' }
]);

const menu = ref();
const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);

const toggleMenu = (event) => {
  menu.value.toggle(event);
};
</script>