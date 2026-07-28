<template>
  <div class="p-4 bg-white">
    <DataTable :value="projects" class="w-full">
      <Column field="name" header="Projekt"></Column>
      <Column field="status" header="Status">
        <template #body="slotProps">
          <Tag
            :value="slotProps.data.status"
            :severity="slotProps.data.severity"
            :rounded="false"
          />
        </template>
      </Column>
      <Column field="due" header="Fällig"></Column>
      <Column header="Aktionen" headerStyle="width: 8rem">
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

    <Popover ref="popoverRef">
      <div class="flex flex-col gap-2 w-44">
        <Button
          label="Bearbeiten"
          icon="pi pi-pencil"
          severity="secondary"
          outlined
          class="w-full justify-start"
          @click="onEdit"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          severity="secondary"
          outlined
          class="w-full justify-start"
          @click="onDuplicate"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          severity="secondary"
          outlined
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
    name: 'Webseite Relaunch',
    status: 'Aktiv',
    severity: 'success',
    due: '15.04.2026'
  },
  {
    name: 'Mobile App',
    status: 'In Prüfung',
    severity: 'warn',
    due: '24.04.2026'
  },
  {
    name: 'Marketing Kampagne',
    status: 'Abgeschlossen',
    severity: 'secondary',
    due: '09.05.2026'
  },
  {
    name: 'API Migration',
    status: 'Gestoppt',
    severity: 'danger',
    due: '12.06.2026'
  }
])

const popoverRef = ref()
const selectedProject = ref(null)

function toggleMenu(event, data) {
  selectedProject.value = data
  popoverRef.value.toggle(event)
}

function onEdit() {
  console.log('Bearbeiten', selectedProject.value)
  popoverRef.value.hide()
}

function onDuplicate() {
  console.log('Duplizieren', selectedProject.value)
  popoverRef.value.hide()
}

function onDelete() {
  console.log('Löschen', selectedProject.value)
  popoverRef.value.hide()
}
</script>