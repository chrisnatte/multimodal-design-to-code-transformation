<template>
  <div class="relative w-[728px] p-6">
    <DataTable
      :value="users"
      :pt="{
        table: 'w-full border-collapse',
        thead: 'border-b border-slate-200',
        headerCell: 'bg-transparent px-3 py-2 text-left text-sm font-semibold text-slate-700',
        bodyRow: 'border-b border-slate-200',
        bodyCell: 'bg-transparent px-3 py-2',
      }"
    >
      <Column header="Nutzer" header-class="w-[256px]">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600" />
            <span class="text-sm text-slate-700">{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Status" header-class="w-[108px]">
        <template #body="{ data }">
          <Tag
            :value="data.status"
            :severity="statusSeverity(data.status)"
            class="!px-2 !py-1 !text-xs !font-semibold"
          />
        </template>
      </Column>

      <Column header="Fortschritt" header-class="w-[274px]">
        <template #body="{ data }">
          <div class="w-[240px]">
            <div class="mb-1 flex items-center justify-between text-[10px] text-slate-600">
              <span>{{ data.progressLabel }}</span>
              <span>{{ data.progress }} %</span>
            </div>
            <ProgressBar
              :value="data.progress"
              :show-value="false"
              class="!h-1.5 !rounded-full"
            />
          </div>
        </template>
      </Column>

      <Column header="Aktion" header-class="w-[70px]" body-class="text-center">
        <template #body="{ index }">
          <Button
            icon="pi pi-ellipsis-h"
            text
            rounded
            severity="secondary"
            :class="{ '!bg-slate-100': index === 2 }"
            @click="activeMenuIndex = index"
          />
        </template>
      </Column>
    </DataTable>

    <Menu
      v-if="activeMenuIndex === 2"
      :model="menuItems"
      class="absolute right-0 top-[207px] z-10 w-[192px] !rounded-md !border !border-slate-200 !bg-white !p-2 !shadow-md"
      :pt="{
        rootList: 'flex flex-col gap-2',
        itemContent: 'hover:!bg-transparent',
      }"
    >
      <template #item="{ item }">
        <Button
          :label="item.label"
          :icon="item.icon"
          severity="secondary"
          outlined
          class="w-full !justify-start !border-slate-200 !px-3 !py-2 !text-sm"
          @click="item.command"
        />
      </template>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Menu from 'primevue/menu'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

const activeMenuIndex = ref(2)

const users = ref([
  {
    initials: 'M',
    name: 'Max Mustermann',
    status: 'In Prüfung',
    progressLabel: 'Zertifizierung',
    progress: 45,
  },
  {
    initials: 'A',
    name: 'Anna Schmidt',
    status: 'Aktiv',
    progressLabel: 'Onboarding',
    progress: 87,
  },
  {
    initials: 'L',
    name: 'Lisa Weber',
    status: 'Inaktiv',
    progressLabel: 'Onboarding',
    progress: 4,
  },
  {
    initials: 'P',
    name: 'Paul Müller',
    status: 'Inaktiv',
    progressLabel: 'Onboarding',
    progress: 11,
  },
])

const menuItems = [
  { label: 'Profil bearbeiten', icon: 'pi pi-pen-to-square', command: () => {} },
  { label: 'Status ändern', icon: 'pi pi-flag', command: () => {} },
  { label: 'Duplizieren', icon: 'pi pi-clone', command: () => {} },
  { label: 'Deaktivieren', icon: 'pi pi-trash', command: () => {} },
]

function statusSeverity(status: string) {
  if (status === 'Aktiv') return 'success'
  if (status === 'In Prüfung') return 'danger'
  return 'warn'
}
</script>