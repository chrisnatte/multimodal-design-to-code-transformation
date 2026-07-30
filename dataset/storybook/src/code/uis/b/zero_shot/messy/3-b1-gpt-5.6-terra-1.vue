<template>
  <main class="min-h-screen bg-white p-4 font-sans text-slate-900">
    <header class="flex items-start gap-4">
      <Button
        icon="pi pi-arrow-left"
        rounded
        text
        aria-label="Zurück"
        class="mt-1 !h-12 !w-12 !bg-slate-100 !text-slate-700"
      />
      <div>
        <h1 class="m-0 text-[32px] font-bold leading-[39px]">Projektaufgaben</h1>
        <p class="mt-1 text-base leading-5 text-slate-700">
          Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.
        </p>
      </div>
    </header>

    <section class="relative ml-[66px] mt-2 w-[1472px]">
      <nav aria-label="Breadcrumb" class="flex h-[42px] w-[302px] items-center gap-2 text-sm text-slate-700">
        <i class="pi pi-home text-sm" aria-hidden="true"></i>
        <i class="pi pi-chevron-right text-xs text-slate-500" aria-hidden="true"></i>
        <span>Projekte</span>
        <i class="pi pi-chevron-right text-xs text-slate-500" aria-hidden="true"></i>
        <span>Projekt 1</span>
        <i class="pi pi-chevron-right text-xs text-slate-500" aria-hidden="true"></i>
        <span>Aufgaben</span>
      </nav>

      <section class="relative mt-2 flex gap-4" aria-label="Filter">
        <div class="flex w-[216px] flex-col gap-1.5">
          <label for="task-search" class="text-sm">Suche</label>
          <InputText
            id="task-search"
            v-model="searchQuery"
            placeholder="Suche..."
            class="!h-[33px] !w-[216px] !text-sm"
          />
        </div>

        <div class="relative flex w-[216px] flex-col gap-1.5">
          <label for="task-status" class="text-sm">Status</label>
          <Select
            id="task-status"
            v-model="statusFilter"
            :options="statusOptions"
            option-label="label"
            placeholder="Status auswählen"
            class="!h-[33px] !w-[216px] !text-sm"
          />
          <Listbox
            v-model="statusFilter"
            :options="statusOptions"
            option-label="label"
            class="absolute left-0 top-[63px] z-20 w-[216px]"
            list-style="max-height: 137px"
          />
        </div>
      </section>

      <section class="mt-[15px]" aria-label="Aufgabenliste">
        <DataTable
          v-model:selection="selectedTasks"
          :value="tasks"
          data-key="id"
          show-gridlines
          class="w-full text-sm"
          table-style="min-width: 1472px"
        >
          <Column selection-mode="multiple" header-style="width: 72px" body-style="width: 72px" />
          <Column field="task" header="Aufgabe" header-style="width: 512px" body-style="width: 512px">
            <template #body="{ data }">
              <span>{{ data.task }}</span>
            </template>
          </Column>
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
                <ProgressBar
                  :value="data.progress"
                  :show-value="false"
                  class="w-[182px] !h-1.5"
                />
                <span class="whitespace-nowrap text-xs">{{ data.progress }} %</span>
              </div>
            </template>
          </Column>
          <Column header="Status" header-style="width: 160px" body-style="width: 160px">
            <template #body="{ data }">
              <Tag
                :value="data.status"
                :severity="data.severity"
                class="!rounded-md !px-[7px] !py-0.5 !text-xs !font-bold"
              />
            </template>
          </Column>
          <Column field="dueDate" header="Fällig" header-style="width: 124px" body-style="width: 124px">
            <template #body="{ data }">
              <span>{{ data.dueDate }}</span>
            </template>
          </Column>
          <Column header="Aktionen" header-style="width: 92px" body-style="width: 92px">
            <template #body>
              <div class="flex justify-center">
                <Button
                  icon="pi pi-ellipsis-h"
                  text
                  rounded
                  aria-label="Aktionen"
                  class="!h-7 !w-[35px] !text-slate-700"
                />
              </div>
            </template>
          </Column>
        </DataTable>
      </section>

      <Menu
        :model="actionItems"
        class="absolute right-[-137px] top-[271px] z-30 w-[200px]"
      />
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Menu from 'primevue/menu'
import ProgressBar from 'primevue/progressbar'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const searchQuery = ref('')
const statusFilter = ref(null)
const selectedTasks = ref([])

const statusOptions = [
  { label: 'Offen', value: 'open' },
  { label: 'In Arbeit', value: 'in-progress' },
  { label: 'Blockiert', value: 'blocked' },
  { label: 'Fertig', value: 'done' }
]

const tasks = [
  {
    id: 1,
    task: 'Webseite Relaunch',
    initials: 'M',
    owner: 'Max Mustermann',
    progress: 100,
    status: 'Fertig',
    severity: 'success',
    dueDate: '03.06.2026'
  },
  {
    id: 2,
    task: 'Mobile App',
    initials: 'A',
    owner: 'Anna Schmidt',
    progress: 45,
    status: 'In Arbeit',
    severity: 'warn',
    dueDate: '10.06.2026'
  },
  {
    id: 3,
    task: 'Marketing Kampagne',
    initials: 'L',
    owner: 'Lisa Weber',
    progress: 0,
    status: 'Offen',
    severity: 'info',
    dueDate: '18.05.2026'
  },
  {
    id: 4,
    task: 'API Migration',
    initials: 'P',
    owner: 'Paul Müller',
    progress: 72,
    status: 'Blockiert',
    severity: 'danger',
    dueDate: '12.05.2026'
  }
]

const actionItems = [
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-sync' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]
</script>