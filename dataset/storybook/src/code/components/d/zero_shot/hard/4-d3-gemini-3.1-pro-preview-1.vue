<template>
  <div class="p-8 bg-white flex justify-center">
    <div class="w-[600px] relative">
      <DataTable :value="projects" tableStyle="min-width: 100%">
        <Column field="name" header="Projekt" style="width: 37%"></Column>
        <Column field="status" header="Status" style="width: 26%">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="getSeverity(data.status)" />
          </template>
        </Column>
        <Column field="date" header="Fällig" style="width: 21%"></Column>
        <Column header="Aktionen" style="width: 16%">
          <template #body="{ data }">
            <Button 
              icon="pi pi-ellipsis-h" 
              variant="text" 
              severity="secondary" 
              @click="togglePopover($event, data)" 
              aria-haspopup="true" 
              aria-controls="overlay_menu"
            />
          </template>
        </Column>
      </DataTable>

      <Popover ref="op" id="overlay_menu">
        <div class="flex flex-col gap-2 w-[169px] p-1">
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
  { id: 1, name: 'Webseite Relaunch', status: 'Aktiv', date: '15.04.2026' },
  { id: 2, name: 'Mobile App', status: 'In Prüfung', date: '24.04.2026' },
  { id: 3, name: 'Marketing Kampagne', status: 'Abgeschlossen', date: '09.05.2026' },
  { id: 4, name: 'API Migration', status: 'Gestoppt', date: '12.06.2026' }
]);

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

const op = ref();
const selectedProject = ref(null);

const togglePopover = (event, data) => {
  selectedProject.value = data;
  op.value.toggle(event);
};
</script>