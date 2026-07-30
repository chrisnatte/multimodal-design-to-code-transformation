<template>
  <div class="min-h-screen bg-white p-10 flex flex-col gap-10 font-sans">
    <!-- Header Section -->
    <div class="flex items-center gap-4">
      <Button 
        icon="pi pi-arrow-circle-left" 
        text 
        rounded 
        severity="secondary" 
        class="w-12 h-12 !text-3xl !bg-slate-100 hover:!bg-slate-200" 
      />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-slate-900 m-0">Projektaufgaben</h1>
        <p class="text-base text-slate-600 m-0">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</p>
      </div>
    </div>

    <!-- Breadcrumb -->
    <Breadcrumb 
      :model="breadcrumbItems" 
      :home="breadcrumbHome" 
      class="bg-white border border-slate-200 rounded-md px-4 py-3 w-fit" 
    />

    <!-- Filters Section -->
    <div class="flex items-end gap-4">
      <div class="flex flex-col gap-2">
        <label class="text-sm text-slate-700">Suche</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-search" />
          <InputText v-model="searchQuery" placeholder="Suche..." class="w-56" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-slate-700">Status</label>
        <Select 
          v-model="selectedStatus" 
          :options="statusOptions" 
          placeholder="Status auswählen" 
          class="w-56" 
        />
      </div>
    </div>

    <!-- DataTable Section -->
    <DataTable 
      :value="tasks" 
      v-model:selection="selectedTasks" 
      dataKey="id" 
      class="border border-slate-200 rounded-md"
    >
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="aufgabe" header="Aufgabe" class="font-semibold text-slate-900"></Column>
      <Column field="verantwortlicher" header="Verantwortlicher">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar 
              :label="slotProps.data.avatarLabel" 
              shape="circle" 
              class="bg-slate-200 text-slate-700 font-medium" 
            />
            <span class="text-slate-700">{{ slotProps.data.verantwortlicher }}</span>
          </div>
        </template>
      </Column>
      <Column field="progress" header="Status">
        <template #body="slotProps">
          <div class="flex items-center gap-3 w-full max-w-[228px]">
            <ProgressBar 
              :value="slotProps.data.progress" 
              :showValue="false" 
              class="flex-1 h-1.5" 
            />
            <span class="text-xs text-slate-600 w-8 text-right">{{ slotProps.data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="slotProps">
          <Tag 
            :value="slotProps.data.status" 
            :severity="getSeverity(slotProps.data.status)" 
            class="font-bold"
          />
        </template>
      </Column>
      <Column field="faellig" header="Fällig" class="text-slate-700"></Column>
      <Column header="Aktionen">
        <template #body="slotProps">
          <Button 
            icon="pi pi-ellipsis-h" 
            text 
            severity="secondary" 
            @click="togglePopover($event, slotProps.data)" 
          />
        </template>
      </Column>
    </DataTable>

    <!-- Actions Popover -->
    <Popover ref="actionsPopover">
      <div class="flex flex-col gap-2 p-2 w-48">
        <Button label="Bearbeiten" icon="pi pi-pen-to-square" outlined severity="secondary" class="justify-start w-full" />
        <Button label="Status aktualisieren" icon="pi pi-list-check" outlined severity="secondary" class="justify-start w-full" />
        <Button label="Löschen" icon="pi pi-trash" outlined severity="secondary" class="justify-start w-full" />
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

const breadcrumbHome = ref({ icon: 'pi pi-home' });
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
]);

const searchQuery = ref('');
const selectedStatus = ref(null);
const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig']);

const selectedTasks = ref([
  { id: 1, aufgabe: 'Webseite Relaunch', verantwortlicher: 'Max Mustermann', avatarLabel: 'M', progress: 100, status: 'Fertig', faellig: '03.06.2026' }
]);

const tasks = ref([
  { id: 1, aufgabe: 'Webseite Relaunch', verantwortlicher: 'Max Mustermann', avatarLabel: 'M', progress: 100, status: 'Fertig', faellig: '03.06.2026' },
  { id: 2, aufgabe: 'Mobile App', verantwortlicher: 'Anna Schmidt', avatarLabel: 'A', progress: 45, status: 'In Arbeit', faellig: '10.06.2026' },
  { id: 3, aufgabe: 'Marketing Kampagne', verantwortlicher: 'Lisa Weber', avatarLabel: 'L', progress: 0, status: 'Offen', faellig: '18.05.2026' },
  { id: 4, aufgabe: 'API Migration', verantwortlicher: 'Paul Müller', avatarLabel: 'P', progress: 72, status: 'Blockiert', faellig: '12.05.2026' }
]);

const getSeverity = (status) => {
  switch (status) {
    case 'Fertig': return 'success';
    case 'In Arbeit': return 'warn';
    case 'Offen': return 'info';
    case 'Blockiert': return 'danger';
    default: return 'info';
  }
};

const actionsPopover = ref(null);
const activeTask = ref(null);

const togglePopover = (event, data) => {
  activeTask.value = data;
  actionsPopover.value.toggle(event);
};
</script>