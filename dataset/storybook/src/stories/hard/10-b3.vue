<template>
  <div class="bg-white p-4">
    <div class="flex flex-col">
      <DataTable :value="state.users" tableStyle="min-width: 60rem">
        <Column header="Nutzer">
          <template #body="{ data }">
            <div class="flex items-center gap-3 px-3.5 py-2.5">
              <Avatar :label="data.initial" shape="circle" />
              <span class="text-sm">{{ data.name }}</span>
            </div>
          </template>
        </Column>

        <Column header="Status">
          <template #body="{ data }">
            <div class="flex items-center px-3.5 py-2.5">
              <Tag :value="data.status" :severity="data.statusSeverity" />
            </div>
          </template>
        </Column>

        <Column header="Fortschritt">
          <template #body="{ data }">
            <div class="flex flex-col gap-1 px-3.5 py-2.5 w-56">
              <div class="flex justify-between">
                <span class="text-[10px]">{{ data.progressLabel }}</span>
                <span class="text-xs">{{ data.progress }} %</span>
              </div>
              <ProgressBar :value="data.progress" :showValue="false" style="height: 0.5rem" />
            </div>
          </template>
        </Column>

        <Column header="Aktionen">
          <template #body>
            <div class="flex items-center justify-center px-3.5 py-2.5">
              <Button icon="pi pi-ellipsis-h" text severity="secondary" @click="togglePopover" />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>

    <div class="flex flex-col mt-4">
      <Popover ref="op">
        <div class="flex flex-col gap-2 p-2.5">
          <Button label="Profil bearbeiten" icon="pi pi-pencil" severity="secondary" variant="outlined" class="w-full justify-start" />
          <Button label="Status ändern" icon="pi pi-flag" severity="secondary" variant="outlined" class="w-full justify-start" />
          <Button label="Duplizieren" icon="pi pi-copy" severity="secondary" variant="outlined" class="w-full justify-start" />
          <Button label="Deaktiveren" icon="pi pi-trash" severity="secondary" variant="outlined" class="w-full justify-start" />
        </div>
      </Popover>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Popover from 'primevue/popover'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import ProgressBar from 'primevue/progressbar'

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