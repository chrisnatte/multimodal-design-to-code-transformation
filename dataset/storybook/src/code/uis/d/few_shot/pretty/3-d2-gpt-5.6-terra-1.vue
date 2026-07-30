<template>
  <main class="min-h-screen bg-white p-4 text-slate-700">
    <header class="flex items-center gap-4">
      <Button
        icon="pi pi-arrow-circle-left"
        severity="secondary"
        rounded
        variant="text"
        aria-label="Zurück"
        class="!h-[50px] !w-[50px] !bg-slate-100"
      />
      <div class="flex flex-col gap-1">
        <h1 class="text-[32px] font-bold leading-none text-slate-700">Projektaufgaben</h1>
        <p class="text-base text-slate-500">
          Hier werden alle Aufgaben des Projekts <strong>Projekt 1</strong> aufgelistet.
        </p>
      </div>
    </header>

    <div class="ml-16 mt-2 flex max-w-[1472px] flex-col gap-4">
      <Breadcrumb :home="home" :model="breadcrumbItems" class="w-fit !border-0 !bg-transparent !p-0" />

      <div class="flex gap-4">
        <div class="flex w-[216px] flex-col gap-2">
          <label for="search">Suche</label>
          <IconField>
            <InputIcon class="pi pi-search" />
            <InputText id="search" v-model="search" placeholder="Suche..." class="w-full" />
          </IconField>
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
      </div>

      <DataTable
        v-model:selection="selectedTasks"
        :value="tasks"
        data-key="id"
        class="w-full text-sm"
        :pt="{
          table: 'min-w-[1472px]',
          headerCell: '!bg-white !px-3.5 !py-2.5 !text-slate-700',
          bodyCell: '!border-x-0 !px-3.5 !py-2.5',
        }"
      >
        <Column selection-mode="multiple" header-style="width: 72px" body-style="width: 72px" />
        <Column field="task" header="Aufgabe" header-style="width: 512px" body-style="width: 512px" />
        <Column header="Verantwortlicher" header-style="width: 256px" body-style="width: 256px">
          <template #body="{ data }">
            <div class="flex items-center gap-3">
              <Avatar :label="data.initials" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600" />
              <span>{{ data.assignee }}</span>
            </div>
          </template>
        </Column>
        <Column header="Status" header-style="width: 256px" body-style="width: 256px">
          <template #body="{ data }">
            <div class="flex items-center gap-3">
              <ProgressBar :value="data.progress" :show-value="false" class="!h-1.5 flex-1" />
              <span class="w-9 text-xs">{{ data.progress }} %</span>
            </div>
          </template>
        </Column>
        <Column header="Status" header-style="width: 160px" body-style="width: 160px">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="data.severity" />
          </template>
        </Column>
        <Column field="dueDate" header="Fällig" header-style="width: 124px" body-style="width: 124px">
          <template #body="{ data }">
            <span :class="{ 'text-red-500': data.overdue }">{{ data.dueDate }}</span>
          </template>
        </Column>
        <Column header="Aktionen" header-style="width: 92px" body-style="width: 92px">
          <template #body="{ data }">
            <div class="flex justify-center">
              <Button
                :id="`task-actions-${data.id}`"
                icon="pi pi-ellipsis-h"
                variant="text"
                severity="secondary"
                :class="{ '!bg-slate-100': data.id === 2 }"
                :aria-label="`Aktionen für ${data.task}`"
                @click="toggleActions($event, data)"
              />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>

    <Popover ref="actionsPopover" aria-label="Aufgabenaktionen">
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

<script setup>
import { nextTick, onMounted, ref } from 'vue'
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

const search = ref('')
const selectedStatus = ref(null)
const selectedTasks = ref([])
const selectedTask = ref(null)
const statusSelect = ref()
const actionsPopover = ref()

const home = ref({ icon: 'pi pi-home' })
const breadcrumbItems = ref([{ label: 'Projekte' }, { label: 'Projekt 1' }, { label: 'Aufgaben' }])
const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig'])

const tasks = ref([
  {
    id: 1,
    task: 'Webseite Relaunch',
    initials: 'M',
    assignee: 'Max Mustermann',
    progress: 100,
    status: 'Fertig',
    severity: 'success',
    dueDate: '03.06.2026',
    overdue: false,
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
    overdue: false,
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
    overdue: false,
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
    overdue: true,
  },
])

function toggleActions(event, task) {
  selectedTask.value = task
  actionsPopover.value?.toggle(event)
}

onMounted(async () => {
  selectedTasks.value = [tasks.value[0]]
  await nextTick()
  statusSelect.value?.show()
  const target = document.getElementById('task-actions-3')
  if (target) {
    actionsPopover.value?.show({ currentTarget: target })
  }
})
</script>