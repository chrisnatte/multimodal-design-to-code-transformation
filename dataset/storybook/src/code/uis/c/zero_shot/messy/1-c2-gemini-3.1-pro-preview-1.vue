<template>
  <div class="flex h-screen w-full bg-white font-sans text-gray-800">
    <!-- Sidebar -->
    <aside class="w-64 bg-[#f4f5f7] border-r border-gray-200 flex flex-col p-4 gap-2">
      <div class="text-sm text-gray-500 font-medium mb-2 px-2">Navigation</div>
      
      <Button class="w-full justify-start bg-[#dcfce7] text-[#166534] border-none hover:bg-[#bbf7d0] px-3 py-2 rounded-md" text>
        <template #icon>
          <i class="pi pi-th-large mr-2"></i>
        </template>
        <span class="font-medium">Dashboard</span>
      </Button>
      
      <Button class="w-full justify-start text-gray-600 border border-gray-300 bg-transparent hover:bg-gray-100 px-3 py-2 rounded-md" text>
        <template #icon>
          <i class="pi pi-users mr-2"></i>
        </template>
        <span class="font-medium">Kunden</span>
      </Button>
      
      <Button class="w-full justify-start text-gray-600 border border-gray-300 bg-transparent hover:bg-gray-100 px-3 py-2 rounded-md" text>
        <template #icon>
          <i class="pi pi-file mr-2"></i>
        </template>
        <span class="font-medium">Berichte</span>
      </Button>
      
      <Button class="w-full justify-start text-gray-600 border border-gray-300 bg-transparent hover:bg-gray-100 px-3 py-2 rounded-md" text>
        <template #icon>
          <i class="pi pi-cog mr-2"></i>
        </template>
        <span class="font-medium">Einstellungen</span>
      </Button>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 flex flex-col overflow-hidden">
      <div class="p-8 overflow-y-auto">
        <!-- Header -->
        <header class="mb-8">
          <h1 class="text-3xl font-bold text-[#1e293b] mb-1">Dashboard</h1>
          <p class="text-gray-500">Bekomme eine Übersicht über die Projekte.</p>
        </header>

        <!-- Stats Cards -->
        <div class="grid grid-cols-4 gap-6 mb-8">
          <div class="bg-[#f8fafc] rounded-xl p-5 border border-gray-100 flex flex-col gap-1">
            <div class="text-2xl font-semibold text-gray-800">42.8 Tsd.</div>
            <div class="text-sm text-gray-500 mb-2">Umsatz in €</div>
            <div class="self-start bg-[#dcfce7] text-[#166534] text-xs font-bold px-2 py-1 rounded">+12 %</div>
          </div>
          <div class="bg-[#f8fafc] rounded-xl p-5 border border-gray-100 flex flex-col gap-1">
            <div class="text-2xl font-semibold text-gray-800">1.247</div>
            <div class="text-sm text-gray-500 mb-2">Bestellungen</div>
            <div class="self-start bg-[#dcfce7] text-[#166534] text-xs font-bold px-2 py-1 rounded">+8 %</div>
          </div>
          <div class="bg-[#f8fafc] rounded-xl p-5 border border-gray-100 flex flex-col gap-1">
            <div class="text-2xl font-semibold text-gray-800">3.891</div>
            <div class="text-sm text-gray-500 mb-2">Nutzer</div>
            <div class="self-start bg-[#ffedd5] text-[#c2410c] text-xs font-bold px-2 py-1 rounded">+2 %</div>
          </div>
          <div class="bg-[#f8fafc] rounded-xl p-5 border border-gray-100 flex flex-col gap-1">
            <div class="text-2xl font-semibold text-gray-800">89</div>
            <div class="text-sm text-gray-500 mb-2">Retouren</div>
            <div class="self-start bg-[#fee2e2] text-[#b91c1c] text-xs font-bold px-2 py-1 rounded">+23 %</div>
          </div>
        </div>

        <!-- Filters and Actions -->
        <div class="flex gap-6 mb-8 items-start">
          <!-- Filter Panel -->
          <div class="flex-1 bg-[#f8fafc] rounded-xl border border-gray-100 p-5">
            <div class="flex justify-between items-center mb-4 cursor-pointer">
              <span class="font-semibold text-gray-800">Filter</span>
              <i class="pi pi-chevron-down text-gray-500 text-sm"></i>
            </div>
            
            <div class="flex gap-6">
              <!-- Zeitraum -->
              <div class="flex flex-col gap-2 flex-1">
                <label class="text-sm text-gray-600">Zeitraum</label>
                <DatePicker v-model="date" placeholder="Zeitraum wählen" class="w-full" inputClass="border-green-400" />
              </div>
              
              <!-- Status -->
              <div class="flex flex-col gap-2 flex-1">
                <label class="text-sm text-gray-600">Status</label>
                <Select v-model="selectedStatus" :options="statuses" optionLabel="name" placeholder="Status auswählen" class="w-full border-green-400" />
              </div>
              
              <!-- Zustand -->
              <div class="flex flex-col gap-2 flex-1">
                <label class="text-sm text-gray-600">Zustand</label>
                <div class="flex items-center gap-4 h-10">
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="isAktiv" inputId="aktiv" binary class="!bg-green-500 !border-green-500" />
                    <label for="aktiv" class="text-sm text-gray-700">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="isArchiv" inputId="archiv" binary />
                    <label for="archiv" class="text-sm text-gray-700">Archiv</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Export Button -->
          <div class="pt-1">
            <Button label="Exportieren" icon="pi pi-file-export" class="bg-[#10b981] hover:bg-[#059669] border-none text-white px-4 py-2 rounded-md shadow-sm" @click="toggleExportMenu" />
            <Menu ref="exportMenu" :model="exportMenuItems" :popup="true" />
          </div>
        </div>

        <!-- Data Table -->
        <div class="bg-white">
          <DataTable :value="products" class="p-datatable-sm border-t border-gray-200">
            <Column field="name" header="Produkt" class="py-4 text-sm text-gray-700"></Column>
            <Column field="status" header="Status" class="py-4">
              <template #body="slotProps">
                <span :class="['px-2 py-1 rounded text-xs font-semibold', getStatusClass(slotProps.data.status)]">
                  {{ slotProps.data.status }}
                </span>
              </template>
            </Column>
            <Column field="date" header="Bestelldatum" class="py-4 text-sm text-gray-700"></Column>
            <Column field="amount" header="Summe" class="py-4 text-sm text-gray-700"></Column>
            <Column field="quantity" header="Stück" class="py-4 text-sm text-gray-700"></Column>
            <Column header="Aktionen" class="py-4 w-24 text-center">
              <template #body="slotProps">
                <Button icon="pi pi-ellipsis-h" text rounded class="text-gray-400 hover:text-gray-600 hover:bg-gray-100 w-8 h-8 p-0" @click="toggleActionMenu($event, slotProps.data)" />
              </template>
            </Column>
          </DataTable>
          <Menu ref="actionMenu" :model="actionMenuItems" :popup="true" />
        </div>

      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';
