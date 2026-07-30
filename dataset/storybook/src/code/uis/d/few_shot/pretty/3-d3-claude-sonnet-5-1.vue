<template>
  <div class="flex flex-col gap-6 p-8">
    <div class="flex items-center gap-4">
      <Button icon="pi pi-arrow-circle-left" severity="secondary" rounded text class="!w-[50px] !h-[50px]" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Projektaufgaben</h1>
        <p class="text-base">Hier werden alle Aufgaben des Projekts <b>Projekt 1</b> aufgelistet.</p>
      </div>
    </div>

    <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" />

    <div class="flex items-end gap-4">
      <div class="flex flex-col gap-2">
        <label for="search-input">Suche</label>
        <InputText v-model="search" input-id="search-input" placeholder="Suche..." class="w-[216px]" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="status-select">Status</label>
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

    <DataTable v-model:selection="selectedTasks" :value="tasks" data-key="name">
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
            <span class="text-sm">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig">
        <template #body="{ data }">
          <span :class="{ 'text-red-500': data.status === 'Blockiert' }">{{ data.dueDate }}</span>
        </template>
      </Column>
      <Column header="Aktionen">
        <template #body>
          <Button icon="pi pi-ellipsis-h" severity="secondary" text @click="toggleActionsMenu" />
        </template>
      </Column>
    </DataTable>

    <Popover ref="actionsMenu">
      <div class="flex flex-col gap-2 w-[177px]">
        <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined />
        <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" outlined />
        <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined />
      </div>
    </Popover>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import Button from 'primevue/button'
  import Breadcrumb from 'primevue/breadcrumb'
  import InputText from 'primevue/inputtext'
  import Select from 'primevue/select'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import Avatar from 'primevue/avatar'
  import ProgressBar from 'primevue/progressbar'
  import Tag from 'primevue/tag'
  import Popover from 'primevue/popover'

  const search = ref('')
  const statusFilter = ref(null)
  const statusOptions = ref([
    { label: 'Offen', value: 'Offen' },
    { label: 'In Arbeit', value: 'In Arbeit' },
    { label: 'Blockiert', value: 'Blockiert' },
    { label: 'Fertig', value: 'Fertig' },
  ])

  const breadcrumbHome = ref({ icon: 'pi pi-home', url: '#' })
  const breadcrumbItems = ref([{ label: 'Projekte' }, { label: 'Projekt 1' }, { label: 'Aufgaben' }])

  const tasks = ref([
    { name: 'Webseite Relaunch', assignee: 'Max Mustermann', progress: 100, status: 'Fertig', dueDate: '03.06.2026' },
    { name: 'Mobile App', assignee: 'Anna Schmidt', progress: 45, status: 'In Arbeit', dueDate: '10.06.2026' },
    { name: 'Marketing Kampagne', assignee: 'Lisa Weber', progress: 0, status: 'Offen', dueDate: '18.05.2026' },
    { name: 'API Migration', assignee: 'Paul Müller', progress: 72, status: 'Blockiert', dueDate: '12.05.2026' },
  ])

  const selectedTasks = ref([tasks.value[0]])

  const actionsMenu = ref()
  function toggleActionsMenu(event) {
    actionsMenu.value.toggle(event)
  }

  function getStatusSeverity(status) {
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