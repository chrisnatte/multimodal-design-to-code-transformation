<template>
  <main class="min-h-screen bg-white font-sans text-slate-600">
    <header class="flex items-start gap-3 px-[14px] pt-4">
      <Button
        icon="pi pi-arrow-left"
        text
        rounded
        aria-label="Zurück"
        class="!h-8 !w-8 !bg-slate-100 !text-slate-500"
      />
      <div class="-mt-1">
        <h1 class="text-[22px] font-bold leading-7 text-slate-700">Projektaufgaben</h1>
        <p class="text-[12px] leading-4 text-slate-500">
          Hier werden alle Aufgaben des Projekts <strong>Projekt 1</strong> aufgelistet.
        </p>
      </div>
    </header>

    <section class="ml-[58px] mt-4 w-[1048px]">
      <nav class="flex items-center gap-2 text-[10px] text-slate-400" aria-label="Breadcrumb">
        <i class="pi pi-home text-[10px]"></i>
        <i class="pi pi-angle-right text-[9px]"></i>
        <span>Projekte</span>
        <i class="pi pi-angle-right text-[9px]"></i>
        <span>Projekt 1</span>
        <i class="pi pi-angle-right text-[9px]"></i>
        <span>Aufgaben</span>
      </nav>

      <div class="relative mt-5 flex gap-[10px]">
        <div class="flex w-[155px] flex-col gap-1">
          <label for="search" class="text-[10px] text-slate-600">Suche</label>
          <span class="p-input-icon-left">
            <i class="pi pi-search !text-[10px] !text-slate-400"></i>
            <InputText
              id="search"
              v-model="searchTerm"
              placeholder="Suche..."
              class="!h-[25px] !w-[155px] !text-[10px]"
            />
          </span>
        </div>

        <div class="flex w-[154px] flex-col gap-1">
          <label for="status" class="text-[10px] text-slate-600">Status</label>
          <Select
            id="status"
            v-model="statusFilter"
            :options="statusOptions"
            placeholder="Status auswählen"
            class="!h-[25px] !w-[154px] !border-emerald-400 !text-[10px]"
          />
        </div>

        <div class="absolute left-[165px] top-[51px] z-20 w-[154px] rounded-[3px] border border-slate-200 bg-white p-1 shadow-md">
          <Listbox
            v-model="highlightedStatus"
            :options="statusOptions"
            class="border-0 !text-[10px]"
            :pt="{
              list: { class: 'p-0' },
              option: { class: '!min-h-[22px] !px-2 !py-1 !text-[10px]' }
            }"
          />
        </div>
      </div>

      <div class="relative mt-[13px]">
        <DataTable
          :value="tasks"
          dataKey="id"
          class="w-full !text-[10px] [&_.p-datatable-table]:table-fixed [&_.p-datatable-thead>tr>th]:!border-x-0 [&_.p-datatable-thead>tr>th]:!border-t-0 [&_.p-datatable-thead>tr>th]:!border-slate-200 [&_.p-datatable-thead>tr>th]:!bg-white [&_.p-datatable-thead>tr>th]:!px-2 [&_.p-datatable-thead>tr>th]:!py-[8px] [&_.p-datatable-thead>tr>th]:!text-[10px] [&_.p-datatable-tbody>tr>td]:!border-x-0 [&_.p-datatable-tbody>tr>td]:!border-slate-200 [&_.p-datatable-tbody>tr>td]:!px-2 [&_.p-datatable-tbody>tr>td]:!py-[8px]"
        >
          <Column :headerStyle="{ width: '62px' }" :bodyStyle="{ width: '62px' }">
            <template #header>
              <div class="flex justify-center">
                <Checkbox v-model="selectAll" :binary="true" aria-label="Alle Aufgaben auswählen" />
              </div>
            </template>
            <template #body="{ data }">
              <div class="flex justify-center">
                <Checkbox v-model="selectedTasks" :value="data.id" :aria-label="data.task" />
              </div>
            </template>
          </Column>

          <Column field="task" header="Aufgabe" :headerStyle="{ width: '364px' }" :bodyStyle="{ width: '364px' }" />

          <Column header="Verantwortlicher" :headerStyle="{ width: '182px' }" :bodyStyle="{ width: '182px' }">
            <template #body="{ data }">
              <div class="flex items-center gap-2 whitespace-nowrap">
                <Avatar
                  :label="data.initial"
                  shape="circle"
                  class="!h-5 !w-5 !bg-slate-200 !text-[9px] !text-slate-500"
                />
                <span>{{ data.assignee }}</span>
              </div>
            </template>
          </Column>

          <Column header="Status" :headerStyle="{ width: '182px' }" :bodyStyle="{ width: '182px' }">
            <template #body="{ data }">
              <div class="flex items-center gap-2">
                <ProgressBar
                  :value="data.progress"
                  :showValue="false"
                  class="!h-[4px] !w-[129px] [&_.p-progressbar-value]:!bg-emerald-500"
                />
                <span class="w-7 whitespace-nowrap text-[9px]">{{ data.progress }} %</span>
              </div>
            </template>
          </Column>

          <Column header="Status" :headerStyle="{ width: '114px' }" :bodyStyle="{ width: '114px' }">
            <template #body="{ data }">
              <Tag
                :value="data.status"
                :severity="data.severity"
                class="!rounded-[3px] !px-[5px] !py-[2px] [&_.p-tag-label]:!text-[9px]"
              />
            </template>
          </Column>

          <Column field="dueDate" header="Fällig" :headerStyle="{ width: '88px' }" :bodyStyle="{ width: '88px' }">
            <template #body="{ data }">
              <span :class="{ 'text-red-500': data.overdue }">{{ data.dueDate }}</span>
            </template>
          </Column>

          <Column header="Aktionen" :headerStyle="{ width: '56px' }" :bodyStyle="{ width: '56px' }">
            <template #body="{ index }">
              <div class="flex justify-center">
                <Button
                  icon="pi pi-ellipsis-h"
                  text
                  rounded
                  aria-label="Aktionen"
                  class="!h-6 !w-6 !p-0 !text-[10px]"
                  :class="{ '!bg-slate-100': index === 1 }"
                />
              </div>
            </template>
          </Column>
        </DataTable>

        <Menu
          :model="actionItems"
          class="absolute -right-[97px] top-[69px] z-10 !w-[142px] !rounded-[4px] !border-slate-200 !p-2 !shadow-md [&_.p-menu-item-content]:!rounded-[3px] [&_.p-menu-item-link]:!border [&_.p-menu-item-link]:!border-slate-200 [&_.p-menu-item-link]:!px-2 [&_.p-menu-item-link]:!py-[5px] [&_.p-menu-item-icon]:!mr-1 [&_.p-menu-item-icon]:!text-[10px] [&_.p-menu-item-label]:!text-[10px]"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
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

