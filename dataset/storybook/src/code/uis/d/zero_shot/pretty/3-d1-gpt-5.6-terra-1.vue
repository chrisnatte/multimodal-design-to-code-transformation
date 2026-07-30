<template>
  <div class="min-h-screen bg-white px-[58px] py-4 font-sans text-slate-600">
    <div class="flex items-center gap-3">
      <Button
        icon="pi pi-arrow-circle-left"
        severity="secondary"
        rounded
        text
        aria-label="Zurück"
        class="!h-8 !w-8 !bg-slate-100 !text-slate-500"
      />
      <div class="flex flex-col gap-0.5">
        <h1 class="m-0 text-2xl font-bold leading-7 text-slate-700">Projektaufgaben</h1>
        <span class="text-xs text-slate-500">
          Hier werden alle Aufgaben des Projekts <strong>Projekt 1</strong> aufgelistet.
        </span>
      </div>
    </div>

    <Breadcrumb :home="home" :model="breadcrumbItems" class="!mt-3 !border-0 !bg-transparent !p-0 !text-xs" />

    <div class="mt-5 flex items-start gap-3">
      <div class="flex w-[153px] flex-col gap-1">
        <label for="search" class="text-[10px] text-slate-600">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search !text-[10px]" />
          <InputText
            id="search"
            v-model="search"
            placeholder="Suche..."
            class="!h-6 !w-full !text-[10px]"
          />
        </IconField>
      </div>

      <div class="flex w-[154px] flex-col gap-1">
        <label for="status" class="text-[10px] text-slate-600">Status</label>
        <Select
          ref="statusSelect"
          v-model="selectedStatus"
          input-id="status"
          :options="statusOptions"
          placeholder="Status auswählen"
          class="!h-6 !w-full !text-[10px]"
          @change="selectedStatus = $event.value"
        />
      </div>
    </div>

    <div class="relative mt-9 w-[1048px]">
      <DataTable
        v-model:selection="selectedTasks"
        :value="tasks"
        data-key="id"
        class="!text-[10px]"
        table-style="min-width: 1048px"
      >
        <Column selection-mode="multiple" header-style="width: 62px" body-style="width: 62px" />
        <Column field="task" header="Aufgabe" header-style="width: 364px" body-style="width: 364px" />
        <Column header="Verantwortlicher" header-style="width: 182px" body-style="width: 182px">
          <template #body="{ data }">
            <div class="flex items-center gap-2">
              <Avatar :label="data.initials" shape="circle" class="!h-5 !w-5 !bg-slate-200 !text-[9px] !text-slate-500" />
              <span>{{ data.owner }}</span>
            </div>
          </template>
        </Column>
        <Column header="Status" header-style="width: 182px" body-style="width: 182px">
          <template #body="{ data }">
            <div class="flex items-center gap-2">
              <ProgressBar
                :value="data.progress"
                :show-value="false"
                class="!h-1.5 !w-[129px]"
              />
              <span class="w-6 text-[9px]">{{ data.progress }} %</span>
            </div>
          </template>
        </Column>
        <Column header="Status" header-style="width: 114px" body-style="width: 114px">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="data.severity" class="!px-1.5 !py-0.5 !text-[9px]" />
          </template>
        </Column>
        <Column field="due" header="Fällig" header-style="width: 88px" body-style="width: 88px">
          <template #body="{ data }">
            <span :class="{ 'text-red-500': data.id === 4 }">{{ data.due }}</span>
          </template>
        </Column>
        <Column header="Aktionen" header-style="width: 56px" body-style="width: 56px">
          <template #body="{ data }">
            <div class="flex justify-center">
              <Button
                icon="pi pi-ellipsis-h"
                text
                severity="secondary"
                size="small"
                aria-label="Aktionen"
                class="!h-6 !w-6 !p-0"
                :class="{ '!bg-slate-100': data.id === 2 }"
                @click="activeTask = data.id"
              />
            </div>
          </template>
        </Column>
      </DataTable>

      <div
        v-if="activeTask === 2"
        class="absolute left-[1004px] top-[70px] z-20 flex w-[142px] flex-col gap-2 rounded-md border border-slate-200 bg-white p-2 shadow-md"
      >
        <Button
          label="Bearbeiten"
          icon="pi pi-pen-to-square"
          severity="secondary"
          outlined
          size="small"
          class="!h-6 !justify-start !text-[10px]"
        />
        <Button
          label="Status aktualisieren"
          icon="pi pi-list-check"
          severity="secondary"
          outlined
          size="small"
          class="!h-6 !justify-start !text-[10px]"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          severity="secondary"
          outlined
          size="small"
          class="!h-6 !justify-start !text-[10px]"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import Avatar from 'primevue/avatar'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import ProgressBar from 'primevue/progressbar'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const search = ref('')
const selectedStatus = ref(null)
const selectedTasks = ref([])
const activeTask = ref(2)
const statusSelect = ref()

const home = ref({
  icon: 'pi pi-home'
})

const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
])

const statusOptions = ref([
  'Offen',
  'In Arbeit',
  'Blockiert',
  'Fertig'
])

const tasks = ref([
  {
    id: 1,
    task: 'Webseite Relaunch',
    initials: 'M',
    owner: 'Max Mustermann',
    progress: 100,
    status: 'Fertig',
    severity: 'success',
    due: '03.06.2026'
  },
  {
    id: 2,
    task: 'Mobile App',
    initials: 'A',
    owner: 'Anna Schmidt',
    progress: 45,
    status: 'In Arbeit',
    severity: 'warn',
    due: '10.06.2026'
  },
  {
    id: 3,
    task: 'Marketing Kampagne',
    initials: 'L',
    owner: 'Lisa Weber',
    progress: 0,
    status: 'Offen',
    severity: 'info',
    due: '18.05.2026'
  },
  {
    id: 4,
    task: 'API Migration',
    initials: 'P',
    owner: 'Paul Müller',
    progress: 72,
    status: 'Blockiert',
    severity: 'danger',
    due: '12.05.2026'
  }
])

onMounted(async () => {
  selectedTasks.value = [tasks.value[0]]
  await nextTick()
  statusSelect.value?.show()
})
</script>