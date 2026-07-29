<template>
  <div class="p-6">
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
          <Tag :value="data.status" :severity="getStatusTagSeverity(data.status)" />
        </template>
      </Column>
      <Column field="progress" header="Fortschritt">
        <template #body="{ data }">
          <div class="flex w-60 flex-col gap-1">
            <div class="flex items-center justify-between">
              <span class="text-xs text-surface-500">{{ data.progressLabel }}</span>
              <span class="text-sm">{{ data.progress }} %</span>
            </div>
            <ProgressBar :value="data.progress" :show-value="false" class="!h-1.5" />
          </div>
        </template>
      </Column>
      <Column header="Aktion" header-class="w-24" body-class="w-24 flex justify-center">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            aria-haspopup="true"
            aria-controls="actions-menu"
            @click="(e) => openMenu(e, data)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="actionsPopover" id="actions-menu">
      <div class="flex w-44 flex-col gap-2">
        <Button label="Profil bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined class="w-full !justify-start" />
        <Button label="Status ändern" icon="pi pi-flag" severity="secondary" outlined class="w-full !justify-start" />
        <Button label="Duplizieren" icon="pi pi-clone" severity="secondary" outlined class="w-full !justify-start" />
        <Button label="Deaktiveren" icon="pi pi-trash" severity="secondary" outlined class="w-full !justify-start" />
      </div>
    </Popover>
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import Avatar from 'primevue/avatar'
  import Tag from 'primevue/tag'
  import ProgressBar from 'primevue/progressbar'
  import Button from 'primevue/button'
  import Popover from 'primevue/popover'

  const users = ref([
    {
      initial: 'M',
      name: 'Max Mustermann',
      status: 'In Prüfung',
      progressLabel: 'Zertifizierung',
      progress: 45,
    },
    {
      initial: 'A',
      name: 'Anna Schmidt',
      status: 'Aktiv',
      progressLabel: 'Onboarding',
      progress: 87,
    },
    {
      initial: 'L',
      name: 'Lisa Weber',
      status: 'Inaktiv',
      progressLabel: 'Onboarding',
      progress: 4,
    },
    {
      initial: 'P',
      name: 'Paul Müller',
      status: 'Inaktiv',
      progressLabel: 'Onboarding',
      progress: 11,
    },
  ])

  const actionsPopover = useTemplateRef('actionsPopover')

  function openMenu(event: Event, data: unknown) {
    actionsPopover.value?.toggle(event)
  }

  function getStatusTagSeverity(status: string) {
    switch (status) {
      case 'Aktiv':
        return 'success'
      case 'In Prüfung':
        return 'danger'
      case 'Inaktiv':
        return 'warn'
      default:
        return 'secondary'
    }
  }
</script>