<template>
  <div class="p-6 bg-white min-h-screen">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-4">
      <Button rounded severity="secondary" text class="!bg-slate-100">
        <i class="pi pi-arrow-circle-left text-2xl"></i>
      </Button>
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-gray-800">Projektaufgaben</h1>
        <p class="text-base text-gray-500">
          Hier werden alle Aufgaben des Projekts <span class="font-semibold">Projekt 1</span> aufgelistet.
        </p>
      </div>
    </div>

    <!-- Breadcrumb -->
    <div class="mb-6">
      <Breadcrumb :home="home" :model="breadcrumbItems" />
    </div>

    <!-- Filters -->
    <div class="flex gap-4 mb-6">
      <div class="flex flex-col gap-1 w-56">
        <label class="text-sm text-gray-700">Suche</label>
        <InputText v-model="search" placeholder="Suche..." class="w-full">
          <template #default>
            <i class="pi pi-search"></i>
          </template>
        </InputText>
      </div>
      <div class="flex flex-col gap-1 w-56">
        <label class="text-sm text-gray-700">Status</label>
        <Select
          v-model="statusFilter"
          :options="statusOptions"
          optionLabel="label"
          optionValue="value"
          placeholder="Status auswählen"
          class="w-full"
        />
      </div>
    </div>

    <!-- Data Table -->
    <DataTable
      v-model:selection="selectedTasks"
      :value="tasks"
      dataKey="id"
      tableStyle="min-width: 60rem"
      showGridlines
    >
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>

      <Column field="name" header="Aufgabe"></Column>

      <Column header="Verantwortlicher">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar :label="slotProps.data.avatar" shape="circle" class="bg-slate-200" />
            <span>{{ slotProps.data.responsible }}</span>
          </div>
        </template>
      </Column>

      <Column header="Status" field="progress">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <ProgressBar
              :value="slotProps.data.progress"
              :showValue="false"
              class="w-full h-1.5"
              style="width: 180px"
            />
            <span class="text-xs text-gray-500">{{ slotProps.data.progress }} %</span>
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
          <span :class="slotProps.data.status === 'Blockiert' ? 'text-red-500' : 'text-gray-700'">
            {{ slotProps.data.due }}
          </span>
        </template>
      </Column>

      <Column header="Aktionen" headerStyle="width: 6rem">
        <template #body="slotProps">
          <Button
            icon="pi pi-ellipsis-h"
            text
            severity="secondary"
            @click="toggleMenu($event, slotProps.data)"
          />
        </template>
      </Column>
    </DataTable>

    <!-- Popover for row actions -->
    <Popover ref="menuRef">
      <div class="flex flex-col gap-2 w-44">
        <Button
          label="Bearbeiten"
          icon="pi pi-pencil"
          outlined
          severity="secondary"
          class="w-full justify-start"
          @click="onEdit"
        />
        <Button
          label="Status aktualisieren"
          icon="pi pi-list-check"
          outlined
          severity="secondary"
          class="w-full justify-start"
          @click="onUpdateStatus"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          outlined
          severity="secondary"
          class="w-full justify-start"
          @click="onDelete"
        />
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
const statusFilter = ref(null);

const statusOptions = ref([
  { label: 'Offen', value: 'Offen' },
  { label: 'In Arbeit', value: 'In Arbeit' },
  { label: 'Blockiert', value: 'Blockiert' },
  { label: 'Fertig', value: 'Fertig' }
]);

const tasks = ref([
  {
    id: 1,
    name: 'Webseite Relaunch',
    responsible: 'Max Mustermann',
    avatar: 'M',
    progress: 100,
    status: 'Fertig',
    due: '03.06.2026'
  },
  {
    id: 2,
    name: 'Mobile App',
    responsible: 'Anna Schmidt',
    avatar: 'A',
    progress: 45,
    status: 'In Arbeit',
    due: '10.06.2026'
  },
  {
    id: 3,
    name: 'Marketing Kampagne',
    responsible: 'Lisa Weber',
    avatar: 'L',
    progress: 0,
    status: 'Offen',
    due: '18.05.2026'
  },
  {
    id: 4,
    name: 'API Migration',
    responsible: 'Paul Müller',
    avatar: 'P',
    progress: 72,
    status: 'Blockiert',
    due: '12.05.2026'
  }
]);

const selectedTasks = ref([tasks.value[0]]);

const menuRef = ref();
const activeTask = ref(null);

const toggleMenu = (event, data) => {
  activeTask.value = data;
  menuRef.value.toggle(event);
};

const onEdit = () => {
  menuRef.value.hide();
};

const onUpdateStatus = () => {
  menuRef.value.hide();
};

const onDelete = () => {
  menuRef.value.hide();
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
      return 'secondary';
  }
};
</script>