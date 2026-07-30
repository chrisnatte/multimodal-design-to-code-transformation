<template>
  <div class="min-h-screen bg-white p-8 font-sans text-slate-700">
    <!-- Header -->
    <div class="mb-8 flex items-start gap-4">
      <Button icon="pi pi-arrow-left" rounded text class="mt-1 bg-slate-100 text-slate-600 hover:bg-slate-200" />
      <div>
        <h1 class="text-3xl font-bold text-slate-900">Projektaufgaben</h1>
        <p class="mt-1 text-slate-500">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</p>
        <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" class="mt-4 border-none bg-transparent p-0" />
      </div>
    </div>

    <!-- Filters -->
    <div class="mb-6 flex gap-6">
      <div class="flex flex-col gap-2">
        <label class="text-sm text-slate-600">Suche</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-search text-slate-400" />
          <InputText v-model="searchQuery" placeholder="Suche..." class="w-64" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-slate-600">Status</label>
        <Select v-model="selectedStatus" :options="statusOptions" placeholder="Status auswählen" class="w-56" />
      </div>
    </div>

    <!-- Data Table -->
    <DataTable v-model:selection="selectedTasks" :value="tasks" dataKey="id" class="w-full">
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="name" header="Aufgabe" class="font-medium text-slate-900"></Column>
      <Column header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.assignee.initial" shape="circle" class="bg-slate-200 text-slate-700" />
            <span>{{ data.assignee.name }}</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <ProgressBar :value="data.progress" :showValue="false" class="h-1.5 w-32 [&>div]:bg-emerald-500" />
            <span class="text-xs text-slate-500">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
        </template>
      </Column>
      <Column header="Fällig">
        <template #body="{ data }">
          <span :class="data.isOverdue ? 'text-red-500' : 'text-slate-700'">{{ data.dueDate }}</span>
        </template>
      </Column>
      <Column header="Aktionen">
        <template #body>
          <Button icon="pi pi-ellipsis-h" text rounded class="text-slate-400 hover:text-slate-600" @click="toggleMenu" aria-haspopup="true" aria-controls="actions_menu" />
        </template>
      </Column>
    </DataTable>

    <!-- Actions Menu -->
    <Menu ref="menu" id="actions_menu" :model="menuItems" :popup="true" />
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

const breadcrumbHome = ref({ icon: 'pi pi-home' });
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
]);

const searchQuery = ref('');
const selectedStatus = ref(null);
const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig']);

const tasks = ref([
  { id: 1, name: 'Webseite Relaunch', assignee: { name: 'Max Mustermann', initial: 'M' }, progress: 100, status: 'Fertig', dueDate: '03.06.2026', isOverdue: false },
  { id: 2, name: 'Mobile App', assignee: { name: 'Anna Schmidt', initial: 'A' }, progress: 45, status: 'In Arbeit', dueDate: '10.06.2026', isOverdue: false },
  { id: 3, name: 'Marketing Kampagne', assignee: { name: 'Lisa Weber', initial: 'L' }, progress: 0, status: 'Offen', dueDate: '18.05.2026', isOverdue: false },
  { id: 4, name: 'API Migration', assignee: { name: 'Paul Müller', initial: 'P' }, progress: 72, status: 'Blockiert', dueDate: '12.05.2026', isOverdue: true },
]);

const selectedTasks = ref([tasks.value[0]]);

const menu = ref();
const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-file-edit' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);

const toggleMenu = (event) => {
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
</script>