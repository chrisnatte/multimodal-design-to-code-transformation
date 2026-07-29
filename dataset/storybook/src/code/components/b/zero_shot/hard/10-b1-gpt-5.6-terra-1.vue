<template>
  <div class="relative flex h-[410px] w-[897px] bg-white p-6">
    <DataTable
      :value="users"
      data-key="name"
      show-gridlines
      class="w-[728px] self-start"
      table-style="width: 728px"
    >
      <Column header="Nutzer" header-style="width: 256px" body-style="width: 256px">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initial" shape="circle" class="h-7 w-7 bg-slate-200 text-sm text-slate-700" />
            <span class="text-sm">{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Status" header-style="width: 108px" body-style="width: 108px">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.statusSeverity" class="text-xs" />
        </template>
      </Column>

      <Column header="Fortschritt" header-style="width: 256px" body-style="width: 256px">
        <template #body="{ data }">
          <div class="flex w-full flex-col gap-1">
            <div class="flex items-end justify-between">
              <span class="text-[10px] leading-3">{{ data.progressLabel }}</span>
              <span class="text-xs leading-[15px]">{{ data.progress }} %</span>
            </div>
            <ProgressBar :value="data.progress" :show-value="false" class="h-[6px]" />
          </div>
        </template>
      </Column>

      <Column header="Aktionen" header-style="width: 108px" body-style="width: 108px">
        <template #body="{ data, index }">
          <div class="flex justify-center">
            <Button
              :ref="(element) => setActionButton(element, index)"
              icon="pi pi-ellipsis-h"
              severity="secondary"
              text
              size="small"
              aria-label="Aktionen anzeigen"
              :class="index === 2 ? 'bg-slate-100' : ''"
              @click="toggleActions($event)"
            />
          </div>
        </template>
      </Column>
    </DataTable>

    <Popover ref="actionsPopover" :dismissable="false">
      <div class="flex w-[169px] flex-col gap-2">
        <Button
          label="Profil bearbeiten"
          icon="pi pi-pencil"
          severity="secondary"
          outlined
          class="w-full justify-start"
        />
        <Button
          label="Status ändern"
          icon="pi pi-flag"
          severity="secondary"
          outlined
          class="w-full justify-start"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          severity="secondary"
          outlined
          class="w-full justify-start"
        />
        <Button
          label="Deaktiveren"
          icon="pi pi-trash"
          severity="secondary"
          outlined
          class="w-full justify-start"
        />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Popover from 'primevue/popover'
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'

const actionsPopover = ref()
const actionButtons = ref([])

const users = ref([
  {
    initial: 'M',
    name: 'Max Mustermann',
    status: 'In Prüfung',
    statusSeverity: 'danger',
    progressLabel: 'Zertifizierung',
    progress: 45
  },
  {
    initial: 'A',
    name: 'Anna Schmidt',
    status: 'Aktiv',
    statusSeverity: 'success',
    progressLabel: 'Onboarding',
    progress: 87
  },
  {
    initial: 'L',
    name: 'Lisa Weber',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    progressLabel: 'Onboarding',
    progress: 4
  },
  {
    initial: 'P',
    name: 'Paul Müller',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    progressLabel: 'Onboarding',
    progress: 11
  }
])

const setActionButton = (element, index) => {
  if (element) {
    actionButtons.value[index] = element
  }
}

const toggleActions = (event) => {
  actionsPopover.value.toggle(event)
}

onMounted(async () => {
  await nextTick()

  const activeButton = actionButtons.value[2]?.$el

  if (activeButton) {
    actionsPopover.value.show({ currentTarget: activeButton })
  }
})
</script>