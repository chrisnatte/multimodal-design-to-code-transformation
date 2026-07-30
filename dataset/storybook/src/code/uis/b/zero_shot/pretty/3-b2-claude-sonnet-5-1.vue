<template>
  <div class="p-6">
    <!-- Header Row -->
    <div class="flex items-center gap-4 mb-4">
      <Button icon="pi pi-arrow-circle-left" rounded text severity="secondary" aria-label="Back" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Projektaufgaben</h1>
        <p class="text-base text-gray-500">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</p>
      </div>
    </div>

    <!-- Breadcrumb -->
    <div class="mb-6">
      <Breadcrumb :home="home" :model="breadcrumbItems" />
    </div>

    <!-- Filters -->
    <div class="flex gap-4 mb-6">
      <div class="flex flex-col gap-1">
        <label for="search">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText id="search" v-model="searchValue" placeholder="Suche..." class="w-56" />
        </IconField>
      </div>
      <div class="flex flex-col gap-1">
        <label for="status">Status</label>
        <Select
          id="status"
          v-model="selectedStatus"
          :options="statusOptions"
          optionLabel="label"
          optionValue="value"
          placeholder="Status auswählen"
          class="w-56"
        />
      </div>
    </div>

    <!-- DataTable -->
    <DataTable
      :value="tasks"
      v-model:selection="selectedTasks"
      dataKey="id"
      tableStyle="min-width: 60rem"
    >
      <Column selectionMode="multiple" headerStyle="width: 3rem" />
      <Column field="name" header="Aufgabe" />
      <Column header="Verantwortlicher">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar :label="slotProps.data.responsible.charAt(0)" shape="circle" />
            <span>{{ slotProps.data.responsible }}</span>
          </div>
        </template>
      </Column>
      <Column header="Status" field="progress">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <ProgressBar :value="slotProps.data.progress" :showValue="false" style="height: 6px" class="flex-1" />
            <span class="text-sm">{{ slotProps.data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column header="Status" field="status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
        </template>
      </Column>
      <Column field="due" header="Fällig" />
      <Column header="Aktionen">
        <template #body="slotProps">
          <Button
            icon="pi pi-ellipsis-h"
            text
            rounded
            severity="secondary"
            @click="toggleActions($event, slotProps.data)"
            aria-label="Aktionen"
          />
        </template>
      </Column>
    </DataTable>

    <!-- Popover for row actions -->
    <Popover ref="actionsPopover">
      <div class="flex flex-col gap-2 w-44">
        <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined fluid @click="hideActions" />
        <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" outlined fluid @click="hideActions" />
        <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined fluid @click="hideActions" />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
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
import Popover from 'primevue/popover';

const home = ref({ icon: 'pi pi-home' });
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
]);

const searchValue = ref('');
const selectedStatus = ref(null);
const statusOptions = ref([
  { label: 'Offen', value: 'Offen' },
  { label: 'In Arbeit', value: 'In Arbeit' },
  { label: 'Blockiert', value: 'Blockiert' },
  { label: 'Fertig', value: 'Fertig' }
]);

const selectedTasks = ref([]);

const tasks = ref([
  { id: 1, name: 'Webseite Relaunch', responsible: 'Max Mustermann', progress: 100, status: 'Fertig', due: '03.06.2026' },
  { id: 2, name: 'Mobile App', responsible: 'Anna Schmidt', progress: 45, status: 'In Arbeit', due: '10.06.2026' },
  { id: 3, name: 'Marketing Kampagne', responsible: 'Lisa Weber', progress: 0, status: 'Offen', due: '18.05.2026' },
  { id: 4, name: 'API Migration', responsible: 'Paul Müller', progress: 72, status: 'Blockiert', due: '12.05.2026' }
]);

const actionsPopover = ref();

const toggleActions = (event) => {
  actionsPopover.value.toggle(event);
};

const hideActions = () => {
  actionsPopover.value.hide();
};

const getSeverity = (status) => {
  switch (status) {
    case 'Fertig':
      return 'success';
    case 'In Arbeit':
      return 'warn';
    case 'Blockiert':
      return 'danger';
    case 'Offen':
      return 'info';
    default:
      return null;
  }
};
</script>