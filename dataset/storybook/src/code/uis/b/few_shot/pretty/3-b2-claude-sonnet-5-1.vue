<template>
  <div class="p-8 flex flex-col gap-4">
    <div class="flex items-center gap-4">
      <Button icon="pi pi-arrow-circle-left" severity="secondary" rounded text class="!w-[50px] !h-[50px]" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Projektaufgaben</h1>
        <span class="text-base text-color-secondary">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</span>
      </div>
    </div>

    <Breadcrumb :home="home" :model="breadcrumbItems" />

    <div class="flex items-end gap-4">
      <div class="flex flex-col gap-2">
        <label for="search">Suche</label>
        <InputText id="search" v-model="search" placeholder="Suche..." />
      </div>
      <div class="flex flex-col gap-2">
        <label for="status-filter">Status</label>
        <Select
          id="status-filter"
          v-model="statusFilter"
          :options="statusOptions"
          placeholder="Status auswählen"
          class="w-[216px]"
        />
      </div>
    </div>

    <DataTable :value="tasks" v-model:selection="selectedTasks">
      <Column selectionMode="multiple" header-style="width: 3rem" />
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
            <ProgressBar :value="data.progress" :show-value="false" class="!h-1.5 flex-1" />
            <span class="text-sm">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig" />
      <Column header="Aktionen" header-class="w-24" body-class="w-24 flex justify-center">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            aria-haspopup="true"
            aria-controls="task-actions-popover"
            @click="(e) => toggleActionsPopover(e, data)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="actionsPopover" id="task-actions-popover">
      <div class="flex flex-col gap-2 w-[177px]">
        <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined class="w-full !justify-start" />
        <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" outlined class="w-full !justify-start" />
        <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="w-full !justify-start" />
      </div>
    </Popover>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Breadcrumb from 'primevue/breadcrumb'
  import Button from 'primevue/button'
  import InputText from 'primevue/inputtext'
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
  const statusFilter = ref()
  const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig'])

  const tasks = ref([
    { name: 'Webseite Relaunch', responsible: 'Max Mustermann', progress: 100, status: 'Fertig', dueDate: '03.06.2026' },
    { name: 'Mobile App', responsible: 'Anna Schmidt', progress: 45, status: 'In Arbeit', dueDate: '10.06.2026' },
    { name: 'Marketing Kampagne', responsible: 'Lisa Weber', progress: 0, status: 'Offen', dueDate: '18.05.2026' },
    { name: 'API Migration', responsible: 'Paul Müller', progress: 72, status: 'Blockiert', dueDate: '12.05.2026' },
  ])

  const selectedTasks = ref([tasks.value[0]])

  const actionsPopover = ref()
  const selectedTask = ref(null)

  function toggleActionsPopover(event: Event, task: any) {
    selectedTask.value = task
    actionsPopover.value?.toggle(event)
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
      default:
        return null
    }
  }
</script>