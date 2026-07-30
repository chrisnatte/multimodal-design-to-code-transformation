<template>
  <div class="flex min-h-screen flex-col gap-8 bg-white p-8">
    <!-- Breadcrumb -->
    <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" class="w-fit !p-0" />

    <!-- Header -->
    <div class="flex items-center gap-4">
      <Button
        icon="pi pi-arrow-left"
        rounded
        text
        severity="secondary"
        class="!h-12 !w-12 !bg-slate-100"
      />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-slate-900">Projektaufgaben</h1>
        <p class="text-base text-slate-600">
          Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.
        </p>
      </div>
    </div>

    <!-- Filters -->
    <div class="flex items-center gap-4">
      <div class="flex flex-col gap-2">
        <label class="text-sm text-slate-700">Suche</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-search" />
          <InputText v-model="searchQuery" placeholder="Suche..." class="w-56" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-slate-700">Status</label>
        <Select
          v-model="selectedStatus"
          :options="statusOptions"
          placeholder="Status auswählen"
          class="w-56"
        />
      </div>
    </div>

    <!-- DataTable -->
    <DataTable
      v-model:selection="selectedTasks"
      :value="tasks"
      dataKey="id"
      class="w-full"
      :pt="{
        table: 'min-w-full',
        thead: 'border-b border-slate-200',
      }"
    >
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="aufgabe" header="Aufgabe" class="font-medium"></Column>
      <Column field="verantwortlicher" header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar
              :label="data.verantwortlicher.avatar"
              shape="circle"
              class="!bg-slate-200 !text-slate-700"
            />
            <span>{{ data.verantwortlicher.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="progress" header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <ProgressBar
              :value="data.progress"
              :showValue="false"
              class="!h-1.5 w-full max-w-[182px]"
            />
            <span class="text-xs text-slate-600">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
        </template>
      </Column>
      <Column field="faellig" header="Fällig"></Column>
      <Column header="Aktionen" bodyStyle="text-align: center">
        <template #body>
          <Button
            icon="pi pi-ellipsis-h"
            text
            rounded
            severity="secondary"
            @click="toggleMenu"
            aria-haspopup="true"
            aria-controls="overlay_menu"
          />
        </template>
      </Column>
    </DataTable>

    <!-- Actions Menu -->
    <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" />
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import Breadcrumb from 'primevue/breadcrumb'
  import Button from 'primevue/button'
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

  const breadcrumbHome = ref({ icon: 'pi pi-home' })
  const breadcrumbItems = ref([{ label: 'Projekte' }, { label: 'Projekt 1' }, { label: 'Aufgaben' }])

  const searchQuery = ref('')
  const selectedStatus = ref(null)
  const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig'])

  const selectedTasks = ref([])
  const tasks = ref([
    {
      id: 1,
      aufgabe: 'Webseite Relaunch',
      verantwortlicher: { name: 'Max Mustermann', avatar: 'M' },
      progress: 100,
      status: 'Fertig',
      faellig: '03.06.2026',
    },
    {
      id: 2,
      aufgabe: 'Mobile App',
      verantwortlicher: { name: 'Anna Schmidt', avatar: 'A' },
      progress: 45,
      status: 'In Arbeit',
      faellig: '10.06.2026',
    },
    {
      id: 3,
      aufgabe: 'Marketing Kampagne',
      verantwortlicher: { name: 'Lisa Weber', avatar: 'L' },
      progress: 0,
      status: 'Offen',
      faellig: '18.05.2026',
    },
    {
      id: 4,
      aufgabe: 'API Migration',
      verantwortlicher: { name: 'Paul Müller', avatar: 'P' },
      progress: 72,
      status: 'Blockiert',
      faellig: '12.05.2026',
    },
  ])

  const menu = useTemplateRef('menu')
  const menuItems = ref([
    { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
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
        return 'info'
    }
  }
</script>