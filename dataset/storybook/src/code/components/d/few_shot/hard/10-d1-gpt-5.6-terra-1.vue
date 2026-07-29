<template>
  <div class="relative min-h-[410px] w-full bg-white p-6">
    <DataTable
      :value="users"
      class="w-[728px]"
      :pt="{
        table: 'border-collapse',
        headerCell: 'border-b border-slate-200 bg-white px-3.5 py-2.5 text-left text-sm font-semibold text-slate-700',
        bodyCell: 'h-[50px] border-b border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700',
      }"
    >
      <Column header="Nutzer" header-class="w-[256px]" body-class="w-[256px]">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initial" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600" />
            <span>{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Status" header-class="w-[108px]" body-class="w-[108px]">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.severity" class="!text-xs" />
        </template>
      </Column>

      <Column header="Fortschritt" header-class="w-[256px]" body-class="w-[256px]">
        <template #body="{ data }">
          <div class="flex w-full flex-col gap-1">
            <div class="flex items-end justify-between">
              <span class="text-[10px] leading-3 text-slate-600">{{ data.category }}</span>
              <span class="text-xs leading-4 text-slate-700">{{ data.progress }} %</span>
            </div>
            <ProgressBar
              :value="data.progress"
              :show-value="false"
              class="!h-1.5 !rounded-full"
            />
          </div>
        </template>
      </Column>

      <Column header="Aktion" header-class="w-[108px] text-center" body-class="w-[108px] text-center">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            aria-label="Aktionen anzeigen"
            class="!h-7 !w-[35px] !p-0"
            :class="{ '!bg-slate-100': selectedUser?.name === data.name }"
            @click="selectedUser = data"
          />
        </template>
      </Column>
    </DataTable>

    <div
      v-if="selectedUser"
      class="absolute left-[681px] top-[207px] z-10 w-48 rounded-md border border-slate-200 bg-white p-2.5 shadow-md"
    >
      <div class="flex flex-col gap-2">
        <Button
          label="Profil bearbeiten"
          icon="pi pi-pen-to-square"
          severity="secondary"
          outlined
          class="!h-[33px] w-full !justify-start !text-sm"
        />
        <Button
          label="Status ändern"
          icon="pi pi-flag"
          severity="secondary"
          outlined
          class="!h-[33px] w-full !justify-start !text-sm"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          severity="secondary"
          outlined
          class="!h-[33px] w-full !justify-start !text-sm"
        />
        <Button
          label="Deaktivieren"
          icon="pi pi-trash"
          severity="secondary"
          outlined
          class="!h-[33px] w-full !justify-start !text-sm"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

type User = {
  initial: string
  name: string
  status: string
  severity: 'danger' | 'success' | 'warn'
  category: string
  progress: number
}

const users = ref<User[]>([
  {
    initial: 'M',
    name: 'Max Mustermann',
    status: 'In Prüfung',
    severity: 'danger',
    category: 'Zertifizierung',
    progress: 45,
  },
  {
    initial: 'A',
    name: 'Anna Schmidt',
    status: 'Aktiv',
    severity: 'success',
    category: 'Onboarding',
    progress: 87,
  },
  {
    initial: 'L',
    name: 'Lisa Weber',
    status: 'Inaktiv',
    severity: 'warn',
    category: 'Onboarding',
    progress: 4,
  },
  {
    initial: 'P',
    name: 'Paul Müller',
    status: 'Inaktiv',
    severity: 'warn',
    category: 'Onboarding',
    progress: 11,
  },
])

const selectedUser = ref<User | null>(users.value[2])
</script>