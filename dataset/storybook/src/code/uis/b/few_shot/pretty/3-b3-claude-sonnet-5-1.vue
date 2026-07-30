<template>
  <div class="flex flex-col gap-6 p-8">
    <div class="flex items-center gap-4">
      <Button icon="pi pi-arrow-circle-left" severity="secondary" rounded text />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Projektaufgaben</h1>
        <p class="text-base text-surface-600">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</p>
      </div>
    </div>

    <Breadcrumb :home="home" :model="breadcrumbItems" />

    <div class="flex gap-4">
      <div class="flex flex-col gap-2">
        <label for="search-input" class="text-sm">Suche</label>
        <InputText v-model="search" input-id="search-input" placeholder="Suche..." />
      </div>
      <div class="flex flex-col gap-2">
        <label for="status-select" class="text-sm">Status</label>
        <Select
          v-model="statusFilter"
          :options="statusOptions"
          option-label="label"
          option-value="value"
          input-id="status-select"
          placeholder="Status auswählen"
          class="w-[216px]"
        />
      </div>
    </div>

    <DataTable :value="tasks" v-model:selection="selectedTasks">
      <Column selection-mode="multiple" header-style="width: 3rem" />
      <Column field="task" header="Aufgabe" />
      <Column field="assignee" header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.assignee.charAt(0)" shape="circle" />
            <span>{{ data.assignee }}</span>
          </div>
        </template>
      </Column>
      <Column field="progress" header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
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
      <Column header="Aktionen" header-class="w-24" body-class="w-24 flex justify-center">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            aria-haspopup="true"
            :aria-controls="'actions-menu-' + data.id"
            @click="(e) => toggleMenu(e, data)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="actionsMenu">
      <div class="flex flex-col gap-2 w-[177px]">
        <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined class="w-full !justify-start" />
        <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" outlined class="w-full !justify-start" />
        <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="w-full !justify-start" />
      </div>
    </Popover>
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
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

  const home = ref({ icon: 'pi pi-home', url: '/' })
  const breadcrumbItems = ref([
    { label: 'Projekte', url: '/projekte' },
    { label: 'Projekt 1', url: '/projekte/1' },
    { label: 'Aufgaben', url: '/projekte/1/aufgaben' },
  ])

  const search = ref('')
  const statusFilter = ref(null)
  const statusOptions = ref([
    { label: 'Offen', value: 'Offen' },
    { label: 'In Arbeit', value: 'In Arbeit' },
    { label: 'Blockiert', value: 'Blockiert' },
    { label: 'Fertig', value: 'Fertig' },
  ])

  const tasks = ref([
    {
      id: 1,
      task: 'Webseite Relaunch',
      assignee: 'Max Mustermann',
      progress: 100,
      status: 'Fertig',
      dueDate: '03.06.2026',
    },
    {
      id: 2,
      task: 'Mobile App',
      assignee: 'Anna Schmidt',
      progress: 45,
      status: 'In Arbeit',
      dueDate: '10.06.2026',
    },
    {
      id: 3,
      task: 'Marketing Kampagne',
      assignee: 'Lisa Weber',
      progress: 0,
      status: 'Offen',
      dueDate: '18.05.2026',
    },
    {
      id: 4,
      task: 'API Migration',
      assignee: 'Paul Müller',
      progress: 72,
      status: 'Blockiert',
      dueDate: '12.05.2026',
    },
  ])

  const selectedTasks = ref([tasks.value[0]])

  const actionsMenu = useTemplateRef('actionsMenu')
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