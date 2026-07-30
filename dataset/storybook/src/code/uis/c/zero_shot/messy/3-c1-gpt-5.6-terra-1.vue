<template>
  <main class="min-h-screen bg-white px-[58px] pt-3 font-sans text-slate-600">
    <header>
      <div class="flex items-center gap-3">
        <Button icon="pi pi-arrow-left" rounded outlined severity="secondary" size="small" aria-label="Zurück" />
        <div>
          <h1 class="m-0 text-[23px] font-bold leading-6 text-slate-700">Projektaufgaben</h1>
          <p class="m-0 mt-1 text-xs text-slate-500">
            Hier werden alle Aufgaben des Projekts <span class="font-semibold">Projekt 1</span> aufgelistet.
          </p>
        </div>
      </div>

      <Breadcrumb :home="home" :model="breadcrumbs" class="mt-3 border-0 bg-transparent p-0 text-xs" />
    </header>

    <section class="mt-5 w-[1048px]">
      <div class="flex items-end gap-3">
        <div class="flex flex-col gap-1">
          <label for="task-search" class="text-[11px] text-slate-600">Suche</label>
          <InputText
            id="task-search"
            v-model="search"
            placeholder="Suche..."
            class="h-6 w-[154px] text-[11px]"
          />
        </div>

        <div class="relative flex flex-col gap-1">
          <label for="status-filter" class="text-[11px] text-slate-600">Status</label>
          <Select
            id="status-filter"
            v-model="selectedStatus"
            :options="statusOptions"
            placeholder="Status auswählen"
            class="h-6 w-[154px] text-[11px]"
          />
          <Listbox
            v-model="selectedStatus"
            :options="statusOptions"
            class="absolute left-0 top-[47px] z-20 w-[154px] text-[11px] shadow-md"
          />
        </div>
      </div>

      <DataTable
        v-model:selection="selectedTasks"
        :value="tasks"
        dataKey="id"
        class="mt-2 text-[11px]"
        tableStyle="min-width: 100%"
      >
        <Column selectionMode="multiple" headerStyle="width: 48px" />

        <Column field="title" header="Aufgabe" headerStyle="width: 360px">
          <template #body="{ data }">
            <span>{{ data.title }}</span>
          </template>
        </Column>

        <Column header="Verantwortlicher" headerStyle="width: 180px">
          <template #body="{ data }">
            <div class="flex items-center gap-2">
              <Avatar :label="data.initials" shape="circle" class="h-5 w-5 bg-slate-200 text-[10px] text-slate-500" />
              <span>{{ data.assignee }}</span>
            </div>
          </template>
        </Column>

        <Column header="Status" headerStyle="width: 182px">
          <template #body="{ data }">
            <div class="flex items-center gap-2">
              <ProgressBar :value="data.progress" :showValue="false" class="h-1.5 w-[130px]" />
              <span class="w-6 text-[10px]">{{ data.progress }} %</span>
            </div>
          </template>
        </Column>

        <Column header="Status" headerStyle="width: 114px">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="data.severity" class="px-1.5 py-0 text-[10px]" />
          </template>
        </Column>

        <Column header="Fällig" headerStyle="width: 88px">
          <template #body="{ data }">
            <span :class="{ 'text-red-500': data.overdue }">{{ data.due }}</span>
          </template>
        </Column>

        <Column header="Aktionen" headerStyle="width: 58px">
          <template #body="{ data }">
            <div class="relative flex justify-center">
              <Button
                icon="pi pi-ellipsis-h"
                text
                rounded
                size="small"
                severity="secondary"
                aria-label="Aktionen"
                @click="activeMenu = data.id"
              />
              <Menu
                v-if="activeMenu === data.id"
                :model="actionItems"
                class="absolute right-0 top-7 z-30 w-[142px] text-[11px] shadow-md"
              />
            </div>
          </template>
        </Column>
      </DataTable>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
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
const selectedStatus = ref(null)
const selectedTasks = ref([{ id: 1 }])
const activeMenu = ref(2)

const home = ref({ icon: 'pi pi-home' })
const breadcrumbs = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
])

const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig'])

const tasks = ref([
  {
    id: 1,
    title: 'Webseite Relaunch',
    initials: 'M',
    assignee: 'Max Mustermann',
    progress: 100,
    status: 'Fertig',
    severity: 'success',
    due: '03.06.2026',
    overdue: false
  },
  {
    id: 2,
    title: 'Mobile App',
    initials: 'A',
    assignee: 'Anna Schmidt',
    progress: 45,
    status: 'In Arbeit',
    severity: 'warn',
    due: '10.06.2026',
    overdue: false
  },
  {
    id: 3,
    title: 'Marketing Kampagne',
    initials: 'L',
    assignee: 'Lisa Weber',
    progress: 0,
    status: 'Offen',
    severity: 'info',
    due: '18.05.2026',
    overdue: false
  },
  {
    id: 4,
    title: 'API Migration',
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
  { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])
</script>