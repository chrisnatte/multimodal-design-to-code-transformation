<template>
  <div class="w-[728px] p-6">
    <DataTable
      :value="users"
      table-class="w-full"
      :pt="{
        headerCell: 'bg-transparent px-3 py-2 text-sm font-semibold',
        bodyCell: 'border-t border-surface-200 px-3 py-2',
      }"
    >
      <Column header="Nutzer" class="w-[256px]">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" />
            <span class="text-sm">{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Status" class="w-[108px]">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.statusSeverity" />
        </template>
      </Column>

      <Column header="Fortschritt" class="w-[274px]">
        <template #body="{ data }">
          <div class="flex w-full flex-col gap-1">
            <div class="flex items-center justify-between text-[11px]">
              <span>{{ data.course }}</span>
              <span>{{ data.progress }} %</span>
            </div>
            <ProgressBar :value="50" :show-value="false" class="h-1.5 w-full" />
          </div>
        </template>
      </Column>

      <Column header="Aktion" class="w-[72px]">
        <template #body="{ data }">
          <div class="flex justify-center">
            <Button
              icon="pi pi-ellipsis-h"
              severity="secondary"
              variant="text"
              :aria-label="`Aktionen für ${data.name}`"
              @click="toggleActions"
            />
          </div>
        </template>
      </Column>
    </DataTable>

    <Popover ref="actionsPopover" :pt="{ content: '!p-3' }">
      <div class="flex w-[168px] flex-col gap-2">
        <Button
          label="Profil bearbeiten"
          icon="pi pi-pen-to-square"
          severity="secondary"
          variant="outlined"
          fluid
          class="!justify-start"
        />
        <Button
          label="Status ändern"
          icon="pi pi-flag"
          severity="secondary"
          variant="outlined"
          fluid
          class="!justify-start"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          severity="secondary"
          variant="outlined"
          fluid
          class="!justify-start"
        />
        <Button
          label="Deaktivieren"
          icon="pi pi-trash"
          severity="secondary"
          variant="outlined"
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

const actionsPopover = ref<InstanceType<typeof Popover> | null>(null)

const users = ref([
  {
    initials: 'M',
    name: 'Max Mustermann',
    status: 'In Prüfung',
    statusSeverity: 'danger',
    course: 'Zertifizierung',
    progress: 45,
  },
  {
    initials: 'A',
    name: 'Anna Schmidt',
    status: 'Aktiv',
    statusSeverity: 'success',
    course: 'Onboarding',
    progress: 87,
  },
  {
    initials: 'L',
    name: 'Lisa Weber',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    course: 'Onboarding',
    progress: 4,
  },
  {
    initials: 'P',
    name: 'Paul Müller',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    course: 'Onboarding',
    progress: 11,
  },
])

const toggleActions = (event: Event) => {
  actionsPopover.value?.toggle(event)
}
</script>