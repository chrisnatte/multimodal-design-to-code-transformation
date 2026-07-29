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
            @click="togglePopover"
            aria-haspopup="true"
            aria-controls="actions-popover"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op" id="actions-popover">
      <div class="flex flex-col gap-2 p-1">
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
  import { ref } from 'vue'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import Tag from 'primevue/tag'
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

  const op = ref()

  function togglePopover(event: Event) {
    op.value?.toggle(event)
  }

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
      default:
        return 'info'
    }
  }
</script>