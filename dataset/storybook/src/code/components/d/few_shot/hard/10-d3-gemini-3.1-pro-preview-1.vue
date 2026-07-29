<template>
  <div class="relative w-[897px] bg-white p-6">
    <DataTable :value="users" class="w-[728px]">
      <Column field="name" header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.name.charAt(0)" shape="circle" class="bg-slate-100 text-slate-700" />
            <span class="text-sm text-slate-700">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
        </template>
      </Column>
      <Column field="progress" header="Fortschritt">
        <template #body="{ data }">
          <div class="flex flex-col gap-1 w-60">
            <div class="flex justify-between items-center">
              <span class="text-[10px] text-slate-700">{{ data.progressLabel }}</span>
              <span class="text-xs text-slate-700">{{ data.progress }} %</span>
            </div>
            <ProgressBar :value="data.progress" :show-value="false" class="!h-1.5" />
          </div>
        </template>
      </Column>
      <Column header="Aktion" header-class="w-24" body-class="w-24 flex justify-center">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            rounded
            aria-haspopup="true"
            aria-controls="actions-menu"
            @click="(e) => toggleMenu(e, data)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="actionsMenu" id="actions-menu">
      <div class="flex flex-col gap-2 w-48 p-2">
        <Button
          label="Profil bearbeiten"
          icon="pi pi-pen-to-square"
          severity="secondary"
          outlined
          class="w-full !justify-start"
        />
        <Button
          label="Status ändern"
          icon="pi pi-flag"
          severity="secondary"
          outlined
          class="w-full !justify-start"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          severity="secondary"
          outlined
          class="w-full !justify-start"
        />
        <Button
          label="Deaktiveren"
          icon="pi pi-trash"
          severity="secondary"
          outlined
          class="w-full !justify-start"
        />
      </div>
    </Popover>
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
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
      status: 'In Prüfung',
      progressLabel: 'Zertifizierung',
      progress: 45,
    },
    {
      name: 'Anna Schmidt',
      status: 'Aktiv',
      progressLabel: 'Onboarding',
      progress: 87,
    },
    {
      name: 'Lisa Weber',
      status: 'Inaktiv',
      progressLabel: 'Onboarding',
      progress: 4,
    },
    {
      name: 'Paul Müller',
      status: 'Inaktiv',
      progressLabel: 'Onboarding',
      progress: 11,
    },
  ])

  const actionsMenu = useTemplateRef('actionsMenu')
  const selectedUser = ref(null)

  function toggleMenu(event: Event, user: any) {
    selectedUser.value = user
    actionsMenu.value?.toggle(event)
  }

  function getStatusSeverity(status: string) {
    switch (status) {
      case 'Aktiv':
        return 'success'
      case 'In Prüfung':
        return 'danger'
      case 'Inaktiv':
        return 'warn'
      default:
        return 'info'
    }
  }
</script>