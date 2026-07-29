<template>
  <div class="p-8 bg-white flex justify-center">
    <div class="w-full max-w-4xl">
      <DataTable :value="projects" tableStyle="min-width: 40rem">
        <Column field="name" header="Projekt" class="w-1/4">
          <template #body="{ data }">
            <span class="text-surface-700 dark:text-surface-100">{{ data.name }}</span>
          </template>
        </Column>
        <Column field="status" header="Status" class="w-1/4">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="getSeverity(data.status)" />
          </template>
        </Column>
        <Column field="dueDate" header="Fällig" class="w-1/4">
          <template #body="{ data }">
            <span class="text-surface-700 dark:text-surface-100">{{ data.dueDate }}</span>
          </template>
        </Column>
        <Column header="Aktionen" class="w-1/4">
          <template #body>
            <Button 
              icon="pi pi-ellipsis-h" 
              variant="text" 
              severity="secondary" 
              @click="togglePopover" 
              aria-haspopup="true" 
              aria-controls="action_popover" 
            />
          </template>
        </Column>
      </DataTable>

      <Popover ref="op" id="action_popover">
        <div class="flex flex-col gap-2 w-44 p-1">
          <Button 
            label="Bearbeiten" 
            icon="pi pi-pencil" 
            variant="outlined" 
            severity="secondary" 
            class="w-full justify-start" 
          />
          <Button 
            label="Duplizieren" 
            icon="pi pi-copy" 
            variant="outlined" 
            severity="secondary" 
            class="w-full justify-start" 
          />
          <Button 
            label="Löschen" 
            icon="pi pi-trash" 
            variant="outlined" 
            severity="secondary" 
            class="w-full justify-start" 
          />
        </div>
      </Popover>
    </div>
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
      return 'secondary';
    case 'Gestoppt':
      return 'danger';
    default:
      return 'info';
  }
};
</script>