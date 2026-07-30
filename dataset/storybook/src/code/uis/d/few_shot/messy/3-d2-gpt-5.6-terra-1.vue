<template>
  <main class="min-h-screen bg-white px-4 py-5 text-slate-700">
    <section class="mx-auto w-full max-w-[1756px]">
      <header class="flex items-center gap-4">
        <Button
          icon="pi pi-arrow-left"
          severity="secondary"
          text
          rounded
          aria-label="Zurück"
          class="!h-12 !w-12 !bg-slate-100"
        />
        <div class="flex flex-col">
          <h1 class="m-0 text-[32px] font-bold leading-10 text-slate-700">Projektaufgaben</h1>
          <p class="m-0 text-base text-slate-500">
            Hier werden alle Aufgaben des Projekts <strong>Projekt 1</strong> aufgelistet.
          </p>
        </div>
      </header>

      <Breadcrumb :home="home" :model="breadcrumbs" class="mt-5 !border-0 !bg-transparent !p-0" />

      <div class="mt-7 flex gap-4">
        <div class="flex w-[216px] flex-col gap-2">
          <label for="task-search" class="text-sm">Suche</label>
          <InputGroup>
            <InputGroupAddon><i class="pi pi-search" /></InputGroupAddon>
            <InputText v-model="search" input-id="task-search" placeholder="Suche..." />
          </InputGroup>
        </div>

        <div class="relative flex w-[216px] flex-col gap-2">
          <label for="status-filter" class="text-sm">Status</label>
          <Select
            v-model="selectedStatus"
            input-id="status-filter"
            :options="statusOptions"
            placeholder="Status auswählen"
            class="w-full"
          />
          <div
            class="absolute top-[69px] z-20 flex w-full flex-col rounded-md border border-slate-200 bg-white p-1 shadow-md"
          >
            <Button
              v-for="status in statusOptions"
              :key="status"
              :label="status"
              text
              severity="secondary"
              class="!h-[31px] !justify-start !px-2.5 !text-sm"
              :class="{ '!bg-slate-100': status === 'In Arbeit' }"
              @click="selectedStatus = status"
            />
          </div>
        </div>
      </div>

      <div class="relative mt-4">
        <DataTable
          v-model:selection="selectedTasks"
          :value="tasks"
          data-key="name"
          class="w-full"
          :pt="{
            table: 'min-w-[1100px]',
            headerCell: '!border-x-0 !border-t-0 !px-3.5 !py-2.5',
            bodyCell: '!border-x-0 !px-3.5 !py-2.5',
          }"
        >
          <Column selection-mode="multiple" header-style="width: 72px" body-style="width: 72px" />
          <Column field="name" header="Aufgabe" header-style="width: 512px" />
          <Column header="Verantwortlicher" header-style="width: 256px">
            <template #body="{ data }">
              <div class="flex items-center gap-3">
                <Avatar :label="data.initials" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-sm" />
                <span>{{ data.assignee }}</span>
              </div>
            </template>
          </Column>
          <Column header="Status" header-style="width: 256px">
            <template #body="{ data }">
              <div class="flex items-center gap-3">
                <ProgressBar
                  :value="data.progress"
                  :show-value="false"
                  class="!h-1.5 w-[182px] !bg-slate-200"
                />
                <span class="w-9 text-xs">{{ data.progress }} %</span>
              </div>
            </template>
          </Column>
          <Column header="Status" header-style="width: 160px">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="data.severity" class="!text-xs" />
            </template>
          </Column>
          <Column header="Fällig" header-style="width: 124px">
            <template #body="{ data }">
              <span :class="{ 'text-red-500': data.overdue }">{{ data.dueDate }}</span>
            </template>
          </Column>
          <Column header="Aktionen" header-style="width: 92px" body-style="width: 92px">
            <template #body="{ data }">
              <Button
                icon="pi pi-ellipsis-h"
                severity="secondary"
                text
                aria-label="Aktionen"
                :class="{ '!bg-slate-100': data.name === 'Mobile App' }"
                @click="activeTask = data.name"
              />
            </template>
          </Column>
        </DataTable>

        <Menu
          v-if="activeTask"
          :model="actionItems"
          class="absolute right-[-136px] top-[147px] z-10 w-[200px] !border-slate-200 !p-2.5 !shadow-md"
        >
          <template #item="{ item }">
            <Button
              :label="item.label"
              :icon="item.icon"
              severity="secondary"
              outlined
              class="mb-2 !h-[33px] w-full !justify-start !text-sm last:mb-0"
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
import Menu from 'primevue/menu'
import ProgressBar from 'primevue/progressbar'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const search = ref('')
const selectedStatus = ref<string | null>(null)
const selectedTasks = ref<Array<{ name: string }>>([])
const activeTask = ref('Marketing Kampagne')

const home = ref({ icon: 'pi pi-home' })
const breadcrumbs = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' },
])

const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig'])

const tasks = ref([
  {
    name: 'Webseite Relaunch',
    initials: 'M',
    assignee: 'Max Mustermann',
    progress: 100,
    status: 'Fertig',
    severity: 'success',
    dueDate: '03.06.2026',
    overdue: false,
  },
  {
    name: 'Mobile App',
    initials: 'A',
    assignee: 'Anna Schmidt',
    progress: 45,
    status: 'In Arbeit',
    severity: 'warn',
    dueDate: '10.06.2026',
    overdue: false,
  },
  {
    name: 'Marketing Kampagne',
    initials: 'L',
    assignee: 'Lisa Weber',
    progress: 0,
    status: 'Offen',
    severity: 'info',
    dueDate: '18.05.2026',
    overdue: false,
  },
  {
    name: 'API Migration',
    initials: 'P',
    assignee: 'Paul Müller',
    progress: 72,
    status: 'Blockiert',
    severity: 'danger',
    dueDate: '12.05.2026',
    overdue: true,
  },
])

selectedTasks.value = [tasks.value[0]]

const actionItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
  { label: 'Löschen', icon: 'pi pi-trash' },
])
</script>