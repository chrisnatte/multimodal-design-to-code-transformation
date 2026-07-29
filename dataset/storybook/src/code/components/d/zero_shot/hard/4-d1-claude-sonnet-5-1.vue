<template>
  <div class="p-4 bg-white">
    <DataTable :value="projects" class="w-full">
      <Column field="project" header="Projekt"></Column>
      <Column field="status" header="Status">
        <template #body="slotProps">
          <Tag
            :value="slotProps.data.status"
            :severity="slotProps.data.severity"
          />
        </template>
      </Column>
      <Column field="due" header="Fällig"></Column>
      <Column header="Aktionen" style="width: 92px">
        <template #body="slotProps">
          <Button
            icon="pi pi-ellipsis-h"
            text
            severity="secondary"
            rounded
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
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          outlined
          severity="secondary"
          class="w-full justify-start"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          outlined
          severity="secondary"
          class="w-full justify-start"
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
    severity: 'success',
    due: '15.04.2026',
  },
  {
    project: 'Mobile App',
    status: 'In Prüfung',
    severity: 'warn',
    due: '24.04.2026',
  },
  {
    project: 'Marketing Kampagne',
    status: 'Abgeschlossen',
    severity: 'secondary',
    due: '09.05.2026',
  },
  {
    project: 'API Migration',
    status: 'Gestoppt',
    severity: 'danger',
    due: '12.06.2026',
  },
])

const menu = ref()

const toggleMenu = (event) => {
  menu.value.toggle(event)
}
</script>