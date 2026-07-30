<template>
  <div class="p-8">
    <div class="flex items-center gap-4 mb-4">
      <Button icon="pi pi-arrow-circle-left" severity="secondary" text rounded class="!w-12 !h-12" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Projektaufgaben</h1>
        <p class="text-surface-500">
          Hier werden alle Aufgaben des Projekts <span class="font-semibold">Projekt 1</span> aufgelistet.
        </p>
      </div>
    </div>

    <Breadcrumb :home="home" :model="breadcrumbItems" class="mb-6 w-fit" />

    <div class="flex gap-4 mb-4">
      <div class="flex flex-col gap-2">
        <label for="search">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText id="search" v-model="search" placeholder="Suche..." />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label for="status">Status</label>
        <Select
          id="status"
          v-model="selectedStatus"
          :options="statusOptions"
          placeholder="Status auswählen"
          class="w-56"
        />
      </div>
    </div>

    <DataTable :value="tasks" v-model:selection="selectedTasks" dataKey="name">
      <Column selectionMode="multiple" headerStyle="width: 3rem" />
      <Column field="name" header="Aufgabe" />
      <Column header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.responsible.charAt(0)" shape="circle" />
            <span>{{ data.responsible }}</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <ProgressBar :value="data.progress" :showValue="false" class="!h-1.5 w-[182px]" />
            <span class="text-sm">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
        </template>
      </Column>
      <Column header="Fällig">
        <template #body="{ data }">
          <span :class="{ 'text-red-500': data.overdue }">{{ data.due }}</span>
        </template>
      </Column>
      <Column header="Aktionen">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            aria-haspopup="true"
            aria-controls="actions-popover"
            @click="toggleActions($event, data)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="actionsPopover" id="actions-popover">
      <div class="flex flex-col gap-2 w-44">
        <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined class="w-full !justify-start" />
        <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" outlined class="w-full !justify-start" />
        <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="w-full !justify-start" />
      </div>
    </Popover>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import Breadcrumb from 'primevue/breadcrumb'
  import Button from 'primevue/button'
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

  const home = ref({ icon: 'pi pi-home' })
  const breadcrumbItems = ref([
    { label: 'Projekte' },
    { label: 'Projekt 1' },
    { label: 'Aufgaben' },
  ])

  const search = ref('')
  const selectedStatus = ref(null)
  const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig'])

  const tasks = ref([
    { name: 'Webseite Relaunch', responsible: 'Max Mustermann', progress: 100, status: 'Fertig', due: '03.06.2026', overdue: false },
    { name: 'Mobile App', responsible: 'Anna Schmidt', progress: 45, status: 'In Arbeit', due: '10.06.2026', overdue: false },
    { name: 'Marketing Kampagne', responsible: 'Lisa Weber', progress: 0, status: 'Offen', due: '18.05.2026', overdue: false },
    { name: 'API Migration', responsible: 'Paul Müller', progress: 72, status: 'Blockiert', due: '12.05.2026', overdue: true },
  ])

  const selectedTasks = ref([tasks.value[0]])

  const actionsPopover = ref()
  const selectedTaskForActions = ref(null)

  function toggleActions(event, data) {
    selectedTaskForActions.value = data
    actionsPopover.value.toggle(event)
  }

  function getStatusSeverity(status) {
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