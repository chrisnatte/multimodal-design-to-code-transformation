<template>
  <div class="flex min-h-screen w-full bg-white font-sans text-surface-900">
    <!-- Sidebar -->
    <div class="flex w-64 flex-col gap-2 bg-surface-50 p-4">
      <div class="mb-2 px-2 text-sm text-surface-500">Navigation</div>
      <Button
        label="Dashboard"
        icon="pi pi-th-large"
        class="w-full !justify-start !border-none !bg-green-100 !text-green-700"
      />
      <Button
        label="Kunden"
        icon="pi pi-users"
        severity="secondary"
        outlined
        class="w-full !justify-start !bg-transparent"
      />
      <Button
        label="Berichte"
        icon="pi pi-file"
        severity="secondary"
        outlined
        class="w-full !justify-start !bg-transparent"
      />
      <Button
        label="Einstellungen"
        icon="pi pi-cog"
        severity="secondary"
        outlined
        class="w-full !justify-start !bg-transparent"
      />
    </div>

    <!-- Main Content -->
    <div class="flex flex-1 flex-col gap-8 p-8">
      <!-- Header -->
      <div>
        <h1 class="text-3xl font-bold text-surface-900">Dashboard</h1>
        <p class="text-surface-500">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- KPI Cards -->
      <div class="grid grid-cols-4 gap-4">
        <div class="flex flex-col gap-2 rounded-xl bg-surface-50 p-5">
          <div class="text-2xl font-semibold">42.8 Tsd.</div>
          <div class="text-sm text-surface-500">Umsatz in €</div>
          <Tag value="+12 %" severity="success" class="w-fit !bg-green-100 !text-green-700" />
        </div>
        <div class="flex flex-col gap-2 rounded-xl bg-surface-50 p-5">
          <div class="text-2xl font-semibold">1.247</div>
          <div class="text-sm text-surface-500">Bestellungen</div>
          <Tag value="+8 %" severity="success" class="w-fit !bg-green-100 !text-green-700" />
        </div>
        <div class="flex flex-col gap-2 rounded-xl bg-surface-50 p-5">
          <div class="text-2xl font-semibold">3.891</div>
          <div class="text-sm text-surface-500">Nutzer</div>
          <Tag value="+2 %" severity="warn" class="w-fit !bg-orange-100 !text-orange-700" />
        </div>
        <div class="flex flex-col gap-2 rounded-xl bg-surface-50 p-5">
          <div class="text-2xl font-semibold">89</div>
          <div class="text-sm text-surface-500">Retouren</div>
          <Tag value="+23 %" severity="danger" class="w-fit !bg-red-100 !text-red-700" />
        </div>
      </div>

      <!-- Filter & Export -->
      <div class="flex items-start justify-between gap-4">
        <Panel header="Filter" toggleable class="flex-1 !border-none !bg-surface-50">
          <div class="flex gap-8 pt-4">
            <div class="flex flex-col gap-2">
              <label class="text-sm text-surface-700">Zeitraum</label>
              <DatePicker v-model="date" placeholder="Zeitraum wählen" class="w-56" />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-surface-700">Status</label>
              <Select
                v-model="selectedStatus"
                :options="statuses"
                placeholder="Status auswählen"
                class="w-56"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-surface-700">Zustand</label>
              <div class="mt-2 flex gap-4">
                <div class="flex items-center gap-2">
                  <Checkbox v-model="isAktiv" inputId="aktiv" binary />
                  <label for="aktiv" class="text-sm">Aktiv</label>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox v-model="isArchiv" inputId="archiv" binary />
                  <label for="archiv" class="text-sm">Archiv</label>
                </div>
              </div>
            </div>
          </div>
        </Panel>

        <div class="flex flex-col gap-2">
          <Button
            label="Exportieren"
            icon="pi pi-file-export"
            class="!bg-emerald-500 !border-emerald-500 hover:!bg-emerald-600"
            @click="toggleExportMenu"
            aria-haspopup="true"
            aria-controls="export_menu"
          />
          <Menu ref="exportMenu" id="export_menu" :model="exportItems" popup />
        </div>
      </div>

      <!-- Data Table -->
      <DataTable :value="products" class="w-full">
        <Column field="name" header="Produkt" class="w-[20%]" />
        <Column field="status" header="Status" class="w-[20%]">
          <template #body="{ data }">
            <Tag
              :value="data.status"
              :class="getStatusClass(data.status)"
              class="!font-medium"
            />
          </template>
        </Column>
        <Column field="date" header="Bestelldatum" class="w-[20%]" />
        <Column field="total" header="Summe" class="w-[15%]" />
        <Column field="quantity" header="Stück" class="w-[15%]" />
        <Column header="Aktionen" class="w-[10%] text-center">
          <template #body="{ data }">
            <Button
              icon="pi pi-ellipsis-h"
              text
              rounded
              severity="secondary"
              @click="toggleActionMenu($event, data)"
              aria-haspopup="true"
              aria-controls="action_menu"
            />
          </template>
        </Column>
      </DataTable>
      <Menu ref="actionMenu" id="action_menu" :model="actionItems" popup />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import Panel from 'primevue/panel';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';
import Menu from 'primevue/menu';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

// Filter State
const date = ref();
const selectedStatus = ref();
const statuses = ref(['Bezahlt', 'In Bearbeitung', 'Versendet', 'Angekommen']);
const isAktiv = ref(true);
const isArchiv = ref(false);

// Export Menu
const exportMenu = ref();
const exportItems = ref([
  { label: 'Als CSV exportieren' },
  { label: 'Als PDF exportieren' }
]);

const toggleExportMenu = (event: Event) => {
  exportMenu.value.toggle(event);
};

// Action Menu
const actionMenu = ref();
const selectedProduct = ref();
const actionItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);

const toggleActionMenu = (event: Event, data: any) => {
  selectedProduct.value = data;
  actionMenu.value.toggle(event);
};

// Table Data
const products = ref([
  {
    name: 'Widget Pro',
    status: 'Angekommen',
    date: '15.04.2026',
    total: '12.400 €',
    quantity: 312
  },
  {
    name: 'Gadget Mini',
    status: 'In Bearbeitung',
    date: '24.04.2026',
    total: '8.920 €',
    quantity: 485
  },
  {
    name: 'Sensor X1',
    status: 'Versendet',
    date: '09.05.2026',
    total: '6.100 €',
    quantity: 150
  },
  {
    name: 'System V5',
    status: 'Bezahlt',
    date: '12.06.2026',
    total: '10.250 €',
    quantity: 2
  }
]);

// Helper for Tag colors based on mockup
const getStatusClass = (status: string) => {
  switch (status) {
    case 'Angekommen':
      return '!bg-green-100 !text-green-700';
    case 'In Bearbeitung':
      return '!bg-orange-100 !text-orange-700';
    case 'Versendet':
      return '!bg-purple-100 !text-purple-700';
    case 'Bezahlt':
      return '!bg-blue-100 !text-blue-700';
    default:
      return '';
  }
};
</script>