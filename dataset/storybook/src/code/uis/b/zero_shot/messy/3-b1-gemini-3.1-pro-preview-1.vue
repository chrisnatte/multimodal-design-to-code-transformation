<template>
  <div class="min-h-screen bg-white p-8 flex flex-col gap-8 font-sans">
    <!-- Breadcrumb -->
    <div class="flex items-center gap-2 text-sm text-surface-600">
      <i class="pi pi-home"></i>
      <i class="pi pi-chevron-right text-xs"></i>
      <span>Projekte</span>
      <i class="pi pi-chevron-right text-xs"></i>
      <span>Projekt 1</span>
      <i class="pi pi-chevron-right text-xs"></i>
      <span class="font-medium text-surface-900">Aufgaben</span>
    </div>

    <!-- Header -->
    <div class="flex items-center gap-4">
      <div class="w-12 h-12 rounded-full bg-surface-100 flex items-center justify-center text-surface-600">
        <i class="pi pi-list text-xl"></i>
      </div>
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-surface-900 m-0">Projektaufgaben</h1>
        <p class="text-surface-600 m-0">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</p>
      </div>
    </div>

    <!-- Filters -->
    <div class="flex items-end gap-4">
      <div class="flex flex-col gap-2">
        <label class="text-sm text-surface-700">Suche</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-search" />
          <InputText v-model="searchQuery" placeholder="Suche..." class="w-56" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-surface-700">Status</label>
        <Select v-model="selectedStatus" :options="statuses" placeholder="Status auswählen" class="w-56" />
      </div>
    </div>

    <!-- Table -->
    <DataTable :value="tasks" class="w-full border border-surface-200 rounded-lg overflow-hidden">
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="name" header="Aufgabe" class="font-medium"></Column>
      <Column header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <Avatar :label="data.initials" shape="circle" class="bg-surface-200 text-surface-700" />
            <span>{{ data.assignee }}</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <ProgressBar :value="data.progress" :showValue="false" class="w-32 h-1.5" />
            <span class="text-xs text-surface-700">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig"></Column>
      <Column header="Aktionen" headerStyle="width: 5rem" bodyStyle="text-align: center">
        <template #body>
          <Button icon="pi pi-ellipsis-h" text rounded aria-haspopup="true" aria-controls="overlay_menu" @click="toggleMenu" />
        </template>
      </Column>
    </DataTable>

    <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Select from 'primevue/select';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import Menu from 'primevue/menu';
import Avatar from 'primevue/avatar';

const searchQuery = ref('');
const selectedStatus = ref(null);
const statuses = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig']);

const tasks = ref([
  { id: 1, name: 'Webseite Relaunch', assignee: 'Max Mustermann', initials: 'M', progress: 100, status: 'Fertig', dueDate: '03.06.2026' },
  { id: 2, name: 'Mobile App', assignee: 'Anna Schmidt', initials: 'A', progress: 45, status: 'In Arbeit', dueDate: '10.06.2026' },
  { id: 3, name: 'Marketing Kampagne', assignee: 'Lisa Weber', initials: 'L', progress: 0, status: 'Offen', dueDate: '18.05.2026' },
  { id: 4, name: 'API Migration', assignee: 'Paul Müller', initials: 'P', progress: 72, status: 'Blockiert', dueDate: '12.05.2026' }
]);

const menu = ref();
const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);

const toggleMenu = (event) => {
  menu.value.toggle(event);
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