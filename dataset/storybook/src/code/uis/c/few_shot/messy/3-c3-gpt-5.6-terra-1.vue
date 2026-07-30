<template>
  <main class="min-h-screen bg-white px-4 py-4 text-slate-700">
    <section class="w-full max-w-[1472px]">
      <header class="flex items-start gap-3">
        <Button icon="pi pi-arrow-left" severity="secondary" text rounded aria-label="Zurück" />
        <div class="-mt-1">
          <h1 class="text-2xl font-bold leading-tight text-slate-700">Projektaufgaben</h1>
          <p class="mt-1 text-sm text-slate-500">
            Hier werden alle Aufgaben des Projekts <strong>Projekt 1</strong> aufgelistet.
          </p>
        </div>
      </header>

      <Breadcrumb :home="home" :model="breadcrumbItems" class="ml-16 mt-4 !border-0 !bg-transparent !p-0" />

      <div class="mt-7 flex gap-4">
        <div class="flex flex-col gap-2">
          <label for="task-search" class="text-sm text-slate-700">Suche</label>
          <InputGroup class="w-[216px]">
            <InputGroupAddon>
              <i class="pi pi-search text-sm text-slate-400"></i>
            </InputGroupAddon>
            <InputText id="task-search" v-model="search" placeholder="Suche..." />
          </InputGroup>
        </div>

        <div class="relative flex flex-col gap-2">
          <label for="status-filter" class="text-sm text-slate-700">Status</label>
          <Select
            id="status-filter"
            v-model="statusFilter"
            :options="statusOptions"
            option-label="label"
            option-value="value"
            placeholder="Status auswählen"
            class="w-[216px]"
          />
          <Listbox
            v-model="statusListSelection"
            :options="statusOptions"
            option-label="label"
            option-value="value"
            class="absolute left-0 top-[60px] z-10 w-[216px] shadow-md"
          />
        </div>
      </div>

      <div class="relative mt-4">
        <DataTable
          v-model:selection="selectedTasks"
          :value="tasks"
          data-key="id"
          class="text-sm"
          :pt="{
            table: 'min-w-full',
            headerCell: 'border-b border-slate-200 !bg-white !px-3 !py-3 text-slate-700',
            bodyCell: 'border-b border-slate-200 !bg-white !px-3 !py-2.5',
          }"
        >
          <Column selection-mode="multiple" header-style="width: 5rem" />
          <Column field="title" header="Aufgabe" />
          <Column header="Verantwortlicher" style="width: 17rem">
            <template #body="{ data }">
              <div class="flex items-center gap-3">
                <Avatar :label="data.initials" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-xs !text-slate-600" />
                <span>{{ data.owner }}</span>
              </div>
            </template>
          </Column>
          <Column header="Status" style="width: 16rem">
            <template #body="{ data }">
              <div class="flex items-center gap-3">
                <ProgressBar :value="data.progress" :show-value="false" class="h-1 w-[182px]" />
                <span class="whitespace-nowrap text-xs">{{ data.progress }} %</span>
              </div>
            </template>
          </Column>
          <Column header="Status" style="width: 10rem">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="data.severity" class="!px-2 !py-1 !text-xs" />
            </template>
          </Column>
          <Column field="dueDate" header="Fällig" style="width: 9rem">
            <template #body="{ data }">
              <span :class="{ 'text-red-500': data.overdue }">{{ data.dueDate }}</span>
            </template>
          </Column>
          <Column header="Aktionen" style="width: 6rem">
            <template #body="{ index }">
              <Button
                icon="pi pi-ellipsis-h"
                severity="secondary"
                text
                rounded
                size="small"
                aria-label="Aktionen"
                @click="activeActionIndex = index"
              />
            </template>
          </Column>
        </DataTable>

        <Menu
          v-if="activeActionIndex === 2"
          :model="actionItems"
          class="absolute right-[-137px] top-[148px] z-20 w-[200px] shadow-md"
          :pt="{ root: '!p-2', list: 'flex flex-col gap-2' }"
        >
          <template #item="{ item }">
            <Button
              :label="item.label"
              :icon="item.icon"
              severity="secondary"
              outlined
              size="small"
              class="w-full !justify-start"
              @click="item.command"
            />
          </template>
        </Menu>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Menu from 'primevue/menu'
import ProgressBar from 'primevue/progressbar'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const search = ref('')
const statusFilter = ref('')
const statusListSelection = ref('In Arbeit')
const selectedTasks = ref([{ id: 1 }])
const activeActionIndex = ref(2)

const home = ref({ icon: 'pi pi-home' })
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' },
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
    title: 'Webseite Relaunch',
    initials: 'M',
    owner: 'Max Mustermann',
    progress: 100,
    status: 'Fertig',
    severity: 'success',
    dueDate: '03.06.2026',
    overdue: false,
  },
  {
    id: 2,
    title: 'Mobile App',
    initials: 'A',
    owner: 'Anna Schmidt',
    progress: 45,
    status: 'In Arbeit',
    severity: 'warn',
    dueDate: '10.06.2026',
    overdue: false,
  },
  {
    id: 3,
    title: 'Marketing Kampagne',
    initials: 'L',
    owner: 'Lisa Weber',
    progress: 0,
    status: 'Offen',
    severity: 'info',
    dueDate: '18.05.2026',
    overdue: false,
  },
  {
    id: 4,
    title: 'API Migration',
    initials: 'P',
    owner: 'Paul Müller',
    progress: 72,
    status: 'Blockiert',
    severity: 'danger',
    dueDate: '12.05.2026',
    overdue: true,
  },
])

const actionItems = ref([
  {
    label: 'Bearbeiten',
    icon: 'pi pi-pen-to-square',
    command: () => {},
  },
  {
    label: 'Status aktualisieren',
    icon: 'pi pi-list-check',
    command: () => {},
  },
  {
    label: 'Löschen',
    icon: 'pi pi-trash',
    command: () => {},
  },
])
</script>