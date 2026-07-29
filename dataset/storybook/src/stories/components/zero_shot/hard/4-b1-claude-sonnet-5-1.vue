<template>
  <div class="p-6 bg-white">
    <DataTable :value="projects" class="w-full">
      <Column field="projekt" header="Projekt" />
      <Column field="status" header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="slotProps.data.severity" />
        </template>
      </Column>
      <Column field="faellig" header="Fällig" />
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
          icon="pi pi-pen-to-square"
          outlined
          severity="secondary"
          class="w-full"
          @click="editItem"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          outlined
          severity="secondary"
          class="w-full"
          @click="duplicateItem"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          outlined
          severity="secondary"
          class="w-full"
          @click="deleteItem"
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
    projekt: 'Webseite Relaunch',
    status: 'Aktiv',
    severity: 'success',
    faellig: '15.04.2026'
  },
  {
    projekt: 'Mobile App',
    status: 'In Prüfung',
    severity: 'warn',
    faellig: '24.04.2026'
  },
  {
    projekt: 'Marketing Kampagne',
    status: 'Abgeschlossen',
    severity: 'secondary',
    faellig: '09.05.2026'
  },
  {
    projekt: 'API Migration',
    status: 'Gestoppt',
    severity: 'danger',
    faellig: '12.06.2026'
  }
])

const popoverRef = ref(null)
const selectedItem = ref(null)

function toggleMenu(event, data) {
  selectedItem.value = data
  popoverRef.value.toggle(event)
}

function editItem() {
  console.log('Bearbeiten', selectedItem.value)
  popoverRef.value.hide()
}

function duplicateItem() {
  console.log('Duplizieren', selectedItem.value)
  popoverRef.value.hide()
}

function deleteItem() {
  console.log('Löschen', selectedItem.value)
  popoverRef.value.hide()
}
</script>