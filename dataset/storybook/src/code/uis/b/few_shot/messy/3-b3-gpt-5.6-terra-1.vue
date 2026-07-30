<template>
  <main class="min-h-screen bg-white p-4">
    <section class="mx-auto max-w-[1552px]">
      <header class="flex items-center gap-4">
        <Button icon="pi pi-arrow-left" severity="secondary" rounded text aria-label="Zurück" />
        <div class="flex flex-col gap-1">
          <h1 class="text-[32px] font-bold leading-tight">Projektaufgaben</h1>
          <p class="text-base">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</p>
        </div>
      </header>

      <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" class="mt-3 !border-0 !bg-transparent !p-0" />

      <div class="mt-4 flex gap-4">
        <div class="flex w-[216px] flex-col gap-1">
          <label for="task-search" class="text-sm">Suche</label>
          <InputText
            id="task-search"
            v-model="search"
            placeholder="Suche..."
            class="w-full"
          />
        </div>

        <div class="relative flex w-[216px] flex-col gap-1">
          <label for="status-filter" class="text-sm">Status</label>
          <Select
            id="status-filter"
            v-model="selectedStatus"
            :options="statusOptions"
            option-label="label"
            placeholder="Status auswählen"
            class="w-full"
          />
          <Listbox
            v-model="selectedStatus"
            :options="statusOptions"
            option-label="label"
            class="absolute top-[63px] z-10 w-full"
          />
        </div>
      </div>

      <div class="mt-4">
        <DataTable
          v-model:selection="selectedTasks"
          :value="filteredTasks"
          data-key="id"
          class="w-full"
          :pt="{
            table: 'min-w-[1472px]',
            headerCell: '!border-[#e2e8f0] !bg-white !px-3.5 !py-2.5 text-sm font-semibold',
            bodyCell: '!h-[50px] !border-[#e2e8f0] !px-3.5 !py-2.5 text-sm',
          }"
        >
          <Column selection-mode="multiple" header-style="width: 72px" body-style="width: 72px" />
          <Column field="task" header="Aufgabe" header-style="width: 512px" body-style="width: 512px" />
          <Column header="Verantwortlicher" header-style="width: 256px" body-style="width: 256px">
            <template #body="{ data }">
              <div class="flex items-center gap-3">
                <Avatar :label="data.initials" shape="circle" class="!h-7 !w-7 !bg-slate-200" />
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
                <span class="text-xs">{{ data.progress }} %</span>
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
            <template #body>
              <Button icon="pi pi-ellipsis-h" severity="secondary" text aria-label="Aktionen" />
            </template>
          </Column>
        </DataTable>
      </div>

      <Menu
        :model="actionItems"
        class="relative ml-auto mt-[-104px] w-[200px]"
        :pt="{
          root: '!rounded-md !border-[#e2e8f0] !bg-white !p-2.5',
          list: 'flex flex-col gap-2',
          itemContent: '!rounded-md',
          itemLink: '!border !border-[#e2e8f0] !px-3 !py-2',
        }"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Avatar from 'primevue/avatar'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Menu from 'primevue/menu'
import ProgressBar from 'primevue/progressbar'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const search = ref('')
const selectedStatus = ref<{ label: string; value: string } | null>(null)
const selectedTasks = ref([
  {
    id: 1,
    task: 'Webseite Relaunch',
    assignee: 'Max Mustermann',
    initials: 'M',
    progress: 100,
    status: 'Fertig',
    dueDate: '03.06.2026',
  },
])

const statusOptions = ref([
  { label: 'Offen', value: 'Offen' },
  { label: 'In Arbeit', value: 'In Arbeit' },
  { label: 'Blockiert', value: 'Blockiert' },
  { label: 'Fertig', value: 'Fertig' },
])

const tasks = ref([
  {
    id: 1,
    task: 'Webseite Relaunch',
    assignee: 'Max Mustermann',
    initials: 'M',
    progress: 100,
    status: 'Fertig',
    dueDate: '03.06.2026',
  },
  {
    id: 2,
    task: 'Mobile App',
    assignee: 'Anna Schmidt',
    initials: 'A',
    progress: 45,
    status: 'In Arbeit',
    dueDate: '10.06.2026',
  },
  {
    id: 3,
    task: 'Marketing Kampagne',
    assignee: 'Lisa Weber',
    initials: 'L',
    progress: 0,
    status: 'Offen',
    dueDate: '18.05.2026',
  },
  {
    id: 4,
    task: 'API Migration',
    assignee: 'Paul Müller',
    initials: 'P',
    progress: 72,
    status: 'Blockiert',
    dueDate: '12.05.2026',
  },
])

const breadcrumbHome = { icon: 'pi pi-home' }
const breadcrumbItems = [
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' },
]

const actionItems = [
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
  { label: 'Löschen', icon: 'pi pi-trash' },
]

const filteredTasks = computed(() =>
  tasks.value.filter((task) => {
    const matchesSearch = task.task.toLowerCase().includes(search.value.toLowerCase())
    const matchesStatus = !selectedStatus.value || task.status === selectedStatus.value.value
    return matchesSearch && matchesStatus
  }),
)

function statusSeverity(status: string) {
  if (status === 'Fertig') return 'success'
  if (status === 'In Arbeit') return 'warn'
  if (status === 'Blockiert') return 'danger'
  return 'info'
}
</script>