<template>
  <div class="flex flex-col">
    <div class="flex flex-col">
      <DataTable :value="tableRows">
        <Column field="projekt" header="Projekt" />
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="data.statusSeverity" />
          </template>
        </Column>
        <Column field="faellig" header="Fällig" />
        <Column header="Aktionen">
          <template #body="{ data }">
            <div class="flex items-center justify-center px-3.5 py-2.5">
              <Button icon="pi pi-ellipsis-h" text @click="togglePopover($event, data)" />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>

    <Popover ref="popoverRef">
      <div class="flex flex-col gap-3.5">
        <div class="flex flex-col rounded-md">
          <div class="flex flex-col items-center gap-2 p-2.5">
            <div class="flex flex-col gap-2 w-full">
              <Button label="Bearbeiten" icon="pi pi-pen-to-square" outlined severity="secondary" />
              <Button label="Duplizieren" icon="pi pi-copy" outlined severity="secondary" />
              <Button label="Löschen" icon="pi pi-trash" outlined severity="secondary" />
            </div>
          </div>
        </div>
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import Popover from 'primevue/popover'

const state = reactive({
  selectedRow: null
})

const tableRows = reactive([
  { projekt: 'Webseite Relaunch', status: 'Aktiv', statusSeverity: 'info', faellig: '15.04.2026' },
  { projekt: 'Mobile App', status: 'In Prüfung', statusSeverity: 'warn', faellig: '24.04.2026' },
  { projekt: 'Marketing Kampagne', status: 'Abgeschlossen', statusSeverity: 'secondary', faellig: '09.05.2026' },
  { projekt: 'API Migration', status: 'Gestoppt', statusSeverity: 'danger', faellig: '12.06.2026' }
])

const popoverRef = ref()

const togglePopover = (event, row) => {
  state.selectedRow = row
  popoverRef.value.toggle(event)
}
</script>