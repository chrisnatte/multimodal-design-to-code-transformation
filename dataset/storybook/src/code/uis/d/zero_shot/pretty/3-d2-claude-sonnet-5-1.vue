<template>
  <div class="p-6">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-2">
      <Button icon="pi pi-arrow-circle-left" severity="secondary" text rounded size="large" aria-label="Back" />
      <div>
        <h1 class="text-3xl font-bold m-0">Projektaufgaben</h1>
        <p class="text-base text-color-secondary m-0">
          Hier werden alle Aufgaben des Projekts <strong>Projekt 1</strong> aufgelistet.
        </p>
      </div>
    </div>

    <!-- Breadcrumb -->
    <Breadcrumb :home="home" :model="breadcrumbItems" class="mb-6 w-fit" />

    <!-- Filters -->
    <div class="flex gap-4 mb-4">
      <div class="flex flex-col gap-1">
        <label class="text-sm">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText v-model="search" placeholder="Suche..." style="width: 216px" />
        </IconField>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-sm">Status</label>
        <Select
          v-model="statusFilter"
          :options="statusOptions"
          optionLabel="label"
          optionValue="value"
          placeholder="Status auswählen"
          style="width: 216px"
        />
      </div>
    </div>

    <!-- DataTable -->
    <DataTable :value="tasks" v-model:selection="selectedTasks" dataKey="id" tableStyle="min-width: 50rem">
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
            <ProgressBar :value="slotProps.data.progress" :showValue="false" style="height: 6px; width: 182px" />
            <span class="text-sm">{{ slotProps.data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column header="Status" field="status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
        </template>
      </Column>
      <Column field="due" header="Fällig">
        <template #body="slotProps">
          <span :class="{ 'text-red-500': slotProps.data.overdue }">{{ slotProps.data.due }}</span>
        </template>
      </Column>
      <Column header="Aktionen">
        <template #body="slotProps">
          <Button icon="pi pi-ellipsis-h" severity="secondary" text rounded @click="toggleMenu($event, slotProps.data)" />
        </template>
      </Column>
    </DataTable>

    <!-- Popover Actions -->
    <Popover ref="op">
      <div class="flex flex-col gap-2" style="width: 177px">
        <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined @click="hideMenu" />
        <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" outlined @click="hideMenu" />
        <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined @click="hideMenu" />
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

const search = ref('');
const statusFilter = ref(null);
const statusOptions = ref([
  { label: 'Offen', value: 'Offen' },
  { label: 'In Arbeit', value: 'In Arbeit' },
  { label: 'Blockiert', value: 'Blockiert' },
  { label: 'Fertig', value: 'Fertig' }
]);

const tasks = ref([
  { id: 1, name: 'Webseite Relaunch', responsible: 'Max Mustermann', progress: 100, status: 'Fertig', due: '03.06.2026', overdue: false },
  { id: 2, name: 'Mobile App', responsible: 'Anna Schmidt', progress: 45, status: 'In Arbeit', due: '10.06.2026', overdue: false },
  { id: 3, name: 'Marketing Kampagne', responsible: 'Lisa Weber', progress: 0, status: 'Offen', due: '18.05.2026', overdue: false },
  { id: 4, name: 'API Migration', responsible: 'Paul Müller', progress: 72, status: 'Blockiert', due: '12.05.2026', overdue: true }
]);

const selectedTasks = ref([tasks.value[0]]);

const op = ref();
const activeTask = ref(null);

const toggleMenu = (event, data) => {
  activeTask.value = data;
  op.value.toggle(event);
};

const hideMenu = () => {
  op.value.hide();
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