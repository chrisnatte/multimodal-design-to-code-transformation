<template>
  <div class="flex min-h-screen bg-surface-50 dark:bg-surface-900 font-sans text-surface-900 dark:text-surface-0">
    <!-- Sidebar Navigation -->
    <aside class="w-64 bg-surface-100 dark:bg-surface-800 p-4 flex flex-col gap-4 border-r border-surface-200 dark:border-surface-700">
      <div class="text-sm font-semibold text-surface-500 dark:text-surface-400 mb-2">Navigation</div>
      <Button label="Dashboard" icon="pi pi-th-large" class="w-full justify-start bg-green-100 text-green-700 border-none hover:bg-green-200" />
      <Button label="Kunden" icon="pi pi-users" variant="outlined" class="w-full justify-start text-surface-700 dark:text-surface-200 border-surface-300 dark:border-surface-600" />
      <Button label="Berichte" icon="pi pi-file" variant="outlined" class="w-full justify-start text-surface-700 dark:text-surface-200 border-surface-300 dark:border-surface-600" />
      <Button label="Einstellungen" icon="pi pi-cog" variant="outlined" class="w-full justify-start text-surface-700 dark:text-surface-200 border-surface-300 dark:border-surface-600" />
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-8 flex flex-col gap-8">
      <!-- Header -->
      <div>
        <h1 class="text-3xl font-bold m-0 mb-2">Dashboard</h1>
        <p class="text-surface-500 dark:text-surface-400 m-0">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- KPI Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card class="shadow-sm border border-surface-200 dark:border-surface-700">
          <template #content>
            <div class="text-2xl font-bold mb-1">42.8 Tsd.</div>
            <div class="text-sm text-surface-500 dark:text-surface-400 mb-3">Umsatz in €</div>
            <Tag value="+12 %" severity="success" class="bg-green-100 text-green-700" />
          </template>
        </Card>
        <Card class="shadow-sm border border-surface-200 dark:border-surface-700">
          <template #content>
            <div class="text-2xl font-bold mb-1">1.247</div>
            <div class="text-sm text-surface-500 dark:text-surface-400 mb-3">Bestellungen</div>
            <Tag value="+8 %" severity="success" class="bg-green-100 text-green-700" />
          </template>
        </Card>
        <Card class="shadow-sm border border-surface-200 dark:border-surface-700">
          <template #content>
            <div class="text-2xl font-bold mb-1">3.891</div>
            <div class="text-sm text-surface-500 dark:text-surface-400 mb-3">Nutzer</div>
            <Tag value="+2 %" severity="warn" class="bg-orange-100 text-orange-700" />
          </template>
        </Card>
        <Card class="shadow-sm border border-surface-200 dark:border-surface-700">
          <template #content>
            <div class="text-2xl font-bold mb-1">89</div>
            <div class="text-sm text-surface-500 dark:text-surface-400 mb-3">Retouren</div>
            <Tag value="+23 %" severity="danger" class="bg-red-100 text-red-700" />
          </template>
        </Card>
      </div>

      <!-- Filters & Actions -->
      <div class="flex gap-4 items-start">
        <!-- Filter Accordion/Panel -->
        <div class="flex-1 bg-surface-100 dark:bg-surface-800 rounded-lg p-4 border border-surface-200 dark:border-surface-700">
          <div class="flex justify-between items-center mb-4 cursor-pointer">
            <span class="font-semibold">Filter</span>
            <i class="pi pi-chevron-down text-surface-500"></i>
          </div>
          <div class="flex gap-6">
            <!-- Zeitraum -->
            <div class="flex flex-col gap-2">
              <label class="text-sm text-surface-600 dark:text-surface-300">Zeitraum</label>
              <div class="relative">
                <InputText v-model="dateRange" placeholder="Zeitraum wählen" class="w-56 border-green-500" readonly />
                <!-- Mocked DatePicker Popover -->
                <div class="absolute top-full left-0 mt-1 bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg shadow-lg p-3 z-10 w-64">
                  <div class="flex justify-between items-center mb-2">
                    <Button icon="pi pi-chevron-left" text rounded size="small" />
                    <span class="font-semibold">July 2024</span>
                    <Button icon="pi pi-chevron-right" text rounded size="small" />
                  </div>
                  <div class="grid grid-cols-7 gap-1 text-center text-sm mb-1">
                    <span class="text-surface-500">Su</span><span class="text-surface-500">Mo</span><span class="text-surface-500">Tu</span><span class="text-surface-500">We</span><span class="text-surface-500">Th</span><span class="text-surface-500">Fr</span><span class="text-surface-500">Sa</span>
                  </div>
                  <div class="grid grid-cols-7 gap-1 text-center text-sm">
                    <span class="text-surface-400">27</span><span class="text-surface-400">28</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                    <span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span>
                    <span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span><span>19</span>
                    <span>20</span><span>21</span><span>22</span><span>23</span><span>24</span><span>25</span><span>26</span>
                    <span>27</span><span>28</span><span>29</span><span>30</span><span>31</span><span class="text-surface-400">1</span><span class="text-surface-400">2</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Status -->
            <div class="flex flex-col gap-2">
              <label class="text-sm text-surface-600 dark:text-surface-300">Status</label>
              <div class="relative">
                <div class="flex items-center justify-between border border-green-500 rounded-md px-3 py-2 w-48 bg-white dark:bg-surface-900 cursor-pointer">
                  <span class="text-surface-500">Status auswählen</span>
                  <i class="pi pi-chevron-down text-green-500"></i>
                </div>
                <!-- Mocked Dropdown Popover -->
                <div class="absolute top-full left-0 mt-1 bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg shadow-lg p-2 z-10 w-48">
                  <div class="relative mb-2">
                    <i class="pi pi-search absolute left-2 top-1/2 -translate-y-1/2 text-surface-400"></i>
                    <InputText placeholder="Suche..." class="w-full pl-8 py-1 text-sm" />
                  </div>
                  <ul class="list-none p-0 m-0 text-sm">
                    <li class="px-2 py-1.5 hover:bg-surface-100 dark:hover:bg-surface-800 cursor-pointer rounded bg-surface-100 dark:bg-surface-800">Bezahlt</li>
                    <li class="px-2 py-1.5 hover:bg-surface-100 dark:hover:bg-surface-800 cursor-pointer rounded">In Bearbeitung</li>
                    <li class="px-2 py-1.5 hover:bg-surface-100 dark:hover:bg-surface-800 cursor-pointer rounded">Versendet</li>
                    <li class="px-2 py-1.5 hover:bg-surface-100 dark:hover:bg-surface-800 cursor-pointer rounded">Angekommen</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Zustand -->
            <div class="flex flex-col gap-2">
              <label class="text-sm text-surface-600 dark:text-surface-300">Zustand</label>
              <div class="flex items-center gap-4 h-[42px]">
                <div class="flex items-center gap-2">
                  <Checkbox v-model="zustandAktiv" :binary="true" inputId="aktiv" class="!bg-green-500 !border-green-500" />
                  <label for="aktiv" class="text-sm">Aktiv</label>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox v-model="zustandArchiv" :binary="true" inputId="archiv" />
                  <label for="archiv" class="text-sm">Archiv</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Export Button & Menu -->
        <div class="relative">
          <Button label="Exportieren" icon="pi pi-file-export" class="bg-green-500 border-green-500 hover:bg-green-600" @click="toggleExportMenu" />
          <!-- Mocked Export Menu -->
          <div v-if="showExportMenu" class="absolute top-full right-0 mt-2 bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg shadow-lg p-2 z-10 w-48 flex flex-col gap-1">
            <Button label="Als CSV exportieren" variant="text" class="w-full justify-start text-surface-700 dark:text-surface-200 hover:bg-surface-100 dark:hover:bg-surface-800" />
            <Button label="Als PDF exportieren" variant="text" class="w-full justify-start text-surface-700 dark:text-surface-200 hover:bg-surface-100 dark:hover:bg-surface-800" />
          </div>
        </div>
      </div>

      <!-- DataTable -->
      <div class="bg-white dark:bg-surface-900 rounded-lg border border-surface-200 dark:border-surface-700">
        <DataTable :value="products" tableStyle="min-width: 50rem">
          <Column field="produkt" header="Produkt"></Column>
          <Column field="status" header="Status">
            <template #body="slotProps">
              <Tag :value="slotProps.data.status" :class="getStatusClass(slotProps.data.status)" />
            </template>
          </Column>
          <Column field="bestelldatum" header="Bestelldatum"></Column>
          <Column field="summe" header="Summe"></Column>
          <Column field="stueck" header="Stück"></Column>
          <Column header="Aktionen" :exportable="false" style="min-width: 8rem">
            <template #body="slotProps">
              <div class="relative">
                <Button icon="pi pi-ellipsis-h" text rounded class="text-surface-500 hover:bg-surface-100 dark:hover:bg-surface-800" @click="toggleActionMenu(slotProps.data.id)" />
                <!-- Mocked Action Menu for Sensor X1 -->
                <div v-if="activeActionMenu === slotProps.data.id && slotProps.data.id === 3" class="absolute top-full right-0 mt-1 bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg shadow-lg p-2 z-10 w-48 flex flex-col gap-1">
                  <Button label="Bearbeiten" icon="pi pi-pencil" variant="text" class="w-full justify-start text-surface-700 dark:text-surface-200 hover:bg-surface-100 dark:hover:bg-surface-800" />
                  <Button label="Status aktualisieren" icon="pi pi-list" variant="text" class="w-full justify-start text-surface-700 dark:text-surface-200 hover:bg-surface-100 dark:hover:bg-surface-800" />
                  <Button label="Löschen" icon="pi pi-trash" variant="text" class="w-full justify-start text-surface-700 dark:text-surface-200 hover:bg-surface-100 dark:hover:bg-surface-800" />
                </div>
              </div>
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
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const dateRange = ref('');
const zustandAktiv = ref(true);
const zustandArchiv = ref(false);
const showExportMenu = ref(true); // Set to true to match screenshot
const activeActionMenu = ref(3); // Set to 3 to match screenshot showing menu for Sensor X1

