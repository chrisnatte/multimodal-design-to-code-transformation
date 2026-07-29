<template>
  <div class="p-6">
    <DataTable :value="projects" class="text-sm">
      <Column field="projekt" header="Projekt"></Column>
      <Column field="status" header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="slotProps.data.severity" />
        </template>
      </Column>
      <Column field="faellig" header="Fällig"></Column>
      <Column header="Aktionen" style="width: 6rem">
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

    <Menu ref="menu" :model="menuItems" :popup="true" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const projects = ref([
  { projekt: 'Webseite Relaunch', status: 'Aktiv', severity: 'success', faellig: '15.04.2026' },
  { projekt: 'Mobile App', status: 'In Prüfung', severity: 'warning', faellig: '24.04.2026' },
  { projekt: 'Marketing Kampagne', status: 'Abgeschlossen', severity: 'secondary', faellig: '09.05.2026' },
  { projekt: 'API Migration', status: 'Gestoppt', severity: 'danger', faellig: '12.06.2026' }
])

const menu = ref()
const selectedRow = ref(null)

const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-pencil' },
  { label: 'Duplizieren', icon: 'pi pi-copy' },
  { label: 'Löschen', icon: 'pi pi-trash' }
])

function toggleMenu(event, data) {
  selectedRow.value = data
  menu.value.toggle(event)
}
</script>