<template>
  <div class="min-h-screen bg-white p-8 flex flex-col gap-6">
    <!-- Header -->
    <div class="flex items-start gap-4">
      <Button icon="pi pi-arrow-left" rounded text severity="secondary" class="mt-1 bg-surface-100" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-surface-900 m-0">Projektaufgaben</h1>
        <p class="text-surface-600 m-0 text-base">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</p>
      </div>
    </div>

    <!-- Breadcrumb -->
    <Breadcrumb :home="home" :model="items" class="bg-transparent p-0" />

    <!-- Filters -->
    <div class="flex gap-4 mt-2">
      <div class="flex flex-col gap-2">
        <label class="text-sm text-surface-700">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText v-model="searchQuery" placeholder="Suche..." class="w-56" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-surface-700">Status</label>
        <Select v-model="selectedStatus" :options="statuses" placeholder="Status auswählen" class="w-56" />
      </div>
    </div>

    <!-- DataTable -->
    <DataTable v-model:selection="selectedTasks" :value="tasks" dataKey="id" class="w-full mt-4">
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="name" header="Aufgabe" class="font-medium"></Column>
      <Column field="assignee" header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.assigneeInitials" shape="circle" class="bg-surface-200 text-surface-700 text-sm" />
            <span>{{ data.assignee }}</span>
          </div>
        </template>
      </Column>
      <Column field="progress" header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <ProgressBar :value="data.progress" :showValue="false" class="w-32 h-1.5" :pt="{ value: { class: '!bg-emerald-500' } }" />
            <span class="text-sm text-surface-600">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" class="font-bold" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig">
        <template #body="{ data }">
          <span :class="{'text-red-500': data.status === 'Blockiert'}">{{ data.dueDate }}</span>
        </template>
      </Column>
      <Column header="Aktionen">
        <template #body="{ data }">
          <Button icon="pi pi-ellipsis-h" text rounded severity="secondary" @click="toggleMenu($event, data)" />
        </template>
      </Column>
    </DataTable>

    <!-- Action Popover -->
    <Popover ref="op">
      <div class="flex flex-col gap-2 p-1 w-48">
        <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined class="w-full justify-start" />
        <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" outlined class="w-full justify-start" />
        <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="w-full justify-start" />
      </div>
    </Popover>
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
import Popover from 'primevue/popover';

const home = ref({ icon: 'pi pi-home' });
const items = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
]);

const searchQuery = ref('');
const statuses = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig']);
const selectedStatus = ref('In Arbeit');

const tasks = ref([
  { id: 1, name: 'Webseite Relaunch', assignee: 'Max Mustermann', assigneeInitials: 'M', progress: 100, status: 'Fertig', dueDate: '03.06.2026' },
  { id: 2, name: 'Mobile App', assignee: 'Anna Schmidt', assigneeInitials: 'A', progress: 45, status: 'In Arbeit', dueDate: '10.06.2026' },
  { id: 3, name: 'Marketing Kampagne', assignee: 'Lisa Weber', assigneeInitials: 'L', progress: 0, status: 'Offen', dueDate: '18.05.2026' },
  { id: 4, name: 'API Migration', assignee: 'Paul Müller', assigneeInitials: 'P', progress: 72, status: 'Blockiert', dueDate: '12.05.2026' }
]);

const selectedTasks = ref([tasks.value[0]]);

const op = ref();
const selectedTask = ref(null);

const toggleMenu = (event, task) => {
  selectedTask.value = task;
  op.value.toggle(event);
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