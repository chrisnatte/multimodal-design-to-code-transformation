<template>
  <div class="min-h-screen bg-white p-12 font-sans text-slate-900">
    <!-- Breadcrumb -->
    <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" class="mb-8 border-none bg-transparent p-0 text-sm" />

    <!-- Header -->
    <div class="flex items-center gap-4 mb-10">
      <div class="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
        <i class="pi pi-folder text-xl text-slate-600"></i>
      </div>
      <div>
        <h1 class="text-3xl font-bold text-slate-900">Projektaufgaben</h1>
        <p class="text-slate-600 mt-1">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</p>
      </div>
    </div>

    <!-- Filters -->
    <div class="flex gap-8 mb-8">
      <div class="flex flex-col gap-2">
        <label class="text-sm text-slate-700">Suche</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-search text-slate-400" />
          <InputText v-model="searchQuery" placeholder="Suche..." class="w-56" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-slate-700">Status</label>
        <Dropdown v-model="selectedStatus" :options="statuses" optionLabel="label" placeholder="Status auswählen" class="w-56" />
      </div>
    </div>

    <!-- Data Table -->
    <DataTable v-model:selection="selectedTasks" :value="tasks" dataKey="id" class="border border-slate-200 rounded-lg overflow-hidden">
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      
      <Column field="name" header="Aufgabe" class="font-medium"></Column>
      
      <Column field="assignee" header="Verantwortlicher">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <div class="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-sm text-slate-700">
              {{ slotProps.data.initials }}
            </div>
            <span>{{ slotProps.data.assignee }}</span>
          </div>
        </template>
      </Column>
      
      <Column field="progress" header="Status">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <div class="w-44 h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div class="h-full bg-emerald-500 rounded-full" :style="{ width: slotProps.data.progress + '%' }"></div>
            </div>
            <span class="text-xs text-slate-600 w-8">{{ slotProps.data.progress }} %</span>
          </div>
        </template>
      </Column>
      
      <Column field="status" header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="getStatusSeverity(slotProps.data.status)" class="font-bold" />
        </template>
      </Column>
      
      <Column field="dueDate" header="Fällig"></Column>
      
      <Column header="Aktionen" headerStyle="width: 6rem">
        <template #body="slotProps">
          <Button icon="pi pi-ellipsis-h" text rounded class="text-slate-500 hover:bg-slate-100" @click="toggleMenu($event, slotProps.data)" aria-haspopup="true" aria-controls="overlay_menu" />
        </template>
      </Column>
    </DataTable>

    <!-- Actions Menu -->
    <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" class="w-48" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Dropdown from 'primevue/dropdown';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import Menu from 'primevue/menu';

const breadcrumbHome = ref({ icon: 'pi pi-home' });
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
]);

const searchQuery = ref('');
const selectedStatus = ref(null);
const statuses = ref([
  { label: 'Offen', value: 'Offen' },
  { label: 'In Arbeit', value: 'In Arbeit' },
  { label: 'Blockiert', value: 'Blockiert' },
  { label: 'Fertig', value: 'Fertig' }
]);

const selectedTasks = ref([]);
const tasks = ref([
  { id: 1, name: 'Webseite Relaunch', assignee: 'Max Mustermann', initials: 'M', progress: 100, status: 'Fertig', dueDate: '03.06.2026' },
  { id: 2, name: 'Mobile App', assignee: 'Anna Schmidt', initials: 'A', progress: 45, status: 'In Arbeit', dueDate: '10.06.2026' },
  { id: 3, name: 'Marketing Kampagne', assignee: 'Lisa Weber', initials: 'L', progress: 0, status: 'Offen', dueDate: '18.05.2026' },
  { id: 4, name: 'API Migration', assignee: 'Paul Müller', initials: 'P', progress: 72, status: 'Blockiert', dueDate: '12.05.2026' },
]);

const menu = ref();
const activeTask = ref(null);
const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-sync' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);

const toggleMenu = (event, task) => {
  activeTask.value = task;
  menu.value.toggle(event);
};

const getStatusSeverity = (status) => {
  switch (status) {
    case 'Fertig': return 'success';
    case 'In Arbeit': return 'warning';
    case 'Offen': return 'info';
    case 'Blockiert': return 'danger';
    default: return 'info';
  }
};
</script>