<template>
  <div class="bg-white">
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
                variant="text"
                aria-label="Aktionen"
                @click="togglePopover($event, slotProps.data)"
              />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>

    <div class="flex flex-col">
      <Popover ref="op">
        <div class="flex flex-col gap-4">
          <div class="rounded-md bg-white">
            <div class="flex flex-col gap-2 p-3">
              <Button label="Bearbeiten" icon="pi pi-pencil" severity="secondary" variant="outlined" />
              <Button label="Duplizieren" icon="pi pi-copy" severity="secondary" variant="outlined" />
              <Button label="Löschen" icon="pi pi-trash" severity="secondary" variant="outlined" />
            </div>
          </div>
        </div>
      </Popover>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import Popover from 'primevue/popover';

const op = ref();

const state = reactive({
  selectedRow: null,
  rows: [
    { projekt: 'Webseite Relaunch', status: 'Aktiv', statusSeverity: 'success', faellig: '15.04.2026' },
    { projekt: 'Mobile App', status: 'In Prüfung', statusSeverity: 'warn', faellig: '24.04.2026' },
    { projekt: 'Marketing Kampagne', status: 'Abgeschlossen', statusSeverity: 'secondary', faellig: '09.05.2026' },
    { projekt: 'API Migration', status: 'Gestoppt', statusSeverity: 'danger', faellig: '12.06.2026' }
  ]
});

const togglePopover = (event, row) => {
  state.selectedRow = row;
  op.value.toggle(event);
};
</script>