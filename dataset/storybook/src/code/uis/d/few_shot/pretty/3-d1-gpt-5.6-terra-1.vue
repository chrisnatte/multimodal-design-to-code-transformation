<template>
  <main class="min-h-screen bg-white px-14 py-4 text-slate-700">
    <header class="flex items-center gap-4">
      <Button
        icon="pi pi-arrow-circle-left"
        severity="secondary"
        rounded
        text
        aria-label="Zurück"
        class="!h-9 !w-9 !bg-slate-100"
      />
      <div class="flex flex-col gap-1">
        <h1 class="text-2xl font-bold leading-none">Projektaufgaben</h1>
        <p class="text-sm text-slate-500">
          Hier werden alle Aufgaben des Projekts <strong>Projekt 1</strong> aufgelistet.
        </p>
      </div>
    </header>

    <Breadcrumb :home="home" :model="breadcrumbs" class="mt-3 !border-0 !bg-transparent !p-0" />

    <section class="mt-5">
      <div class="flex gap-3">
        <div class="flex w-39 flex-col gap-1">
          <label for="search" class="text-xs">Suche</label>
          <IconField>
            <InputIcon class="pi pi-search" />
            <InputText v-model="searchTerm" id="search" placeholder="Suche..." class="w-full !text-xs" />
          </IconField>
        </div>

        <div class="flex w-39 flex-col gap-1">
          <label for="status" class="text-xs">Status</label>
          <Select
            ref="statusSelect"
            v-model="statusFilter"
            input-id="status"
            :options="statusOptions"
            placeholder="Status auswählen"
            class="w-full !text-xs"
          />
        </div>
      </div>

      <div class="relative mt-2 max-w-[1048px]">
        <DataTable
          v-model:selection="selectedTasks"
          :value="tasks"
          data-key="id"
          class="text-xs"
          :pt="{
            table: 'min-w-full',
            headerCell: '!border-x-0 !border-t-0 !px-4 !py-2.5 !text-xs',
            bodyCell: '!border-x-0 !px-4 !py-2.5 !text-xs',
          }"
        >
          <Column selection-mode="multiple" header-style="width: 3.5rem" />
          <Column field="task" header="Aufgabe" style="width: 36%" />
          <Column header="Verantwortlicher" style="width: 18%">
            <template #body="{ data }">
              <div class="flex items-center gap-2">
                <Avatar :label="data.initials" shape="circle" class="!h-5 !w-5 !bg-slate-200 !text-[10px]" />
                <span>{{ data.assignee }}</span>
              </div>
            </template>
          </Column>
          <Column header="Status" style="width: 18%">
            <template #body="{ data }">
              <div class="flex items-center gap-2">
                <ProgressBar
                  :value="data.progress"
                  :show-value="false"
                  class="w-32 !h-1.5"
                />
                <span class="w-8 text-[10px]">{{ data.progress }} %</span>
              </div>
            </template>
          </Column>
          <Column header="Status" style="width: 11%">
            <template #body="{ data }">
              <Tag :value="data.status" :severity="statusSeverity(data.status)" class="!px-1.5 !py-0.5 !text-[10px]" />
            </template>
          </Column>
          <Column field="dueDate" header="Fällig" style="width: 9%">
            <template #body="{ data }">
              <span :class="{ 'text-red-500': data.overdue }">{{ data.dueDate }}</span>
            </template>
          </Column>
          <Column header="Aktionen" style="width: 7%">
            <template #body="{ data }">
              <div class="flex justify-center">
                <Button
                  icon="pi pi-ellipsis-h"
                  severity="secondary"
                  text
                  size="small"
                  aria-label="Aktionen"
                  :class="{ '!bg-slate-100': data.id === 2 }"
                />
              </div>
            </template>
          </Column>
        </DataTable>

        <Menu
          :model="actionItems"
          class="absolute right-[-96px] top-[108px] z-10 w-36 !rounded-md !p-2 shadow-md"
          :pt="{ list: '!p-0' }"
        >
          <template #item="{ item }">
            <Button
              :label="item.label"
              :icon="item.icon"
              severity="secondary"
              outlined
              size="small"
              class="mb-2 w-full !justify-start !text-[10px] last:mb-0"
            />
          </template>
        </Menu>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Avatar from 'primevue/avatar'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import Menu from 'primevue/menu'
import ProgressBar from 'primevue/progressbar'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const searchTerm = ref('')
const statusFilter = ref<string | null>(null)
const selectedTasks = ref<Array<{ id: number }>>([{ id: 1 }])
const statusSelect = ref<InstanceType<typeof Select> | null>(null)

const home = ref({ icon: 'pi pi-home' })
const breadcrumbs = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
])

const statusOptions = ref(['Offen', 'In Arbeit', 'Blockiert', 'Fertig'])

const tasks = ref([
  { id: 1, task: 'Webseite Relaunch', initials: 'M', assignee: 'Max Mustermann', progress: 100, status: 'Fertig', dueDate: '03.06.2026', overdue: false },
  { id: 2, task: 'Mobile App', initials: 'A', assignee: 'Anna Schmidt', progress: 45, status: 'In Arbeit', dueDate: '10.06.2026', overdue: false },
  { id: 3, task: 'Marketing Kampagne', initials: 'L', assignee: 'Lisa Weber', progress: 0, status: 'Offen', dueDate: '18.05.2026', overdue: false },
  { id: 4, task: 'API Migration', initials: 'P', assignee: 'Paul Müller', progress: 72, status: 'Blockiert', dueDate: '12.05.2026', overdue: true }
])

const actionItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
  { label: 'Status aktualisieren', icon: 'pi pi-list-check' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])

function statusSeverity(status: string) {
  if (status === 'Fertig') return 'success'
  if (status === 'In Arbeit') return 'warn'
  if (status === 'Blockiert') return 'danger'
  return 'info'
}

onMounted(() => {
  statusSelect.value?.show()
})
</script>