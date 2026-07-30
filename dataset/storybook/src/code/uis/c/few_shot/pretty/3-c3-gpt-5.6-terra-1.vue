<template>
  <main class="w-full p-4 text-xs text-slate-600">
    <section class="ml-10 w-[1048px]">
      <header class="flex items-start gap-3">
        <Button
          icon="pi pi-arrow-left"
          severity="secondary"
          variant="outlined"
          rounded
          size="small"
          aria-label="Zurück"
          class="!h-8 !w-8 !border-slate-300 !text-slate-500"
        />
        <div>
          <h1 class="m-0 text-2xl font-bold leading-7 text-slate-700">Projektaufgaben</h1>
          <p class="mt-1 text-xs text-slate-500">
            Hier werden alle Aufgaben des Projekts <strong>Projekt 1</strong> aufgelistet.
          </p>
        </div>
      </header>

      <Breadcrumb
        :home="home"
        :model="breadcrumbItems"
        class="ml-2 mt-4 !border-0 !bg-transparent !p-0 !text-xs"
      >
        <template #separator>
          <i class="pi pi-angle-right text-[9px] text-slate-400" />
        </template>
      </Breadcrumb>

      <div class="mt-5 flex items-end gap-3">
        <div class="flex w-[153px] flex-col gap-1">
          <label for="search" class="text-[10px] text-slate-600">Suche</label>
          <InputText
            id="search"
            v-model="search"
            placeholder="Suche..."
            size="small"
            class="w-full !text-xs"
          />
        </div>

        <div class="flex w-[154px] flex-col gap-1">
          <label for="status-filter" class="text-[10px] text-slate-600">Status</label>
          <Select
            ref="statusSelect"
            input-id="status-filter"
            v-model="selectedStatus"
            :options="statusOptions"
            placeholder="Status auswählen"
            size="small"
            class="w-full !text-xs"
          />
        </div>
      </div>

      <DataTable
        :value="tasks"
        data-key="id"
        class="mt-3 !text-xs"
        :pt="{
          table: '!text-xs',
          thead: '!text-xs',
          headerCell: '!border-x-0 !border-t-0 !border-slate-200 !px-2 !py-2 !font-bold !text-slate-700',
          bodyCell: '!border-x-0 !border-slate-200 !px-2 !py-2',
          column: { bodyCell: '!text-xs' },
        }"
      >
        <Column header-class="w-12" body-class="w-12 text-center">
          <template #header>
            <Checkbox v-model="selectAll" binary aria-label="Alle Aufgaben auswählen" />
          </template>
          <template #body="{ data }">
            <Checkbox v-model="taskSelection[data.id]" binary :aria-label="data.task" />
          </template>
        </Column>

        <Column field="task" header="Aufgabe" header-class="w-[365px]" />

        <Column header="Verantwortlicher" header-class="w-[182px]">
          <template #body="{ data }">
            <div class="flex items-center gap-2 whitespace-nowrap">
              <Avatar
                :label="data.initials"
                shape="circle"
                class="!h-5 !w-5 !bg-slate-200 !text-[9px] !text-slate-500"
              />
              <span>{{ data.owner }}</span>
            </div>
          </template>
        </Column>

        <Column header="Status" header-class="w-[183px]">
          <template #body="{ data }">
            <div class="flex items-center gap-2">
              <ProgressBar
                :value="data.progress"
                :show-value="false"
                class="!h-1 !w-32"
              />
              <span class="whitespace-nowrap text-[10px]">{{ data.progress }} %</span>
            </div>
          </template>
        </Column>

        <Column header="Status" header-class="w-[114px]">
          <template #body="{ data }">
            <Tag
              :value="data.status"
              :severity="data.severity"
              class="!px-1.5 !py-0.5 !text-[10px]"
            />
          </template>
        </Column>

        <Column field="dueDate" header="Fällig" header-class="w-[100px]">
          <template #body="{ data }">
            <span :class="data.overdue ? 'text-red-500' : ''">{{ data.dueDate }}</span>
          </template>
        </Column>

        <Column header="Aktionen" header-class="w-[60px]" body-class="w-[60px] text-center">
          <template #body="{ data }">
            <Button
              v-if="data.id === 4"
              ref="actionsButton"
              icon="pi pi-ellipsis-h"
              severity="secondary"
              variant="text"
              size="small"
              aria-label="Aktionen für API Migration"
              class="!h-6 !w-6 !p-0"
              @click="toggleActions"
            />
            <Button
              v-else
              icon="pi pi-ellipsis-h"
              severity="secondary"
              variant="text"
              size="small"
              :aria-label="`Aktionen für ${data.task}`"
              class="!h-6 !w-6 !p-0"
            />
          </template>
        </Column>
      </DataTable>

      <Popover ref="actionsPopover" :dismissable="false">
        <div class="flex w-[142px] flex-col gap-1">
          <Button
            label="Bearbeiten"
            icon="pi pi-pen-to-square"
            severity="secondary"
            variant="outlined"
            size="small"
            class="!h-6 !justify-start !text-[10px]"
          />
          <Button
            label="Status aktualisieren"
            icon="pi pi-list"
            severity="secondary"
            variant="outlined"
            size="small"
            class="!h-6 !justify-start !text-[10px]"
          />
          <Button
            label="Löschen"
            icon="pi pi-trash"
            severity="secondary"
            variant="outlined"
            size="small"
            class="!h-6 !justify-start !text-[10px]"
          />
        </div>
      </Popover>
    </section>
  </main>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import Avatar from 'primevue/avatar'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import InputText from 'primevue/inputtext'
import Popover from 'primevue/popover'
import ProgressBar from 'primevue/progressbar'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const search = ref('')
const selectedStatus = ref(null)
const selectAll = ref(false)
const statusSelect = ref()
const actionsPopover = ref()
const actionsButton = ref()

const taskSelection = ref({
  1: true,
  2: false,
  3: false,
  4: false,
})

const home = {
  icon: 'pi pi-home',
}

const breadcrumbItems = [
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' },
]

const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig'])

const tasks = ref([
  {
    id: 1,
    task: 'Webseite Relaunch',
    initials: 'M',
    owner: 'Max Mustermann',
    progress: 100,
    status: 'Fertig',
    severity: 'success',
    dueDate: '03.06.2026',
  },
  {
    id: 2,
    task: 'Mobile App',
    initials: 'A',
    owner: 'Anna Schmidt',
    progress: 45,
    status: 'In Arbeit',
    severity: 'warn',
    dueDate: '10.06.2026',
  },
  {
    id: 3,
    task: 'Marketing Kampagne',
    initials: 'L',
    owner: 'Lisa Weber',
    progress: 0,
    status: 'Offen',
    severity: 'info',
    dueDate: '18.05.2026',
  },
  {
    id: 4,
    task: 'API Migration',
    initials: 'P',
    owner: 'Paul Müller',
    progress: 72,
    status: 'Blockiert',
    severity: 'danger',
    dueDate: '12.05.2026',
    overdue: true,
  },
])

function toggleActions(event) {
  actionsPopover.value?.toggle(event)
}

onMounted(async () => {
  await nextTick()
  statusSelect.value?.show()

  const buttonElement = actionsButton.value?.$el
  if (buttonElement) {
    actionsPopover.value?.show({ currentTarget: buttonElement })
  }
})
</script>