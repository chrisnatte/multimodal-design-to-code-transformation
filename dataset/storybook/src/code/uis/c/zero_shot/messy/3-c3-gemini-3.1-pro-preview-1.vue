<template>
  <div class="p-8 font-sans text-slate-800 bg-white min-h-screen">
    <!-- Header Section -->
    <div class="flex items-start gap-4 mb-6">
      <Button icon="pi pi-arrow-left" text rounded class="text-slate-500 hover:bg-slate-100 mt-1" />
      <div>
        <h1 class="text-3xl font-bold m-0 text-slate-800">Projektaufgaben</h1>
        <p class="text-slate-500 m-0 mt-2 text-sm">
          Hier werden alle Aufgaben des Projekts <span class="font-semibold text-slate-700">Projekt 1</span> aufgelistet.
        </p>
      </div>
    </div>

    <!-- Breadcrumb -->
    <div class="mb-8">
      <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" class="p-0 bg-transparent border-none text-sm" />
    </div>

    <!-- Filters Section -->
    <div class="flex gap-6 mb-6">
      <div class="flex flex-col gap-2">
        <label class="text-sm font-medium text-slate-600">Suche</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-search text-slate-400" />
          <InputText v-model="searchQuery" placeholder="Suche..." class="w-64" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm font-medium text-slate-600">Status</label>
        <Select v-model="selectedStatus" :options="statusOptions" placeholder="Status auswählen" class="w-64" />
      </div>
    </div>

    <!-- Data Table -->
    <DataTable v-model:selection="selectedTasks" :value="tasks" dataKey="id" class="w-full border-t border-slate-200">
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      
      <Column field="name" header="Aufgabe" class="font-medium text-slate-800"></Column>
      
      <Column header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="bg-slate-100 text-slate-600 font-medium text-sm" />
            <span class="text-slate-600">{{ data.assignee }}</span>
          </div>
        </template>
      </Column>
      
      <Column header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-3 w-48">
            <ProgressBar :value="data.progress" :showValue="false" class="h-1.5 w-full bg-slate-100" :pt="{ value: { class: 'bg-emerald-500' } }" />
            <span class="text-xs text-slate-500 w-10 text-right">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      
      <Column header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getSeverity(data.status)" class="text-xs font-medium px-2 py-1" />
        </template>
      </Column>
      
      <Column header="Fällig">
        <template #body="{ data }">
          <span :class="['text-sm', data.isOverdue ? 'text-red-500' : 'text-slate-600']">
            {{ data.dueDate }}
          </span>
        </template>
      </Column>
      
      <Column header="Aktionen" headerStyle="width: 5rem">
        <template #body="{ data, event }">
          <Button icon="pi pi-ellipsis-h" text rounded class="text-slate-400 hover:text-slate-600 hover:bg-slate-100" @click="toggleMenu($event, data)" />
        </template>
      </Column>
    </DataTable>

    <!-- Action Menu -->
    <Menu ref="actionMenu" :model="menuItems" :popup="true" class="w-48" />
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

// Breadcrumb State
const breadcrumbHome = ref({ icon: 'pi pi-home' });
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
]);

// Filter State
const searchQuery = ref('');
const selectedStatus = ref(null);
const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig']);

// Table State
const selectedTasks = ref([
  { id: 1, name: 'Webseite Relaunch', assignee: 'Max Mustermann', initials: 'M', progress: 100, status: 'Fertig', dueDate: '03.06.2026', isOverdue: false }
]);

const tasks = ref([
  { id: 1, name: 'Webseite Relaunch', assignee: 'Max Mustermann', initials: 'M', progress: 100, status: 'Fertig', dueDate: '03.06.2026', isOverdue: false },
  { id: 2, name: 'Mobile App', assignee: 'Anna Schmidt', initials: 'A', progress: 45, status: 'In Arbeit', dueDate: '10.06.2026', isOverdue: false },
  { id: 3, name: 'Marketing Kampagne', assignee: 'Lisa Weber', initials: 'L', progress: 0, status: 'Offen', dueDate: '18.05.2026', isOverdue: false },
  { id: 4, name: 'API Migration', assignee: 'Paul Müller', initials: 'P', progress: 72, status: 'Blockiert', dueDate: '12.05.2026', isOverdue: true },
]);

// Helper for Tag Severity
const getSeverity = (status) => {
  switch (status) {
    case 'Fertig': return 'success';
    case 'In Arbeit': return 'warn';
    case 'Offen': return 'info';
    case 'Blockiert': return 'danger';
    default: return 'secondary';
  }
};

// Action Menu State
const actionMenu = ref();
const activeTask = ref(null);

const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);

const toggleMenu = (event, task) => {
  activeTask.value = task;
  actionMenu.value.toggle(event);
};
</script>