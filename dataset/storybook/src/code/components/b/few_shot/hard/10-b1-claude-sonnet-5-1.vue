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
          <Tag :value="data.status" :severity="getStatusTagSeverity(data.status)" />
        </template>
      </Column>
      <Column field="progress" header="Fortschritt">
        <template #body="{ data }">
          <div class="flex flex-col gap-1 w-60">
            <div class="flex justify-between text-sm">
              <span class="text-xs">{{ data.progressLabel }}</span>
              <span>{{ data.progress }} %</span>
            </div>
            <ProgressBar :value="data.progress" :show-value="false" class="!h-1.5" />
          </div>
        </template>
      </Column>
      <Column header="Aktionen" header-class="w-24" body-class="w-24 flex justify-center">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            severity="plain"
            text
            aria-haspopup="true"
            aria-controls="actions-popover"
            @click="togglePopover($event, data)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="actionsPopover" id="actions-popover">
      <div class="flex flex-col gap-2 w-[169px]">
        <Button label="Profil bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined class="!justify-start" />
        <Button label="Status ändern" icon="pi pi-flag" severity="secondary" outlined class="!justify-start" />
        <Button label="Duplizieren" icon="pi pi-clone" severity="secondary" outlined class="!justify-start" />
        <Button label="Deaktiveren" icon="pi pi-trash" severity="secondary" outlined class="!justify-start" />
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

  function togglePopover(event: Event, data: unknown) {
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
        return 'info'
    }
  }
</script>