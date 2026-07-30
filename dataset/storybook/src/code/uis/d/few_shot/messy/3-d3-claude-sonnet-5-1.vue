<template>
  <div class="p-8">
    <div class="mb-6 flex items-start gap-4">
      <Button icon="pi pi-arrow-left" rounded severity="secondary" outlined />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Projektaufgaben</h1>
        <p class="text-base text-gray-600">
          Hier werden alle Aufgaben des Projekts <b>Projekt 1</b> aufgelistet.
        </p>
      </div>
    </div>

    <Breadcrumb :model="breadcrumbItems" class="mb-6 !bg-transparent !p-0" home="Projekte">
      <template #item="{ item }">
        <span class="flex items-center gap-1 text-gray-600">
          <i v-if="item.icon" :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </span>
      </template>
    </Breadcrumb>

    <div class="mb-4 flex gap-4">
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
          option-value="value"
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
            <Avatar :label="data.responsible.charAt(0)" shape="circle" size="normal" />
            <span>{{ data.responsible }}</span>
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
      <Column field="due" header="Fällig">
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
            aria-controls="actions-menu"
            @click="(e) => toggleActionsMenu(e, data)"
          />
        </template>
      </Column>
    </DataTable>

    <Menu
      ref="actionsMenuRef"
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
  import { ref } from 'vue'
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

  const breadcrumbItems = [
    { label: 'Projekt 1' },
    { label: 'Aufgaben' },
  ]

  const search = ref('')
  const selectedStatus = ref(null)
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

  const actionsMenuRef = ref()
  const activeTask = ref(null)

  function toggleActionsMenu(event: Event, task: any) {
    activeTask.value = task
    actionsMenuRef.value?.toggle(event)
  }

  const actionOptions = [
    { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Status aktualisieren', icon: 'pi pi-list' },
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