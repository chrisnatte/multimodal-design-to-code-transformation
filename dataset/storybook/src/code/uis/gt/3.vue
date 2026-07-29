<template>
  <div class="flex flex-col gap-4 px-8 py-4">
    <div class="flex items-center gap-4">
      <Button icon="pi pi-arrow-circle-left" rounded severity="secondary" size="large" />

      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-(--p-text-color)">Projektaufgaben</h1>
        <p class="text-(--p-surface-500)">
          Hier werden alle Aufgaben des Projekts
          <span class="font-semibold">Projekt 1</span> aufgelistet.
        </p>
      </div>
    </div>

    <section class="ml-14 flex flex-col gap-6">
      <Breadcrumb
        :model="breadcrumbItems"
        :home="breadcrumbHome"
        class="!border-none !bg-transparent !p-0"
      />

      <div class="flex gap-6">
        <div class="flex flex-col gap-2">
          <label for="search" class="text-sm text-(--p-surface-700)">Suche</label>
          <IconField>
            <InputIcon class="pi pi-search" />
            <InputText id="search" v-model="search" placeholder="Suche..." class="w-64" />
          </IconField>
        </div>

        <div class="flex flex-col gap-2">
          <label for="status-filter" class="text-sm text-(--p-surface-700)">Status</label>
          <Select
            id="status-filter"
            v-model="statusFilter"
            :options="statusOptions"
            placeholder="Status auswählen"
            show-clear
            class="w-56"
          />
        </div>
      </div>

      <DataTable v-model:selection="selectedTasks" :value="tasks" data-key="id">
        <Column selection-mode="multiple" header-style="width: 3rem" />
        <Column field="title" header="Aufgabe" />
        <Column field="assignee" header="Verantwortlicher">
          <template #body="{ data }">
            <div class="flex items-center gap-2">
              <Avatar :label="data.assignee[0]" shape="circle" size="normal" />
              <span>{{ data.assignee }}</span>
            </div>
          </template>
        </Column>
        <Column field="progress" header="Status">
          <template #body="{ data }">
            <div class="flex items-center gap-3">
              <ProgressBar :value="data.progress" :show-value="false" class="!h-2 w-40" />
              <span class="text-surface-600 text-sm">{{ data.progress }} %</span>
            </div>
          </template>
        </Column>
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="statusSeverity(data.status)" />
          </template>
        </Column>
        <Column field="dueDate" header="Fällig">
          <template #body="{ data }">
            <span :class="data.status === 'Blockiert' ? 'text-red-500' : 'text-surface-700'">
              {{ data.dueDate }}
            </span>
          </template>
        </Column>
        <Column header="Aktionen" header-style="width: 4rem">
          <template #body="{ data }">
            <Button
              icon="pi pi-ellipsis-h"
              text
              severity="secondary"
              aria-haspopup="true"
              aria-controls="task-actions-menu"
              @click="openTaskActions($event, data)"
            />
          </template>
        </Column>
      </DataTable>
    </section>

    <Menu
      ref="task-actions-menu"
      id="task-actions-menu"
      :model="taskActionItems"
      popup
      :pt="{ list: 'flex flex-col !gap-2 !p-2.5' }"
    >
      <template #item="{ item }">
        <Button
          :label="item.label"
          :icon="item.icon"
          outlined
          severity="secondary"
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

  const breadcrumbHome = { icon: 'pi pi-home', url: '/' }
  const breadcrumbItems = [{ label: 'Projekte' }, { label: 'Projekt 1' }, { label: 'Aufgaben' }]

  const search = ref('')
  const statusFilter = ref()
  const statusOptions = ['Offen', 'In Arbeit', 'Blockiert', 'Fertig']

  const tasks = ref([
    {
      id: 1,
      title: 'Webseite Relaunch',
      assignee: 'Max Mustermann',
      progress: 100,
      status: 'Fertig',
      dueDate: '03.06.2026',
    },
    {
      id: 2,
      title: 'Mobile App',
      assignee: 'Anna Schmidt',
      progress: 45,
      status: 'In Arbeit',
      dueDate: '10.06.2026',
    },
    {
      id: 3,
      title: 'Marketing Kampagne',
      assignee: 'Lisa Weber',
      progress: 0,
      status: 'Offen',
      dueDate: '18.05.2026',
    },
    {
      id: 4,
      title: 'API Migration',
      assignee: 'Paul Müller',
      progress: 72,
      status: 'Blockiert',
      dueDate: '12.05.2026',
    },
  ])

  const selectedTasks = ref([tasks.value[0]])

  function statusSeverity(status: string) {
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

  const taskActionsMenu = useTemplateRef('task-actions-menu')
  const taskActionItems = ref([
    { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Status aktualisieren', icon: 'pi pi-list' },
    { label: 'Löschen', icon: 'pi pi-trash' },
  ])

  function openTaskActions(event: Event, row: unknown) {
    taskActionsMenu.value?.toggle(event)
  }
</script>
