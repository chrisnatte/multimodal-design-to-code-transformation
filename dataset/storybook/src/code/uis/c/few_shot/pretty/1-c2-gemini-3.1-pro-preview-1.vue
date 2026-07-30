<template>
  <div class="flex min-h-screen bg-slate-50">
    <!-- Sidebar -->
    <aside class="w-64 border-r border-slate-200 bg-slate-100 p-4">
      <div class="mb-6 text-sm font-medium text-slate-500">Navigation</div>
      <nav class="flex flex-col gap-2">
        <Button
          label="Dashboard"
          icon="pi pi-th-large"
          class="!justify-start !bg-green-100 !text-green-700 !border-green-200"
          variant="outlined"
        />
        <Button
          label="Kunden"
          icon="pi pi-users"
          class="!justify-start !text-slate-700 !border-slate-300"
          variant="outlined"
        />
        <Button
          label="Berichte"
          icon="pi pi-file"
          class="!justify-start !text-slate-700 !border-slate-300"
          variant="outlined"
        />
        <Button
          label="Einstellungen"
          icon="pi pi-cog"
          class="!justify-start !text-slate-700 !border-slate-300"
          variant="outlined"
        />
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-8">
      <header class="mb-8">
        <h1 class="text-3xl font-bold text-slate-800">Dashboard</h1>
        <p class="text-slate-500">Bekommen eine Übersicht über die Projekte.</p>
      </header>

      <!-- KPI Cards -->
      <div class="mb-8 grid grid-cols-4 gap-4">
        <Card class="!shadow-sm">
          <template #content>
            <div class="text-2xl font-bold text-slate-800">42.8 Tsd.</div>
            <div class="text-sm text-slate-500 mb-2">Umsatz in €</div>
            <Tag value="+12 %" severity="success" class="!bg-green-100 !text-green-700" />
          </template>
        </Card>
        <Card class="!shadow-sm">
          <template #content>
            <div class="text-2xl font-bold text-slate-800">1.247</div>
            <div class="text-sm text-slate-500 mb-2">Bestellungen</div>
            <Tag value="+8 %" severity="success" class="!bg-green-100 !text-green-700" />
          </template>
        </Card>
        <Card class="!shadow-sm">
          <template #content>
            <div class="text-2xl font-bold text-slate-800">3.891</div>
            <div class="text-sm text-slate-500 mb-2">Nutzer</div>
            <Tag value="+2 %" severity="warn" class="!bg-orange-100 !text-orange-700" />
          </template>
        </Card>
        <Card class="!shadow-sm">
          <template #content>
            <div class="text-2xl font-bold text-slate-800">89</div>
            <div class="text-sm text-slate-500 mb-2">Retouren</div>
            <Tag value="+23 %" severity="danger" class="!bg-red-100 !text-red-700" />
          </template>
        </Card>
      </div>

      <!-- Filters & Actions -->
      <div class="mb-8 flex items-start gap-4">
        <Accordion value="0" class="flex-1 !bg-slate-100 !rounded-lg !border-none">
          <AccordionPanel value="0">
            <AccordionHeader class="!bg-transparent !border-none">Filter</AccordionHeader>
            <AccordionContent class="!bg-transparent !border-none">
              <div class="flex gap-6">
                <div class="flex flex-col gap-2">
                  <label class="text-sm text-slate-600">Zeitraum</label>
                  <Button
                    label="Zeitraum wählen"
                    class="!justify-start !bg-white !text-slate-500 !border-green-400 w-64"
                    variant="outlined"
                    @click="toggleDatePicker"
                  />
                  <Popover ref="datePickerPopover">
                    <div class="p-2 w-64">
                      <div class="flex justify-between items-center mb-4">
                        <Button icon="pi pi-chevron-left" variant="text" size="small" />
                        <span class="font-medium">July 2024</span>
                        <Button icon="pi pi-chevron-right" variant="text" size="small" />
                      </div>
                      <div class="grid grid-cols-7 gap-1 text-center text-sm mb-2">
                        <div class="text-slate-400">Su</div>
                        <div class="text-slate-400">Mo</div>
                        <div class="text-slate-400">Tu</div>
                        <div class="text-slate-400">We</div>
                        <div class="text-slate-400">Th</div>
                        <div class="text-slate-400">Fr</div>
                        <div class="text-slate-400">Sa</div>
                      </div>
                      <div class="grid grid-cols-7 gap-1 text-center text-sm">
                        <div class="text-slate-300 p-1">27</div>
                        <div class="text-slate-300 p-1">28</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">1</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">2</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">3</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">4</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">5</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">6</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">7</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">8</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">9</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">10</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">11</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">12</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">13</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">14</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">15</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">16</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">17</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">18</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">19</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">20</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">21</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">22</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">23</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">24</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">25</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">26</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">27</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">28</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">29</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">30</div>
                        <div class="p-1 hover:bg-slate-100 rounded cursor-pointer">31</div>
                        <div class="text-slate-300 p-1">1</div>
                        <div class="text-slate-300 p-1">2</div>
                      </div>
                    </div>
                  </Popover>
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm text-slate-600">Status</label>
                  <Button
                    label="Status auswählen"
                    icon="pi pi-chevron-down"
                    iconPos="right"
                    class="!justify-between !bg-white !text-slate-500 !border-green-400 w-48"
                    variant="outlined"
                    @click="toggleStatusDropdown"
                  />
                  <Popover ref="statusDropdownPopover">
                    <div class="flex flex-col w-48">
                      <div class="p-2 border-b border-slate-100">
                        <div class="relative">
                          <i class="pi pi-search absolute left-2 top-1/2 -translate-y-1/2 text-slate-400"></i>
                          <input type="text" placeholder="Suche..." class="w-full pl-8 pr-2 py-1 text-sm border border-slate-200 rounded outline-none focus:border-green-400" />
                        </div>
                      </div>
                      <div class="p-1">
                        <div class="px-3 py-2 text-sm hover:bg-slate-50 cursor-pointer rounded bg-slate-100">Bezahlt</div>
                        <div class="px-3 py-2 text-sm hover:bg-slate-50 cursor-pointer rounded">In Bearbeitung</div>
                        <div class="px-3 py-2 text-sm hover:bg-slate-50 cursor-pointer rounded">Versendet</div>
                        <div class="px-3 py-2 text-sm hover:bg-slate-50 cursor-pointer rounded">Angekommen</div>
                      </div>
                    </div>
                  </Popover>
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm text-slate-600">Zustand</label>
                  <div class="flex items-center gap-4 h-10">
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

        <div class="flex flex-col gap-2">
          <Button
            label="Exportieren"
            icon="pi pi-file-export"
            iconPos="right"
            severity="success"
            class="!bg-emerald-500 !border-emerald-500"
            @click="toggleExportMenu"
          />
          <Popover ref="exportMenuPopover">
            <div class="flex flex-col w-48 p-1">
              <Button label="Als CSV exportieren" variant="text" class="!justify-start !text-slate-700" />
              <Button label="Als PDF exportieren" variant="text" class="!justify-start !text-slate-700" />
            </div>
          </Popover>
        </div>
      </div>

      <!-- Data Table -->
      <DataTable :value="products" class="!border-t !border-slate-200">
        <Column field="name" header="Produkt" class="py-4"></Column>
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="getStatusSeverity(data.status)" :class="getStatusClass(data.status)" />
          </template>
        </Column>
        <Column field="date" header="Bestelldatum"></Column>
        <Column field="amount" header="Summe"></Column>
        <Column field="quantity" header="Stück"></Column>
        <Column header="Aktionen" class="w-24 text-center">
          <template #body="{ data }">
            <Button
              icon="pi pi-ellipsis-h"
              variant="text"
              severity="secondary"
              class="!text-slate-400"
              @click="(e) => toggleActionMenu(e, data)"
            />
          </template>
        </Column>
      </DataTable>

      <Popover ref="actionMenuPopover">
        <div class="flex flex-col w-48 p-1">
          <Button label="Bearbeiten" icon="pi pi-pencil" variant="text" class="!justify-start !text-slate-700" />
          <Button label="Status aktualisieren" icon="pi pi-list" variant="text" class="!justify-start !text-slate-700" />
          <Button label="Löschen" icon="pi pi-trash" variant="text" class="!justify-start !text-slate-700" />
        </div>
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
import Checkbox from 'primevue/checkbox';
import Popover from 'primevue/popover';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const activeState = ref(true);
const archiveState = ref(false);

