<template>
  <div class="flex min-h-screen bg-slate-50">
    <!-- Sidebar -->
    <aside class="w-64 flex-shrink-0 border-r border-slate-200 bg-slate-100 p-4">
      <div class="mb-6 text-sm font-medium text-slate-500">Navigation</div>
      <nav class="flex flex-col gap-2">
        <Button
          label="Dashboard"
          icon="pi pi-th-large"
          class="w-full !justify-start !bg-green-100 !text-green-800 !border-green-200"
          outlined
        />
        <Button
          label="Kunden"
          icon="pi pi-users"
          class="w-full !justify-start !text-slate-700 !border-slate-300 !bg-transparent"
          outlined
        />
        <Button
          label="Berichte"
          icon="pi pi-file"
          class="w-full !justify-start !text-slate-700 !border-slate-300 !bg-transparent"
          outlined
        />
        <Button
          label="Einstellungen"
          icon="pi pi-cog"
          class="w-full !justify-start !text-slate-700 !border-slate-300 !bg-transparent"
          outlined
        />
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-8">
      <header class="mb-8">
        <h1 class="mb-1 text-3xl font-bold text-slate-800">Dashboard</h1>
        <p class="text-slate-500">Bekomme eine Übersicht über die Projekte.</p>
      </header>

      <!-- KPI Cards -->
      <div class="mb-8 grid grid-cols-4 gap-4">
        <Card class="!shadow-sm">
          <template #content>
            <div class="text-2xl font-bold text-slate-800">42.8 Tsd.</div>
            <div class="mb-2 text-sm text-slate-500">Umsatz in €</div>
            <Tag value="+12 %" severity="success" class="!bg-green-100 !text-green-700" />
          </template>
        </Card>
        <Card class="!shadow-sm">
          <template #content>
            <div class="text-2xl font-bold text-slate-800">1.247</div>
            <div class="mb-2 text-sm text-slate-500">Bestellungen</div>
            <Tag value="+8 %" severity="success" class="!bg-green-100 !text-green-700" />
          </template>
        </Card>
        <Card class="!shadow-sm">
          <template #content>
            <div class="text-2xl font-bold text-slate-800">3.891</div>
            <div class="mb-2 text-sm text-slate-500">Nutzer</div>
            <Tag value="+2 %" severity="warn" class="!bg-orange-100 !text-orange-700" />
          </template>
        </Card>
        <Card class="!shadow-sm">
          <template #content>
            <div class="text-2xl font-bold text-slate-800">89</div>
            <div class="mb-2 text-sm text-slate-500">Retouren</div>
            <Tag value="+23 %" severity="danger" class="!bg-red-100 !text-red-700" />
          </template>
        </Card>
      </div>

      <!-- Filters & Export -->
      <div class="mb-8 flex items-start gap-4">
        <Accordion value="0" class="flex-1 !bg-slate-100 !rounded-lg !border-none">
          <AccordionPanel value="0">
            <AccordionHeader class="!bg-transparent !border-none">Filter</AccordionHeader>
            <AccordionContent class="!bg-transparent !border-none">
              <div class="flex gap-6">
                <div class="flex flex-col gap-2">
                  <label class="text-sm text-slate-600">Zeitraum</label>
                  <div class="relative">
                    <InputText
                      v-model="dateRange"
                      placeholder="Zeitraum wählen"
                      class="w-64 !border-green-400"
                    />
                    <!-- Mocked DatePicker Popover -->
                    <Card class="absolute left-0 top-full z-10 mt-1 w-64 !shadow-md">
                      <template #content>
                        <div class="flex items-center justify-between mb-4">
                          <Button icon="pi pi-chevron-left" text rounded size="small" />
                          <span class="font-medium">July 2024</span>
                          <Button icon="pi pi-chevron-right" text rounded size="small" />
                        </div>
                        <div class="grid grid-cols-7 gap-1 text-center text-sm">
                          <div class="text-slate-400">Su</div>
                          <div class="text-slate-400">Mo</div>
                          <div class="text-slate-400">Tu</div>
                          <div class="text-slate-400">We</div>
                          <div class="text-slate-400">Th</div>
                          <div class="text-slate-400">Fr</div>
                          <div class="text-slate-400">Sa</div>
                          <div class="text-slate-300">27</div>
                          <div class="text-slate-300">28</div>
                          <div>1</div>
                          <div>2</div>
                          <div>3</div>
                          <div>4</div>
                          <div>5</div>
                          <div>6</div>
                          <div>7</div>
                          <div>8</div>
                          <div>9</div>
                          <div>10</div>
                          <div>11</div>
                          <div>12</div>
                          <div>13</div>
                          <div>14</div>
                          <div>15</div>
                          <div>16</div>
                          <div>17</div>
                          <div>18</div>
                          <div>19</div>
                          <div>20</div>
                          <div>21</div>
                          <div>22</div>
                          <div>23</div>
                          <div>24</div>
                          <div>25</div>
                          <div>26</div>
                          <div>27</div>
                          <div>28</div>
                          <div>29</div>
                          <div>30</div>
                          <div>31</div>
                          <div class="text-slate-300">1</div>
                          <div class="text-slate-300">2</div>
                        </div>
                      </template>
                    </Card>
                  </div>
                </div>

                <div class="flex flex-col gap-2">
                  <label class="text-sm text-slate-600">Status</label>
                  <div class="relative">
                    <div class="flex items-center justify-between w-48 rounded-md border border-green-400 bg-white px-3 py-2">
                      <span class="text-slate-500">Status auswählen</span>
                      <i class="pi pi-chevron-down text-slate-400"></i>
                    </div>
                    <!-- Mocked Dropdown Popover -->
                    <Card class="absolute left-0 top-full z-10 mt-1 w-48 !shadow-md">
                      <template #content>
                        <div class="relative mb-2">
                          <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
                          <InputText placeholder="Suche..." class="w-full pl-9 !py-1.5" />
                        </div>
                        <ul class="flex flex-col">
                          <li class="cursor-pointer rounded bg-slate-100 px-3 py-2 text-sm">Bezahlt</li>
                          <li class="cursor-pointer rounded px-3 py-2 text-sm hover:bg-slate-50">In Bearbeitung</li>
                          <li class="cursor-pointer rounded px-3 py-2 text-sm hover:bg-slate-50">Versendet</li>
                          <li class="cursor-pointer rounded px-3 py-2 text-sm hover:bg-slate-50">Angekommen</li>
                        </ul>
                      </template>
                    </Card>
                  </div>
                </div>

                <div class="flex flex-col gap-2">
                  <label class="text-sm text-slate-600">Zustand</label>
                  <div class="flex items-center gap-4 pt-2">
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="activeState" inputId="state-active" binary class="!bg-green-500 !border-green-500" />
                      <label for="state-active" class="text-sm">Aktiv</label>
                    </div>
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="archiveState" inputId="state-archive" binary />
                      <label for="state-archive" class="text-sm">Archiv</label>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>

        <div class="relative">
          <Button label="Exportieren" icon="pi pi-file-export" severity="success" @click="toggleExportMenu" />
          <!-- Mocked Export Menu -->
          <Card v-if="showExportMenu" class="absolute right-0 top-full z-10 mt-1 w-48 !shadow-md">
            <template #content>
              <ul class="flex flex-col gap-1">
                <li>
                  <Button label="Als CSV exportieren" text class="w-full !justify-start !text-slate-700 !border !border-slate-200" />
                </li>
                <li>
                  <Button label="Als PDF exportieren" text class="w-full !justify-start !text-slate-700 !border !border-slate-200" />
                </li>
              </ul>
            </template>
          </Card>
        </div>
      </div>

      <!-- Data Table -->
      <DataTable :value="products" class="!bg-white !rounded-lg !shadow-sm">
        <Column field="name" header="Produkt"></Column>
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="getStatusSeverity(data.status)" :class="getStatusClass(data.status)" />
          </template>
        </Column>
        <Column field="date" header="Bestelldatum"></Column>
        <Column field="amount" header="Summe"></Column>
        <Column field="quantity" header="Stück"></Column>
        <Column header="Aktionen" :exportable="false" style="min-width: 8rem">
          <template #body="{ data }">
            <div class="relative">
              <Button icon="pi pi-ellipsis-h" text rounded severity="secondary" @click="toggleActionMenu(data.id)" :class="{'!bg-slate-100': activeActionMenu === data.id}" />
              <!-- Mocked Action Menu for System V5 -->
              <Card v-if="activeActionMenu === data.id && data.id === 4" class="absolute right-0 top-full z-10 mt-1 w-48 !shadow-md">
                <template #content>
                  <ul class="flex flex-col gap-1">
                    <li>
                      <Button label="Bearbeiten" icon="pi pi-pencil" text class="w-full !justify-start !text-slate-700 !border !border-slate-200" />
                    </li>
                    <li>
                      <Button label="Status aktualisieren" icon="pi pi-list" text class="w-full !justify-start !text-slate-700 !border !border-slate-200" />
                    </li>
                    <li>
                      <Button label="Löschen" icon="pi pi-trash" text class="w-full !justify-start !text-slate-700 !border !border-slate-200" />
                    </li>
                  </ul>
                </template>
              </Card>
            </div>
          </template>
        </Column>
      </DataTable>
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
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const dateRange = ref('');
const activeState = ref(true);
const archiveState = ref(false);
const showExportMenu = ref(true);
const activeActionMenu = ref(4);

