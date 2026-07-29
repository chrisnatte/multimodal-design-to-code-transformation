<template>
  <DataTable :value="projects">
    <Column field="name" header="Projekt" />
    <Column field="status" header="Status">
      <template #body="{ data }">
        <Tag :value="data.status" :severity="getStatusTagSeverity(data.status)" />
      </template>
    </Column>
    <Column field="due" header="Fällig" />
    <Column header="Aktionen" header-class="w-24" body-class="w-24">
      <template #body="{ data }">
        <Button
          icon="pi pi-ellipsis-h"
          severity="secondary"
          text
          aria-haspopup="true"
          aria-controls="actions-menu"
          @click="(event) => toggleActionsMenu(event, data)"
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
        @click="item.command"
      />
    </template>
  </Menu>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import Tag from 'primevue/tag'
  import Column from 'primevue/column'
  import DataTable from 'primevue/datatable'
  import Button from 'primevue/button'
  import Menu from 'primevue/menu'

  const projects = ref([
    { name: 'Webseite Relaunch', status: 'Aktiv', due: '15.04.2026' },
    { name: 'Mobile App', status: 'In Prüfung', due: '24.04.2026' },
    { name: 'Marketing Kampagne', status: 'Abgeschlossen', due: '09.05.2026' },
    { name: 'API Migration', status: 'Gestoppt', due: '12.06.2026' },
  ])

  const actionsMenu = useTemplateRef('actions-menu')
  const selectedRow = ref(null)

  const actionOptions = [
    {
      label: 'Bearbeiten',
      icon: 'pi pi-pen-to-square',
      command: () => {},
    },
    {
      label: 'Duplizieren',
      icon: 'pi pi-clone',
      command: () => {},
    },
    {
      label: 'Löschen',
      icon: 'pi pi-trash',
      command: () => {},
    },
  ]

  function toggleActionsMenu(event: Event, data: any) {
    selectedRow.value = data
    actionsMenu.value?.toggle(event)
  }

  function getStatusTagSeverity(status: string) {
    switch (status) {
      case 'Aktiv':
        return 'success'
      case 'In Prüfung':
        return 'warn'
      case 'Abgeschlossen':
        return 'secondary'
      case 'Gestoppt':
        return 'danger'
    }
  }
</script>