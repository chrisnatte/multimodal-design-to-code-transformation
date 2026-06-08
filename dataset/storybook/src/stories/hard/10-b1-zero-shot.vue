<template>
  <div class="bg-white p-4">
    <div class="flex flex-col">
      <DataTable :value="state.users" class="w-full">
        <Column field="name" header="Nutzer">
          <template #body="{ data }">
            <div class="flex items-center gap-3 py-2.5 px-3.5">
              <Avatar :label="data.initial" shape="circle" />
              <span>{{ data.name }}</span>
            </div>
          </template>
        </Column>

        <Column field="status" header="Status">
          <template #body="{ data }">
            <div class="flex items-center py-2.5 px-3.5">
              <Tag :value="data.status" :severity="data.statusSeverity" />
            </div>
          </template>
        </Column>

        <Column field="progress" header="Fortschritt">
          <template #body="{ data }">
            <div class="flex items-center py-2.5 px-3.5">
              <div class="flex flex-col gap-1 w-56">
                <div class="flex justify-between items-start">
                  <span class="text-xs">{{ data.progressLabel }}</span>
                  <span class="text-sm">{{ data.progress }} %</span>
                </div>
                <ProgressBar :value="data.progress" :showValue="false" />
              </div>
            </div>
          </template>
        </Column>

        <Column header="Aktionen">
          <template #body>
            <div class="flex items-center justify-center py-2.5 px-3.5">
              <Button icon="pi pi-ellipsis-h" text severity="secondary" @click="togglePopover" />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>

    <div class="flex flex-col mt-4">
      <Popover ref="op">
        <div class="flex flex-col gap-2 p-2.5">
          <Button label="Profil bearbeiten" icon="pi pi-pencil" outlined severity="secondary" class="w-full justify-start" />
          <Button label="Status ändern" icon="pi pi-flag" outlined severity="secondary" class="w-full justify-start" />
          <Button label="Duplizieren" icon="pi pi-copy" outlined severity="secondary" class="w-full justify-start" />
          <Button label="Deaktiveren" icon="pi pi-trash" outlined severity="secondary" class="w-full justify-start" />
        </div>
      </Popover>
    </div>
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
  users: [
    { initial: 'M', name: 'Max Mustermann', status: 'In Prüfung', statusSeverity: 'danger', progressLabel: 'Zertifizierung', progress: 45 },
    { initial: 'A', name: 'Anna Schmidt', status: 'Aktiv', statusSeverity: 'success', progressLabel: 'Onboarding', progress: 87 },
    { initial: 'L', name: 'Lisa Weber', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progress: 4 },
    { initial: 'P', name: 'Paul Müller', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progress: 11 }
  ]
})

const togglePopover = (event) => {
  op.value.toggle(event)
}
</script>