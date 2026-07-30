<template>
  <main class="relative min-h-screen bg-white font-sans text-slate-600">
    <Button
      icon="pi pi-arrow-left"
      text
      rounded
      aria-label="Zurück"
      class="!absolute !left-3 !top-4 !h-8 !w-8 !border !border-slate-200 !bg-slate-50 !p-0 !text-slate-500"
    />

    <section class="ml-[58px] w-[1048px] pt-3">
      <header>
        <h1 class="m-0 text-[22px] font-bold leading-6 text-slate-700">Projektaufgaben</h1>
        <p class="mt-1 text-xs text-slate-500">
          Hier werden alle Aufgaben des Projekts <span class="font-semibold">Projekt 1</span> aufgelistet.
        </p>

        <Breadcrumb :home="home" :model="breadcrumbs" class="mt-3 !border-0 !bg-transparent !p-0 text-[10px]" />
      </header>

      <section class="mt-5 flex items-end gap-3">
        <div class="flex w-[153px] flex-col gap-1">
          <label for="search" class="text-[10px] font-medium text-slate-600">Suche</label>
          <span class="p-input-icon-left">
            <i class="pi pi-search text-[10px] text-slate-400" />
            <InputText
              id="search"
              v-model="search"
              placeholder="Suche..."
              class="h-6 w-[153px] !text-[10px]"
            />
          </span>
        </div>

        <div class="relative flex w-[154px] flex-col gap-1">
          <label for="status" class="text-[10px] font-medium text-slate-600">Status</label>
          <Select
            id="status"
            v-model="selectedStatus"
            :options="statusOptions"
            option-label="label"
            placeholder="Status auswählen"
            class="h-6 w-[154px] !text-[10px]"
          />
          <div class="absolute left-0 top-[45px] z-20 w-[154px]">
            <Listbox
              v-model="previewStatus"
              :options="statusOptions"
              option-label="label"
              class="w-full !rounded-sm !border-slate-200 !text-[10px] shadow-md [&_.p-listbox-list]:!p-1 [&_.p-listbox-option]:!px-2 [&_.p-listbox-option]:!py-1.5 [&_.p-listbox-option:nth-child(2)]:!bg-slate-100"
            />
          </div>
        </div>
      </section>

      <section class="relative mt-3">
        <DataTable
          :value="tasks"
          data-key="id"
          size="small"
          class="w-full !text-[10px]"
          table-style="min-width: 100%"
        >
          <Column header-style="width: 52px" body-style="width: 52px">
            <template #header>
              <Checkbox v-model="allSelected" binary aria-label="Alle Aufgaben auswählen" />
            </template>
            <template #body="{ data }">
              <Checkbox v-model="selectedTasks" :value="data.id" :aria-label="data.task" />
            </template>
          </Column>

          <Column field="task" header="Aufgabe" header-style="width: 364px" body-style="width: 364px">
            <template #body="{ data }">
              <span class="whitespace-nowrap">{{ data.task }}</span>
            </template>
          </Column>

          <Column header="Verantwortlicher" header-style="width: 182px" body-style="width: 182px">
            <template #body="{ data }">
              <div class="flex items-center gap-2 whitespace-nowrap">
                <Avatar :label="data.initials" shape="circle" class="!h-5 !w-5 !bg-slate-200 !text-[9px] !text-slate-500" />
                <span>{{ data.person }}</span>
              </div>
            </template>
          </Column>

          <Column header="Status" header-style="width: 182px" body-style="width: 182px">
            <template #body="{ data }">
              <div class="flex items-center gap-2">
                <ProgressBar
                  :value="data.progress"
                  :show-value="false"
                  class="h-1 w-[130px] !bg-slate-200"
                />
                <span class="whitespace-nowrap text-[9px]">{{ data.progress }} %</span>
              </div>
            </template>
          </Column>

          <Column header="Status" header-style="width: 114px" body-style="width: 114px">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="data.severity" class="!px-1.5 !py-0 !text-[9px]" />
            </template>
          </Column>

          <Column header="Fällig" header-style="width: 88px" body-style="width: 88px">
            <template #body="{ data }">
              <span :class="data.overdue ? 'text-red-500' : ''">{{ data.due }}</span>
            </template>
          </Column>

          <Column header="Aktionen" header-style="width: 66px" body-style="width: 66px">
            <template #body="{ data }">
              <Button
                icon="pi pi-ellipsis-h"
                text
                rounded
                size="small"
                :aria-label="`Aktionen für ${data.task}`"
                :class="data.id === 2 ? '!h-6 !w-6 !bg-slate-100 !p-0' : '!h-6 !w-6 !p-0'"
              />
            </template>
          </Column>
        </DataTable>

        <div class="absolute left-[1004px] top-[96px] z-10 w-[142px] rounded border border-slate-200 bg-white p-2 shadow-md">
          <Button
            label="Bearbeiten"
            icon="pi pi-pencil"
            outlined
            size="small"
            class="mb-1 !flex !h-6 !w-full !justify-start !border-slate-200 !px-2 !text-[10px] !text-slate-500"
          />
          <Button
            label="Status aktualisieren"
            icon="pi pi-list"
            outlined
            size="small"
            class="mb-1 !flex !h-6 !w-full !justify-start !border-slate-200 !px-2 !text-[10px] !text-slate-500"
          />
          <Button
            label="Löschen"
            icon="pi pi-trash"
            outlined
            size="small"
            class="!flex !h-6 !w-full !justify-start !border-slate-200 !px-2 !text-[10px] !text-slate-500"
          />
        </div>
      </section>
    </section>
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
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import ProgressBar from 'primevue/progressbar'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const search = ref('')
const selectedStatus = ref(null)
const previewStatus = ref(null)
const allSelected = ref(false)
const selectedTasks = ref([1])

const home = {
  icon: 'pi pi-home'
}

const breadcrumbs = [
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
]

const statusOptions = [
  { label: 'Offen' },
  { label: 'In Arbeit' },
  { label: 'Blockiert' },
  { label: 'Fertig' }
]

const tasks = ref([
  {
    id: 1,
    task: 'Webseite Relaunch',
    initials: 'M',
    person: 'Max Mustermann',
    progress: 100,
    status: 'Fertig',
    severity: 'success',
    due: '03.06.2026',
    overdue: false
  },
  {
    id: 2,
    task: 'Mobile App',
    initials: 'A',
    person: 'Anna Schmidt',
    progress: 45,
    status: 'In Arbeit',
    severity: 'warn',
    due: '10.06.2026',
    overdue: false
  },
  {
    id: 3,
    task: 'Marketing Kampagne',
    initials: 'L',
    person: 'Lisa Weber',
    progress: 0,
    status: 'Offen',
    severity: 'info',
    due: '18.05.2026',
    overdue: false
  },
  {
    id: 4,
    task: 'API Migration',
    initials: 'P',
    person: 'Paul Müller',
    progress: 72,
    status: 'Blockiert',
    severity: 'danger',
    due: '12.05.2026',
    overdue: true
  }
])
</script>