<template>
  <div class="p-8 max-w-5xl mx-auto">
    <DataTable :value="projects" class="w-full">
      <Column field="name" header="Projekt" />
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getSeverity(data.status)" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig" />
      <Column header="Aktionen">
        <template #body="{ data }">
          <Button icon="pi pi-ellipsis-h" variant="text" rounded @click="togglePopover($event)" />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-1 p-2 w-48">
        <Button label="Bearbeiten" icon="pi pi-pencil" variant="text" class="justify-start w-full" />
        <Button label="Duplizieren" icon="pi pi-copy" variant="text" class="justify-start w-full" />
        <Button label="Löschen" icon="pi pi-trash" variant="text" severity="danger" class="justify-start w-full" />
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
  { name: 'Webseite Relaunch', status: 'Aktiv', dueDate: '15.04.2026' },
  { name: 'Mobile App', status: 'In Prüfung', dueDate: '24.04.2026' },
  { name: 'Marketing Kampagne', status: 'Abgeschlossen', dueDate: '09.05.2026' },
  { name: 'API Migration', status: 'Gestoppt', dueDate: '12.06.2026' }
]);

const op = ref();

const togglePopover = (event) => {
  op.value.toggle(event);
};

const getSeverity = (status) => {
  switch (status) {
    case 'Aktiv':
      return 'success';
    case 'In Prüfung':
      return 'warn';
    case 'Abgeschlossen':
      return 'info';
    case 'Gestoppt':
      return 'danger';
    default:
      return null;
  }
};
</script>