<template>
  <main class="relative min-h-screen bg-white p-4 font-sans text-slate-900">
    <section class="flex items-center gap-4">
      <Button
        icon="pi pi-arrow-left"
        rounded
        text
        severity="secondary"
        aria-label="Zurück"
        class="!h-[50px] !w-[50px] !bg-slate-100"
      />
      <div>
        <h1 class="m-0 text-[32px] font-bold leading-[39px]">Projektaufgaben</h1>
        <p class="m-0 mt-1 text-base leading-[19px]">
          Hier werden alle Aufgaben des Projekts Projekt 1 aufgelistet.
        </p>
      </div>
    </section>

    <Breadcrumb
      :model="breadcrumbItems"
      class="mt-3 !w-fit !border-0 !bg-white !p-0 !text-sm"
    />

    <section class="mt-4 flex gap-4">
      <div class="w-[216px]">
        <label for="task-search" class="mb-2 block text-sm">Suche</label>
        <InputText
          id="task-search"
          v-model="search"
          placeholder="Suche..."
          class="h-[33px] w-full !text-sm"
        />
      </div>

      <div class="relative w-[216px]">
        <label for="status-filter" class="mb-2 block text-sm">Status</label>
        <Select
          id="status-filter"
          v-model="selectedStatus"
          :options="statusOptions"
          option-label="label"
          placeholder="Status auswählen"
          class="h-[33px] w-full !text-sm"
        />
        <Listbox
          v-model="selectedStatus"
          :options="statusOptions"
          option-label="label"
          class="absolute left-0 top-[63px] z-20 w-[216px] !rounded-md !border-slate-200 !bg-white !p-1"
          list-class="!max-h-none"
        />
      </div>
    </section>

    <section class="mt-4 w-[1472px] overflow-hidden">
      <div class="grid h-[40px] grid-cols-[72px_512px_256px_256px_160px_124px_92px] text-sm font-semibold">
        <div class="flex items-center justify-center border border-slate-200">
          <Checkbox v-model="selectAll" :binary="true" aria-label="Alle Aufgaben auswählen" />
        </div>
        <div class="flex items-center border-y border-r border-slate-200 px-3.5">Aufgabe</div>
        <div class="flex items-center border-y border-r border-slate-200 px-3.5">Verantwortlicher</div>
        <div class="flex items-center border-y border-r border-slate-200 px-3.5">Status</div>
        <div class="flex items-center border-y border-r border-slate-200 px-3.5">Status</div>
        <div class="flex items-center border-y border-r border-slate-200 px-3.5">Fällig</div>
        <div class="flex items-center border-y border-r border-slate-200 px-3.5">Aktionen</div>
      </div>

      <div
        v-for="task in tasks"
        :key="task.name"
        class="grid h-[50px] grid-cols-[72px_512px_256px_256px_160px_124px_92px] bg-white text-sm"
      >
        <div class="flex items-center justify-center border-b border-l border-r border-slate-200">
          <Checkbox v-model="selectedTasks" :value="task.name" aria-label="Aufgabe auswählen" />
        </div>

        <div class="flex items-center border-b border-r border-slate-200 px-3.5">
          {{ task.name }}
        </div>

        <div class="flex items-center gap-3 border-b border-r border-slate-200 px-3.5">
          <Avatar
            :label="task.initial"
            shape="circle"
            class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-700"
          />
          <span>{{ task.assignee }}</span>
        </div>

        <div class="flex items-center gap-3 border-b border-r border-slate-200 px-3.5">
          <ProgressBar
            :value="task.progress"
            :show-value="false"
            class="!h-1.5 !w-[182px] !bg-slate-200"
          />
          <span class="text-xs">{{ task.progress }} %</span>
        </div>

        <div class="flex items-center border-b border-r border-slate-200 px-3.5">
          <Tag :value="task.status" :class="task.tagClass" class="!rounded-md !px-2 !py-1 !text-[12px] !font-bold" />
        </div>

        <div class="flex items-center border-b border-r border-slate-200 px-3.5">
          {{ task.dueDate }}
        </div>

        <div class="flex items-center justify-center border-b border-r border-slate-200">
          <Button
            icon="pi pi-ellipsis-h"
            text
            rounded
            severity="secondary"
            aria-label="Aktionen"
            class="!h-7 !w-[35px]"
          />
        </div>
      </div>
    </section>

    <section class="absolute left-[1523px] top-[357px] z-30 w-[200px] rounded-md border border-slate-200 bg-white p-2.5 shadow-sm">
      <div class="flex flex-col gap-2">
        <Button
          label="Bearbeiten"
          icon="pi pi-pencil"
          outlined
          severity="secondary"
          class="!h-[33px] !justify-start !text-sm"
        />
        <Button
          label="Status aktualisieren"
          icon="pi pi-refresh"
          outlined
          severity="secondary"
          class="!h-[33px] !justify-start !text-sm"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          outlined
          severity="secondary"
          class="!h-[33px] !justify-start !text-sm"
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
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import ProgressBar from 'primevue/progressbar'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const search = ref('')
const selectedStatus = ref(null)
const selectedTasks = ref(['Webseite Relaunch'])
const selectAll = ref(false)

const breadcrumbItems = ref([
  { label: 'Projekte' },
  { label: 'Projekt 1' },
  { label: 'Aufgaben' }
])

const statusOptions = ref([
  { label: 'Offen' },
  { label: 'In Arbeit' },
  { label: 'Blockiert' },
  { label: 'Fertig' }
])

const tasks = ref([
  {
    name: 'Webseite Relaunch',
    assignee: 'Max Mustermann',
    initial: 'M',
    progress: 100,
    status: 'Fertig',
    dueDate: '03.06.2026',
    tagClass: '!bg-emerald-100 !text-emerald-700'
  },
  {
    name: 'Mobile App',
    assignee: 'Anna Schmidt',
    initial: 'A',
    progress: 45,
    status: 'In Arbeit',
    dueDate: '10.06.2026',
    tagClass: '!bg-amber-100 !text-amber-700'
  },
  {
    name: 'Marketing Kampagne',
    assignee: 'Lisa Weber',
    initial: 'L',
    progress: 0,
    status: 'Offen',
    dueDate: '18.05.2026',
    tagClass: '!bg-sky-100 !text-sky-700'
  },
  {
    name: 'API Migration',
    assignee: 'Paul Müller',
    initial: 'P',
    progress: 72,
    status: 'Blockiert',
    dueDate: '12.05.2026',
    tagClass: '!bg-red-100 !text-red-700'
  }
])
</script>