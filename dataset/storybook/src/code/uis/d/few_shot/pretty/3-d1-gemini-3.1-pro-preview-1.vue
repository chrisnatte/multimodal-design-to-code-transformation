<template>
  <div class="flex flex-col gap-8 p-8 bg-white min-h-screen">
    <!-- Header Section -->
    <div class="flex items-center gap-4">
      <Button icon="pi pi-arrow-left" rounded text severity="secondary" class="!bg-slate-100 !w-12 !h-12" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-slate-900">Projektaufgaben</h1>
        <p class="text-base text-slate-600">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</p>
      </div>
    </div>

    <!-- Breadcrumb -->
    <Breadcrumb :home="home" :model="breadcrumbItems" class="!bg-transparent !p-0" />

    <!-- Filters -->
    <div class="flex items-end gap-4">
      <div class="flex flex-col gap-2 w-56">
        <label for="search" class="text-sm text-slate-700">Suche</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-search" />
          <InputText id="search" v-model="searchQuery" placeholder="Suche..." class="w-full" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2 w-56">
        <label for="status" class="text-sm text-slate-700">Status</label>
        <Select id="status" v-model="selectedStatus" :options="statusOptions" placeholder="Status auswählen" class="w-full" />
      </div>
    </div>

    <!-- DataTable -->
    <DataTable v-model:selection="selectedTasks" :value="tasks" dataKey="id" class="w-full">
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="name" header="Aufgabe" class="font-semibold"></Column>
      <Column field="assignee" header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.assignee.initials" shape="circle" class="!bg-slate-200 !text-slate-700" />
            <span class="text-slate-700">{{ data.assignee.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="progress" header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <ProgressBar :value="data.progress" :showValue="false" class="w-32 !h-1.5" />
            <span class="text-xs text-slate-600 w-8">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getSeverity(data.status)" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig">
        <template #body="{ data }">
          <span :class="{'text-red-500': data.status === 'Blockiert', 'text-slate-700': data.status !== 'Blockiert'}">
            {{ data.dueDate }}
          </span>
        </template>
      </Column>
      <Column header="Aktionen" headerStyle="width: 5rem" bodyStyle="text-align: center">
        <template #body="{ data }">
          <Button icon="pi pi-ellipsis-h" text rounded severity="secondary" @click="toggleMenu($event, data)" aria-haspopup="true" aria-controls="overlay_menu" />
        </template>
      </Column>
    </DataTable>

    <!-- Actions Menu -->
    <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" />
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

const searchQuery = ref('');
const selectedStatus = ref(null);
const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig']);

const home = ref({ icon: 'pi pi-home' });
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
]);

const tasks = ref([
  { id: 1, name: 'Webseite Relaunch', assignee: { name: 'Max Mustermann', initials: 'M' }, progress: 100, status: 'Fertig', dueDate: '03.06.2026' },
  { id: 2, name: 'Mobile App', assignee: { name: 'Anna Schmidt', initials: 'A' }, progress: 45, status: 'In Arbeit', dueDate: '10.06.2026' },
  { id: 3, name: 'Marketing Kampagne', assignee: { name: 'Lisa Weber', initials: 'L' }, progress: 0, status: 'Offen', dueDate: '18.05.2026' },
  { id: 4, name: 'API Migration', assignee: { name: 'Paul Müller', initials: 'P' }, progress: 72, status: 'Blockiert', dueDate: '12.05.2026' }
]);

const selectedTasks = ref([tasks.value[0]]);

const menu = ref();
const selectedTaskForMenu = ref(null);

const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
  { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);

const toggleMenu = (event: Event, task: any) => {
  selectedTaskForMenu.value = task;
  menu.value.toggle(event);
};

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
      return 'info';
  }
};
</script>