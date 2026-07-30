<template>
  <div class="p-6">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-1">
      <Button icon="pi pi-arrow-left" rounded outlined severity="secondary" />
      <div>
        <h1 class="text-3xl font-bold m-0">Projektaufgaben</h1>
      </div>
    </div>
    <p class="text-gray-500 mb-4 ml-[64px]">
      Hier werden alle Aufgaben des Projekts <span class="font-bold">Projekt 1</span> aufgelistet.
    </p>

    <!-- Breadcrumb -->
    <Breadcrumb :home="home" :model="breadcrumbItems" class="mb-6 bg-white border-none p-0" />

    <!-- Filters -->
    <div class="flex gap-6 mb-4">
      <div class="flex flex-col gap-2 w-[216px]">
        <label class="text-sm">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText v-model="search" placeholder="Suche..." class="w-full" />
        </IconField>
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
    <DataTable :value="tasks" class="p-datatable-sm" responsiveLayout="scroll">
      <Column selectionMode="multiple" headerStyle="width: 3rem">
        <template #body="slotProps">
          <Checkbox v-model="selectedTasks" :value="slotProps.data.id" />
        </template>
      </Column>
      <Column field="name" header="Aufgabe" />
      <Column field="owner" header="Verantwortlicher">
        <template #body="slotProps">
          <div class="flex items-center gap-2">
            <Avatar :label="slotProps.data.ownerInitial" shape="circle" class="bg-gray-200" />
            <span>{{ slotProps.data.owner }}</span>
          </div>
        </template>
      </Column>
      <Column field="progress" header="Status">
        <template #body="slotProps">
          <div class="flex items-center gap-2">
            <ProgressBar :value="slotProps.data.progress" :showValue="false" class="w-[182px] h-[6px]" />
            <span class="text-sm">{{ slotProps.data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="statusSeverity(slotProps.data.status)" />
        </template>
      </Column>
      <Column field="due" header="Fällig">
        <template #body="slotProps">
          <span :class="{ 'text-red-500': slotProps.data.status === 'Blockiert' }">
            {{ slotProps.data.due }}
          </span>
        </template>
      </Column>
      <Column header="Aktionen">
        <template #body="slotProps">
          <Button
            icon="pi pi-ellipsis-h"
            outlined
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
import Button from 'primevue/button'
import Breadcrumb from 'primevue/breadcrumb'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import Dropdown from 'primevue/dropdown'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Checkbox from 'primevue/checkbox'
import Avatar from 'primevue/avatar'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'
import Menu from 'primevue/menu'

const search = ref('')
const selectedStatus = ref(null)
const statusOptions = ref([
  { label: 'Offen' },
  { label: 'In Arbeit' },
  { label: 'Blockiert' },
  { label: 'Fertig' }
])

const home = ref({ icon: 'pi pi-home', url: '#' })
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
])

const selectedTasks = ref([1])

const tasks = ref([
  {
    id: 1,
    name: 'Webseite Relaunch',
    owner: 'Max Mustermann',
    ownerInitial: 'M',
    progress: 100,
    status: 'Fertig',
    due: '03.06.2026'
  },
  {
    id: 2,
    name: 'Mobile App',
    owner: 'Anna Schmidt',
    ownerInitial: 'A',
    progress: 45,
    status: 'In Arbeit',
    due: '10.06.2026'
  },
  {
    id: 3,
    name: 'Marketing Kampagne',
    owner: 'Lisa Weber',
    ownerInitial: 'L',
    progress: 0,
    status: 'Offen',
    due: '18.05.2026'
  },
  {
    id: 4,
    name: 'API Migration',
    owner: 'Paul Müller',
    ownerInitial: 'P',
    progress: 72,
    status: 'Blockiert',
    due: '12.05.2026'
  }
])

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

const menu = ref()
const activeTask = ref(null)
const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])

function toggleMenu(event, task) {
  activeTask.value = task
  menu.value.toggle(event)
}
</script>