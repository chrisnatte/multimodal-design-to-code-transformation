<template>
  <DataTable :value="users" class="w-full">
    <Column field="name" header="Nutzer">
      <template #body="{ data }">
        <div class="flex items-center gap-3">
          <Avatar :label="data.avatar" shape="circle" />
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
          <div class="flex items-center justify-between">
            <span class="text-xs text-gray-500">{{ data.progressLabel }}</span>
            <span class="text-xs">{{ data.progress }} %</span>
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
          aria-controls="actions-popover"
          @click="(e) => toggleActionsPopover(e, data)"
        />
      </template>
    </Column>
  </DataTable>
  <Popover ref="actionsPopover" id="actions-popover">
    <div class="flex flex-col gap-2 w-44">
      <Button label="Profil bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined class="w-full !justify-start" />
      <Button label="Status ändern" icon="pi pi-flag" severity="secondary" outlined class="w-full !justify-start" />
      <Button label="Duplizieren" icon="pi pi-clone" severity="secondary" outlined class="w-full !justify-start" />
      <Button label="Deaktiveren" icon="pi pi-trash" severity="secondary" outlined class="w-full !justify-start" />
    </div>
  </Popover>
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
      avatar: 'M',
      name: 'Max Mustermann',
      status: 'In Prüfung',
      progressLabel: 'Zertifizierung',
      progress: 45,
    },
    {
      avatar: 'A',
      name: 'Anna Schmidt',
      status: 'Aktiv',
      progressLabel: 'Onboarding',
      progress: 87,
    },
    {
      avatar: 'L',
      name: 'Lisa Weber',
      status: 'Inaktiv',
      progressLabel: 'Onboarding',
      progress: 4,
    },
    {
      avatar: 'P',
      name: 'Paul Müller',
      status: 'Inaktiv',
      progressLabel: 'Onboarding',
      progress: 11,
    },
  ])

  const actionsPopover = useTemplateRef('actionsPopover')

  function toggleActionsPopover(event: Event, data: any) {
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
    }
  }
</script>