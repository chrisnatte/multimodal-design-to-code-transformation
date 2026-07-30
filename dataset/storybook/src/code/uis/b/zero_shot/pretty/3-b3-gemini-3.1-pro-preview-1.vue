<template>
  <div class="min-h-screen bg-white p-8 flex flex-col gap-8 font-sans">
    <!-- Breadcrumb -->
    <div class="bg-white rounded-md p-3.5 w-max">
      <Breadcrumb :home="home" :model="breadcrumbItems" class="border-none p-0" />
    </div>

    <!-- Header Section -->
    <div class="flex items-center gap-4">
      <Button 
        icon="pi pi-arrow-left" 
        severity="secondary" 
        variant="text" 
        rounded 
        class="w-12 h-12 bg-surface-100 hover:bg-surface-200" 
      />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-surface-900 m-0">Projektaufgaben</h1>
        <p class="text-base text-surface-600 m-0">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</p>
      </div>
    </div>

    <!-- Filters Section -->
    <div class="flex items-center gap-4">
      <div class="flex flex-col gap-2">
        <label class="text-sm text-surface-700">Suche</label>
        <div class="relative">
          <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-surface-400 z-10"></i>
          <InputText v-model="searchQuery" placeholder="Suche..." class="pl-10 w-56" />
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-surface-700">Status</label>
        <Select 
          v-model="selectedStatus" 
          :options="statusOptions" 
          placeholder="Status auswählen" 
          class="w-56" 
        />
      </div>
    </div>

    <!-- DataTable Section -->
    <div class="border border-surface-200 rounded-lg overflow-hidden">
      <DataTable 
        :value="tasks" 
        v-model:selection="selectedTasks" 
        dataKey="id" 
        class="w-full"
        :pt="{
          headerRow: 'bg-white',
          thead: 'border-b border-surface-200'
        }"
      >
        <Column selectionMode="multiple" headerStyle="width: 4.5rem" bodyStyle="text-align: center"></Column>
        <Column field="name" header="Aufgabe" class="font-medium text-surface-900"></Column>
        <Column header="Verantwortlicher">
          <template #body="{ data }">
            <div class="flex items-center gap-3">
              <div class="w-7 h-7 rounded-full bg-surface-200 flex items-center justify-center text-sm text-surface-700">
                {{ data.assignee.initials }}
              </div>
              <span class="text-surface-700">{{ data.assignee.name }}</span>
            </div>
          </template>
        </Column>
        <Column header="Status">
          <template #body="{ data }">
            <div class="flex items-center gap-3 w-56">
              <div class="flex-grow h-1.5 bg-surface-200 rounded-full overflow-hidden">
                <div 
                  class="h-full bg-primary-500 rounded-full" 
                  :style="{ width: data.progress + '%' }"
                ></div>
              </div>
              <span class="text-xs text-surface-700 w-8">{{ data.progress }} %</span>
            </div>
          </template>
        </Column>
        <Column header="Status">
          <template #body="{ data }">
            <Tag :value="data.status.label" :severity="data.status.severity" class="font-bold" />
          </template>
        </Column>
        <Column field="dueDate" header="Fällig" class="text-surface-700"></Column>
        <Column header="Aktionen" headerStyle="width: 6rem" bodyStyle="text-align: center">
          <template #body="{ data }">
            <Button 
              icon="pi pi-ellipsis-h" 
              severity="secondary" 
              variant="text" 
              rounded 
              @click="togglePopover($event, data)" 
            />
          </template>
        </Column>
      </DataTable>
    </div>

    <!-- Action Popover -->
    <Popover ref="actionPopover" class="w-48">
      <div class="flex flex-col gap-2 p-2">
        <Button 
          label="Bearbeiten" 
          icon="pi pi-pen-to-square" 
          severity="secondary" 
          variant="text" 
          class="justify-start w-full text-surface-700 hover:bg-surface-100" 
        />
        <Button 
          label="Status aktualisieren" 
          icon="pi pi-list-check" 
          severity="secondary" 
          variant="text" 
          class="justify-start w-full text-surface-700 hover:bg-surface-100" 
        />
        <Button 
          label="Löschen" 
          icon="pi pi-trash" 
          severity="secondary" 
          variant="text" 
          class="justify-start w-full text-surface-700 hover:bg-surface-100" 
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
import Tag from 'primevue/tag';
import Popover from 'primevue/popover';

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
const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig']);

// DataTable State
const selectedTasks = ref([]);
const tasks = ref([
  {
    id: 1,
    name: 'Webseite Relaunch',
    assignee: { name: 'Max Mustermann', initials: 'M' },
    progress: 100,
    status: { label: 'Fertig', severity: 'success' },
    dueDate: '03.06.2026'
  },
  {
    id: 2,
    name: 'Mobile App',
    assignee: { name: 'Anna Schmidt', initials: 'A' },
    progress: 45,
    status: { label: 'In Arbeit', severity: 'warn' },
    dueDate: '10.06.2026'
  },
  {
    id: 3,
    name: 'Marketing Kampagne',
    assignee: { name: 'Lisa Weber', initials: 'L' },
    progress: 0,
    status: { label: 'Offen', severity: 'info' },
    dueDate: '18.05.2026'
  },
  {
    id: 4,
    name: 'API Migration',
    assignee: { name: 'Paul Müller', initials: 'P' },
    progress: 72,
    status: { label: 'Blockiert', severity: 'danger' },
    dueDate: '12.05.2026'
  }
]);

// Popover State
const actionPopover = ref(null);
const selectedActionTask = ref(null);

const togglePopover = (event, task) => {
  selectedActionTask.value = task;
  actionPopover.value.toggle(event);
};
</script>