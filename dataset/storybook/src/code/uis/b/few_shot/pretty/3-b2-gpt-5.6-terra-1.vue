<template>
  <main class="min-h-screen bg-white p-4">
    <div class="flex items-center gap-4">
      <Button
        icon="pi pi-arrow-circle-left"
        severity="secondary"
        variant="text"
        rounded
        aria-label="Zurück"
        class="!h-[50px] !w-[50px] !bg-surface-100"
      />
      <div class="flex h-[58px] flex-col gap-1">
        <h1 class="text-[32px] font-bold leading-tight">Projektaufgaben</h1>
        <p class="text-base">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</p>
      </div>
    </div>

    <Breadcrumb
      :home="breadcrumbHome"
      :model="breadcrumbItems"
      aria-label="Breadcrumb"
      class="ml-[66px] mt-3 w-fit"
    />

    <div class="ml-[66px] mt-4 flex items-start gap-4">
      <div class="flex w-[216px] flex-col gap-2">
        <label for="task-search" class="text-sm">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText
            id="task-search"
            v-model="search"
            placeholder="Suche..."
            class="w-full"
          />
        </IconField>
      </div>

      <div class="flex w-[216px] flex-col gap-2">
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
      class="ml-[66px] mt-4 w-[calc(100%-5.125rem)]"
      :pt="{
        table: 'border-collapse',
      }"
    >
      <Column selection-mode="multiple" header-style="width: 4.5rem" body-style="width: 4.5rem" />
      <Column field="task" header="Aufgabe" header-style="width: 32rem" body-style="width: 32rem" />
      <Column header="Verantwortlicher" header-style="width: 16rem" body-style="width: 16rem">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" />
            <span>{{ data.assignee }}</span>
          </div>
        </template>
      </Column>
      <Column header="Status" header-style="width: 16rem" body-style="width: 16rem">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <ProgressBar
              :value="data.progress"
              :show-value="false"
              class="h-1 flex-1"
            />
            <span class="w-9 text-xs">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column header="Status" header-style="width: 10rem" body-style="width: 10rem">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.severity" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig" header-style="width: 7.75rem" body-style="width: 7.75rem" />
      <Column header="Aktionen" header-style="width: 5.75rem" body-style="width: 5.75rem">
        <template #body="{ data }">
          <div class="flex justify-center">
            <Button
              icon="pi pi-ellipsis-h"
              severity="secondary"
              variant="text"
              aria-label="Aktionen anzeigen"
              @click="openActions($event, data)"
            />
          </div>
        </template>
      </Column>
    </DataTable>

    <Popover ref="actionsPopover" aria-label="Aufgabenaktionen">
      <div class="flex w-[177px] flex-col gap-2">
        <Button
          label="Bearbeiten"
          icon="pi pi-pen-to-square"
          severity="secondary"
          variant="outlined"
          class="w-full !justify-start"
          @click="actionsPopover?.hide()"
        />
        <Button
          label="Status aktualisieren"
          icon="pi pi-list-check"
          severity="secondary"
          variant="outlined"
          class="w-full !justify-start"
          @click="actionsPopover?.hide()"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          severity="secondary"
          variant="outlined"
          class="w-full !justify-start"
          @click="actionsPopover?.hide()"
        />
      </div>
    </Popover>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Avatar from 'primevue/avatar'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
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
  severity?: 'warn' | 'info' | 'danger'
  dueDate: string
}

const search = ref('')
const selectedStatus = ref<string | null>(null)
const selectedTasks = ref<Task[]>([])
const actionsPopover = ref()

const breadcrumbHome = ref({
  icon: 'pi pi-home',
})

const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' },
])

const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig'])

const tasks = ref<Task[]>([
  {
    id: 1,
    task: 'Webseite Relaunch',
    initials: 'M',
    assignee: 'Max Mustermann',
    progress: 100,
    status: 'Fertig',
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
  const searchTerm = search.value.toLocaleLowerCase()

  return tasks.value.filter((task) => {
    const matchesSearch =
      !searchTerm ||
      task.task.toLocaleLowerCase().includes(searchTerm) ||
      task.assignee.toLocaleLowerCase().includes(searchTerm)

    const matchesStatus = !selectedStatus.value || task.status === selectedStatus.value

    return matchesSearch && matchesStatus
  })
})

function openActions(event: Event, task: Task) {
  actionsPopover.value?.toggle(event)
}
</script>