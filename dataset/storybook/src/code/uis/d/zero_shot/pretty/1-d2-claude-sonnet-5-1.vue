<template>
  <div class="flex min-h-screen bg-white">
    <!-- Sidebar -->
    <div class="w-64 bg-surface-50 p-6 flex flex-col gap-6">
      <span class="text-base text-color">Navigation</span>
      <div class="flex flex-col gap-4">
        <Button label="Dashboard" icon="pi pi-th-large" severity="primary" outlined class="justify-start" />
        <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined class="justify-start" />
        <Button label="Berichte" icon="pi pi-file" severity="secondary" outlined class="justify-start" />
        <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" outlined class="justify-start" />
      </div>
    </div>

    <!-- Main content -->
    <div class="flex-1 p-8">
      <div class="flex flex-col gap-1 mb-6">
        <h1 class="text-3xl font-bold m-0">Dashboard</h1>
        <span class="text-base text-color-secondary">Bekomme eine Übersicht über die Projekte.</span>
      </div>

      <!-- Stat cards -->
      <div class="flex gap-5 mb-6 flex-wrap">
        <Card v-for="stat in stats" :key="stat.label" class="w-48" :pt="{ body: { class: 'p-4' } }">
          <template #content>
            <div class="flex flex-col gap-2">
              <div class="flex flex-col gap-1">
                <span class="text-2xl font-medium">{{ stat.value }}</span>
                <span class="text-sm text-color-secondary">{{ stat.label }}</span>
              </div>
              <Tag :value="stat.change" :severity="stat.severity" />
            </div>
          </template>
        </Card>
      </div>

      <!-- Filter + Export row -->
      <div class="flex gap-5 mb-6 items-start">
        <Accordion :value="'0'" class="flex-1">
          <AccordionPanel value="0">
            <AccordionHeader>Filter</AccordionHeader>
            <AccordionContent>
              <div class="flex gap-5 flex-wrap">
                <div class="flex flex-col gap-2 w-64">
                  <label class="text-sm">Zeitraum</label>
                  <DatePicker v-model="zeitraum" placeholder="Zeitraum wählen" showIcon />
                </div>
                <div class="flex flex-col gap-2 w-64">
                  <label class="text-sm">Status</label>
                  <Select v-model="status" :options="statusOptions" placeholder="Status auswählen" showClear filter />
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm">Zustand</label>
                  <div class="flex items-center gap-4 py-3">
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="aktiv" binary inputId="aktiv" />
                      <label for="aktiv">Aktiv</label>
                    </div>
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="archiv" binary inputId="archiv" />
                      <label for="archiv">Archiv</label>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>

        <div class="flex flex-col gap-2">
          <Button label="Exportieren" icon="pi pi-file-export" iconPos="right" @click="toggleExportPopover" />
          <Popover ref="exportPopover">
            <div class="flex flex-col gap-2 w-44">
              <Button label="Als CSV exportieren" severity="secondary" outlined />
              <Button label="Als PDF exportieren" severity="secondary" outlined />
            </div>
          </Popover>
        </div>
      </div>

      <!-- Data Table -->
      <DataTable :value="products" tableStyle="min-width: 50rem">
        <Column field="name" header="Produkt"></Column>
        <Column field="status" header="Status">
          <template #body="slotProps">
            <Tag :value="slotProps.data.status" :severity="slotProps.data.severity" />
          </template>
        </Column>
        <Column field="date" header="Bestelldatum"></Column>
        <Column field="sum" header="Summe"></Column>
        <Column field="qty" header="Stück"></Column>
        <Column header="Aktionen" style="width: 92px">
          <template #body="slotProps">
            <Button icon="pi pi-ellipsis-h" text severity="secondary" rounded @click="toggleActionPopover($event, slotProps.data)" />
          </template>
        </Column>
      </DataTable>

      <Popover ref="actionPopover">
        <div class="flex flex-col gap-2 w-44">
          <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined />
          <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" outlined />
          <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined />
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

const stats = ref([
  { label: 'Umsatz in €', value: '42.8 Tsd.', change: '+12 %', severity: 'success' },
  { label: 'Bestellungen', value: '1.247', change: '+8 %', severity: 'success' },
  { label: 'Nutzer', value: '3.891', change: '+2 %', severity: 'warn' },
  { label: 'Retouren', value: '89', change: '+23 %', severity: 'danger' }
]);

const zeitraum = ref(null);
const status = ref(null);
const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']);
const aktiv = ref(true);
const archiv = ref(false);

const exportPopover = ref();
const actionPopover = ref();
const selectedProduct = ref(null);

const toggleExportPopover = (event) => {
  exportPopover.value.toggle(event);
};

const toggleActionPopover = (event, data) => {
  selectedProduct.value = data;
  actionPopover.value.toggle(event);
};

const products = ref([
  { name: 'Widget Pro', status: 'Angekommen', severity: 'success', date: '15.04.2026', sum: '12.400 €', qty: '312' },
  { name: 'Gadget Mini', status: 'In Bearbeitung', severity: 'warn', date: '24.04.2026', sum: '8.920 €', qty: '485' },
  { name: 'Sensor X1', status: 'Versendet', severity: 'secondary', date: '09.05.2026', sum: '6.100 €', qty: '150' },
  { name: 'System V5', status: 'Bezahlt', severity: 'info', date: '12.06.2026', sum: '10.250 €', qty: '2' }
]);
</script>