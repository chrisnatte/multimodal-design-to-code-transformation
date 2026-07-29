<template>
  <DataTable :value="users">
    <Column field="name" header="Nutzer">
      <template #body="{ data }">
        <div class="flex items-center gap-2">
          <Avatar :label="data.name.charAt(0)" shape="circle" />
          <span>{{ data.name }}</span>
        </div>
      </template>
    </Column>
    <Column field="status" header="Status">
      <template #body="{ data }">
        <Tag :value="data.status" :severity="getStatusTagSeverity(data.status)" />
      </template>
    </Column>
    <Column field="progress" header="Fortschritt">
      <template #body="{ data }">
        <div class="flex flex-col gap-1">
          <div class="flex items-center justify-between text-sm text-gray-500">
            <span>{{ data.progressLabel }}</span>
            <span>{{ data.progress }} %</span>
          </div>
          <ProgressBar :value="data.progress" :show-value="false" class="!h-1.5 w-40" />
        </div>
      </template>
    </Column>
    <Column header="Aktion" header-class="w-20" body-class="w-20">
      <template #body="{ data }">
        <Button
          icon="pi pi-ellipsis-h"
          severity="secondary"
          text
          aria-haspopup="true"
          aria-controls="actions-menu"
          @click="(e) => toggleMenu(e, data)"
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
  import { ref, useTemplateRef } from 'vue'
  import Avatar from 'primevue/avatar'
  import Tag from 'primevue/tag'
  import Column from 'primevue/column'
  import DataTable from 'primevue/datatable'
  import Button from 'primevue/button'
  import ProgressBar from 'primevue/progressbar'
  import Menu from 'primevue/menu'

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

  const actionsMenu = useTemplateRef('actions-menu')
  const actionOptions = [
    {
      label: 'Profil bearbeiten',
      icon: 'pi pi-pen-to-square',
    },
    {
      label: 'Status ändern',
      icon: 'pi pi-flag',
    },
    {
      label: 'Duplizieren',
      icon: 'pi pi-copy',
    },
    {
      label: 'Deaktiveren',
      icon: 'pi pi-trash',
    },
  ]

  function toggleMenu(event: Event, data: any) {
    actionsMenu.value?.toggle(event)
  }

  function getStatusTagSeverity(status: string) {
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