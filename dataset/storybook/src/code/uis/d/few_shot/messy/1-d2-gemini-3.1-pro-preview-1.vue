<template>
  <div class="flex min-h-screen w-full bg-white">
    <!-- Sidebar Navigation -->
    <div class="w-64 bg-slate-50 p-6">
      <h2 class="mb-6 text-base font-normal text-slate-900">Navigation</h2>
      <div class="flex flex-col gap-2">
        <Button
          label="Dashboard"
          icon="pi pi-th-large"
          class="!justify-start !bg-emerald-100 !text-emerald-700 !border-emerald-200"
          outlined
        />
        <Button
          label="Kunden"
          icon="pi pi-users"
          class="!justify-start !text-slate-600 !border-slate-300"
          outlined
        />
        <Button
          label="Berichte"
          icon="pi pi-file"
          class="!justify-start !text-slate-600 !border-slate-300"
          outlined
        />
        <Button
          label="Einstellungen"
          icon="pi pi-cog"
          class="!justify-start !text-slate-600 !border-slate-300"
          outlined
        />
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p class="text-base text-slate-600">Bekomme eine Übersicht über die Projekte.</p>
      </div>

      <!-- Stats Cards -->
      <div class="mb-8 flex gap-6">
        <div class="flex w-48 flex-col gap-2 rounded-xl bg-slate-50 p-4">
          <div class="text-2xl font-medium text-slate-900">42.8 Tsd.</div>
          <div class="text-sm text-slate-600">Umsatz in €</div>
          <Badge value="+12 %" class="!bg-emerald-100 !text-emerald-700 w-fit" />
        </div>
        <div class="flex w-48 flex-col gap-2 rounded-xl bg-slate-50 p-4">
          <div class="text-2xl font-medium text-slate-900">1.247</div>
          <div class="text-sm text-slate-600">Bestellungen</div>
          <Badge value="+8 %" class="!bg-emerald-100 !text-emerald-700 w-fit" />
        </div>
        <div class="flex w-48 flex-col gap-2 rounded-xl bg-slate-50 p-4">
          <div class="text-2xl font-medium text-slate-900">3.891</div>
          <div class="text-sm text-slate-600">Nutzer</div>
          <Badge value="+2 %" class="!bg-orange-100 !text-orange-700 w-fit" />
        </div>
        <div class="flex w-48 flex-col gap-2 rounded-xl bg-slate-50 p-4">
          <div class="text-2xl font-medium text-slate-900">89</div>
          <div class="text-sm text-slate-600">Retouren</div>
          <Badge value="+23 %" class="!bg-red-100 !text-red-700 w-fit" />
        </div>
      </div>

      <!-- Filters and Export -->
      <div class="mb-8 flex items-start gap-6">
        <!-- Filter Panel -->
        <div class="w-[692px] rounded-lg border border-slate-200 bg-slate-50">
          <div class="flex items-center justify-between border-b border-slate-200 p-4">
            <span class="font-semibold text-slate-900">Filter</span>
            <i class="pi pi-chevron-down text-slate-500"></i>
          </div>
          <div class="flex gap-6 p-4">
            <!-- Date Picker -->
            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-600">Zeitraum</label>
              <Calendar
                v-model="dateRange"
                selectionMode="range"
                placeholder="Zeitraum wählen"
                class="w-64"
                :pt="{ root: '!border-emerald-500' }"
              />
            </div>
            <!-- Status Dropdown -->
            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-600">Status</label>
              <Dropdown
                v-model="selectedStatus"
                :options="statusOptions"
                optionLabel="label"
                placeholder="Status auswählen"
                class="w-52"
                :pt="{ root: '!border-emerald-500' }"
              />
            </div>
            <!-- Checkboxes -->
            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-600">Zustand</label>
              <div class="flex items-center gap-4 pt-2">
                <div class="flex items-center gap-2">
                  <Checkbox v-model="isActive" :binary="true" inputId="active" />
                  <label for="active" class="text-sm text-slate-600">Aktiv</label>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox v-model="isArchived" :binary="true" inputId="archived" />
                  <label for="archived" class="text-sm text-slate-600">Archiv</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Export Button -->
        <div class="relative">
          <Button
            label="Exportieren"
            icon="pi pi-file-export"
            iconPos="right"
            class="!bg-emerald-500 !border-emerald-500"
            @click="toggleExportMenu"
            aria-haspopup="true"
            aria-controls="export_menu"
          />
          <Menu ref="exportMenu" id="export_menu" :model="exportOptions" :popup="true" />
        </div>
      </div>

      <!-- Data Table -->
      <DataTable :value="products" class="w-[1008px]">
        <Column field="name" header="Produkt" class="w-96 font-medium"></Column>
        <Column field="status" header="Status" class="w-40">
          <template #body="slotProps">
            <Badge
              :value="slotProps.data.status"
              :class="getStatusBadgeClass(slotProps.data.status)"
            />
          </template>
        </Column>
        <Column field="date" header="Bestelldatum" class="w-32"></Column>
        <Column field="total" header="Summe" class="w-32"></Column>
        <Column field="quantity" header="Stück" class="w-32"></Column>
        <Column header="Aktionen" class="w-24">
          <template #body>
            <Button
              icon="pi pi-ellipsis-h"
              text
              rounded
              aria-haspopup="true"
              aria-controls="action_menu"
              @click="toggleActionMenu"
            />
          </template>
        </Column>
      </DataTable>
      <Menu ref="actionMenu" id="action_menu" :model="actionOptions" :popup="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import Badge from 'primevue/badge';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import Checkbox from 'primevue/checkbox';
import Menu from 'primevue/menu';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const dateRange = ref();
const selectedStatus = ref();
const isActive = ref(true);
const isArchived = ref(false);

const statusOptions = ref([
  { label: 'Bezahlt', value: 'bezahlt' },
  { label: 'In Bearbeitung', value: 'in_bearbeitung' },
  { label: 'Versendet', value: 'versendet' },
  { label: 'Angekommen', value: 'angekommen' }
]);

const exportMenu = ref();
const exportOptions = ref([
  { label: 'Als CSV exportieren', icon: 'pi pi-file-excel' },
  { label: 'Als PDF exportieren', icon: 'pi pi-file-pdf' }
]);

const toggleExportMenu = (event: Event) => {
  exportMenu.value.toggle(event);
};

const actionMenu = ref();
const actionOptions = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-sync' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);

const toggleActionMenu = (event: Event) => {
  actionMenu.value.toggle(event);
};

const products = ref([
  { name: 'Widget Pro', status: 'Angekommen', date: '15.04.2026', total: '12.400 €', quantity: '312' },
  { name: 'Gadget Mini', status: 'In Bearbeitung', date: '24.04.2026', total: '8.920 €', quantity: '485' },
  { name: 'Sensor X1', status: 'Versendet', date: '09.05.2026', total: '6.100 €', quantity: '150' },
  { name: 'System V5', status: 'Bezahlt', date: '12.06.2026', total: '10.250 €', quantity: '2' }
]);

const getStatusBadgeClass = (status: string) => {
  switch (status) {
    case 'Angekommen': return '!bg-emerald-100 !text-emerald-700';
    case 'In Bearbeitung': return '!bg-orange-100 !text-orange-700';
    case 'Versendet': return '!bg-slate-100 !text-slate-700';
    case 'Bezahlt': return '!bg-blue-100 !text-blue-700';
    default: return '!bg-slate-100 !text-slate-700';
  }
};
</script>