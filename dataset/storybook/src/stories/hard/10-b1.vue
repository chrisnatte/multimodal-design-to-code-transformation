<template>
  <div class="bg-white p-4">
    <div class="flex flex-col">
      <DataTable :value="state.users" class="w-full">
        <Column field="name" header="Nutzer">
          <template #body="{ data }">
            <div class="flex items-center gap-3 py-2.5 px-3.5">
              <Avatar :label="data.initials" shape="circle" />
              <span class="text-sm">{{ data.name }}</span>
            </div>
          </template>
        </Column>

        <Column field="status" header="Status">
          <template #body="{ data }">
            <div class="py-2.5 px-3.5">
              <Tag :value="data.status" :severity="data.statusSeverity" />
            </div>
          </template>
        </Column>

        <Column field="progress" header="Fortschritt">
          <template #body="{ data }">
            <div class="flex flex-col gap-1 py-2.5 px-3.5 w-56">
              <div class="flex justify-between">
                <span class="text-[10px]">{{ data.progressLabel }}</span>
                <span class="text-xs">{{ data.progress }} %</span>
              </div>
              <ProgressBar :value="data.progress" :showValue="false" />
            </div>
          </template>
        </Column>

        <Column header="Aktionen">
          <template #body>
            <div class="py-2.5 px-3.5 flex justify-center">
              <Button icon="pi pi-ellipsis-h" text severity="secondary" @click="state.showPopover = !state.showPopover" />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>

    <div v-if="state.showPopover" class="flex flex-col mt-4">
      <div class="flex flex-col gap-3.5">
        <div class="rounded-md bg-white border border-surface-200">
          <div class="flex flex-col gap-2 p-2.5">
            <Button label="Profil bearbeiten" icon="pi pi-pen-to-square" outlined severity="secondary" class="justify-start" />
            <Button label="Status ändern" icon="pi pi-flag" outlined severity="secondary" class="justify-start" />
            <Button label="Duplizieren" icon="pi pi-clone" outlined severity="secondary" class="justify-start" />
            <Button label="Deaktiveren" icon="pi pi-trash" outlined severity="secondary" class="justify-start" />
          </div>
        </div>
      </div>
    </div>
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

const state = reactive({
  showPopover: true,
  users: [
    { initials: 'M', name: 'Max Mustermann', status: 'In Prüfung', statusSeverity: 'danger', progressLabel: 'Zertifizierung', progress: 45 },
    { initials: 'A', name: 'Anna Schmidt', status: 'Aktiv', statusSeverity: 'success', progressLabel: 'Onboarding', progress: 87 },
    { initials: 'L', name: 'Lisa Weber', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progress: 4 },
    { initials: 'P', name: 'Paul Müller', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progress: 11 }
  ]
})
</script>