<template>
  <div class="flex min-h-screen bg-white">
    <!-- Sidebar -->
    <div class="w-64 bg-surface-50 p-6 flex flex-col gap-6">
      <div class="flex flex-col gap-6 w-full">
        <span class="text-base text-surface-700">Navigation</span>
        <div class="flex flex-col gap-4 w-full">
          <Button label="Dashboard" icon="pi pi-th-large" severity="primary" outlined class="w-full justify-start" />
          <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined class="w-full justify-start" />
          <Button label="Berichte" icon="pi pi-file" severity="secondary" outlined class="w-full justify-start" />
          <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" outlined class="w-full justify-start" />
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="flex-1 p-8 flex flex-col gap-8">
      <!-- Header -->
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold m-0">Dashboard</h1>
        <p class="text-base text-surface-600 m-0">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Stat cards -->
      <div class="flex flex-row gap-5">
        <Card class="bg-surface-50" style="width: 12rem">
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium">42.8 Tsd.</span>
              <span class="text-sm text-surface-600">Umsatz in €</span>
              <Tag value="+12 %" severity="success" class="w-fit"></Tag>
            </div>
          </template>
        </Card>
        <Card class="bg-surface-50" style="width: 12rem">
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium">1.247</span>
              <span class="text-sm text-surface-600">Bestellungen</span>
              <Tag value="+8 %" severity="success" class="w-fit"></Tag>
            </div>
          </template>
        </Card>
        <Card class="bg-surface-50" style="width: 12rem">
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium">3.891</span>
              <span class="text-sm text-surface-600">Nutzer</span>
              <Tag value="+2 %" severity="warn" class="w-fit"></Tag>
            </div>
          </template>
        </Card>
        <Card class="bg-surface-50" style="width: 12rem">
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium">89</span>
              <span class="text-sm text-surface-600">Retouren</span>
              <Tag value="+23 %" severity="danger" class="w-fit"></Tag>
            </div>
          </template>
        </Card>
      </div>

      <!-- Filter accordion -->
      <Accordion value="0" class="bg-surface-50 rounded-lg" style="max-width: 692px">
        <AccordionPanel value="0">
          <AccordionHeader>Filter</AccordionHeader>
          <AccordionContent>
            <div class="flex flex-row gap-5 flex-wrap">
              <DatePicker v-model="dateRange" selectionMode="range" placeholder="Zeitraum wählen" showIcon />
              <Select v-model="selectedStatus" :options="statusOptions" placeholder="Status auswählen" filter class="w-52" />
              <div class="flex flex-col gap-2">
                <span class="text-sm">Zustand</span>
                <div class="flex flex-row items-center gap-3">
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="activeChecked" binary inputId="active" />
                    <label for="active">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="archiveChecked" binary inputId="archive" />
                    <label for="archive">Archiv</label>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>

      <!-- Export popover trigger -->
      <div class="flex justify-end" style="max-width: 1008px">
        <Button label="Exportieren" icon="pi pi-file-export" iconPos="right" @click="toggleExportPopover" />
        <Popover ref="exportPopover">
          <div class="flex flex-col gap-2 w-48">
            <Button label="Als CSV exportieren" severity="secondary" outlined class="w-full" />
            <Button label="Als PDF exportieren" severity="secondary" outlined class="w-full" />
          </div>
        </Popover>
      </div>

      <!-- DataTable -->
      <DataTable :value="products" tableStyle="min-width: 50rem">
        <Column field="product" header="Produkt"></Column>
        <Column field="status" header="Status">
          <template #body="slotProps">
            <Tag :value="slotProps.data.status" :severity="slotProps.data.severity"></Tag>
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

      <!-- Row actions popover -->
      <Popover ref="rowPopover">
        <div class="flex flex-col gap-2 w-44">
          <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined class="w-full" />
          <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" outlined class="w-full" />
          <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="w-full" />
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
import Popover from 'primevue/popover';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const dateRange = ref(null);
const selectedStatus = ref(null);
const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']);
const activeChecked = ref(true);
const archiveChecked = ref(false);

const exportPopover = ref();
const rowPopover = ref();
const selectedRow = ref(null);

const toggleExportPopover = (event) => {
  exportPopover.value.toggle(event);
};

const toggleRowPopover = (event, data) => {
  selectedRow.value = data;
  rowPopover.value.toggle(event);
};

const products = ref([
  { product: 'Widget Pro', status: 'Angekommen', severity: 'success', date: '15.04.2026', sum: '12.400 €', qty: '312' },
  { product: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warn', date: '24.04.2026', sum: '8.920 €', qty: '485' },
  { product: 'Sensor X1', status: 'Versendet', severity: 'secondary', date: '09.05.2026', sum: '6.100 €', qty: '150' },
  { product: 'System V5', status: 'Bezahlt', severity: 'info', date: '12.06.2026', sum: '10.250 €', qty: '2' }
]);
</script>