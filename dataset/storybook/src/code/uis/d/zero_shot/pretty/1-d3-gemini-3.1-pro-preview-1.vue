<template>
  <div class="min-h-screen bg-white flex">
    <!-- Sidebar Navigation -->
    <div class="w-64 bg-surface-50 p-6 flex flex-col gap-6">
      <div class="flex flex-col gap-6">
        <span class="text-surface-900 text-base">Navigation</span>
        <div class="flex flex-col gap-4">
          <Button
            label="Dashboard"
            icon="pi pi-objects-column"
            severity="primary"
            variant="outlined"
            class="w-full justify-start bg-primary-100 border-primary-500 text-primary-900"
          />
          <Button
            label="Kunden"
            icon="pi pi-users"
            severity="secondary"
            variant="outlined"
            class="w-full justify-start text-surface-700 border-surface-300"
          />
          <Button
            label="Berichte"
            icon="pi pi-file"
            severity="secondary"
            variant="outlined"
            class="w-full justify-start text-surface-700 border-surface-300"
          />
          <Button
            label="Einstellungen"
            icon="pi pi-cog"
            severity="secondary"
            variant="outlined"
            class="w-full justify-start text-surface-700 border-surface-300"
          />
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-16 flex flex-col gap-8">
      <!-- Header -->
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-surface-900 m-0">Dashboard</h1>
        <p class="text-surface-600 text-base m-0">
          Bekomme eine Übersicht über die Projekte.
        </p>
      </div>

      <!-- KPI Cards -->
      <div class="flex gap-5">
        <Card class="w-48 bg-surface-50 shadow-none border-none">
          <template #content>
            <div class="flex flex-col gap-2">
              <div class="flex flex-col gap-2">
                <span class="text-2xl font-medium text-surface-900">42.8 Tsd.</span>
                <span class="text-sm text-surface-600">Umsatz in €</span>
              </div>
              <Tag value="+12 %" severity="success" class="w-fit bg-green-100 text-green-800" />
            </div>
          </template>
        </Card>
        <Card class="w-48 bg-surface-50 shadow-none border-none">
          <template #content>
            <div class="flex flex-col gap-2">
              <div class="flex flex-col gap-2">
                <span class="text-2xl font-medium text-surface-900">1.247</span>
                <span class="text-sm text-surface-600">Bestellungen</span>
              </div>
              <Tag value="+8 %" severity="success" class="w-fit bg-green-100 text-green-800" />
            </div>
          </template>
        </Card>
        <Card class="w-48 bg-surface-50 shadow-none border-none">
          <template #content>
            <div class="flex flex-col gap-2">
              <div class="flex flex-col gap-2">
                <span class="text-2xl font-medium text-surface-900">3.891</span>
                <span class="text-sm text-surface-600">Nutzer</span>
              </div>
              <Tag value="+2 %" severity="warn" class="w-fit bg-orange-100 text-orange-800" />
            </div>
          </template>
        </Card>
        <Card class="w-48 bg-surface-50 shadow-none border-none">
          <template #content>
            <div class="flex flex-col gap-2">
              <div class="flex flex-col gap-2">
                <span class="text-2xl font-medium text-surface-900">89</span>
                <span class="text-sm text-surface-600">Retouren</span>
              </div>
              <Tag value="+23 %" severity="danger" class="w-fit bg-red-100 text-red-800" />
            </div>
          </template>
        </Card>
      </div>

      <!-- Filter & Export Section -->
      <div class="flex gap-5 items-start">
        <!-- Filter Accordion -->
        <div class="w-[692px]">
          <Accordion value="0" class="bg-surface-50 rounded-lg border border-surface-200">
            <AccordionPanel value="0">
              <AccordionHeader class="bg-transparent border-none px-4 py-4">
                <span class="font-semibold text-surface-900">Filter</span>
              </AccordionHeader>
              <AccordionContent class="px-4 pb-4">
                <div class="flex gap-5">
                  <!-- Datepicker Mockup -->
                  <div class="flex flex-col gap-2 w-[216px]">
                    <label class="text-sm text-surface-700">Zeitraum</label>
                    <div class="relative">
                      <InputText placeholder="Zeitraum wählen" class="w-full border-primary-500" />
                      <!-- Mockup Calendar Dropdown -->
                      <div class="absolute top-full left-0 mt-1 w-[268px] bg-white border border-surface-200 rounded-md shadow-lg p-3 z-10">
                        <div class="flex justify-between items-center mb-2">
                          <Button icon="pi pi-chevron-left" variant="text" rounded severity="secondary" class="w-8 h-8 p-0" />
                          <div class="flex gap-2 font-medium text-sm">
                            <span>July</span>
                            <span>2024</span>
                          </div>
                          <Button icon="pi pi-chevron-right" variant="text" rounded severity="secondary" class="w-8 h-8 p-0" />
                        </div>
                        <div class="grid grid-cols-7 gap-1 text-center text-sm mb-2">
                          <span class="font-medium text-surface-900">Su</span>
                          <span class="font-medium text-surface-900">Mo</span>
                          <span class="font-medium text-surface-900">Tu</span>
                          <span class="font-medium text-surface-900">We</span>
                          <span class="font-medium text-surface-900">Th</span>
                          <span class="font-medium text-surface-900">Fr</span>
                          <span class="font-medium text-surface-900">Sa</span>
                        </div>
                        <div class="grid grid-cols-7 gap-1 text-center text-sm">
                          <span class="text-surface-400 p-1">27</span>
                          <span class="text-surface-400 p-1">28</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">1</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">2</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">3</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">4</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">5</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">6</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">7</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">8</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">9</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">10</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">11</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">12</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">13</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">14</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">15</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">16</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">17</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">18</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">19</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">20</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">21</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">22</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">23</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">24</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">25</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">26</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">27</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">28</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">29</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">30</span>
                          <span class="p-1 hover:bg-surface-100 rounded cursor-pointer">31</span>
                          <span class="text-surface-400 p-1">1</span>
                          <span class="text-surface-400 p-1">2</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Status Select Mockup -->
                  <div class="flex flex-col gap-2 w-[216px]">
                    <label class="text-sm text-surface-700">Status</label>
                    <div class="relative">
                      <div class="flex items-center border border-primary-500 rounded-md px-3 py-2 bg-white cursor-pointer">
                        <span class="flex-1 text-surface-500 text-sm">Status auswählen</span>
                        <i class="pi pi-chevron-down text-surface-500 text-sm"></i>
                      </div>
                      <!-- Mockup Select Dropdown -->
                      <div class="absolute top-full left-0 mt-1 w-full bg-white border border-surface-200 rounded-md shadow-lg z-10">
                        <div class="p-2 border-b border-surface-200">
                          <IconField iconPosition="right">
                            <InputIcon class="pi pi-search" />
                            <InputText placeholder="Suche..." class="w-full text-sm py-1.5" />
                          </IconField>
                        </div>
                        <div class="flex flex-col p-1">
                          <div class="px-3 py-2 text-sm hover:bg-surface-100 rounded cursor-pointer bg-surface-100">Bezahlt</div>
                          <div class="px-3 py-2 text-sm hover:bg-surface-100 rounded cursor-pointer">In Bearbeitung</div>
                          <div class="px-3 py-2 text-sm hover:bg-surface-100 rounded cursor-pointer">Versendet</div>
                          <div class="px-3 py-2 text-sm hover:bg-surface-100 rounded cursor-pointer">Angekommen</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Zustand Checkboxes -->
                  <div class="flex flex-col gap-2">
                    <label class="text-sm text-surface-700">Zustand</label>
                    <div class="flex items-center gap-3 h-[33px]">
                      <div class="flex items-center gap-2">
                        <Checkbox v-model="aktivChecked" :binary="true" />
                        <label class="text-sm text-surface-700">Aktiv</label>
                      </div>
                      <div class="flex items-center gap-2">
                        <Checkbox v-model="archivChecked" :binary="true" />
                        <label class="text-sm text-surface-700">Archiv</label>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </div>

        <!-- Export Button & Popover -->
        <div class="relative">
          <Button label="Exportieren" icon="pi pi-file-export" iconPos="right" class="bg-primary-500 border-primary-500" @click="toggleExport" />
          <div v-if="exportVisible" class="absolute top-full left-0 mt-2 w-[192px] bg-white border border-surface-200 rounded-md shadow-lg p-2 flex flex-col gap-2 z-10">
            <Button label="Als CSV exportieren" icon="pi pi-file-excel" variant="outlined" severity="secondary" class="w-full justify-start text-surface-700 border-surface-300" />
            <Button label="Als PDF exportieren" icon="pi pi-file-pdf" variant="outlined" severity="secondary" class="w-full justify-start text-surface-700 border-surface-300" />
          </div>
        </div>
      </div>

      <!-- DataTable -->
      <div class="w-[1008px]">
        <DataTable :value="products" class="p-datatable-sm">
          <Column field="produkt" header="Produkt" class="font-medium text-surface-900"></Column>
          <Column field="status" header="Status">
            <template #body="slotProps">
              <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" :class="getTagClass(slotProps.data.status)" />
            </template>
          </Column>
          <Column field="bestelldatum" header="Bestelldatum"></Column>
          <Column field="summe" header="Summe"></Column>
          <Column field="stuck" header="Stück"></Column>
          <Column header="Aktionen" :exportable="false" style="min-width: 8rem">
            <template #body="slotProps">
              <div class="relative">
                <Button icon="pi pi-ellipsis-h" variant="text" rounded severity="secondary" @click="toggleAction(slotProps.data.id)" :class="{'bg-surface-100': activeAction === slotProps.data.id}" />
                <!-- Action Popover Mockup -->
                <div v-if="activeAction === slotProps.data.id" class="absolute top-full right-0 mt-1 w-[200px] bg-white border border-surface-200 rounded-md shadow-lg p-2 flex flex-col gap-2 z-20">
                  <Button label="Bearbeiten" icon="pi pi-pen-to-square" variant="outlined" severity="secondary" class="w-full justify-start text-surface-700 border-surface-300" />
                  <Button label="Status aktualisieren" icon="pi pi-list-check" variant="outlined" severity="secondary" class="w-full justify-start text-surface-700 border-surface-300" />
                  <Button label="Löschen" icon="pi pi-trash" variant="outlined" severity="secondary" class="w-full justify-start text-surface-700 border-surface-300" />
                </div>
              </div>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
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
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

