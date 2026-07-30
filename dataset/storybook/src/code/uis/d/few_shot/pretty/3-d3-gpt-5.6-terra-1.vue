<template>
  <main class="min-h-screen bg-white p-4 text-sm text-slate-700">
    <header class="flex items-center gap-4">
      <Button
        icon="pi pi-arrow-circle-left"
        severity="secondary"
        text
        rounded
        size="large"
        aria-label="Zurück"
        class="!h-[50px] !w-[50px] !bg-slate-100"
      />
      <div class="flex flex-col gap-1">
        <h1 class="text-[32px] font-bold leading-10 text-slate-700">Projektaufgaben</h1>
        <p class="text-base text-slate-500">
          Hier werden alle Aufgaben des Projekts <strong>Projekt 1</strong> aufgelistet.
        </p>
      </div>
    </header>

    <Breadcrumb :home="home" :model="breadcrumbItems" class="ml-16 mt-3 !border-0 !bg-transparent !p-3.5">
      <template #separator>
        <i class="pi pi-chevron-right text-xs text-slate-400" />
      </template>
    </Breadcrumb>

    <section class="mx-16 mt-2 flex gap-4">
      <div class="flex w-[216px] flex-col gap-2">
        <label for="task-search">Suche</label>
        <div class="relative">
          <i class="pi pi-search absolute left-3 top-1/2 z-10 -translate-y-1/2 text-sm text-slate-400" />
          <InputText
            id="task-search"
            v-model="search"
            placeholder="Suche..."
            class="w-full !py-1.5 !pl-9 text-sm"
          />
        </div>
      </div>

      <div class="flex w-[216px] flex-col gap-2">
        <label for="status-filter">Status</label>
        <Select
          ref="statusSelect"
          v-model="selectedStatus"
          input-id="status-filter"
          :options="statusOptions"
          placeholder="Status auswählen"
          class="w-full"
        />
      </div>
    </section>

    <section class="mx-16 mt-4">
      <DataTable
        v-model:selection="selectedTasks"
        :value="filteredTasks"
        data-key="id"
        table-style="min-width: 92rem"
        :pt="{
          table: 'text-sm',
          headerCell: '!border-x-0 !border-t-0 !px-3.5 !py-2.5',
          bodyCell: '!border-x-0 !px-3.5 !py-2.5',
        }"
      >
        <Column selection-mode="multiple" header-style="width: 72px" body-style="width: 72px" />
        <Column field="task" header="Aufgabe" header-style="width: 512px" body-style="width: 512px" />
        <Column header="Verantwortlicher" header-style="width: 256px" body-style="width: 256px">
          <template #body="{ data }">
            <div class="flex items-center gap-3">
              <Avatar :label="data.initials" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-sm" />
              <span>{{ data.owner }}</span>
            </div>
          </template>
        </Column>
        <Column header="Status" header-style="width: 256px" body-style="width: 256px">
          <template #body="{ data }">
            <div class="flex items-center gap-3">
              <ProgressBar
                :value="data.progress"
                :show-value="false"
                class="w-[182px] !h-1.5"
              />
              <span class="w-[34px] text-xs">{{ data.progress }} %</span>
            </div>
          </template>
        </Column>
        <Column header="Status" header-style="width: 160px" body-style="width: 160px">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="statusSeverity(data.status)" class="!text-xs" />
          </template>
        </Column>
        <Column field="dueDate" header="Fällig" header-style="width: 124px" body-style="width: 124px">
          <template #body="{ data }">
            <span :class="{ 'text-red-500': data.status === 'Blockiert' }">{{ data.dueDate }}</span>
          </template>
        </Column>
        <Column header="Aktionen" header-style="width: 92px" body-style="width: 92px">
          <template #body="{ data }">
            <div class="flex justify-center">
              <Button
                :ref="data.id === 2 ? 'actionTrigger' : undefined"
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

    <Popover ref="actionPopover" :dismissable="false" :pt="{ content: '!p-2.5' }">
      <div class="flex w-[177px] flex-col gap-2">
        <Button
          label="Bearbeiten"
          icon="pi pi-pen-to-square"
          severity="secondary"
          variant="outlined"
          size="small"
          fluid
          class="!justify-start"
        />
        <Button
          label="Status aktualisieren"
          icon="pi pi-list-check"
          severity="secondary"
          variant="outlined"
          size="small"
          fluid
          class="!justify-start"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          severity="secondary"
          variant="outlined"
          size="small"
          fluid
          class="!justify-start"
        />
      </div>
    </Popover>
  </main>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue'
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
  owner: string
  progress: number
  status: string
  dueDate: string
}

const search = ref('')
const selectedStatus = ref<string | null>(null)
const selectedTasks = ref<Task[]>([])
const statusSelect = ref()
const actionPopover = ref()
const actionTrigger = ref<HTMLElement | null>(null)

const home = ref({ icon: 'pi pi-home' })
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
    owner: 'Max Mustermann',
    progress: 100,
    status: 'Fertig',
    dueDate: '03.06.2026',
  },
  {
    id: 2,
    task: 'Mobile App',
    initials: 'A',
    owner: 'Anna Schmidt',
    progress: 45,
    status: 'In Arbeit',
    dueDate: '10.06.2026',
  },
  {
    id: 3,
    task: 'Marketing Kampagne',
    initials: 'L',
    owner: 'Lisa Weber',
    progress: 0,
    status: 'Offen',
    dueDate: '18.05.2026',
  },
  {
    id: 4,
    task: 'API Migration',
    initials: 'P',
    owner: 'Paul Müller',
    progress: 72,
    status: 'Blockiert',
    dueDate: '12.05.2026',
  },
])

const filteredTasks = computed(() =>
  tasks.value.filter((task) => {
    const matchesSearch = task.task.toLowerCase().includes(search.value.toLowerCase())
    const matchesStatus = !selectedStatus.value || task.status === selectedStatus.value
    return matchesSearch && matchesStatus
  }),
)

function statusSeverity(status: string) {
  if (status === 'Fertig') return 'success'
  if (status === 'In Arbeit') return 'warn'
  if (status === 'Blockiert') return 'danger'
  return 'info'
}

function toggleActions(event: Event, task: Task) {
  actionPopover.value?.toggle(event)
}

onMounted(async () => {
  await nextTick()
  statusSelect.value?.show()
  if (actionTrigger.value) {
    actionPopover.value?.show({ currentTarget: actionTrigger.value })
  }
})
</script>