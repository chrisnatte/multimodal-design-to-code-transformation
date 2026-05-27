<template>
  <div class="p-6 bg-surface-100 min-h-screen">
    <DataTable :value="state.users" tableStyle="min-width: 760px" class="rounded-xl overflow-hidden">
      <Column header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initial" shape="circle" class="bg-surface-200 text-surface-700" />
            <span class="text-surface-700 text-xl">{{ data.name }}</span>
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
          <div class="flex flex-col gap-1 w-full max-w-[240px]">
            <div class="flex items-center justify-between text-sm text-surface-600">
              <span>{{ data.step }}</span>
              <span>{{ data.progress }} %</span>
            </div>
            <ProgressBar :value="data.progress" :showValue="false" style="height: 6px" />
          </div>
        </template>
      </Column>

      <Column header="Aktion" style="width: 90px">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            text
            rounded
            severity="secondary"
            @click="toggleMenu($event, data)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="opRef">
      <div class="flex flex-col gap-2 w-[220px]">
        <Button label="Profil bearbeiten" icon="pi pi-pencil" outlined severity="secondary" class="justify-start" />
        <Button label="Status ändern" icon="pi pi-flag" outlined severity="secondary" class="justify-start" />
        <Button label="Duplizieren" icon="pi pi-copy" outlined severity="secondary" class="justify-start" />
        <Button label="Deaktivieren" icon="pi pi-trash" outlined severity="secondary" class="justify-start" />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import ProgressBar from 'primevue/progressbar'
import Popover from 'primevue/popover'
import Avatar from 'primevue/avatar'

const state = reactive({
  selectedUser: null,
  users: [
    { id: 1, initial: 'M', name: 'Max Mustermann', status: 'In Prüfung', statusSeverity: 'danger', step: 'Zertifizierung', progress: 45 },
    { id: 2, initial: 'A', name: 'Anna Schmidt', status: 'Aktiv', statusSeverity: 'success', step: 'Onboarding', progress: 87 },
    { id: 3, initial: 'L', name: 'Lisa Weber', status: 'Inaktiv', statusSeverity: 'warn', step: 'Onboarding', progress: 4 },
    { id: 4, initial: 'P', name: 'Paul Müller', status: 'Inaktiv', statusSeverity: 'warn', step: 'Onboarding', progress: 11 }
  ]
})

const opRef = ref()

const toggleMenu = (event, user) => {
  state.selectedUser = user
  opRef.value.toggle(event)
}
</script>