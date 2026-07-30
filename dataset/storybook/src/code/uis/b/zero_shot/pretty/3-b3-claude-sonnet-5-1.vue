<template>
  <div class="p-6 bg-white min-h-screen">
    <!-- Header Row -->
    <div class="flex items-center gap-4 mb-6">
      <Button icon="pi pi-arrow-circle-left" rounded text severity="secondary" class="!w-[50px] !h-[50px]" />
      <div class="flex flex-col gap-1">
        <span class="text-3xl font-bold">Projektaufgaben</span>
        <span class="text-base text-surface-600">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</span>
      </div>
    </div>

    <!-- Breadcrumb -->
    <Breadcrumb :home="home" :model="breadcrumbItems" class="mb-6 w-fit" />

    <!-- Filters -->
    <div class="flex gap-4 mb-6">
      <InputText v-model="search" placeholder="Suche..." class="w-[216px]">
        <template #default>
          <span class="pi pi-search"></span>
        </template>
      </InputText>
      <Select v-model="selectedStatus" :options="statusOptions" optionLabel="label" placeholder="Status auswählen" class="w-[216px]" />
    </div>

    <!-- DataTable -->
    <DataTable :value="tasks" tableStyle="min-width: 50rem" selectionMode="multiple" v-model:selection="selectedTasks">
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="task" header="Aufgabe"></Column>
      <Column header="Verantwortlicher">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar :label="slotProps.data.responsible.charAt(0)" shape="circle" class="bg-surface-200" />
            <span>{{ slotProps.data.responsible }}</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="slotProps">
          <div class="flex items-center gap-3 w-full">
            <ProgressBar :value="slotProps.data.progress" :showValue="false" class="flex-1 h-[6px]" />
            <span class="text-xs">{{ slotProps.data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
        </template>
      </Column>
      <Column field="due" header="Fällig"></Column>
      <Column header="Aktionen">
        <template #body="slotProps">
          <Button icon="pi pi-ellipsis-h" text severity="secondary" @click="toggleActions($event, slotProps.data)" />
        </template>
      </Column>
    </DataTable>

    <!-- Popover for row actions -->
    <Popover ref="actionsPopover">
      <div class="flex flex-col gap-2 w-[177px]">
        <Button label="Bearbeiten" icon="pi pi-pen-to-square" outlined severity="secondary" />
        <Button label="Status aktualisieren" icon="pi pi-list-check" outlined severity="secondary" />
        <Button label="Löschen" icon="pi pi-trash" outlined severity="secondary" />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Avatar from 'primevue/avatar';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';
import Popover from 'primevue/popover';

const home = ref({ icon: 'pi pi-home', url: '/' });
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
]);

const search = ref('');
const selectedStatus = ref(null);
const statusOptions = ref([
  { label: 'Offen', value: 'Offen' },
  { label: 'In Arbeit', value: 'In Arbeit' },
  { label: 'Blockiert', value: 'Blockiert' },
  { label: 'Fertig', value: 'Fertig' }
]);

const selectedTasks = ref([]);

const tasks = ref([
  { task: 'Webseite Relaunch', responsible: 'Max Mustermann', progress: 100, status: 'Fertig', due: '03.06.2026' },
  { task: 'Mobile App', responsible: 'Anna Schmidt', progress: 45, status: 'In Arbeit', due: '10.06.2026' },
  { task: 'Marketing Kampagne', responsible: 'Lisa Weber', progress: 0, status: 'Offen', due: '18.05.2026' },
  { task: 'API Migration', responsible: 'Paul Müller', progress: 72, status: 'Blockiert', due: '12.05.2026' }
]);

const actionsPopover = ref();
const selectedRow = ref(null);

function toggleActions(event, data) {
  selectedRow.value = data;
  actionsPopover.value.toggle(event);
}

function getSeverity(status) {
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
      return 'secondary';
  }
}
</script>