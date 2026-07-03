<template>
  <div class="p-6">
    <DataTable
      :value="state.projects"
      tableStyle="min-width: 42rem"
      class="rounded-lg overflow-hidden"
      :showGridlines="false"
      responsiveLayout="scroll"
    >
      <Column field="projekt" header="Projekt">
        <template #body="{ data }">
          <span class="text-slate-700">{{ data.projekt }}</span>
        </template>
      </Column>

      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.severity" rounded />
        </template>
      </Column>

      <Column field="faellig" header="Fällig">
        <template #body="{ data }">
          <span class="text-slate-700">{{ data.faellig }}</span>
        </template>
      </Column>

      <Column header="Aktionen">
        <template #body="{ data }">
          <div class="flex items-center justify-center">
            <Button
              icon="pi pi-ellipsis-h"
              rounded
              text
              severity="secondary"
              @click="togglePopover($event, data)"
            />
          </div>
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-2 w-48">
        <Button label="Bearbeiten" icon="pi pi-pencil" variant="outlined" severity="secondary" class="justify-start" fluid />
        <Button label="Duplizieren" icon="pi pi-copy" variant="outlined" severity="secondary" class="justify-start" fluid />
        <Button label="Löschen" icon="pi pi-trash" variant="outlined" severity="secondary" class="justify-start" fluid />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Popover from 'primevue/popover'
import Tag from 'primevue/tag'

const op = ref(null)

const state = reactive({
  selectedProject: null,
  projects: [
    { projekt: 'Webseite Relaunch', status: 'Aktiv', severity: 'success', faellig: '15.04.2026' },
    { projekt: 'Mobile App', status: 'In Prüfung', severity: 'warn', faellig: '24.04.2026' },
    { projekt: 'Marketing Kampagne', status: 'Abgeschlossen', severity: 'secondary', faellig: '09.05.2026' },
    { projekt: 'API Migration', status: 'Gestoppt', severity: 'danger', faellig: '12.06.2026' }
  ]
})

const togglePopover = (event, row) => {
  state.selectedProject = row
  op.value.toggle(event)
}
</script>