const aktivChecked = ref(true);
const archivChecked = ref(false);
const exportVisible = ref(true); // Set to true to match mockup
const activeAction = ref('4'); // Set to '4' to match mockup showing popover on last row

const toggleExport = () => {
  exportVisible.value = !exportVisible.value;
};

const toggleAction = (id) => {
  activeAction.value = activeAction.value === id ? null : id;
};

const products = ref([
  { id: '1', produkt: 'Widget Pro', status: 'Angekommen', bestelldatum: '15.04.2026', summe: '12.400 €', stuck: '312' },
  { id: '2', produkt: 'Gadget Mini', status: 'In Bearbeitung', bestelldatum: '24.04.2026', summe: '8.920 €', stuck: '485' },
  { id: '3', produkt: 'Sensor X1', status: 'Versendet', bestelldatum: '09.05.2026', summe: '6.100 €', stuck: '150' },
  { id: '4', produkt: 'System V5', status: 'Bezahlt', bestelldatum: '12.06.2026', summe: '10.250 €', stuck: '2' },
]);

const getSeverity = (status) => {
  switch (status) {
    case 'Angekommen': return 'success';
    case 'In Bearbeitung': return 'warn';
    case 'Versendet': return 'secondary';
    case 'Bezahlt': return 'info';
    default: return null;
  }
};

const getTagClass = (status) => {
  switch (status) {
    case 'Angekommen': return 'bg-green-100 text-green-800';
    case 'In Bearbeitung': return 'bg-orange-100 text-orange-800';
    case 'Versendet': return 'bg-surface-100 text-surface-800';
    case 'Bezahlt': return 'bg-blue-100 text-blue-800';
    default: return '';
  }
};
</script>