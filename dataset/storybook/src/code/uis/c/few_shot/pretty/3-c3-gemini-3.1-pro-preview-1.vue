<template>
  <div class="flex flex-col gap-8 p-8 font-sans text-surface-700">
    <!-- Header Section -->
    <div class="flex items-start gap-4">
      <Button icon="pi pi-arrow-left" outlined rounded severity="secondary" class="mt-1 h-8 w-8 !p-0" aria-label="Zurück" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-surface-900">Projektaufgaben</h1>
        <p class="text-surface-500">Hier werden alle Aufgaben des Projekts <span class="font-semibold">Projekt 1</span> aufgelistet.</p>
      </div>
    </div>

    <!-- Breadcrumb -->
    <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" class="!border-none !bg-transparent !p-0 text-sm" />

    <!-- Filters Section -->
    <div class="flex gap-6">
      <div class="flex flex-col gap-2">
        <label for="search" class="text-sm font-medium text-surface-600">Suche</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-search" />
          <InputText id="search" v-model="searchQuery" placeholder="Suche..." class="w-64" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label for="status-filter" class="text-sm font-medium text-surface-600">Status</label>
        <Select id="status-filter" v-model="selectedStatus" :options="statusOptions" placeholder="Status auswählen" class="w-56" />
      </div>
    </div>

    <!-- Data Table -->
    <DataTable v-model:selection="selectedTasks" :value="tasks" dataKey="id" class="w-full">
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      
      <Column field="aufgabe" header="Aufgabe" class="font-medium text-surface-900"></Column>
      
      <Column header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.avatarLabel" shape="circle" class="bg-surface-100 text-surface-600" />
            <span>{{ data.verantwortlicher }}</span>
          </div>
        </template>
      </Column>
      
      <Column header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <ProgressBar :value="data.progress" :showValue="false" class="h-1.5 w-24" :pt="{ value: { class: '!bg-emerald-500' } }" />
            <span class="text-sm text-surface-500">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      
      <Column header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" rounded />
        </template>
      </Column>
      
      <Column header="Fällig">
        <template #body="{ data }">
          <span :class="{ 'text-red-500': data.status === 'Blockiert' }">{{ data.faellig }}</span>
        </template>
      </Column>
      
      <Column header="Aktionen" headerStyle="width: 5rem" bodyStyle="text-align: center">
        <template #body="{ event }">
          <Button icon="pi pi-ellipsis-h" text rounded severity="secondary" @click="toggleMenu" aria-haspopup="true" aria-controls="actions_menu" />
        </template>
      </Column>
    </DataTable>

    <!-- Actions Menu -->
    <Menu ref="actionsMenu" id="actions_menu" :model="menuItems" popup />
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

// Breadcrumb State
const breadcrumbHome = ref({ icon: 'pi pi-home' });
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
]);

// Filters State
const searchQuery = ref('');
const selectedStatus = ref('In Arbeit'); // Pre-selected to match visual hint in mockup
const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig']);

// Table Data State
const tasks = ref([
  { id: 1, aufgabe: 'Webseite Relaunch', avatarLabel: 'M', verantwortlicher: 'Max Mustermann', progress: 100, status: 'Fertig', faellig: '03.06.2026' },
  { id: 2, aufgabe: 'Mobile App', avatarLabel: 'A', verantwortlicher: 'Anna Schmidt', progress: 45, status: 'In Arbeit', faellig: '10.06.2026' },
  { id: 3, aufgabe: 'Marketing Kampagne', avatarLabel: 'L', verantwortlicher: 'Lisa Weber', progress: 0, status: 'Offen', faellig: '18.05.2026' },
  { id: 4, aufgabe: 'API Migration', avatarLabel: 'P', verantwortlicher: 'Paul Müller', progress: 72, status: 'Blockiert', faellig: '12.05.2026' }
]);

// Pre-select the first row as shown in the mockup
const selectedTasks = ref([tasks.value[0]]);

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

// Actions Menu State
const actionsMenu = ref();
const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-file-edit' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);

const toggleMenu = (event) => {
  actionsMenu.value.toggle(event);
};
</script>