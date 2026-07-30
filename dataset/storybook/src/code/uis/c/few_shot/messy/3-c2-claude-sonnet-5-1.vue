<template>
  <div class="flex flex-col gap-4 p-8">
    <div class="flex items-start gap-4">
      <Button icon="pi pi-arrow-left" severity="secondary" rounded />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Projektaufgaben</h1>
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
          v-model="statusFilter"
          :options="statusOptions"
          option-label="label"
          option-value="value"
          placeholder="Status auswählen"
          input-id="status-select"
          class="w-56"
        />
      </div>
    </div>

    <DataTable v-model:selection="selectedTasks" :value="tasks" selection-mode="multiple" data-key="id">
      <Column selection-mode="multiple" header-style="width: 3rem" />
      <Column field="name" header="Aufgabe" />
      <Column field="responsible" header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <Avatar :label="data.responsibleInitial" shape="circle" size="normal" />
            <span>{{ data.responsible }}</span>
          </div>
        </template>
      </Column>
      <Column field="progress" header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <ProgressBar :value="data.progress" :show-value="false" class="!h-1.5 w-32" />
            <span class="text-sm">{{ data.progress }} %</span>
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
          <span :class="data.status === 'Blockiert' ? 'text-red-500' : ''">{{ data.due }}</span>
        </template>
      </Column>
      <Column header="Aktionen">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            @click="toggleActionsMenu($event, data)"
          />
        </template>
      </Column>
    </DataTable>

    <Menu
      ref="actionsMenu"
      :model="actionOptions"
      popup
      :pt="{
        list: 'flex flex-col !gap-2 !p-2.5',
      }"
    >
      <template #item="{ item }">
        <Button
          :label="item.label"
          :icon="item.icon"
          severity="secondary"
          outlined
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

  const breadcrumbHome = { icon: 'pi pi-home', url: '/' }
  const breadcrumbItems = [
    { label: 'Projekte' },
    { label: 'Projekt 1' },
    { label: 'Aufgaben' },
  ]

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
      id: 1,
      name: 'Webseite Relaunch',
      responsible: 'Max Mustermann',
      responsibleInitial: 'M',
      progress: 100,
      status: 'Fertig',
      due: '03.06.2026',
    },
    {
      id: 2,
      name: 'Mobile App',
      responsible: 'Anna Schmidt',
      responsibleInitial: 'A',
      progress: 45,
      status: 'In Arbeit',
      due: '10.06.2026',
    },
    {
      id: 3,
      name: 'Marketing Kampagne',
      responsible: 'Lisa Weber',
      responsibleInitial: 'L',
      progress: 0,
      status: 'Offen',
      due: '18.05.2026',
    },
    {
      id: 4,
      name: 'API Migration',
      responsible: 'Paul Müller',
      responsibleInitial: 'P',
      progress: 72,
      status: 'Blockiert',
      due: '12.05.2026',
    },
  ])

  const selectedTasks = ref([tasks.value[0]])

  const actionsMenu = useTemplateRef('actionsMenu')
  const actionOptions = [
    { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Status aktualisieren', icon: 'pi pi-list' },
    { label: 'Löschen', icon: 'pi pi-trash' },
  ]

  function toggleActionsMenu(event: Event, data: any) {
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