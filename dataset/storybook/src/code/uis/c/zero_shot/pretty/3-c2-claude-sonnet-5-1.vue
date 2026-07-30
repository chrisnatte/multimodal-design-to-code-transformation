<template>
  <div class="p-8">
    <div class="flex items-start gap-4 mb-2">
      <Button icon="pi pi-arrow-left" rounded outlined severity="secondary" />
      <div>
        <h1 class="text-3xl font-bold text-surface-900 m-0">Projektaufgaben</h1>
        <p class="text-surface-500 mt-2 mb-0">
          Hier werden alle Aufgaben des Projekts <span class="font-bold">Projekt 1</span> aufgelistet.
        </p>
      </div>
    </div>

    <Breadcrumb :home="home" :model="breadcrumbItems" class="mb-6 bg-transparent border-none p-0" />

    <div class="flex gap-8 mb-4">
      <div class="flex flex-col gap-2">
        <label class="text-sm text-surface-700">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText v-model="search" placeholder="Suche..." />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-surface-700">Status</label>
        <Select v-model="selectedStatus" :options="statusOptions" placeholder="Status auswählen" class="w-56" />
      </div>
    </div>

    <DataTable :value="tasks" v-model:selection="selectedTasks" dataKey="id" tableStyle="min-width: 60rem">
      <Column selectionMode="multiple" headerStyle="width: 3rem" />
      <Column field="name" header="Aufgabe" />
      <Column field="responsible" header="Verantwortlicher">
        <template #body="slotProps">
          <div class="flex items-center gap-2">
            <Avatar :label="slotProps.data.initial" shape="circle" size="normal" class="bg-surface-200 text-surface-700" />
            <span>{{ slotProps.data.responsible }}</span>
          </div>
        </template>
      </Column>
      <Column field="progress" header="Status">
        <template #body="slotProps">
          <div class="flex items-center gap-2">
            <ProgressBar :value="slotProps.data.progress" :showValue="false" style="height: 6px; width: 150px" />
            <span class="text-sm text-surface-600">{{ slotProps.data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
        </template>
      </Column>
      <Column field="due" header="Fällig">
        <template #body="slotProps">
          <span :class="slotProps.data.status === 'Blockiert' ? 'text-red-500' : ''">{{ slotProps.data.due }}</span>
        </template>
      </Column>
      <Column header="Aktionen">
        <template #body="slotProps">
          <Button icon="pi pi-ellipsis-h" text rounded severity="secondary" @click="toggleMenu($event, slotProps.data)" />
        </template>
      </Column>
    </DataTable>

    <Popover ref="menu">
      <div class="flex flex-col gap-1 w-48">
        <Button label="Bearbeiten" icon="pi pi-pencil" text severity="secondary" class="justify-start w-full" />
        <Button label="Status aktualisieren" icon="pi pi-list" text severity="secondary" class="justify-start w-full" />
        <Button label="Löschen" icon="pi pi-trash" text severity="danger" class="justify-start w-full" />
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

const search = ref('');
const selectedStatus = ref(null);
const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig']);

const tasks = ref([
  { id: 1, name: 'Webseite Relaunch', responsible: 'Max Mustermann', initial: 'M', progress: 100, status: 'Fertig', due: '03.06.2026' },
  { id: 2, name: 'Mobile App', responsible: 'Anna Schmidt', initial: 'A', progress: 45, status: 'In Arbeit', due: '10.06.2026' },
  { id: 3, name: 'Marketing Kampagne', responsible: 'Lisa Weber', initial: 'L', progress: 0, status: 'Offen', due: '18.05.2026' },
  { id: 4, name: 'API Migration', responsible: 'Paul Müller', initial: 'P', progress: 72, status: 'Blockiert', due: '12.05.2026' }
]);

const selectedTasks = ref([tasks.value[0]]);

const menu = ref();
const toggleMenu = (event) => {
  menu.value.toggle(event);
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
      return null;
  }
};
</script>