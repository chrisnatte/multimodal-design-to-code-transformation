<template>
  <div class="relative min-h-[410px] w-[897px] bg-white p-6">
    <DataTable
      :value="users"
      class="w-[728px]"
      table-style="width: 728px"
      :pt="{
        table: 'w-[728px]',
        headerCell: 'h-[39px]',
        bodyCell: 'h-[50px] !border-surface-200',
      }"
    >
      <Column
        header="Nutzer"
        header-class="w-[256px] !px-3.5 !py-2.5"
        body-class="w-[256px] !px-3.5 !py-[10.5px]"
      >
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="!h-7 !w-7 !bg-surface-200" />
            <span class="text-sm">{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column
        header="Status"
        header-class="w-[108px] !px-3.5 !py-2.5"
        body-class="w-[108px] !px-3.5 !py-[10.5px]"
      >
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.statusSeverity" />
        </template>
      </Column>

      <Column
        header="Fortschritt"
        header-class="w-[256px] !px-3.5 !py-2.5"
        body-class="w-[256px] !px-3.5 !py-[10.5px]"
      >
        <template #body="{ data }">
          <div class="flex w-full flex-col gap-1">
            <div class="flex items-end justify-between">
              <span class="text-[10px]">{{ data.progressLabel }}</span>
              <span class="text-xs">{{ data.progress }} %</span>
            </div>
            <ProgressBar
              :value="data.progress"
              :show-value="false"
              class="!h-1.5 w-full"
              :pt="{ value: '!bg-emerald-500' }"
            />
          </div>
        </template>
      </Column>

      <Column
        header="Aktionen"
        header-class="w-[108px] !px-3.5 !py-2.5 text-center"
        body-class="w-[108px] !px-3.5 !py-[10.5px] text-center"
      >
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            variant="text"
            plain
            aria-label="Aktionen anzeigen"
            class="!h-7 !w-[35px]"
            :class="{ '!bg-surface-100': activeUserId === data.id }"
            aria-haspopup="dialog"
            @click="openActions($event, data)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover
      ref="actionsPopover"
      aria-label="Nutzeraktionen"
      :pt="{
        root: '!w-48',
        content: '!p-[10.5px]',
      }"
    >
      <div class="flex flex-col gap-2">
        <Button
          label="Profil bearbeiten"
          icon="pi pi-pen-to-square"
          severity="secondary"
          variant="outlined"
          class="!h-[33px] w-full !justify-start"
        />
        <Button
          label="Status ändern"
          icon="pi pi-flag"
          severity="secondary"
          variant="outlined"
          class="!h-[33px] w-full !justify-start"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          severity="secondary"
          variant="outlined"
          class="!h-[33px] w-full !justify-start"
        />
        <Button
          label="Deaktiveren"
          icon="pi pi-trash"
          severity="secondary"
          variant="outlined"
          class="!h-[33px] w-full !justify-start"
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
  id: number
  initials: string
  name: string
  status: string
  statusSeverity: 'danger' | 'success' | 'warn'
  progressLabel: string
  progress: number
}

const users = ref<User[]>([
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

const actionsPopover = ref<InstanceType<typeof Popover> | null>(null)
const activeUserId = ref(3)
const selectedUser = ref<User | null>(users.value[2])

const openActions = (event: MouseEvent, user: User) => {
  selectedUser.value = user
  activeUserId.value = user.id
  actionsPopover.value?.toggle(event)
}
</script>