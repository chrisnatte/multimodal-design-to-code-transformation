<template>
  <div class="p-8 bg-white min-h-screen">
    <!-- Header -->
    <div class="flex items-start gap-4 mb-2">
      <Button icon="pi pi-arrow-left" rounded outlined severity="secondary" class="!w-[50px] !h-[50px]" />
      <div>
        <h1 class="text-3xl font-bold text-gray-800 m-0">Projektaufgaben</h1>
        <p class="text-gray-500 mt-1">Hier werden alle Aufgaben des Projekts <span class="font-semibold">Projekt 1</span> aufgelistet.</p>
      </div>
    </div>

    <!-- Breadcrumb -->
    <Breadcrumb :model="breadcrumbItems" class="border-none p-0 mb-6 bg-transparent">
      <template #item="{ item }">
        <span class="flex items-center gap-1 text-gray-500 text-sm">
          <i v-if="item.icon" :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </span>
      </template>
    </Breadcrumb>

    <!-- Filters -->
    <div class="flex gap-6 mb-6">
      <div class="flex flex-col gap-2 w-[216px]">
        <label class="text-sm text-gray-700">Suche</label>
        <InputText v-model="search" placeholder="Suche..." class="w-full" />
      </div>
      <div class="flex flex-col gap-2 w-[216px]">
        <label class="text-sm text-gray-700">Status</label>
        <Dropdown
          v-model="statusFilter"
          :options="statusOptions"
          optionLabel="label"
          placeholder="Status auswählen"
          class="w-full"
        />
      </div>
    </div>

    <!-- Table -->
    <DataTable :value="tasks" class="w-full">
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="name" header="Aufgabe"></Column>
      <Column header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <Avatar :label="data.assigneeInitial" shape="circle" class="bg-gray-200 text-gray-700" />
            <span>{{ data.assignee }}</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <ProgressBar :value="data.progress" :showValue="false" class="w-[182px] h-[6px]" />
            <span class="text-sm text-gray-600">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="statusSeverity(data.status)" class="font-bold" />
        </template>
      </Column>
      <Column field="due" header="Fällig">
        <template #body="{ data }">
          <span :class="{ 'text-red-500': data.overdue }">{{ data.due }}</span>
        </template>
      </Column>
      <Column header="Aktionen">
        <template #body="{ data }">
          <Button icon="pi pi-ellipsis-h" text rounded @click="toggleMenu($event, data)" />
        </template>
      </Column>
    </DataTable>

    <Menu ref="menu" :model="menuItems" :popup="true" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Breadcrumb from 'primevue/breadcrumb'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Avatar from 'primevue/avatar'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'
import Menu from 'primevue/menu'

const search = ref('')
const statusFilter = ref(null)

const statusOptions = ref([
  { label: 'Offen', value: 'Offen' },
  { label: 'In Arbeit', value: 'In Arbeit' },
  { label: 'Blockiert', value: 'Blockiert' },
  { label: 'Fertig', value: 'Fertig' }
])

const breadcrumbItems = ref([
  { label: '', icon: 'pi pi-home' },
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
])

const tasks = ref([
  {
    name: 'Webseite Relaunch',
    assignee: 'Max Mustermann',
    assigneeInitial: 'M',
    progress: 100,
    status: 'Fertig',
    due: '03.06.2026',
    overdue: false
  },
  {
    name: 'Mobile App',
    assignee: 'Anna Schmidt',
    assigneeInitial: 'A',
    progress: 45,
    status: 'In Arbeit',
    due: '10.06.2026',
    overdue: false
  },
  {
    name: 'Marketing Kampagne',
    assignee: 'Lisa Weber',
    assigneeInitial: 'L',
    progress: 0,
    status: 'Offen',
    due: '18.05.2026',
    overdue: false
  },
  {
    name: 'API Migration',
    assignee: 'Paul Müller',
    assigneeInitial: 'P',
    progress: 72,
    status: 'Blockiert',
    due: '12.05.2026',
    overdue: true
  }
])

const menu = ref()
const selectedTask = ref(null)

const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
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
      return 'secondary'
  }
}
</script>