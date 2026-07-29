<template>
  <div class="p-4">
    <DataTable :value="projects" class="w-full max-w-4xl">
      <Column field="name" header="Projekt" class="w-1/4"></Column>
      <Column header="Status" class="w-1/4">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getSeverity(data.status)" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig" class="w-1/4"></Column>
      <Column header="Aktionen" class="w-1/4">
        <template #body="{ data }">
          <Button 
            icon="pi pi-ellipsis-h" 
            variant="text" 
            severity="secondary" 
            rounded
            aria-label="Aktionen"
            @click="togglePopover($event, data)" 
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-2 w-40 p-1">
        <Button 
          label="Bearbeiten" 
          icon="pi pi-file-edit" 
          variant="outlined" 
          severity="secondary" 
          class="w-full justify-start border-surface-200 dark:border-surface-700 text-surface-700 dark:text-surface-200" 
        />
        <Button 
          label="Duplizieren" 
          icon="pi pi-copy" 
          variant="outlined" 
          severity="secondary" 
          class="w-full justify-start border-surface-200 dark:border-surface-700 text-surface-700 dark:text-surface-200" 
        />
        <Button 
          label="Löschen" 
          icon="pi pi-trash" 
          variant="outlined" 
          severity="secondary" 
          class="w-full justify-start border-surface-200 dark:border-surface-700 text-surface-700 dark:text-surface-200" 
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
  { id: 1, name: 'Webseite Relaunch', status: 'Aktiv', dueDate: '15.04.2026' },
  { id: 2, name: 'Mobile App', status: 'In Prüfung', dueDate: '24.04.2026' },
  { id: 3, name: 'Marketing Kampagne', status: 'Abgeschlossen', dueDate: '09.05.2026' },
  { id: 4, name: 'API Migration', status: 'Gestoppt', dueDate: '12.06.2026' }
]);

const op = ref();
const selectedProject = ref(null);

const togglePopover = (event, project) => {
  selectedProject.value = project;
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
      return 'info';
  }
};
</script>