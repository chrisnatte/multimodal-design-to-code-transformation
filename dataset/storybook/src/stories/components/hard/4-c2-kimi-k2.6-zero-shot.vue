<template>
  <div class="p-8 bg-white min-h-screen">
    <div class="card">
      <DataTable :value="projects" tableStyle="min-width: 50rem">
        <Column field="name" header="Projekt" class="w-2/5"></Column>
        <Column field="status" header="Status" class="w-1/6">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="getSeverity(data.status)" />
          </template>
        </Column>
        <Column field="dueDate" header="Fällig" class="w-1/6"></Column>
        <Column header="Aktionen" class="w-1/6">
          <template #body="{ data }">
            <Button type="button" icon="pi pi-ellipsis-h" variant="text" rounded @click="togglePopover($event, data)" />
          </template>
        </Column>
      </DataTable>

      <Popover ref="op">
        <div class="flex flex-col gap-1 w-48">
          <Button icon="pi pi-pencil" label="Bearbeiten" variant="text" size="small" class="justify-start w-full" />
          <Button icon="pi pi-copy" label="Duplizieren" variant="text" size="small" class="justify-start w-full" />
          <Button icon="pi pi-trash" label="Löschen" variant="text" size="small" class="justify-start w-full" />
        </div>
      </Popover>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import Popover from 'primevue/popover';

const projects = ref([
  { name: 'Webseite Relaunch', status: 'Aktiv', dueDate: '15.04.2026' },
  { name: 'Mobile App', status: 'In Prüfung', dueDate: '24.04.2026' },
  { name: 'Marketing Kampagne', status: 'Abgeschlossen', dueDate: '09.05.2026' },
  { name: 'API Migration', status: 'Gestoppt', dueDate: '12.06.2026' }
]);

const op = ref();
const selectedProject = ref(null);

const togglePopover = (event, data) => {
  selectedProject.value = data;
  op.value.toggle(event);
};

const getSeverity = (status) => {
  switch (status) {
    case 'Aktiv':
      return 'success';
    case 'In Prüfung':
      return 'warn';
    case 'Abgeschlossen':
      return 'secondary';
    case 'Gestoppt':
      return 'danger';
    default:
      return null;
  }
};
</script>