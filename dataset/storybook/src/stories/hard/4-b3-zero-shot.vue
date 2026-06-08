<template>
  <div class="bg-white flex flex-col">
    <div class="flex flex-col">
      <DataTable :value="state.rows" tableStyle="min-width: 50rem">
        <Column field="projekt" header="Projekt"></Column>
        <Column field="status" header="Status">
          <template #body="slotProps">
            <Tag :value="slotProps.data.status" :severity="slotProps.data.statusSeverity" />
          </template>
        </Column>
        <Column field="faellig" header="Fällig"></Column>
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

    <div class="flex flex-col">
      <div class="flex flex-col gap-3.5">
        <Popover ref="op">
          <div class="flex flex-col rounded-md bg-white">
            <div class="flex flex-col items-center gap-2 p-2.5">
              <div class="flex flex-col gap-2 w-full">
                <Button label="Bearbeiten" icon="pi pi-pen-to-square" severity="secondary" outlined class="w-full justify-start" />
                <Button label="Duplizieren" icon="pi pi-copy" severity="secondary" outlined class="w-full justify-start" />
                <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="w-full justify-start" />
              </div>
            </div>
          </div>
        </Popover>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import Popover from 'primevue/popover'

const op = ref()
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
  op.value.toggle(event)
}
</script>