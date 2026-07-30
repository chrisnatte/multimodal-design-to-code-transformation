<template>
  <div class="flex flex-col gap-6 p-8">
    <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" />

    <div class="flex items-center gap-4">
      <Avatar icon="pi pi-list-check" size="xlarge" shape="circle" />
      <div class="flex flex-col">
        <h1 class="text-3xl font-bold">Projektaufgaben</h1>
        <span class="text-base text-gray-600"
          >Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</span
        >
      </div>
    </div>

    <div class="flex gap-8">
      <div class="flex flex-col gap-2">
        <label for="search-input" class="text-sm">Suche</label>
        <InputText
          v-model="search"
          input-id="search-input"
          placeholder="Suche..."
          class="w-[216px]"
        >
          <template #default>
            <i class="pi pi-search" />
          </template>
        </InputText>
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
          class="w-[216px]"
          show-clear
        />
      </div>
    </div>

    <DataTable v-model:selection="selectedTasks" :value="tasks">
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
            <ProgressBar :value="data.progress" :show-value="false" class="!h-1.5 w-[182px]" />
            <span class="text-xs">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusTagSeverity(data.status)" rounded />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig" />
      <Column header="Aktionen" header-class="w-24" body-class="w-24 flex justify-center">
        <template #body>
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            aria-haspopup="true"
            aria-controls="task-actions-menu"
            @click="actionsMenu?.toggle"
          />
        </template>
      </Column>
    </DataTable>

    <Menu
      ref="actionsMenu"
      id="task-actions-menu"
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
  import Breadcrumb from 'primevue/breadcrumb'
  import Avatar from 'primevue/avatar'
  import InputText from 'primevue/inputtext'
  import Select from 'primevue/select'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import ProgressBar from 'primevue/progressbar'
  import Tag from 'primevue/tag'
  import Button from 'primevue/button'
  import Menu from 'primevue/menu'

  const breadcrumbHome = { icon: 'pi pi-home', url: '/' }
  const breadcrumbItems = ref([{ label: 'Projekte', url: '/projekte' }, { label: 'Projekt 1' }, { label: 'Aufgaben' }])

  const search = ref('')
  const statusFilter = ref(null)
  const statusOptions = [
    { label: 'Offen', value: 'Offen' },
    { label: 'In Arbeit', value: 'In Arbeit' },
    { label: 'Blockiert', value: 'Blockiert' },
    { label: 'Fertig', value: 'Fertig' },
  ]

  const selectedTasks = ref([])
  const tasks = ref([
    { name: 'Webseite Relaunch', assignee: 'Max Mustermann', progress: 100, status: 'Fertig', dueDate: '03.06.2026' },
    { name: 'Mobile App', assignee: 'Anna Schmidt', progress: 45, status: 'In Arbeit', dueDate: '10.06.2026' },
    { name: 'Marketing Kampagne', assignee: 'Lisa Weber', progress: 0, status: 'Offen', dueDate: '18.05.2026' },
    { name: 'API Migration', assignee: 'Paul Müller', progress: 72, status: 'Blockiert', dueDate: '12.05.2026' },
  ])

  const actionsMenu = useTemplateRef('actionsMenu')
  const actionOptions = [
    { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
    { label: 'Löschen', icon: 'pi pi-trash' },
  ]

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