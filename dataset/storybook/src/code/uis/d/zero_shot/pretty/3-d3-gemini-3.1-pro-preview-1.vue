<template>
  <div class="min-h-screen bg-white p-8 flex flex-col gap-8 font-sans">
    <!-- Breadcrumb -->
    <div class="flex items-center">
      <Breadcrumb :home="home" :model="breadcrumbItems" class="bg-transparent p-0" />
    </div>

    <!-- Header Section -->
    <div class="flex items-center gap-4">
      <Button icon="pi pi-arrow-left" rounded severity="secondary" variant="text" class="bg-surface-100 hover:bg-surface-200 w-12 h-12" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-surface-900 m-0">Projektaufgaben</h1>
        <p class="text-surface-600 m-0 text-base">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</p>
      </div>
    </div>

    <!-- Filters Section -->
    <div class="flex items-end gap-4">
      <div class="flex flex-col gap-2 w-56">
        <label for="search" class="text-sm text-surface-700">Suche</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-search" />
          <InputText id="search" v-model="searchQuery" placeholder="Suche..." class="w-full" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2 w-56">
        <label for="status" class="text-sm text-surface-700">Status</label>
        <Select id="status" v-model="selectedStatus" :options="statusOptions" placeholder="Status auswählen" class="w-full" />
      </div>
    </div>

    <!-- DataTable Section -->
    <div class="w-full">
      <DataTable v-model:selection="selectedTasks" :value="tasks" dataKey="id" tableStyle="min-width: 50rem">
        <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
        
        <Column field="name" header="Aufgabe" style="width: 25%"></Column>
        
        <Column header="Verantwortlicher" style="width: 20%">
          <template #body="{ data }">
            <div class="flex items-center gap-3">
              <Avatar :label="data.avatar" shape="circle" class="bg-surface-200 text-surface-700" />
              <span class="text-surface-900">{{ data.assignee }}</span>
            </div>
          </template>
        </Column>
        
        <Column header="Status" style="width: 20%">
          <template #body="{ data }">
            <div class="flex items-center gap-3">
              <ProgressBar :value="data.progress" :showValue="false" class="h-1.5 w-24" :pt="{ value: { class: 'bg-primary-500' } }" />
              <span class="text-sm text-surface-700">{{ data.progress }} %</span>
            </div>
          </template>
        </Column>
        
        <Column header="Status" style="width: 15%">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="getSeverity(data.status)" />
          </template>
        </Column>
        
        <Column field="dueDate" header="Fällig" style="width: 15%"></Column>
        
        <Column header="Aktionen" style="width: 5%">
          <template #body="{ data }">
            <Button icon="pi pi-ellipsis-h" severity="secondary" variant="text" rounded @click="togglePopover($event, data)" />
          </template>
        </Column>
      </DataTable>
    </div>

    <!-- Actions Popover -->
    <Popover ref="op">
      <div class="flex flex-col gap-2 w-48 p-1">
        <Button label="Bearbeiten" icon="pi pi-pencil" severity="secondary" variant="outlined" class="justify-start" />
        <Button label="Status aktualisieren" icon="pi pi-check-square" severity="secondary" variant="outlined" class="justify-start" />
        <Button label="Löschen" icon="pi pi-trash" severity="secondary" variant="outlined" class="justify-start" />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
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
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
]);

const searchQuery = ref('');
const selectedStatus = ref(null);
const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig']);

const selectedTasks = ref([]);
const tasks = ref([
  { id: 1, name: 'Webseite Relaunch', assignee: 'Max Mustermann', avatar: 'M', progress: 100, status: 'Fertig', dueDate: '03.06.2026' },
  { id: 2, name: 'Mobile App', assignee: 'Anna Schmidt', avatar: 'A', progress: 45, status: 'In Arbeit', dueDate: '10.06.2026' },
  { id: 3, name: 'Marketing Kampagne', assignee: 'Lisa Weber', avatar: 'L', progress: 0, status: 'Offen', dueDate: '18.05.2026' },
  { id: 4, name: 'API Migration', assignee: 'Paul Müller', avatar: 'P', progress: 72, status: 'Blockiert', dueDate: '12.05.2026' }
]);

const op = ref();
const activeTask = ref(null);

const togglePopover = (event, task) => {
  activeTask.value = task;
  op.value.toggle(event);
};

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
      return 'secondary';
  }
};
</script>