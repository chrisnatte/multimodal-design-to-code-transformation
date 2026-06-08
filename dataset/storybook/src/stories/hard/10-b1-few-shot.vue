<template>
  <div class="flex flex-col gap-4">
    <DataTable :value="rows">
      <Column field="user" header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.avatar" shape="circle" />
            <span>{{ data.user }}</span>
          </div>
        </template>
      </Column>

      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.statusSeverity" />
        </template>
      </Column>

      <Column header="Fortschritt">
        <template #body="{ data }">
          <div class="flex flex-col gap-1 w-48">
            <div class="flex items-center justify-between">
              <span class="text-xs">{{ data.progressLabel }}</span>
              <span class="text-sm">{{ data.progress }} %</span>
            </div>
            <ProgressBar :value="data.progress" />
          </div>
        </template>
      </Column>

      <Column header="Aktionen">
        <template #body>
          <Button icon="pi pi-ellipsis-h" text severity="secondary" />
        </template>
      </Column>
    </DataTable>

    <Popover>
      <div class="flex flex-col gap-2 p-3">
        <Button label="Profil bearbeiten" icon="pi pi-pencil" outlined severity="secondary" class="justify-start" />
        <Button label="Status ändern" icon="pi pi-flag" outlined severity="secondary" class="justify-start" />
        <Button label="Duplizieren" icon="pi pi-copy" outlined severity="secondary" class="justify-start" />
        <Button label="Deaktiveren" icon="pi pi-trash" outlined severity="secondary" class="justify-start" />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'
import Popover from 'primevue/popover'

const rows = reactive([
  { user: 'Max Mustermann', avatar: 'M', status: 'In Prüfung', statusSeverity: 'danger', progressLabel: 'Zertifizierung', progress: 45 },
  { user: 'Anna Schmidt', avatar: 'A', status: 'Aktiv', statusSeverity: 'success', progressLabel: 'Onboarding', progress: 87 },
  { user: 'Lisa Weber', avatar: 'L', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progress: 4 },
  { user: 'Paul Müller', avatar: 'P', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progress: 11 }
])
</script>