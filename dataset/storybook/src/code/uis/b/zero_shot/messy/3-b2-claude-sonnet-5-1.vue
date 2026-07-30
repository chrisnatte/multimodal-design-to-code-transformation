<template>
  <div class="p-6 bg-white min-h-screen">
    <!-- Breadcrumb -->
    <div class="flex items-center gap-2 mb-4">
      <Breadcrumb :model="breadcrumbItems" />
    </div>

    <!-- Header -->
    <div class="flex items-center gap-4 mb-6">
      <div class="flex items-center justify-center rounded-full bg-gray-100" style="width:50px;height:50px;">
        <i class="pi pi-briefcase text-2xl text-gray-600"></i>
      </div>
      <div>
        <h1 class="text-3xl font-bold m-0">Projektaufgaben</h1>
        <p class="text-base text-gray-600 m-0">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</p>
      </div>
    </div>

    <!-- Filters -->
    <div class="flex gap-6 mb-6">
      <div class="flex flex-col gap-2">
        <label class="text-sm">Suche</label>
        <InputText v-model="search" placeholder="Suche..." class="w-56" />
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm">Status</label>
        <Dropdown
          v-model="statusFilter"
          :options="statusOptions"
          optionLabel="label"
          placeholder="Status auswählen"
          class="w-56"
        />
      </div>
    </div>

    <!-- Table -->
    <DataTable :value="tasks" class="w-full" dataKey="id">
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="task" header="Aufgabe"></Column>
      <Column header="Verantwortlicher">
        <template #body="slotProps">
          <div class="flex items-center gap-2">
            <Avatar :label="slotProps.data.avatar" shape="circle" class="bg-gray-200" />
            <span>{{ slotProps.data.responsible }}</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="slotProps">
          <div class="flex items-center gap-2">
            <ProgressBar :value="slotProps.data.progress" style="width: 150px; height: 6px" :showValue="false" />
            <span class="text-xs">{{ slotProps.data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="slotProps.data.statusSeverity" />
        </template>
      </Column>
      <Column field="due" header="Fällig"></Column>
      <Column header="Aktionen">
        <template #body="slotProps">
          <div class="flex gap-2">
            <Button icon="pi pi-pencil" text rounded @click="editTask(slotProps.data)" />
            <Button icon="pi pi-trash" text rounded severity="danger" @click="deleteTask(slotProps.data)" />
          </div>
        </template>
      </Column>
    </DataTable>

    <!-- Action Menu Card (Bearbeiten / Status aktualisieren / Löschen) -->
    <div class="mt-6 border border-gray-200 rounded-md p-2 w-52">
      <div class="flex flex-col gap-1">
        <Button label="Bearbeiten" icon="pi pi-pencil" text class="justify-start w-full" />
        <Button label="Status aktualisieren" icon="pi pi-refresh" text class="justify-start w-full" />
        <Button label="Löschen" icon="pi pi-trash" text severity="danger" class="justify-start w-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Avatar from 'primevue/avatar'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'
import Button from 'primevue/button'

const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
])

const search = ref('')

const statusOptions = ref([
  { label: 'Offen' },
  { label: 'In Arbeit' },
  { label: 'Blockiert' },
  { label: 'Fertig' }
])
const statusFilter = ref(null)

const tasks = ref([
  {
    id: 1,
    task: 'Webseite Relaunch',
    responsible: 'Max Mustermann',
    avatar: 'M',
    progress: 100,
    status: 'Fertig',
    statusSeverity: 'success',
    due: '03.06.2026'
  },
  {
    id: 2,
    task: 'Mobile App',
    responsible: 'Anna Schmidt',
    avatar: 'A',
    progress: 45,
    status: 'In Arbeit',
    statusSeverity: 'warning',
    due: '10.06.2026'
  },
  {
    id: 3,
    task: 'Marketing Kampagne',
    responsible: 'Lisa Weber',
    avatar: 'L',
    progress: 0,
    status: 'Offen',
    statusSeverity: 'info',
    due: '18.05.2026'
  },
  {
    id: 4,
    task: 'API Migration',
    responsible: 'Paul Müller',
    avatar: 'P',
    progress: 72,
    status: 'Blockiert',
    statusSeverity: 'danger',
    due: '12.05.2026'
  }
])

const editTask = (task) => {
  console.log('Edit task', task)
}

const deleteTask = (task) => {
  console.log('Delete task', task)
}
</script>