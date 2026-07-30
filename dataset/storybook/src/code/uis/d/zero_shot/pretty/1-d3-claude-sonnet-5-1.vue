<template>
  <div class="flex min-h-screen bg-white">
    <!-- Sidebar -->
    <div class="w-64 bg-surface-100 p-6 flex flex-col gap-6">
      <span class="text-base text-surface-700">Navigation</span>
      <div class="flex flex-col gap-4">
        <Button label="Dashboard" icon="pi pi-th-large" outlined class="!justify-start !bg-primary-100 !border-primary-300 !text-primary-700" />
        <Button label="Kunden" icon="pi pi-users" severity="secondary" outlined class="!justify-start" />
        <Button label="Berichte" icon="pi pi-file" severity="secondary" outlined class="!justify-start" />
        <Button label="Einstellungen" icon="pi pi-cog" severity="secondary" outlined class="!justify-start" />
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-8">
      <div class="mb-6">
        <h1 class="text-3xl font-bold text-surface-900 m-0">Dashboard</h1>
        <p class="text-base text-surface-600 mt-1">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- KPI Cards -->
      <div class="flex gap-5 mb-6">
        <div v-for="stat in stats" :key="stat.label" class="bg-surface-100 rounded-xl p-4" style="width: 192px">
          <div class="flex flex-col gap-2">
            <span class="text-2xl font-medium text-surface-900">{{ stat.value }}</span>
            <span class="text-sm text-surface-600">{{ stat.label }}</span>
          </div>
          <div class="mt-2">
            <Tag :value="stat.change" :severity="stat.severity" />
          </div>
        </div>
      </div>

      <!-- Filter + Export Row -->
      <div class="flex gap-5 items-start mb-6">
        <div class="flex-1">
          <Accordion value="0">
            <AccordionPanel value="0">
              <AccordionHeader>Filter</AccordionHeader>
              <AccordionContent>
                <div class="flex gap-5 flex-wrap">
                  <div class="flex flex-col gap-2" style="width: 268px">
                    <label class="text-sm">Zeitraum</label>
                    <DatePicker v-model="dateRange" placeholder="Zeitraum wählen" showIcon inline class="w-full" />
                  </div>
                  <div class="flex flex-col gap-2" style="width: 216px">
                    <label class="text-sm">Status</label>
                    <Select v-model="status" :options="statusOptions" filter placeholder="Status auswählen" class="w-full" />
                  </div>
                  <div class="flex flex-col gap-2">
                    <label class="text-sm">Zustand</label>
                    <div class="flex items-center gap-4 py-3">
                      <div class="flex items-center gap-2">
                        <Checkbox v-model="aktiv" binary inputId="aktiv" />
                        <label for="aktiv" class="text-sm">Aktiv</label>
                      </div>
                      <div class="flex items-center gap-2">
                        <Checkbox v-model="archiv" binary inputId="archiv" />
                        <label for="archiv" class="text-sm">Archiv</label>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </div>

        <div class="flex flex-col items-end gap-0">
          <Button label="Exportieren" icon="pi pi-file-export" iconPos="right" @click="toggleExportPopover" />
          <Popover ref="exportPopover">
            <div class="flex flex-col gap-2" style="width: 169px">
              <Button label="Als CSV exportieren" severity="secondary" outlined />
              <Button label="Als PDF exportieren" severity="secondary" outlined />
            </div>
          </Popover>
        </div>
      </div>

      <!-- Data Table -->
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
            <Button icon="pi pi-ellipsis-h" text severity="secondary" @click="(e) => toggleActionsPopover(e, slotProps.data)" />
          </template>
        </Column>
      </DataTable>

      <Popover ref="actionsPopover">
        <div class="flex flex-col gap-2" style="width: 177px">
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

const dateRange = ref(null);
const status = ref(null);
const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']);
const aktiv = ref(true);
const archiv = ref(false);

const exportPopover = ref();
const toggleExportPopover = (event) => {
  exportPopover.value.toggle(event);
};

const actionsPopover = ref();
const toggleActionsPopover = (event) => {
  actionsPopover.value.toggle(event);
};

const products = ref([
  { product: 'Widget Pro', status: 'Angekommen', statusSeverity: 'success', date: '15.04.2026', sum: '12.400 €', qty: '312' },
  { product: 'Gadget Mini', status: 'In Bearbeitung', statusSeverity: 'warn', date: '24.04.2026', sum: '8.920 €', qty: '485' },
  { product: 'Sensor X1', status: 'Versendet', statusSeverity: 'secondary', date: '09.05.2026', sum: '6.100 €', qty: '150' },
  { product: 'System V5', status: 'Bezahlt', statusSeverity: 'info', date: '12.06.2026', sum: '10.250 €', qty: '2' }
]);
</script>