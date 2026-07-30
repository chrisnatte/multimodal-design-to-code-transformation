<template>
  <div class="flex flex-col gap-6 p-10">
    <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" />

    <div class="flex items-start gap-4">
      <div class="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-slate-100">
        <i class="pi pi-list-check text-xl" />
      </div>
      <div class="flex flex-col">
        <h1 class="text-3xl font-bold">Projektaufgaben</h1>
        <p class="text-base text-slate-600">
          Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.
        </p>
      </div>
    </div>

    <div class="flex gap-8">
      <div class="flex flex-col gap-2">
        <label for="search-input" class="text-sm">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText v-model="search" input-id="search-input" placeholder="Suche..." />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label for="status-filter" class="text-sm">Status</label>
        <Select
          v-model="statusFilter"
          input-id="status-filter"
          :options="statusOptions"
          option-label="label"
          option-value="value"
          placeholder="Status auswählen"
          show-clear
          class="w-[216px]"
        />
      </div>
    </div>

    <DataTable :value="tasks" selection-mode="multiple" data-key="id">
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
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig" />
      <Column header="Aktionen">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            outlined
            aria-haspopup="true"
            aria-controls="actions-menu"
            @click="toggleMenu($event, data)"
          />
        </template>
      </Column>
    </DataTable>

    <Menu
      ref="actionsMenu"
      id="actions-menu"
      :model="actionOptions"
      popup
      :pt="{ list: 'flex flex-col !gap-2 !p-2.5' }"
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
  import IconField from 'primevue/iconfield'
  import InputIcon from 'primevue/inputicon'
  import InputText from 'primevue/inputtext'
  import Select from 'primevue/select'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import Avatar from 'primevue/avatar'
  import ProgressBar from 'primevue/progressbar'
  import Tag from 'primevue/tag'
  import Button from 'primevue/button'
  import Menu from 'primevue/menu'

  const breadcrumbHome = { icon: 'pi pi-home', to: '/' }
  const breadcrumbItems = ref([{ label: 'Projekte', to: '/projekte' }, { label: 'Projekt 1' }, { label: 'Aufgaben' }])

  const search = ref('')
  const statusFilter = ref(null)
  const statusOptions = [
    { label: 'Offen', value: 'Offen' },
    { label: 'In Arbeit', value: 'In Arbeit' },
    { label: 'Blockiert', value: 'Blockiert' },
    { label: 'Fertig', value: 'Fertig' },
  ]

  const tasks = ref([
    { id: 1, name: 'Webseite Relaunch', assignee: 'Max Mustermann', progress: 100, status: 'Fertig', dueDate: '03.06.2026' },
    { id: 2, name: 'Mobile App', assignee: 'Anna Schmidt', progress: 45, status: 'In Arbeit', dueDate: '10.06.2026' },
    { id: 3, name: 'Marketing Kampagne', assignee: 'Lisa Weber', progress: 0, status: 'Offen', dueDate: '18.05.2026' },
    { id: 4, name: 'API Migration', assignee: 'Paul Müller', progress: 72, status: 'Blockiert', dueDate: '12.05.2026' },
  ])

  const actionsMenu = useTemplateRef('actionsMenu')
  const selectedTask = ref(null)

  const actionOptions = [
    { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
    { label: 'Löschen', icon: 'pi pi-trash' },
  ]

  function toggleMenu(event: Event, data: any) {
    selectedTask.value = data
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