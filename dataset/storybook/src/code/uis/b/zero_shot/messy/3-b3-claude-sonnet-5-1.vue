<template>
  <div class="p-6 bg-white min-h-screen">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-6">
      <div class="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-slate-100">
        <i class="pi pi-list-check text-2xl"></i>
      </div>
      <div>
        <h1 class="text-3xl font-bold m-0">Projektaufgaben</h1>
        <p class="text-base text-gray-500 m-0">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</p>
      </div>
    </div>

    <!-- Breadcrumb -->
    <Breadcrumb :model="breadcrumbItems" class="mb-6 w-max" />

    <!-- Filters -->
    <div class="flex gap-8 mb-6">
      <div class="flex flex-col gap-2 w-[216px]">
        <label class="text-sm">Suche</label>
        <InputText v-model="search" placeholder="Suche..." class="w-full" />
      </div>
      <div class="flex flex-col gap-2 w-[216px]">
        <label class="text-sm">Status</label>
        <Select
          v-model="statusFilter"
          :options="statusOptions"
          optionLabel="label"
          placeholder="Status auswählen"
          class="w-full"
          showClear
        />
      </div>
    </div>

    <!-- Table -->
    <DataTable :value="tasks" class="w-full">
      <Column selectionMode="multiple" headerStyle="width: 3rem" />
      <Column field="task" header="Aufgabe" />
      <Column header="Verantwortlicher">
        <template #body="slotProps">
          <div class="flex items-center gap-2">
            <Avatar :label="slotProps.data.assigneeInitial" shape="circle" size="normal" />
            <span>{{ slotProps.data.assignee }}</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="slotProps">
          <div class="flex items-center gap-2 w-[228px]">
            <ProgressBar :value="slotProps.data.progress" :showValue="false" style="width: 182px; height: 6px" />
            <span class="text-xs">{{ slotProps.data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="statusSeverity(slotProps.data.status)" />
        </template>
      </Column>
      <Column field="due" header="Fällig" />
      <Column header="Aktionen">
        <template #body="slotProps">
          <Button icon="pi pi-ellipsis-v" text rounded @click="toggleMenu($event, slotProps.data)" />
          <Menu ref="menu" :model="menuItems" :popup="true" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Avatar from 'primevue/avatar'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const breadcrumbItems = ref([
  { label: 'Projekte', icon: 'pi pi-folder' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
])

const search = ref('')
const statusFilter = ref(null)
const statusOptions = ref([
  { label: 'Offen', value: 'Offen' },
  { label: 'In Arbeit', value: 'In Arbeit' },
  { label: 'Blockiert', value: 'Blockiert' },
  { label: 'Fertig', value: 'Fertig' }
])

const tasks = ref([
  {
    task: 'Webseite Relaunch',
    assignee: 'Max Mustermann',
    assigneeInitial: 'M',
    progress: 100,
    status: 'Fertig',
    due: '03.06.2026'
  },
  {
    task: 'Mobile App',
    assignee: 'Anna Schmidt',
    assigneeInitial: 'A',
    progress: 45,
    status: 'In Arbeit',
    due: '10.06.2026'
  },
  {
    task: 'Marketing Kampagne',
    assignee: 'Lisa Weber',
    assigneeInitial: 'L',
    progress: 0,
    status: 'Offen',
    due: '18.05.2026'
  },
  {
    task: 'API Migration',
    assignee: 'Paul Müller',
    assigneeInitial: 'P',
    progress: 72,
    status: 'Blockiert',
    due: '12.05.2026'
  }
])

const menu = ref()
const selectedTask = ref(null)
const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])

function toggleMenu(event, data) {
  selectedTask.value = data
  menu.value.toggle(event)
}

function statusSeverity(status) {
  switch (status) {
    case 'Fertig':
      return 'success'
    case 'In Arbeit':
      return 'warning'
    case 'Offen':
      return 'info'
    case 'Blockiert':
      return 'danger'
    default:
      return null
  }
}
</script>