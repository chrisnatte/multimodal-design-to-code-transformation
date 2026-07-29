<template>
  <DataTable :value="users" class="w-full">
    <Column field="name" header="Nutzer">
      <template #body="{ data }">
        <div class="flex items-center gap-2">
          <Avatar :label="data.initial" shape="circle" />
          <span>{{ data.name }}</span>
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
        <div class="flex flex-col gap-1">
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">{{ data.progressLabel }}</span>
            <span class="text-sm text-gray-700">{{ data.progress }} %</span>
          </div>
          <ProgressBar :value="data.progress" :show-value="false" class="!h-1.5" />
        </div>
      </template>
    </Column>
    <Column header="Aktion" header-class="w-20" body-class="w-20 flex justify-center">
      <template #body>
        <Button
          icon="pi pi-ellipsis-h"
          severity="secondary"
          text
          aria-haspopup="true"
          aria-controls="actions-menu"
          @click="actionsMenu?.toggle"
        />
      </template>
    </Column>
  </DataTable>
  <Menu
    ref="actions-menu"
    id="actions-menu"
    :model="actionOptions"
    popup
    :pt="{
      list: 'flex flex-col !gap-1 !p-2',
    }"
  >
    <template #item="{ item }">
      <Button
        :label="item.label"
        :icon="item.icon"
        severity="secondary"
        text
        class="w-full !justify-start"
      />
    </template>
  </Menu>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import Avatar from 'primevue/avatar'
  import Tag from 'primevue/tag'
  import ProgressBar from 'primevue/progressbar'
  import Button from 'primevue/button'
  import Menu from 'primevue/menu'

  const users = ref([
    { name: 'Max Mustermann', initial: 'M', status: 'In Prüfung', progressLabel: 'Zertifizierung', progress: 45 },
    { name: 'Anna Schmidt', initial: 'A', status: 'Aktiv', progressLabel: 'Onboarding', progress: 87 },
    { name: 'Lisa Weber', initial: 'L', status: 'Inaktiv', progressLabel: 'Onboarding', progress: 4 },
    { name: 'Paul Müller', initial: 'P', status: 'Inaktiv', progressLabel: 'Onboarding', progress: 11 },
  ])

  const actionsMenu = useTemplateRef('actions-menu')
  const actionOptions = [
    { label: 'Profil bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Status ändern', icon: 'pi pi-flag' },
    { label: 'Duplizieren', icon: 'pi pi-clone' },
    { label: 'Deaktiveren', icon: 'pi pi-trash' },
  ]

  function getStatusSeverity(status: string) {
    switch (status) {
      case 'Aktiv':
        return 'success'
      case 'In Prüfung':
        return 'danger'
      case 'Inaktiv':
        return 'warn'
    }
  }
</script>