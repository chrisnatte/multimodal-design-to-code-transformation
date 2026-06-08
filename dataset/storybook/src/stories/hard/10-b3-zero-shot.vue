<template>
  <div class="bg-white p-4">
    <div class="flex flex-col">
      <DataTable :value="state.users" tableStyle="min-width: 70rem">
        <Column field="name" header="Nutzer">
          <template #body="slotProps">
            <div class="flex items-center gap-3 px-3.5 py-2.5">
              <Avatar :label="slotProps.data.initial" shape="circle" />
              <span>{{ slotProps.data.name }}</span>
            </div>
          </template>
        </Column>

        <Column field="status" header="Status">
          <template #body="slotProps">
            <div class="px-3.5 py-2.5">
              <Tag :value="slotProps.data.status" :severity="slotProps.data.statusSeverity" />
            </div>
          </template>
        </Column>

        <Column header="Fortschritt">
          <template #body="slotProps">
            <div class="flex flex-col gap-1 px-3.5 py-2.5 w-64">
              <div class="flex justify-between items-start">
                <span class="text-xs">{{ slotProps.data.progressLabel }}</span>
                <span class="text-sm">{{ slotProps.data.progress }} %</span>
              </div>
              <ProgressBar :value="slotProps.data.progress" :showValue="false" />
            </div>
          </template>
        </Column>

        <Column header="Aktionen">
          <template #body="slotProps">
            <div class="flex items-center justify-center px-3.5 py-2.5">
              <Button
                icon="pi pi-ellipsis-h"
                text
                severity="secondary"
                @click="togglePopover($event, slotProps.data)"
              />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>

    <div class="flex flex-col">
      <Popover ref="op">
        <div class="flex flex-col gap-3.5 p-2.5">
          <div class="flex flex-col gap-2">
            <Button label="Profil bearbeiten" icon="pi pi-pencil" severity="secondary" outlined />
            <Button label="Status ändern" icon="pi pi-flag" severity="secondary" outlined />
            <Button label="Duplizieren" icon="pi pi-copy" severity="secondary" outlined />
            <Button label="Deaktivieren" icon="pi pi-trash" severity="secondary" outlined />
          </div>
        </div>
      </Popover>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Popover from 'primevue/popover'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import ProgressBar from 'primevue/progressbar'

const op = ref(null)

const state = reactive({
  selectedUser: null,
  users: [
    { initial: 'M', name: 'Max Mustermann', status: 'In Prüfung', statusSeverity: 'danger', progressLabel: 'Zertifizierung', progress: 45 },
    { initial: 'A', name: 'Anna Schmidt', status: 'Aktiv', statusSeverity: 'success', progressLabel: 'Onboarding', progress: 87 },
    { initial: 'L', name: 'Lisa Weber', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progress: 4 },
    { initial: 'P', name: 'Paul Müller', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progress: 11 }
  ]
})

const togglePopover = (event, user) => {
  state.selectedUser = user
  op.value.toggle(event)
}
</script>