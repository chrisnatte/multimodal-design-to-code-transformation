<template>
  <div class="p-4 bg-white">
    <DataTable :value="users" class="w-full">
      <Column field="name" header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initial" shape="circle" />
            <span>{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.statusSeverity" />
        </template>
      </Column>

      <Column field="progress" header="Fortschritt">
        <template #body="{ data }">
          <div class="flex flex-col gap-1 w-full">
            <div class="flex justify-between text-xs">
              <span>{{ data.progressLabel }}</span>
              <span>{{ data.progressValue }} %</span>
            </div>
            <ProgressBar :value="data.progressValue" :showValue="false" style="height: 6px" />
          </div>
        </template>
      </Column>

      <Column header="Aktionen" style="width: 5rem">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            text
            severity="secondary"
            @click="toggleMenu($event, data)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="popoverRef">
      <div class="flex flex-col gap-2 w-48">
        <Button
          label="Profil bearbeiten"
          icon="pi pi-pencil"
          outlined
          severity="secondary"
          class="w-full justify-start"
        />
        <Button
          label="Status ändern"
          icon="pi pi-flag"
          outlined
          severity="secondary"
          class="w-full justify-start"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          outlined
          severity="secondary"
          class="w-full justify-start"
        />
        <Button
          label="Deaktiveren"
          icon="pi pi-trash"
          outlined
          severity="secondary"
          class="w-full justify-start"
        />
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

const users = ref([
  {
    name: 'Max Mustermann',
    initial: 'M',
    status: 'In Prüfung',
    statusSeverity: 'danger',
    progressLabel: 'Zertifizierung',
    progressValue: 45
  },
  {
    name: 'Anna Schmidt',
    initial: 'A',
    status: 'Aktiv',
    statusSeverity: 'success',
    progressLabel: 'Onboarding',
    progressValue: 87
  },
  {
    name: 'Lisa Weber',
    initial: 'L',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    progressLabel: 'Onboarding',
    progressValue: 4
  },
  {
    name: 'Paul Müller',
    initial: 'P',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    progressLabel: 'Onboarding',
    progressValue: 11
  }
])

const popoverRef = ref()
const selectedUser = ref(null)

function toggleMenu(event, data) {
  selectedUser.value = data
  popoverRef.value.toggle(event)
}
</script>