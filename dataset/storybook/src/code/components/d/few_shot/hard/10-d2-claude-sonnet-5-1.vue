<template>
  <DataTable :value="users">
    <Column field="name" header="Nutzer">
      <template #body="{ data }">
        <div class="flex items-center gap-3">
          <Avatar :label="data.name.charAt(0)" shape="circle" />
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
            <span>{{ data.progress }} %</span>
          </div>
          <ProgressBar :value="data.progress" :show-value="false" class="!h-1.5" />
        </div>
      </template>
    </Column>
    <Column header="Aktion" body-class="w-24 flex justify-center">
      <template #body="{ data }">
        <Button
          icon="pi pi-ellipsis-h"
          text
          severity="secondary"
          aria-haspopup="true"
          aria-controls="user-actions-popover"
          @click="toggleActionsPopover($event, data)"
        />
      </template>
    </Column>
  </DataTable>

  <Popover ref="actionsPopover" id="user-actions-popover">
    <div class="flex flex-col gap-2 w-44">
      <Button label="Profil bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined class="!justify-start" />
      <Button label="Status ändern" icon="pi pi-flag" severity="secondary" outlined class="!justify-start" />
      <Button label="Duplizieren" icon="pi pi-clone" severity="secondary" outlined class="!justify-start" />
      <Button label="Deaktiveren" icon="pi pi-trash" severity="secondary" outlined class="!justify-start" />
    </div>
  </Popover>
</template>

<script setup>
  import { ref } from 'vue'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import Avatar from 'primevue/avatar'
  import Tag from 'primevue/tag'
  import ProgressBar from 'primevue/progressbar'
  import Button from 'primevue/button'
  import Popover from 'primevue/popover'

  const users = ref([
    { name: 'Max Mustermann', status: 'In Prüfung', progressLabel: 'Zertifizierung', progress: 45 },
    { name: 'Anna Schmidt', status: 'Aktiv', progressLabel: 'Onboarding', progress: 87 },
    { name: 'Lisa Weber', status: 'Inaktiv', progressLabel: 'Onboarding', progress: 4 },
    { name: 'Paul Müller', status: 'Inaktiv', progressLabel: 'Onboarding', progress: 11 },
  ])

  const actionsPopover = ref()
  const selectedUser = ref(null)

  function toggleActionsPopover(event, data) {
    selectedUser.value = data
    actionsPopover.value.toggle(event)
  }

  function getStatusSeverity(status) {
    switch (status) {
      case 'Aktiv':
        return 'success'
      case 'In Prüfung':
        return 'danger'
      case 'Inaktiv':
        return 'warn'
      default:
        return null
    }
  }
</script>