<template>
  <div class="p-6">
    <div class="flex items-center gap-4 mb-2">
      <Button icon="pi pi-arrow-left" rounded outlined severity="secondary" />
      <div>
        <h1 class="text-3xl font-bold text-gray-800 m-0">Projektaufgaben</h1>
      </div>
    </div>
    <p class="text-gray-500 mb-3 ml-16">
      Hier werden alle Aufgaben des Projekts <span class="font-bold">Projekt 1</span> aufgelistet.
    </p>

    <Breadcrumb :model="breadcrumbItems" class="mb-6 ml-16 bg-transparent border-none p-0">
      <template #item="{ item }">
        <span class="flex items-center gap-1 text-gray-500">
          <i v-if="item.icon" :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </span>
      </template>
    </Breadcrumb>

    <div class="flex gap-6 mb-4">
      <div class="flex flex-col gap-1">
        <label class="text-sm text-gray-700">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText v-model="search" placeholder="Suche..." class="w-64" />
        </IconField>
      </div>
      <div class="flex flex-col gap-1">
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

    <DataTable :value="tasks" v-model:selection="selectedTasks" dataKey="id" class="w-full">
      <Column selectionMode="multiple" headerStyle="width: 3rem" />
      <Column field="name" header="Aufgabe" />
      <Column field="responsible" header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <Avatar :label="data.initial" shape="circle" size="normal" />
            <span>{{ data.responsible }}</span>
          </div>
        </template>
      </Column>
      <Column field="progress" header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <ProgressBar :value="data.progress" :showValue="false" class="w-32 h-2" />
            <span class="text-sm text-gray-600">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="statusSeverity(data.status)" />
        </template>
      </Column>
      <Column field="due" header="Fällig">
        <template #body="{ data }">
          <span :class="data.status === 'Blockiert' ? 'text-red-500' : 'text-gray-700'">
            {{ data.due }}
          </span>
        </template>
      </Column>
      <Column field="actions" header="Aktionen" headerStyle="width: 6rem">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            text
            rounded
            severity="secondary"
            @click="toggleMenu($event, data)"
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
import Avatar from 'primevue/avatar'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'
import Menu from 'primevue/menu'

const search = ref('')

const statusOptions = ref([
  { label: 'Offen', value: 'offen' },
  { label: 'In Arbeit', value: 'in-arbeit' },
  { label: 'Blockiert', value: 'blockiert' },
  { label: 'Fertig', value: 'fertig' }
])
const selectedStatus = ref(null)

const breadcrumbItems = ref([
  { icon: 'pi pi-home', label: '' },
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
])

const tasks = ref([
  {
    id: 1,
    name: 'Webseite Relaunch',
    responsible: 'Max Mustermann',
    initial: 'M',
    progress: 100,
    status: 'Fertig',
    due: '03.06.2026'
  },
  {
    id: 2,
    name: 'Mobile App',
    responsible: 'Anna Schmidt',
    initial: 'A',
    progress: 45,
    status: 'In Arbeit',
    due: '10.06.2026'
  },
  {
    id: 3,
    name: 'Marketing Kampagne',
    responsible: 'Lisa Weber',
    initial: 'L',
    progress: 0,
    status: 'Offen',
    due: '18.05.2026'
  },
  {
    id: 4,
    name: 'API Migration',
    responsible: 'Paul Müller',
    initial: 'P',
    progress: 72,
    status: 'Blockiert',
    due: '12.05.2026'
  }
])

const selectedTasks = ref([tasks.value[0]])

const statusSeverity = (status) => {
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

const menu = ref()
const activeTask = ref(null)

const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])

const toggleMenu = (event, data) => {
  activeTask.value = data
  menu.value.toggle(event)
}
</script>