import Menu from 'primevue/menu';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const date = ref(null);
const selectedStatus = ref(null);
const isAktiv = ref(true);
const isArchiv = ref(false);

const statuses = ref([
  { name: 'Bezahlt', code: 'BEZ' },
  { name: 'In Bearbeitung', code: 'INB' },
  { name: 'Versendet', code: 'VER' },
  { name: 'Angekommen', code: 'ANG' }
]);

const exportMenu = ref(null);
const exportMenuItems = ref([
  { label: 'Als CSV exportieren' },
  { label: 'Als PDF exportieren' }
]);

const toggleExportMenu = (event) => {
  exportMenu.value.toggle(event);
};

const actionMenu = ref(null);
const actionMenuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);

const toggleActionMenu = (event, data) => {
  actionMenu.value.toggle(event);
};

const products = ref([
  { name: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', amount: '12.400 €', quantity: 312 },
  { name: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', amount: '8.920 €', quantity: 485 },
  { name: 'Sensor X1', status: 'Versendet', date: '09.05.2026', amount: '6.100 €', quantity: 150 },
  { name: 'System V5', status: 'Bezahlt', date: '12.06.2026', amount: '10.250 €', quantity: 2 }
]);

const getStatusClass = (status) => {
  switch (status) {
    case 'Angekommen': return 'bg-[#dcfce7] text-[#166534]';
    case 'In Bearbeitung': return 'bg-[#ffedd5] text-[#c2410c]';
    case 'Versendet': return 'bg-[#f3e8ff] text-[#6b21a8]';
    case 'Bezahlt': return 'bg-[#e0f2fe] text-[#0369a1]';
    default: return 'bg-gray-100 text-gray-800';
  }
};
</script>