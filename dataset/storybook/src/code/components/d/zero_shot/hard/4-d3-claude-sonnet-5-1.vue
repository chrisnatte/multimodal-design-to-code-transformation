<template>
  <div class="p-6 bg-white">
    <DataTable :value="projects" tableStyle="min-width: 50rem">
      <Column field="projekt" header="Projekt"></Column>
      <Column field="status" header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="slotProps.data.severity" />
        </template>
      </Column>
      <Column field="faellig" header="Fällig"></Column>
      <Column header="Aktionen">
        <template #body="slotProps">
          <Button
            icon="pi pi-ellipsis-h"
            text
            severity="secondary"
            @click="toggleMenu($event, slotProps.data)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-2 w-[190px]">
        <Button
          label="Bearbeiten"
          icon="pi pi-pen-to-square"
          outlined
          severity="secondary"
          class="w-full justify-start"
          @click="onEdit"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          outlined
          severity="secondary"
          class="w-full justify-start"
          @click="onDuplicate"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          outlined
          severity="secondary"
          class="w-full justify-start"
          @click="onDelete"
        />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import Popover from 'primevue/popover';

const projects = ref([
  { projekt: 'Webseite Relaunch', status: 'Aktiv', severity: 'success', faellig: '15.04.2026' },
  { projekt: 'Mobile App', status: 'In Prüfung', severity: 'warn', faellig: '24.04.2026' },
  { projekt: 'Marketing Kampagne', status: 'Abgeschlossen', severity: 'secondary', faellig: '09.05.2026' },
  { projekt: 'API Migration', status: 'Gestoppt', severity: 'danger', faellig: '12.06.2026' }
]);

const op = ref();
const selectedRow = ref(null);

const toggleMenu = (event, data) => {
  selectedRow.value = data;
  op.value.toggle(event);
};

const onEdit = () => {
  console.log('Bearbeiten', selectedRow.value);
  op.value.hide();
};

const onDuplicate = () => {
  console.log('Duplizieren', selectedRow.value);
  op.value.hide();
};

const onDelete = () => {
  console.log('Löschen', selectedRow.value);
  op.value.hide();
};
</script>