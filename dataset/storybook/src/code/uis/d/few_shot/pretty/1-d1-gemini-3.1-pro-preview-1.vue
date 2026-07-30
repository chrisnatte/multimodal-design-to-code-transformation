<template>
  <div class="flex min-h-screen w-full bg-white font-sans text-slate-800">
    <!-- Sidebar Navigation -->
    <div class="flex w-64 flex-col gap-6 bg-[#F4F6F9] p-6">
      <div class="text-base text-slate-600">Navigation</div>
      <div class="flex flex-col gap-4">
        <Button
          label="Dashboard"
          icon="pi pi-objects-column"
          severity="primary"
          class="w-full !justify-start"
        />
        <Button
          label="Kunden"
          icon="pi pi-users"
          severity="secondary"
          outlined
          class="w-full !justify-start bg-white"
        />
        <Button
          label="Berichte"
          icon="pi pi-file"
          severity="secondary"
          outlined
          class="w-full !justify-start bg-white"
        />
        <Button
          label="Einstellungen"
          icon="pi pi-cog"
          severity="secondary"
          outlined
          class="w-full !justify-start bg-white"
        />
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex flex-1 flex-col gap-8 p-16">
      <!-- Header -->
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p class="text-base text-slate-500">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Stats Cards -->
      <div class="flex gap-5">
        <div class="flex w-48 flex-col gap-2 rounded-xl bg-[#F4F6F9] p-4">
          <div class="text-2xl font-medium text-slate-900">42.8 Tsd.</div>
          <div class="text-sm text-slate-500">Umsatz in €</div>
          <Tag value="+12 %" class="w-fit !bg-[#D1FAE5] !text-[#065F46]" />
        </div>
        <div class="flex w-48 flex-col gap-2 rounded-xl bg-[#F4F6F9] p-4">
          <div class="text-2xl font-medium text-slate-900">1.247</div>
          <div class="text-sm text-slate-500">Bestellungen</div>
          <Tag value="+8 %" class="w-fit !bg-[#D1FAE5] !text-[#065F46]" />
        </div>
        <div class="flex w-48 flex-col gap-2 rounded-xl bg-[#F4F6F9] p-4">
          <div class="text-2xl font-medium text-slate-900">3.891</div>
          <div class="text-sm text-slate-500">Nutzer</div>
          <Tag value="+2 %" class="w-fit !bg-[#FFEDD5] !text-[#9A3412]" />
        </div>
        <div class="flex w-48 flex-col gap-2 rounded-xl bg-[#F4F6F9] p-4">
          <div class="text-2xl font-medium text-slate-900">89</div>
          <div class="text-sm text-slate-500">Retouren</div>
          <Tag value="+23 %" class="w-fit !bg-[#FEE2E2] !text-[#991B1B]" />
        </div>
      </div>

      <!-- Filters & Actions -->
      <div class="flex items-start gap-4">
        <Accordion value="0" class="w-[700px]">
          <AccordionPanel value="0" class="!border-none !bg-[#F4F6F9]">
            <AccordionHeader class="!bg-[#F4F6F9] !p-4">
              <span class="font-semibold text-slate-800">Filter</span>
            </AccordionHeader>
            <AccordionContent class="!bg-[#F4F6F9] !p-4 !pt-0">
              <div class="flex gap-5">
                <div class="flex flex-col gap-2">
                  <label class="text-sm text-slate-700">Zeitraum</label>
                  <DatePicker
                    v-model="dateRange"
                    selectionMode="range"
                    placeholder="Zeitraum wählen"
                    class="w-56"
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm text-slate-700">Status</label>
                  <Select
                    v-model="selectedStatus"
                    :options="statusOptions"
                    placeholder="Status auswählen"
                    class="w-56"
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-sm text-slate-700">Zustand</label>
                  <div class="flex h-10 items-center gap-4">
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="isActive" inputId="active" binary />
                      <label for="active" class="text-sm text-slate-700">Aktiv</label>
                    </div>
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="isArchive" inputId="archive" binary />
                      <label for="archive" class="text-sm text-slate-700">Archiv</label>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>

        <Button
          label="Exportieren"
          icon="pi pi-file-export"
          iconPos="right"
          severity="primary"
          @click="toggleExportMenu"
        />
        <Menu ref="exportMenu" :model="exportMenuOptions" popup />
      </div>

      <!-- DataTable -->
      <div class="w-full max-w-[1008px]">
        <DataTable :value="products" class="w-full">
          <Column field="produkt" header="Produkt" class="w-[384px]"></Column>
          <Column field="status" header="Status" class="w-[160px]">
            <template #body="{ data }">
              <Tag
                :value="data.status"
                :severity="getStatusSeverity(data.status)"
                :class="getStatusTagClass(data.status)"
              />
            </template>
          </Column>
          <Column field="bestelldatum" header="Bestelldatum" class="w-[124px]"></Column>
          <Column field="summe" header="Summe" class="w-[124px]"></Column>
          <Column field="stueck" header="Stück" class="w-[124px]"></Column>
          <Column header="Aktionen" class="w-[92px]">
            <template #body="{ data }">
              <Button
                icon="pi pi-ellipsis-h"
                severity="secondary"
                text
                rounded
                @click="toggleActionMenu($event, data)"
              />
            </template>
          </Column>
        </DataTable>
        <Menu ref="actionMenu" :model="actionMenuOptions" popup />
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
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Menu from 'primevue/menu';

