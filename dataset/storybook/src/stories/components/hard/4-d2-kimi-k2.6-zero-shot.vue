<template>
  <div class="bg-white p-8 min-h-screen">
    <DataTable :value="projects" tableStyle="min-width: 600px">
      <Column field="name" header="Projekt" style="width: 224px"></Column>
      <Column field="status" header="Status" style="width: 160px">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig" style="width: 124px"></Column>
      <Column header="Aktionen" style="width: 92px">
        <template #body="slotProps">
          <Button icon="pi pi-ellipsis-h" variant="text" severity="secondary" aria-label="Aktionen" @click="togglePopover($event, slotProps.data)" />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-2 w-44">
        <Button variant="outlined" severity="secondary" icon="pi pi-pen-to-square" label="Bearbeiten" class="w-full justify-start" @click="hidePopover" />
        <Button variant="outlined" severity="secondary" icon="pi pi-copy" label="Duplizieren" class="w-full justify-start" @click="hidePopover" />
        <Button variant="outlined" severity="secondary" icon="pi pi-trash" label="Löschen" class="w-full justify-start" @click="hidePopover" />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import Popover from 'primevue/popover';

const op = ref();
const selectedProject = ref(null);

const projects = ref([
  { id: 1, name: 'Webseite Relaunch', status: 'Aktiv', dueDate: '15.04.2026' },
  { id: 2, name: 'Mobile App', status: 'In Prüfung', dueDate: '24.04.2026' },
  { id: 3, name: 'Marketing Kampagne', status: 'Abgeschlossen', dueDate: '09.05.2026' },
  { id: 4, name: 'API Migration', status: 'Gestoppt', dueDate: '12.06.2026' }
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
      return null;
  }
};

const togglePopover = (event, project) => {
  op.value.hide();

  if (selectedProject.value?.id === project.id) {
    selectedProject.value = null;
  } else {
    selectedProject.value = project;
    nextTick(() => {
      op.value.show(event);
    });
  }
};

const hidePopover = () => {
  op.value.hide();
};
</script>