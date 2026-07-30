<template>
  <div class="flex w-full min-h-screen bg-white">
    <!-- Sidebar -->
    <div class="flex flex-col w-[256px] bg-surface-50 p-6 gap-6 border-r border-surface-200">
      <div class="flex flex-col gap-6 mt-6">
        <span class="text-base font-normal text-surface-900">Navigation</span>
        <div class="flex flex-col gap-4">
          <Button label="Dashboard" icon="pi pi-objects-column" severity="primary" variant="outlined" class="w-full justify-start" />
          <Button label="Kunden" icon="pi pi-users" severity="secondary" variant="outlined" class="w-full justify-start" />
          <Button label="Berichte" icon="pi pi-file" severity="secondary" variant="outlined" class="w-full justify-start" />
          <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" variant="outlined" class="w-full justify-start" />
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex flex-col flex-1 p-16 gap-8">
      <!-- Header -->
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold m-0 text-surface-900">Dashboard</h1>
        <p class="text-base font-normal m-0 text-surface-600">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Cards -->
      <div class="flex flex-row gap-5 items-center">
        <Card class="w-[192px] bg-surface-50 shadow-none border border-surface-200">
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium text-surface-900">42.8 Tsd.</span>
              <span class="text-sm font-normal text-surface-600">Umsatz in €</span>
              <Tag value="+12 %" severity="success" class="w-fit mt-4" />
            </div>
          </template>
        </Card>
        <Card class="w-[192px] bg-surface-50 shadow-none border border-surface-200">
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium text-surface-900">1.247</span>
              <span class="text-sm font-normal text-surface-600">Bestellungen</span>
              <Tag value="+8 %" severity="success" class="w-fit mt-4" />
            </div>
          </template>
        </Card>
        <Card class="w-[192px] bg-surface-50 shadow-none border border-surface-200">
          <template #content>
            <div class="flex flex-col gap-2">
              <span class="text-2xl font-medium text-surface-900">89</span>
              <span class="text-sm font-normal text-surface-600">Retouren</span>
              <Tag value="+23 %" severity="danger" class="w-fit mt-4" />
            </div>
          </template>
        </Card>
      </div>

      <!-- Filter & Export -->
      <div class="flex flex-row justify-between items-start w-[1008px]">
        <!-- Accordion Filter -->
        <Accordion value="0" class="w-[692px]">
          <AccordionPanel value="0">
            <AccordionHeader>Filter</AccordionHeader>
            <AccordionContent>
              <div class="flex flex-row gap-5">
                <div class="flex flex-col gap-2 w-[216px]">
                  <label class="text-sm text-surface-900">Zeitraum</label>
                  <InputText v-model="dateRange" placeholder="Zeitraum wählen" />
                </div>
                <div class="flex flex-col gap-2 w-[216px]">
                  <label class="text-sm text-surface-900">Status</label>
                  <Select v-model="selectedStatus" :options="statusOptions" placeholder="Status auswählen" class="w-full" />
                </div>
                <div class="flex flex-col gap-3 justify-center mt-6">
                  <span class="text-sm text-surface-900 mb-1">Zustand</span>
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="filterActive" inputId="active" binary />
                    <label for="active" class="text-sm text-surface-900">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="filterArchive" inputId="archive" binary />
                    <label for="archive" class="text-sm text-surface-900">Archiv</label>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>

        <!-- Export Button & Popover -->
        <div class="relative">
          <Button label="Exportieren" icon="pi pi-file-export" iconPos="right" @click="toggleExport" />
          <Popover ref="exportPopover">
            <div class="flex flex-col gap-2 p-2 w-[192px]">
              <Button label="Als CSV exportieren" icon="pi pi-file" severity="secondary" variant="text" class="w-full justify-start" />
              <Button label="Als PDF exportieren" icon="pi pi-file-pdf" severity="secondary" variant="text" class="w-full justify-start" />
            </div>
          </Popover>
        </div>
      </div>

      <!-- DataTable -->
      <DataTable :value="products" class="w-[1008px]">
        <Column field="product" header="Produkt"></Column>
        <Column field="status" header="Status">
          <template #body="slotProps">
            <Tag :value="slotProps.data.status" :severity="slotProps.data.statusSeverity" />
          </template>
        </Column>
        <Column field="date" header="Bestelldatum"></Column>
        <Column field="sum" header="Summe"></Column>
        <Column field="pieces" header="Stück"></Column>
        <Column header="Aktionen">
          <template #body="slotProps">
            <Button icon="pi pi-ellipsis-h" variant="text" severity="secondary" rounded @click="toggleAction($event, slotProps.data)" />
          </template>
        </Column>
      </DataTable>

      <!-- Action Popover -->
      <Popover ref="actionPopover">
        <div class="flex flex-col gap-2 p-2 w-[177px]">
          <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" variant="text" class="w-full justify-start" />
          <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" variant="text" class="w-full justify-start" />
          <Button label="Löschen" icon="pi pi-trash" severity="secondary" variant="text" class="w-full justify-start" />
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
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Popover from 'primevue/popover';

const exportPopover = ref();
const actionPopover = ref();

const toggleExport = (event) => {
  exportPopover.value.toggle(event);
};

const toggleAction = (event, data) => {
  actionPopover.value.toggle(event);
};

const dateRange = ref('');
const selectedStatus = ref(null);
const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']);

const filterActive = ref(true);
const filterArchive = ref(false);

const products = ref([
  { product: 'Widget Pro', status: 'Angekommen', statusSeverity: 'success', date: '15.04.2026', sum: '12.400 €', pieces: 312 },
  { product: 'Gadget Mini', status: 'In Bearbeitung', statusSeverity: 'warn', date: '24.04.2026', sum: '8.920 €', pieces: 485 },
  { product: 'Sensor X1', status: 'Versendet', statusSeverity: 'secondary', date: '09.05.2026', sum: '6.100 €', pieces: 150 },
  { product: 'System V5', status: 'Bezahlt', statusSeverity: 'info', date: '12.06.2026', sum: '10.250 €', pieces: 2 }
]);
</script>