// Filter State
const dateRange = ref(null);
const selectedStatus = ref(null);
const statusOptions = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']);
const isActive = ref(true);
const isArchive = ref(false);

// Export Menu
const exportMenu = ref(null);
const exportMenuOptions = ref([
  { label: 'Als CSV exportieren', icon: 'pi pi-file-excel' },
  { label: 'Als PDF exportieren', icon: 'pi pi-file-pdf' }
]);
const toggleExportMenu = (event) => {
  exportMenu.value.toggle(event);
};

// Action Menu
const actionMenu = ref(null);
const selectedProduct = ref(null);
const actionMenuOptions = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
  { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);
const toggleActionMenu = (event, data) => {
  selectedProduct.value = data;
  actionMenu.value.toggle(event);
};

// Table Data
const products = ref([
  {
    produkt: 'Widget Pro',
    status: 'Angekommen',
    bestelldatum: '15.04.2026',
    summe: '12.400 €',
    stueck: 312
  },
  {
    produkt: 'Gadget Mini',
    status: 'In Bearbeitung',
    bestelldatum: '24.04.2026',
    summe: '8.920 €',
    stueck: 485
  },
  {
    produkt: 'Sensor X1',
    status: 'Versendet',
    bestelldatum: '09.05.2026',
    summe: '6.100 €',
    stueck: 150
  },
  {
    produkt: 'System V5',
    status: 'Bezahlt',
    bestelldatum: '12.06.2026',
    summe: '10.250 €',
    stueck: 2
  }
]);

// Helpers
const getStatusSeverity = (status) => {
  switch (status) {
    case 'Angekommen':
      return 'success';
    case 'In Bearbeitung':
      return 'warn';
    case 'Versendet':
      return 'secondary';
    case 'Bezahlt':
      return 'info';
    default:
      return 'info';
  }
};

const getStatusTagClass = (status) => {
  switch (status) {
    case 'Angekommen':
      return '!bg-[#D1FAE5] !text-[#065F46]';
    case 'In Bearbeitung':
      return '!bg-[#FFEDD5] !text-[#9A3412]';
    case 'Versendet':
      return '!bg-[#F1F5F9] !text-[#475569]';
    case 'Bezahlt':
      return '!bg-[#E0F2FE] !text-[#0369A1]';
    default:
      return '';
  }
};
</script>