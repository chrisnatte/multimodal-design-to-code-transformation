<template>
  <div class="flex flex-col p-8 bg-white min-h-screen font-sans">
    <!-- Header Section -->
    <div class="flex items-center gap-4 mb-2">
      <Button
        icon="pi pi-arrow-left"
        rounded
        text
        severity="secondary"
        class="!w-10 !h-10 border border-surface-300 text-surface-600"
      />
      <div>
        <h1 class="text-2xl font-bold text-surface-900 m-0">Projektaufgaben</h1>
        <p class="text-surface-500 m-0 text-sm mt-1">
          Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.
        </p>
      </div>
    </div>

    <!-- Breadcrumb -->
    <Breadcrumb
      :home="breadcrumbHome"
      :model="breadcrumbItems"
      class="mb-8 !bg-transparent !p-0 !border-none text-sm"
      :pt="{
        root: { class: 'text-surface-500' },
        action: { class: 'text-surface-500 hover:text-surface-700' },
        separator: { class: 'text-surface-400 mx-2' }
      }"
    />

    <!-- Filters -->
    <div class="flex gap-6 mb-6">
      <div class="flex flex-col gap-2">
        <label class="text-sm text-surface-700">Suche</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-search text-surface-400" />
          <InputText v-model="searchQuery" placeholder="Suche..." class="w-64" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-surface-700">Status</label>
        <Select
          v-model="selectedStatus"
          :options="statusOptions"
          placeholder="Status auswählen"
          class="w-64"
        />
      </div>
    </div>

    <!-- Data Table -->
    <DataTable
      v-model:selection="selectedTasks"
      :value="tasks"
      dataKey="id"
      class="w-full"
      :pt="{
        headerRow: { class: 'bg-transparent' },
        headerCell: { class: 'bg-transparent text-surface-600 font-medium border-b border-surface-200 pb-3' },
        bodyRow: { class: 'border-b border-surface-100' },
        bodyCell: { class: 'py-4' }
      }"
    >
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="name" header="Aufgabe" class="font-medium text-surface-900"></Column>
      <Column header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar
              :label="data.assigneeInitials"
              shape="circle"
              class="bg-surface-100 text-surface-600 text-sm font-medium"
            />
            <span class="text-surface-700">{{ data.assignee }}</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-3 w-48">
            <ProgressBar
              :value="data.progress"
              :showValue="false"
              class="h-1.5 w-full bg-surface-200"
              :pt="{ value: { class: 'bg-primary-500' } }"
            />
            <span class="text-sm text-surface-600 w-12 text-right">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getSeverity(data.status)" rounded />
        </template>
      </Column>
      <Column header="Fällig">
        <template #body="{ data }">
          <span :class="[data.isOverdue ? 'text-red-500' : 'text-surface-700']">
            {{ data.dueDate }}
          </span>
        </template>
      </Column>
      <Column header="Aktionen" headerStyle="width: 5rem" bodyStyle="text-align: center">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            text
            rounded
            severity="secondary"
            @click="toggleMenu($event, data)"
            aria-haspopup="true"
            aria-controls="overlay_menu"
            class="text-surface-500 hover:bg-surface-100"
          />
        </template>
      </Column>
    </DataTable>

    <!-- Action Menu -->
    <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" class="w-48" />
  </div>
</template>

<script setup lang="ts">
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
  { label: 'Aufgaben' }
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
    assignee: 'Max Mustermann',
    assigneeInitials: 'M',
    progress: 100,
    status: 'Fertig',
    dueDate: '03.06.2026',
    isOverdue: false
  },
  {
    id: 2,
    name: 'Mobile App',
    assignee: 'Anna Schmidt',
    assigneeInitials: 'A',
    progress: 45,
    status: 'In Arbeit',
    dueDate: '10.06.2026',
    isOverdue: false
  },
  {
    id: 3,
    name: 'Marketing Kampagne',
    assignee: 'Lisa Weber',
    assigneeInitials: 'L',
    progress: 0,
    status: 'Offen',
    dueDate: '18.05.2026',
    isOverdue: false
  },
  {
    id: 4,
    name: 'API Migration',
    assignee: 'Paul Müller',
    assigneeInitials: 'P',
    progress: 72,
    status: 'Blockiert',
    dueDate: '12.05.2026',
    isOverdue: true
  }
]);

// Pre-select the first row to match mockup
const selectedTasks = ref([tasks.value[0]]);

// Menu State
const menu = ref();
const activeTask = ref(null);
const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-file-edit' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);

const toggleMenu = (event: Event, task: any) => {
  activeTask.value = task;
  menu.value.toggle(event);
};

// Helper for Tag Severity
const getSeverity = (status: string) => {
  switch (status) {
    case 'Fertig':
      return 'success';
    case 'In Arbeit':
      return 'warn';
    case 'Offen':
      return 'info';
    case 'Blockiert':
      return 'danger';
    default:
      return 'secondary';
  }
};
</script>