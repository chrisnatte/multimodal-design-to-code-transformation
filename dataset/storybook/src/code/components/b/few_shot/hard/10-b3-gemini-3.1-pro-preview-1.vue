<template>
  <div class="bg-white p-6">
    <DataTable :value="users" class="w-full max-w-5xl">
      <Column field="name" header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.avatar" shape="circle" class="bg-slate-100 text-slate-700" />
            <span class="text-sm text-slate-900">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
        </template>
      </Column>
      
      <Column field="progressValue" header="Fortschritt">
        <template #body="{ data }">
          <div class="flex w-60 flex-col gap-1">
            <div class="flex items-center justify-between">
              <span class="text-[10px] text-slate-700">{{ data.progressLabel }}</span>
              <span class="text-xs text-slate-900">{{ data.progressValue }} %</span>
            </div>
            <ProgressBar :value="data.progressValue" :show-value="false" class="!h-1.5" />
          </div>
        </template>
      </Column>
      
      <Column header="Aktionen" header-class="w-24" body-class="w-24">
        <template #body>
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            plain
            aria-haspopup="true"
            @click="togglePopover"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op" :pt="{ content: '!p-2.5' }">
      <div class="flex flex-col gap-2">
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
  import { ref } from 'vue'
  import Avatar from 'primevue/avatar'
  import Tag from 'primevue/tag'
  import Button from 'primevue/button'
  import Popover from 'primevue/popover'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import ProgressBar from 'primevue/progressbar'

  const op = ref()

  const users = ref([
    {
      name: 'Max Mustermann',
      avatar: 'M',
      status: 'In Prüfung',
      progressLabel: 'Zertifizierung',
      progressValue: 45,
    },
    {
      name: 'Anna Schmidt',
      avatar: 'A',
      status: 'Aktiv',
      progressLabel: 'Onboarding',
      progressValue: 87,
    },
    {
      name: 'Lisa Weber',
      avatar: 'L',
      status: 'Inaktiv',
      progressLabel: 'Onboarding',
      progressValue: 4,
    },
    {
      name: 'Paul Müller',
      avatar: 'P',
      status: 'Inaktiv',
      progressLabel: 'Onboarding',
      progressValue: 11,
    },
  ])

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

  function togglePopover(event: Event) {
    op.value?.toggle(event)
  }
</script>