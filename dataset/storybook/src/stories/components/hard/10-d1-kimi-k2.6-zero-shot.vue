<template>
  <div class="bg-white p-6 w-[897px] h-[410px]">
    <DataTable :value="users" class="w-full">
      <Column field="name" header="Nutzer" style="width: 256px">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.initials" shape="circle" class="bg-slate-200 text-slate-700 w-7 h-7 text-sm" />
            <span class="text-sm">{{ data.name }}</span>
          </div>
        </template>
      </Column>

      <Column field="status" header="Status" style="width: 108px">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.severity" />
        </template>
      </Column>

      <Column field="progress" header="Fortschritt" style="width: 256px">
        <template #body="{ data }">
          <div class="flex flex-col gap-1 w-full">
            <div class="flex justify-between items-end">
              <span class="text-[10px] text-slate-500">{{ data.task }}</span>
              <span class="text-xs text-slate-700">{{ data.progress }} %</span>
            </div>
            <ProgressBar :value="data.progress" :showValue="false" style="height: 6px" />
          </div>
        </template>
      </Column>

      <Column field="actions" header="Aktion" style="width: 108px">
        <template #body>
          <Button icon="pi pi-ellipsis-h" text class="w-9 h-7" @click="toggleMenu" />
        </template>
      </Column>
    </DataTable>

    <OverlayPanel ref="op">
      <div class="flex flex-col gap-2 p-2.5 w-48">
        <Button outlined severity="secondary" icon="pi pi-pen-to-square" label="Profil bearbeiten" class="w-full justify-start" />
        <Button outlined severity="secondary" icon="pi pi-flag" label="Status ändern" class="w-full justify-start" />
        <Button outlined severity="secondary" icon="pi pi-clone" label="Duplizieren" class="w-full justify-start" />
        <Button outlined severity="secondary" icon="pi pi-trash" label="Deaktivieren" class="w-full justify-start" />
      </div>
    </OverlayPanel>
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
import OverlayPanel from 'primevue/overlaypanel'

const users = ref([
  { id: 1, name: 'Max Mustermann', initials: 'M', status: 'In Prüfung', severity: 'danger', task: 'Zertifizierung', progress: 45 },
  { id: 2, name: 'Anna Schmidt', initials: 'A', status: 'Aktiv', severity: 'success', task: 'Onboarding', progress: 87 },
  { id: 3, name: 'Lisa Weber', initials: 'L', status: 'Inaktiv', severity: 'warning', task: 'Onboarding', progress: 4 },
  { id: 4, name: 'Paul Müller', initials: 'P', status: 'Inaktiv', severity: 'warning', task: 'Onboarding', progress: 11 }
])

const op = ref()

const toggleMenu = (event) => {
  op.value.toggle(event)
}
</script>