<template>
  <div class="flex min-h-screen bg-surface-0 font-sans">
    <!-- Sidebar Navigation -->
    <div class="w-64 bg-surface-50 p-6 flex flex-col gap-6 border-r border-surface-200">
      <div class="text-surface-900 text-base">Navigation</div>
      <div class="flex flex-col gap-4">
        <Button 
          label="Dashboard" 
          icon="pi pi-objects-column" 
          class="!bg-primary-100 !text-primary-700 !border-primary-200 !justify-start px-4 py-2" 
        />
        <Button 
          label="Kunden" 
          icon="pi pi-users" 
          variant="outlined" 
          severity="secondary" 
          class="!justify-start px-4 py-2 !text-surface-700 !border-surface-300 bg-surface-0" 
        />
        <Button 
          label="Berichte" 
          icon="pi pi-file" 
          variant="outlined" 
          severity="secondary" 
          class="!justify-start px-4 py-2 !text-surface-700 !border-surface-300 bg-surface-0" 
        />
        <Button 
          label="Einstellungen" 
          icon="pi pi-cog" 
          variant="outlined" 
          severity="secondary" 
          class="!justify-start px-4 py-2 !text-surface-700 !border-surface-300 bg-surface-0" 
        />
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-16 flex flex-col gap-10 bg-surface-0">
      <!-- Header -->
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-surface-900 m-0">Dashboard</h1>
        <p class="text-surface-600 text-base m-0">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- KPI Cards -->
      <div class="flex gap-5">
        <div class="bg-surface-50 rounded-xl p-4 flex flex-col gap-2 w-48">
          <div class="text-2xl font-medium text-surface-900">42.8 Tsd.</div>
          <div class="text-sm text-surface-600">Umsatz in €</div>
          <Tag value="+12 %" class="!bg-green-100 !text-green-700 w-fit mt-2 font-bold" />
        </div>
        <div class="bg-surface-50 rounded-xl p-4 flex flex-col gap-2 w-48">
          <div class="text-2xl font-medium text-surface-900">1.247</div>
          <div class="text-sm text-surface-600">Bestellungen</div>
          <Tag value="+8 %" class="!bg-green-100 !text-green-700 w-fit mt-2 font-bold" />
        </div>
        <div class="bg-surface-50 rounded-xl p-4 flex flex-col gap-2 w-48">
          <div class="text-2xl font-medium text-surface-900">3.891</div>
          <div class="text-sm text-surface-600">Nutzer</div>
          <Tag value="+2 %" class="!bg-orange-100 !text-orange-700 w-fit mt-2 font-bold" />
        </div>
        <div class="bg-surface-50 rounded-xl p-4 flex flex-col gap-2 w-48">
          <div class="text-2xl font-medium text-surface-900">89</div>
          <div class="text-sm text-surface-600">Retouren</div>
          <Tag value="+23 %" class="!bg-red-100 !text-red-700 w-fit mt-2 font-bold" />
        </div>
      </div>

      <!-- Filter & Export Actions -->
      <div class="flex gap-4 items-start">
        <Accordion value="0" class="flex-1 bg-surface-50 rounded-lg border border-surface-200">
          <AccordionPanel value="0">
            <AccordionHeader class="!bg-transparent !border-none !p-4 text-surface-900 font-semibold">
              Filter
            </AccordionHeader>
            <AccordionContent class="!p-4 !pt-0">
              <div class="flex gap-5">
                <div class="flex flex-col gap-2">
                  <label class="text-sm text-surface-900">Zeitraum</label>
                  <DatePicker v-model="selectedDate" placeholder="Zeitraum wählen" class="w-64" />
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm text-surface-900">Status</label>
                  <Select v-model="selectedStatus" :options="statusOptions" placeholder="Status auswählen" class="w-56" />
                </div>
                <div class="flex flex-col gap-3">
                  <label class="text-sm text-surface-900">Zustand</label>
                  <div class="flex gap-4 items-center h-10">
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="isActive" inputId="active" binary />
                      <label for="active" class="text-sm text-surface-900 cursor-pointer">Aktiv</label>
                    </div>
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="isArchive" inputId="archive" binary />
                      <label for="archive" class="text-sm text-surface-900 cursor-pointer">Archiv</label>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>

        <div>
          <Button 
            label="Exportieren" 
            icon="pi pi-file-export" 
            iconPos="right" 
            @click="toggleExportPopover" 
            class="!bg-primary-500 !border-primary-500 !text-white" 
          />
          <Popover ref="exportPopover">
            <div class="flex flex-col gap-2 p-2 w-48">
              <Button label="Als CSV exportieren" icon="pi pi-file-excel" variant="outlined" severity="secondary" class="w-full !justify-start !text-surface-700" />
              <Button label="Als PDF exportieren" icon="pi pi-file-pdf" variant="outlined" severity="secondary" class="w-full !justify-start !text-surface-700" />
            </div>
          </Popover>
        </div>
      </div>

      <!-- Data Table -->
      <DataTable :value="products" class="w-full border-t border-surface-200">
        <Column field="name" header="Produkt" class="py-4 text-surface-900"></Column>
        <Column field="status" header="Status" class="py-4">
          <template #body="slotProps">
            <Tag :value="slotProps.data.status" :class="getStatusClass(slotProps.data.status)" class="font-bold" />
          </template>
        </Column>
        <Column field="date" header="Bestelldatum" class="py-4 text-surface-900"></Column>
        <Column field="total" header="Summe" class="py-4 text-surface-900"></Column>
        <Column field="quantity" header="Stück" class="py-4 text-surface-900"></Column>
        <Column header="Aktionen" class="py-4">
          <template #body="slotProps">
            <Button 
              icon="pi pi-ellipsis-h" 
              variant="text" 
              severity="secondary" 
              rounded 
              @click="toggleActionPopover($event, slotProps.data)" 
              class="!text-surface-500 hover:!bg-surface-100"
            />
          </template>
        </Column>
      </DataTable>

      <!-- Action Popover -->
      <Popover ref="actionPopover">
        <div class="flex flex-col gap-2 p-2 w-56">
          <Button label="Bearbeiten" icon="pi pi-pen-to-square" variant="outlined" severity="secondary" class="w-full !justify-start !text-surface-700" />
          <Button label="Status aktualisieren" icon="pi pi-list-check" variant="outlined" severity="secondary" class="w-full !justify-start !text-surface-700" />
          <Button label="Löschen" icon="pi pi-trash" variant="outlined" severity="secondary" class="w-full !justify-start !text-surface-700" />
        </div>
      </Popover>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';
