<template>
  <div class="min-h-screen bg-white p-4 font-[Inter,ui-sans-serif,system-ui,sans-serif] text-slate-900">
    <header class="flex items-center gap-4">
      <Button
        icon="pi pi-arrow-left"
        rounded
        text
        aria-label="Zurück"
        class="!h-[50px] !w-[50px] !bg-slate-100 !text-slate-700"
      />
      <div class="flex flex-col">
        <h1 class="m-0 text-[32px] font-bold leading-[39px]">Projektaufgaben</h1>
        <span class="mt-1 text-base leading-[19px]">Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.</span>
      </div>
    </header>

    <main class="ml-[66px] mt-3 w-[1472px] max-w-[calc(100vw-98px)]">
      <Breadcrumb :home="home" :model="breadcrumbs" class="w-fit !border-0 !bg-white !p-0 !text-sm" />

      <section class="relative mt-4 flex gap-4">
        <div class="flex w-[216px] flex-col gap-1.5">
          <label for="search" class="text-sm leading-[21px]">Suche</label>
          <InputText
            id="search"
            v-model="searchQuery"
            placeholder="Suche..."
            class="h-[33px] w-[216px] !rounded-md !text-sm"
          />
        </div>

        <div class="relative flex w-[216px] flex-col gap-1.5">
          <label for="status" class="text-sm leading-[21px]">Status</label>
          <Select
            id="status"
            v-model="selectedStatus"
            :options="statusOptions"
            option-label="label"
            placeholder="Status auswählen"
            class="h-[33px] w-[216px] !rounded-md !text-sm"
          />
          <div class="absolute left-0 top-[63px] z-20 w-[216px] rounded-md border border-slate-200 bg-white p-[3px] shadow-sm">
            <Button
              v-for="option in statusOptions"
              :key="option.value"
              :label="option.label"
              text
              class="h-[31px] w-full !justify-start !rounded !px-2.5 !py-1.5 !text-sm !font-normal !text-slate-900"
              :class="{ '!bg-slate-100': option.value === 'in-arbeit' }"
              @click="selectedStatus = option"
            />
          </div>
        </div>
      </section>

      <section class="relative mt-4">
        <DataTable
          :value="tasks"
          data-key="id"
          class="w-full text-sm"
          table-style="min-width: 1472px"
          :row-class="() => 'h-[50px]'"
        >
          <Column header-style="width:72px" body-style="width:72px" class="!border-slate-200">
            <template #header>
              <div class="flex h-[39px] items-center justify-center">
                <Checkbox v-model="selectAll" binary aria-label="Alle Aufgaben auswählen" />
              </div>
            </template>
            <template #body="{ data }">
              <div class="flex h-[50px] items-center justify-center">
                <Checkbox v-model="data.selected" binary :aria-label="`${data.title} auswählen`" />
              </div>
            </template>
          </Column>

          <Column field="title" header="Aufgabe" header-style="width:512px" body-style="width:512px" class="!border-slate-200">
            <template #body="{ data }">
              <span>{{ data.title }}</span>
            </template>
          </Column>

          <Column header="Verantwortlicher" header-style="width:256px" body-style="width:256px" class="!border-slate-200">
            <template #body="{ data }">
              <div class="flex items-center gap-3">
                <Avatar :label="data.initials" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-800" />
                <span>{{ data.assignee }}</span>
              </div>
            </template>
          </Column>

          <Column header="Status" header-style="width:256px" body-style="width:256px" class="!border-slate-200">
            <template #body="{ data }">
              <div class="flex items-center gap-3">
                <ProgressBar :value="data.progress" :show-value="false" class="h-1.5 w-[182px] !rounded-full" />
                <span class="text-xs">{{ data.progress }} %</span>
              </div>
            </template>
          </Column>

          <Column header="Status" header-style="width:160px" body-style="width:160px" class="!border-slate-200">
            <template #body="{ data }">
              <Tag
                :value="data.status"
                class="!rounded-md !px-[7px] !py-[3px] !text-[12px] !font-bold"
                :class="data.statusClass"
              />
            </template>
          </Column>

          <Column field="dueDate" header="Fällig" header-style="width:124px" body-style="width:124px" class="!border-slate-200">
            <template #body="{ data }">
              <span>{{ data.dueDate }}</span>
            </template>
          </Column>

          <Column header="Aktionen" header-style="width:92px" body-style="width:92px" class="!border-slate-200">
            <template #body>
              <div class="flex justify-center">
                <Button icon="pi pi-ellipsis-v" text rounded aria-label="Aktionen" class="!h-7 !w-[35px]" />
              </div>
            </template>
          </Column>
        </DataTable>

        <Menu :model="actionItems" class="absolute right-[-137px] top-[136px] z-30 w-[200px] !rounded-md !border-slate-200 !p-2.5 shadow-sm" />
      </section>
    </main>
  </div>
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

const searchQuery = ref('')
const selectedStatus = ref(null)
const selectAll = ref(false)

const home = {
  icon: 'pi pi-home'
}

const breadcrumbs = [
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
]

const statusOptions = [
  { label: 'Offen', value: 'offen' },
  { label: 'In Arbeit', value: 'in-arbeit' },
  { label: 'Blockiert', value: 'blockiert' },
  { label: 'Fertig', value: 'fertig' }
]

const tasks = ref([
  {
    id: 1,
    selected: true,
    title: 'Webseite Relaunch',
    initials: 'M',
    assignee: 'Max Mustermann',
    progress: 100,
    status: 'Fertig',
    statusClass: '!bg-emerald-100 !text-emerald-800',
    dueDate: '03.06.2026'
  },
  {
    id: 2,
    selected: false,
    title: 'Mobile App',
    initials: 'A',
    assignee: 'Anna Schmidt',
    progress: 45,
    status: 'In Arbeit',
    statusClass: '!bg-amber-100 !text-amber-800',
    dueDate: '10.06.2026'
  },
  {
    id: 3,
    selected: false,
    title: 'Marketing Kampagne',
    initials: 'L',
    assignee: 'Lisa Weber',
    progress: 0,
    status: 'Offen',
    statusClass: '!bg-sky-100 !text-sky-800',
    dueDate: '18.05.2026'
  },
  {
    id: 4,
    selected: false,
    title: 'API Migration',
    initials: 'P',
    assignee: 'Paul Müller',
    progress: 72,
    status: 'Blockiert',
    statusClass: '!bg-red-100 !text-red-800',
    dueDate: '12.05.2026'
  }
])

const actionItems = [
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Status aktualisieren', icon: 'pi pi-refresh' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]
</script>