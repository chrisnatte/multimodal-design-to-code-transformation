<template>
  <DataTable :value="projects">
    <Column field="name" header="Projekt" />
    <Column field="status" header="Status">
      <template #body="{ data }">
        <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
      </template>
    </Column>
    <Column field="due" header="Fällig" />
    <Column header="Aktionen" header-class="w-16" body-class="w-16 text-center">
      <template #body="{ data }">
        <Button
          icon="pi pi-ellipsis-h"
          severity="secondary"
          text
          aria-haspopup="true"
          aria-controls="actions-menu"
          @click="toggleMenu($event, data)"
        />
      </template>
    </Column>
  </DataTable>
  <Menu
    ref="menu"
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
  import { ref } from 'vue'
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

  const menu = ref()
  const selectedRow = ref(null)

  function toggleMenu(event: Event, data: any) {
    selectedRow.value = data
    menu.value.toggle(event)
  }

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

  function getStatusSeverity(status: string) {
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