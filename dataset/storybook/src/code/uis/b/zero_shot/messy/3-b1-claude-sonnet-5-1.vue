<template>
  <div class="p-6 bg-white">
    <!-- Breadcrumb -->
    <Breadcrumb :model="breadcrumbItems" class="mb-4">
      <template #item="{ item }">
        <span class="text-sm text-gray-600">{{ item.label }}</span>
      </template>
    </Breadcrumb>

    <!-- Header -->
    <div class="flex items-center gap-4 mb-6">
      <div class="flex items-center justify-center rounded-full bg-gray-100 w-[50px] h-[50px]">
        <i class="pi pi-list text-xl"></i>
      </div>
      <div>
        <h1 class="text-3xl font-bold">Projektaufgaben</h1>
        <p class="text-base text-gray-600">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</p>
      </div>
    </div>

    <!-- Filters -->
    <div class="flex gap-8 mb-6">
      <div class="flex flex-col gap-2 w-[216px]">
        <label class="text-sm">Suche</label>
        <InputText v-model="searchQuery" placeholder="Suche..." class="w-full" />
      </div>
      <div class="flex flex-col gap-2 w-[216px]">
        <label class="text-sm">Status</label>
        <Dropdown
          v-model="selectedStatus"
          :options="statusOptions"
          optionLabel="label"
          placeholder="Status auswählen"
          class="w-full"
        />
      </div>
    </div>

    <!-- Table -->
    <DataTable :value="tasks" selectionMode="multiple" v-model:selection="selectedTasks" dataKey="id" class="w-full">
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="name" header="Aufgabe"></Column>
      <Column header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <Avatar :label="data.assigneeInitial" shape="circle" class="bg-gray-200" />
            <span>{{ data.assignee }}</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-2 w-[228px]">
            <ProgressBar :value="data.progress" :showValue="false" class="flex-1 h-[6px]" />
            <span class="text-xs">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="statusSeverity(data.status)" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig"></Column>
      <Column header="Aktionen">
        <template #body="{ data }">
          <Button icon="pi pi-ellipsis-v" text @click="toggleMenu($event, data)" />
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
import Dropdown from 'primevue/dropdown'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Avatar from 'primevue/avatar'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
])

const searchQuery = ref('')

const statusOptions = ref([
  { label: 'Offen', value: 'Offen' },
  { label: 'In Arbeit', value: 'In Arbeit' },
  { label: 'Blockiert', value: 'Blockiert' },
  { label: 'Fertig', value: 'Fertig' }
])
const selectedStatus = ref(null)

const selectedTasks = ref([])

const tasks = ref([
  {
    id: 1,
    name: 'Webseite Relaunch',
    assignee: 'Max Mustermann',
    assigneeInitial: 'M',
    progress: 100,
    status: 'Fertig',
    dueDate: '03.06.2026'
  },
  {
    id: 2,
    name: 'Mobile App',
    assignee: 'Anna Schmidt',
    assigneeInitial: 'A',
    progress: 45,
    status: 'In Arbeit',
    dueDate: '10.06.2026'
  },
  {
    id: 3,
    name: 'Marketing Kampagne',
    assignee: 'Lisa Weber',
    assigneeInitial: 'L',
    progress: 0,
    status: 'Offen',
    dueDate: '18.05.2026'
  },
  {
    id: 4,
    name: 'API Migration',
    assignee: 'Paul Müller',
    assigneeInitial: 'P',
    progress: 72,
    status: 'Blockiert',
    dueDate: '12.05.2026'
  }
])

const menu = ref()
const currentTask = ref(null)

const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])

function toggleMenu(event, data) {
  currentTask.value = data
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