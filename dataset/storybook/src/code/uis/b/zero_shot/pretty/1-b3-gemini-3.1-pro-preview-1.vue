<template>
  <div class="flex h-screen w-full bg-white font-sans">
    <!-- Sidebar -->
    <div class="w-64 bg-surface-50 p-6 flex flex-col gap-6 shrink-0 border-r border-surface-200">
      <div class="text-surface-900 font-normal text-base">Navigation</div>
      <div class="flex flex-col gap-4">
        <Button label="Dashboard" icon="pi pi-th-large" variant="outlined" severity="primary" class="w-full justify-start" />
        <Button label="Kunden" icon="pi pi-users" variant="outlined" severity="secondary" class="w-full justify-start" />
        <Button label="Berichte" icon="pi pi-file" variant="outlined" severity="secondary" class="w-full justify-start" />
        <Button label="Einstellungen" icon="pi pi-cog" variant="outlined" severity="secondary" class="w-full justify-start" />
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col p-16 gap-10 overflow-y-auto">
      <!-- Header & Export -->
      <div class="flex justify-between items-start">
        <div class="flex flex-col gap-1">
          <h1 class="text-3xl font-bold text-surface-900 m-0">Dashboard</h1>
          <p class="text-base font-normal text-surface-600 m-0">Bekomme eine Übersicht über die Projekte.</p>
        </div>
        <div>
          <Button label="Exportieren" icon="pi pi-file-export" iconPos="right" @click="toggleExport" />
          <Popover ref="exportPopover">
            <div class="flex flex-col gap-2 w-48 p-2">
              <Button label="Als CSV exportieren" icon="pi pi-file-excel" variant="outlined" severity="secondary" class="w-full justify-start" />
              <Button label="Als PDF exportieren" icon="pi pi-file-pdf" variant="outlined" severity="secondary" class="w-full justify-start" />
            </div>
          </Popover>
        </div>
      </div>

      <!-- Cards -->
      <div class="flex gap-5">
        <Card class="flex-1 bg-surface-50 shadow-none border border-surface-200">
          <template #content>
            <div class="flex flex-col gap-6">
              <div class="flex flex-col gap-2">
                <span class="text-2xl font-medium text-surface-900">42.8 Tsd.</span>
                <span class="text-sm font-normal text-surface-600">Umsatz in €</span>
              </div>
              <div>
                <Tag value="+12 %" severity="success" />
              </div>
            </div>
          </template>
        </Card>
        <Card class="flex-1 bg-surface-50 shadow-none border border-surface-200">
          <template #content>
            <div class="flex flex-col gap-6">
              <div class="flex flex-col gap-2">
                <span class="text-2xl font-medium text-surface-900">1.247</span>
                <span class="text-sm font-normal text-surface-600">Bestellungen</span>
              </div>
              <div>
                <Tag value="+8 %" severity="success" />
              </div>
            </div>
          </template>
        </Card>
        <Card class="flex-1 bg-surface-50 shadow-none border border-surface-200">
          <template #content>
            <div class="flex flex-col gap-6">
              <div class="flex flex-col gap-2">
                <span class="text-2xl font-medium text-surface-900">3.891</span>
                <span class="text-sm font-normal text-surface-600">Nutzer</span>
              </div>
              <div>
                <Tag value="+2 %" severity="warn" />
              </div>
            </div>
          </template>
        </Card>
        <Card class="flex-1 bg-surface-50 shadow-none border border-surface-200">
          <template #content>
            <div class="flex flex-col gap-6">
              <div class="flex flex-col gap-2">
                <span class="text-2xl font-medium text-surface-900">89</span>
                <span class="text-sm font-normal text-surface-600">Retouren</span>
              </div>
              <div>
                <Tag value="+23 %" severity="danger" />
              </div>
            </div>
          </template>
        </Card>
      </div>

      <!-- Accordion Filter -->
      <Accordion value="0">
        <AccordionPanel value="0">
          <AccordionHeader>Filter</AccordionHeader>
          <AccordionContent>
            <div class="flex gap-5 items-end pt-2">
              <div class="flex flex-col gap-2 w-64">
                <label class="text-sm text-surface-900">Zeitraum</label>
                <DatePicker v-model="date" placeholder="Zeitraum wählen" class="w-full" />
              </div>
              <div class="flex flex-col gap-2 w-56">
                <label class="text-sm text-surface-900">Status</label>
                <Select v-model="selectedStatus" :options="statuses" placeholder="Status auswählen" class="w-full" />
              </div>
              <div class="flex flex-col gap-3 ml-4 pb-2">
                <span class="text-sm text-surface-900">Zustand</span>
                <div class="flex gap-4">
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="active" inputId="aktiv" binary />
                    <label for="aktiv" class="text-sm cursor-pointer">Aktiv</label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox v-model="archive" inputId="archiv" binary />
                    <label for="archiv" class="text-sm cursor-pointer">Archiv</label>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>

      <!-- DataTable -->
      <DataTable :value="products" class="w-full border border-surface-200 rounded-lg overflow-hidden">
        <Column field="name" header="Produkt" class="w-1/4"></Column>
        <Column field="status" header="Status">
          <template #body="slotProps">
            <Tag :value="slotProps.data.status" :severity="slotProps.data.statusSeverity" />
          </template>
        </Column>
        <Column field="date" header="Bestelldatum"></Column>
        <Column field="sum" header="Summe"></Column>
        <Column field="pieces" header="Stück"></Column>
        <Column header="Aktionen" class="w-24 text-center">
          <template #body="slotProps">
            <Button icon="pi pi-ellipsis-h" variant="text" severity="secondary" rounded @click="toggleAction($event, slotProps.data)" />
          </template>
        </Column>
      </DataTable>

      <Popover ref="actionPopover">
        <div class="flex flex-col gap-2 w-48 p-2">
          <Button label="Bearbeiten" icon="pi pi-file-edit" variant="outlined" severity="secondary" class="w-full justify-start" />
          <Button label="Status aktualisieren" icon="pi pi-check-square" variant="outlined" severity="secondary" class="w-full justify-start" />
          <Button label="Löschen" icon="pi pi-trash" variant="outlined" severity="secondary" class="w-full justify-start" />
        </div>
      </Popover>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import Popover from 'primevue/popover';

const exportPopover = ref();
const actionPopover = ref();

const toggleExport = (event) => {
  exportPopover.value.toggle(event);
};

const toggleAction = (event, data) => {
  actionPopover.value.toggle(event);
};

const date = ref();
const selectedStatus = ref();
const statuses = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']);
const active = ref(true);
const archive = ref(false);

const products = ref([
  { name: 'Widget Pro', status: 'Angekommen', statusSeverity: 'success', date: '15.04.2026', sum: '12.400 €', pieces: 312 },
  { name: 'Gadget Mini', status: 'In Bearbeitung', statusSeverity: 'warn', date: '24.04.2026', sum: '8.920 €', pieces: 485 },
  { name: 'Sensor X1', status: 'Versendet', statusSeverity: 'secondary', date: '09.05.2026', sum: '6.100 €', pieces: 150 },
  { name: 'System V5', status: 'Bezahlt', statusSeverity: 'info', date: '12.06.2026', sum: '10.250 €', pieces: 2 }
]);
</script>