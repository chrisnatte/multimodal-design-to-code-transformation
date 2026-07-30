<template>
  <div class="p-8">
    <div class="flex items-center gap-4 mb-2">
      <Button icon="pi pi-arrow-left" severity="secondary" rounded outlined />
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Projektaufgaben</h1>
      </div>
    </div>
    <p class="text-gray-500 mb-4">
      Hier werden alle Aufgaben des Projekts <span class="font-semibold">Projekt 1</span> aufgelistet.
    </p>

    <Breadcrumb :home="home" :model="breadcrumbItems" class="mb-6 !p-0 !bg-transparent !border-none" />

    <div class="flex gap-6 mb-4">
      <div class="flex flex-col gap-1">
        <label class="text-sm">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText v-model="search" placeholder="Suche..." />
        </IconField>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-sm">Status</label>
        <Select v-model="statusFilter" :options="statusOptions" placeholder="Status auswählen" class="w-56" />
      </div>
    </div>

    <DataTable :value="tasks" v-model:selection="selectedTasks" dataKey="id" tableStyle="min-width: 60rem">
      <Column selectionMode="multiple" headerStyle="width: 3rem" />
      <Column field="name" header="Aufgabe" />
      <Column field="assignee" header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <Avatar :label="data.assignee.charAt(0)" shape="circle" size="normal" class="bg-surface-200 text-gray-600" />
            <span>{{ data.assignee }}</span>
          </div>
        </template>
      </Column>
      <Column field="progress" header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <ProgressBar :value="data.progress" :showValue="false" class="!h-1.5 w-40" />
            <span class="text-sm text-gray-500">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
        </template>
      </Column>
      <Column field="due" header="Fällig">
        <template #body="{ data }">
          <span :class="data.overdue ? 'text-red-500' : ''">{{ data.due }}</span>
        </template>
      </Column>
      <Column header="Aktionen" headerStyle="width: 4rem">
        <template #body="{ data }">
          <Button icon="pi pi-ellipsis-h" severity="secondary" text @click="toggleActionsMenu($event, data)" />
        </template>
      </Column>
    </DataTable>

    <Menu ref="actionsMenu" :model="actionOptions" popup>
      <template #item="{ item }">
        <a class="flex items-center gap-2 px-3 py-2 cursor-pointer">
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </a>
      </template>
    </Menu>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
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
import Menu from 'primevue/menu'

const home = ref({ icon: 'pi pi-home' })
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' },
])

const search = ref('')
const statusFilter = ref('In Arbeit')
const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig'])

const tasks = ref([
  { id: 1, name: 'Webseite Relaunch', assignee: 'Max Mustermann', progress: 100, status: 'Fertig', due: '03.06.2026', overdue: false },
  { id: 2, name: 'Mobile App', assignee: 'Anna Schmidt', progress: 45, status: 'In Arbeit', due: '10.06.2026', overdue: false },
  { id: 3, name: 'Marketing Kampagne', assignee: 'Lisa Weber', progress: 0, status: 'Offen', due: '18.05.2026', overdue: false },
  { id: 4, name: 'API Migration', assignee: 'Paul Müller', progress: 72, status: 'Blockiert', due: '12.05.2026', overdue: true },
])

const selectedTasks = ref([tasks.value[0]])

const actionsMenu = ref()
const selectedTaskForAction = ref(null)
const actionOptions = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
  { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
  { label: 'Löschen', icon: 'pi pi-trash' },
])

const toggleActionsMenu = (event, data) => {
  selectedTaskForAction.value = data
  actionsMenu.value.toggle(event)
}

const getStatusSeverity = (status) => {
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
      return null
  }
}
</script>