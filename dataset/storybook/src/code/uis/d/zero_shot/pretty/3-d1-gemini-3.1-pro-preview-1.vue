<template>
  <div class="bg-white min-h-screen p-16 flex flex-col gap-8">
    <!-- Header Section -->
    <div class="flex items-center gap-4">
      <Button icon="pi pi-arrow-left" rounded text severity="secondary" class="w-12 h-12 bg-surface-100" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-surface-900 m-0">Projektaufgaben</h1>
        <p class="text-surface-600 m-0">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</p>
      </div>
    </div>

    <!-- Breadcrumb -->
    <div class="flex items-center gap-2 text-surface-600 text-sm bg-white p-3 rounded-md w-fit">
      <i class="pi pi-home"></i>
      <i class="pi pi-chevron-right text-xs"></i>
      <span>Projekte</span>
      <i class="pi pi-chevron-right text-xs"></i>
      <span>Projekt 1</span>
      <i class="pi pi-chevron-right text-xs"></i>
      <span>Aufgaben</span>
    </div>

    <!-- Filters -->
    <div class="flex gap-4">
      <div class="flex flex-col gap-2 w-56">
        <label class="text-sm text-surface-700">Suche</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-search" />
          <InputText v-model="searchQuery" placeholder="Suche..." class="w-full" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2 w-56">
        <label class="text-sm text-surface-700">Status</label>
        <Select v-model="selectedStatus" :options="statusOptions" placeholder="Status auswählen" class="w-full" />
      </div>
    </div>

    <!-- DataTable -->
    <DataTable :value="tasks" class="w-full border border-surface-200 rounded-md" tableStyle="min-width: 50rem">
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="aufgabe" header="Aufgabe" class="font-medium"></Column>
      <Column field="verantwortlicher" header="Verantwortlicher">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar :label="slotProps.data.avatarLabel" shape="circle" class="bg-surface-200 text-surface-700" />
            <span>{{ slotProps.data.verantwortlicher }}</span>
          </div>
        </template>
      </Column>
      <Column field="fortschritt" header="Status">
        <template #body="slotProps">
          <div class="flex items-center gap-3 w-full">
            <ProgressBar :value="slotProps.data.fortschritt" :showValue="false" class="flex-1 h-1.5" :color="getProgressBarColor(slotProps.data.fortschritt)" />
            <span class="text-xs w-8">{{ slotProps.data.fortschritt }} %</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="getStatusSeverity(slotProps.data.status)" />
        </template>
      </Column>
      <Column field="faellig" header="Fällig"></Column>
      <Column header="Aktionen" headerStyle="width: 5rem">
        <template #body>
          <Button icon="pi pi-ellipsis-h" text severity="secondary" rounded @click="toggleMenu" />
        </template>
      </Column>
    </DataTable>

    <!-- Popover Menu (Hidden by default, shown for demonstration structure) -->
    <Menu ref="menu" :model="menuItems" :popup="true" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
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
import Menu from 'primevue/menu';

const searchQuery = ref('');
const selectedStatus = ref(null);

const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig']);

const tasks = ref([
  {
    id: 1,
    aufgabe: 'Webseite Relaunch',
    verantwortlicher: 'Max Mustermann',
    avatarLabel: 'M',
    fortschritt: 100,
    status: 'Fertig',
    faellig: '03.06.2026'
  },
  {
    id: 2,
    aufgabe: 'Mobile App',
    verantwortlicher: 'Anna Schmidt',
    avatarLabel: 'A',
    fortschritt: 45,
    status: 'In Arbeit',
    faellig: '10.06.2026'
  },
  {
    id: 3,
    aufgabe: 'Marketing Kampagne',
    verantwortlicher: 'Lisa Weber',
    avatarLabel: 'L',
    fortschritt: 0,
    status: 'Offen',
    faellig: '18.05.2026'
  },
  {
    id: 4,
    aufgabe: 'API Migration',
    verantwortlicher: 'Paul Müller',
    avatarLabel: 'P',
    fortschritt: 72,
    status: 'Blockiert',
    faellig: '12.05.2026'
  }
]);

const menu = ref();
const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
  { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
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

const getProgressBarColor = (value) => {
  if (value === 100) return '#10b981'; // success green
  if (value > 0) return '#10b981'; // success green
  return '#e2e8f0'; // surface-200
};
</script>