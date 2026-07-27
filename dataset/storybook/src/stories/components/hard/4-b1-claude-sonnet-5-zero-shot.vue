<template>
  <div class="p-4 bg-white">
    <DataTable :value="projects" class="w-full">
      <Column field="project" header="Projekt"></Column>
      <Column field="status" header="Status">
        <template #body="slotProps">
          <Tag
            :value="slotProps.data.status"
            :severity="slotProps.data.statusSeverity"
          />
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

    <Popover ref="menu">
      <div class="flex flex-col gap-2 w-44">
        <Button
          label="Bearbeiten"
          icon="pi pi-pen-to-square"
          outlined
          severity="secondary"
          class="w-full justify-start"
          @click="onEdit"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          outlined
          severity="secondary"
          class="w-full justify-start"
          @click="onDuplicate"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          outlined
          severity="secondary"
          class="w-full justify-start"
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
  {
    project: 'Webseite Relaunch',
    status: 'Aktiv',
    statusSeverity: 'success',
    due: '15.04.2026',
  },
  {
    project: 'Mobile App',
    status: 'In Prüfung',
    statusSeverity: 'warn',
    due: '24.04.2026',
  },
  {
    project: 'Marketing Kampagne',
    status: 'Abgeschlossen',
    statusSeverity: 'secondary',
    due: '09.05.2026',
  },
  {
    project: 'API Migration',
    status: 'Gestoppt',
    statusSeverity: 'danger',
    due: '12.06.2026',
  },
])

const menu = ref()
const selectedRow = ref(null)

const toggleMenu = (event, data) => {
  selectedRow.value = data
  menu.value.toggle(event)
}

const onEdit = () => {
  console.log('Bearbeiten', selectedRow.value)
  menu.value.hide()
}

const onDuplicate = () => {
  console.log('Duplizieren', selectedRow.value)
  menu.value.hide()
}

const onDelete = () => {
  console.log('Löschen', selectedRow.value)
  menu.value.hide()
}
</script>