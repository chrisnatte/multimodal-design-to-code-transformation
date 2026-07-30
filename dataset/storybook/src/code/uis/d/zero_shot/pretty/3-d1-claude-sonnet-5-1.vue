<template>
  <div class="p-8 bg-white min-h-screen">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-4">
      <Button
        icon="pi pi-arrow-circle-left"
        rounded
        text
        severity="secondary"
        class="!w-[50px] !h-[50px]"
        aria-label="Back"
      />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-gray-800">Projektaufgaben</h1>
        <p class="text-base text-gray-500">
          Hier werden alle Aufgaben des Projekts <b>Projekt 1</b> aufgelistet.
        </p>
      </div>
    </div>

    <!-- Breadcrumb -->
    <Breadcrumb :home="home" :model="breadcrumbItems" class="mb-6 !bg-white !border-0" />

    <!-- Filters -->
    <div class="flex gap-4 mb-6">
      <div class="flex flex-col gap-2">
        <label for="search" class="text-sm text-gray-700">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText id="search" v-model="search" placeholder="Suche..." class="w-[216px]" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label for="status" class="text-sm text-gray-700">Status</label>
        <Select
          id="status"
          v-model="selectedStatus"
          :options="statusOptions"
          optionLabel="label"
          placeholder="Status auswählen"
          class="w-[216px]"
        />
      </div>
    </div>

    <!-- DataTable -->
    <DataTable :value="tasks" v-model:selection="selectedTasks" dataKey="id" class="w-full">
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="task" header="Aufgabe"></Column>
      <Column header="Verantwortlicher">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar :label="slotProps.data.initial" shape="circle" class="bg-gray-200 text-gray-700" />
            <span>{{ slotProps.data.assignee }}</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <ProgressBar
              :value="slotProps.data.progress"
              :showValue="false"
              style="height: 6px; width: 182px"
            />
            <span class="text-xs text-gray-600">{{ slotProps.data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="slotProps.data.severity" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig">
        <template #body="slotProps">
          <span :class="slotProps.data.overdue ? 'text-red-500' : 'text-gray-700'">
            {{ slotProps.data.dueDate }}
          </span>
        </template>
      </Column>
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

    <!-- Actions Popover -->
    <Popover ref="menu">
      <div class="flex flex-col gap-2 w-[177px]">
        <Button label="Bearbeiten" icon="pi pi-pen-to-square" outlined severity="secondary" class="justify-start" />
        <Button label="Status aktualisieren" icon="pi pi-list-check" outlined severity="secondary" class="justify-start" />
        <Button label="Löschen" icon="pi pi-trash" outlined severity="secondary" class="justify-start" />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { ref } from 'vue'
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
import Popover from 'primevue/popover'

const search = ref('')
const selectedStatus = ref(null)
const statusOptions = ref([
  { label: 'Offen', value: 'offen' },
  { label: 'In Arbeit', value: 'in_arbeit' },
  { label: 'Blockiert', value: 'blockiert' },
  { label: 'Fertig', value: 'fertig' }
])

const home = ref({ icon: 'pi pi-home', url: '#' })
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
])

const tasks = ref([
  {
    id: 1,
    task: 'Webseite Relaunch',
    assignee: 'Max Mustermann',
    initial: 'M',
    progress: 100,
    status: 'Fertig',
    severity: 'success',
    dueDate: '03.06.2026',
    overdue: false
  },
  {
    id: 2,
    task: 'Mobile App',
    assignee: 'Anna Schmidt',
    initial: 'A',
    progress: 45,
    status: 'In Arbeit',
    severity: 'warn',
    dueDate: '10.06.2026',
    overdue: false
  },
  {
    id: 3,
    task: 'Marketing Kampagne',
    assignee: 'Lisa Weber',
    initial: 'L',
    progress: 0,
    status: 'Offen',
    severity: 'info',
    dueDate: '18.05.2026',
    overdue: false
  },
  {
    id: 4,
    task: 'API Migration',
    assignee: 'Paul Müller',
    initial: 'P',
    progress: 72,
    status: 'Blockiert',
    severity: 'danger',
    dueDate: '12.05.2026',
    overdue: true
  }
])

const selectedTasks = ref([tasks.value[0]])

const menu = ref()
const selectedTask = ref(null)

const toggleMenu = (event, data) => {
  selectedTask.value = data
  menu.value.toggle(event)
}
</script>