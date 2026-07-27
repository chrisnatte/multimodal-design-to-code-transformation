<template>
    <div class="relative w-full max-w-4xl bg-white p-6 flex flex-col">
      <DataTable :value="users" class="w-full">
        <Column header="Nutzer">
          <template #body="{ data }">
            <div class="flex items-center gap-3">
              <Avatar :label="data.initials" shape="circle" class="bg-gray-200 text-gray-700" />
              <span class="text-sm">{{ data.name }}</span>
            </div>
          </template>
        </Column>
        <Column header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="data.statusSeverity" />
          </template>
        </Column>
        <Column header="Fortschritt">
          <template #body="{ data }">
            <div class="w-60 flex flex-col gap-1">
              <div class="flex justify-between items-end">
                <span class="text-xs text-gray-600">{{ data.progressLabel }}</span>
                <span class="text-xs">{{ data.progress }} %</span>
              </div>
              <ProgressBar :value="data.progress" :showValue="false" class="h-1.5" />
            </div>
          </template>
        </Column>
        <Column header="Aktionen">
          <template #body="{ data }">
            <div class="flex items-center justify-center">
              <Button icon="pi pi-ellipsis-h" text plain @click="togglePopover($event, data)" />
            </div>
          </template>
        </Column>
      </DataTable>
  
      <Popover ref="op">
        <div class="flex flex-col gap-2 w-48">
          <Button icon="pi pi-pencil" label="Profil bearbeiten" severity="secondary" outlined class="w-full justify-start" />
          <Button icon="pi pi-flag" label="Status ändern" severity="secondary" outlined class="w-full justify-start" />
          <Button icon="pi pi-copy" label="Duplizieren" severity="secondary" outlined class="w-full justify-start" />
          <Button icon="pi pi-trash" label="Deaktiveren" severity="secondary" outlined class="w-full justify-start" />
        </div>
      </Popover>
    </div>
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
  
  const op = ref()
  const selectedUser = ref()
  
  const users = ref([
    { id: 1, name: 'Max Mustermann', initials: 'M', status: 'In Prüfung', statusSeverity: 'danger', progressLabel: 'Zertifizierung', progress: 45 },
    { id: 2, name: 'Anna Schmidt', initials: 'A', status: 'Aktiv', statusSeverity: 'success', progressLabel: 'Onboarding', progress: 87 },
    { id: 3, name: 'Lisa Weber', initials: 'L', status: 'Inaktiv', statusSeverity: 'warning', progressLabel: 'Onboarding', progress: 4 },
    { id: 4, name: 'Paul Müller', initials: 'P', status: 'Inaktiv', statusSeverity: 'warning', progressLabel: 'Onboarding', progress: 11 }
  ])
  
  const togglePopover = (event, user) => {
    selectedUser.value = user
    op.value.toggle(event)
  }
  </script>