const toggleExportMenu = () => {
  showExportMenu.value = !showExportMenu.value;
};

const toggleActionMenu = (id) => {
  activeActionMenu.value = activeActionMenu.value === id ? null : id;
};

const products = ref([
  { id: 1, produkt: 'Widget Pro', status: 'Angekommen', bestelldatum: '15.04.2026', summe: '12.400 €', stueck: 312 },
  { id: 2, produkt: 'Gadget Mini', status: 'In Bearbeitung', bestelldatum: '24.04.2026', summe: '8.920 €', stueck: 485 },
  { id: 3, produkt: 'Sensor X1', status: 'Versendet', bestelldatum: '09.05.2026', summe: '6.100 €', stueck: 150 },
  { id: 4, produkt: 'System V5', status: 'Bezahlt', bestelldatum: '12.06.2026', summe: '10.250 €', stueck: 2 },
]);

const getStatusClass = (status) => {
  switch (status) {
    case 'Angekommen':
      return 'bg-green-100 text-green-700';
    case 'In Bearbeitung':
      return 'bg-orange-100 text-orange-700';
    case 'Versendet':
      return 'bg-purple-100 text-purple-700';
    case 'Bezahlt':
      return 'bg-blue-100 text-blue-700';
    default:
      return 'bg-surface-100 text-surface-700';
  }
};
</script>