<template>
  <div class="p-8">
    <div class="flex items-center gap-4 mb-2">
      <Button icon="pi pi-arrow-left" rounded severity="secondary" outlined />
      <div>
        <h1 class="text-3xl font-bold m-0">Projektaufgaben</h1>
      </div>
    </div>
    <p class="text-gray-500 mb-4 ml-[64px]">
      Hier werden alle Aufgaben des Projekts <strong>Projekt 1</strong> aufgelistet.
    </p>

    <Breadcrumb :model="breadcrumbItems" class="mb-6 !bg-transparent !border-none !p-0">
      <template #item="{ item }">
        <span class="flex items-center gap-2 text-gray-500">
          <i v-if="item.icon" :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </span>
      </template>
    </Breadcrumb>

    <div class="flex gap-4 mb-4">
      <div class="flex flex-col gap-2 w-64">
        <label for="search-input">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText id="search-input" v-model="search" placeholder="Suche..." class="w-full" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2 w-64">
        <label for="status-select">Status</label>
        <Select
          id="status-select"
          v-model="selectedStatus"
          :options="statusOptions"
          option-label="label"
          placeholder="Status auswählen"
          class="w-full"
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
            <ProgressBar :value="data.progress" :show-value="false" class="!h-1.5 w-[182px]" />
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
          <span :class="{ 'text-red-500': data.status === 'Blockiert' }">{{ data.due }}</span>
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
            @click="toggleMenu($event, data)"
          />
        </template>
      </Column>
    </DataTable>

    <Menu
      ref="actionsMenuRef"
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

  const breadcrumbItems = [
    { icon: 'pi pi-home' },
    { label: 'Projekte' },
    { label: 'Projekt 1' },
    { label: 'Aufgaben' },
  ]

  const search = ref('')
  const selectedStatus = ref(null)
  const statusOptions = [
    { label: 'Offen' },
    { label: 'In Arbeit' },
    { label: 'Blockiert' },
    { label: 'Fertig' },
  ]

  const tasks = ref([
    {
      name: 'Webseite Relaunch',
      responsible: 'Max Mustermann',
      progress: 100,
      status: 'Fertig',
      due: '03.06.2026',
    },
    {
      name: 'Mobile App',
      responsible: 'Anna Schmidt',
      progress: 45,
      status: 'In Arbeit',
      due: '10.06.2026',
    },
    {
      name: 'Marketing Kampagne',
      responsible: 'Lisa Weber',
      progress: 0,
      status: 'Offen',
      due: '18.05.2026',
    },
    {
      name: 'API Migration',
      responsible: 'Paul Müller',
      progress: 72,
      status: 'Blockiert',
      due: '12.05.2026',
    },
  ])

  const selectedTasks = ref([tasks.value[0]])

  const actionsMenuRef = useTemplateRef('actionsMenuRef')
  const activeTask = ref(null)

  const actionOptions = [
    { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Status aktualisieren', icon: 'pi pi-list' },
    { label: 'Löschen', icon: 'pi pi-trash' },
  ]

  function toggleMenu(event: Event, data: any) {
    activeTask.value = data
    actionsMenuRef.value?.toggle(event)
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