<template>
  <div class="flex flex-col gap-6 p-16">
    <div class="flex items-center gap-4">
      <Button icon="pi pi-arrow-left" rounded severity="secondary" class="!h-12 !w-12" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Projektaufgaben</h1>
        <p class="text-base text-surface-600">
          Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.
        </p>
      </div>
    </div>

    <Breadcrumb :home="home" :model="items" class="w-fit" />

    <div class="flex items-end gap-4">
      <div class="flex flex-col gap-2">
        <label for="search" class="text-sm">Suche</label>
        <InputText
          id="search"
          v-model="searchQuery"
          placeholder="Suche..."
          class="w-56"
        >
          <template #prefix>
            <i class="pi pi-search" />
          </template>
        </InputText>
      </div>
      <div class="flex flex-col gap-2">
        <label for="status" class="text-sm">Status</label>
        <Select
          id="status"
          v-model="selectedStatus"
          :options="statusOptions"
          placeholder="Status auswählen"
          class="w-56"
        />
      </div>
    </div>

    <DataTable :value="tasks" class="w-full">
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="name" header="Aufgabe"></Column>
      <Column field="assignee" header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.assignee.charAt(0)" shape="circle" />
            <span>{{ data.assignee }}</span>
          </div>
        </template>
      </Column>
      <Column field="progress" header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <ProgressBar :value="data.progress" :showValue="false" class="h-1.5 w-32" />
            <span class="text-xs">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig"></Column>
      <Column header="Aktionen">
        <template #body>
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            rounded
            aria-haspopup="true"
            aria-controls="overlay_menu"
            @click="toggleMenu"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="menu" id="overlay_menu">
      <div class="flex flex-col gap-2 p-2">
        <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined class="w-full justify-start" />
        <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" outlined class="w-full justify-start" />
        <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="w-full justify-start" />
      </div>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import Breadcrumb from 'primevue/breadcrumb';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Avatar from 'primevue/avatar';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';
import Popover from 'primevue/popover';

const home = ref({ icon: 'pi pi-home' });
const items = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
]);

const searchQuery = ref('');
const selectedStatus = ref();
const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig']);

const tasks = ref([
  {
    name: 'Webseite Relaunch',
    assignee: 'Max Mustermann',
    progress: 100,
    status: 'Fertig',
    dueDate: '03.06.2026'
  },
  {
    name: 'Mobile App',
    assignee: 'Anna Schmidt',
    progress: 45,
    status: 'In Arbeit',
    dueDate: '10.06.2026'
  },
  {
    name: 'Marketing Kampagne',
    assignee: 'Lisa Weber',
    progress: 0,
    status: 'Offen',
    dueDate: '18.05.2026'
  },
  {
    name: 'API Migration',
    assignee: 'Paul Müller',
    progress: 72,
    status: 'Blockiert',
    dueDate: '12.05.2026'
  }
]);

const menu = ref();

const toggleMenu = (event: Event) => {
  menu.value.toggle(event);
};

const getStatusSeverity = (status: string) => {
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
      return 'info';
  }
};
</script>