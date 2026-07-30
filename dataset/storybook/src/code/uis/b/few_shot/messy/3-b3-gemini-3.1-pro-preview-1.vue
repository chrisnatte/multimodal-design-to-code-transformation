<template>
  <div class="min-h-screen bg-white p-8 font-sans text-slate-800">
    <div class="mx-auto flex max-w-7xl flex-col gap-8">
      <!-- Header Section -->
      <div class="flex items-start gap-4">
        <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100">
          <i class="pi pi-folder text-xl text-slate-600"></i>
        </div>
        <div class="flex flex-col gap-4">
          <div>
            <h1 class="text-3xl font-bold text-slate-900">Projektaufgaben</h1>
            <p class="mt-1 text-base text-slate-600">
              Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.
            </p>
          </div>
          <Breadcrumb
            :home="breadcrumbHome"
            :model="breadcrumbItems"
            class="w-fit !border !border-slate-200 !bg-white !p-2"
          />
        </div>
      </div>

      <!-- Filters Section -->
      <div class="flex items-end gap-6">
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

      <!-- Data Table -->
      <DataTable
        :value="tasks"
        v-model:selection="selectedTasks"
        dataKey="id"
        class="border border-slate-200 rounded-lg overflow-hidden"
      >
        <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
        <Column field="name" header="Aufgabe" class="font-semibold"></Column>
        <Column field="assignee" header="Verantwortlicher">
          <template #body="{ data }">
            <div class="flex items-center gap-3">
              <Avatar :label="data.assignee.initials" shape="circle" class="!bg-slate-200 !text-slate-700" />
              <span>{{ data.assignee.name }}</span>
            </div>
          </template>
        </Column>
        <Column field="progress" header="Status">
          <template #body="{ data }">
            <div class="flex items-center gap-3">
              <ProgressBar
                :value="data.progress"
                :showValue="false"
                class="w-32 !h-1.5"
                :pt="{ value: { class: getProgressBarColor(data.progress) } }"
              />
              <span class="text-xs text-slate-600">{{ data.progress }} %</span>
            </div>
          </template>
        </Column>
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
          </template>
        </Column>
        <Column field="dueDate" header="Fällig"></Column>
        <Column header="Aktionen" headerStyle="width: 5rem" bodyStyle="text-align: center">
          <template #body>
            <Button
              icon="pi pi-ellipsis-h"
              text
              rounded
              severity="secondary"
              @click="toggleMenu"
              aria-haspopup="true"
              aria-controls="action-menu"
            />
          </template>
        </Column>
      </DataTable>

      <!-- Action Menu -->
      <Menu ref="actionMenu" id="action-menu" :model="menuItems" popup />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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
import Button from 'primevue/button'
import Menu from 'primevue/menu'

// Breadcrumb State
const breadcrumbHome = ref({ icon: 'pi pi-home' })
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
])

// Filters State
const searchQuery = ref('')
const selectedStatus = ref(null)
const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig'])

// Table Data State
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

const selectedTasks = ref([tasks.value[0]])

// Action Menu State
const actionMenu = ref()
const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])

const toggleMenu = (event: Event) => {
  actionMenu.value?.toggle(event)
}

// Helpers
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

const getProgressBarColor = (progress: number) => {
  if (progress === 100) return '!bg-emerald-500'
  if (progress > 0) return '!bg-emerald-500'
  return '!bg-slate-200'
}
</script>