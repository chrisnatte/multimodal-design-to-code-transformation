<template>
  <div class="bg-white p-6 flex flex-col w-fit">
    <DataTable :value="projects" class="w-[600px]">
      <Column field="name" header="Projekt" style="width: 224px"></Column>
      <Column field="status" header="Status" style="width: 160px">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="slotProps.data.severity" />
        </template>
      </Column>
      <Column field="date" header="Fällig" style="width: 124px"></Column>
      <Column header="Aktionen" style="width: 92px">
        <template #body="slotProps">
          <Button 
            icon="pi pi-ellipsis-h" 
            variant="text" 
            severity="secondary" 
            rounded 
            aria-haspopup="true" 
            @click="togglePopover($event, slotProps.data)" 
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-2 p-2.5 w-[190px]">
        <Button label="Bearbeiten" icon="pi pi-pencil" variant="outlined" severity="secondary" class="w-full justify-start" />
        <Button label="Duplizieren" icon="pi pi-clone" variant="outlined" severity="secondary" class="w-full justify-start" />
        <Button label="Löschen" icon="pi pi-trash" variant="outlined" severity="secondary" class="w-full justify-start" />
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
  { id: 1, name: 'Webseite Relaunch', status: 'Aktiv', date: '15.04.2026', severity: 'success' },
  { id: 2, name: 'Mobile App', status: 'In Prüfung', date: '24.04.2026', severity: 'warn' },
  { id: 3, name: 'Marketing Kampagne', status: 'Abgeschlossen', date: '09.05.2026', severity: 'secondary' },
  { id: 4, name: 'API Migration', status: 'Gestoppt', date: '12.06.2026', severity: 'danger' }
]);

const op = ref();
const selectedProject = ref();

const togglePopover = (event, data) => {
  selectedProject.value = data;
  op.value.toggle(event);
};
</script>