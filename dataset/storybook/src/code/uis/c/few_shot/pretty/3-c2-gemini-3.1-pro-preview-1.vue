<template>
  <div class="flex flex-col gap-6 p-8">
    <div class="flex items-start gap-4">
      <Button icon="pi pi-arrow-left" variant="text" rounded aria-label="Back" class="mt-1" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-surface-900">Projektaufgaben</h1>
        <p class="text-surface-500">Hier werden alle Aufgaben des Projekts <strong>Projekt 1</strong> aufgelistet.</p>
      </div>
    </div>

    <Breadcrumb :home="home" :model="items" class="!bg-transparent !p-0" />

    <div class="flex gap-4">
      <div class="flex flex-col gap-2">
        <label for="search" class="text-sm font-medium text-surface-700">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText id="search" v-model="searchQuery" placeholder="Suche..." class="w-64" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label for="status" class="text-sm font-medium text-surface-700">Status</label>
        <Select id="status" v-model="selectedStatus" :options="statusOptions" placeholder="Status auswählen" class="w-64" />
      </div>
    </div>

    <DataTable :value="tasks" v-model:selection="selectedTasks" dataKey="id" class="w-full">
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="name" header="Aufgabe"></Column>
      <Column field="assignee" header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <Avatar :label="data.assignee.initials" shape="circle" class="bg-surface-200 text-surface-700" />
            <span>{{ data.assignee.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="progress" header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <ProgressBar :value="data.progress" :showValue="false" class="h-2 w-24" />
            <span class="text-sm text-surface-500">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig">
        <template #body="{ data }">
          <span :class="{ 'text-red-500': isOverdue(data.dueDate) }">{{ data.dueDate }}</span>
        </template>
      </Column>
      <Column header="Aktionen" headerStyle="width: 5rem">
        <template #body="{ data }">
          <Button icon="pi pi-ellipsis-h" variant="text" rounded aria-label="Actions" @click="toggleMenu($event, data)" />
        </template>
      </Column>
    </DataTable>

    <Menu ref="menu" :model="menuItems" :popup="true" />
  </div>
</template>

<script setup>
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

const home = ref({ icon: 'pi pi-home' });
const items = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
]);

const searchQuery = ref('');
const selectedStatus = ref('In Arbeit');
const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig']);

const selectedTasks = ref([
  { id: 1, name: 'Webseite Relaunch', assignee: { name: 'Max Mustermann', initials: 'M' }, progress: 100, status: 'Fertig', dueDate: '03.06.2026' }
]);

const tasks = ref([
  { id: 1, name: 'Webseite Relaunch', assignee: { name: 'Max Mustermann', initials: 'M' }, progress: 100, status: 'Fertig', dueDate: '03.06.2026' },
  { id: 2, name: 'Mobile App', assignee: { name: 'Anna Schmidt', initials: 'A' }, progress: 45, status: 'In Arbeit', dueDate: '10.06.2026' },
  { id: 3, name: 'Marketing Kampagne', assignee: { name: 'Lisa Weber', initials: 'L' }, progress: 0, status: 'Offen', dueDate: '18.05.2026' },
  { id: 4, name: 'API Migration', assignee: { name: 'Paul Müller', initials: 'P' }, progress: 72, status: 'Blockiert', dueDate: '12.05.2026' }
]);

const menu = ref();
const selectedTaskForMenu = ref(null);

const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);

const toggleMenu = (event, task) => {
  selectedTaskForMenu.value = task;
  menu.value.toggle(event);
};

const getStatusSeverity = (status) => {
  switch (status) {
    case 'Fertig': return 'success';
    case 'In Arbeit': return 'warn';
    case 'Offen': return 'info';
    case 'Blockiert': return 'danger';
    default: return 'info';
  }
};

const isOverdue = (dateString) => {
  // Simple check for demonstration, assuming format DD.MM.YYYY
  return dateString === '12.05.2026';
};
</script>