<template>
  <div class="flex min-h-screen bg-surface-50 dark:bg-surface-900 text-surface-900 dark:text-surface-0 font-sans">
    <!-- Sidebar Navigation -->
    <aside class="w-64 bg-surface-100 dark:bg-surface-800 p-4 flex flex-col gap-2 border-r border-surface-200 dark:border-surface-700">
      <div class="text-sm font-semibold text-surface-500 dark:text-surface-400 mb-2 px-2">Navigation</div>
      <Button label="Dashboard" icon="pi pi-th-large" class="w-full justify-start !bg-green-100 !text-green-800 !border-green-200 hover:!bg-green-200" />
      <Button label="Kunden" icon="pi pi-users" variant="outlined" severity="secondary" class="w-full justify-start !text-surface-700 dark:!text-surface-200 !border-surface-300 dark:!border-surface-600 !bg-surface-0 dark:!bg-surface-900" />
      <Button label="Berichte" icon="pi pi-file" variant="outlined" severity="secondary" class="w-full justify-start !text-surface-700 dark:!text-surface-200 !border-surface-300 dark:!border-surface-600 !bg-surface-0 dark:!bg-surface-900" />
      <Button label="Einstellungen" icon="pi pi-cog" variant="outlined" severity="secondary" class="w-full justify-start !text-surface-700 dark:!text-surface-200 !border-surface-300 dark:!border-surface-600 !bg-surface-0 dark:!bg-surface-900" />
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-8 overflow-y-auto">
      <!-- Header -->
      <header class="mb-8">
        <h1 class="text-3xl font-bold mb-2">Dashboard</h1>
        <p class="text-surface-500 dark:text-surface-400">Bekomme eine Übersicht über die Projekte.</p>
      </header>

      <!-- KPI Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card class="!bg-surface-100 dark:!bg-surface-800 !shadow-none !border-none">
          <template #content>
            <div class="text-3xl font-bold mb-1">42.8 Tsd.</div>
            <div class="text-sm text-surface-500 dark:text-surface-400 mb-3">Umsatz in €</div>
            <Tag value="+12 %" severity="success" class="!bg-green-100 !text-green-800" />
          </template>
        </Card>
        <Card class="!bg-surface-100 dark:!bg-surface-800 !shadow-none !border-none">
          <template #content>
            <div class="text-3xl font-bold mb-1">1.247</div>
            <div class="text-sm text-surface-500 dark:text-surface-400 mb-3">Bestellungen</div>
            <Tag value="+8 %" severity="success" class="!bg-green-100 !text-green-800" />
          </template>
        </Card>
        <Card class="!bg-surface-100 dark:!bg-surface-800 !shadow-none !border-none">
          <template #content>
            <div class="text-3xl font-bold mb-1">3.891</div>
            <div class="text-sm text-surface-500 dark:text-surface-400 mb-3">Nutzer</div>
            <Tag value="+2 %" severity="warn" class="!bg-orange-100 !text-orange-800" />
          </template>
        </Card>
        <Card class="!bg-surface-100 dark:!bg-surface-800 !shadow-none !border-none">
          <template #content>
            <div class="text-3xl font-bold mb-1">89</div>
            <div class="text-sm text-surface-500 dark:text-surface-400 mb-3">Retouren</div>
            <Tag value="+23 %" severity="danger" class="!bg-red-100 !text-red-800" />
          </template>
        </Card>
      </div>

      <!-- Filter Section -->
      <div class="flex items-start gap-4 mb-8">
        <Accordion value="0" class="flex-1 !bg-surface-100 dark:!bg-surface-800 rounded-xl overflow-hidden">
          <AccordionPanel value="0" class="!border-none">
            <AccordionHeader class="!bg-transparent !border-none !p-4">
              <span class="font-semibold">Filter</span>
            </AccordionHeader>
            <AccordionContent class="!bg-transparent !p-4 !pt-0">
              <div class="flex flex-wrap gap-6">
                <div class="flex flex-col gap-2">
                  <label class="text-sm text-surface-600 dark:text-surface-300">Zeitraum</label>
                  <div class="relative">
                    <InputText placeholder="Zeitraum wählen" class="w-64 !border-green-500" readonly @click="toggleDatePicker" />
                    <Popover ref="datePickerPopover" class="!p-0">
                      <div class="p-4 w-72">
                        <div class="flex justify-between items-center mb-4">
                          <Button icon="pi pi-chevron-left" variant="text" rounded severity="secondary" class="!w-8 !h-8 !p-0" />
                          <span class="font-semibold">July 2024</span>
                          <Button icon="pi pi-chevron-right" variant="text" rounded severity="secondary" class="!w-8 !h-8 !p-0" />
                        </div>
                        <div class="grid grid-cols-7 gap-1 text-center text-sm mb-2">
                          <div class="text-surface-500">Su</div><div class="text-surface-500">Mo</div><div class="text-surface-500">Tu</div><div class="text-surface-500">We</div><div class="text-surface-500">Th</div><div class="text-surface-500">Fr</div><div class="text-surface-500">Sa</div>
                        </div>
                        <div class="grid grid-cols-7 gap-1 text-center text-sm">
                          <div class="p-1 text-surface-400">27</div><div class="p-1 text-surface-400">28</div><div class="p-1">1</div><div class="p-1">2</div><div class="p-1">3</div><div class="p-1">4</div><div class="p-1">5</div>
                          <div class="p-1">6</div><div class="p-1">7</div><div class="p-1">8</div><div class="p-1">9</div><div class="p-1">10</div><div class="p-1">11</div><div class="p-1">12</div>
                          <div class="p-1">13</div><div class="p-1">14</div><div class="p-1">15</div><div class="p-1">16</div><div class="p-1">17</div><div class="p-1">18</div><div class="p-1">19</div>
                          <div class="p-1">20</div><div class="p-1">21</div><div class="p-1">22</div><div class="p-1">23</div><div class="p-1">24</div><div class="p-1">25</div><div class="p-1">26</div>
                          <div class="p-1">27</div><div class="p-1">28</div><div class="p-1">29</div><div class="p-1">30</div><div class="p-1">31</div><div class="p-1 text-surface-400">1</div><div class="p-1 text-surface-400">2</div>
                        </div>
                      </div>
                    </Popover>
                  </div>
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm text-surface-600 dark:text-surface-300">Status</label>
                  <div class="relative">
                    <InputText placeholder="Status auswählen" class="w-64 !border-green-500" readonly @click="toggleStatusDropdown" />
                    <i class="pi pi-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-green-500"></i>
                    <Popover ref="statusPopover" class="!p-0">
                      <div class="flex flex-col w-64">
                        <div class="p-2 border-b border-surface-200 dark:border-surface-700">
                          <IconField>
                            <InputIcon class="pi pi-search" />
                            <InputText placeholder="Suche..." class="w-full !pl-10" />
                          </IconField>
                        </div>
                        <ul class="list-none p-0 m-0">
                          <li class="px-4 py-2 hover:bg-surface-100 dark:hover:bg-surface-800 cursor-pointer bg-surface-100 dark:bg-surface-800">Bezahlt</li>
                          <li class="px-4 py-2 hover:bg-surface-100 dark:hover:bg-surface-800 cursor-pointer">In Bearbeitung</li>
                          <li class="px-4 py-2 hover:bg-surface-100 dark:hover:bg-surface-800 cursor-pointer">Versendet</li>
                          <li class="px-4 py-2 hover:bg-surface-100 dark:hover:bg-surface-800 cursor-pointer">Angekommen</li>
                        </ul>
                      </div>
                    </Popover>
                  </div>
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm text-surface-600 dark:text-surface-300">Zustand</label>
                  <div class="flex items-center gap-4 h-10">
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
            </AccordionContent>
          </AccordionPanel>
        </Accordion>

        <div class="relative">
          <Button label="Exportieren" icon="pi pi-file-export" class="!bg-green-500 !border-green-500 hover:!bg-green-600" @click="toggleExportMenu" />
          <Popover ref="exportPopover" class="!p-0">
            <ul class="list-none p-2 m-0 flex flex-col gap-1 w-48">
              <li><Button label="Als CSV exportieren" variant="text" class="w-full justify-start !text-surface-700 dark:!text-surface-200 !border !border-surface-200 dark:!border-surface-700" /></li>
              <li><Button label="Als PDF exportieren" variant="text" class="w-full justify-start !text-surface-700 dark:!text-surface-200 !border !border-surface-200 dark:!border-surface-700" /></li>
            </ul>
          </Popover>
        </div>
      </div>

      <!-- Data Table -->
      <DataTable :value="products" class="w-full">
        <Column field="produkt" header="Produkt" class="w-1/5"></Column>
        <Column field="status" header="Status" class="w-1/5">
          <template #body="slotProps">
            <Tag :value="slotProps.data.status" :class="getStatusClass(slotProps.data.status)" />
          </template>
        </Column>
        <Column field="bestelldatum" header="Bestelldatum" class="w-1/5"></Column>
        <Column field="summe" header="Summe" class="w-1/5"></Column>
        <Column field="stueck" header="Stück" class="w-1/12"></Column>
        <Column header="Aktionen" class="w-1/12 text-center">
          <template #body="slotProps">
            <Button icon="pi pi-ellipsis-h" variant="text" rounded severity="secondary" @click="toggleActionMenu($event, slotProps.data)" :class="{'!bg-surface-200 dark:!bg-surface-700': activeRow === slotProps.data.id}" />
          </template>
        </Column>
      </DataTable>

      <Popover ref="actionPopover" class="!p-0">
        <ul class="list-none p-2 m-0 flex flex-col gap-1 w-48">
          <li><Button label="Bearbeiten" icon="pi pi-pencil" variant="text" class="w-full justify-start !text-surface-700 dark:!text-surface-200 !border !border-surface-200 dark:!border-surface-700" /></li>
          <li><Button label="Status aktualisieren" icon="pi pi-list" variant="text" class="w-full justify-start !text-surface-700 dark:!text-surface-200 !border !border-surface-200 dark:!border-surface-700" /></li>
          <li><Button label="Löschen" icon="pi pi-trash" variant="text" class="w-full justify-start !text-surface-700 dark:!text-surface-200 !border !border-surface-200 dark:!border-surface-700" /></li>
        </ul>
      </Popover>

    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import Popover from 'primevue/popover';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

