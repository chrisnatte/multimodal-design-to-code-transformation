<template>
  <div class="w-full p-6">
    <DataTable :value="projects">
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
            severity="secondary"
            text
            aria-haspopup="true"
            aria-controls="actions-popover"
            @click="toggleActionsPopover($event, data)"
          />
        </template>
      </Column>
    </DataTable>
    <Popover ref="actionsPopover" id="actions-popover">
      <div class="flex flex-col gap-2 w-[169px]">
        <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined class="!justify-start" />
        <Button label="Duplizieren" icon="pi pi-clone" severity="secondary" outlined class="!justify-start" />
        <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="!justify-start" />
      </div>
    </Popover>
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import Tag from 'primevue/tag'
  import Button from 'primevue/button'
  import Popover from 'primevue/popover'

  const projects = ref([
    { name: 'Webseite Relaunch', status: 'Aktiv', dueDate: '15.04.2026' },
    { name: 'Mobile App', status: 'In Prüfung', dueDate: '24.04.2026' },
    { name: 'Marketing Kampagne', status: 'Abgeschlossen', dueDate: '09.05.2026' },
    { name: 'API Migration', status: 'Gestoppt', dueDate: '12.06.2026' },
  ])

  const actionsPopover = useTemplateRef('actionsPopover')
  const selectedProject = ref(null)

  function toggleActionsPopover(event: Event, data: any) {
    selectedProject.value = data
    actionsPopover.value?.toggle(event)
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