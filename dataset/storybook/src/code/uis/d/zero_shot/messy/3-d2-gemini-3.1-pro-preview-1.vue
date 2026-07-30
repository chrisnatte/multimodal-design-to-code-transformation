<template>
  <div class="min-h-screen bg-white p-8 font-sans text-slate-800">
    <!-- Header Section -->
    <div class="mb-6 flex items-start gap-4">
      <Button
        icon="pi pi-arrow-left"
        rounded
        text
        class="h-12 w-12 bg-slate-100 text-slate-600 hover:bg-slate-200"
      />
      <div>
        <h1 class="m-0 text-[32px] font-bold text-slate-800">Projektaufgaben</h1>
        <p class="mt-2 text-base text-slate-500">
          Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.
        </p>
      </div>
    </div>

    <!-- Breadcrumb -->
    <Breadcrumb
      :home="home"
      :model="breadcrumbItems"
      class="mb-8 border-none bg-transparent p-0 text-sm"
    />

    <!-- Filters Section -->
    <div class="mb-6 flex gap-6">
      <div class="flex flex-col gap-2">
        <label class="text-sm font-medium text-slate-700">Suche</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-search text-slate-400" />
          <InputText
            v-model="searchQuery"
            placeholder="Suche..."
            class="w-[216px]"
          />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm font-medium text-slate-700">Status</label>
        <Select
          v-model="selectedStatus"
          :options="statuses"
          placeholder="Status auswählen"
          class="w-[216px]"
        />
      </div>
    </div>

    <!-- Data Table -->
    <DataTable
      :value="tasks"
      v-model:selection="selectedTasks"
      dataKey="id"
      class="w-full"
      :pt="{
        thead: { class: 'border-y border-slate-200 bg-white' },
        headerRow: { class: 'text-slate-700' },
        bodyRow: { class: 'border-b border-slate-100' }
      }"
    >
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="name" header="Aufgabe" class="font-medium text-slate-800"></Column>
      <Column field="assignee" header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar
              :label="data.initials"
              shape="circle"
              class="h-7 w-7 bg-slate-200 text-sm text-slate-700"
            />
            <span class="text-slate-600">{{ data.assignee }}</span>
          </div>
        </template>
      </Column>
      <Column field="progress" header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-4">
            <ProgressBar
              :value="data.progress"
              :showValue="false"
              class="h-1.5 w-[182px] bg-slate-100"
              :pt="{
                value: { class: 'bg-emerald-500 rounded-full' }
              }"
            />
            <span class="w-8 text-xs text-slate-500">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag
            :value="data.status"
            :severity="getStatusSeverity(data.status)"
            class="font-bold"
          />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig">
        <template #body="{ data }">
          <span :class="data.overdue ? 'text-red-500' : 'text-slate-600'">
            {{ data.dueDate }}
          </span>
        </template>
      </Column>
      <Column header="Aktionen">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            text
            rounded
            class="text-slate-400 hover:text-slate-600"
            @click="toggleMenu($event, data)"
          />
        </template>
      </Column>
    </DataTable>

    <!-- Actions Menu -->
    <Menu ref="actionMenu" :model="menuItems" :popup="true" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
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
const home = ref({ icon: 'pi pi-home' });
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
]);

// Filter State
const searchQuery = ref('');
const selectedStatus = ref(null);
const statuses = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig']);

// Table Data State
const tasks = ref([
  {
    id: 1,
    name: 'Webseite Relaunch',
    assignee: 'Max Mustermann',
    initials: 'M',
    progress: 100,
    status: 'Fertig',
    dueDate: '03.06.2026',
    overdue: false
  },
  {
    id: 2,
    name: 'Mobile App',
    assignee: 'Anna Schmidt',
    initials: 'A',
    progress: 45,
    status: 'In Arbeit',
    dueDate: '10.06.2026',
    overdue: false
  },
  {
    id: 3,
    name: 'Marketing Kampagne',
    assignee: 'Lisa Weber',
    initials: 'L',
    progress: 0,
    status: 'Offen',
    dueDate: '18.05.2026',
    overdue: false
  },
  {
    id: 4,
    name: 'API Migration',
    assignee: 'Paul Müller',
    initials: 'P',
    progress: 72,
    status: 'Blockiert',
    dueDate: '12.05.2026',
    overdue: true
  }
]);

const selectedTasks = ref([]);

// Set initial selection based on mockup
onMounted(() => {
  selectedTasks.value = [tasks.value[0]];
});

// Helper for Tag Severity
const getStatusSeverity = (status) => {
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

// Action Menu State
const actionMenu = ref(null);
const selectedRowData = ref(null);

const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-file-edit' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);

const toggleMenu = (event, data) => {
  selectedRowData.value = data;
  actionMenu.value.toggle(event);
};
</script>