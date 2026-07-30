<template>
  <main class="min-h-screen bg-white px-14 py-4 text-slate-700">
    <header class="flex items-start gap-3">
      <Button
        icon="pi pi-arrow-left"
        severity="secondary"
        text
        rounded
        aria-label="Zurück"
        class="!h-8 !w-8 !border !border-slate-200"
      />
      <div>
        <h1 class="m-0 text-2xl font-semibold text-slate-700">Projektaufgaben</h1>
        <p class="mt-0.5 text-sm text-slate-500">
          Hier werden alle Aufgaben des Projekts <span class="font-semibold">Projekt 1</span> aufgelistet.
        </p>
      </div>
    </header>

    <Breadcrumb :model="breadcrumbs" class="mt-4 !border-0 !bg-transparent !p-0 text-xs" />

    <section class="mt-6">
      <div class="mb-2 flex items-end gap-3">
        <div class="flex w-40 flex-col gap-1">
          <label for="search" class="text-xs text-slate-600">Suche</label>
          <InputText
            id="search"
            v-model="search"
            placeholder="Suche..."
            class="!h-7 !w-full !text-xs"
          />
        </div>

        <div class="flex w-40 flex-col gap-1">
          <label for="status-filter" class="text-xs text-slate-600">Status</label>
          <Select
            ref="statusSelect"
            id="status-filter"
            v-model="selectedStatus"
            :options="statusOptions"
            placeholder="Status auswählen"
            class="!h-7 !w-full !text-xs"
            :pt="{
              label: 'flex items-center !text-xs !py-0',
              dropdown: '!w-7',
              overlay: '!text-xs',
              option: '!px-3 !py-1.5 !text-xs',
            }"
          />
        </div>
      </div>

      <DataTable
        :value="filteredTasks"
        data-key="name"
        class="w-full text-xs"
        :pt="{
          table: '!text-xs',
          headerCell: '!border-x-0 !border-t !border-slate-200 !bg-white !px-3 !py-2 !text-xs !font-semibold !text-slate-700',
          bodyCell: '!border-x-0 !border-b !border-slate-200 !px-3 !py-2',
        }"
      >
        <Column header-class="!w-12" body-class="!w-12">
          <template #header>
            <Checkbox v-model="allSelected" binary aria-label="Alle auswählen" />
          </template>
          <template #body="{ data }">
            <Checkbox v-model="data.selected" binary :aria-label="data.name" />
          </template>
        </Column>

        <Column field="name" header="Aufgabe" />

        <Column header="Verantwortlicher" header-class="!w-48" body-class="!w-48">
          <template #body="{ data }">
            <div class="flex items-center gap-2">
              <Avatar :label="data.initial" shape="circle" class="!h-5 !w-5 !bg-slate-200 !text-[10px] !text-slate-600" />
              <span>{{ data.assignee }}</span>
            </div>
          </template>
        </Column>

        <Column header="Status" header-class="!w-44" body-class="!w-44">
          <template #body="{ data }">
            <div class="flex items-center gap-2">
              <ProgressBar
                :value="data.progress"
                :show-value="false"
                class="!h-1.5 !w-32"
              />
              <span class="w-6 text-right text-[10px]">{{ data.progress }} %</span>
            </div>
          </template>
        </Column>

        <Column header="Status" header-class="!w-28" body-class="!w-28">
          <template #body="{ data }">
            <Tag
              :value="data.status"
              :severity="tagSeverity(data.status)"
              class="!px-1.5 !py-0 !text-[10px]"
            />
          </template>
        </Column>

        <Column header="Fällig" header-class="!w-24" body-class="!w-24">
          <template #body="{ data }">
            <span :class="{ 'text-red-500': data.overdue }">{{ data.dueDate }}</span>
          </template>
        </Column>

        <Column header="Aktionen" header-class="!w-16" body-class="!w-16">
          <template #body="{ index }">
            <div class="relative flex justify-center">
              <Button
                icon="pi pi-ellipsis-h"
                severity="secondary"
                text
                rounded
                aria-label="Aktionen"
                class="!h-6 !w-6"
                @click="openActionIndex = openActionIndex === index ? null : index"
              />
              <Menu
                v-if="openActionIndex === index"
                :model="actionItems"
                class="absolute right-0 top-7 z-10 !w-36 !shadow-md"
                :pt="{
                  root: '!border-slate-200',
                  list: '!p-1',
                  itemContent: '!rounded !border !border-slate-200 !px-2 !py-1.5 !mb-1',
                  itemLabel: '!text-[10px]',
                  itemIcon: '!text-[10px]',
                }"
              />
            </div>
          </template>
        </Column>
      </DataTable>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref, useTemplateRef } from 'vue'
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
const selectedStatus = ref<string | null>(null)
const allSelected = ref(false)
const openActionIndex = ref<number | null>(2)
const statusSelect = useTemplateRef('statusSelect')

const statusOptions = ['Offen', 'In Arbeit', 'Blockiert', 'Fertig']

const breadcrumbs = [
  { icon: 'pi pi-home' },
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' },
]

const tasks = ref([
  { name: 'Webseite Relaunch', assignee: 'Max Mustermann', initial: 'M', progress: 100, status: 'Fertig', dueDate: '03.06.2026', selected: true, overdue: false },
  { name: 'Mobile App', assignee: 'Anna Schmidt', initial: 'A', progress: 45, status: 'In Arbeit', dueDate: '10.06.2026', selected: false, overdue: false },
  { name: 'Marketing Kampagne', assignee: 'Lisa Weber', initial: 'L', progress: 0, status: 'Offen', dueDate: '18.05.2026', selected: false, overdue: false },
  { name: 'API Migration', assignee: 'Paul Müller', initial: 'P', progress: 72, status: 'Blockiert', dueDate: '12.05.2026', selected: false, overdue: true },
])

const actionItems = [
  { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
  { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
  { label: 'Löschen', icon: 'pi pi-trash' },
]

const filteredTasks = computed(() =>
  tasks.value.filter((task) => {
    const matchesSearch = task.name.toLowerCase().includes(search.value.toLowerCase())
    const matchesStatus = !selectedStatus.value || task.status === selectedStatus.value
    return matchesSearch && matchesStatus
  }),
)

function tagSeverity(status: string) {
  if (status === 'Fertig') return 'success'
  if (status === 'In Arbeit') return 'warn'
  if (status === 'Blockiert') return 'danger'
  return 'info'
}

onMounted(async () => {
  await nextTick()
  statusSelect.value?.show()
})
</script>