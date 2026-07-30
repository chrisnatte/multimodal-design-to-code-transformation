<template>
  <main class="min-h-screen bg-white px-14 py-4 text-slate-700">
    <section class="w-[1050px]">
      <header class="flex items-center gap-3">
        <Button
          icon="pi pi-arrow-left"
          severity="secondary"
          text
          rounded
          aria-label="Zurück"
          class="!h-8 !w-8 !bg-slate-100"
        />
        <div class="flex flex-col">
          <h1 class="text-2xl font-bold leading-7">Projektaufgaben</h1>
          <p class="text-xs text-slate-500">
            Hier werden alle Aufgaben des Projekts <span class="font-semibold">Projekt 1</span> aufgelistet.
          </p>
        </div>
      </header>

      <Breadcrumb :home="home" :model="breadcrumbs" class="!mt-3 !border-0 !bg-transparent !p-0 !text-xs" />

      <div class="relative mt-5">
        <div class="flex gap-3">
          <div class="flex w-[154px] flex-col gap-1">
            <label for="task-search" class="text-[11px]">Suche</label>
            <span class="p-input-icon-left">
              <i class="pi pi-search text-xs text-slate-400" />
              <InputText
                id="task-search"
                v-model="searchTerm"
                placeholder="Suche..."
                class="!h-6 w-full !text-[11px]"
              />
            </span>
          </div>

          <div class="relative flex w-[154px] flex-col gap-1">
            <label for="status-filter" class="text-[11px]">Status</label>
            <Select
              id="status-filter"
              v-model="selectedStatus"
              :options="statusOptions"
              option-label="label"
              placeholder="Status auswählen"
              class="!h-6 w-full !text-[11px]"
            />
            <Listbox
              v-if="statusDropdownVisible"
              v-model="selectedStatus"
              :options="statusOptions"
              option-label="label"
              class="absolute top-[42px] z-20 w-full shadow-md"
              list-class="!py-1"
              @change="statusDropdownVisible = false"
            />
          </div>
        </div>

        <DataTable
          v-model:selection="selectedTasks"
          :value="tasks"
          data-key="id"
          class="mt-9 text-[11px]"
          table-style="table-layout: fixed"
        >
          <Column selection-mode="multiple" header-style="width: 51px" body-style="width: 51px" />
          <Column field="title" header="Aufgabe" header-style="width: 364px" />
          <Column header="Verantwortlicher" header-style="width: 182px">
            <template #body="{ data }">
              <div class="flex items-center gap-2">
                <Avatar :label="data.initials" shape="circle" class="!h-5 !w-5 !bg-slate-200 !text-[10px] !text-slate-500" />
                <span>{{ data.assignee }}</span>
              </div>
            </template>
          </Column>
          <Column header="Status" header-style="width: 182px">
            <template #body="{ data }">
              <div class="flex items-center gap-2">
                <ProgressBar :value="data.progress" :show-value="false" class="!h-1 w-[129px]" />
                <span class="w-7 text-[10px]">{{ data.progress }} %</span>
              </div>
            </template>
          </Column>
          <Column header="Status" header-style="width: 114px">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="statusSeverity(data.status)" class="!px-1.5 !py-0 !text-[10px]" />
            </template>
          </Column>
          <Column field="dueDate" header="Fällig" header-style="width: 88px">
            <template #body="{ data }">
              <span :class="{ 'text-red-500': data.status === 'Blockiert' }">{{ data.dueDate }}</span>
            </template>
          </Column>
          <Column header="Aktionen" header-style="width: 65px" body-class="!text-center">
            <template #body="{ data }">
              <Button
                icon="pi pi-ellipsis-h"
                severity="secondary"
                text
                rounded
                aria-label="Aktionen"
                class="!h-6 !w-6"
                @click="activeTask = data.id; actionMenuVisible = !actionMenuVisible"
              />
            </template>
          </Column>
        </DataTable>

        <div
          v-if="actionMenuVisible"
          class="absolute right-[-98px] top-[148px] z-10 flex w-[142px] flex-col gap-1 rounded-md border border-slate-200 bg-white p-2 shadow-md"
        >
          <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined class="!h-6 !justify-start !text-[10px]" />
          <Button label="Status aktualisieren" icon="pi pi-list-check" severity="secondary" outlined class="!h-6 !justify-start !text-[10px]" />
          <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="!h-6 !justify-start !text-[10px]" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
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

const searchTerm = ref('')
const selectedStatus = ref(null)
const selectedTasks = ref([{ id: 1 }])
const statusDropdownVisible = ref(true)
const actionMenuVisible = ref(true)
const activeTask = ref(3)

const home = { icon: 'pi pi-home' }
const breadcrumbs = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
])

const statusOptions = ref([
  { label: 'Offen' },
  { label: 'In Arbeit' },
  { label: 'Blockiert' },
  { label: 'Fertig' }
])

const tasks = ref([
  { id: 1, title: 'Webseite Relaunch', initials: 'M', assignee: 'Max Mustermann', progress: 100, status: 'Fertig', dueDate: '03.06.2026' },
  { id: 2, title: 'Mobile App', initials: 'A', assignee: 'Anna Schmidt', progress: 45, status: 'In Arbeit', dueDate: '10.06.2026' },
  { id: 3, title: 'Marketing Kampagne', initials: 'L', assignee: 'Lisa Weber', progress: 0, status: 'Offen', dueDate: '18.05.2026' },
  { id: 4, title: 'API Migration', initials: 'P', assignee: 'Paul Müller', progress: 72, status: 'Blockiert', dueDate: '12.05.2026' }
])

function statusSeverity(status: string) {
  if (status === 'Fertig') return 'success'
  if (status === 'In Arbeit') return 'warn'
  if (status === 'Blockiert') return 'danger'
  return 'info'
}
</script>