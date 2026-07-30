<template>
  <main class="min-h-screen bg-white p-4">
    <div class="flex items-center gap-4">
      <Button
        icon="pi pi-arrow-circle-left"
        severity="secondary"
        rounded
        aria-label="Zurück"
        class="!h-[50px] !w-[50px]"
      />
      <div class="flex flex-col gap-1">
        <h1 class="text-[32px] font-bold leading-tight">Projektaufgaben</h1>
        <span class="text-base">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</span>
      </div>
    </div>

    <div class="ml-[66px] mt-3 flex max-w-[1472px] flex-col gap-4">
      <Breadcrumb :home="home" :model="breadcrumbItems" class="w-fit" />

      <div class="relative flex items-start gap-4">
        <div class="flex w-[216px] flex-col gap-2">
          <label for="search" class="text-sm">Suche</label>
          <InputText
            id="search"
            v-model="search"
            placeholder="Suche..."
            class="w-full"
          />
        </div>

        <div class="relative z-10 flex w-[216px] flex-col gap-2">
          <label for="status" class="text-sm">Status</label>
          <Select
            id="status"
            v-model="statusFilter"
            :options="statusOptions"
            placeholder="Status auswählen"
            class="w-full"
          />
          <Listbox
            v-model="statusFilter"
            :options="statusOptions"
            class="absolute top-[61px] w-full"
          />
        </div>
      </div>

      <div class="relative mt-14">
        <DataTable
          :value="filteredTasks"
          data-key="id"
          class="w-full"
          :pt="{
            table: 'min-w-[1472px]',
            headerCell: '!px-3.5 !py-2.5 text-sm font-semibold',
            bodyCell: '!px-3.5 !py-2.5',
          }"
        >
          <Column header-class="w-[72px]" body-class="w-[72px]">
            <template #header>
              <Checkbox v-model="selectAll" binary aria-label="Alle Aufgaben auswählen" />
            </template>
            <template #body="{ data }">
              <Checkbox v-model="data.selected" binary :aria-label="`${data.task} auswählen`" />
            </template>
          </Column>

          <Column field="task" header="Aufgabe" header-class="w-[512px]" body-class="w-[512px]" />

          <Column header="Verantwortlicher" header-class="w-[256px]" body-class="w-[256px]">
            <template #body="{ data }">
              <div class="flex items-center gap-3">
                <Avatar :label="data.initials" shape="circle" />
                <span>{{ data.assignee }}</span>
              </div>
            </template>
          </Column>

          <Column header="Status" header-class="w-[256px]" body-class="w-[256px]">
            <template #body="{ data }">
              <div class="flex items-center gap-3">
                <ProgressBar
                  :value="data.progress"
                  :show-value="false"
                  class="h-1 flex-1"
                />
                <span class="w-[34px] text-xs">{{ data.progress }} %</span>
              </div>
            </template>
          </Column>

          <Column header="Status" header-class="w-[160px]" body-class="w-[160px]">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
            </template>
          </Column>

          <Column field="dueDate" header="Fällig" header-class="w-[124px]" body-class="w-[124px]" />

          <Column header="Aktionen" header-class="w-[92px]" body-class="w-[92px]">
            <template #body="{ data }">
              <div class="flex justify-center">
                <Button
                  icon="pi pi-ellipsis-h"
                  severity="secondary"
                  text
                  aria-label="Aktionen"
                  :class="{ '!bg-surface-100': data.id === 2 }"
                  @click="activeTask = data"
                />
              </div>
            </template>
          </Column>
        </DataTable>

        <div
          class="absolute right-[-137px] top-[136px] z-20 flex w-[200px] flex-col gap-2 rounded-md border border-surface-200 bg-white p-2.5"
        >
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
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Avatar from 'primevue/avatar'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
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
  dueDate: string
  selected: boolean
}

const search = ref('')
const statusFilter = ref<string | null>(null)
const selectAll = ref(false)
const activeTask = ref<Task | null>(null)

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
    selected: true,
  },
  {
    id: 2,
    task: 'Mobile App',
    initials: 'A',
    assignee: 'Anna Schmidt',
    progress: 45,
    status: 'In Arbeit',
    dueDate: '10.06.2026',
    selected: false,
  },
  {
    id: 3,
    task: 'Marketing Kampagne',
    initials: 'L',
    assignee: 'Lisa Weber',
    progress: 0,
    status: 'Offen',
    dueDate: '18.05.2026',
    selected: false,
  },
  {
    id: 4,
    task: 'API Migration',
    initials: 'P',
    assignee: 'Paul Müller',
    progress: 72,
    status: 'Blockiert',
    dueDate: '12.05.2026',
    selected: false,
  },
])

const home = ref({
  icon: 'pi pi-home',
})

const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' },
])

const filteredTasks = computed(() =>
  tasks.value.filter((task) => {
    const matchesSearch = task.task.toLowerCase().includes(search.value.toLowerCase())
    const matchesStatus = !statusFilter.value || task.status === statusFilter.value

    return matchesSearch && matchesStatus
  }),
)

function getStatusSeverity(status: string) {
  if (status === 'Fertig') return 'success'
  if (status === 'In Arbeit') return 'warn'
  if (status === 'Blockiert') return 'danger'
  return 'info'
}
</script>