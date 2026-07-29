<template>
  <main class="relative min-h-[410px] w-full bg-white px-6 pt-7 font-sans text-slate-700">
    <DataTable
      :value="users"
      class="w-[728px] text-sm [&_.p-datatable-table]:w-full [&_.p-datatable-thead>tr>th]:border-x-0 [&_.p-datatable-thead>tr>th]:border-t-0 [&_.p-datatable-thead>tr>th]:border-b [&_.p-datatable-thead>tr>th]:border-slate-200 [&_.p-datatable-thead>tr>th]:bg-transparent [&_.p-datatable-thead>tr>th]:px-3 [&_.p-datatable-thead>tr>th]:py-2 [&_.p-datatable-thead>tr>th]:font-semibold [&_.p-datatable-tbody>tr]:bg-transparent [&_.p-datatable-tbody>tr>td]:border-x-0 [&_.p-datatable-tbody>tr>td]:border-t-0 [&_.p-datatable-tbody>tr>td]:border-b [&_.p-datatable-tbody>tr>td]:border-slate-200 [&_.p-datatable-tbody>tr>td]:px-3 [&_.p-datatable-tbody>tr>td]:py-2"
    >
      <Column header="Nutzer" style="width: 256px">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar
              :label="data.initial"
              shape="circle"
              class="h-7 w-7 !bg-slate-200 !text-sm !text-slate-600"
            />
            <span>{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Status" style="width: 108px">
        <template #body="{ data }">
          <Tag
            :value="data.status"
            :severity="data.severity"
            class="whitespace-nowrap !px-2 !py-0.5 !text-xs !font-semibold"
          />
        </template>
      </Column>

      <Column header="Fortschritt" style="width: 274px">
        <template #body="{ data }">
          <div class="w-[240px]">
            <div class="mb-1 flex items-center justify-between text-[10px] leading-none text-slate-600">
              <span>{{ data.course }}</span>
              <span>{{ data.progress }} %</span>
            </div>
            <ProgressBar
              :value="data.progress"
              :show-value="false"
              class="h-1.5 overflow-hidden !bg-slate-200"
            />
          </div>
        </template>
      </Column>

      <Column header="Aktion" style="width: 76px">
        <template #body="{ data, index }">
          <Button
            icon="pi pi-ellipsis-h"
            text
            rounded
            size="small"
            :class="index === 2 ? '!bg-slate-100 !text-slate-600' : '!text-slate-600'"
            :aria-label="`Aktionen für ${data.name}`"
          />
        </template>
      </Column>
    </DataTable>

    <div class="absolute left-[680px] top-[207px] w-[193px] rounded-md border border-slate-200 bg-white p-3 shadow-md">
      <div class="flex flex-col gap-2">
        <Button
          label="Profil bearbeiten"
          icon="pi pi-pencil"
          outlined
          size="small"
          class="!w-full !justify-start !border-slate-200 !text-slate-500"
        />
        <Button
          label="Status ändern"
          icon="pi pi-flag"
          outlined
          size="small"
          class="!w-full !justify-start !border-slate-200 !text-slate-500"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          outlined
          size="small"
          class="!w-full !justify-start !border-slate-200 !text-slate-500"
        />
        <Button
          label="Deaktivieren"
          icon="pi pi-trash"
          outlined
          size="small"
          class="!w-full !justify-start !border-slate-200 !text-slate-500"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'

const users = ref([
  {
    initial: 'M',
    name: 'Max Mustermann',
    status: 'In Prüfung',
    severity: 'danger',
    course: 'Zertifizierung',
    progress: 45
  },
  {
    initial: 'A',
    name: 'Anna Schmidt',
    status: 'Aktiv',
    severity: 'success',
    course: 'Onboarding',
    progress: 87
  },
  {
    initial: 'L',
    name: 'Lisa Weber',
    status: 'Inaktiv',
    severity: 'warn',
    course: 'Onboarding',
    progress: 4
  },
  {
    initial: 'P',
    name: 'Paul Müller',
    status: 'Inaktiv',
    severity: 'warn',
    course: 'Onboarding',
    progress: 11
  }
])
</script>