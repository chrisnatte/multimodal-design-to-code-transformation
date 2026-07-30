<template>
  <div class="min-h-screen bg-white p-8 font-sans text-slate-800">
    <!-- Header Section -->
    <div class="mb-6 flex items-start gap-4">
      <Button icon="pi pi-arrow-left" rounded text class="mt-1 text-slate-500 hover:bg-slate-100" aria-label="Zurück" />
      <div>
        <h1 class="m-0 text-3xl font-bold text-slate-800">Projektaufgaben</h1>
        <p class="mt-1 text-sm text-slate-500">
          Hier werden alle Aufgaben des Projekts <span class="font-semibold text-slate-700">Projekt 1</span> aufgelistet.
        </p>
      </div>
    </div>

    <!-- Breadcrumb -->
    <div class="mb-8">
      <Breadcrumb :home="home" :model="breadcrumbItems" class="border-none bg-transparent p-0 text-sm text-slate-500" />
    </div>

    <!-- Filters -->
    <div class="mb-6 flex items-end gap-6">
      <div class="flex flex-col gap-2">
        <label for="search" class="text-sm font-medium text-slate-600">Suche</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-search text-slate-400" />
          <InputText id="search" v-model="searchQuery" placeholder="Suche..." class="w-64" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label for="status-filter" class="text-sm font-medium text-slate-600">Status</label>
        <Select id="status-filter" v-model="selectedStatusFilter" :options="statusOptions" placeholder="Status auswählen" class="w-64" />
      </div>
    </div>

    <!-- Data Table -->
    <DataTable v-model:selection="selectedTasks" :value="tasks" dataKey="id" class="p-datatable-sm border-t border-slate-200">
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      
      <Column field="name" header="Aufgabe" class="font-medium text-slate-800"></Column>
      
      <Column header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="bg-slate-100 text-xs font-medium text-slate-600" size="small" />
            <span class="text-sm text-slate-600">{{ data.assignee }}</span>
          </div>
        </template>
      </Column>
      
      <Column header="Status">
        <template #body="{ data }">
          <div class="flex w-48 items-center gap-3">
            <ProgressBar :value="data.progress" :showValue="false" class="h-1.5 w-full bg-slate-100 [&>div]:bg-emerald-500" />
            <span class="w-10 text-right text-xs text-slate-500">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      
      <Column header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getSeverity(data.status)" class="text-xs font-medium" />
        </template>
      </Column>
      
      <Column header="Fällig">
        <template #body="{ data }">
          <span class="text-sm" :class="data.isOverdue ? 'text-red-500' : 'text-slate-600'">
            {{ data.dueDate }}
          </span>
        </template>
      </Column>
      
      <Column header="Aktionen" headerStyle="width: 5rem; text-align: center" bodyStyle="text-align: center">
        <template #body="{ data, event }">
          <Button icon="pi pi-ellipsis-h" text rounded class="text-slate-400 hover:bg-slate-100 hover:text-slate-600" @click="toggleMenu($event, data)" aria-haspopup="true" aria-controls="overlay_menu" />
        </template>
      </Column>
    </DataTable>

    <!-- Actions Menu -->
    <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" class="w-48" />
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
const home = ref({ icon: 'pi pi-home' });
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
]);

// Filter State
const searchQuery = ref('');
const selectedStatusFilter = ref(null);
const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig']);

// DataTable State
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
    default: return null;
  }
};

// Menu State
const menu = ref();
const selectedTaskForMenu = ref(null);
const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-file-edit' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);

const toggleMenu = (event, data) => {
  selectedTaskForMenu.value = data;
  menu.value.toggle(event);
};
</script>

<style>
/* Minor overrides to match the specific look of the mockup if Tailwind isn't enough */
.p-breadcrumb .p-breadcrumb-list li.p-menuitem-separator {
  margin: 0 0.5rem;
  color: #94a3b8; /* slate-400 */
}
.p-breadcrumb .p-menuitem-link {
  color: #64748b; /* slate-500 */
}
.p-datatable .p-datatable-thead > tr > th {
  background: transparent;
  color: #475569; /* slate-600 */
  font-weight: 600;
  font-size: 0.875rem;
  border-bottom: 1px solid #e2e8f0; /* slate-200 */
  padding: 1rem 0.5rem;
}
.p-datatable .p-datatable-tbody > tr > td {
  border-bottom: 1px solid #f1f5f9; /* slate-100 */
  padding: 1rem 0.5rem;
}
</style>