const zustandAktiv = ref(true);
const zustandArchiv = ref(false);

const datePickerPopover = ref();
const statusPopover = ref();
const exportPopover = ref();
const actionPopover = ref();
const activeRow = ref(null);

const toggleDatePicker = (event) => {
  datePickerPopover.value.toggle(event);
};

const toggleStatusDropdown = (event) => {
  statusPopover.value.toggle(event);
};

const toggleExportMenu = (event) => {
  exportPopover.value.toggle(event);
};

const toggleActionMenu = (event, rowData) => {
  activeRow.value = rowData.id;
  actionPopover.value.toggle(event);
};

const products = ref([
  { id: 1, produkt: 'Widget Pro', status: 'Angekommen', bestelldatum: '15.04.2026', summe: '12.400 €', stueck: 312 },
  { id: 2, produkt: 'Gadget Mini', status: 'In Bearbeitung', bestelldatum: '24.04.2026', summe: '8.920 €', stueck: 485 },
  { id: 3, produkt: 'Sensor X1', status: 'Versendet', bestelldatum: '09.05.2026', summe: '6.100 €', stueck: 150 },
  { id: 4, produkt: 'System V5', status: 'Bezahlt', bestelldatum: '12.06.2026', summe: '10.250 €', stueck: 2 }
]);

const getStatusClass = (status) => {
  switch (status) {
    case 'Angekommen': return '!bg-green-100 !text-green-800';
    case 'In Bearbeitung': return '!bg-orange-100 !text-orange-800';
    case 'Versendet': return '!bg-purple-100 !text-purple-800';
    case 'Bezahlt': return '!bg-blue-100 !text-blue-800';
    default: return '';
  }
};
</script>