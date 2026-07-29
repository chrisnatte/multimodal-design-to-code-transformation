<template>
  <div class="p-6">
    <DataTable
      :value="users"
      class="w-[728px]"
      table-style="min-width: 728px"
      :pt="{
        table: 'border-collapse',
        headerCell: 'border-b border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-700',
        bodyCell: 'border-b border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700',
      }"
    >
      <Column header="Nutzer" :header-style="{ width: '256px' }" :body-style="{ width: '256px' }">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600" />
            <span>{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Status" :header-style="{ width: '108px' }" :body-style="{ width: '108px' }">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.severity" class="!text-xs" />
        </template>
      </Column>

      <Column header="Fortschritt" :header-style="{ width: '256px' }" :body-style="{ width: '256px' }">
        <template #body="{ data }">
          <div class="flex w-60 flex-col gap-1">
            <div class="flex items-end justify-between">
              <span class="text-[10px] leading-3 text-slate-600">{{ data.course }}</span>
              <span class="text-xs leading-4 text-slate-600">{{ data.progress }} %</span>
            </div>
            <ProgressBar
              :value="data.progress"
              :show-value="false"
              class="!h-1.5"
              :pt="{
                value: '!bg-emerald-500',
              }"
            />
          </div>
        </template>
      </Column>

      <Column header="Aktion" :header-style="{ width: '108px', textAlign: 'center' }" :body-style="{ width: '108px', textAlign: 'center' }">
        <template #body="{ data }">
          <Button
            :ref="data.id === activeUserId ? 'activeActionButton' : undefined"
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            aria-label="Aktionen anzeigen"
            :class="data.id === activeUserId ? '!bg-slate-100' : ''"
            @click="toggleActions($event, data.id)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover
      ref="actionsPopover"
      :pt="{
        root: '!w-48 !rounded-md !border !border-slate-200 !shadow-md',
        content: '!p-2.5',
      }"
    >
      <div class="flex flex-col gap-2">
        <Button label="Profil bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined size="small" fluid class="!justify-start" />
        <Button label="Status ändern" icon="pi pi-flag" severity="secondary" outlined size="small" fluid class="!justify-start" />
        <Button label="Duplizieren" icon="pi pi-clone" severity="secondary" outlined size="small" fluid class="!justify-start" />
        <Button label="Deaktivieren" icon="pi pi-trash" severity="secondary" outlined size="small" fluid class="!justify-start" />
      </div>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Popover from 'primevue/popover'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

const users = ref([
  { id: 1, initials: 'M', name: 'Max Mustermann', status: 'In Prüfung', severity: 'danger', course: 'Zertifizierung', progress: 45 },
  { id: 2, initials: 'A', name: 'Anna Schmidt', status: 'Aktiv', severity: 'success', course: 'Onboarding', progress: 87 },
  { id: 3, initials: 'L', name: 'Lisa Weber', status: 'Inaktiv', severity: 'warn', course: 'Onboarding', progress: 4 },
  { id: 4, initials: 'P', name: 'Paul Müller', status: 'Inaktiv', severity: 'warn', course: 'Onboarding', progress: 11 },
])

const activeUserId = ref(3)
const actionsPopover = ref()
const activeActionButton = ref()

function toggleActions(event: Event, userId: number) {
  activeUserId.value = userId
  actionsPopover.value?.toggle(event)
}

onMounted(async () => {
  await nextTick()

  if (activeActionButton.value?.$el) {
    actionsPopover.value?.show({ currentTarget: activeActionButton.value.$el })
  }
})
</script>