<template>
  <div class="min-h-screen bg-white p-8 font-sans text-slate-800">
    <!-- Header Section -->
    <div class="mb-6 flex items-start gap-4">
      <Button
        icon="pi pi-arrow-left"
        rounded
        outlined
        class="h-12 w-12 shrink-0 border-slate-200 text-slate-500 hover:bg-slate-50"
      />
      <div class="flex flex-col gap-1">
        <h1 class="m-0 text-3xl font-bold text-slate-800">Projektaufgaben</h1>
        <p class="m-0 text-base text-slate-500">
          Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.
        </p>
      </div>
    </div>

    <!-- Breadcrumb -->
    <Breadcrumb
      :model="breadcrumbItems"
      :home="breadcrumbHome"
      class="mb-8 border-none bg-transparent p-0 text-sm text-slate-500"
    />

    <!-- Filters -->
    <div class="mb-6 flex items-end gap-6">
      <div class="flex flex-col gap-2">
        <label class="text-sm font-medium text-slate-600">Suche</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-search text-slate-400" />
          <InputText
            v-model="searchQuery"
            placeholder="Suche..."
            class="w-64 border-slate-200"
          />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm font-medium text-slate-600">Status</label>
        <Select
          v-model="selectedStatus"
          :options="statusOptions"
          placeholder="Status auswählen"
          class="w-64 border-slate-200"
        />
      </div>
    </div>

    <!-- Data Table -->
    <DataTable
      :value="tasks"
      v-model:selection="selectedTasks"
      dataKey="id"
      class="w-full"
      :pt="{
        headerRow: 'border-b border-slate-200 bg-white',
        row: 'border-b border-slate-100 hover:bg-slate-50',
      }"
    >
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="name" header="Aufgabe" class="py-4">
        <template #body="{ data }">
          <span class="font-medium text-slate-800">{{ data.name }}</span>
        </template>
      </Column>
      <Column field="assignee" header="Verantwortlicher" class="py-4">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar
              :label="data.assignee.initials"
              shape="circle"
              class="h-8 w-8 bg-slate-200 text-sm font-medium text-slate-700"
            />
            <span class="text-slate-600">{{ data.assignee.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="progress" header="Status" class="py-4">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <ProgressBar
              :value="data.progress"
              :showValue="false"
              class="h-1.5 w-32 bg-slate-100"
              :pt="{
                value: { style: { backgroundColor: data.progressColor } },
              }"
            />
            <span class="w-8 text-xs text-slate-500">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status" class="py-4">
        <template #body="{ data }">
          <Tag
            :value="data.status.label"
            :class="['rounded-md px-2.5 py-1 text-xs font-bold', data.status.class]"
          />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig" class="py-4">
        <template #body="{ data }">
          <span :class="data.isOverdue ? 'text-red-500' : 'text-slate-600'">
            {{ data.dueDate }}
          </span>
        </template>
      </Column>
      <Column header="Aktionen" class="py-4 text-right">
        <template #body="{ data, event }">
          <Button
            icon="pi pi-ellipsis-h"
            text
            rounded
            class="h-8 w-8 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
            @click="toggleMenu($event, data)"
          />
        </template>
      </Column>
    </DataTable>

    <!-- Action Menu -->
    <Menu ref="actionMenu" :model="menuItems" :popup="true" class="w-48" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Breadcrumb from 'primevue/breadcrumb';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Avatar from 'primevue/avatar';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';
import Menu from 'primevue/menu';

// Breadcrumb State
const breadcrumbHome = ref({ icon: 'pi pi-home' });
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' },
]);

// Filter State
const searchQuery = ref('');
const selectedStatus = ref(null);
const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig']);

// Table Data State
const tasks = ref([
  {
    id: 1,
    name: 'Webseite Relaunch',
    assignee: { initials: 'M', name: 'Max Mustermann' },
    progress: 100,
    progressColor: '#10b981', // Emerald
    status: { label: 'Fertig', class: 'bg-emerald-100 text-emerald-600' },
    dueDate: '03.06.2026',
    isOverdue: false,
  },
  {
    id: 2,
    name: 'Mobile App',
    assignee: { initials: 'A', name: 'Anna Schmidt' },
    progress: 45,
    progressColor: '#10b981', // Emerald
    status: { label: 'In Arbeit', class: 'bg-orange-100 text-orange-600' },
    dueDate: '10.06.2026',
    isOverdue: false,
  },
  {
    id: 3,
    name: 'Marketing Kampagne',
    assignee: { initials: 'L', name: 'Lisa Weber' },
    progress: 0,
    progressColor: '#e2e8f0', // Slate
    status: { label: 'Offen', class: 'bg-blue-100 text-blue-600' },
    dueDate: '18.05.2026',
    isOverdue: false,
  },
  {
    id: 4,
    name: 'API Migration',
    assignee: { initials: 'P', name: 'Paul Müller' },
    progress: 72,
    progressColor: '#10b981', // Emerald
    status: { label: 'Blockiert', class: 'bg-red-100 text-red-600' },
    dueDate: '12.05.2026',
    isOverdue: true,
  },
]);

// Pre-select the first row as shown in the mockup
const selectedTasks = ref([tasks.value[0]]);

// Action Menu State
const actionMenu = ref(null);
const selectedRowData = ref(null);

const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' },
]);

const toggleMenu = (event, data) => {
  selectedRowData.value = data;
  actionMenu.value.toggle(event);
};
</script>