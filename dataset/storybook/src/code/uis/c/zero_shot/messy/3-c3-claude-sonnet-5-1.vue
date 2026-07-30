<template>
  <div class="p-6">
    <div class="flex items-center gap-4 mb-2">
      <Button icon="pi pi-arrow-left" rounded outlined severity="secondary" />
      <div>
        <h1 class="text-3xl font-bold text-gray-800 m-0">Projektaufgaben</h1>
      </div>
    </div>
    <p class="text-gray-500 mb-3 ml-16">
      Hier werden alle Aufgaben des Projekts <span class="font-semibold">Projekt 1</span> aufgelistet.
    </p>

    <Breadcrumb :home="home" :model="breadcrumbItems" class="mb-6 bg-transparent border-none p-0" />

    <div class="flex gap-6 mb-4">
      <div class="flex flex-col gap-2">
        <label class="text-sm text-gray-700">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText v-model="search" placeholder="Suche..." class="w-64" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-gray-700">Status</label>
        <Dropdown
          v-model="selectedStatus"
          :options="statusOptions"
          optionLabel="label"
          placeholder="Status auswählen"
          class="w-64"
        />
      </div>
    </div>

    <DataTable :value="tasks" v-model:selection="selectedTasks" class="w-full">
      <Column selectionMode="multiple" headerStyle="width: 3rem" />
      <Column field="name" header="Aufgabe" />
      <Column field="owner" header="Verantwortlicher">
        <template #body="slotProps">
          <div class="flex items-center gap-2">
            <Avatar :label="slotProps.data.initial" shape="circle" class="bg-gray-200 text-gray-700" />
            <span>{{ slotProps.data.owner }}</span>
          </div>
        </template>
      </Column>
      <Column field="progress" header="Status">
        <template #body="slotProps">
          <div class="flex items-center gap-2 w-56">
            <ProgressBar :value="slotProps.data.progress" :showValue="false" class="h-2 flex-1" />
            <span class="text-sm text-gray-600 w-10">{{ slotProps.data.progress }} %</span>
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
          <span :class="slotProps.data.status === 'Blockiert' ? 'text-red-500' : ''">
            {{ slotProps.data.due }}
          </span>
        </template>
      </Column>
      <Column field="actions" header="Aktionen">
        <template #body="slotProps">
          <Button icon="pi pi-ellipsis-h" text rounded @click="toggleMenu($event, slotProps.data)" />
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

const home = ref({ icon: 'pi pi-home', url: '/' })
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
const selectedStatus = ref(null)

const tasks = ref([
  { name: 'Webseite Relaunch', owner: 'Max Mustermann', initial: 'M', progress: 100, status: 'Fertig', due: '03.06.2026' },
  { name: 'Mobile App', owner: 'Anna Schmidt', initial: 'A', progress: 45, status: 'In Arbeit', due: '10.06.2026' },
  { name: 'Marketing Kampagne', owner: 'Lisa Weber', initial: 'L', progress: 0, status: 'Offen', due: '18.05.2026' },
  { name: 'API Migration', owner: 'Paul Müller', initial: 'P', progress: 72, status: 'Blockiert', due: '12.05.2026' }
])

const selectedTasks = ref([tasks.value[0]])

function statusSeverity(status) {
  switch (status) {
    case 'Fertig': return 'success'
    case 'In Arbeit': return 'warning'
    case 'Offen': return 'info'
    case 'Blockiert': return 'danger'
    default: return 'secondary'
  }
}

const menu = ref()
const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])

function toggleMenu(event) {
  menu.value.toggle(event)
}
</script>