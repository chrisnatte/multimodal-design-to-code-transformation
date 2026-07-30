<template>
  <div class="p-8">
    <div class="flex items-center gap-4 mb-2">
      <Button icon="pi pi-arrow-left" rounded outlined severity="secondary" class="!w-10 !h-10" />
      <div>
        <h1 class="text-3xl font-bold text-gray-800">Projektaufgaben</h1>
      </div>
    </div>
    <p class="text-gray-500 mb-3 ml-14">
      Hier werden alle Aufgaben des Projekts <span class="font-semibold">Projekt 1</span> aufgelistet.
    </p>

    <Breadcrumb :home="home" :model="breadcrumbItems" class="mb-6 ml-14 !bg-transparent !border-none !p-0" />

    <div class="flex gap-8 mb-6 ml-14">
      <div class="flex flex-col gap-2">
        <label class="text-sm text-gray-700">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText v-model="search" placeholder="Suche..." class="w-64" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-gray-700">Status</label>
        <Select v-model="statusFilter" :options="statusOptions" optionLabel="label" optionValue="value" placeholder="Status auswählen" class="w-64" />
      </div>
    </div>

    <div class="ml-14">
      <DataTable v-model:selection="selectedTasks" :value="tasks" dataKey="id" tableStyle="min-width: 60rem">
        <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
        <Column field="name" header="Aufgabe"></Column>
        <Column header="Verantwortlicher">
          <template #body="slotProps">
            <div class="flex items-center gap-2">
              <Avatar :label="slotProps.data.initial" shape="circle" size="normal" class="!bg-gray-200 !text-gray-700" />
              <span>{{ slotProps.data.responsible }}</span>
            </div>
          </template>
        </Column>
        <Column header="Status">
          <template #body="slotProps">
            <div class="flex items-center gap-2">
              <ProgressBar :value="slotProps.data.progress" :showValue="false" style="height: 6px; width: 120px" />
              <span class="text-sm text-gray-600">{{ slotProps.data.progress }} %</span>
            </div>
          </template>
        </Column>
        <Column header="Status">
          <template #body="slotProps">
            <Tag :value="slotProps.data.status" :severity="statusSeverity(slotProps.data.status)" />
          </template>
        </Column>
        <Column field="due" header="Fällig">
          <template #body="slotProps">
            <span :class="slotProps.data.status === 'Blockiert' ? 'text-red-500' : 'text-gray-700'">{{ slotProps.data.due }}</span>
          </template>
        </Column>
        <Column header="Aktionen" headerStyle="width: 4rem">
          <template #body="slotProps">
            <Button icon="pi pi-ellipsis-h" text rounded severity="secondary" @click="toggleMenu($event, slotProps.data)" />
          </template>
        </Column>
      </DataTable>
    </div>

    <Popover ref="menuRef">
      <div class="flex flex-col gap-1 w-48">
        <Button label="Bearbeiten" icon="pi pi-pencil" text class="justify-start" />
        <Button label="Status aktualisieren" icon="pi pi-list" text class="justify-start" />
        <Button label="Löschen" icon="pi pi-trash" text severity="danger" class="justify-start" />
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
const statusFilter = ref(null)

const statusOptions = ref([
  { label: 'Offen', value: 'Offen' },
  { label: 'In Arbeit', value: 'In Arbeit' },
  { label: 'Blockiert', value: 'Blockiert' },
  { label: 'Fertig', value: 'Fertig' }
])

const home = ref({ icon: 'pi pi-home', url: '#' })
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
])

const tasks = ref([
  { id: 1, name: 'Webseite Relaunch', responsible: 'Max Mustermann', initial: 'M', progress: 100, status: 'Fertig', due: '03.06.2026' },
  { id: 2, name: 'Mobile App', responsible: 'Anna Schmidt', initial: 'A', progress: 45, status: 'In Arbeit', due: '10.06.2026' },
  { id: 3, name: 'Marketing Kampagne', responsible: 'Lisa Weber', initial: 'L', progress: 0, status: 'Offen', due: '18.05.2026' },
  { id: 4, name: 'API Migration', responsible: 'Paul Müller', initial: 'P', progress: 72, status: 'Blockiert', due: '12.05.2026' }
])

const selectedTasks = ref([tasks.value[0]])

const menuRef = ref()
const toggleMenu = (event) => {
  menuRef.value.toggle(event)
}

const statusSeverity = (status) => {
  switch (status) {
    case 'Fertig':
      return 'success'
    case 'In Arbeit':
      return 'warn'
    case 'Blockiert':
      return 'danger'
    case 'Offen':
      return 'info'
    default:
      return 'secondary'
  }
}
</script>