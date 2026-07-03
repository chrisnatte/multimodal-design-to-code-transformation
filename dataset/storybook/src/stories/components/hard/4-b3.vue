<template>
  <div class="bg-white flex flex-col gap-4">
    <div class="flex flex-col">
      <DataTable :value="state.rows" tableStyle="min-width: 50rem">
        <Column field="projekt" header="Projekt" />
        <Column header="Status">
          <template #body="slotProps">
            <Tag :value="slotProps.data.status" :severity="slotProps.data.statusSeverity" />
          </template>
        </Column>
        <Column field="faellig" header="Fällig" />
        <Column header="Aktionen">
          <template #body="slotProps">
            <div class="flex items-center justify-center">
              <Button
                icon="pi pi-ellipsis-h"
                text
                @click="togglePopover($event, slotProps.data)"
              />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>

    <Popover ref="popoverRef">
      <div class="flex flex-col gap-3 p-3">
        <div class="flex flex-col gap-2">
          <Button label="Bearbeiten" icon="pi pi-pen-to-square" outlined severity="secondary" />
          <Button label="Duplizieren" icon="pi pi-copy" outlined severity="secondary" />
          <Button label="Löschen" icon="pi pi-trash" outlined severity="secondary" />
        </div>
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import Popover from 'primevue/popover'

const popoverRef = ref()
const state = reactive({
  selectedRow: null,
  rows: [
    { projekt: 'Webseite Relaunch', status: 'Aktiv', statusSeverity: 'info', faellig: '15.04.2026' },
    { projekt: 'Mobile App', status: 'In Prüfung', statusSeverity: 'warn', faellig: '24.04.2026' },
    { projekt: 'Marketing Kampagne', status: 'Abgeschlossen', statusSeverity: 'secondary', faellig: '09.05.2026' },
    { projekt: 'API Migration', status: 'Gestoppt', statusSeverity: 'danger', faellig: '12.06.2026' }
  ]
})

const togglePopover = (event, row) => {
  state.selectedRow = row
  popoverRef.value.toggle(event)
}
</script>