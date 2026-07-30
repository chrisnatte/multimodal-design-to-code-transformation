<template>
  <div class="flex flex-col gap-6 p-8">
    <Breadcrumb :model="breadcrumbItems" class="w-fit">
      <template #item="{ item }">
        <span class="flex items-center gap-2">
          <i v-if="item.icon" :class="item.icon" />
          <span>{{ item.label }}</span>
        </span>
      </template>
    </Breadcrumb>

    <div class="flex items-center gap-4">
      <div class="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-slate-100">
        <i class="pi pi-list-check text-2xl" />
      </div>
      <div class="flex flex-col">
        <h1 class="text-3xl font-bold">Projektaufgaben</h1>
        <p class="text-base text-gray-500">
          Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.
        </p>
      </div>
    </div>

    <div class="flex gap-8">
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
          option-value="value"
          placeholder="Status auswählen"
          input-id="status-select"
          class="w-[216px]"
        />
      </div>
    </div>

    <DataTable :value="tasks">
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
            <span class="text-xs">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusTagSeverity(data.status)" rounded />
        </template>
      </Column>
      <Column field="due" header="Fällig" />
      <Column header="Aktionen">
        <template #body>
          <Button
            icon="pi pi-ellipsis-v"
            severity="secondary"
            text
            rounded
            aria-haspopup="true"
            aria-controls="task-actions-menu"
            @click="taskActionsMenu?.toggle"
          />
        </template>
      </Column>
    </DataTable>

    <Menu
      ref="task-actions-menu"
      id="task-actions-menu"
      :model="taskActionOptions"
      popup
      :pt="{
        list: 'flex flex-col !gap-1 !p-2',
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
  import Button from 'primevue/button'
  import Menu from 'primevue/menu'

  const breadcrumbItems = [
    { label: 'Projekte', icon: 'pi pi-folder' },
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

  const taskActionsMenu = useTemplateRef('task-actions-menu')
  const taskActionOptions = [
    { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
    { label: 'Löschen', icon: 'pi pi-trash' },
  ]

  function getStatusTagSeverity(status: string) {
    switch (status) {
      case 'Offen':
        return 'info'
      case 'In Arbeit':
        return 'warn'
      case 'Blockiert':
        return 'danger'
      case 'Fertig':
        return 'success'
    }
  }
</script>