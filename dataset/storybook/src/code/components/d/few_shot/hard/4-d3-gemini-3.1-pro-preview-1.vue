<template>
  <div class="p-6">
    <DataTable :value="projects" class="w-[600px]">
      <Column field="name" header="Projekt" />
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusTagSeverity(data.status)" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig" />
      <Column header="Aktionen" header-class="w-24" body-class="w-24 flex justify-center">
        <template #body>
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            aria-haspopup="true"
            aria-controls="actions-menu"
            @click="toggleActionsMenu"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="actions-menu" id="actions-menu">
      <div class="flex flex-col gap-2 w-[169px]">
        <Button
          label="Bearbeiten"
          icon="pi pi-pen-to-square"
          severity="secondary"
          outlined
          class="w-full !justify-start"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          severity="secondary"
          outlined
          class="w-full !justify-start"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          severity="secondary"
          outlined
          class="w-full !justify-start"
        />
      </div>
    </Popover>
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import Tag from 'primevue/tag'
  import Column from 'primevue/column'
  import DataTable from 'primevue/datatable'
  import Button from 'primevue/button'
  import Popover from 'primevue/popover'

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

  function toggleActionsMenu(event: Event) {
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