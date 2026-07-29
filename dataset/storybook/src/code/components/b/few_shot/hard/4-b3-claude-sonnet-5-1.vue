<template>
  <div class="p-6">
    <DataTable :value="projects">
      <Column field="name" header="Projekt" />
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusTagSeverity(data.status)" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig" />
      <Column header="Aktionen" header-class="w-20" body-class="w-20 flex justify-center">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            severity="plain"
            text
            aria-haspopup="true"
            aria-controls="actions-popover"
            @click="(event) => toggleActionsPopover(event, data)"
          />
        </template>
      </Column>
    </DataTable>
    <Popover ref="actions-popover" id="actions-popover">
      <div class="flex w-[169px] flex-col gap-2">
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
    { name: 'Webseite Relaunch', status: 'Aktiv', dueDate: '15.04.2026' },
    { name: 'Mobile App', status: 'In Prüfung', dueDate: '24.04.2026' },
    { name: 'Marketing Kampagne', status: 'Abgeschlossen', dueDate: '09.05.2026' },
    { name: 'API Migration', status: 'Gestoppt', dueDate: '12.06.2026' },
  ])

  const actionsPopover = useTemplateRef('actions-popover')

  function toggleActionsPopover(event: Event, data: any) {
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