import Popover from 'primevue/popover';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

// Filter State
const selectedDate = ref(null);
const selectedStatus = ref(null);
const isActive = ref(true);
const isArchive = ref(false);

const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']);

// Popover Refs
const exportPopover = ref();
const actionPopover = ref();
const selectedProduct = ref(null);

const toggleExportPopover = (event) => {
  exportPopover.value.toggle(event);
};

const toggleActionPopover = (event, product) => {
  selectedProduct.value = product;
  actionPopover.value.toggle(event);
};

// Table Data
const products = ref([
  { name: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', total: '12.400 €', quantity: 312 },
  { name: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', total: '8.920 €', quantity: 485 },
  { name: 'Sensor X1', status: 'Versendet', date: '09.05.2026', total: '6.100 €', quantity: 150 },
  { name: 'System V5', status: 'Bezahlt', date: '12.06.2026', total: '10.250 €', quantity: 2 }
]);

// Status Styling
const getStatusClass = (status) => {
  switch (status) {
    case 'Angekommen':
      return '!bg-green-100 !text-green-700';
    case 'In Bearbeitung':
      return '!bg-orange-100 !text-orange-700';
    case 'Versendet':
      return '!bg-surface-100 !text-surface-700';
    case 'Bezahlt':
      return '!bg-blue-100 !text-blue-700';
    default:
      return '!bg-surface-100 !text-surface-700';
  }
};
</script>