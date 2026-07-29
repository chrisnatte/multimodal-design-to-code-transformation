<template>
  <div class="relative w-full max-w-4xl bg-white p-6">
    <DataTable :value="projects" class="w-full">
      <Column field="name" header="Projekt" />
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusTagSeverity(data.status)" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig" />
      <Column header="Aktionen" header-class="w-24" body-class="w-24 flex justify-center">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            :severity="data.status === 'In Prüfung' ? 'secondary' : 'plain'"
            :text="data.status !== 'In Prüfung'"
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
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import Tag from 'primevue/tag'
  import Column from 'primevue/column'
  import DataTable from 'primevue/datatable'
  import Button from 'primevue/button'
  import Menu from 'primevue/menu'

  const projects = ref([
    {
      name: 'Webseite Relaunch',
      status: 'Aktiv',
      dueDate: '15.04.2026',
    },
    {
      name: 'Mobile App',
      status: 'In Prüfung',
      dueDate: '24.04.2026',
    },
    {
      name: 'Marketing Kampagne',
      status: 'Abgeschlossen',
      dueDate: '09.05.2026',
    },
    {
      name: 'API Migration',
      status: 'Gestoppt',
      dueDate: '12.06.2026',
    },
  ])

  const actionsMenu = useTemplateRef('actions-menu')
  const selectedProject = ref(null)

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

  function toggleMenu(event: Event, data: any) {
    selectedProject.value = data
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
      default:
        return 'info'
    }
  }
</script>