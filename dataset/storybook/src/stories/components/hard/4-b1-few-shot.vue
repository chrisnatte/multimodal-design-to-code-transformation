<template>
  <div class="flex flex-col gap-4">
    <DataTable :value="rows">
      <Column field="project" header="Projekt" />
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.statusSeverity" />
        </template>
      </Column>
      <Column field="due" header="Fällig" />
      <Column header="Aktionen">
        <template #body>
          <Button icon="pi pi-ellipsis-h" text severity="secondary" @click="ui.popoverOpen = true" />
        </template>
      </Column>
    </DataTable>

    <Popover v-if="ui.popoverOpen">
      <div class="flex flex-col gap-2 p-3">
        <Button label="Bearbeiten" icon="pi pi-pencil" outlined severity="secondary" />
        <Button label="Duplizieren" icon="pi pi-copy" outlined severity="secondary" />
        <Button label="Löschen" icon="pi pi-trash" outlined severity="secondary" />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import Popover from 'primevue/popover'

const ui = reactive({
  popoverOpen: true
})

const rows = reactive([
  { project: 'Webseite Relaunch', status: 'Aktiv', statusSeverity: 'primary', due: '15.04.2026' },
  { project: 'Mobile App', status: 'In Prüfung', statusSeverity: 'warn', due: '24.04.2026' },
  { project: 'Marketing Kampagne', status: 'Abgeschlossen', statusSeverity: 'secondary', due: '09.05.2026' },
  { project: 'API Migration', status: 'Gestoppt', statusSeverity: 'danger', due: '12.06.2026' }
])
</script>