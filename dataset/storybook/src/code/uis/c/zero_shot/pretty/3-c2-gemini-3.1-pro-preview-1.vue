<template>
  <div class="p-6 bg-white min-h-screen font-sans text-surface-900">
    <!-- Header Section -->
    <div class="flex items-start gap-4 mb-6">
      <Button icon="pi pi-arrow-left" variant="text" rounded aria-label="Back" class="mt-1 text-surface-500 hover:text-surface-700" />
      <div>
        <h1 class="text-3xl font-bold m-0 mb-1">Projektaufgaben</h1>
        <p class="text-surface-500 m-0">Hier werden alle Aufgaben des Projekts <span class="font-semibold">Projekt 1</span> aufgelistet.</p>
      </div>
    </div>

    <!-- Breadcrumb -->
    <Breadcrumb :home="home" :model="items" class="mb-6 bg-transparent p-0" />

    <!-- Filters -->
    <div class="flex gap-4 mb-6">
      <div class="flex flex-col gap-2 w-64">
        <label for="search" class="text-sm font-medium text-surface-700">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText id="search" v-model="searchQuery" placeholder="Suche..." class="w-full" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2 w-64">
        <label for="status" class="text-sm font-medium text-surface-700">Status</label>
        <Select id="status" v-model="selectedStatus" :options="statusOptions" optionLabel="label" placeholder="Status auswählen" class="w-full" />
      </div>
    </div>

    <!-- Data Table -->
    <DataTable :value="tasks" v-model:selection="selectedTasks" dataKey="id" class="w-full">
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="name" header="Aufgabe" class="font-medium"></Column>
      <Column field="assignee" header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-surface-200 flex items-center justify-center text-sm font-medium text-surface-600">
              {{ data.assigneeInitials }}
            </div>
            <span>{{ data.assignee }}</span>
          </div>
        </template>
      </Column>
      <Column field="progress" header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <div class="w-32 h-2 bg-surface-200 rounded-full overflow-hidden">
              <div class="h-full bg-primary-500" :style="{ width: data.progress + '%' }"></div>
            </div>
            <span class="text-sm text-surface-600">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column field="statusLabel" header="Status">
        <template #body="{ data }">
          <Tag :value="data.statusLabel" :severity="getStatusSeverity(data.status)" />
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

    <!-- Action Menu Popover -->
    <Popover ref="actionMenu">
      <div class="flex flex-col min-w-[12rem]">
        <Button label="Bearbeiten" icon="pi pi-pencil" variant="text" class="justify-start text-surface-700 hover:bg-surface-100" />
        <Button label="Status aktualisieren" icon="pi pi-list" variant="text" class="justify-start text-surface-700 hover:bg-surface-100" />
        <Button label="Löschen" icon="pi pi-trash" variant="text" class="justify-start text-surface-700 hover:bg-surface-100" />
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
import Tag from 'primevue/tag';
import Popover from 'primevue/popover';

const home = ref({ icon: 'pi pi-home' });
const items = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
]);

const searchQuery = ref('');
const selectedStatus = ref(null);
const statusOptions = ref([
  { label: 'Offen', value: 'open' },
  { label: 'In Arbeit', value: 'in_progress' },
  { label: 'Blockiert', value: 'blocked' },
  { label: 'Fertig', value: 'done' }
]);

const selectedTasks = ref([]);
const tasks = ref([
  {
    id: 1,
    name: 'Webseite Relaunch',
    assignee: 'Max Mustermann',
    assigneeInitials: 'M',
    progress: 100,
    status: 'done',
    statusLabel: 'Fertig',
    dueDate: '03.06.2026'
  },
  {
    id: 2,
    name: 'Mobile App',
    assignee: 'Anna Schmidt',
    assigneeInitials: 'A',
    progress: 45,
    status: 'in_progress',
    statusLabel: 'In Arbeit',
    dueDate: '10.06.2026'
  },
  {
    id: 3,
    name: 'Marketing Kampagne',
    assignee: 'Lisa Weber',
    assigneeInitials: 'L',
    progress: 0,
    status: 'open',
    statusLabel: 'Offen',
    dueDate: '18.05.2026'
  },
  {
    id: 4,
    name: 'API Migration',
    assignee: 'Paul Müller',
    assigneeInitials: 'P',
    progress: 72,
    status: 'blocked',
    statusLabel: 'Blockiert',
    dueDate: '12.05.2026'
  }
]);

const actionMenu = ref();
const activeTask = ref(null);

const toggleMenu = (event, task) => {
  activeTask.value = task;
  actionMenu.value.toggle(event);
};

const getStatusSeverity = (status) => {
  switch (status) {
    case 'done': return 'success';
    case 'in_progress': return 'warn';
    case 'open': return 'info';
    case 'blocked': return 'danger';
    default: return 'secondary';
  }
};

const isOverdue = (dateString) => {
  // Simple check for demonstration based on the red text in the mockup
  return dateString === '12.05.2026';
};
</script>