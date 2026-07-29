<template>
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
        <div class="flex flex-col gap-1 w-52">
          <div class="flex justify-between text-sm text-gray-500">
            <span>{{ data.progressLabel }}</span>
            <span>{{ data.progress }} %</span>
          </div>
          <ProgressBar :value="data.progress" :show-value="false" class="!h-1.5" />
        </div>
      </template>
    </Column>
    <Column header="Aktion" header-class="w-20" body-class="w-20">
      <template #body="{ data }">
        <Button
          icon="pi pi-ellipsis-h"
          text
          severity="secondary"
          aria-haspopup="true"
          aria-controls="actions-popover"
          @click="toggleActions($event, data)"
        />
      </template>
    </Column>
  </DataTable>

  <Popover ref="actionsPopover" id="actions-popover">
    <div class="flex flex-col gap-2 w-52">
      <Button label="Profil bearbeiten" icon="pi pi-pen-to-square" text severity="secondary" class="w-full !justify-start" />
      <Button label="Status ändern" icon="pi pi-flag" text severity="secondary" class="w-full !justify-start" />
      <Button label="Duplizieren" icon="pi pi-clone" text severity="secondary" class="w-full !justify-start" />
      <Button label="Deaktiveren" icon="pi pi-trash" text severity="secondary" class="w-full !justify-start" />
    </div>
  </Popover>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import Avatar from 'primevue/avatar'
  import Tag from 'primevue/tag'
  import Column from 'primevue/column'
  import DataTable from 'primevue/datatable'
  import Button from 'primevue/button'
  import ProgressBar from 'primevue/progressbar'
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

  const actionsPopover = useTemplateRef('actionsPopover')

  function toggleActions(event: Event, data: any) {
    actionsPopover.value?.toggle(event)
  }

  function getStatusSeverity(status: string) {
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