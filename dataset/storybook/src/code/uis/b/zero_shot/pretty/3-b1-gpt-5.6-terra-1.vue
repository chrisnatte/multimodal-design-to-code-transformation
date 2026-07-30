<template>
  <main class="min-h-screen bg-white p-4 text-sm text-slate-700">
    <div class="flex items-center gap-4">
      <Button
        icon="pi pi-arrow-circle-left"
        rounded
        severity="secondary"
        class="!h-[50px] !w-[50px]"
        aria-label="Zurück"
      />
      <div class="flex h-[58px] flex-col gap-1">
        <h1 class="m-0 text-[32px] font-bold leading-[39px] text-slate-900">Projektaufgaben</h1>
        <span class="text-base leading-[19px]">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</span>
      </div>
    </div>

    <Breadcrumb :home="home" :model="breadcrumbItems" class="mt-3 !w-fit !border-0 !bg-white !p-3.5" />

    <div class="relative mt-4 flex items-start gap-4">
      <div class="flex w-[216px] flex-col gap-1.5">
        <label for="search">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText id="search" v-model="searchTerm" placeholder="Suche..." class="!h-[33px] !w-[216px]" />
        </IconField>
      </div>

      <div class="relative flex w-[216px] flex-col gap-1.5">
        <label for="status">Status</label>
        <Select
          id="status"
          v-model="selectedStatus"
          :options="statusOptions"
          option-label="label"
          placeholder="Status auswählen"
          class="!h-[33px] !w-[216px]"
        />
        <Listbox
          v-model="selectedStatus"
          :options="statusOptions"
          option-label="label"
          class="absolute left-0 top-[63px] z-20 w-[216px]"
        />
      </div>
    </div>

    <DataTable
      v-model:selection="selectedTasks"
      :value="tasks"
      data-key="task"
      class="mt-4 w-full max-w-[1472px]"
      table-style="min-width: 1472px"
      :row-class="() => 'h-[50px]'"
    >
      <Column header-style="width: 72px" body-style="width: 72px">
        <template #header>
          <div class="flex w-full justify-center">
            <Checkbox v-model="selectAll" binary aria-label="Alle Aufgaben auswählen" />
          </div>
        </template>
        <template #body="{ data }">
          <div class="flex justify-center">
            <Checkbox v-model="selectedTasks" :value="data" aria-label="Aufgabe auswählen" />
          </div>
        </template>
      </Column>

      <Column field="task" header="Aufgabe" header-style="width: 512px" body-style="width: 512px" />
      <Column header="Verantwortlicher" header-style="width: 256px" body-style="width: 256px">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-700" />
            <span>{{ data.owner }}</span>
          </div>
        </template>
      </Column>

      <Column header="Status" header-style="width: 256px" body-style="width: 256px">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <ProgressBar :value="data.progress" :show-value="false" class="h-1.5 flex-1" />
            <span class="w-[34px] text-xs">{{ data.progress }} %</span>
          </div>
        </template>
      </Column>

      <Column header="Status" header-style="width: 160px" body-style="width: 160px">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.severity" class="!text-xs" />
        </template>
      </Column>

      <Column field="due" header="Fällig" header-style="width: 124px" body-style="width: 124px" />

      <Column header="Aktionen" header-style="width: 92px" body-style="width: 92px">
        <template #body="{ data }">
          <div class="flex justify-center">
            <Button
              icon="pi pi-ellipsis-h"
              text
              severity="secondary"
              size="small"
              aria-label="Aktionen"
              @click="data.task === 'Mobile App' ? actionPopover.toggle($event) : null"
            />
          </div>
        </template>
      </Column>
    </DataTable>

    <Popover ref="actionPopover" class="!w-[200px]">
      <div class="flex flex-col gap-2">
        <Button label="Bearbeiten" icon="pi pi-pencil" outlined severity="secondary" size="small" class="!justify-start" />
        <Button label="Status aktualisieren" icon="pi pi-list-check" outlined severity="secondary" size="small" class="!justify-start" />
        <Button label="Löschen" icon="pi pi-trash" outlined severity="secondary" size="small" class="!justify-start" />
      </div>
    </Popover>
  </main>
</template>

<script setup>
import { ref } from 'vue'
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
import Popover from 'primevue/popover'
import ProgressBar from 'primevue/progressbar'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const searchTerm = ref('')
const selectedStatus = ref(null)
const selectAll = ref(false)
const actionPopover = ref()

const statusOptions = ref([
  { label: 'Offen' },
  { label: 'In Arbeit' },
  { label: 'Blockiert' },
  { label: 'Fertig' }
])

const tasks = ref([
  {
    task: 'Webseite Relaunch',
    owner: 'Max Mustermann',
    initials: 'M',
    progress: 100,
    status: 'Fertig',
    severity: 'success',
    due: '03.06.2026'
  },
  {
    task: 'Mobile App',
    owner: 'Anna Schmidt',
    initials: 'A',
    progress: 45,
    status: 'In Arbeit',
    severity: 'warn',
    due: '10.06.2026'
  },
  {
    task: 'Marketing Kampagne',
    owner: 'Lisa Weber',
    initials: 'L',
    progress: 0,
    status: 'Offen',
    severity: 'info',
    due: '18.05.2026'
  },
  {
    task: 'API Migration',
    owner: 'Paul Müller',
    initials: 'P',
    progress: 72,
    status: 'Blockiert',
    severity: 'danger',
    due: '12.05.2026'
  }
])

const selectedTasks = ref([tasks.value[0]])

const home = ref({
  icon: 'pi pi-home'
})

const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
])
</script>