<template>
  <div class="bg-white p-0">
    <div class="flex flex-col">
      <DataTable :value="state.rows" class="w-full">
        <Column field="projekt" header="Projekt"></Column>
        <Column header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="data.severity" />
          </template>
        </Column>
        <Column field="faellig" header="Fällig"></Column>
        <Column header="Aktionen">
          <template #body>
            <Button icon="pi pi-ellipsis-h" text severity="secondary" />
          </template>
        </Column>
      </DataTable>
    </div>

    <div class="flex flex-col mt-4">
      <Popover>
        <div class="flex flex-col gap-4">
          <div class="flex flex-col rounded-md bg-white">
            <div class="flex flex-col gap-2 p-3">
              <div class="flex flex-col gap-2">
                <Button label="Bearbeiten" icon="pi pi-pencil" outlined severity="secondary" class="w-full justify-start" />
                <Button label="Duplizieren" icon="pi pi-copy" outlined severity="secondary" class="w-full justify-start" />
                <Button label="Löschen" icon="pi pi-trash" outlined severity="secondary" class="w-full justify-start" />
              </div>
            </div>
          </div>
        </div>
      </Popover>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import Popover from 'primevue/popover'

const state = reactive({
  rows: [
    { projekt: 'Webseite Relaunch', status: 'Aktiv', severity: 'primary', faellig: '15.04.2026' },
    { projekt: 'Mobile App', status: 'In Prüfung', severity: 'warn', faellig: '24.04.2026' },
    { projekt: 'Marketing Kampagne', status: 'Abgeschlossen', severity: 'secondary', faellig: '09.05.2026' },
    { projekt: 'API Migration', status: 'Gestoppt', severity: 'danger', faellig: '12.06.2026' }
  ]
})
</script>