<template>
  <div class="flex min-h-screen flex-col gap-8 bg-white p-8">
    <Breadcrumb :home="home" :model="breadcrumbItems" class="!bg-transparent !p-0" />

    <div class="flex items-center gap-4">
      <Button
        icon="pi pi-arrow-left"
        rounded
        text
        severity="secondary"
        class="!h-12 !w-12 bg-surface-100"
      />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-surface-900">Projektaufgaben</h1>
        <p class="text-base text-surface-600">
          Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.
        </p>
      </div>
    </div>

    <div class="flex gap-4">
      <div class="flex flex-col gap-2">
        <label class="text-sm text-surface-700">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText v-model="searchQuery" placeholder="Suche..." class="w-56" />
        </IconField>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-surface-700">Status</label>
        <Select
          v-model="selectedStatus"
          :options="statusOptions"
          placeholder="Status auswählen"
          class="w-56"
        />
      </div>
    </div>

    <DataTable v-model:selection="selectedTasks" :value="tasks" dataKey="id" class="w-full">
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="aufgabe" header="Aufgabe"></Column>
      <Column field="verantwortlicher" header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar
              :label="data.verantwortlicher.initials"
              shape="circle"
              class="bg-surface-200 text-surface-700"
            />
            <span>{{ data.verantwortlicher.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="progress" header="Status">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <ProgressBar :value="data.progress" :showValue="false" class="w-32 !h-1.5" />
            <span class="text-xs text-surface-600">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status.label" :severity="data.status.severity" />
        </template>
      </Column>
      <Column field="faellig" header="Fällig"></Column>
      <Column header="Aktionen">
        <template #body="{ data, event }">
          <Button
            icon="pi pi-ellipsis-h"
            text
            rounded
            severity="secondary"
            @click="togglePopover($event, data)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex w-48 flex-col gap-2 p-2">
        <Button
          label="Bearbeiten"
          icon="pi pi-pen-to-square"
          text
          severity="secondary"
          class="!justify-start"
        />
        <Button
          label="Status aktualisieren"
          icon="pi pi-list-check"
          text
          severity="secondary"
          class="!justify-start"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          text
          severity="secondary"
          class="!justify-start"
        />
      </div>
    </Popover>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
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
  import Popover from 'primevue/popover'

  const home = ref({ icon: 'pi pi-home' })
  const breadcrumbItems = ref([{ label: 'Projekte' }, { label: 'Projekt 1' }, { label: 'Aufgaben' }])

  const searchQuery = ref('')
  const selectedStatus = ref(null)
  const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig'])

  const selectedTasks = ref([])
  const tasks = ref([
    {
      id: 1,
      aufgabe: 'Webseite Relaunch',
      verantwortlicher: { initials: 'M', name: 'Max Mustermann' },
      progress: 100,
      status: { label: 'Fertig', severity: 'success' },
      faellig: '03.06.2026',
    },
    {
      id: 2,
      aufgabe: 'Mobile App',
      verantwortlicher: { initials: 'A', name: 'Anna Schmidt' },
      progress: 45,
      status: { label: 'In Arbeit', severity: 'warn' },
      faellig: '10.06.2026',
    },
    {
      id: 3,
      aufgabe: 'Marketing Kampagne',
      verantwortlicher: { initials: 'L', name: 'Lisa Weber' },
      progress: 0,
      status: { label: 'Offen', severity: 'info' },
      faellig: '18.05.2026',
    },
    {
      id: 4,
      aufgabe: 'API Migration',
      verantwortlicher: { initials: 'P', name: 'Paul Müller' },
      progress: 72,
      status: { label: 'Blockiert', severity: 'danger' },
      faellig: '12.05.2026',
    },
  ])

  const op = ref()
  const togglePopover = (event, data) => {
    op.value.toggle(event)
  }
</script>