<template>
  <div class="p-4 bg-white">
    <DataTable :value="projects" tableStyle="min-width: 37.5rem">
      <Column field="project" header="Projekt"></Column>
      <Column field="status" header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="slotProps.data.severity" />
        </template>
      </Column>
      <Column field="due" header="Fällig"></Column>
      <Column header="Aktionen">
        <template #body="slotProps">
          <Button
            icon="pi pi-ellipsis-h"
            text
            rounded
            severity="secondary"
            @click="toggleMenu($event, slotProps.data)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-2 w-[169px]">
        <Button
          label="Bearbeiten"
          icon="pi pi-file-edit"
          outlined
          severity="secondary"
          class="w-full"
          @click="onEdit"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          outlined
          severity="secondary"
          class="w-full"
          @click="onDuplicate"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          outlined
          severity="secondary"
          class="w-full"
          @click="onDelete"
        />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import Popover from 'primevue/popover'

const projects = ref([
  { project: 'Webseite Relaunch', status: 'Aktiv', severity: 'success', due: '15.04.2026' },
  { project: 'Mobile App', status: 'In Prüfung', severity: 'warn', due: '24.04.2026' },
  { project: 'Marketing Kampagne', status: 'Abgeschlossen', severity: 'secondary', due: '09.05.2026' },
  { project: 'API Migration', status: 'Gestoppt', severity: 'danger', due: '12.06.2026' }
])

const op = ref()
const selectedRow = ref(null)

const toggleMenu = (event, data) => {
  selectedRow.value = data
  op.value.toggle(event)
}

const onEdit = () => {
  console.log('Edit', selectedRow.value)
  op.value.hide()
}

const onDuplicate = () => {
  console.log('Duplicate', selectedRow.value)
  op.value.hide()
}

const onDelete = () => {
  console.log('Delete', selectedRow.value)
  op.value.hide()
}
</script>