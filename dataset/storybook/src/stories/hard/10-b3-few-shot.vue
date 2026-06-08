<template>
  <div class="flex flex-col gap-4">
    <DataTable :value="state.users" tableStyle="min-width: 60rem">
      <Column header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3 py-2.5 px-3.5">
            <Avatar :label="data.initials" shape="circle" />
            <span>{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Status">
        <template #body="{ data }">
          <div class="py-2.5 px-3.5">
            <Tag :value="data.status" :severity="data.statusSeverity" />
          </div>
        </template>
      </Column>

      <Column header="Fortschritt">
        <template #body="{ data }">
          <div class="flex flex-col gap-1 py-2.5 px-3.5 w-56">
            <div class="flex items-end justify-between">
              <span class="text-xs">{{ data.progressLabel }}</span>
              <span class="text-sm">{{ data.progress }} %</span>
            </div>
            <ProgressBar :value="data.progress" />
          </div>
        </template>
      </Column>

      <Column header="Aktionen">
        <template #body="{ data }">
          <div class="flex justify-center py-2.5 px-3.5">
            <Button
              icon="pi pi-ellipsis-h"
              text
              severity="secondary"
              @click="togglePopover($event, data)"
            />
          </div>
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-2 p-2.5 w-56">
        <Button label="Profil bearbeiten" icon="pi pi-pencil" outlined severity="secondary" />
        <Button label="Status ändern" icon="pi pi-flag" outlined severity="secondary" />
        <Button label="Duplizieren" icon="pi pi-copy" outlined severity="secondary" />
        <Button label="Deaktiveren" icon="pi pi-trash" outlined severity="secondary" />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'
import Popover from 'primevue/popover'

const op = ref()

const state = reactive({
  selectedUser: null,
  users: [
    { initials: 'M', name: 'Max Mustermann', status: 'In Prüfung', statusSeverity: 'danger', progressLabel: 'Zertifizierung', progress: 45 },
    { initials: 'A', name: 'Anna Schmidt', status: 'Aktiv', statusSeverity: 'success', progressLabel: 'Onboarding', progress: 87 },
    { initials: 'L', name: 'Lisa Weber', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progress: 4 },
    { initials: 'P', name: 'Paul Müller', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progress: 11 }
  ]
})

const togglePopover = (event, user) => {
  state.selectedUser = user
  op.value.toggle(event)
}
</script>