<template>
  <div class="bg-white p-6">
    <DataTable
      :value="users"
      class="w-[728px]"
      table-class="w-[728px]"
      :pt="{
        headerCell: { class: 'px-3.5 py-2.5 text-sm font-semibold' },
        bodyCell: { class: 'px-3.5 py-2.5' },
      }"
    >
      <Column header="Nutzer" class="w-[256px]">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-700" />
            <span class="text-sm">{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Status" class="w-[108px]">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.statusSeverity" class="!text-xs" />
        </template>
      </Column>

      <Column header="Fortschritt" class="w-[256px]">
        <template #body="{ data }">
          <div class="flex w-[240px] flex-col gap-1">
            <div class="flex items-end justify-between">
              <span class="text-[10px]">{{ data.progressLabel }}</span>
              <span class="text-xs">{{ data.progress }} %</span>
            </div>
            <ProgressBar :value="data.progress" :show-value="false" class="!h-1.5" />
          </div>
        </template>
      </Column>

      <Column header="Aktion" class="w-[108px]">
        <template #body="{ data, index }">
          <div class="flex justify-center">
            <Button
              :ref="index === 2 ? 'thirdActionButton' : undefined"
              icon="pi pi-ellipsis-h"
              variant="text"
              severity="secondary"
              size="small"
              aria-label="Aktionen anzeigen"
              @click="toggleActions($event, data)"
            />
          </div>
        </template>
      </Column>
    </DataTable>

    <Popover ref="actionPopover" :pt="{ content: { class: '!p-2.5' } }">
      <div class="flex w-[169px] flex-col gap-2">
        <Button
          label="Profil bearbeiten"
          icon="pi pi-pen-to-square"
          severity="secondary"
          variant="outlined"
          size="small"
          class="w-full !justify-start"
        />
        <Button
          label="Status ändern"
          icon="pi pi-flag"
          severity="secondary"
          variant="outlined"
          size="small"
          class="w-full !justify-start"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          severity="secondary"
          variant="outlined"
          size="small"
          class="w-full !justify-start"
        />
        <Button
          label="Deaktivieren"
          icon="pi pi-trash"
          severity="secondary"
          variant="outlined"
          size="small"
          class="w-full !justify-start"
        />
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

const actionPopover = ref()
const thirdActionButton = ref()

function toggleActions(event: Event) {
  actionPopover.value?.toggle(event)
}

onMounted(async () => {
  await nextTick()

  const target = thirdActionButton.value?.$el

  if (target) {
    actionPopover.value?.show({ currentTarget: target, target })
  }
})
</script>