<template>
  <div class="min-h-screen bg-white p-8 font-sans text-slate-800">
    <!-- Header Section -->
    <div class="mb-6 flex items-start gap-4">
      <Button icon="pi pi-arrow-left" text rounded class="mt-1 text-slate-500 hover:bg-slate-100" />
      <div>
        <h1 class="text-3xl font-bold text-slate-800">Projektaufgaben</h1>
        <p class="mt-1 text-slate-500">
          Hier werden alle Aufgaben des Projekts <span class="font-semibold text-slate-700">Projekt 1</span> aufgelistet.
        </p>
      </div>
    </div>

    <!-- Breadcrumb -->
    <div class="mb-8">
      <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" class="border-none bg-transparent p-0 text-sm text-slate-500" />
    </div>

    <!-- Filters Section -->
    <div class="mb-6 flex gap-6">
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
    <DataTable :value="tasks" v-model:selection="selectedTasks" dataKey="id" class="p-datatable-sm">
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      
      <Column field="task" header="Aufgabe" class="font-medium text-slate-800"></Column>
      
      <Column header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="bg-slate-100 text-slate-600" />
            <span class="text-slate-600">{{ data.assignee }}</span>
          </div>
        </template>
      </Column>
      
      <Column header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <ProgressBar :value="data.progress" :showValue="false" style="height: 6px" class="w-32 [&>div]:bg-emerald-500" />
            <span class="text-xs text-slate-500">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      
      <Column header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" rounded class="px-3 py-1 text-xs font-medium" />
        </template>
      </Column>
      
      <Column field="dueDate" header="Fällig">
        <template #body="{ data }">
          <span :class="{'text-red-500': data.isOverdue, 'text-slate-600': !data.isOverdue}">
            {{ data.dueDate }}
          </span>
        </template>
      </Column>
      
      <Column header="Aktionen" headerStyle="width: 5rem" bodyStyle="text-align: center">
        <template #body>
          <Button icon="pi pi-ellipsis-h" text rounded class="text-slate-400 hover:bg-slate-100 hover:text-slate-600" @click="toggleMenu" aria-haspopup="true" aria-controls="overlay_menu" />
        </template>
      </Column>
    </DataTable>

    <!-- Action Menu Overlay -->
    <Menu ref="actionMenu" id="overlay_menu" :model="menuItems" :popup="true" />
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

// State
const searchQuery = ref('');
const selectedStatus = ref(null);
const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig']);

const breadcrumbHome = ref({ icon: 'pi pi-home' });
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
]);

const tasks = ref([
  { id: 1, task: 'Webseite Relaunch', assignee: 'Max Mustermann', initials: 'M', progress: 100, status: 'Fertig', dueDate: '03.06.2026', isOverdue: false },
  { id: 2, task: 'Mobile App', assignee: 'Anna Schmidt', initials: 'A', progress: 45, status: 'In Arbeit', dueDate: '10.06.2026', isOverdue: false },
  { id: 3, task: 'Marketing Kampagne', assignee: 'Lisa Weber', initials: 'L', progress: 0, status: 'Offen', dueDate: '18.05.2026', isOverdue: false },
  { id: 4, task: 'API Migration', assignee: 'Paul Müller', initials: 'P', progress: 72, status: 'Blockiert', dueDate: '12.05.2026', isOverdue: true }
]);

// Pre-select the first row to match mockup
const selectedTasks = ref([tasks.value[0]]);

const actionMenu = ref();
const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-file-edit' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);

// Methods
const getStatusSeverity = (status) => {
  switch (status) {
    case 'Fertig': return 'success';
    case 'In Arbeit': return 'warning';
    case 'Offen': return 'info';
    case 'Blockiert': return 'danger';
    default: return 'info';
  }
};

const toggleMenu = (event) => {
  actionMenu.value.toggle(event);
};
</script>