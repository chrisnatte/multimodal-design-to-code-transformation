<template>
  <main class="min-h-screen bg-white px-[58px] pt-3 font-sans text-[11px] text-slate-600">
    <section class="w-[1048px]">
      <header class="flex items-start gap-3">
        <Button
          icon="pi pi-arrow-left"
          text
          rounded
          severity="secondary"
          aria-label="Zurück"
          class="!mt-0 !h-8 !w-8 !text-slate-500"
        />
        <div>
          <h1 class="m-0 text-[22px] font-bold leading-6 text-slate-700">Projektaufgaben</h1>
          <p class="mt-1 text-[12px] text-slate-500">
            Hier werden alle Aufgaben des Projekts <strong class="font-semibold">Projekt 1</strong> aufgelistet.
          </p>
        </div>
      </header>

      <Breadcrumb
        :home="home"
        :model="breadcrumbs"
        class="!mt-3 !border-0 !bg-transparent !p-0 text-[11px]"
      />

      <div class="mt-5 flex items-end gap-[11px]">
        <div class="flex w-[154px] flex-col gap-1">
          <label for="search" class="font-medium text-slate-600">Suche</label>
          <InputText
            id="search"
            v-model="search"
            placeholder="Suche..."
            class="h-6 w-full !text-[11px]"
          />
        </div>

        <div class="relative flex w-[154px] flex-col gap-1">
          <label for="status-filter" class="font-medium text-slate-600">Status</label>
          <Select
            id="status-filter"
            v-model="statusFilter"
            :options="statusOptions"
            option-label="label"
            option-value="value"
            placeholder="Status auswählen"
            class="h-6 w-full !border-emerald-400 !text-[11px]"
          />
          <Menu
            :model="filterMenuItems"
            class="absolute left-0 top-[48px] z-20 w-[154px] !text-[11px] shadow-md"
          />
        </div>
      </div>

      <div class="relative mt-3">
        <DataTable
          :value="tasks"
          data-key="id"
          class="w-full text-[11px] [&_.p-datatable-table]:table-fixed [&_.p-datatable-tbody>tr>td]:border-slate-200 [&_.p-datatable-tbody>tr>td]:py-[7px] [&_.p-datatable-tbody>tr>td]:text-slate-600 [&_.p-datatable-thead>tr>th]:border-slate-200 [&_.p-datatable-thead>tr>th]:bg-white [&_.p-datatable-thead>tr>th]:py-[7px] [&_.p-datatable-thead>tr>th]:text-[10px] [&_.p-datatable-thead>tr>th]:font-semibold [&_.p-datatable-thead>tr>th]:text-slate-600"
        >
          <Column header="" header-style="width: 62px" body-style="width: 62px; text-align: center">
            <template #body="{ data }">
              <Checkbox v-model="data.checked" binary />
            </template>
          </Column>

          <Column field="task" header="Aufgabe" header-style="width: 364px">
            <template #body="{ data }">
              <span>{{ data.task }}</span>
            </template>
          </Column>

          <Column header="Verantwortlicher" header-style="width: 182px">
            <template #body="{ data }">
              <div class="flex items-center gap-2">
                <Avatar
                  :label="data.initial"
                  shape="circle"
                  class="!h-5 !w-5 !bg-slate-200 !text-[10px] !text-slate-500"
                />
                <span>{{ data.owner }}</span>
              </div>
            </template>
          </Column>

          <Column header="Status" header-style="width: 182px">
            <template #body="{ data }">
              <div class="flex items-center gap-2">
                <ProgressBar
                  :value="data.progress"
                  :show-value="false"
                  class="h-1 w-[129px] overflow-hidden !bg-slate-200 [&_.p-progressbar-value]:!bg-emerald-500"
                />
                <span class="whitespace-nowrap text-[10px]">{{ data.progress }} %</span>
              </div>
            </template>
          </Column>

          <Column header="Status" header-style="width: 114px">
            <template #body="{ data }">
              <Tag
                :value="data.status"
                :severity="data.severity"
                class="!px-1.5 !py-0 !text-[10px]"
              />
            </template>
          </Column>

          <Column header="Fällig" header-style="width: 89px">
            <template #body="{ data }">
              <span :class="{ 'text-red-500': data.overdue }">{{ data.due }}</span>
            </template>
          </Column>

          <Column header="Aktionen" header-style="width: 55px" body-style="width: 55px; text-align: center">
            <template #body="{ data }">
              <Button
                icon="pi pi-ellipsis-h"
                text
                rounded
                severity="secondary"
                size="small"
                :class="data.id === 2 ? '!bg-slate-100' : ''"
                aria-label="Aktionen"
                @click="activeTask = data.id"
              />
            </template>
          </Column>
        </DataTable>

        <Menu
          :model="actionMenuItems"
          class="absolute right-[-97px] top-[69px] z-10 w-[141px] !text-[11px] shadow-md"
        />
      </div>
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
import Menu from 'primevue/menu'
import ProgressBar from 'primevue/progressbar'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const search = ref('')
const statusFilter = ref(null)
const activeTask = ref(2)

const home = ref({ icon: 'pi pi-home' })
const breadcrumbs = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
])

const statusOptions = ref([
  { label: 'Offen', value: 'offen' },
  { label: 'In Arbeit', value: 'in-arbeit' },
  { label: 'Blockiert', value: 'blockiert' },
  { label: 'Fertig', value: 'fertig' }
])

const filterMenuItems = ref([
  { label: 'Offen' },
  { label: 'In Arbeit', class: 'bg-slate-100' },
  { label: 'Blockiert' },
  { label: 'Fertig' }
])

const actionMenuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])

const tasks = ref([
  {
    id: 1,
    task: 'Webseite Relaunch',
    initial: 'M',
    owner: 'Max Mustermann',
    progress: 100,
    status: 'Fertig',
    severity: 'success',
    due: '03.06.2026',
    overdue: false,
    checked: true
  },
  {
    id: 2,
    task: 'Mobile App',
    initial: 'A',
    owner: 'Anna Schmidt',
    progress: 45,
    status: 'In Arbeit',
    severity: 'warn',
    due: '10.06.2026',
    overdue: false,
    checked: false
  },
  {
    id: 3,
    task: 'Marketing Kampagne',
    initial: 'L',
    owner: 'Lisa Weber',
    progress: 0,
    status: 'Offen',
    severity: 'info',
    due: '18.05.2026',
    overdue: false,
    checked: false
  },
  {
    id: 4,
    task: 'API Migration',
    initial: 'P',
    owner: 'Paul Müller',
    progress: 72,
    status: 'Blockiert',
    severity: 'danger',
    due: '12.05.2026',
    overdue: true,
    checked: false
  }
])
</script>