const searchTerm = ref('')
const statusFilter = ref(null)
const highlightedStatus = ref('In Arbeit')
const selectedTasks = ref(['webseite-relaunch'])
const selectAll = ref(false)

const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig'])

const tasks = ref([
  {
    id: 'webseite-relaunch',
    task: 'Webseite Relaunch',
    initial: 'M',
    assignee: 'Max Mustermann',
    progress: 100,
    status: 'Fertig',
    severity: 'success',
    dueDate: '03.06.2026',
    overdue: false
  },
  {
    id: 'mobile-app',
    task: 'Mobile App',
    initial: 'A',
    assignee: 'Anna Schmidt',
    progress: 45,
    status: 'In Arbeit',
    severity: 'warn',
    dueDate: '10.06.2026',
    overdue: false
  },
  {
    id: 'marketing-kampagne',
    task: 'Marketing Kampagne',
    initial: 'L',
    assignee: 'Lisa Weber',
    progress: 0,
    status: 'Offen',
    severity: 'info',
    dueDate: '18.05.2026',
    overdue: false
  },
  {
    id: 'api-migration',
    task: 'API Migration',
    initial: 'P',
    assignee: 'Paul Müller',
    progress: 72,
    status: 'Blockiert',
    severity: 'danger',
    dueDate: '12.05.2026',
    overdue: true
  }
])

const actionItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-list' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])
</script>