const toggleExportMenu = () => {
  showExportMenu.value = !showExportMenu.value;
};

const toggleActionMenu = (id) => {
  activeActionMenu.value = activeActionMenu.value === id ? null : id;
};

const products = ref([
  { id: 1, name: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', amount: '12.400 €', quantity: 312 },
  { id: 2, name: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', amount: '8.920 €', quantity: 485 },
  { id: 3, name: 'Sensor X1', status: 'Versendet', date: '09.05.2026', amount: '6.100 €', quantity: 150 },
  { id: 4, name: 'System V5', status: 'Bezahlt', date: '12.06.2026', amount: '10.250 €', quantity: 2 },
]);

const getStatusSeverity = (status) => {
  switch (status) {
    case 'Angekommen': return 'success';
    case 'In Bearbeitung': return 'warn';
    case 'Versendet': return 'info';
    case 'Bezahlt': return 'info';
    default: return 'secondary';
  }
};

const getStatusClass = (status) => {
  switch (status) {
    case 'Angekommen': return '!bg-green-100 !text-green-700';
    case 'In Bearbeitung': return '!bg-orange-100 !text-orange-700';
    case 'Versendet': return '!bg-blue-100 !text-blue-700';
    case 'Bezahlt': return '!bg-blue-100 !text-blue-700';
    default: return '';
  }
};
</script>