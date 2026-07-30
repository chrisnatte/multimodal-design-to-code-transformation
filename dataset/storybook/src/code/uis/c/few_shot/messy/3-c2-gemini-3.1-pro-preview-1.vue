<template>
  <div class="flex flex-col gap-6 p-8 font-sans text-slate-800">
    <!-- Header Section -->
    <div class="flex items-start gap-4">
      <Button icon="pi pi-arrow-left" outlined rounded class="!text-slate-500 !border-slate-300 mt-1" aria-label="Zurück" />
      <div class="flex flex-col gap-1">
        <h1 class="text-2xl font-bold m-0">Projektaufgaben</h1>
        <p class="text-sm text-slate-500 m-0">
          Hier werden alle Aufgaben des Projekts <span class="font-semibold">Projekt 1</span> aufgelistet.
        </p>
      </div>
    </div>

    <!-- Breadcrumb -->
    <Breadcrumb :home="home" :model="items" class="!p-0 !bg-transparent !border-none text-sm" />

    <!-- Filters -->
    <div class="flex gap-6 mt-2">
      <div class="flex flex-col gap-2">
        <label for="search" class="text-sm font-medium text-slate-600">Suche</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-search text-slate-400" />
          <InputText id="search" v-model="searchQuery" placeholder="Suche..." class="w-64" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label for="status-filter" class="text-sm font-medium text-slate-600">Status</label>
        <Select id="status-filter" v-model="selectedStatus" :options="statusOptions" placeholder="Status auswählen" class="w-64" />
      </div>
    </div>

    <!-- Data Table -->
    <DataTable v-model:selection="selectedTasks" :value="tasks" dataKey="id" class="mt-4">
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="name" header="Aufgabe" class="font-medium"></Column>
      <Column header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="!bg-slate-100 !text-slate-600 text-sm font-medium" />
            <span class="text-sm">{{ data.assignee }}</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-4 w-48">
            <ProgressBar :value="data.progress" :showValue="false" class="!h-1.5 flex-1" :pt="{ value: { class: '!bg-emerald-500' } }" />
            <span class="text-xs text-slate-500 w-8 text-right">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" rounded class="!px-3 !py-1 text-xs font-semibold" />
        </template>
      </Column>
      <Column header="Fällig">
        <template #body="{ data }">
          <span class="text-sm" :class="{ 'text-red-500': data.overdue, 'text-slate-600': !data.overdue }">
            {{ data.dueDate }}
          </span>
        </template>
      </Column>
      <Column header="Aktionen" headerStyle="width: 5rem" bodyStyle="text-align: center">
        <template #body="{ data }">
          <Button icon="pi pi-ellipsis-h" text rounded severity="secondary" @click="(event) => toggleMenu(event, data)" aria-haspopup="true" aria-controls="overlay_menu" />
        </template>
      </Column>
    </DataTable>

    <!-- Actions Menu -->
    <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" class="w-48" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import Breadcrumb from 'primevue/breadcrumb';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Select from 'primevue/select';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Avatar from 'primevue/avatar';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';
import Menu from 'primevue/menu';

// Breadcrumb Data
const home = ref({ icon: 'pi pi-home' });
const items = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
]);

// Filter Data
const searchQuery = ref('');
const selectedStatus = ref(null);
const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig']);

// Table Data
const tasks = ref([
  { id: 1, name: 'Webseite Relaunch', assignee: 'Max Mustermann', initials: 'M', progress: 100, status: 'Fertig', dueDate: '03.06.2026', overdue: false },
  { id: 2, name: 'Mobile App', assignee: 'Anna Schmidt', initials: 'A', progress: 45, status: 'In Arbeit', dueDate: '10.06.2026', overdue: false },
  { id: 3, name: 'Marketing Kampagne', assignee: 'Lisa Weber', initials: 'L', progress: 0, status: 'Offen', dueDate: '18.05.2026', overdue: false },
  { id: 4, name: 'API Migration', assignee: 'Paul Müller', initials: 'P', progress: 72, status: 'Blockiert', dueDate: '12.05.2026', overdue: true },
]);

const selectedTasks = ref([tasks.value[0]]);

// Menu Data & Logic
const menu = ref();
const activeRowData = ref(null);

const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-file-edit' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);

const toggleMenu = (event: Event, data: any) => {
  activeRowData.value = data;
  menu.value.toggle(event);
};

// Helper
const getStatusSeverity = (status: string) => {
  switch (status) {
    case 'Fertig': return 'success';
    case 'In Arbeit': return 'warn';
    case 'Offen': return 'info';
    case 'Blockiert': return 'danger';
    default: return 'secondary';
  }
};
</script>