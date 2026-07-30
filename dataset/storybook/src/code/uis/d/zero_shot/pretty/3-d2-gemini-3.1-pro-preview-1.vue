<template>
  <div class="min-h-screen bg-white p-8 flex flex-col gap-8 font-sans">
    <!-- Header Section -->
    <div class="flex items-center gap-4">
      <Button icon="pi pi-arrow-left" variant="text" severity="secondary" rounded class="!w-12 !h-12 !bg-surface-100 !text-surface-600 hover:!bg-surface-200" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-surface-900 m-0">Projektaufgaben</h1>
        <p class="text-base text-surface-600 m-0">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</p>
      </div>
    </div>

    <!-- Breadcrumb -->
    <Breadcrumb :home="home" :model="breadcrumbItems" class="!bg-transparent !p-0" />

    <!-- Filters Section -->
    <div class="flex gap-4 items-end">
      <div class="flex flex-col gap-2">
        <label class="text-sm text-surface-700">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText v-model="searchQuery" placeholder="Suche..." class="w-56" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-surface-700">Status</label>
        <Select v-model="selectedStatus" :options="statusOptions" placeholder="Status auswählen" class="w-56" />
      </div>
    </div>

    <!-- DataTable Section -->
    <DataTable v-model:selection="selectedTasks" :value="tasks" dataKey="id" tableStyle="min-width: 60rem" class="border border-surface-200 rounded-lg">
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      
      <Column field="name" header="Aufgabe" class="font-medium text-surface-900"></Column>
      
      <Column field="assignee" header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <div class="w-7 h-7 rounded-full bg-surface-200 flex items-center justify-center text-sm font-medium text-surface-700">
              {{ data.avatar }}
            </div>
            <span class="text-sm text-surface-900">{{ data.assignee }}</span>
          </div>
        </template>
      </Column>
      
      <Column field="progress" header="Status" style="width: 15rem">
        <template #body="{ data }">
          <div class="flex items-center gap-3 w-full">
            <div class="h-1.5 w-full bg-surface-200 rounded-full overflow-hidden">
              <div class="h-full bg-emerald-500 rounded-full" :style="{ width: data.progress + '%' }"></div>
            </div>
            <span class="text-xs text-surface-600 whitespace-nowrap w-8">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getSeverity(data.status)" class="!font-bold" />
        </template>
      </Column>
      
      <Column field="dueDate" header="Fällig">
        <template #body="{ data }">
          <span :class="{'text-red-500': data.status === 'Blockiert', 'text-surface-900': data.status !== 'Blockiert'}">
            {{ data.dueDate }}
          </span>
        </template>
      </Column>
      
      <Column header="Aktionen" style="width: 5rem">
        <template #body>
          <Button icon="pi pi-ellipsis-h" variant="text" severity="secondary" rounded @click="togglePopover" class="!text-surface-500 hover:!bg-surface-100" />
        </template>
      </Column>
    </DataTable>

    <!-- Action Popover -->
    <Popover ref="actionPopover">
      <div class="flex flex-col gap-1 w-48 p-1">
        <Button label="Bearbeiten" icon="pi pi-pen-to-square" variant="text" severity="secondary" class="!justify-start !text-surface-700 !font-medium hover:!bg-surface-100" />
        <Button label="Status aktualisieren" icon="pi pi-list-check" variant="text" severity="secondary" class="!justify-start !text-surface-700 !font-medium hover:!bg-surface-100" />
        <Button label="Löschen" icon="pi pi-trash" variant="text" severity="secondary" class="!justify-start !text-surface-700 !font-medium hover:!bg-surface-100" />
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

// Breadcrumb State
const home = ref({ icon: 'pi pi-home' });
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
]);

// Filter State
const searchQuery = ref('');
const selectedStatus = ref('In Arbeit');
const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig']);

// DataTable State
const selectedTasks = ref([
  { id: 1, name: 'Webseite Relaunch', assignee: 'Max Mustermann', avatar: 'M', progress: 100, status: 'Fertig', dueDate: '03.06.2026' }
]);

const tasks = ref([
  { id: 1, name: 'Webseite Relaunch', assignee: 'Max Mustermann', avatar: 'M', progress: 100, status: 'Fertig', dueDate: '03.06.2026' },
  { id: 2, name: 'Mobile App', assignee: 'Anna Schmidt', avatar: 'A', progress: 45, status: 'In Arbeit', dueDate: '10.06.2026' },
  { id: 3, name: 'Marketing Kampagne', assignee: 'Lisa Weber', avatar: 'L', progress: 0, status: 'Offen', dueDate: '18.05.2026' },
  { id: 4, name: 'API Migration', assignee: 'Paul Müller', avatar: 'P', progress: 72, status: 'Blockiert', dueDate: '12.05.2026' }
]);

// Helper Functions
const getSeverity = (status) => {
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

// Popover State & Methods
const actionPopover = ref();

const togglePopover = (event) => {
  actionPopover.value.toggle(event);
};
</script>