<template>
  <div class="relative">
    <DataTable :value="projects" class="w-[600px]">
      <Column field="name" header="Projekt" />
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig" />
      <Column header="Aktionen" header-class="w-24" body-class="w-24 flex justify-center">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            :variant="data.status === 'In Prüfung' ? 'text' : 'text'"
            :class="{ 'bg-surface-100': data.status === 'In Prüfung' }"
            aria-haspopup="true"
            aria-controls="actions-menu"
            @click="toggleMenu($event, data)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op" id="actions-menu">
      <div class="flex flex-col gap-2 p-2.5 w-[190px]">
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

  const op = useTemplateRef('op')
  const selectedProject = ref(null)

  function toggleMenu(event: Event, project: any) {
    selectedProject.value = project
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