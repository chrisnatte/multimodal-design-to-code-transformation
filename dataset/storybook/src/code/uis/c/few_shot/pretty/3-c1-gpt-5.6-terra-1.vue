<template>
  <main class="min-h-screen bg-white px-4 py-5 text-slate-700">
    <section class="w-full max-w-[1472px]">
      <header class="flex items-start gap-4">
        <Button
          icon="pi pi-arrow-left"
          severity="secondary"
          text
          rounded
          aria-label="Zurück"
          class="!mt-0 !h-12 !w-12 !bg-slate-100 !text-slate-500"
        />
        <div class="flex flex-col gap-1">
          <h1 class="m-0 text-[32px] font-semibold leading-9 text-slate-700">Projektaufgaben</h1>
          <p class="m-0 text-base text-slate-500">
            Hier werden alle Aufgaben des Projekts <strong class="font-semibold">Projekt 1</strong> aufgelistet.
          </p>
          <Breadcrumb :model="breadcrumbItems" class="!mt-3 !border-0 !bg-transparent !p-0 !text-sm" />
        </div>
      </header>

      <div class="mt-7 flex items-end gap-4">
        <div class="flex w-[216px] flex-col gap-2">
          <label for="search" class="text-sm text-slate-700">Suche</label>
          <IconField>
            <InputIcon class="pi pi-search" />
            <InputText v-model="search" input-id="search" placeholder="Suche..." class="w-full" />
          </IconField>
        </div>

        <div class="flex w-[216px] flex-col gap-2">
          <label for="status-filter" class="text-sm text-slate-700">Status</label>
          <Select
            ref="statusSelect"
            v-model="statusFilter"
            input-id="status-filter"
            :options="filterStatuses"
            placeholder="Status auswählen"
            class="w-full"
          />
        </div>
      </div>

      <div class="relative mt-1">
        <DataTable :value="tasks" class="!text-sm">
          <Column header-class="!w-[72px]" body-class="!w-[72px]">
            <template #header>
              <Checkbox v-model="allTasksSelected" binary aria-label="Alle Aufgaben auswählen" />
            </template>
            <template #body="{ data }">
              <Checkbox v-model="selectedTasks" :value="data.id" :aria-label="data.task" />
            </template>
          </Column>

          <Column field="task" header="Aufgabe" header-class="!font-semibold" body-class="!w-[35%]" />

          <Column header="Verantwortlicher" header-class="!font-semibold">
            <template #body="{ data }">
              <div class="flex items-center gap-3">
                <Avatar :label="data.initials" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-xs !text-slate-600" />
                <span>{{ data.assignee }}</span>
              </div>
            </template>
          </Column>

          <Column header="Status" header-class="!font-semibold">
            <template #body="{ data }">
              <div class="flex items-center gap-3">
                <ProgressBar :value="data.progress" :show-value="false" class="h-1 w-[182px]" />
                <span class="w-8 text-xs">{{ data.progress }} %</span>
              </div>
            </template>
          </Column>

          <Column header="Status" header-class="!font-semibold">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="data.severity" class="!px-2 !py-1 !text-xs" />
            </template>
          </Column>

          <Column header="Fällig" header-class="!font-semibold">
            <template #body="{ data }">
              <span :class="{ 'text-red-500': data.overdue }">{{ data.dueDate }}</span>
            </template>
          </Column>

          <Column header="Aktionen" header-class="!font-semibold" body-class="!w-[82px]">
            <template #body="{ data }">
              <Button
                icon="pi pi-ellipsis-h"
                severity="secondary"
                text
                rounded
                :aria-label="`Aktionen für ${data.task}`"
                :class="{ '!bg-slate-100': data.id === 2 }"
              />
            </template>
          </Column>
        </DataTable>

        <Menu
          :model="actionItems"
          class="absolute right-[-137px] top-[148px] z-10 w-[200px] !rounded-md !p-2 shadow-md"
        >
          <template #item="{ item, props }">
            <a v-bind="props.action" class="flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2.5 text-sm text-slate-500">
              <span :class="item.icon" />
              <span>{{ item.label }}</span>
            </a>
          </template>
        </Menu>
      </div>
    </section>
  </main>
</template>

<script setup>
import { nextTick, onMounted, ref, useTemplateRef } from 'vue'
import Avatar from 'primevue/avatar'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import Menu from 'primevue/menu'
import ProgressBar from 'primevue/progressbar'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const search = ref('')
const statusFilter = ref(null)
const selectedTasks = ref([1])
const allTasksSelected = ref(false)
const statusSelect = useTemplateRef('statusSelect')

const filterStatuses = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig'])

const breadcrumbItems = ref([
  { icon: 'pi pi-home', label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
])

const tasks = ref([
  { id: 1, task: 'Webseite Relaunch', initials: 'M', assignee: 'Max Mustermann', progress: 100, status: 'Fertig', severity: 'success', dueDate: '03.06.2026', overdue: false },
  { id: 2, task: 'Mobile App', initials: 'A', assignee: 'Anna Schmidt', progress: 45, status: 'In Arbeit', severity: 'warn', dueDate: '10.06.2026', overdue: false },
  { id: 3, task: 'Marketing Kampagne', initials: 'L', assignee: 'Lisa Weber', progress: 0, status: 'Offen', severity: 'info', dueDate: '18.05.2026', overdue: false },
  { id: 4, task: 'API Migration', initials: 'P', assignee: 'Paul Müller', progress: 72, status: 'Blockiert', severity: 'danger', dueDate: '12.05.2026', overdue: true }
])

const actionItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
  { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])

onMounted(async () => {
  await nextTick()
  statusSelect.value?.show()
})
</script>