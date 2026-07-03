<template>
  <div class="flex flex-col bg-white p-4">
    <div class="flex flex-col">
      <DataTable :value="state.rows" tableStyle="min-width: 48rem">
        <Column field="projekt" header="Projekt" />
        <Column header="Status">
          <template #body="{ data }">
            <Tag :value="data.status.label" :severity="data.status.severity" />
          </template>
        </Column>
        <Column field="faellig" header="Fällig" />
        <Column header="Aktionen">
          <template #body="{ data }">
            <div class="flex justify-center">
              <Button
                icon="pi pi-ellipsis-h"
                variant="text"
                aria-label="Aktionen"
                @click="togglePopover($event, data)"
              />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>

    <Popover ref="popoverRef">
      <div class="flex flex-col gap-2 p-3">
        <Button label="Bearbeiten" icon="pi pi-pencil" severity="secondary" variant="outlined" />
        <Button label="Duplizieren" icon="pi pi-copy" severity="secondary" variant="outlined" />
        <Button label="Löschen" icon="pi pi-trash" severity="secondary" variant="outlined" />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import Popover from 'primevue/popover';

const popoverRef = ref(null);

const state = reactive({
  selectedRow: null,
  rows: [
    { projekt: 'Webseite Relaunch', status: { label: 'Aktiv', severity: 'primary' }, faellig: '15.04.2026' },
    { projekt: 'Mobile App', status: { label: 'In Prüfung', severity: 'warn' }, faellig: '24.04.2026' },
    { projekt: 'Marketing Kampagne', status: { label: 'Abgeschlossen', severity: 'secondary' }, faellig: '09.05.2026' },
    { projekt: 'API Migration', status: { label: 'Gestoppt', severity: 'danger' }, faellig: '12.06.2026' }
  ]
});

const togglePopover = (event, row) => {
  state.selectedRow = row;
  popoverRef.value.toggle(event);
};
</script>