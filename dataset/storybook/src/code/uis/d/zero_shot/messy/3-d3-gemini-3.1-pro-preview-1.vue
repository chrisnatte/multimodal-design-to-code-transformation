<template>
  <div class="min-h-screen bg-white p-8 font-sans text-slate-800">
    <!-- Header Section -->
    <div class="mb-8 flex items-start gap-4">
      <Button icon="pi pi-arrow-left" rounded text severity="secondary" class="mt-1 bg-slate-100 hover:bg-slate-200" />
      <div>
        <h1 class="text-3xl font-bold text-slate-900 mb-2">Projektaufgaben</h1>
        <p class="text-slate-600">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</p>
      </div>
    </div>

    <!-- Breadcrumb -->
    <div class="mb-8">
      <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" class="bg-transparent p-0" />
    </div>

    <!-- Filters Section -->
    <div class="flex gap-6 mb-6">
      <div class="flex flex-col gap-2">
        <label class="text-sm text-slate-600">Suche</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-search" />
          <InputText v-model="searchQuery" placeholder="Suche..." class="w-56" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-slate-600">Status</label>
        <Select v-model="selectedStatus" :options="statuses" placeholder="Status auswählen" class="w-56" />
      </div>
    </div>

    <!-- Data Table -->
    <DataTable v-model:selection="selectedTasks" :value="tasks" dataKey="id" class="w-full">
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      
      <Column field="name" header="Aufgabe" class="font-medium"></Column>
      
      <Column header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.avatar" shape="circle" class="bg-slate-200 text-slate-700" />
            <span>{{ data.assignee }}</span>
          </div>
        </template>
      </Column>
      
      <Column header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <ProgressBar :value="data.progress" :showValue="false" class="w-48 h-1.5" :class="{'[&>div]:bg-emerald-500': data.progress > 0}" />
            <span class="text-xs text-slate-600 w-8">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      
      <Column header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" class="font-bold" />
        </template>
      </Column>
      
      <Column field="dueDate" header="Fällig">
        <template #body="{ data }">
          <span :class="{ 'text-red-500': data.overdue }">{{ data.dueDate }}</span>
        </template>
      </Column>
      
      <Column header="Aktionen">
        <template #body="{ data, event }">
          <Button icon="pi pi-ellipsis-h" text rounded severity="secondary" @click="toggleMenu($event, data)" />
        </template>
      </Column>
    </DataTable>

    <!-- Action Menu -->
    <Menu ref="actionMenu" :model="menuItems" :popup="true" />
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

// Breadcrumb Data
const breadcrumbHome = ref({ icon: 'pi pi-home' });
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
]);

// Filter Data
const searchQuery = ref('');
const selectedStatus = ref(null);
const statuses = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig']);

// Table Data
const selectedTasks = ref([
  { id: 1, name: 'Webseite Relaunch', assignee: 'Max Mustermann', avatar: 'M', progress: 100, status: 'Fertig', dueDate: '03.06.2026', overdue: false }
]);

const tasks = ref([
  { id: 1, name: 'Webseite Relaunch', assignee: 'Max Mustermann', avatar: 'M', progress: 100, status: 'Fertig', dueDate: '03.06.2026', overdue: false },
  { id: 2, name: 'Mobile App', assignee: 'Anna Schmidt', avatar: 'A', progress: 45, status: 'In Arbeit', dueDate: '10.06.2026', overdue: false },
  { id: 3, name: 'Marketing Kampagne', assignee: 'Lisa Weber', avatar: 'L', progress: 0, status: 'Offen', dueDate: '18.05.2026', overdue: false },
  { id: 4, name: 'API Migration', assignee: 'Paul Müller', avatar: 'P', progress: 72, status: 'Blockiert', dueDate: '12.05.2026', overdue: true }
]);

// Helper for Tag Severity
const getStatusSeverity = (status) => {
  switch (status) {
    case 'Fertig': return 'success';
    case 'In Arbeit': return 'warn';
    case 'Offen': return 'info';
    case 'Blockiert': return 'danger';
    default: return 'secondary';
  }
};

// Action Menu Data & Logic
const actionMenu = ref(null);
const selectedTaskForMenu = ref(null);

const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-file-edit' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);

const toggleMenu = (event, task) => {
  selectedTaskForMenu.value = task;
  actionMenu.value.toggle(event);
};
</script>

<style>
/* Customizing PrimeVue Tag colors to better match the design if needed, 
   though Aura theme defaults are usually close enough. */
.p-tag.p-tag-success {
  background-color: #D1FAE5;
  color: #065F46;
}
.p-tag.p-tag-warn {
  background-color: #FFEDD5;
  color: #9A3412;
}
.p-tag.p-tag-info {
  background-color: #E0F2FE;
  color: #075985;
}
.p-tag.p-tag-danger {
  background-color: #FEE2E2;
  color: #991B1B;
}
</style>