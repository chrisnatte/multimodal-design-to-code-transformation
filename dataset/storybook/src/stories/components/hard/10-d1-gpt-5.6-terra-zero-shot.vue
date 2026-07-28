<template>
  <div class="relative min-h-[410px] bg-white p-6 font-sans text-slate-700">
    <DataTable
      :value="users"
      class="w-[728px] text-sm"
      :table-style="{ minWidth: '728px' }"
      :pt="{
        table: { class: 'border-collapse' },
        thead: { class: 'border-b border-slate-200' },
        headerCell: { class: '!bg-white !px-3.5 !py-2.5 !text-left !text-sm !font-semibold !text-slate-700' },
        bodyRow: { class: 'border-b border-slate-200 !bg-white' },
        bodyCell: { class: '!px-3.5 !py-2.5' }
      }"
    >
      <Column header="Nutzer" :header-style="{ width: '256px' }" :body-style="{ width: '256px' }">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar
              :label="data.initial"
              shape="circle"
              class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600"
            />
            <span>{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Status" :header-style="{ width: '108px' }" :body-style="{ width: '108px' }">
        <template #body="{ data }">
          <Tag
            :value="data.status"
            :severity="data.severity"
            class="!px-2 !py-0.5 !text-xs !font-bold"
          />
        </template>
      </Column>

      <Column header="Fortschritt" :header-style="{ width: '256px' }" :body-style="{ width: '256px' }">
        <template #body="{ data }">
          <div class="flex w-[240px] flex-col gap-1">
            <div class="flex items-end justify-between">
              <span class="text-[10px] leading-3 text-slate-600">{{ data.course }}</span>
              <span class="text-xs leading-[15px] text-slate-700">{{ data.progress }} %</span>
            </div>
            <ProgressBar
              :value="data.progress"
              :show-value="false"
              class="!h-1.5"
              :pt="{
                root: { class: '!bg-slate-200' },
                value: { class: '!bg-emerald-500' }
              }"
            />
          </div>
        </template>
      </Column>

      <Column header="Aktion" :header-style="{ width: '108px' }" :body-style="{ width: '108px' }">
        <template #body="{ data }">
          <div class="flex justify-center">
            <Button
              icon="pi pi-ellipsis-h"
              severity="secondary"
              text
              rounded
              size="small"
              :class="data.id === activeMenu ? '!bg-slate-100' : ''"
              aria-label="Aktionen anzeigen"
              @click="activeMenu = activeMenu === data.id ? null : data.id"
            />
          </div>
        </template>
      </Column>
    </DataTable>

    <div
      v-if="activeMenu === 3"
      class="absolute left-[680px] top-[207px] z-10 w-48 rounded-md border border-slate-200 bg-white p-2.5 shadow-md"
      role="menu"
      aria-label="Aktionen für Lisa Weber"
    >
      <div class="flex flex-col gap-2">
        <Button
          label="Profil bearbeiten"
          icon="pi pi-pen-to-square"
          severity="secondary"
          outlined
          class="!h-[33px] !justify-start !text-sm"
          @click="activeMenu = null"
        />
        <Button
          label="Status ändern"
          icon="pi pi-flag"
          severity="secondary"
          outlined
          class="!h-[33px] !justify-start !text-sm"
          @click="activeMenu = null"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          severity="secondary"
          outlined
          class="!h-[33px] !justify-start !text-sm"
          @click="activeMenu = null"
        />
        <Button
          label="Deaktivieren"
          icon="pi pi-trash"
          severity="secondary"
          outlined
          class="!h-[33px] !justify-start !text-sm"
          @click="activeMenu = null"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'

const activeMenu = ref(3)

const users = ref([
  {
    id: 1,
    initial: 'M',
    name: 'Max Mustermann',
    status: 'In Prüfung',
    severity: 'danger',
    course: 'Zertifizierung',
    progress: 45
  },
  {
    id: 2,
    initial: 'A',
    name: 'Anna Schmidt',
    status: 'Aktiv',
    severity: 'success',
    course: 'Onboarding',
    progress: 87
  },
  {
    id: 3,
    initial: 'L',
    name: 'Lisa Weber',
    status: 'Inaktiv',
    severity: 'warn',
    course: 'Onboarding',
    progress: 4
  },
  {
    id: 4,
    initial: 'P',
    name: 'Paul Müller',
    status: 'Inaktiv',
    severity: 'warn',
    course: 'Onboarding',
    progress: 11
  }
])
</script>