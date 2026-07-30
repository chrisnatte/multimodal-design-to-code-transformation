<template>
  <div class="flex min-h-screen flex-col gap-8 bg-white p-8">
    <!-- Breadcrumb -->
    <Breadcrumb :model="breadcrumbItems" :home="home" class="w-fit border-none bg-transparent !p-0" />

    <!-- Header -->
    <div class="flex items-center gap-4">
      <div class="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
        <i class="pi pi-folder text-xl text-slate-600"></i>
      </div>
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-slate-900">Projektaufgaben</h1>
        <p class="text-base text-slate-600">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</p>
      </div>
    </div>

    <!-- Filters -->
    <div class="flex items-end gap-6">
      <div class="flex flex-col gap-2">
        <label class="text-sm text-slate-700">Suche</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-search" />
          <InputText v-model="searchQuery" placeholder="Suche..." class="w-56" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-slate-700">Status</label>
        <Select v-model="selectedStatus" :options="statusOptions" placeholder="Status auswählen" class="w-56" />
      </div>
    </div>

    <!-- DataTable -->
    <DataTable
      v-model:selection="selectedTasks"
      :value="tasks"
      dataKey="id"
      class="w-full rounded-lg border border-slate-200"
      :pt="{
        thead: 'bg-slate-50',
        headerRow: 'text-slate-700',
      }"
    >
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="name" header="Aufgabe" class="font-medium text-slate-900"></Column>
      <Column header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.assignee.initials" shape="circle" class="bg-slate-200 text-sm text-slate-700" />
            <span class="text-slate-700">{{ data.assignee.name }}</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="{ data }">
          <div class="flex w-48 items-center gap-3">
            <ProgressBar :value="data.progress" :showValue="false" class="h-1.5 flex-1" />
            <span class="w-8 text-xs text-slate-600">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig" class="text-slate-700"></Column>
      <Column header="Aktionen" headerStyle="width: 5rem" bodyStyle="text-align: center">
        <template #body>
          <Button
            icon="pi pi-ellipsis-h"
            text
            rounded
            severity="secondary"
            aria-haspopup="true"
            aria-controls="overlay_menu"
            @click="toggleMenu"
          />
        </template>
      </Column>
    </DataTable>

    <!-- Action Menu -->
    <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" />
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

  const breadcrumbItems = ref([{ label: 'Projekte' }, { label: 'Projekt 1' }, { label: 'Aufgaben' }])
  const home = ref({ icon: 'pi pi-home' })

  const searchQuery = ref('')
  const selectedStatus = ref('In Arbeit')
  const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig'])

  const tasks = ref([
    {
      id: 1,
      name: 'Webseite Relaunch',
      assignee: { name: 'Max Mustermann', initials: 'M' },
      progress: 100,
      status: 'Fertig',
      dueDate: '03.06.2026',
    },
    {
      id: 2,
      name: 'Mobile App',
      assignee: { name: 'Anna Schmidt', initials: 'A' },
      progress: 45,
      status: 'In Arbeit',
      dueDate: '10.06.2026',
    },
    {
      id: 3,
      name: 'Marketing Kampagne',
      assignee: { name: 'Lisa Weber', initials: 'L' },
      progress: 0,
      status: 'Offen',
      dueDate: '18.05.2026',
    },
    {
      id: 4,
      name: 'API Migration',
      assignee: { name: 'Paul Müller', initials: 'P' },
      progress: 72,
      status: 'Blockiert',
      dueDate: '12.05.2026',
    },
  ])

  const selectedTasks = ref([tasks.value[0]])

  const menu = useTemplateRef('menu')
  const menuItems = ref([
    { label: 'Bearbeiten', icon: 'pi pi-pencil' },
    { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
    { label: 'Löschen', icon: 'pi pi-trash' },
  ])

  const toggleMenu = (event: Event) => {
    menu.value?.toggle(event)
  }

  const getStatusSeverity = (status: string) => {
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
        return 'secondary'
    }
  }
</script>