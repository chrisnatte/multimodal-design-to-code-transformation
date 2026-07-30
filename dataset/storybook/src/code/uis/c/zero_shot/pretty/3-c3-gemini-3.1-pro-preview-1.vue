<template>
  <div class="min-h-screen bg-white p-8 font-sans text-slate-800">
    <!-- Header Section -->
    <div class="mb-6 flex items-start gap-4">
      <Button icon="pi pi-arrow-left" rounded outlined class="!text-slate-500 !border-slate-300 !w-10 !h-10" />
      <div>
        <h1 class="m-0 text-2xl font-bold text-slate-800">Projektaufgaben</h1>
        <p class="mt-1 text-slate-500">
          Hier werden alle Aufgaben des Projekts <span class="font-semibold">Projekt 1</span> aufgelistet.
        </p>
      </div>
    </div>

    <!-- Breadcrumb -->
    <Breadcrumb :home="home" :model="breadcrumbItems" class="mb-8 !bg-transparent !p-0 text-sm text-slate-500">
      <template #separator>
        <i class="pi pi-angle-right text-xs"></i>
      </template>
    </Breadcrumb>

    <!-- Filters -->
    <div class="mb-6 flex gap-6">
      <div class="flex flex-col gap-2">
        <label class="text-sm text-slate-600">Suche</label>
        <div class="relative">
          <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
          <InputText v-model="searchQuery" placeholder="Suche..." class="w-64 pl-10" />
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-slate-600">Status</label>
        <Select v-model="selectedStatus" :options="statusOptions" placeholder="Status auswählen" class="w-64" />
      </div>
    </div>

    <!-- DataTable -->
    <DataTable v-model:selection="selectedTasks" :value="tasks" dataKey="id" class="w-full">
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="name" header="Aufgabe" class="font-medium text-slate-800"></Column>
      <Column header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <div class="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-medium text-slate-600">
              {{ data.assignee.initial }}
            </div>
            <span class="text-slate-700">{{ data.assignee.name }}</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <div class="h-1.5 w-32 overflow-hidden rounded-full bg-slate-100">
              <div class="h-full bg-emerald-500" :style="{ width: data.progress + '%' }"></div>
            </div>
            <span class="w-10 text-sm text-slate-500">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="{ data }">
          <span :class="['rounded px-2.5 py-1 text-xs font-medium', getStatusClass(data.status)]">
            {{ data.status }}
          </span>
        </template>
      </Column>
      <Column header="Fällig">
        <template #body="{ data }">
          <span :class="['text-sm', { 'text-red-500': data.isOverdue, 'text-slate-700': !data.isOverdue }]">
            {{ data.dueDate }}
          </span>
        </template>
      </Column>
      <Column header="Aktionen">
        <template #body="{ data }">
          <Button icon="pi pi-ellipsis-h" text rounded class="!text-slate-400 hover:!bg-slate-100" @click="togglePopover($event)" />
        </template>
      </Column>
    </DataTable>

    <!-- Actions Popover -->
    <Popover ref="op">
      <div class="flex min-w-[14rem] flex-col gap-1 p-1">
        <Button label="Bearbeiten" icon="pi pi-pencil" text class="!justify-start !text-slate-700 hover:!bg-slate-50" />
        <Button label="Status aktualisieren" icon="pi pi-list" text class="!justify-start !text-slate-700 hover:!bg-slate-50" />
        <Button label="Löschen" icon="pi pi-trash" text class="!justify-start !text-slate-700 hover:!bg-slate-50" />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Button from 'primevue/button';
import Breadcrumb from 'primevue/breadcrumb';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Popover from 'primevue/popover';

const home = ref({ icon: 'pi pi-home' });
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
]);

const searchQuery = ref('');
const selectedStatus = ref('In Arbeit');
const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig']);

const tasks = ref([
  {
    id: 1,
    name: 'Webseite Relaunch',
    assignee: { name: 'Max Mustermann', initial: 'M' },
    progress: 100,
    status: 'Fertig',
    dueDate: '03.06.2026',
    isOverdue: false
  },
  {
    id: 2,
    name: 'Mobile App',
    assignee: { name: 'Anna Schmidt', initial: 'A' },
    progress: 45,
    status: 'In Arbeit',
    dueDate: '10.06.2026',
    isOverdue: false
  },
  {
    id: 3,
    name: 'Marketing Kampagne',
    assignee: { name: 'Lisa Weber', initial: 'L' },
    progress: 0,
    status: 'Offen',
    dueDate: '18.05.2026',
    isOverdue: false
  },
  {
    id: 4,
    name: 'API Migration',
    assignee: { name: 'Paul Müller', initial: 'P' },
    progress: 72,
    status: 'Blockiert',
    dueDate: '12.05.2026',
    isOverdue: true
  }
]);

const selectedTasks = ref([]);

onMounted(() => {
  selectedTasks.value = [tasks.value[0]];
});

const getStatusClass = (status) => {
  switch (status) {
    case 'Fertig':
      return 'bg-emerald-100 text-emerald-700';
    case 'In Arbeit':
      return 'bg-orange-100 text-orange-700';
    case 'Offen':
      return 'bg-blue-100 text-blue-700';
    case 'Blockiert':
      return 'bg-red-100 text-red-700';
    default:
      return 'bg-slate-100 text-slate-700';
  }
};

const op = ref();
const togglePopover = (event) => {
  op.value.toggle(event);
};
</script>