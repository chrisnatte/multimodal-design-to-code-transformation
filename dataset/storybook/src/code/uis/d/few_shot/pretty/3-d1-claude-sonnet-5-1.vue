<template>
  <div class="flex flex-col gap-6 p-8">
    <div class="flex items-center gap-4">
      <Button icon="pi pi-arrow-circle-left" rounded severity="secondary" text class="!w-[50px] !h-[50px]" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Projektaufgaben</h1>
        <p class="text-base">Hier werden alle Aufgaben des Projekts <b>Projekt 1</b> aufgelistet.</p>
      </div>
    </div>

    <Breadcrumb :model="breadcrumbItems" :pt="{ root: 'w-fit' }">
      <template #item="{ item }">
        <span v-if="item.icon" :class="item.icon" />
        <span v-else>{{ item.label }}</span>
      </template>
    </Breadcrumb>

    <div class="flex items-start gap-4">
      <div class="flex flex-col gap-2">
        <label for="search-input" class="text-sm">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText id="search-input" v-model="search" placeholder="Suche..." class="w-[216px]" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label for="status-select" class="text-sm">Status</label>
        <Select
          v-model="statusFilter"
          :options="statusOptions"
          option-label="label"
          input-id="status-select"
          placeholder="Status auswählen"
          class="w-[216px]"
        />
      </div>
    </div>

    <DataTable v-model:selection="selectedTasks" :value="tasks" data-key="id">
      <Column selection-mode="multiple" header-style="width: 3rem" />
      <Column field="name" header="Aufgabe" />
      <Column header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.assignee.charAt(0)" shape="circle" />
            <span>{{ data.assignee }}</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <ProgressBar :value="data.progress" :show-value="false" class="!h-1.5 w-[182px]" />
            <span class="text-xs">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusTagSeverity(data.status)" />
        </template>
      </Column>
      <Column field="due" header="Fällig">
        <template #body="{ data }">
          <span :class="data.status === 'Blockiert' ? 'text-red-500' : ''">{{ data.due }}</span>
        </template>
      </Column>
      <Column header="Aktionen" header-style="width: 4rem">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
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
    { label: 'Offen' },
    { label: 'In Arbeit' },
    { label: 'Blockiert' },
    { label: 'Fertig' },
  ]
  const statusFilter = ref(statusOptions[1])

  const breadcrumbItems = [
    { icon: 'pi pi-home' },
    { label: 'Projekte' },
    { label: 'Projekt 1' },
    { label: 'Aufgaben' },
  ]

  const tasks = ref([
    { id: 1, name: 'Webseite Relaunch', assignee: 'Max Mustermann', progress: 100, status: 'Fertig', due: '03.06.2026' },
    { id: 2, name: 'Mobile App', assignee: 'Anna Schmidt', progress: 45, status: 'In Arbeit', due: '10.06.2026' },
    { id: 3, name: 'Marketing Kampagne', assignee: 'Lisa Weber', progress: 0, status: 'Offen', due: '18.05.2026' },
    { id: 4, name: 'API Migration', assignee: 'Paul Müller', progress: 72, status: 'Blockiert', due: '12.05.2026' },
  ])

  const selectedTasks = ref([tasks.value[0]])

  const actionsMenu = useTemplateRef('actionsMenu')
  const activeTask = ref(null)

  function toggleMenu(event, data) {
    activeTask.value = data
    actionsMenu.value?.toggle(event)
  }

  const actionOptions = [
    { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
    { label: 'Löschen', icon: 'pi pi-trash' },
  ]

  function getStatusTagSeverity(status) {
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