<template>
  <div class="relative min-h-[410px] w-[897px] bg-white p-6">
    <DataTable
      :value="users"
      class="w-[728px]"
      table-style="min-width: 728px"
      :pt="{
        thead: 'h-[39px]',
        tbody: '[&_tr]:h-[50px]',
      }"
    >
      <Column
        header="Nutzer"
        header-class="w-[256px] px-3.5 py-2.5 text-sm font-semibold"
        body-class="w-[256px] px-3.5 py-2.5"
      >
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" />
            <span class="text-sm">{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column
        header="Status"
        header-class="w-[108px] px-3.5 py-2.5 text-sm font-semibold"
        body-class="w-[108px] px-3.5 py-2.5"
      >
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.statusSeverity" />
        </template>
      </Column>

      <Column
        header="Fortschritt"
        header-class="w-[256px] px-3.5 py-2.5 text-sm font-semibold"
        body-class="w-[256px] px-3.5 py-2.5"
      >
        <template #body="{ data }">
          <div class="flex w-[240px] flex-col gap-1">
            <div class="flex items-end justify-between">
              <span class="text-[10px]">{{ data.progressLabel }}</span>
              <span class="text-xs">{{ data.progress }} %</span>
            </div>
            <ProgressBar
              :value="data.progress"
              :show-value="false"
              class="h-[6px] w-full"
            />
          </div>
        </template>
      </Column>

      <Column
        header="Aktionen"
        header-class="w-[108px] px-3.5 py-2.5 text-center text-sm font-semibold"
        body-class="w-[108px] px-3.5 py-2.5 text-center"
      >
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            aria-label="Aktionen anzeigen"
            @click="toggleActions(data.id)"
          />
        </template>
      </Column>
    </DataTable>

    <Menu
      v-if="activeUserId === 3"
      :model="actionItems"
      class="absolute left-[681px] top-[207px] w-48"
      :pt="{
        root: 'border border-slate-200',
        list: 'flex flex-col gap-2 p-2.5',
      }"
    >
      <template #item="{ item }">
        <Button
          :label="item.label"
          :icon="item.icon"
          severity="secondary"
          outlined
          class="w-full justify-start"
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

const activeUserId = ref(3)

const users = ref([
  {
    id: 1,
    initials: 'M',
    name: 'Max Mustermann',
    status: 'In Prüfung',
    statusSeverity: 'danger',
    progressLabel: 'Zertifizierung',
    progress: 45,
  },
  {
    id: 2,
    initials: 'A',
    name: 'Anna Schmidt',
    status: 'Aktiv',
    statusSeverity: 'success',
    progressLabel: 'Onboarding',
    progress: 87,
  },
  {
    id: 3,
    initials: 'L',
    name: 'Lisa Weber',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    progressLabel: 'Onboarding',
    progress: 4,
  },
  {
    id: 4,
    initials: 'P',
    name: 'Paul Müller',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    progressLabel: 'Onboarding',
    progress: 11,
  },
])

const actionItems = ref([
  {
    label: 'Profil bearbeiten',
    icon: 'pi pi-pen-to-square',
    command: () => undefined,
  },
  {
    label: 'Status ändern',
    icon: 'pi pi-flag',
    command: () => undefined,
  },
  {
    label: 'Duplizieren',
    icon: 'pi pi-clone',
    command: () => undefined,
  },
  {
    label: 'Deaktiveren',
    icon: 'pi pi-trash',
    command: () => undefined,
  },
])

function toggleActions(userId: number) {
  activeUserId.value = activeUserId.value === userId ? null : userId
}
</script>