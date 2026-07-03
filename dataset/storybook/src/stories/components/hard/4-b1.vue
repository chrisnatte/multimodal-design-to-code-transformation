<template>
  <div class="bg-white p-4">
    <div class="flex flex-col">
      <DataTable :value="state.rows" class="w-full">
        <Column field="projekt" header="Projekt"></Column>
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="data.severity" />
          </template>
        </Column>
        <Column field="faellig" header="Fällig"></Column>
        <Column header="Aktionen">
          <template #body>
            <Button icon="pi pi-ellipsis-h" text severity="secondary" @click="state.menuVisible = true" />
          </template>
        </Column>
      </DataTable>
    </div>

    <OverlayPanel v-model:visible="state.menuVisible" class="rounded-md">
      <div class="flex flex-col gap-2 p-3">
        <Button label="Bearbeiten" icon="pi pi-pencil" outlined severity="secondary" class="justify-start" />
        <Button label="Duplizieren" icon="pi pi-copy" outlined severity="secondary" class="justify-start" />
        <Button label="Löschen" icon="pi pi-trash" outlined severity="secondary" class="justify-start" />
      </div>
    </OverlayPanel>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import OverlayPanel from 'primevue/overlaypanel'

const state = reactive({
  menuVisible: false,
  rows: [
    { projekt: 'Webseite Relaunch', status: 'Aktiv', severity: 'primary', faellig: '15.04.2026' },
    { projekt: 'Mobile App', status: 'In Prüfung', severity: 'warn', faellig: '24.04.2026' },
    { projekt: 'Marketing Kampagne', status: 'Abgeschlossen', severity: 'secondary', faellig: '09.05.2026' },
    { projekt: 'API Migration', status: 'Gestoppt', severity: 'danger', faellig: '12.06.2026' }
  ]
})
</script>