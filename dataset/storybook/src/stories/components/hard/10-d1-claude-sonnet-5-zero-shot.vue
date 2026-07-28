<template>
  <div class="p-4 bg-white">
    <DataTable :value="users" class="text-sm">
      <Column field="name" header="Nutzer">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar :label="slotProps.data.initial" shape="circle" class="bg-slate-200 text-slate-700" />
            <span>{{ slotProps.data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="slotProps.data.severity" />
        </template>
      </Column>
      <Column field="progress" header="Fortschritt">
        <template #body="slotProps">
          <div class="flex flex-col gap-1 w-60">
            <div class="flex justify-between text-xs">
              <span class="text-gray-500">{{ slotProps.data.progressLabel }}</span>
              <span>{{ slotProps.data.progress }} %</span>
            </div>
            <ProgressBar :value="slotProps.data.progress" :showValue="false" style="height: 6px" />
          </div>
        </template>
      </Column>
      <Column field="action" header="Aktion">
        <template #body="slotProps">
          <Button
            icon="pi pi-ellipsis-h"
            text
            rounded
            severity="secondary"
            @click="toggleMenu($event, slotProps.data)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="menu">
      <div class="flex flex-col gap-2 w-44">
        <Button
          label="Profil bearbeiten"
          icon="pi pi-file-edit"
          outlined
          severity="secondary"
          class="justify-start"
        />
        <Button
          label="Status ändern"
          icon="pi pi-flag"
          outlined
          severity="secondary"
          class="justify-start"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          outlined
          severity="secondary"
          class="justify-start"
        />
        <Button
          label="Deaktiveren"
          icon="pi pi-trash"
          outlined
          severity="secondary"
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

const menu = ref()
const selectedUser = ref(null)

const users = ref([
  {
    name: 'Max Mustermann',
    initial: 'M',
    status: 'In Prüfung',
    severity: 'danger',
    progress: 45,
    progressLabel: 'Zertifizierung'
  },
  {
    name: 'Anna Schmidt',
    initial: 'A',
    status: 'Aktiv',
    severity: 'success',
    progress: 87,
    progressLabel: 'Onboarding'
  },
  {
    name: 'Lisa Weber',
    initial: 'L',
    status: 'Inaktiv',
    severity: 'warn',
    progress: 4,
    progressLabel: 'Onboarding'
  },
  {
    name: 'Paul Müller',
    initial: 'P',
    status: 'Inaktiv',
    severity: 'warn',
    progress: 11,
    progressLabel: 'Onboarding'
  }
])

const toggleMenu = (event, user) => {
  selectedUser.value = user
  menu.value.toggle(event)
}
</script>