<template>
  <main class="min-h-screen bg-white px-20 py-5 text-slate-700">
    <section class="w-[1470px]">
      <header class="flex items-start gap-4">
        <Button
          icon="pi pi-arrow-left"
          severity="secondary"
          variant="text"
          rounded
          aria-label="Zurück"
          class="!mt-0.5 !h-12 !w-12 !bg-slate-100 !text-slate-500"
        />
        <div class="flex flex-col gap-1">
          <h1 class="m-0 text-[32px] font-bold leading-9 text-slate-700">Projektaufgaben</h1>
          <p class="m-0 text-base text-slate-500">
            Hier werden alle Aufgaben des Projekts <strong>Projekt 1</strong> aufgelistet.
          </p>
        </div>
      </header>

      <div class="ml-14 mt-5">
        <Breadcrumb :home="home" :model="breadcrumbItems" class="!bg-transparent !p-0">
          <template #separator>
            <i class="pi pi-angle-right text-xs text-slate-400" />
          </template>
        </Breadcrumb>
      </div>

      <div class="ml-14 mt-7 flex items-start gap-4">
        <div class="flex w-[216px] flex-col gap-2">
          <label for="search">Suche</label>
          <IconField>
            <InputIcon>
              <i class="pi pi-search text-sm" />
            </InputIcon>
            <InputText
              id="search"
              v-model="search"
              placeholder="Suche..."
              class="w-full"
            />
          </IconField>
        </div>

        <div class="relative flex w-[216px] flex-col gap-2">
          <label for="status-filter">Status</label>
          <Select
            v-model="selectedStatus"
            input-id="status-filter"
            :options="statusOptions"
            placeholder="Status auswählen"
            class="w-full"
          />
          <Menu
            :model="statusMenuItems"
            class="absolute left-0 top-[60px] z-20 w-full shadow-md"
            :pt="{
              root: 'border border-slate-200',
              list: '!p-1',
            }"
          />
        </div>
      </div>

      <DataTable
        v-model:selection="selectedTasks"
        :value="tasks"
        data-key="id"
        class="ml-14 mt-5"
        table-style="min-width: 100%;"
        :pt="{
          thead: 'border-b border-slate-200',
          headerRow: 'border-b border-slate-200',
          bodyRow: 'border-b border-slate-200',
        }"
      >
        <Column selection-mode="multiple" header-class="w-14" body-class="w-14">
          <template #header>
            <Checkbox v-model="selectAll" input-id="select-all" binary />
          </template>
        </Column>

        <Column field="title" header="Aufgabe" header-class="w-[510px]" body-class="w-[510px]" />

        <Column header="Verantwortlicher" header-class="w-[255px]" body-class="w-[255px]">
          <template #body="{ data }">
            <div class="flex items-center gap-3">
              <Avatar :label="data.initials" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600" />
              <span>{{ data.owner }}</span>
            </div>
          </template>
        </Column>

        <Column header="Status" header-class="w-[255px]" body-class="w-[255px]">
          <template #body="{ data }">
            <div class="flex items-center gap-3">
              <ProgressBar
                :value="data.progress"
                :show-value="false"
                class="h-1.5 w-[182px]"
                :pt="{
                  value: data.progress === 0 ? 'bg-slate-200' : '',
                }"
              />
              <span class="text-xs">{{ data.progress }} %</span>
            </div>
          </template>
        </Column>

        <Column header="Status" header-class="w-[160px]" body-class="w-[160px]">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="statusSeverity(data.status)" />
          </template>
        </Column>

        <Column header="Fällig" header-class="w-[125px]" body-class="w-[125px]">
          <template #body="{ data }">
            <span :class="{ 'text-red-500': data.overdue }">{{ data.due }}</span>
          </template>
        </Column>

        <Column header="Aktionen" header-class="w-[85px]" body-class="w-[85px]">
          <template #body="{ data }">
            <div class="relative flex justify-center">
              <Button
                icon="pi pi-ellipsis-h"
                severity="secondary"
                variant="text"
                rounded
                aria-label="Aktionen"
                :class="{ '!bg-slate-100': data.id === 2 }"
              />
              <Menu
                v-if="data.id === 2"
                :model="actionItems"
                class="absolute right-0 top-10 z-10 w-[200px] shadow-md"
                :pt="{
                  root: 'border border-slate-200',
                  list: 'flex flex-col gap-2 !p-2.5',
                }"
              >
                <template #item="{ item }">
                  <Button
                    :label="item.label"
                    :icon="item.icon"
                    severity="secondary"
                    variant="outlined"
                    class="w-full !justify-start !text-sm"
                  />
                </template>
              </Menu>
            </div>
          </template>
        </Column>
      </DataTable>
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
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import Menu from 'primevue/menu'
import ProgressBar from 'primevue/progressbar'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const search = ref('')
const selectedStatus = ref(null)
const selectedTasks = ref([])
const selectAll = ref(false)

const home = ref({ icon: 'pi pi-home' })
const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' },
])

const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig'])
const statusMenuItems = ref([
  { label: 'Offen' },
  { label: 'In Arbeit', class: 'bg-slate-100' },
  { label: 'Blockiert' },
  { label: 'Fertig' },
])

const tasks = ref([
  {
    id: 1,
    title: 'Webseite Relaunch',
    owner: 'Max Mustermann',
    initials: 'M',
    progress: 100,
    status: 'Fertig',
    due: '03.06.2026',
    overdue: false,
  },
  {
    id: 2,
    title: 'Mobile App',
    owner: 'Anna Schmidt',
    initials: 'A',
    progress: 45,
    status: 'In Arbeit',
    due: '10.06.2026',
    overdue: false,
  },
  {
    id: 3,
    title: 'Marketing Kampagne',
    owner: 'Lisa Weber',
    initials: 'L',
    progress: 0,
    status: 'Offen',
    due: '18.05.2026',
    overdue: false,
  },
  {
    id: 4,
    title: 'API Migration',
    owner: 'Paul Müller',
    initials: 'P',
    progress: 72,
    status: 'Blockiert',
    due: '12.05.2026',
    overdue: true,
  },
])

const actionItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
  { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
  { label: 'Löschen', icon: 'pi pi-trash' },
])

function statusSeverity(status: string) {
  if (status === 'Fertig') return 'success'
  if (status === 'In Arbeit') return 'warn'
  if (status === 'Blockiert') return 'danger'
  return 'info'
}
</script>