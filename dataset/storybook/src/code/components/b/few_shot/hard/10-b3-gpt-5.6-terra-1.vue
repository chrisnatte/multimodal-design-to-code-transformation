<template>
  <div class="bg-white p-6">
    <DataTable
      :value="users"
      table-style="width: 728px"
      :pt="{
        thead: 'text-sm',
        headerCell: 'px-3.5 py-2.5',
        bodyCell: 'border border-slate-200 px-3.5 py-2.5',
      }"
    >
      <Column header="Nutzer" style="width: 256px">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" />
            <span class="text-sm">{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Status" style="width: 108px">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.statusSeverity" />
        </template>
      </Column>

      <Column header="Fortschritt" style="width: 256px">
        <template #body="{ data }">
          <div class="flex w-full flex-col gap-1">
            <div class="flex items-end justify-between">
              <span class="text-[10px]">{{ data.progressLabel }}</span>
              <span class="text-xs">{{ data.progress }} %</span>
            </div>
            <ProgressBar
              :value="data.progress"
              :show-value="false"
              class="w-full"
              :pt="{ root: 'h-1.5' }"
            />
          </div>
        </template>
      </Column>

      <Column header="Aktionen" style="width: 108px">
        <template #body="{ data }">
          <div class="flex justify-center">
            <Button
              icon="pi pi-ellipsis-h"
              severity="secondary"
              text
              aria-label="Aktionen anzeigen"
              aria-haspopup="true"
              @click="toggleActions($event, data)"
            />
          </div>
        </template>
      </Column>
    </DataTable>

    <Popover ref="actionsPopover">
      <div class="flex w-[169px] flex-col gap-2">
        <Button
          label="Profil bearbeiten"
          icon="pi pi-pen-to-square"
          severity="secondary"
          outlined
          fluid
          class="!justify-start"
        />
        <Button
          label="Status ändern"
          icon="pi pi-flag"
          severity="secondary"
          outlined
          fluid
          class="!justify-start"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          severity="secondary"
          outlined
          fluid
          class="!justify-start"
        />
        <Button
          label="Deaktiveren"
          icon="pi pi-trash"
          severity="secondary"
          outlined
          fluid
          class="!justify-start"
        />
      </div>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Popover from 'primevue/popover'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

type User = {
  initials: string
  name: string
  status: string
  statusSeverity: 'danger' | 'success' | 'warn'
  progressLabel: string
  progress: number
}

const actionsPopover = ref<InstanceType<typeof Popover> | null>(null)
const selectedUser = ref<User | null>(null)

const users = ref<User[]>([
  {
    initials: 'M',
    name: 'Max Mustermann',
    status: 'In Prüfung',
    statusSeverity: 'danger',
    progressLabel: 'Zertifizierung',
    progress: 45,
  },
  {
    initials: 'A',
    name: 'Anna Schmidt',
    status: 'Aktiv',
    statusSeverity: 'success',
    progressLabel: 'Onboarding',
    progress: 87,
  },
  {
    initials: 'L',
    name: 'Lisa Weber',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    progressLabel: 'Onboarding',
    progress: 4,
  },
  {
    initials: 'P',
    name: 'Paul Müller',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    progressLabel: 'Onboarding',
    progress: 11,
  },
])

function toggleActions(event: Event, user: User) {
  selectedUser.value = user
  actionsPopover.value?.toggle(event)
}
</script>