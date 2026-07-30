<template>
  <div class="min-h-screen bg-white p-8 font-sans text-surface-900">
    <!-- Header -->
    <div class="mb-2 flex items-start gap-4">
      <Button
        icon="pi pi-arrow-left"
        rounded
        outlined
        severity="secondary"
        class="mt-1 h-10 w-10 text-surface-500"
      />
      <div>
        <h1 class="mb-1 text-3xl font-bold text-surface-900">Projektaufgaben</h1>
        <p class="text-surface-600">
          Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.
        </p>
      </div>
    </div>

    <!-- Breadcrumb -->
    <Breadcrumb
      :home="home"
      :model="breadcrumbItems"
      class="mb-8 border-none bg-transparent p-0 text-sm text-surface-500"
      :pt="{
        root: { class: 'p-0' },
        menu: { class: 'p-0' },
        separator: { class: 'text-surface-400 mx-2' },
      }"
    />

    <!-- Filters -->
    <div class="mb-6 flex gap-6">
      <div class="flex flex-col gap-2">
        <label class="text-sm text-surface-600">Suche</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-search text-surface-400" />
          <InputText v-model="searchQuery" placeholder="Suche..." class="w-64" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-surface-600">Status</label>
        <Select
          v-model="selectedStatus"
          :options="statuses"
          placeholder="Status auswählen"
          class="w-56"
        />
      </div>
    </div>

    <!-- DataTable -->
    <DataTable
      :value="tasks"
      v-model:selection="selectedTasks"
      dataKey="id"
      class="w-full"
      :pt="{
        thead: { class: 'border-b border-surface-200' },
        tbody: { class: 'text-sm' },
      }"
    >
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="name" header="Aufgabe" class="font-medium text-surface-900"></Column>
      <Column field="assignee" header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar
              :label="data.assignee.initials"
              shape="circle"
              class="h-8 w-8 bg-surface-200 text-sm text-surface-700"
            />
            <span class="text-surface-700">{{ data.assignee.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="progress" header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <ProgressBar
              :value="data.progress"
              :showValue="false"
              class="h-1.5 w-32 bg-surface-200"
              :pt="{ value: { class: 'bg-emerald-500' } }"
            />
            <span class="w-8 text-xs text-surface-600">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag
            :value="data.status"
            :severity="getStatusSeverity(data.status)"
            class="px-2 py-1 text-xs font-bold"
          />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig">
        <template #body="{ data }">
          <span
            class="text-sm"
            :class="{
              'text-red-500': data.dueDate === '12.05.2026',
              'text-surface-700': data.dueDate !== '12.05.2026',
            }"
          >
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
            severity="secondary"
            @click="toggleMenu($event, data)"
            class="text-surface-500"
          />
        </template>
      </Column>
    </DataTable>

    <!-- Action Menu -->
    <Menu ref="menu" :model="menuItems" popup class="w-48" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Button from 'primevue/button'
import Breadcrumb from 'primevue/breadcrumb'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import Select from 'primevue/select'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Avatar from 'primevue/avatar'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'
import Menu from 'primevue/menu'

const home = ref({ icon: 'pi pi-home' })
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' },
])

const searchQuery = ref('')
const statuses = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig'])
const selectedStatus = ref(null)

const tasks = ref([
  {
    id: 1,
    name: 'Webseite Relaunch',
    assignee: { name: 'Max Mustermann', initials: 'M' },
    progress: 100,
    status: 'Fertig',
    dueDate: '03.06.2026',
  },
  {
    id: 2,
    name: 'Mobile App',
    assignee: { name: 'Anna Schmidt', initials: 'A' },
    progress: 45,
    status: 'In Arbeit',
    dueDate: '10.06.2026',
  },
  {
    id: 3,
    name: 'Marketing Kampagne',
    assignee: { name: 'Lisa Weber', initials: 'L' },
    progress: 0,
    status: 'Offen',
    dueDate: '18.05.2026',
  },
  {
    id: 4,
    name: 'API Migration',
    assignee: { name: 'Paul Müller', initials: 'P' },
    progress: 72,
    status: 'Blockiert',
    dueDate: '12.05.2026',
  },
])

const selectedTasks = ref([])

onMounted(() => {
  selectedTasks.value = [tasks.value[0]]
})

const menu = ref()
const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-file-edit' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' },
])

const toggleMenu = (event: Event, data: any) => {
  menu.value.toggle(event)
}

const getStatusSeverity = (status: string) => {
  switch (status) {
    case 'Fertig':
      return 'success'
    case 'In Arbeit':
      return 'warn'
    case 'Offen':
      return 'info'
    case 'Blockiert':
      return 'danger'
    default:
      return 'secondary'
  }
}
</script>