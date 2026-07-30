<template>
  <div class="flex min-h-screen bg-white font-sans text-slate-800">
    <!-- Sidebar Navigation -->
    <div class="w-64 bg-slate-50 p-6 flex flex-col gap-6 border-r border-slate-200">
      <div class="text-base text-slate-600">Navigation</div>
      <div class="flex flex-col gap-4">
        <Button 
          label="Dashboard" 
          icon="pi pi-objects-column" 
          class="w-full justify-start !bg-emerald-100 !border-emerald-100 !text-emerald-800 font-medium" 
        />
        <Button 
          label="Kunden" 
          icon="pi pi-users" 
          severity="secondary" 
          outlined 
          class="w-full justify-start !border-transparent !text-slate-600 hover:!bg-slate-200 font-medium" 
        />
        <Button 
          label="Berichte" 
          icon="pi pi-file" 
          severity="secondary" 
          outlined 
          class="w-full justify-start !border-transparent !text-slate-600 hover:!bg-slate-200 font-medium" 
        />
        <Button 
          label="Einstellungen" 
          icon="pi pi-cog" 
          severity="secondary" 
          outlined 
          class="w-full justify-start !border-transparent !text-slate-600 hover:!bg-slate-200 font-medium" 
        />
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-16 flex flex-col gap-10">
      
      <!-- Header Section -->
      <div class="flex flex-col gap-1">
        <h1 class="text-[32px] font-bold text-slate-800 m-0">Dashboard</h1>
        <p class="text-base text-slate-500 m-0">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- KPI Cards -->
      <div class="flex gap-5">
        <div class="bg-slate-50 rounded-xl p-4 w-48 flex flex-col gap-2">
          <div class="text-2xl font-medium text-slate-800">42.8 Tsd.</div>
          <div class="text-sm text-slate-500">Umsatz in €</div>
          <Tag value="+12 %" class="w-fit !bg-emerald-100 !text-emerald-800 font-bold text-xs px-2 py-1" />
        </div>
        <div class="bg-slate-50 rounded-xl p-4 w-48 flex flex-col gap-2">
          <div class="text-2xl font-medium text-slate-800">1.247</div>
          <div class="text-sm text-slate-500">Bestellungen</div>
          <Tag value="+8 %" class="w-fit !bg-emerald-100 !text-emerald-800 font-bold text-xs px-2 py-1" />
        </div>
        <div class="bg-slate-50 rounded-xl p-4 w-48 flex flex-col gap-2">
          <div class="text-2xl font-medium text-slate-800">3.891</div>
          <div class="text-sm text-slate-500">Nutzer</div>
          <Tag value="+2 %" class="w-fit !bg-orange-100 !text-orange-800 font-bold text-xs px-2 py-1" />
        </div>
        <div class="bg-slate-50 rounded-xl p-4 w-48 flex flex-col gap-2">
          <div class="text-2xl font-medium text-slate-800">89</div>
          <div class="text-sm text-slate-500">Retouren</div>
          <Tag value="+23 %" class="w-fit !bg-red-100 !text-red-800 font-bold text-xs px-2 py-1" />
        </div>
      </div>

      <!-- Filter and Export Actions -->
      <div class="flex justify-between items-start w-[1008px]">
        
        <!-- Filter Accordion -->
        <Accordion value="0" class="w-[692px]">
          <AccordionPanel value="0" class="!bg-slate-50 !border !border-slate-200 rounded-lg overflow-hidden">
            <AccordionHeader class="!bg-transparent !p-4 font-semibold text-sm text-slate-800">Filter</AccordionHeader>
            <AccordionContent class="!bg-transparent !p-4 !pt-0 flex gap-5">
              
              <div class="flex flex-col gap-2 w-[216px]">
                <label class="text-sm text-slate-800">Zeitraum</label>
                <DatePicker v-model="date" placeholder="Zeitraum wählen" class="w-full" />
              </div>
              
              <div class="flex flex-col gap-2 w-[216px]">
                <label class="text-sm text-slate-800">Status</label>
                <Select v-model="selectedStatus" :options="statusOptions" placeholder="Status auswählen" class="w-full" />
              </div>
              
              <div class="flex flex-col gap-3">
                <label class="text-sm text-slate-800">Zustand</label>
                <div class="flex items-center gap-4 mt-1">
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="activeChecked" inputId="aktiv" binary />
                    <label for="aktiv" class="text-sm text-slate-800 cursor-pointer">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="archiveChecked" inputId="archiv" binary />
                    <label for="archiv" class="text-sm text-slate-800 cursor-pointer">Archiv</label>
                  </div>
                </div>
              </div>

            </AccordionContent>
          </AccordionPanel>
        </Accordion>

        <!-- Export Button & Popover -->
        <div>
          <Button 
            label="Exportieren" 
            icon="pi pi-file-export" 
            iconPos="right" 
            @click="toggleExport" 
            class="!bg-emerald-500 !border-emerald-500 !text-white font-medium" 
          />
          <Popover ref="exportPopover">
            <div class="flex flex-col gap-2 p-1 w-48">
              <Button label="Als CSV exportieren" icon="pi pi-file" severity="secondary" outlined class="w-full justify-start text-sm" />
              <Button label="Als PDF exportieren" icon="pi pi-file-pdf" severity="secondary" outlined class="w-full justify-start text-sm" />
            </div>
          </Popover>
        </div>

      </div>

      <!-- Data Table -->
      <div class="w-[1008px]">
        <DataTable :value="products" class="text-sm">
          <Column field="produkt" header="Produkt" class="font-medium text-slate-800 w-[384px]"></Column>
          <Column field="status" header="Status" class="w-[160px]">
            <template #body="slotProps">
              <Tag :value="slotProps.data.status" :class="getStatusClass(slotProps.data.status)" class="font-bold text-xs px-2 py-1" />
            </template>
          </Column>
          <Column field="bestelldatum" header="Bestelldatum" class="w-[124px] text-slate-600"></Column>
          <Column field="summe" header="Summe" class="w-[124px] text-slate-600"></Column>
          <Column field="stueck" header="Stück" class="w-[124px] text-slate-600"></Column>
          <Column header="Aktionen" class="w-[92px]">
            <template #body>
              <Button icon="pi pi-ellipsis-h" text plain rounded @click="toggleAction" class="!text-slate-500 hover:!bg-slate-100" />
            </template>
          </Column>
        </DataTable>

        <!-- Action Popover -->
        <Popover ref="actionPopover">
          <div class="flex flex-col gap-2 p-1 w-48">
            <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined class="w-full justify-start text-sm" />
            <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" outlined class="w-full justify-start text-sm" />
            <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="w-full justify-start text-sm" />
          </div>
        </Popover>
      </div>

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
const date = ref(null);
const selectedStatus = ref(null);
const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']);
const activeChecked = ref(true);
const archiveChecked = ref(false);

