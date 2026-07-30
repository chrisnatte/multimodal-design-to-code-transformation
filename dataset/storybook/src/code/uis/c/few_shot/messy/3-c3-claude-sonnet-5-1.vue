<template>
  <div class="flex flex-col gap-4 p-8">
    <div class="flex items-start gap-4">
      <Button icon="pi pi-arrow-left" severity="secondary" rounded />
      <div class="flex flex-col gap-1">
        <h1 class="text-2xl font-bold">Projektaufgaben</h1>
        <p class="text-gray-500">
          Hier werden alle Aufgaben des Projekts <span class="font-bold">Projekt 1</span>
          aufgelistet.
        </p>
      </div>
    </div>

    <Breadcrumb :model="breadcrumbItems" :home="breadcrumbHome" />

    <div class="flex gap-6">
      <div class="flex flex-col gap-1">
        <label for="search-input" class="text-sm">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText v-model="search" input-id="search-input" placeholder="Suche..." />
        </IconField>
      </div>
      <div class="flex flex-col gap-1">
        <label for="status-select" class="text-sm">Status</label>
        <Select
          v-model="statusFilter"
          :options="statusOptions"
          option-label="label"
          placeholder="Status auswählen"
          input-id="status-select"
          class="w-56"
        />
      </div>
    </div>

    <DataTable :value="tasks" v-model:selection="selectedTasks">
      <Column selection-mode="multiple" header-style="width: 3rem" />
      <Column field="name" header="Aufgabe" />
      <Column field="responsible" header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <Avatar :label="data.responsible.charAt(0)" shape="circle" />
            <span>{{ data.responsible }}</span>
          </div>
        </template>
      </Column>
      <Column field="progress" header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <ProgressBar :value="data.progress" :show-value="false" class="!h-1.5 w-32" />
            <span>{{ data.progress }} %</span>
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
      <Column header="Aktionen" header-style="width: 4rem">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            aria-haspopup="true"
            aria-controls="task-actions-menu"
            @click="(e) => toggleMenu(e, data)"
          />
        </template>
      </Column>
    </DataTable>

    <Menu
      ref="taskActionsMenu"
      id="task-actions-menu"
      :model="actionOptions"
      popup
      :pt="{ list: 'flex flex-col !gap-1 !p-2' }"
    >
      <template #item="{ item }">
        <Button
          :label="item.label"
          :icon="item.icon"
          severity="secondary"
          text
          class="w-full !justify-start"
        />
      </template>
    </Menu>
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
  const statusFilter = ref(null)
  const statusOptions = [
    { label: 'Offen', value: 'Offen' },
    { label: 'In Arbeit', value: 'In Arbeit' },
    { label: 'Blockiert', value: 'Blockiert' },
    { label: 'Fertig', value: 'Fertig' },
  ]

  const tasks = ref([
    {
      name: 'Webseite Relaunch',
      responsible: 'Max Mustermann',
      progress: 100,
      status: 'Fertig',
      due: '03.06.2026',
      overdue: false,
    },
    {
      name: 'Mobile App',
      responsible: 'Anna Schmidt',
      progress: 45,
      status: 'In Arbeit',
      due: '10.06.2026',
      overdue: false,
    },
    {
      name: 'Marketing Kampagne',
      responsible: 'Lisa Weber',
      progress: 0,
      status: 'Offen',
      due: '18.05.2026',
      overdue: false,
    },
    {
      name: 'API Migration',
      responsible: 'Paul Müller',
      progress: 72,
      status: 'Blockiert',
      due: '12.05.2026',
      overdue: true,
    },
  ])

  const selectedTasks = ref([tasks.value[0]])

  const breadcrumbHome = { icon: 'pi pi-home', url: '#' }
  const breadcrumbItems = ref([
    { label: 'Projekte', url: '#' },
    { label: 'Projekt 1', url: '#' },
    { label: 'Aufgaben' },
  ])

  const taskActionsMenu = useTemplateRef('taskActionsMenu')
  const activeTask = ref(null)
  const actionOptions = [
    { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Status aktualisieren', icon: 'pi pi-list' },
    { label: 'Löschen', icon: 'pi pi-trash' },
  ]

  function toggleMenu(event: Event, data: unknown) {
    activeTask.value = data
    taskActionsMenu.value?.toggle(event)
  }

  function getStatusSeverity(status: string) {
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