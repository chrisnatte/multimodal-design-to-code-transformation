<template>
  <DataTable :value="projects">
    <Column field="name" header="Name" />
    <Column field="status" header="Status">
      <template #body="{ data }">
        <Tag :value="data.status" :severity="getStatusTagSeverity(data.status)" />
      </template>
    </Column>
    <Column field="dueAt" header="Fällig" />
    <Column header="Aktionen" header-class="w-24" body-class="w-24 flex justify-center">
      <template #body>
        <Button
          icon="pi pi-ellipsis-h"
          severity="secondary"
          class="border"
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
  import Button from 'primevue/button'
  import { ref, useTemplateRef } from 'vue'
  import DataTable from 'primevue/datatable'

  const projects = ref([
    {
      name: 'Webseite Relaunch',
      status: 'Aktiv',
      dueAt: '15.04.2026',
    },
    {
      name: 'Mobile App',
      status: 'In Prüfung',
      dueAt: '14.04.2026',
    },
    {
      name: 'Marketing Kampagne',
      status: 'Abgeschlossen',
      dueAt: '09.05.2026',
    },
    {
      name: 'API Migration',
      status: 'Gestoppt',
      dueAt: '12.06.2026',
    },
  ])

  const actionsMenu = useTemplateRef('actions-menu')
  const actionOptions = [
    {
      label: 'Bearbeiten',
      icon: 'pi pi-pen-to-square',
    },
    {
      label: 'Duplizieren',
      icon: 'pi pi-clone',
    },
    {
      label: 'Löschen',
      icon: 'pi pi-trash',
    },
  ]

  function getStatusTagSeverity(status: string) {
    switch (status) {
      case 'Aktiv':
        return 'success'
      case 'In Prüfung':
        return 'warn'
      case 'Abgeschlossen':
        return 'info'
      case 'Gestoppt':
        return 'danger'
    }
  }
</script>
