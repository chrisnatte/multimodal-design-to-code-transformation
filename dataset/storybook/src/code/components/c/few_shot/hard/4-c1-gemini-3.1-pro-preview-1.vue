<template>
  <div class="p-4">
    <DataTable :value="projects" class="w-full">
      <Column field="projekt" header="Projekt" />
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
        </template>
      </Column>
      <Column field="faellig" header="Fällig" />
      <Column header="Aktionen" header-class="w-24 text-center" body-class="w-24 text-center">
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
      ref="actionsMenu"
      id="actions-menu"
      :model="menuItems"
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
  {
    projekt: 'Webseite Relaunch',
    status: 'Aktiv',
    faellig: '15.04.2026',
  },
  {
    projekt: 'Mobile App',
    status: 'In Prüfung',
    faellig: '24.04.2026',
  },
  {
    projekt: 'Marketing Kampagne',
    status: 'Abgeschlossen',
    faellig: '09.05.2026',
  },
  {
    projekt: 'API Migration',
    status: 'Gestoppt',
    faellig: '12.06.2026',
  },
])

const actionsMenu = useTemplateRef('actionsMenu')

const menuItems = ref([
  {
    label: 'Bearbeiten',
    icon: 'pi pi-file-edit',
  },
  {
    label: 'Duplizieren',
    icon: 'pi pi-copy',
  },
  {
    label: 'Löschen',
    icon: 'pi pi-trash',
  },
])

const toggleMenu = (event: Event) => {
  actionsMenu.value?.toggle(event)
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