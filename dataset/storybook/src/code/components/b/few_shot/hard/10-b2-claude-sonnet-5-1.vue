<template>
  <div class="p-6 bg-white">
    <DataTable :value="users">
      <Column field="name" header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initial" shape="circle" />
            <span>{{ data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
        </template>
      </Column>
      <Column field="progress" header="Fortschritt">
        <template #body="{ data }">
          <div class="flex flex-col gap-1 w-60">
            <div class="flex justify-between text-xs">
              <span>{{ data.progressLabel }}</span>
              <span class="text-sm">{{ data.progress }} %</span>
            </div>
            <ProgressBar :value="data.progress" :show-value="false" class="!h-1.5" />
          </div>
        </template>
      </Column>
      <Column header="Aktionen" header-class="w-24" body-class="w-24 flex justify-center">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            aria-haspopup="true"
            aria-controls="actions-popover"
            @click="toggleActionsPopover($event, data)"
          />
        </template>
      </Column>
    </DataTable>
  </div>

  <Popover ref="actionsPopoverRef" id="actions-popover">
    <div class="flex flex-col gap-2 w-[169px]">
      <Button label="Profil bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined class="w-full !justify-start" />
      <Button label="Status ändern" icon="pi pi-flag" severity="secondary" outlined class="w-full !justify-start" />
      <Button label="Duplizieren" icon="pi pi-clone" severity="secondary" outlined class="w-full !justify-start" />
      <Button label="Deaktiveren" icon="pi pi-trash" severity="secondary" outlined class="w-full !justify-start" />
    </div>
  </Popover>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Avatar from 'primevue/avatar'
  import Column from 'primevue/column'
  import DataTable from 'primevue/datatable'
  import Tag from 'primevue/tag'
  import ProgressBar from 'primevue/progressbar'
  import Button from 'primevue/button'
  import Popover from 'primevue/popover'

  const users = ref([
    {
      name: 'Max Mustermann',
      initial: 'M',
      status: 'In Prüfung',
      progressLabel: 'Zertifizierung',
      progress: 45,
    },
    {
      name: 'Anna Schmidt',
      initial: 'A',
      status: 'Aktiv',
      progressLabel: 'Onboarding',
      progress: 87,
    },
    {
      name: 'Lisa Weber',
      initial: 'L',
      status: 'Inaktiv',
      progressLabel: 'Onboarding',
      progress: 4,
    },
    {
      name: 'Paul Müller',
      initial: 'P',
      status: 'Inaktiv',
      progressLabel: 'Onboarding',
      progress: 11,
    },
  ])

  const actionsPopoverRef = ref()

  function toggleActionsPopover(event: Event, data: any) {
    actionsPopoverRef.value.toggle(event)
  }

  function getStatusSeverity(status: string) {
    switch (status) {
      case 'Aktiv':
        return 'success'
      case 'Inaktiv':
        return 'warn'
      case 'In Prüfung':
        return 'danger'
      default:
        return null
    }
  }
</script>