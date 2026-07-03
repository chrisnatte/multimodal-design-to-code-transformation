<template>
  <div class="flex flex-col gap-4 bg-white">
    <div class="flex flex-col">
      <DataTable :value="state.rows" tableStyle="min-width: 60rem">
        <Column field="user" header="Nutzer">
          <template #body="{ data }">
            <div class="flex items-center gap-3 px-3.5 py-2.5">
              <Avatar :label="data.avatar" shape="circle" />
              <span>{{ data.user }}</span>
            </div>
          </template>
        </Column>

        <Column field="status" header="Status">
          <template #body="{ data }">
            <div class="px-3.5 py-2.5">
              <Tag :value="data.status" :severity="data.statusSeverity" />
            </div>
          </template>
        </Column>

        <Column field="progressValue" header="Fortschritt">
          <template #body="{ data }">
            <div class="flex flex-col gap-1 px-3.5 py-2.5 w-56">
              <div class="flex items-start justify-between">
                <span class="text-xs">{{ data.progressLabel }}</span>
                <span class="text-xs">{{ data.progressValue }} %</span>
              </div>
              <ProgressBar :value="data.progressValue" />
            </div>
          </template>
        </Column>

        <Column header="Aktionen">
          <template #body="{ data }">
            <div class="flex justify-center px-3.5 py-2.5">
              <Button
                icon="pi pi-ellipsis-h"
                variant="text"
                severity="secondary"
                aria-label="Aktionen"
                @click="toggleActions($event, data)"
              />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>

    <Popover ref="actionsPopover">
      <div class="flex flex-col gap-2 p-2.5">
        <Button label="Profil bearbeiten" icon="pi pi-pencil" severity="secondary" variant="outlined" />
        <Button label="Status ändern" icon="pi pi-flag" severity="secondary" variant="outlined" />
        <Button label="Duplizieren" icon="pi pi-copy" severity="secondary" variant="outlined" />
        <Button label="Deaktiveren" icon="pi pi-trash" severity="secondary" variant="outlined" />
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

const actionsPopover = ref()

const state = reactive({
  selectedRow: null,
  rows: [
    { avatar: 'M', user: 'Max Mustermann', status: 'In Prüfung', statusSeverity: 'danger', progressLabel: 'Zertifizierung', progressValue: 45 },
    { avatar: 'A', user: 'Anna Schmidt', status: 'Aktiv', statusSeverity: 'success', progressLabel: 'Onboarding', progressValue: 87 },
    { avatar: 'L', user: 'Lisa Weber', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progressValue: 4 },
    { avatar: 'P', user: 'Paul Müller', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progressValue: 11 }
  ]
})

const toggleActions = (event, row) => {
  state.selectedRow = row
  actionsPopover.value.toggle(event)
}
</script>