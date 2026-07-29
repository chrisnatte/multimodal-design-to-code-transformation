<template>
  <div class="p-6">
    <DataTable
      :value="users"
      class="w-[728px]"
      :pt="{
        table: 'w-full',
        headerCell: 'px-3 py-2 text-sm font-semibold',
        bodyCell: 'px-3 py-2 text-sm',
      }"
    >
      <Column header="Nutzer" class="w-[256px]">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="!h-7 !w-7 !text-sm" />
            <span>{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Status" class="w-[108px]">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.severity" class="!px-2 !py-1 !text-xs" />
        </template>
      </Column>

      <Column header="Fortschritt" class="w-[274px]">
        <template #body="{ data }">
          <div class="flex w-[240px] flex-col gap-1">
            <div class="flex items-center justify-between text-[10px]">
              <span>{{ data.course }}</span>
              <span>{{ data.progress }} %</span>
            </div>
            <ProgressBar :value="data.progress" :show-value="false" class="!h-1.5 w-full" />
          </div>
        </template>
      </Column>

      <Column header="Aktion" class="w-[64px]">
        <template #body="{ data, index }">
          <Button
            ref="actionButtons"
            icon="pi pi-ellipsis-h"
            :severity="activeUser === index ? 'secondary' : undefined"
            :text="activeUser !== index"
            rounded
            aria-label="Aktionen"
            aria-haspopup="true"
            @click="toggleActions($event, index)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="actionsPopover" :pt="{ content: '!p-2' }">
      <div class="flex w-[176px] flex-col gap-2">
        <Button
          label="Profil bearbeiten"
          icon="pi pi-pen-to-square"
          severity="secondary"
          variant="outlined"
          class="w-full !justify-start !text-sm"
        />
        <Button
          label="Status ändern"
          icon="pi pi-flag"
          severity="secondary"
          variant="outlined"
          class="w-full !justify-start !text-sm"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          severity="secondary"
          variant="outlined"
          class="w-full !justify-start !text-sm"
        />
        <Button
          label="Deaktivieren"
          icon="pi pi-trash"
          severity="secondary"
          variant="outlined"
          class="w-full !justify-start !text-sm"
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
    severity: 'danger',
    course: 'Zertifizierung',
    progress: 45,
  },
  {
    initials: 'A',
    name: 'Anna Schmidt',
    status: 'Aktiv',
    severity: 'success',
    course: 'Onboarding',
    progress: 87,
  },
  {
    initials: 'L',
    name: 'Lisa Weber',
    status: 'Inaktiv',
    severity: 'warn',
    course: 'Onboarding',
    progress: 4,
  },
  {
    initials: 'P',
    name: 'Paul Müller',
    status: 'Inaktiv',
    severity: 'warn',
    course: 'Onboarding',
    progress: 11,
  },
])

const activeUser = ref(2)
const actionsPopover = ref()
const actionButtons = ref()

function toggleActions(event: Event, index: number) {
  activeUser.value = index
  actionsPopover.value.toggle(event)
}

onMounted(async () => {
  await nextTick()
  const target = actionButtons.value?.[2]?.$el

  if (target) {
    actionsPopover.value.show({ currentTarget: target })
  }
})
</script>