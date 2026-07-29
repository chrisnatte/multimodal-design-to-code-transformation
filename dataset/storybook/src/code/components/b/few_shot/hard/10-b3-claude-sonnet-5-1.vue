<template>
  <div class="w-full p-6">
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
          <div class="flex w-60 flex-col gap-1">
            <div class="flex items-center justify-between">
              <span class="text-xs">{{ data.progressLabel }}</span>
              <span class="text-xs">{{ data.progress }} %</span>
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
            rounded
            aria-haspopup="true"
            aria-controls="actions-popover"
            @click="(event) => togglePopover(event, data)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="popoverRef" id="actions-popover">
      <div class="flex w-[169px] flex-col gap-2">
        <Button label="Profil bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined class="!justify-start" />
        <Button label="Status ändern" icon="pi pi-flag" severity="secondary" outlined class="!justify-start" />
        <Button label="Duplizieren" icon="pi pi-clone" severity="secondary" outlined class="!justify-start" />
        <Button label="Deaktiveren" icon="pi pi-trash" severity="secondary" outlined class="!justify-start" />
      </div>
    </Popover>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import Avatar from 'primevue/avatar'
  import Tag from 'primevue/tag'
  import ProgressBar from 'primevue/progressbar'
  import Button from 'primevue/button'
  import Popover from 'primevue/popover'

  const users = ref([
    {
      name: 'Max Mustermann',
      initial: 'M',
      status: 'In Prüfung',
      progress: 45,
      progressLabel: 'Zertifizierung',
    },
    {
      name: 'Anna Schmidt',
      initial: 'A',
      status: 'Aktiv',
      progress: 87,
      progressLabel: 'Onboarding',
    },
    {
      name: 'Lisa Weber',
      initial: 'L',
      status: 'Inaktiv',
      progress: 4,
      progressLabel: 'Onboarding',
    },
    {
      name: 'Paul Müller',
      initial: 'P',
      status: 'Inaktiv',
      progress: 11,
      progressLabel: 'Onboarding',
    },
  ])

  const popoverRef = ref()

  function togglePopover(event: Event, data: any) {
    popoverRef.value?.toggle(event)
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
        return 'info'
    }
  }
</script>