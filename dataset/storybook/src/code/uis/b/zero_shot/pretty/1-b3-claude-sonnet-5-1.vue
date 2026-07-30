<template>
  <div class="flex min-h-screen bg-white">
    <!-- Sidebar -->
    <div class="w-64 bg-surface-100 flex flex-col gap-6 p-6">
      <div class="flex flex-col gap-6 w-full">
        <span class="text-base text-color">Navigation</span>
        <div class="flex flex-col gap-4 w-full">
          <Button label="Dashboard" icon="pi pi-th-large" severity="primary" outlined class="w-full justify-start" />
          <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined class="w-full justify-start" />
          <Button label="Berichte" icon="pi pi-file" severity="secondary" outlined class="w-full justify-start" />
          <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" outlined class="w-full justify-start" />
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="flex-1 p-8 flex flex-col gap-6">
      <!-- Header -->
      <div class="flex flex-col gap-1">
        <h1 class="text-4xl font-bold m-0">Dashboard</h1>
        <p class="text-base m-0">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Stat Cards -->
      <div class="flex items-center gap-5 flex-wrap">
        <Card v-for="stat in stats" :key="stat.label" class="bg-surface-100" style="width: 12rem">
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium">{{ stat.value }}</span>
              <span class="text-sm">{{ stat.label }}</span>
              <Tag :value="stat.change" :severity="stat.severity" />
            </div>
          </template>
        </Card>
      </div>

      <!-- Accordion Filter -->
      <Accordion :value="accordionValue">
        <AccordionPanel value="0">
          <AccordionHeader>Filter</AccordionHeader>
          <AccordionContent>
            <div class="flex gap-5 flex-wrap items-start">
              <div class="flex flex-col gap-2">
                <label class="text-sm">Zeitraum</label>
                <DatePicker v-model="dateRange" placeholder="Zeitraum wählen" showIcon />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm">Status</label>
                <Select v-model="statusFilter" :options="statusOptions" optionLabel="label" placeholder="Status auswählen" class="w-56" />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-sm">Zustand</label>
                <div class="flex items-center gap-3 py-3">
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="stateFilter" inputId="aktiv" value="Aktiv" />
                    <label for="aktiv" class="text-sm">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="stateFilter" inputId="archiv" value="Archiv" />
                    <label for="archiv" class="text-sm">Archiv</label>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>

      <!-- Export Popover Trigger -->
      <div class="flex justify-end">
        <Button type="button" label="Exportieren" icon="pi pi-file-export" iconPos="right" @click="toggleExportPopover" />
        <Popover ref="exportPopover">
          <div class="flex flex-col gap-2 w-44">
            <Button label="Als CSV exportieren" severity="secondary" outlined class="w-full" />
            <Button label="Als PDF exportieren" severity="secondary" outlined class="w-full" />
          </div>
        </Popover>
      </div>

      <!-- DataTable -->
      <DataTable :value="products" tableStyle="min-width: 50rem">
        <Column field="product" header="Produkt"></Column>
        <Column header="Status">
          <template #body="slotProps">
            <Tag :value="slotProps.data.status" :severity="slotProps.data.statusSeverity" />
          </template>
        </Column>
        <Column field="date" header="Bestelldatum"></Column>
        <Column field="sum" header="Summe"></Column>
        <Column field="qty" header="Stück"></Column>
        <Column header="Aktionen">
          <template #body="slotProps">
            <Button icon="pi pi-ellipsis-h" text severity="secondary" @click="toggleRowPopover($event, slotProps.data)" />
          </template>
        </Column>
      </DataTable>

      <Popover ref="rowPopover">
        <div class="flex flex-col gap-2 w-44">
          <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined class="w-full justify-start" />
          <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" outlined class="w-full justify-start" />
          <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="w-full justify-start" />
        </div>
      </Popover>
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
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Popover from 'primevue/popover';

const accordionValue = ref('0');

const stats = ref([
  { label: 'Umsatz in €', value: '42.8 Tsd.', change: '+12 %', severity: 'success' },
  { label: 'Bestellungen', value: '1.247', change: '+8 %', severity: 'success' },
  { label: 'Nutzer', value: '3.891', change: '+2 %', severity: 'warn' },
  { label: 'Retouren', value: '89', change: '+23 %', severity: 'danger' }
]);

const dateRange = ref(null);
const statusFilter = ref(null);
const statusOptions = ref([
  { label: 'Bezahlt' },
  { label: 'In Bearbeitung' },
  { label: 'Versendet' },
  { label: 'Angekommen' }
]);
const stateFilter = ref(['Aktiv']);

const products = ref([
  { product: 'Widget Pro', status: 'Angekommen', statusSeverity: 'success', date: '15.04.2026', sum: '12.400 €', qty: '312' },
  { product: 'Gadget Mini', status: 'In Bearbeitung', statusSeverity: 'warn', date: '24.04.2026', sum: '8.920 €', qty: '485' },
  { product: 'Sensor X1', status: 'Versendet', statusSeverity: 'secondary', date: '09.05.2026', sum: '6.100 €', qty: '150' },
  { product: 'System V5', status: 'Bezahlt', statusSeverity: 'info', date: '12.06.2026', sum: '10.250 €', qty: '2' }
]);

const exportPopover = ref();
const toggleExportPopover = (event) => {
  exportPopover.value.toggle(event);
};

const rowPopover = ref();
const toggleRowPopover = (event) => {
  rowPopover.value.toggle(event);
};
</script>