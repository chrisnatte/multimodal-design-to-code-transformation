<template>
  <main class="min-h-screen bg-white p-4 text-sm">
    <section class="mx-auto w-full max-w-[1518px]">
      <div class="flex items-center gap-4">
        <Button
          icon="pi pi-list-check"
          severity="secondary"
          text
          rounded
          aria-label="Projektaufgaben"
          class="!h-[50px] !w-[50px] !bg-slate-100"
        />
        <div class="flex flex-col gap-1">
          <h1 class="text-[32px] font-bold leading-none">Projektaufgaben</h1>
          <p class="text-base">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</p>
        </div>
      </div>

      <Breadcrumb :home="home" :model="breadcrumbs" class="mt-3 !border-0 !bg-transparent !p-0" />

      <div class="relative mt-4 flex gap-4">
        <div class="flex w-[216px] flex-col gap-2">
          <label for="task-search">Suche</label>
          <IconField>
            <InputIcon class="pi pi-search" />
            <InputText v-model="search" input-id="task-search" placeholder="Suche..." class="w-full" />
          </IconField>
        </div>

        <div class="relative flex w-[216px] flex-col gap-2">
          <label for="status-filter">Status</label>
          <Select
            v-model="statusFilter"
            input-id="status-filter"
            :options="statusOptions"
            placeholder="Status auswählen"
            class="w-full"
          />
          <div class="absolute top-[63px] z-10 w-full rounded-md border border-slate-200 bg-white p-1">
            <Listbox
              v-model="statusFilter"
              :options="statusOptions"
              class="w-full border-0"
              list-class="!p-0"
            />
          </div>
        </div>
      </div>

      <div class="relative mt-4 overflow-visible">
        <DataTable
          :value="filteredTasks"
          data-key="id"
          class="w-full"
          :pt="{
            table: 'border-collapse',
            headerCell: '!border !border-slate-200 !bg-white !px-3.5 !py-2.5 !text-sm !font-semibold',
            bodyCell: '!border !border-slate-200 !px-3.5 !py-2.5',
          }"
        >
          <Column header-class="!w-[72px]" body-class="!w-[72px] !text-center">
            <template #header>
              <Checkbox v-model="allSelected" binary input-id="all-tasks" />
            </template>
            <template #body="{ data }">
              <Checkbox v-model="data.selected" binary :input-id="`task-${data.id}`" />
            </template>
          </Column>

          <Column field="task" header="Aufgabe" header-class="!w-[512px]" body-class="!w-[512px]" />

          <Column header="Verantwortlicher" header-class="!w-[256px]" body-class="!w-[256px]">
            <template #body="{ data }">
              <div class="flex items-center gap-3">
                <Avatar :label="data.initial" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-sm" />
                <span>{{ data.owner }}</span>
              </div>
            </template>
          </Column>

          <Column header="Status" header-class="!w-[256px]" body-class="!w-[256px]">
            <template #body="{ data }">
              <div class="flex items-center gap-3">
                <ProgressBar :value="data.progress" :show-value="false" class="h-1.5 w-[182px]" />
                <span class="text-xs">{{ data.progress }} %</span>
              </div>
            </template>
          </Column>

          <Column header="Status" header-class="!w-[160px]" body-class="!w-[160px]">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="statusSeverity(data.status)" />
            </template>
          </Column>

          <Column field="dueDate" header="Fällig" header-class="!w-[124px]" body-class="!w-[124px]" />

          <Column header="Aktionen" header-class="!w-[92px]" body-class="!w-[92px] !text-center">
            <template #body>
              <Button icon="pi pi-ellipsis-v" severity="secondary" text aria-label="Aktionen" />
            </template>
          </Column>
        </DataTable>

        <div class="absolute right-[-8.5rem] top-[136px] z-20 w-[200px] rounded-md border border-slate-200 bg-white p-2.5">
          <div class="flex flex-col gap-2">
            <Button label="Bearbeiten" icon="pi pi-pencil" severity="secondary" outlined class="w-full !justify-start" />
            <Button
              label="Status aktualisieren"
              icon="pi pi-refresh"
              severity="secondary"
              outlined
              class="w-full !justify-start"
            />
            <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="w-full !justify-start" />
          </div>
        </div>
      </div>
    </section>
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
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import ProgressBar from 'primevue/progressbar'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const search = ref('')
const statusFilter = ref<string | null>(null)
const allSelected = ref(false)

const home = {
  icon: 'pi pi-home',
}

const breadcrumbs = [
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' },
]

const statusOptions = ['Offen', 'In Arbeit', 'Blockiert', 'Fertig']

const tasks = ref([
  {
    id: 1,
    selected: true,
    task: 'Webseite Relaunch',
    initial: 'M',
    owner: 'Max Mustermann',
    progress: 100,
    status: 'Fertig',
    dueDate: '03.06.2026',
  },
  {
    id: 2,
    selected: false,
    task: 'Mobile App',
    initial: 'A',
    owner: 'Anna Schmidt',
    progress: 45,
    status: 'In Arbeit',
    dueDate: '10.06.2026',
  },
  {
    id: 3,
    selected: false,
    task: 'Marketing Kampagne',
    initial: 'L',
    owner: 'Lisa Weber',
    progress: 0,
    status: 'Offen',
    dueDate: '18.05.2026',
  },
  {
    id: 4,
    selected: false,
    task: 'API Migration',
    initial: 'P',
    owner: 'Paul Müller',
    progress: 72,
    status: 'Blockiert',
    dueDate: '12.05.2026',
  },
])

const filteredTasks = computed(() =>
  tasks.value.filter((task) => {
    const matchesSearch = task.task.toLowerCase().includes(search.value.toLowerCase())
    const matchesStatus = !statusFilter.value || task.status === statusFilter.value

    return matchesSearch && matchesStatus
  }),
)

function statusSeverity(status: string) {
  switch (status) {
    case 'Fertig':
      return 'success'
    case 'In Arbeit':
      return 'warn'
    case 'Blockiert':
      return 'danger'
    default:
      return 'info'
  }
}
</script>