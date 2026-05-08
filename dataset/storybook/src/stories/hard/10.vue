<template>
  <DataTable :value="users">
    <Column field="name" header="Nutzer" body-class="flex h-18 items-center gap-3">
      <template #body="{ data }">
        <Avatar :label="getAbbrevation(data.name)" size="normal" shape="circle" />
        <span>{{ data.name }}</span>
      </template>
    </Column>
    <Column field="status" header="Status">
      <template #body="{ data }">
        <Tag :value="data.status" :severity="getStatusTagSeverity(data.status)" />
      </template>
    </Column>
    <Column field="progress" header="Fortschritt" body-class="flex flex-col gap-1">
      <template #body="{ data }">
        <div class="flex items-end justify-between">
          <span class="text-xs">{{ data.step }}</span>
          <span class="text-sm">{{ data.progress }}</span>
        </div>
        <ProgressBar :value="data.progress" :show-value="false" class="!h-2.5" />
      </template>
    </Column>
    <Column header="Aktionen" header-class="w-32" body-class="w-32">
      <template #body>
        <Button
          icon="pi pi-ellipsis-h"
          severity="secondary"
          class="mx-4"
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
      list: 'flex flex-col !gap-2 !p-2.5',
    }"
  >
    <template #item="{ item }">
      <Button
        :label="item.label"
        :icon="item.icon"
        severity="secondary"
        outlined
        class="w-full !justify-start"
      />
    </template>
  </Menu>
</template>

<script setup lang="ts">
  import Tag from 'primevue/tag'
  import Menu from 'primevue/menu'
  import Column from 'primevue/column'
  import Avatar from 'primevue/avatar'
  import Button from 'primevue/button'
  import { ref, useTemplateRef } from 'vue'
  import DataTable from 'primevue/datatable'
  import ProgressBar from 'primevue/progressbar'

  const users = ref([
    {
      name: 'Max Mustermann',
      status: 'In Prüfung',
      step: 'Zertifizierung',
      progress: 45,
    },
    {
      name: 'Anna Schmidt',
      status: 'Aktiv',
      step: 'Onboarding',
      progress: 87,
    },
    {
      name: 'Lisa Weber',
      status: 'Inaktiv',
      step: 'Onboarding',
      progress: 4,
    },
    {
      name: 'Max Mustermann',
      status: 'Inaktiv',
      step: 'Onboarding',
      progress: 11,
    },
  ])

  const actionsMenu = useTemplateRef('actions-menu')
  const actionOptions = [
    {
      label: 'Profil ändern',
      icon: 'pi pi-pen-to-square',
    },
    {
      label: 'Status ändern',
      icon: 'pi pi-flag',
    },
    {
      label: 'Duplizieren',
      icon: 'pi pi-clone',
    },
    {
      label: 'Deaktivieren',
      icon: 'pi pi-trash',
    },
  ]

  function getAbbrevation(name: string) {
    return name.charAt(0).toUpperCase()
  }

  function getStatusTagSeverity(status: string) {
    switch (status) {
      case 'In Prüfung':
        return 'danger'
      case 'Aktiv':
        return 'primary'
      case 'Inaktiv':
        return 'warn'
    }
  }
</script>
