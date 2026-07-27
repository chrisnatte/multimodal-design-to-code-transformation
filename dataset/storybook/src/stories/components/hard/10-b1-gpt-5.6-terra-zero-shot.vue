<template>
  <div class="min-h-[410px] w-full bg-white p-6">
    <DataTable
      :value="users"
      class="w-[728px]"
      table-style="min-width: 728px"
      :pt="{
        headerCell: { class: 'h-[39px] px-3.5 py-2.5 text-sm font-semibold' },
        bodyCell: { class: 'h-[50px] border-[#e2e8f0] px-3.5 py-2.5' }
      }"
    >
      <Column header="Nutzer" :header-style="{ width: '256px' }" :body-style="{ width: '256px' }">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar
              :label="data.initial"
              shape="circle"
              class="h-7 w-7 !bg-[#e2e8f0] !text-sm !text-slate-700"
            />
            <span class="text-sm">{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Status" :header-style="{ width: '108px' }" :body-style="{ width: '108px' }">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.severity" class="!text-[12px]" />
        </template>
      </Column>

      <Column
        header="Fortschritt"
        :header-style="{ width: '256px' }"
        :body-style="{ width: '256px' }"
      >
        <template #body="{ data }">
          <div class="flex w-full flex-col gap-1">
            <div class="flex items-end justify-between">
              <span class="text-[10px] leading-3">{{ data.progressLabel }}</span>
              <span class="text-xs leading-[15px]">{{ data.progress }} %</span>
            </div>
            <ProgressBar
              :value="50"
              :show-value="false"
              class="h-1.5 w-full"
              :pt="{
                root: { class: 'h-1.5 !bg-[#e2e8f0]' },
                value: { class: '!bg-[#10b981]' }
              }"
            />
          </div>
        </template>
      </Column>

      <Column
        header="Aktionen"
        :header-style="{ width: '108px' }"
        :body-style="{ width: '108px' }"
      >
        <template #body="{ data }">
          <div class="flex justify-center">
            <Button
              icon="pi pi-ellipsis-h"
              severity="secondary"
              text
              aria-label="Aktionen anzeigen"
              class="h-7 w-[35px]"
              @click="showActions($event, data)"
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
          class="h-[33px] w-full !justify-start"
        />
        <Button
          label="Status ändern"
          icon="pi pi-flag"
          severity="secondary"
          outlined
          class="h-[33px] w-full !justify-start"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          severity="secondary"
          outlined
          class="h-[33px] w-full !justify-start"
        />
        <Button
          label="Deaktiveren"
          icon="pi pi-trash"
          severity="secondary"
          outlined
          class="h-[33px] w-full !justify-start"
        />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Popover from 'primevue/popover'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

const actionsPopover = ref()
const selectedUser = ref(null)

const users = ref([
  {
    initial: 'M',
    name: 'Max Mustermann',
    status: 'In Prüfung',
    severity: 'danger',
    progressLabel: 'Zertifizierung',
    progress: 45
  },
  {
    initial: 'A',
    name: 'Anna Schmidt',
    status: 'Aktiv',
    severity: 'success',
    progressLabel: 'Onboarding',
    progress: 87
  },
  {
    initial: 'L',
    name: 'Lisa Weber',
    status: 'Inaktiv',
    severity: 'warn',
    progressLabel: 'Onboarding',
    progress: 4
  },
  {
    initial: 'P',
    name: 'Paul Müller',
    status: 'Inaktiv',
    severity: 'warn',
    progressLabel: 'Onboarding',
    progress: 11
  }
])

const showActions = (event, user) => {
  selectedUser.value = user
  actionsPopover.value.toggle(event)
}
</script>