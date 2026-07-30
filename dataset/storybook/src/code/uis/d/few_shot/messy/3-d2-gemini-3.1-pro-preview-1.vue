<template>
  <div class="min-h-screen bg-white p-8 font-sans text-slate-800">
    <!-- Header Section -->
    <div class="mb-8 flex items-start gap-4">
      <Button
        icon="pi pi-arrow-left"
        rounded
        text
        severity="secondary"
        class="mt-1 !h-10 !w-10 !bg-slate-100 !text-slate-600 hover:!bg-slate-200"
      />
      <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-bold text-slate-900">Projektaufgaben</h1>
        <p class="text-base text-slate-600">
          Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.
        </p>
        <Breadcrumb
          :home="breadcrumbHome"
          :model="breadcrumbItems"
          class="!border-none !bg-transparent !p-0 text-sm text-slate-500"
          :pt="{
            root: { class: 'mt-2' },
            action: { class: '!text-slate-500 hover:!text-slate-700' },
            separator: { class: '!text-slate-400' },
          }"
        />
      </div>
    </div>

    <!-- Filters Section -->
    <div class="mb-6 flex items-end gap-6">
      <div class="flex flex-col gap-2">
        <label class="text-sm font-semibold text-slate-700">Suche</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-search text-slate-400" />
          <InputText
            v-model="searchQuery"
            placeholder="Suche..."
            class="w-64 !border-slate-200"
          />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm font-semibold text-slate-700">Status</label>
        <Select
          v-model="selectedStatus"
          :options="statusOptions"
          placeholder="Status auswählen"
          class="w-64 !border-slate-200"
        />
      </div>
    </div>

    <!-- Data Table Section -->
    <DataTable
      v-model:selection="selectedTasks"
      :value="tasks"
      dataKey="id"
      class="border-t border-slate-200"
      :pt="{
        thead: { class: 'bg-transparent' },
        headerRow: { class: '!bg-transparent' },
        headerCell: {
          class:
            '!bg-transparent !border-b !border-slate-200 !text-slate-700 !font-semibold !py-4',
        },
        bodyRow: { class: '!border-b !border-slate-100 hover:!bg-slate-50' },
        bodyCell: { class: '!py-4 !border-none' },
      }"
    >
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="name" header="Aufgabe" class="font-medium text-slate-800"></Column>
      <Column field="assignee" header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar
              :label="data.assignee.initials"
              shape="circle"
              class="!bg-slate-200 !text-sm !font-medium !text-slate-700"
            />
            <span class="text-sm text-slate-700">{{ data.assignee.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="progress" header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-4">
            <ProgressBar
              :value="data.progress"
              :showValue="false"
              class="!h-1.5 w-32 !bg-slate-200"
              :pt="{
                value: {
                  class: data.progress > 0 ? '!bg-emerald-500' : '!bg-transparent',
                },
              }"
            />
            <span class="w-8 text-xs text-slate-600">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag
            :value="data.status"
            :severity="getStatusSeverity(data.status)"
            class="!text-xs !font-bold"
            :pt="{
              root: { class: getStatusCustomClass(data.status) },
            }"
          />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig">
        <template #body="{ data }">
          <span
            class="text-sm"
            :class="data.overdue ? 'text-red-500' : 'text-slate-700'"
          >
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
            class="!text-slate-400 hover:!text-slate-700"
            @click="toggleMenu($event, data)"
            aria-haspopup="true"
            aria-controls="actions_menu"
          />
        </template>
      </Column>
    </DataTable>

    <!-- Actions Menu -->
    <Menu ref="actionsMenu" id="actions_menu" :model="menuItems" :popup="true" class="w-48" />
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

// Header State
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

// Table State
const selectedTasks = ref([
  {
    id: 1,
    name: 'Webseite Relaunch',
    assignee: { name: 'Max Mustermann', initials: 'M' },
    progress: 100,
    status: 'Fertig',
    dueDate: '03.06.2026',
    overdue: false,
  },
]);

const tasks = ref([
  {
    id: 1,
    name: 'Webseite Relaunch',
    assignee: { name: 'Max Mustermann', initials: 'M' },
    progress: 100,
    status: 'Fertig',
    dueDate: '03.06.2026',
    overdue: false,
  },
  {
    id: 2,
    name: 'Mobile App',
    assignee: { name: 'Anna Schmidt', initials: 'A' },
    progress: 45,
    status: 'In Arbeit',
    dueDate: '10.06.2026',
    overdue: false,
  },
  {
    id: 3,
    name: 'Marketing Kampagne',
    assignee: { name: 'Lisa Weber', initials: 'L' },
    progress: 0,
    status: 'Offen',
    dueDate: '18.05.2026',
    overdue: false,
  },
  {
    id: 4,
    name: 'API Migration',
    assignee: { name: 'Paul Müller', initials: 'P' },
    progress: 72,
    status: 'Blockiert',
    dueDate: '12.05.2026',
    overdue: true,
  },
]);

// Helpers
const getStatusSeverity = (status) => {
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

const getStatusCustomClass = (status) => {
  // Customizing colors to match the specific pastel look in the mockup
  switch (status) {
    case 'Fertig':
      return '!bg-emerald-100 !text-emerald-700';
    case 'In Arbeit':
      return '!bg-orange-100 !text-orange-700';
    case 'Offen':
      return '!bg-blue-100 !text-blue-700';
    case 'Blockiert':
      return '!bg-red-100 !text-red-700';
    default:
      return '';
  }
};

// Menu State & Logic
const actionsMenu = ref();
const selectedRowData = ref(null);

const menuItems = ref([
  {
    label: 'Bearbeiten',
    icon: 'pi pi-file-edit',
    command: () => console.log('Edit', selectedRowData.value),
  },
  {
    label: 'Status aktualisieren',
    icon: 'pi pi-list',
    command: () => console.log('Update Status', selectedRowData.value),
  },
  {
    label: 'Löschen',
    icon: 'pi pi-trash',
    command: () => console.log('Delete', selectedRowData.value),
  },
]);

const toggleMenu = (event, data) => {
  selectedRowData.value = data;
  actionsMenu.value.toggle(event);
};
</script>