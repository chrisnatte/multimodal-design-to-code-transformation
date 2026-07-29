<template>
  <div class="bg-white p-4">
    <DataTable :value="projects" class="w-[600px]">
      <Column field="name" header="Projekt" />
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig" />
      <Column header="Aktionen" header-class="w-24" body-class="w-24">
        <template #body>
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            aria-haspopup="true"
            aria-controls="actions-menu"
            @click="toggleMenu"
          />
        </template>
      </Column>
    </DataTable>

    <Menu
      ref="menu"
      id="actions-menu"
      :model="menuItems"
      popup
      :pt="{
        list: 'flex flex-col !gap-2 !p-2.5 w-[192px]',
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
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import Tag from 'primevue/tag'
  import Button from 'primevue/button'
  import Menu from 'primevue/menu'

  const projects = ref([
    { name: 'Webseite Relaunch', status: 'Aktiv', dueDate: '15.04.2026' },
    { name: 'Mobile App', status: 'In Prüfung', dueDate: '24.04.2026' },
    { name: 'Marketing Kampagne', status: 'Abgeschlossen', dueDate: '09.05.2026' },
    { name: 'API Migration', status: 'Gestoppt', dueDate: '12.06.2026' },
  ])

  const menu = useTemplateRef('menu')

  const menuItems = ref([
    { label: 'Bearbeiten', icon: 'pi pi-pen-to-square' },
    { label: 'Duplizieren', icon: 'pi pi-clone' },
    { label: 'Löschen', icon: 'pi pi-trash' },
  ])

  const toggleMenu = (event: Event) => {
    menu.value?.toggle(event)
  }

  const getStatusSeverity = (status: string) => {
    switch (status) {
      case 'Aktiv':
        return 'success'
      case 'In Prüfung':
        return 'warn'
      case 'Abgeschlossen':
        return 'secondary'
      case 'Gestoppt':
        return 'danger'
      default:
        return 'info'
    }
  }
</script>