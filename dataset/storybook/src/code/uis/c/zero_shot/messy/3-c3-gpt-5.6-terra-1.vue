<template>
  <main class="min-h-screen bg-white px-[58px] pt-3 font-sans text-slate-600">
    <header>
      <div class="flex items-center gap-3">
        <Button
          icon="pi pi-arrow-left"
          rounded
          outlined
          severity="secondary"
          size="small"
          aria-label="Zurück"
          class="!h-8 !w-8"
        />
        <div>
          <h1 class="m-0 text-[23px] font-bold leading-6 text-slate-700">Projektaufgaben</h1>
          <p class="mt-1 text-xs text-slate-500">
            Hier werden alle Aufgaben des Projekts <span class="font-semibold">Projekt 1</span> aufgelistet.
          </p>
        </div>
      </div>

      <Breadcrumb :home="home" :model="breadcrumbs" class="mt-3 !border-0 !bg-transparent !p-0 text-xs" />
    </header>

    <section class="mt-5 w-[1047px]">
      <div class="flex items-end gap-3">
        <div class="flex flex-col gap-1">
          <label for="search" class="text-[10px] font-medium text-slate-600">Suche</label>
          <InputText
            id="search"
            v-model="search"
            placeholder="Suche..."
            class="!h-6 !w-[154px] !text-[10px]"
          />
        </div>

        <div class="relative flex flex-col gap-1">
          <label for="status" class="text-[10px] font-medium text-slate-600">Status</label>
          <Select
            id="status"
            v-model="selectedStatus"
            :options="statusOptions"
            placeholder="Status auswählen"
            class="!h-6 !w-[154px] !text-[10px]"
          />
          <Listbox
            v-if="statusDropdownOpen"
            v-model="selectedStatus"
            :options="statusOptions"
            class="absolute top-[47px] z-20 !w-[154px] overflow-hidden !rounded-sm !border-slate-200 !text-[10px] shadow-md"
          />
        </div>
      </div>

      <DataTable
        :value="tasks"
        class="mt-2 text-[10px]"
        table-style="min-width: 100%"
        :pt="{
          table: { class: 'w-full' },
          headerCell: { class: '!border-x-0 !border-t !border-b !border-slate-200 !bg-white !px-3 !py-2 !text-[10px] !font-bold !text-slate-600' },
          bodyCell: { class: '!border-x-0 !border-t-0 !border-b !border-slate-200 !bg-white !px-3 !py-2 !text-[10px] !text-slate-600' }
        }"
      >
        <Column header-style="width: 50px">
          <template #header>
            <Checkbox v-model="allSelected" binary aria-label="Alle Aufgaben auswählen" />
          </template>
          <template #body="{ data }">
            <Checkbox v-model="data.selected" binary :aria-label="data.task" />
          </template>
        </Column>

        <Column field="task" header="Aufgabe" header-style="width: 365px">
          <template #body="{ data }">
            <span>{{ data.task }}</span>
          </template>
        </Column>

        <Column header="Verantwortlicher" header-style="width: 182px">
          <template #body="{ data }">
            <div class="flex items-center gap-2">
              <Avatar :label="data.initial" shape="circle" class="!h-5 !w-5 !bg-slate-200 !text-[9px] !text-slate-500" />
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
                class="!h-1 !w-[130px] !bg-slate-200"
                :pt="{ value: { class: data.progress ? '!bg-emerald-500' : '!bg-slate-200' } }"
              />
              <span class="whitespace-nowrap text-[9px]">{{ data.progress }} %</span>
            </div>
          </template>
        </Column>

        <Column header="Status" header-style="width: 114px">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="data.severity" class="!px-1.5 !py-0 !text-[9px]" />
          </template>
        </Column>

        <Column header="Fällig" header-style="width: 88px">
          <template #body="{ data }">
            <span :class="{ 'text-red-500': data.overdue }">{{ data.due }}</span>
          </template>
        </Column>

        <Column header="Aktionen" header-style="width: 66px">
          <template #body="{ data }">
            <Button
              icon="pi pi-ellipsis-h"
              text
              rounded
              size="small"
              aria-label="Aktionen"
              class="!h-6 !w-6 !text-slate-500"
              @click="activeMenu = data.id"
            />
          </template>
        </Column>
      </DataTable>

      <div
        v-if="activeMenu === 2"
        class="absolute left-[1062px] top-[254px] z-30 w-[141px] rounded border border-slate-200 bg-white p-2 shadow-md"
      >
        <Button
          label="Bearbeiten"
          icon="pi pi-pencil"
          outlined
          severity="secondary"
          size="small"
          class="!mb-1 !h-6 !w-full !justify-start !text-[10px]"
        />
        <Button
          label="Status aktualisieren"
          icon="pi pi-list"
          outlined
          severity="secondary"
          size="small"
          class="!mb-1 !h-6 !w-full !justify-start !text-[10px]"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          outlined
          severity="secondary"
          size="small"
          class="!h-6 !w-full !justify-start !text-[10px]"
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
import Listbox from 'primevue/listbox'
import ProgressBar from 'primevue/progressbar'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const search = ref('')
const selectedStatus = ref(null)
const statusDropdownOpen = ref(true)
const allSelected = ref(false)
const activeMenu = ref(2)

const home = ref({
  icon: 'pi pi-home'
})

const breadcrumbs = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
])

const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig'])

const tasks = ref([
  {
    id: 1,
    selected: true,
    task: 'Webseite Relaunch',
    initial: 'M',
    owner: 'Max Mustermann',
    progress: 100,
    status: 'Fertig',
    severity: 'success',
    due: '03.06.2026',
    overdue: false
  },
  {
    id: 2,
    selected: false,
    task: 'Mobile App',
    initial: 'A',
    owner: 'Anna Schmidt',
    progress: 45,
    status: 'In Arbeit',
    severity: 'warn',
    due: '10.06.2026',
    overdue: false
  },
  {
    id: 3,
    selected: false,
    task: 'Marketing Kampagne',
    initial: 'L',
    owner: 'Lisa Weber',
    progress: 0,
    status: 'Offen',
    severity: 'info',
    due: '18.05.2026',
    overdue: false
  },
  {
    id: 4,
    selected: false,
    task: 'API Migration',
    initial: 'P',
    owner: 'Paul Müller',
    progress: 72,
    status: 'Blockiert',
    severity: 'danger',
    due: '12.05.2026',
    overdue: true
  }
])
</script>