<template>
  <main class="min-h-screen bg-white p-4">
    <header class="flex items-center gap-4">
      <Button
        icon="pi pi-arrow-circle-left"
        severity="secondary"
        text
        rounded
        aria-label="Zurück"
        class="!h-[50px] !w-[50px] !bg-slate-100"
      />
      <div class="flex h-[58px] flex-col gap-1">
        <h1 class="text-[32px] font-bold leading-[39px]">Projektaufgaben</h1>
        <p class="text-base">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</p>
      </div>
    </header>

    <section class="ml-[66px] mt-3 flex max-w-[1472px] flex-col gap-4">
      <Breadcrumb :home="home" :model="breadcrumbItems" class="w-fit">
        <template #separator>
          <i class="pi pi-chevron-right text-xs" />
        </template>
      </Breadcrumb>

      <div class="flex gap-4">
        <div class="flex w-[216px] flex-col gap-1">
          <label for="task-search" class="text-sm">Suche</label>
          <div class="relative">
            <i class="pi pi-search absolute top-1/2 left-3 z-10 -translate-y-1/2 text-sm" />
            <InputText
              id="task-search"
              v-model="searchQuery"
              placeholder="Suche..."
              class="w-full !pl-9"
            />
          </div>
        </div>

        <div class="flex w-[216px] flex-col gap-1">
          <label for="status-filter" class="text-sm">Status</label>
          <Select
            id="status-filter"
            v-model="selectedStatus"
            :options="statusOptions"
            placeholder="Status auswählen"
            class="w-full"
          />
        </div>
      </div>

      <DataTable
        v-model:selection="selectedTasks"
        :value="filteredTasks"
        data-key="id"
        table-style="min-width: 92rem"
        class="w-full"
      >
        <Column selection-mode="multiple" header-style="width: 72px" body-style="width: 72px" />
        <Column field="task" header="Aufgabe" header-style="width: 512px" />
        <Column header="Verantwortlicher" header-style="width: 256px">
          <template #body="{ data }">
            <div class="flex items-center gap-3">
              <Avatar :label="data.initials" shape="circle" />
              <span>{{ data.assignee }}</span>
            </div>
          </template>
        </Column>
        <Column header="Status" header-style="width: 256px">
          <template #body="{ data }">
            <div class="flex items-center gap-3">
              <ProgressBar :value="data.progress" :show-value="false" class="h-[6px] flex-1" />
              <span class="w-[34px] text-xs">{{ data.progress }} %</span>
            </div>
          </template>
        </Column>
        <Column header="Status" header-style="width: 160px">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="data.severity" />
          </template>
        </Column>
        <Column field="dueDate" header="Fällig" header-style="width: 124px" />
        <Column header="Aktionen" header-style="width: 92px" body-style="width: 92px">
          <template #body="{ data }">
            <div class="flex justify-center">
              <Button
                icon="pi pi-ellipsis-h"
                severity="secondary"
                text
                aria-label="Aktionen"
                @click="toggleActions($event, data)"
              />
            </div>
          </template>
        </Column>
      </DataTable>
    </section>

    <Popover ref="actionsPopover">
      <div class="flex w-[177px] flex-col gap-2">
        <Button
          label="Bearbeiten"
          icon="pi pi-pen-to-square"
          severity="secondary"
          outlined
          fluid
          class="!justify-start"
        />
        <Button
          label="Status aktualisieren"
          icon="pi pi-list-check"
          severity="secondary"
          outlined
          fluid
          class="!justify-start"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          severity="secondary"
          outlined
          fluid
          class="!justify-start"
        />
      </div>
    </Popover>
  </main>
</template>

<script setup lang="ts">
import { computed, ref, useTemplateRef } from 'vue'
import Avatar from 'primevue/avatar'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import InputText from 'primevue/inputtext'
import Popover from 'primevue/popover'
import ProgressBar from 'primevue/progressbar'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

type Task = {
  id: number
  task: string
  initials: string
  assignee: string
  progress: number
  status: string
  severity: 'success' | 'warn' | 'info' | 'danger'
  dueDate: string
}

const searchQuery = ref('')
const selectedStatus = ref<string | null>(null)
const selectedTasks = ref<Task[]>([])
const activeTask = ref<Task | null>(null)
const actionsPopover = useTemplateRef('actionsPopover')

const home = { icon: 'pi pi-home' }
const breadcrumbItems = [
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' },
]

const statusOptions = ['Offen', 'In Arbeit', 'Blockiert', 'Fertig']

const tasks = ref<Task[]>([
  {
    id: 1,
    task: 'Webseite Relaunch',
    initials: 'M',
    assignee: 'Max Mustermann',
    progress: 100,
    status: 'Fertig',
    severity: 'success',
    dueDate: '03.06.2026',
  },
  {
    id: 2,
    task: 'Mobile App',
    initials: 'A',
    assignee: 'Anna Schmidt',
    progress: 45,
    status: 'In Arbeit',
    severity: 'warn',
    dueDate: '10.06.2026',
  },
  {
    id: 3,
    task: 'Marketing Kampagne',
    initials: 'L',
    assignee: 'Lisa Weber',
    progress: 0,
    status: 'Offen',
    severity: 'info',
    dueDate: '18.05.2026',
  },
  {
    id: 4,
    task: 'API Migration',
    initials: 'P',
    assignee: 'Paul Müller',
    progress: 72,
    status: 'Blockiert',
    severity: 'danger',
    dueDate: '12.05.2026',
  },
])

const filteredTasks = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return tasks.value.filter((task) => {
    const matchesSearch =
      !query ||
      task.task.toLowerCase().includes(query) ||
      task.assignee.toLowerCase().includes(query)
    const matchesStatus = !selectedStatus.value || task.status === selectedStatus.value

    return matchesSearch && matchesStatus
  })
})

function toggleActions(event: Event, task: Task) {
  activeTask.value = task
  actionsPopover.value?.toggle(event)
}
</script>