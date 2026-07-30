<template>
  <div class="min-h-screen bg-white flex font-sans text-slate-800">
    <!-- Sidebar Navigation -->
    <aside class="w-64 bg-slate-50 border-r border-slate-200 flex flex-col p-6 gap-8">
      <h2 class="text-base font-normal text-slate-600">Navigation</h2>
      <nav class="flex flex-col gap-2">
        <Button
          label="Dashboard"
          icon="pi pi-th-large"
          class="w-full justify-start bg-emerald-100 text-emerald-800 border-emerald-300 hover:bg-emerald-200"
          outlined
        />
        <Button
          label="Kunden"
          icon="pi pi-users"
          class="w-full justify-start text-slate-600 border-slate-300 hover:bg-slate-100"
          outlined
        />
        <Button
          label="Berichte"
          icon="pi pi-file"
          class="w-full justify-start text-slate-600 border-slate-300 hover:bg-slate-100"
          outlined
        />
        <Button
          label="Einstellungen"
          icon="pi pi-cog"
          class="w-full justify-start text-slate-600 border-slate-300 hover:bg-slate-100"
          outlined
        />
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-8 flex flex-col gap-8">
      <!-- Header -->
      <header class="flex flex-col gap-2">
        <h1 class="text-3xl font-bold text-slate-800">Dashboard</h1>
        <p class="text-base text-slate-500">Bekomme eine Übersicht über die Projekte.</p>
      </header>

      <!-- KPI Cards -->
      <section class="flex gap-6">
        <Card class="w-48 bg-slate-50 shadow-none border border-slate-100 rounded-xl">
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium text-slate-800">42.8 Tsd.</span>
              <span class="text-sm text-slate-500">Umsatz in €</span>
              <Badge value="+12 %" class="bg-emerald-100 text-emerald-800 font-bold self-start mt-2" />
            </div>
          </template>
        </Card>
        <Card class="w-48 bg-slate-50 shadow-none border border-slate-100 rounded-xl">
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium text-slate-800">1.247</span>
              <span class="text-sm text-slate-500">Bestellungen</span>
              <Badge value="+8 %" class="bg-emerald-100 text-emerald-800 font-bold self-start mt-2" />
            </div>
          </template>
        </Card>
        <Card class="w-48 bg-slate-50 shadow-none border border-slate-100 rounded-xl">
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium text-slate-800">3.891</span>
              <span class="text-sm text-slate-500">Nutzer</span>
              <Badge value="+2 %" class="bg-orange-100 text-orange-800 font-bold self-start mt-2" />
            </div>
          </template>
        </Card>
        <Card class="w-48 bg-slate-50 shadow-none border border-slate-100 rounded-xl">
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium text-slate-800">89</span>
              <span class="text-sm text-slate-500">Retouren</span>
              <Badge value="+23 %" class="bg-red-100 text-red-800 font-bold self-start mt-2" />
            </div>
          </template>
        </Card>
      </section>

      <!-- Filters & Actions -->
      <section class="flex gap-6 items-start">
        <!-- Filter Panel -->
        <div class="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-4 flex flex-col gap-4">
          <div class="flex justify-between items-center">
            <span class="font-semibold text-sm">Filter</span>
            <i class="pi pi-chevron-down text-slate-400 text-sm"></i>
          </div>
          <div class="flex gap-6">
            <!-- Date Picker (Mocked as InputText for visual) -->
            <div class="flex flex-col gap-2 w-56">
              <label class="text-sm text-slate-600">Zeitraum</label>
              <InputText placeholder="Zeitraum wählen" class="w-full border-emerald-500" />
              <!-- Calendar Popover Mockup -->
              <div class="mt-2 bg-white border border-slate-200 rounded-md p-3 shadow-sm">
                <div class="flex justify-between items-center mb-4">
                  <Button icon="pi pi-chevron-left" text rounded class="w-8 h-8 p-0 text-slate-600" />
                  <span class="font-medium text-sm">July 2024</span>
                  <Button icon="pi pi-chevron-right" text rounded class="w-8 h-8 p-0 text-slate-600" />
                </div>
                <div class="grid grid-cols-7 gap-1 text-center text-sm mb-2">
                  <span class="font-medium text-slate-800">Su</span>
                  <span class="font-medium text-slate-800">Mo</span>
                  <span class="font-medium text-slate-800">Tu</span>
                  <span class="font-medium text-slate-800">We</span>
                  <span class="font-medium text-slate-800">Th</span>
                  <span class="font-medium text-slate-800">Fr</span>
                  <span class="font-medium text-slate-800">Sa</span>
                </div>
                <div class="grid grid-cols-7 gap-1 text-center text-sm text-slate-600">
                  <span class="p-1 text-slate-400">27</span><span class="p-1 text-slate-400">28</span><span class="p-1">1</span><span class="p-1">2</span><span class="p-1">3</span><span class="p-1">4</span><span class="p-1">5</span>
                  <span class="p-1">6</span><span class="p-1">7</span><span class="p-1">8</span><span class="p-1">9</span><span class="p-1">10</span><span class="p-1">11</span><span class="p-1">12</span>
                  <span class="p-1">13</span><span class="p-1">14</span><span class="p-1">15</span><span class="p-1">16</span><span class="p-1">17</span><span class="p-1">18</span><span class="p-1">19</span>
                  <span class="p-1">20</span><span class="p-1">21</span><span class="p-1">22</span><span class="p-1">23</span><span class="p-1">24</span><span class="p-1">25</span><span class="p-1">26</span>
                  <span class="p-1">27</span><span class="p-1">28</span><span class="p-1">29</span><span class="p-1">30</span><span class="p-1">31</span><span class="p-1 text-slate-400">1</span><span class="p-1 text-slate-400">2</span>
                </div>
              </div>
            </div>

            <!-- Status Dropdown -->
            <div class="flex flex-col gap-2 w-56">
              <label class="text-sm text-slate-600">Status</label>
              <Dropdown v-model="selectedStatus" :options="statusOptions" placeholder="Status auswählen" class="w-full border-emerald-500" />
              <!-- Dropdown Menu Mockup -->
              <div class="mt-2 bg-white border border-slate-200 rounded-md p-2 shadow-sm flex flex-col gap-1">
                <span class="p-input-icon-right w-full mb-1">
                  <i class="pi pi-search" />
                  <InputText placeholder="Suche..." class="w-full p-2 text-sm" />
                </span>
                <div class="p-2 bg-slate-100 rounded text-sm cursor-pointer">Bezahlt</div>
                <div class="p-2 hover:bg-slate-50 rounded text-sm cursor-pointer">In Bearbeitung</div>
                <div class="p-2 hover:bg-slate-50 rounded text-sm cursor-pointer">Versendet</div>
                <div class="p-2 hover:bg-slate-50 rounded text-sm cursor-pointer">Angekommen</div>
              </div>
            </div>

            <!-- Checkboxes -->
            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-600">Zustand</label>
              <div class="flex gap-4 mt-2">
                <div class="flex items-center gap-2">
                  <Checkbox v-model="isAktiv" :binary="true" inputId="aktiv" class="!bg-emerald-500 !border-emerald-500" />
                  <label for="aktiv" class="text-sm">Aktiv</label>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox v-model="isArchiv" :binary="true" inputId="archiv" />
                  <label for="archiv" class="text-sm">Archiv</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Export Button & Menu -->
        <div class="flex flex-col gap-2 relative">
          <Button label="Exportieren" icon="pi pi-file-export" class="bg-emerald-500 border-emerald-500 hover:bg-emerald-600 text-white" />
          <!-- Export Menu Mockup -->
          <div class="absolute top-12 right-0 bg-white border border-slate-200 rounded-md p-2 shadow-sm flex flex-col gap-2 w-48 z-10">
            <Button label="Als CSV exportieren" class="w-full justify-start text-slate-700 border-slate-200 hover:bg-slate-50" outlined />
            <Button label="Als PDF exportieren" class="w-full justify-start text-slate-700 border-slate-200 hover:bg-slate-50" outlined />
          </div>
        </div>
      </section>

      <!-- Data Table -->
      <section class="mt-4">
        <DataTable :value="products" class="p-datatable-sm border-t border-slate-200">
          <Column field="name" header="Produkt" class="py-4 border-b border-slate-200 text-sm"></Column>
          <Column field="status" header="Status" class="py-4 border-b border-slate-200">
            <template #body="slotProps">
              <Badge :value="slotProps.data.status" :class="getStatusClass(slotProps.data.status)" />
            </template>
          </Column>
          <Column field="date" header="Bestelldatum" class="py-4 border-b border-slate-200 text-sm"></Column>
          <Column field="total" header="Summe" class="py-4 border-b border-slate-200 text-sm"></Column>
          <Column field="quantity" header="Stück" class="py-4 border-b border-slate-200 text-sm"></Column>
          <Column header="Aktionen" class="py-4 border-b border-slate-200">
            <template #body>
              <Button icon="pi pi-ellipsis-h" text rounded class="text-slate-400 hover:bg-slate-100" />
            </template>
          </Column>
        </DataTable>
        
        <!-- Action Menu Mockup (Positioned relative to last row for visual accuracy) -->
        <div class="absolute right-8 bottom-8 bg-white border border-slate-200 rounded-md p-2 shadow-sm flex flex-col gap-2 w-48 z-10">
          <Button label="Bearbeiten" icon="pi pi-pencil" class="w-full justify-start text-slate-700 border-slate-200 hover:bg-slate-50 text-sm" outlined />
          <Button label="Status aktualisieren" icon="pi pi-refresh" class="w-full justify-start text-slate-700 border-slate-200 hover:bg-slate-50 text-sm" outlined />
          <Button label="Löschen" icon="pi pi-trash" class="w-full justify-start text-slate-700 border-slate-200 hover:bg-slate-50 text-sm" outlined />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Badge from 'primevue/badge';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Checkbox from 'primevue/checkbox';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const selectedStatus = ref(null);
const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']);

const isAktiv = ref(true);
const isArchiv = ref(false);

const products = ref([
  { name: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', total: '12.400 €', quantity: 312 },
  { name: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', total: '8.920 €', quantity: 485 },
  { name: 'Sensor X1', status: 'Versendet', date: '09.05.2026', total: '6.100 €', quantity: 150 },
  { name: 'System V5', status: 'Bezahlt', date: '12.06.2026', total: '10.250 €', quantity: 2 }
]);

const getStatusClass = (status) => {
  switch (status) {
    case 'Angekommen': return 'bg-emerald-100 text-emerald-800 font-bold';
    case 'In Bearbeitung': return 'bg-orange-100 text-orange-800 font-bold';
    case 'Versendet': return 'bg-slate-100 text-slate-800 font-bold';
    case 'Bezahlt': return 'bg-blue-100 text-blue-800 font-bold';
    default: return 'bg-slate-100 text-slate-800 font-bold';
  }
};
</script>