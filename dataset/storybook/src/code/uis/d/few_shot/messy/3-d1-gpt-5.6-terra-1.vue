<template>
  <main class="relative ml-[58px] mt-4 w-[1048px] text-sm text-slate-700">
    <header class="flex items-center gap-3">
      <Button icon="pi pi-arrow-left" severity="secondary" text rounded aria-label="Zurück" />
      <div class="flex flex-col">
        <h1 class="m-0 text-2xl font-bold text-slate-700">Projektaufgaben</h1>
        <p class="m-0 text-xs text-slate-500">
          Hier werden alle Aufgaben des Projekts <strong>Projekt 1</strong> aufgelistet.
        </p>
      </div>
    </header>

    <Breadcrumb :home="home" :model="breadcrumbs" class="mt-3 !border-0 !bg-transparent !p-0 text-xs" />

    <section class="mt-5 flex gap-3">
      <div class="flex w-[153px] flex-col gap-1">
        <label for="task-search" class="text-xs">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText v-model="search" input-id="task-search" placeholder="Suche..." class="w-full !text-xs" />
        </IconField>
      </div>

      <div class="relative flex w-[154px] flex-col gap-1">
        <label for="status-filter" class="text-xs">Status</label>
        <Select
          v-model="selectedStatus"
          input-id="status-filter"
          :options="statusOptions"
          placeholder="Status auswählen"
          class="w-full !text-xs"
        />
        <Listbox
          v-model="selectedStatus"
          :options="statusOptions"
          class="absolute left-0 top-[51px] z-20 w-[154px] shadow-md"
          :pt="{
            root: '!rounded-md',
            list: '!p-1',
            option: '!px-2.5 !py-1.5 !text-xs',
          }"
        />
      </div>
    </section>

    <DataTable
      v-model:selection="selectedTasks"
      :value="filteredTasks"
      data-key="id"
      class="mt-10"
      :pt="{
        table: '!text-xs',
        headerCell: '!border-x-0 !border-t-0 !px-3 !py-2 !text-xs !font-semibold',
        bodyCell: '!border-x-0 !px-3 !py-2',
      }"
    >
      <Column selection-mode="multiple" header-style="width: 62px" />
      <Column field="task" header="Aufgabe" header-style="width: 364px" />
      <Column header="Verantwortlicher" header-style="width: 182px">
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <Avatar :label="data.initials" shape="circle" class="!h-5 !w-5 !text-[10px]" />
            <span>{{ data.owner }}</span>
          </div>
        </template>
      </Column>
      <Column header="Status" header-style="width: 182px">
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <ProgressBar :value="data.progress" :show-value="false" class="h-1 w-[129px]" />
            <span class="w-7 text-[10px]">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>
      <Column header="Status" header-style="width: 114px">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="statusSeverity(data.status)" class="!px-1.5 !py-0.5 !text-[10px]" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig" header-style="width: 88px">
        <template #body="{ data }">
          <span :class="{ 'text-red-500': data.status === 'Blockiert' }">{{ data.dueDate }}</span>
        </template>
      </Column>
      <Column header="Aktionen" header-style="width: 72px">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            rounded
            class="!h-7 !w-7"
            :aria-label="`Aktionen für ${data.task}`"
          />
        </template>
      </Column>
    </DataTable>

    <Menu
      :model="actionItems"
      class="absolute right-[-98px] top-[238px] z-10 w-[142px] shadow-md"
      :pt="{
        root: '!rounded-md !p-2',
        list: 'flex flex-col !gap-2',
        itemContent: '!p-0',
      }"
    >
      <template #item="{ item }">
        <Button
          :label="item.label"
          :icon="item.icon"
          severity="secondary"
          outlined
          size="small"
          class="w-full !justify-start !text-[10px]"
        />
      </template>
    </Menu>
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
import Listbox from 'primevue/listbox'
import Menu from 'primevue/menu'
import ProgressBar from 'primevue/progressbar'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const search = ref('')
const selectedStatus = ref<string | null>(null)
const selectedTasks = ref([{ id: 1 }])

const home = { icon: 'pi pi-home' }
const breadcrumbs = [
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' },
]

const statusOptions = ['Offen', 'In Arbeit', 'Blockiert', 'Fertig']

const tasks = ref([
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
  tasks.value.filter(
    (task) =>
      task.task.toLowerCase().includes(search.value.toLowerCase()) &&
      (!selectedStatus.value || task.status === selectedStatus.value),
  ),
)

const actionItems = [
  { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
  { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
  { label: 'Löschen', icon: 'pi pi-trash' },
]

function statusSeverity(status: string) {
  if (status === 'Fertig') return 'success'
  if (status === 'In Arbeit') return 'warn'
  if (status === 'Blockiert') return 'danger'
  return 'info'
}
</script>