<template>
  <div class="flex min-h-screen w-full flex-col gap-8 bg-white p-8">
    <!-- Breadcrumb -->
    <Breadcrumb :model="breadcrumbItems" :home="home" class="w-fit !p-0 !bg-transparent" />

    <!-- Header -->
    <div class="flex items-center gap-4">
      <div class="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
        <i class="pi pi-folder text-xl text-slate-600"></i>
      </div>
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-slate-900">Projektaufgaben</h1>
        <p class="text-base text-slate-600">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</p>
      </div>
    </div>

    <!-- Filters -->
    <div class="flex items-end gap-4">
      <div class="flex flex-col gap-2">
        <label class="text-sm text-slate-700">Suche</label>
        <IconField icon-position="left">
          <InputIcon class="pi pi-search" />
          <InputText v-model="searchQuery" placeholder="Suche..." class="w-56" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-slate-700">Status</label>
        <Select v-model="selectedStatus" :options="statusOptions" placeholder="Status auswählen" class="w-56" />
      </div>
    </div>

    <!-- DataTable -->
    <DataTable :value="tasks" v-model:selection="selectedTasks" data-key="id" class="w-full">
      <Column selection-mode="multiple" header-style="width: 3rem"></Column>
      <Column field="name" header="Aufgabe" class="font-medium"></Column>
      <Column header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <Avatar :label="data.assignee.initials" shape="circle" class="bg-slate-200 text-slate-700" />
            <span>{{ data.assignee.name }}</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="{ data }">
          <div class="flex w-48 items-center gap-2">
            <ProgressBar :value="data.progress" :show-value="false" class="h-1.5 flex-1" />
            <span class="w-8 text-right text-xs text-slate-600">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig"></Column>
      <Column header="Aktionen" body-class="text-center">
        <template #body>
          <Button icon="pi pi-ellipsis-h" text rounded severity="secondary" @click="toggleMenu" aria-haspopup="true" aria-controls="overlay_menu" />
        </template>
      </Column>
    </DataTable>

    <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" />
  </div>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import Breadcrumb from 'primevue/breadcrumb'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
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
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
])
const home = ref({ icon: 'pi pi-home' })

const searchQuery = ref('')
const selectedStatus = ref(null)
const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig'])

const selectedTasks = ref()
const tasks = ref([
  {
    id: 1,
    name: 'Webseite Relaunch',
    assignee: { name: 'Max Mustermann', initials: 'M' },
    progress: 100,
    status: 'Fertig',
    dueDate: '03.06.2026'
  },
  {
    id: 2,
    name: 'Mobile App',
    assignee: { name: 'Anna Schmidt', initials: 'A' },
    progress: 45,
    status: 'In Arbeit',
    dueDate: '10.06.2026'
  },
  {
    id: 3,
    name: 'Marketing Kampagne',
    assignee: { name: 'Lisa Weber', initials: 'L' },
    progress: 0,
    status: 'Offen',
    dueDate: '18.05.2026'
  },
  {
    id: 4,
    name: 'API Migration',
    assignee: { name: 'Paul Müller', initials: 'P' },
    progress: 72,
    status: 'Blockiert',
    dueDate: '12.05.2026'
  }
])

const menu = useTemplateRef('menu')
const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])

const toggleMenu = (event: Event) => {
  menu.value?.toggle(event)
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