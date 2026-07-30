<template>
  <div class="p-6 bg-white min-h-screen">
    <!-- Header Row -->
    <div class="flex items-center gap-4 mb-4">
      <Button icon="pi pi-arrow-circle-left" rounded text severity="secondary" class="w-12 h-12" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold m-0">Projektaufgaben</h1>
        <span class="text-base text-gray-600">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</span>
      </div>
    </div>

    <!-- Breadcrumb -->
    <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" class="mb-4 w-fit" />

    <!-- Filters -->
    <div class="flex gap-4 mb-4">
      <div class="flex flex-col gap-1 w-54">
        <label class="text-sm">Suche</label>
        <InputText v-model="search" placeholder="Suche..." class="w-full">
          <template #prefix>
            <i class="pi pi-search" />
          </template>
        </InputText>
      </div>
      <div class="flex flex-col gap-1 w-54">
        <label class="text-sm">Status</label>
        <Select
          v-model="statusFilter"
          :options="statusOptions"
          optionLabel="label"
          optionValue="value"
          placeholder="Status auswählen"
          class="w-full"
        />
      </div>
    </div>

    <!-- Data Table -->
    <DataTable v-model:selection="selectedTasks" :value="tasks" dataKey="id" class="w-full">
      <Column selectionMode="multiple" headerStyle="width: 3rem" />
      <Column field="task" header="Aufgabe" />
      <Column header="Verantwortlicher">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar :label="slotProps.data.initials" shape="circle" />
            <span>{{ slotProps.data.responsible }}</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <ProgressBar :value="slotProps.data.progress" :showValue="false" class="flex-1 h-2" />
            <span class="text-xs">{{ slotProps.data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="slotProps.data.statusSeverity" />
        </template>
      </Column>
      <Column field="due" header="Fällig" />
      <Column header="Aktionen">
        <template #body="slotProps">
          <Button
            icon="pi pi-ellipsis-h"
            text
            severity="secondary"
            @click="toggleMenu($event, slotProps.data)"
          />
        </template>
      </Column>
    </DataTable>

    <Menu ref="menu" :model="menuItems" :popup="true" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Breadcrumb from 'primevue/breadcrumb'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Avatar from 'primevue/avatar'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const search = ref('')
const statusFilter = ref(null)

const statusOptions = ref([
  { label: 'Offen', value: 'offen' },
  { label: 'In Arbeit', value: 'in_arbeit' },
  { label: 'Blockiert', value: 'blockiert' },
  { label: 'Fertig', value: 'fertig' }
])

const breadcrumbHome = ref({ icon: 'pi pi-home', url: '/' })
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
])

const selectedTasks = ref([])

const tasks = ref([
  {
    id: 1,
    task: 'Webseite Relaunch',
    responsible: 'Max Mustermann',
    initials: 'M',
    progress: 100,
    status: 'Fertig',
    statusSeverity: 'success',
    due: '03.06.2026'
  },
  {
    id: 2,
    task: 'Mobile App',
    responsible: 'Anna Schmidt',
    initials: 'A',
    progress: 45,
    status: 'In Arbeit',
    statusSeverity: 'warn',
    due: '10.06.2026'
  },
  {
    id: 3,
    task: 'Marketing Kampagne',
    responsible: 'Lisa Weber',
    initials: 'L',
    progress: 0,
    status: 'Offen',
    statusSeverity: 'info',
    due: '18.05.2026'
  },
  {
    id: 4,
    task: 'API Migration',
    responsible: 'Paul Müller',
    initials: 'P',
    progress: 72,
    status: 'Blockiert',
    statusSeverity: 'danger',
    due: '12.05.2026'
  }
])

const menu = ref()
const activeTask = ref(null)

const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
  { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])

function toggleMenu(event, task) {
  activeTask.value = task
  menu.value.toggle(event)
}
</script>