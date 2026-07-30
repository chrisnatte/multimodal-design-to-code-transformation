<template>
  <main class="min-h-screen bg-white p-4 text-sm">
    <section class="mx-auto max-w-[1824px]">
      <header class="flex items-center gap-4">
        <Button
          icon="pi pi-arrow-left"
          severity="secondary"
          rounded
          text
          aria-label="Zurück"
          class="!h-[50px] !w-[50px] !bg-slate-100"
        />
        <div class="flex flex-col">
          <h1 class="text-[32px] font-bold leading-[39px]">Projektaufgaben</h1>
          <p class="text-base leading-[19px]">
            Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.
          </p>
        </div>
      </header>

      <div class="ml-[66px] mt-3">
        <Breadcrumb :home="home" :model="breadcrumbItems" />
      </div>

      <section class="ml-[66px] mt-3 flex gap-4">
        <div class="flex w-[216px] flex-col gap-1.5">
          <label for="task-search">Suche</label>
          <IconField>
            <InputIcon class="pi pi-search" />
            <InputText
              id="task-search"
              v-model="search"
              placeholder="Suche..."
              class="!h-[33px] !w-full"
            />
          </IconField>
        </div>

        <div class="flex w-[216px] flex-col gap-1.5">
          <label for="status-filter">Status</label>
          <Select
            ref="statusSelect"
            v-model="selectedStatus"
            input-id="status-filter"
            :options="statusOptions"
            option-label="label"
            placeholder="Status auswählen"
            class="!h-[33px] !w-full"
          />
        </div>
      </section>

      <section class="ml-[66px] mt-4 max-w-[1472px]">
        <DataTable
          v-model:selection="selectedTasks"
          :value="filteredTasks"
          data-key="id"
          class="border border-slate-200"
          :pt="{
            table: 'text-sm',
            headerCell: 'h-[39px] !border-slate-200 !bg-white !px-3.5 !py-0 font-semibold',
            bodyCell: 'h-[50px] !border-slate-200 !px-3.5 !py-0',
          }"
        >
          <Column selection-mode="multiple" header-style="width: 72px" body-style="width: 72px" />
          <Column field="task" header="Aufgabe" header-style="width: 512px" body-style="width: 512px" />
          <Column header="Verantwortlicher" header-style="width: 256px" body-style="width: 256px">
            <template #body="{ data }">
              <div class="flex items-center gap-3">
                <Avatar :label="data.initial" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-sm" />
                <span>{{ data.assignee }}</span>
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
                <span class="w-8 text-xs">{{ data.progress }} %</span>
              </div>
            </template>
          </Column>
          <Column header="Status" header-style="width: 160px" body-style="width: 160px">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="statusSeverity(data.status)" />
            </template>
          </Column>
          <Column field="dueDate" header="Fällig" header-style="width: 124px" body-style="width: 124px" />
          <Column header="Aktionen" header-style="width: 92px" body-style="width: 92px">
            <template #body="{ data }">
              <div class="flex justify-center">
                <Button
                  :ref="data.id === 3 ? setActionButton : undefined"
                  icon="pi pi-ellipsis-h"
                  severity="secondary"
                  text
                  aria-label="Aktionen"
                  @click="openActions"
                />
              </div>
            </template>
          </Column>
        </DataTable>
      </section>
    </section>

    <Menu ref="actionMenu" :model="actionItems" popup class="w-[200px]">
      <template #item="{ item }">
        <Button
          :label="item.label"
          :icon="item.icon"
          severity="secondary"
          outlined
          class="!h-[33px] !w-[177px] !justify-start"
        />
      </template>
    </Menu>
  </main>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue'
import Avatar from 'primevue/avatar'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import Menu from 'primevue/menu'
import ProgressBar from 'primevue/progressbar'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

type Status = 'Offen' | 'In Arbeit' | 'Blockiert' | 'Fertig'

interface Task {
  id: number
  task: string
  initial: string
  assignee: string
  progress: number
  status: Status
  dueDate: string
}

const search = ref('')
const selectedStatus = ref<{ label: Status } | null>(null)
const selectedTasks = ref<Task[]>([])
const statusSelect = ref<InstanceType<typeof Select> | null>(null)
const actionMenu = ref<InstanceType<typeof Menu> | null>(null)
const actionButton = ref<HTMLElement | null>(null)

const home = { icon: 'pi pi-home' }
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' },
])

const statusOptions = ref<{ label: Status }[]>([
  { label: 'Offen' },
  { label: 'In Arbeit' },
  { label: 'Blockiert' },
  { label: 'Fertig' },
])

const tasks = ref<Task[]>([
  {
    id: 1,
    task: 'Webseite Relaunch',
    initial: 'M',
    assignee: 'Max Mustermann',
    progress: 100,
    status: 'Fertig',
    dueDate: '03.06.2026',
  },
  {
    id: 2,
    task: 'Mobile App',
    initial: 'A',
    assignee: 'Anna Schmidt',
    progress: 45,
    status: 'In Arbeit',
    dueDate: '10.06.2026',
  },
  {
    id: 3,
    task: 'Marketing Kampagne',
    initial: 'L',
    assignee: 'Lisa Weber',
    progress: 0,
    status: 'Offen',
    dueDate: '18.05.2026',
  },
  {
    id: 4,
    task: 'API Migration',
    initial: 'P',
    assignee: 'Paul Müller',
    progress: 72,
    status: 'Blockiert',
    dueDate: '12.05.2026',
  },
])

const actionItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
  { label: 'Löschen', icon: 'pi pi-trash' },
])

const filteredTasks = computed(() => {
  const query = search.value.toLocaleLowerCase()
  const status = selectedStatus.value?.label

  return tasks.value.filter(
    (task) =>
      (!query ||
        task.task.toLocaleLowerCase().includes(query) ||
        task.assignee.toLocaleLowerCase().includes(query)) &&
      (!status || task.status === status),
  )
})

function setActionButton(element: unknown) {
  actionButton.value = element instanceof HTMLElement ? element : null
}

function openActions(event: Event) {
  actionMenu.value?.toggle(event)
}

function statusSeverity(status: Status) {
  if (status === 'Fertig') return 'success'
  if (status === 'In Arbeit') return 'warn'
  if (status === 'Blockiert') return 'danger'
  return 'info'
}

onMounted(async () => {
  await nextTick()
  statusSelect.value?.show()
  if (actionButton.value) {
    actionMenu.value?.show({ currentTarget: actionButton.value } as Event)
  }
})
</script>