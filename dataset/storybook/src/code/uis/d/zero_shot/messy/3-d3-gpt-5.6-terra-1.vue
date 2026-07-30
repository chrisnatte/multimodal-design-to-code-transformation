<template>
  <main class="min-h-screen bg-white px-[58px] pt-[16px] font-sans text-slate-600">
    <header class="flex items-start gap-3">
      <Button
        icon="pi pi-arrow-left"
        rounded
        outlined
        severity="secondary"
        aria-label="Zurück"
        class="!mt-0.5 !h-8 !w-8"
      />
      <div class="flex flex-col">
        <h1 class="m-0 text-[24px] font-bold leading-7 text-slate-700">Projektaufgaben</h1>
        <p class="m-0 mt-0.5 text-xs text-slate-500">
          Hier werden alle Aufgaben des Projekts <span class="font-semibold">Projekt 1</span> aufgelistet.
        </p>
      </div>
    </header>

    <BreadCrumb :model="breadcrumbs" class="!mt-4 !border-0 !bg-transparent !p-0 !text-xs" />

    <section class="relative mt-5 w-[1048px]">
      <div class="flex items-start gap-3">
        <div class="flex w-[153px] flex-col gap-1">
          <label for="search" class="text-[10px] text-slate-600">Suche</label>
          <InputText
            id="search"
            v-model="search"
            placeholder="Suche..."
            class="!h-6 !w-full !text-[10px]"
          />
        </div>

        <div class="relative flex w-[154px] flex-col gap-1">
          <label for="status" class="text-[10px] text-slate-600">Status</label>
          <Select
            id="status"
            v-model="selectedStatus"
            :options="statusOptions"
            placeholder="Status auswählen"
            class="!h-6 !w-full !text-[10px]"
          />
          <Listbox
            v-model="dropdownStatus"
            :options="statusOptions"
            class="absolute left-0 top-[43px] z-20 w-full !text-[10px] shadow-md"
          />
        </div>
      </div>

      <div class="relative mt-[38px]">
        <DataTable
          :value="tasks"
          dataKey="task"
          class="w-full !text-[10px]"
          tableStyle="table-layout: fixed; width: 100%;"
        >
          <Column headerStyle="width: 62px" bodyStyle="width: 62px">
            <template #header>
              <div class="flex w-full justify-center">
                <Checkbox v-model="selectAll" binary aria-label="Alle Aufgaben auswählen" />
              </div>
            </template>
            <template #body="{ data }">
              <div class="flex w-full justify-center">
                <Checkbox v-model="selectedTasks" :value="data.task" :aria-label="data.task" />
              </div>
            </template>
          </Column>

          <Column field="task" header="Aufgabe" headerStyle="width: 364px" bodyStyle="width: 364px">
            <template #body="{ data }">
              <span class="text-[10px] text-slate-600">{{ data.task }}</span>
            </template>
          </Column>

          <Column header="Verantwortlicher" headerStyle="width: 182px" bodyStyle="width: 182px">
            <template #body="{ data }">
              <div class="flex items-center gap-2">
                <Avatar :label="data.initials" shape="circle" class="!h-5 !w-5 !bg-slate-200 !text-[9px] !text-slate-500" />
                <span class="text-[10px] text-slate-600">{{ data.assignee }}</span>
              </div>
            </template>
          </Column>

          <Column header="Status" headerStyle="width: 182px" bodyStyle="width: 182px">
            <template #body="{ data }">
              <div class="flex items-center gap-2">
                <ProgressBar
                  :value="data.progress"
                  :showValue="false"
                  class="h-1 flex-1 !bg-slate-200"
                />
                <span class="w-6 text-[9px] text-slate-500">{{ data.progress }} %</span>
              </div>
            </template>
          </Column>

          <Column header="Status" headerStyle="width: 114px" bodyStyle="width: 114px">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="data.severity" class="!px-1.5 !py-0 !text-[9px]" />
            </template>
          </Column>

          <Column header="Fällig" headerStyle="width: 88px" bodyStyle="width: 88px">
            <template #body="{ data }">
              <span :class="data.overdue ? 'text-red-500' : 'text-slate-600'" class="text-[10px]">
                {{ data.due }}
              </span>
            </template>
          </Column>

          <Column header="Aktionen" headerStyle="width: 56px" bodyStyle="width: 56px">
            <template #body="{ index }">
              <Button
                icon="pi pi-ellipsis-h"
                text
                rounded
                severity="secondary"
                aria-label="Aktionen"
                class="!h-6 !w-6 !p-0"
              />
            </template>
          </Column>
        </DataTable>

        <Menu :model="actionItems" class="absolute right-[-97px] top-[90px] z-30 !w-[140px] !text-[10px] shadow-md" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import BreadCrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Menu from 'primevue/menu'
import ProgressBar from 'primevue/progressbar'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const search = ref('')
const selectedStatus = ref(null)
const dropdownStatus = ref(null)
const selectedTasks = ref(['Webseite Relaunch'])
const selectAll = ref(false)

const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig'])

const breadcrumbs = ref([
  { icon: 'pi pi-home' },
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
])

const tasks = ref([
  {
    task: 'Webseite Relaunch',
    initials: 'M',
    assignee: 'Max Mustermann',
    progress: 100,
    status: 'Fertig',
    severity: 'success',
    due: '03.06.2026',
    overdue: false
  },
  {
    task: 'Mobile App',
    initials: 'A',
    assignee: 'Anna Schmidt',
    progress: 45,
    status: 'In Arbeit',
    severity: 'warn',
    due: '10.06.2026',
    overdue: false
  },
  {
    task: 'Marketing Kampagne',
    initials: 'L',
    assignee: 'Lisa Weber',
    progress: 0,
    status: 'Offen',
    severity: 'info',
    due: '18.05.2026',
    overdue: false
  },
  {
    task: 'API Migration',
    initials: 'P',
    assignee: 'Paul Müller',
    progress: 72,
    status: 'Blockiert',
    severity: 'danger',
    due: '12.05.2026',
    overdue: true
  }
])

const actionItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])
</script>