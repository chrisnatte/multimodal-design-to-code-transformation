<template>
  <div class="p-8 bg-white min-h-screen">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-2">
      <Button icon="pi pi-arrow-left" rounded outlined severity="secondary" />
      <div>
        <h1 class="text-3xl font-bold text-gray-800 m-0">Projektaufgaben</h1>
        <p class="text-gray-500 mt-1 mb-0">
          Hier werden alle Aufgaben des Projekts <span class="font-semibold">Projekt 1</span> aufgelistet.
        </p>
      </div>
    </div>

    <!-- Breadcrumb -->
    <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" class="border-none p-0 mb-6 bg-transparent" />

    <!-- Filters -->
    <div class="flex gap-6 mb-6">
      <div class="flex flex-col gap-2 w-56">
        <label class="text-sm text-gray-700">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText v-model="search" placeholder="Suche..." class="w-full" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2 w-56">
        <label class="text-sm text-gray-700">Status</label>
        <Dropdown
          v-model="selectedStatus"
          :options="statusOptions"
          optionLabel="label"
          placeholder="Status auswählen"
          class="w-full"
          showClear
        />
      </div>
    </div>

    <!-- Table -->
    <DataTable :value="tasks" selectionMode="multiple" v-model:selection="selectedTasks" dataKey="id" class="text-sm">
      <Column selectionMode="multiple" headerStyle="width: 3rem" />
      <Column field="name" header="Aufgabe" />
      <Column header="Verantwortlicher">
        <template #body="slotProps">
          <div class="flex items-center gap-2">
            <Avatar :label="slotProps.data.avatar" shape="circle" class="bg-gray-200 text-gray-700" />
            <span>{{ slotProps.data.responsible }}</span>
          </div>
        </template>
      </Column>
      <Column header="Status" field="progress">
        <template #body="slotProps">
          <div class="flex items-center gap-2">
            <ProgressBar :value="slotProps.data.progress" :showValue="false" class="w-40 h-1.5" />
            <span class="text-xs text-gray-600">{{ slotProps.data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column header="Status" field="status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="statusSeverity(slotProps.data.status)" />
        </template>
      </Column>
      <Column header="Fällig" field="due">
        <template #body="slotProps">
          <span :class="slotProps.data.status === 'Blockiert' ? 'text-red-500' : 'text-gray-700'">
            {{ slotProps.data.due }}
          </span>
        </template>
      </Column>
      <Column header="Aktionen">
        <template #body="slotProps">
          <Button icon="pi pi-ellipsis-h" text rounded severity="secondary" @click="toggleMenu($event, slotProps.data)" />
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
import Avatar from 'primevue/avatar'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'
import Menu from 'primevue/menu'

const breadcrumbHome = ref({ icon: 'pi pi-home', url: '#' })
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
])

const search = ref('')
const selectedStatus = ref(null)
const statusOptions = ref([
  { label: 'Offen' },
  { label: 'In Arbeit' },
  { label: 'Blockiert' },
  { label: 'Fertig' }
])

const tasks = ref([
  { id: 1, name: 'Webseite Relaunch', responsible: 'Max Mustermann', avatar: 'M', progress: 100, status: 'Fertig', due: '03.06.2026' },
  { id: 2, name: 'Mobile App', responsible: 'Anna Schmidt', avatar: 'A', progress: 45, status: 'In Arbeit', due: '10.06.2026' },
  { id: 3, name: 'Marketing Kampagne', responsible: 'Lisa Weber', avatar: 'L', progress: 0, status: 'Offen', due: '18.05.2026' },
  { id: 4, name: 'API Migration', responsible: 'Paul Müller', avatar: 'P', progress: 72, status: 'Blockiert', due: '12.05.2026' }
])

const selectedTasks = ref([tasks.value[0]])

const menu = ref()
const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])

function toggleMenu(event, data) {
  menu.value.toggle(event)
}

function statusSeverity(status) {
  switch (status) {
    case 'Fertig': return 'success'
    case 'In Arbeit': return 'warning'
    case 'Offen': return 'info'
    case 'Blockiert': return 'danger'
    default: return 'secondary'
  }
}
</script>