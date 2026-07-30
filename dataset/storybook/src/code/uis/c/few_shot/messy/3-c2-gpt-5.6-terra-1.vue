<template>
  <main class="min-h-screen bg-white px-14 py-3 text-slate-700">
    <header class="flex items-start gap-3">
      <Button
        icon="pi pi-arrow-left"
        severity="secondary"
        text
        rounded
        aria-label="Zurück"
        class="!mt-0 !h-8 !w-8 !border !border-slate-200 !p-0"
      />
      <div>
        <h1 class="m-0 text-2xl font-semibold leading-7 text-slate-700">Projektaufgaben</h1>
        <p class="m-0 mt-1 text-xs text-slate-500">
          Hier werden alle Aufgaben des Projekts <strong>Projekt 1</strong> aufgelistet.
        </p>
      </div>
    </header>

    <Breadcrumb :home="home" :model="breadcrumbs" class="!mt-3 !border-0 !bg-transparent !p-0 !text-xs" />

    <section class="mt-5 w-[1048px]">
      <div class="mb-2 flex items-end gap-3">
        <div class="flex w-[154px] flex-col gap-1">
          <label for="search" class="text-xs font-medium text-slate-600">Suche</label>
          <InputText
            id="search"
            v-model="search"
            placeholder="Suche..."
            class="!h-6 !w-full !text-xs"
          />
        </div>

        <div class="flex w-[154px] flex-col gap-1">
          <label for="status-filter" class="text-xs font-medium text-slate-600">Status</label>
          <Select
            ref="statusSelect"
            v-model="selectedStatus"
            input-id="status-filter"
            :options="statusOptions"
            placeholder="Status auswählen"
            class="!h-6 !w-full !text-xs"
          />
        </div>
      </div>

      <DataTable
        :value="tasks"
        data-key="id"
        class="!text-xs"
        :pt="{
          table: 'w-full',
          headerCell: '!border-x-0 !border-t !border-slate-200 !bg-white !px-3 !py-2 !text-xs !font-semibold !text-slate-600',
          bodyCell: '!border-x-0 !border-slate-100 !px-3 !py-2 !text-xs',
        }"
      >
        <Column header-class="!w-12" body-class="!w-12">
          <template #header>
            <Checkbox v-model="selectAll" binary aria-label="Alle Aufgaben auswählen" />
          </template>
          <template #body="{ data }">
            <Checkbox v-model="selectedTasks" :value="data.id" :aria-label="data.name" />
          </template>
        </Column>

        <Column field="name" header="Aufgabe" header-class="!w-[365px]" />

        <Column header="Verantwortlicher" header-class="!w-[182px]">
          <template #body="{ data }">
            <div class="flex items-center gap-2">
              <Avatar :label="data.initial" shape="circle" class="!h-5 !w-5 !text-[9px]" />
              <span>{{ data.owner }}</span>
            </div>
          </template>
        </Column>

        <Column header="Status" header-class="!w-[182px]">
          <template #body="{ data }">
            <div class="flex items-center gap-2">
              <ProgressBar :value="data.progress" :show-value="false" class="!h-1 !w-[130px]" />
              <span class="w-6 text-right text-[10px]">{{ data.progress }} %</span>
            </div>
          </template>
        </Column>

        <Column header="Status" header-class="!w-[114px]">
          <template #body="{ data }">
            <Tag
              :value="data.status"
              :severity="data.severity"
              class="!px-1.5 !py-0 !text-[10px]"
            />
          </template>
        </Column>

        <Column header="Fällig" header-class="!w-[90px]">
          <template #body="{ data }">
            <span :class="{ 'text-red-500': data.overdue }">{{ data.due }}</span>
          </template>
        </Column>

        <Column header="Aktionen" header-class="!w-[62px]" body-class="!w-[62px]">
          <template #body="{ data }">
            <Button
              icon="pi pi-ellipsis-h"
              severity="secondary"
              text
              rounded
              aria-label="Aktionen"
              class="!h-6 !w-6 !p-0"
              @click="activeTask = data.id"
            />
          </template>
        </Column>
      </DataTable>

      <Menu
        :model="actionItems"
        class="relative ml-auto -mt-[74px] mr-[-96px] w-[142px] !shadow-md"
        :pt="{
          root: '!rounded-md !border !border-slate-200 !bg-white !p-1',
          list: '!flex !flex-col !gap-1 !p-0',
        }"
      >
        <template #item="{ item }">
          <Button
            :label="item.label"
            :icon="item.icon"
            severity="secondary"
            outlined
            class="!h-6 !w-full !justify-start !px-2 !text-[10px]"
          />
        </template>
      </Menu>
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
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
const selectedStatus = ref(null)
const selectedTasks = ref(['website'])
const selectAll = ref(false)
const activeTask = ref('mobile')
const statusSelect = ref(null)

const home = ref({ icon: 'pi pi-home' })
const breadcrumbs = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' },
])

const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig'])

const tasks = ref([
  {
    id: 'website',
    name: 'Webseite Relaunch',
    initial: 'M',
    owner: 'Max Mustermann',
    progress: 100,
    status: 'Fertig',
    severity: 'success',
    due: '03.06.2026',
    overdue: false,
  },
  {
    id: 'mobile',
    name: 'Mobile App',
    initial: 'A',
    owner: 'Anna Schmidt',
    progress: 45,
    status: 'In Arbeit',
    severity: 'warn',
    due: '10.06.2026',
    overdue: false,
  },
  {
    id: 'marketing',
    name: 'Marketing Kampagne',
    initial: 'L',
    owner: 'Lisa Weber',
    progress: 0,
    status: 'Offen',
    severity: 'info',
    due: '18.05.2026',
    overdue: false,
  },
  {
    id: 'api',
    name: 'API Migration',
    initial: 'P',
    owner: 'Paul Müller',
    progress: 72,
    status: 'Blockiert',
    severity: 'danger',
    due: '12.05.2026',
    overdue: true,
  },
])

const actionItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
  { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
  { label: 'Löschen', icon: 'pi pi-trash' },
])

onMounted(() => {
  statusSelect.value?.show()
})
</script>