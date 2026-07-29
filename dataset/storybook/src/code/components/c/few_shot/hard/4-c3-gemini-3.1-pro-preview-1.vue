<template>
  <div class="p-8 w-full max-w-4xl">
    <DataTable :value="projects">
      <Column field="name" header="Projekt" />
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusSeverity(data.status)" />
        </template>
      </Column>
      <Column field="date" header="Fällig" />
      <Column header="Aktionen" header-class="w-24" body-class="w-24 flex justify-center">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            aria-haspopup="true"
            @click="togglePopover($event, data)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-2 p-1 w-40">
        <Button
          label="Bearbeiten"
          icon="pi pi-pen-to-square"
          severity="secondary"
          outlined
          class="w-full !justify-start"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-copy"
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
    date: '15.04.2026',
  },
  {
    name: 'Mobile App',
    status: 'In Prüfung',
    date: '24.04.2026',
  },
  {
    name: 'Marketing Kampagne',
    status: 'Abgeschlossen',
    date: '09.05.2026',
  },
  {
    name: 'API Migration',
    status: 'Gestoppt',
    date: '12.06.2026',
  },
])

const op = ref()
const selectedProject = ref()

const togglePopover = (event: Event, data: any) => {
  selectedProject.value = data
  op.value.toggle(event)
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