// Popover Refs & Toggles
const exportPopover = ref();
const toggleExport = (event) => {
  exportPopover.value.toggle(event);
};

const actionPopover = ref();
const toggleAction = (event) => {
  actionPopover.value.toggle(event);
};

// DataTable Data
const products = ref([
  { produkt: 'Widget Pro', status: 'Angekommen', bestelldatum: '15.04.2026', summe: '12.400 €', stueck: '312' },
  { produkt: 'Gadget Mini', status: 'In Bearbeitung', bestelldatum: '24.04.2026', summe: '8.920 €', stueck: '485' },
  { produkt: 'Sensor X1', status: 'Versendet', bestelldatum: '09.05.2026', summe: '6.100 €', stueck: '150' },
  { produkt: 'System V5', status: 'Bezahlt', bestelldatum: '12.06.2026', summe: '10.250 €', stueck: '2' },
]);

// Helper for Tag styling based on Figma mockup colors
const getStatusClass = (status) => {
  switch (status) {
    case 'Angekommen':
      return '!bg-emerald-100 !text-emerald-800';
    case 'In Bearbeitung':
      return '!bg-orange-100 !text-orange-800';
    case 'Versendet':
      return '!bg-slate-100 !text-slate-800';
    case 'Bezahlt':
      return '!bg-blue-100 !text-blue-800';
    default:
      return '!bg-slate-100 !text-slate-800';
  }
};
</script>