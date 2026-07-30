<template>
  <div class="flex flex-col gap-4 p-8">
    <div class="flex items-center gap-4">
      <Button icon="pi pi-arrow-left" severity="secondary" rounded outlined />
      <div class="flex flex-col">
        <h1 class="text-3xl font-bold">Projektaufgaben</h1>
        <p class="text-base text-gray-500">
          Hier werden alle Aufgaben des Projekts <b>Projekt 1</b> aufgelistet.
        </p>
      </div>
    </div>

    <Breadcrumb :model="breadcrumbItems" :home="breadcrumbHome" />

    <div class="flex gap-4">
      <div class="flex w-52 flex-col gap-2">
        <label for="search-input" class="text-sm">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText id="search-input" v-model="search" placeholder="Suche..." class="w-full" />
        </IconField>
      </div>
      <div class="flex w-52 flex-col gap-2">
        <label for="status-select" class="text-sm">Status</label>
        <Select
          v-model="selectedStatus"
          input-id="status-select"
          :options="statusOptions"
          option-label="label"
          placeholder="Status auswählen"
          class="w-full"
        />
      </div>
    </div>

    <DataTable :value="tasks" selection-mode="multiple" v-model:selection="selectedTasks">
      <Column selection-mode="multiple" header-style="width: 3rem" />
      <Column field="name" header="Aufgabe" />
      <Column field="assignee" header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <Avatar :label="data.assignee.charAt(0)" shape="circle" />
            <span>{{ data.assignee }}</span>
          </div>
        </template>
      </Column>
      <Column field="progress" header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <ProgressBar :value="data.progress" :show-value="false" class="!h-1.5 w-46" />
            <span class="text-sm">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusTagSeverity(data.status)" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig">
        <template #body="{ data }">
          <span :class="{ 'text-red-500': data.status === 'Blockiert' }">{{ data.dueDate }}</span>
        </template>
      </Column>
      <Column header="Aktionen" header-style="width: 6rem">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            aria-haspopup="true"
            aria-controls="actions-menu"
            @click="(e) => toggleMenu(e, data)"
          />
        </template>
      </Column>
    </DataTable>

    <Menu ref="actionsMenu" id="actions-menu" :model="actionOptions" popup />
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
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

  const search = ref('')

  const statusOptions = [
    { label: 'Offen', value: 'Offen' },
    { label: 'In Arbeit', value: 'In Arbeit' },
    { label: 'Blockiert', value: 'Blockiert' },
    { label: 'Fertig', value: 'Fertig' },
  ]
  const selectedStatus = ref(statusOptions[1])

  const breadcrumbHome = { icon: 'pi pi-home' }
  const breadcrumbItems = [{ label: 'Projekte' }, { label: 'Projekt 1' }, { label: 'Aufgaben' }]

  const tasks = ref([
    {
      name: 'Webseite Relaunch',
      assignee: 'Max Mustermann',
      progress: 100,
      status: 'Fertig',
      dueDate: '03.06.2026',
    },
    {
      name: 'Mobile App',
      assignee: 'Anna Schmidt',
      progress: 45,
      status: 'In Arbeit',
      dueDate: '10.06.2026',
    },
    {
      name: 'Marketing Kampagne',
      assignee: 'Lisa Weber',
      progress: 0,
      status: 'Offen',
      dueDate: '18.05.2026',
    },
    {
      name: 'API Migration',
      assignee: 'Paul Müller',
      progress: 72,
      status: 'Blockiert',
      dueDate: '12.05.2026',
    },
  ])

  const selectedTasks = ref([tasks.value[0]])

  const actionsMenu = useTemplateRef('actionsMenu')
  const activeTask = ref(null)

  const actionOptions = [
    {
      label: 'Bearbeiten',
      icon: 'pi pi-pen-to-square',
    },
    {
      label: 'Status aktualisieren',
      icon: 'pi pi-list',
    },
    {
      label: 'Löschen',
      icon: 'pi pi-trash',
    },
  ]

  function toggleMenu(event: Event, task: any) {
    activeTask.value = task
    actionsMenu.value?.toggle(event)
  }

  function getStatusTagSeverity(status: string) {
    switch (status) {
      case 'Fertig':
        return 'success'
      case 'In Arbeit':
        return 'warn'
      case 'Offen':
        return 'info'
      case 'Blockiert':
        return 'danger'
    }
  }
</script>