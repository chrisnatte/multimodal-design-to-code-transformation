<template>
  <div class="w-full max-w-4xl p-6 bg-white shrink-0">
    <DataTable :value="projects" class="w-full">
      <Column field="projekt" header="Projekt" style="width: 35%">
        <template #body="{ data }">
          <span class="text-surface-900 dark:text-surface-0 font-medium">
            {{ data.projekt }}
          </span>
        </template>
      </Column>
      
      <Column field="status" header="Status" style="width: 25%">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getSeverity(data.status)" class="font-bold" />
        </template>
      </Column>
      
      <Column field="date" header="Fällig" style="width: 25%">
        <template #body="{ data }">
          <span class="text-surface-600 dark:text-surface-300">
            {{ data.date }}
          </span>
        </template>
      </Column>
      
      <Column header="Aktionen" style="width: 15%">
        <template #body="{ data }">
          <Button 
            icon="pi pi-ellipsis-h" 
            variant="text" 
            severity="secondary" 
            rounded 
            @click="togglePopover($event, data)" 
            aria-haspopup="true" 
            aria-controls="action_menu"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op" id="action_menu">
      <div class="flex flex-col gap-2 w-48 p-1">
        <Button 
          label="Bearbeiten" 
          icon="pi pi-file-edit" 
          variant="outlined" 
          severity="secondary" 
          class="w-full justify-start border-surface-200 dark:border-surface-700 font-medium" 
        />
        <Button 
          label="Duplizieren" 
          icon="pi pi-copy" 
          variant="outlined" 
          severity="secondary" 
          class="w-full justify-start border-surface-200 dark:border-surface-700 font-medium" 
        />
        <Button 
          label="Löschen" 
          icon="pi pi-trash" 
          variant="outlined" 
          severity="secondary" 
          class="w-full justify-start border-surface-200 dark:border-surface-700 font-medium" 
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
  { id: 1, projekt: 'Webseite Relaunch', status: 'Aktiv', date: '15.04.2026' },
  { id: 2, projekt: 'Mobile App', status: 'In Prüfung', date: '24.04.2026' },
  { id: 3, projekt: 'Marketing Kampagne', status: 'Abgeschlossen', date: '09.05.2026' },
  { id: 4, projekt: 'API Migration', status: 'Gestoppt', date: '12.06.2026' }
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