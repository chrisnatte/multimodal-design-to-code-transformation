<template>
  <div class="p-8 bg-white min-h-screen flex flex-col gap-8">
    <!-- Header -->
    <div class="flex items-center gap-4">
      <Button icon="pi pi-arrow-left" rounded severity="secondary" variant="text" class="bg-surface-100 w-12 h-12" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold m-0 text-surface-900">Projektaufgaben</h1>
        <p class="text-surface-600 m-0 text-base">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</p>
      </div>
    </div>

    <!-- Breadcrumb -->
    <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" class="bg-white border border-surface-200 rounded-md p-3 w-fit" />

    <!-- Filters -->
    <div class="flex items-end gap-4">
      <div class="flex flex-col gap-2">
        <label class="text-sm text-surface-700">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText v-model="searchQuery" placeholder="Suche..." class="w-56" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-surface-700">Status</label>
        <Select v-model="selectedStatus" :options="statuses" optionLabel="label" placeholder="Status auswählen" class="w-56" />
      </div>
    </div>

    <!-- DataTable -->
    <DataTable :value="tasks" v-model:selection="selectedTasks" dataKey="id" class="w-full border border-surface-200 rounded-md">
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="name" header="Aufgabe"></Column>
      <Column header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.assignee.initial" shape="circle" class="bg-surface-200 text-surface-700 font-medium" />
            <span>{{ data.assignee.name }}</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-3 w-48">
            <div class="w-full bg-surface-200 rounded-full h-1.5">
              <div class="bg-green-500 h-1.5 rounded-full" :style="{ width: data.progress + '%' }"></div>
            </div>
            <span class="text-sm whitespace-nowrap">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig"></Column>
      <Column header="Aktionen">
        <template #body="{ data, event }">
          <Button icon="pi pi-ellipsis-h" variant="text" severity="secondary" rounded @click="togglePopover($event, data)" />
        </template>
      </Column>
    </DataTable>

    <!-- Popover -->
    <Popover ref="op">
      <div class="flex flex-col gap-2 w-44 p-2">
        <Button label="Bearbeiten" icon="pi pi-pen-to-square" variant="outlined" severity="secondary" class="w-full justify-start" />
        <Button label="Status aktualisieren" icon="pi pi-list-check" variant="outlined" severity="secondary" class="w-full justify-start" />
        <Button label="Löschen" icon="pi pi-trash" variant="outlined" severity="secondary" class="w-full justify-start" />
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
import Tag from 'primevue/tag';
import Popover from 'primevue/popover';

const tasks = ref([
  { id: 1, name: 'Webseite Relaunch', assignee: { name: 'Max Mustermann', initial: 'M' }, progress: 100, status: 'Fertig', dueDate: '03.06.2026' },
  { id: 2, name: 'Mobile App', assignee: { name: 'Anna Schmidt', initial: 'A' }, progress: 45, status: 'In Arbeit', dueDate: '10.06.2026' },
  { id: 3, name: 'API Migration', assignee: { name: 'Paul Müller', initial: 'P' }, progress: 72, status: 'Blockiert', dueDate: '12.05.2026' }
]);

const selectedTasks = ref([]);
const searchQuery = ref('');
const selectedStatus = ref(null);
const statuses = ref([
  { label: 'Offen', value: 'Offen' },
  { label: 'In Arbeit', value: 'In Arbeit' },
  { label: 'Blockiert', value: 'Blockiert' },
  { label: 'Fertig', value: 'Fertig' }
]);

const breadcrumbHome = ref({ icon: 'pi pi-home' });
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
]);

const op = ref();
const selectedTask = ref(null);

const togglePopover = (event, task) => {
  selectedTask.value = task;
  op.value.toggle(event);
};

const getStatusSeverity = (status) => {
  switch (status) {
    case 'Fertig': return 'success';
    case 'In Arbeit': return 'warn';
    case 'Blockiert': return 'danger';
    case 'Offen': return 'info';
    default: return 'secondary';
  }
};
</script>