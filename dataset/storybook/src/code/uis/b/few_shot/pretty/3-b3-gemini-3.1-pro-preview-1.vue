<template>
  <div class="flex min-h-screen flex-col gap-8 bg-white p-8">
    <Breadcrumb :home="home" :model="breadcrumbItems" class="w-fit" />

    <div class="flex items-center gap-4">
      <Button icon="pi pi-arrow-left" severity="secondary" rounded text class="!h-12 !w-12" />
      <div class="flex flex-col gap-1">
        <h1 class="m-0 text-3xl font-bold text-surface-900">Projektaufgaben</h1>
        <p class="m-0 text-base text-surface-600">
          Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.
        </p>
      </div>
    </div>

    <div class="flex gap-4">
      <div class="flex flex-col gap-2">
        <label class="text-sm text-surface-700">Suche</label>
        <IconField icon-position="left">
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

    <DataTable :value="tasks" v-model:selection="selectedTasks" data-key="id" class="w-full">
      <Column selection-mode="multiple" header-style="width: 3rem"></Column>
      <Column field="aufgabe" header="Aufgabe" class="font-medium"></Column>
      <Column field="verantwortlicher" header="Verantwortlicher">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.avatarLabel" shape="circle" class="bg-surface-200 text-surface-700" />
            <span>{{ data.verantwortlicher }}</span>
          </div>
        </template>
      </Column>
      <Column field="statusTag" header="Status">
        <template #body="{ data }">
          <Tag :value="data.statusTag" :severity="getSeverity(data.statusTag)" />
        </template>
      </Column>
      <Column field="progress" header="Status">
        <template #body="{ data }">
          <div class="flex w-48 items-center gap-3">
            <ProgressBar :value="data.progress" :show-value="false" class="flex-1 !h-1.5" />
            <span class="w-8 text-xs text-surface-600">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column field="faellig" header="Fällig"></Column>
      <Column header="Aktionen" header-style="width: 5rem" body-style="text-align: center">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            rounded
            @click="togglePopover($event, data)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex w-48 flex-col gap-2 p-1">
        <Button
          label="Bearbeiten"
          icon="pi pi-pen-to-square"
          severity="secondary"
          outlined
          class="w-full !justify-start"
        />
        <Button
          label="Status aktualisieren"
          icon="pi pi-list-check"
          severity="secondary"
          outlined
          class="w-full !justify-start"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          severity="secondary"
          outlined
          class="w-full !justify-start"
        />
      </div>
    </Popover>
  </div>
</template>

<script setup lang="ts">
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
  import Tag from 'primevue/tag'
  import ProgressBar from 'primevue/progressbar'
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
      verantwortlicher: 'Max Mustermann',
      avatarLabel: 'M',
      statusTag: 'Fertig',
      progress: 100,
      faellig: '03.06.2026',
    },
    {
      id: 2,
      aufgabe: 'Mobile App',
      verantwortlicher: 'Anna Schmidt',
      avatarLabel: 'A',
      statusTag: 'In Arbeit',
      progress: 45,
      faellig: '10.06.2026',
    },
    {
      id: 3,
      aufgabe: 'Marketing Kampagne',
      verantwortlicher: 'Lisa Weber',
      avatarLabel: 'L',
      statusTag: 'Offen',
      progress: 0,
      faellig: '18.05.2026',
    },
    {
      id: 4,
      aufgabe: 'API Migration',
      verantwortlicher: 'Paul Müller',
      avatarLabel: 'P',
      statusTag: 'Blockiert',
      progress: 72,
      faellig: '12.05.2026',
    },
  ])

  const getSeverity = (status: string) => {
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

  const op = ref()
  const togglePopover = (event: Event, data: any) => {
    op.value.toggle(event)
  }
</script>