const datePickerPopover = ref();
const statusDropdownPopover = ref();
const exportMenuPopover = ref();
const actionMenuPopover = ref();

const toggleDatePicker = (event) => {
  datePickerPopover.value.toggle(event);
};

const toggleStatusDropdown = (event) => {
  statusDropdownPopover.value.toggle(event);
};

const toggleExportMenu = (event) => {
  exportMenuPopover.value.toggle(event);
};

const toggleActionMenu = (event, data) => {
  actionMenuPopover.value.toggle(event);
};

const products = ref([
  { name: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', amount: '12.400 €', quantity: 312 },
  { name: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', amount: '8.920 €', quantity: 485 },
  { name: 'Sensor X1', status: 'Versendet', date: '09.05.2026', amount: '6.100 €', quantity: 150 },
  { name: 'System V5', status: 'Bezahlt', date: '12.06.2026', amount: '10.250 €', quantity: 2 },
]);

const getStatusSeverity = (status) => {
  switch (status) {
    case 'Angekommen': return 'success';
    case 'In Bearbeitung': return 'warn';
    case 'Versendet': return 'info';
    case 'Bezahlt': return 'info';
    default: return 'info';
  }
};

const getStatusClass = (status) => {
  switch (status) {
    case 'Angekommen': return '!bg-green-100 !text-green-700';
    case 'In Bearbeitung': return '!bg-orange-100 !text-orange-700';
    case 'Versendet': return '!bg-indigo-100 !text-indigo-700';
    case 'Bezahlt': return '!bg-blue-100 !text-blue-700';
    default: return '';
  }
};
</script>