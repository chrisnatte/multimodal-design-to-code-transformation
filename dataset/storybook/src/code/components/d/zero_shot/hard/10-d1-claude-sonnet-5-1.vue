<template>
  <div class="p-4 bg-white">
    <DataTable :value="users" class="p-datatable-sm">
      <Column header="Nutzer">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar :label="slotProps.data.initial" shape="circle" />
            <span>{{ slotProps.data.name }}</span>
          </div>
        </template>
      </Column>

      <Column header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="slotProps.data.statusSeverity" />
        </template>
      </Column>

      <Column header="Fortschritt">
        <template #body="slotProps">
          <div class="flex flex-col gap-1 w-full">
            <div class="flex justify-between text-xs">
              <span class="text-gray-500">{{ slotProps.data.progressLabel }}</span>
              <span class="text-sm">{{ slotProps.data.progressValue }} %</span>
            </div>
            <ProgressBar :value="slotProps.data.progressValue" :showValue="false" style="height: 6px" />
          </div>
        </template>
      </Column>

      <Column header="Aktion">
        <template #body="slotProps">
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            rounded
            @click="toggleMenu($event, slotProps.data)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="menuRef">
      <div class="flex flex-col gap-2 p-2 w-48">
        <Button
          label="Profil bearbeiten"
          icon="pi pi-file-edit"
          severity="secondary"
          outlined
          class="justify-start"
        />
        <Button
          label="Status ändern"
          icon="pi pi-flag"
          severity="secondary"
          outlined
          class="justify-start"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          severity="secondary"
          outlined
          class="justify-start"
        />
        <Button
          label="Deaktiveren"
          icon="pi pi-trash"
          severity="secondary"
          outlined
          class="justify-start"
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
    initial: 'M',
    name: 'Max Mustermann',
    status: 'In Prüfung',
    statusSeverity: 'danger',
    progressLabel: 'Zertifizierung',
    progressValue: 45
  },
  {
    initial: 'A',
    name: 'Anna Schmidt',
    status: 'Aktiv',
    statusSeverity: 'success',
    progressLabel: 'Onboarding',
    progressValue: 87
  },
  {
    initial: 'L',
    name: 'Lisa Weber',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    progressLabel: 'Onboarding',
    progressValue: 4
  },
  {
    initial: 'P',
    name: 'Paul Müller',
    status: 'Inaktiv',
    statusSeverity: 'warn',
    progressLabel: 'Onboarding',
    progressValue: 11
  }
])

const menuRef = ref()

function toggleMenu(event) {
  menuRef.value.toggle(event)
}
</script>