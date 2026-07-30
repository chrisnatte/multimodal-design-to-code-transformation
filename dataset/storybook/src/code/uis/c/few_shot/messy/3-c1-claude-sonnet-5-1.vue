<template>
  <div class="flex flex-col gap-4 p-8">
    <div class="flex items-start gap-4">
      <Button icon="pi pi-arrow-left" severity="secondary" rounded />
      <div class="flex flex-col gap-1">
        <h1 class="text-2xl font-bold">Projektaufgaben</h1>
        <p class="text-gray-500">
          Hier werden alle Aufgaben des Projekts <span class="font-bold">Projekt 1</span> aufgelistet.
        </p>
      </div>
    </div>

    <Breadcrumb :model="breadcrumbItems" :home="breadcrumbHome" />

    <div class="flex gap-6">
      <div class="flex flex-col gap-2">
        <label for="search-input" class="text-sm">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText v-model="search" input-id="search-input" placeholder="Suche..." />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label for="status-select" class="text-sm">Status</label>
        <Select
          v-model="selectedStatus"
          :options="statusOptions"
          option-label="label"
          placeholder="Status auswählen"
          input-id="status-select"
          class="w-56"
        />
      </div>
    </div>

    <DataTable v-model:selection="selectedTasks" :value="tasks" data-key="name">
      <Column selection-mode="multiple" header-style="width: 3rem" />
      <Column field="name" header="Aufgabe" />
      <Column field="assignee" header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <Avatar :label="data.assigneeInitial" shape="circle" />
            <span>{{ data.assignee }}</span>
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
            aria-haspopup="true"
            @click="toggleMenu($event, data)"
          />
        </template>
      </Column>
    </DataTable>

    <Menu
      ref="actionsMenu"
      :model="actionOptions"
      popup
      :pt="{
        list: 'flex flex-col !gap-1.5 !p-2',
      }"
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
  import InputText from 'primevue/inputtext'
  import IconField from 'primevue/iconfield'
  import InputIcon from 'primevue/inputicon'
  import Select from 'primevue/select'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import Avatar from 'primevue/avatar'
  import ProgressBar from 'primevue/progressbar'
  import Tag from 'primevue/tag'
  import Menu from 'primevue/menu'

  const breadcrumbHome = { icon: 'pi pi-home' }
  const breadcrumbItems = [
    { label: 'Projekte' },
    { label: 'Projekt 1' },
    { label: 'Aufgaben' },
  ]

  const search = ref('')
  const statusOptions = [
    { label: 'Offen' },
    { label: 'In Arbeit' },
    { label: 'Blockiert' },
    { label: 'Fertig' },
  ]
  const selectedStatus = ref(statusOptions[1])

  const tasks = ref([
    {
      name: 'Webseite Relaunch',
      assignee: 'Max Mustermann',
      assigneeInitial: 'M',
      progress: 100,
      status: 'Fertig',
      due: '03.06.2026',
      overdue: false,
    },
    {
      name: 'Mobile App',
      assignee: 'Anna Schmidt',
      assigneeInitial: 'A',
      progress: 45,
      status: 'In Arbeit',
      due: '10.06.2026',
      overdue: false,
    },
    {
      name: 'Marketing Kampagne',
      assignee: 'Lisa Weber',
      assigneeInitial: 'L',
      progress: 0,
      status: 'Offen',
      due: '18.05.2026',
      overdue: false,
    },
    {
      name: 'API Migration',
      assignee: 'Paul Müller',
      assigneeInitial: 'P',
      progress: 72,
      status: 'Blockiert',
      due: '12.05.2026',
      overdue: true,
    },
  ])

  const selectedTasks = ref([tasks.value[0]])

  const actionsMenu = useTemplateRef('actionsMenu')
  const actionOptions = [
    { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Status aktualisieren', icon: 'pi pi-list' },
    { label: 'Löschen', icon: 'pi pi-trash' },
  ]

  function toggleMenu(event: Event, data: any) {
    actionsMenu.value?.toggle(event)
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