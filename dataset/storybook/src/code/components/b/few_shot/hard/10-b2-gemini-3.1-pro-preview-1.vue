<template>
  <div class="bg-white">
    <DataTable :value="users">
      <Column header="Nutzer">
        <template #body="{ data }">
          <div class="flex items-center gap-3">
            <Avatar :label="data.avatar" shape="circle" />
            <span class="text-sm">{{ data.name }}</span>
          </div>
        </template>
      </Column>
      <Column header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getSeverity(data.status)" />
        </template>
      </Column>
      <Column header="Fortschritt">
        <template #body="{ data }">
          <div class="flex w-60 flex-col gap-1">
            <div class="flex items-center justify-between">
              <span class="text-[10px]">{{ data.progressLabel }}</span>
              <span class="text-xs">{{ data.progress }} %</span>
            </div>
            <ProgressBar :value="data.progress" :show-value="false" class="!h-1.5" />
          </div>
        </template>
      </Column>
      <Column header="Aktionen">
        <template #body>
          <Button
            icon="pi pi-ellipsis-h"
            variant="text"
            severity="secondary"
            @click="togglePopover"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-2 p-2.5">
        <Button
          label="Profil bearbeiten"
          icon="pi pi-pen-to-square"
          severity="secondary"
          variant="outlined"
          class="!justify-start"
        />
        <Button
          label="Status ändern"
          icon="pi pi-flag"
          severity="secondary"
          variant="outlined"
          class="!justify-start"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          severity="secondary"
          variant="outlined"
          class="!justify-start"
        />
        <Button
          label="Deaktiveren"
          icon="pi pi-trash"
          severity="secondary"
          variant="outlined"
          class="!justify-start"
        />
      </div>
    </Popover>
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import Tag from 'primevue/tag'
  import Avatar from 'primevue/avatar'
  import Button from 'primevue/button'
  import Column from 'primevue/column'
  import Popover from 'primevue/popover'
  import DataTable from 'primevue/datatable'
  import ProgressBar from 'primevue/progressbar'

  const users = ref([
    {
      name: 'Max Mustermann',
      avatar: 'M',
      status: 'In Prüfung',
      progressLabel: 'Zertifizierung',
      progress: 45,
    },
    {
      name: 'Anna Schmidt',
      avatar: 'A',
      status: 'Aktiv',
      progressLabel: 'Onboarding',
      progress: 87,
    },
    {
      name: 'Lisa Weber',
      avatar: 'L',
      status: 'Inaktiv',
      progressLabel: 'Onboarding',
      progress: 4,
    },
    {
      name: 'Paul Müller',
      avatar: 'P',
      status: 'Inaktiv',
      progressLabel: 'Onboarding',
      progress: 11,
    },
  ])

  const op = useTemplateRef('op')

  function togglePopover(event: Event) {
    op.value?.toggle(event)
  }

  function getSeverity(status: string) {
    switch (status) {
      case 'In Prüfung':
        return 'danger'
      case 'Aktiv':
        return 'success'
      case 'Inaktiv':
        return 'warn'
      default:
        return 'info'
    }
  }
</script>