<template>
  <div class="flex min-h-screen w-full bg-white font-sans">
    <!-- Sidebar -->
    <div class="flex flex-col w-64 bg-surface-50 p-6 gap-6 shrink-0 border-r border-surface-200">
      <div class="flex flex-col gap-6 mt-6">
        <span class="text-base text-surface-900">Navigation</span>
        <div class="flex flex-col gap-4">
          <Button label="Dashboard" icon="pi pi-th-large" outlined />
          <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined />
          <Button label="Berichte" icon="pi pi-file" severity="secondary" outlined />
          <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" outlined />
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex flex-col flex-1 p-16 gap-10 overflow-y-auto">
      <!-- Header -->
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-surface-900">Dashboard</h1>
        <p class="text-base text-surface-600">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Cards -->
      <div class="flex flex-row gap-5 items-center">
        <div class="flex flex-col bg-surface-50 rounded-xl p-4 gap-4 w-48">
          <div class="flex flex-col gap-1">
            <span class="text-2xl font-medium text-surface-900">42.8 Tsd.</span>
            <span class="text-sm text-surface-600">Umsatz in €</span>
          </div>
          <Tag value="+12 %" severity="success" class="w-fit" />
        </div>
        <div class="flex flex-col bg-surface-50 rounded-xl p-4 gap-4 w-48">
          <div class="flex flex-col gap-1">
            <span class="text-2xl font-medium text-surface-900">1.247</span>
            <span class="text-sm text-surface-600">Bestellungen</span>
          </div>
          <Tag value="+8 %" severity="success" class="w-fit" />
        </div>
        <div class="flex flex-col bg-surface-50 rounded-xl p-4 gap-4 w-48">
          <div class="flex flex-col gap-1">
            <span class="text-2xl font-medium text-surface-900">89</span>
            <span class="text-sm text-surface-600">Retouren</span>
          </div>
          <Tag value="+23 %" severity="danger" class="w-fit" />
        </div>
      </div>

      <!-- Filter & Export Row -->
      <div class="flex flex-row justify-between items-start">
        <!-- Accordion -->
        <Accordion value="0" class="w-[692px]">
          <AccordionPanel value="0">
            <AccordionHeader class="bg-surface-50">Filter</AccordionHeader>
            <AccordionContent class="bg-surface-50">
              <div class="flex flex-row gap-5 pt-2">
                <div class="flex flex-col gap-2 w-56">
                  <label class="text-sm text-surface-900">Zeitraum</label>
                  <DatePicker v-model="date" placeholder="Zeitraum wählen" class="w-full" />
                </div>
                <div class="flex flex-col gap-2 w-56">
                  <label class="text-sm text-surface-900">Status</label>
                  <Select v-model="selectedStatus" :options="statuses" optionLabel="label" placeholder="Status auswählen" class="w-full" />
                </div>
                <div class="flex flex-col gap-3">
                  <span class="text-sm text-surface-900">Zustand</span>
                  <div class="flex flex-row gap-4 items-center h-full pb-2">
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="active" inputId="active" binary />
                      <label for="active" class="text-sm text-surface-900">Aktiv</label>
                    </div>
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="archive" inputId="archive" binary />
                      <label for="archive" class="text-sm text-surface-900">Archiv</label>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>

        <!-- Export Button -->
        <div>
          <Button label="Exportieren" icon="pi pi-file-export" iconPos="right" @click="toggleExport" />
          <Popover ref="exportPopover">
            <div class="flex flex-col gap-2 w-48 p-1">
              <Button label="Als CSV exportieren" icon="pi pi-file-excel" severity="secondary" outlined class="w-full justify-start" />
              <Button label="Als PDF exportieren" icon="pi pi-file-pdf" severity="secondary" outlined class="w-full justify-start" />
            </div>
          </Popover>
        </div>
      </div>

      <!-- DataTable -->
      <DataTable :value="products" class="w-full border border-surface-200 rounded-lg overflow-hidden">
        <Column field="name" header="Produkt" class="font-medium"></Column>
        <Column field="status" header="Status">
          <template #body="slotProps">
            <Tag :value="slotProps.data.statusLabel" :severity="slotProps.data.statusSeverity" />
          </template>
        </Column>
        <Column field="date" header="Bestelldatum"></Column>
        <Column field="total" header="Summe"></Column>
        <Column field="quantity" header="Stück"></Column>
        <Column header="Aktionen" :exportable="false" style="min-width: 8rem">
          <template #body="slotProps">
            <Button icon="pi pi-ellipsis-h" severity="secondary" text rounded @click="toggleActions($event, slotProps.data)" />
          </template>
        </Column>
      </DataTable>

      <Popover ref="actionsPopover">
        <div class="flex flex-col gap-2 w-48 p-1">
          <Button label="Bearbeiten" icon="pi pi-pencil" severity="secondary" outlined class="w-full justify-start" />
          <Button label="Status aktualisieren" icon="pi pi-check-square" severity="secondary" outlined class="w-full justify-start" />
          <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="w-full justify-start" />
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

const date = ref(null);
const selectedStatus = ref(null);
const statuses = ref([
  { label: 'Bezahlt', value: 'bezahlt' },
  { label: 'In Bearbeitung', value: 'in_bearbeitung' },
  { label: 'Versendet', value: 'versendet' },
  { label: 'Angekommen', value: 'angekommen' }
]);
const active = ref(true);
const archive = ref(false);

const products = ref([
  { name: 'Widget Pro', statusLabel: 'Angekommen', statusSeverity: 'success', date: '15.04.2026', total: '12.400 €', quantity: 312 },
  { name: 'Gadget Mini', statusLabel: 'In Bearbeitung', statusSeverity: 'warn', date: '24.04.2026', total: '8.920 €', quantity: 485 },
  { name: 'Sensor X1', statusLabel: 'Versendet', statusSeverity: 'secondary', date: '09.05.2026', total: '6.100 €', quantity: 150 },
  { name: 'System V5', statusLabel: 'Bezahlt', statusSeverity: 'info', date: '12.06.2026', total: '10.250 €', quantity: 2 }
]);

const exportPopover = ref();
const toggleExport = (event) => {
  exportPopover.value.toggle(event);
};

const actionsPopover = ref();
const selectedProduct = ref(null);
const toggleActions = (event, product) => {
  selectedProduct.value = product;
  actionsPopover.value.toggle(event);
};
</script>