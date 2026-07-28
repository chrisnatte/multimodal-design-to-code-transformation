<template>
  <div class="p-6">
    <DataTable :value="projects" tableStyle="min-width: 40rem">
      <Column field="projekt" header="Projekt"></Column>
      <Column field="status" header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" class="font-semibold" />
        </template>
      </Column>
      <Column field="faellig" header="Fällig"></Column>
      <Column header="Aktionen" style="width: 6rem">
        <template #body="slotProps">
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            text
            rounded
            @click="toggleMenu($event, slotProps.data)"
            aria-label="Aktionen"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-1 w-44">
        <Button label="Bearbeiten" icon="pi pi-pencil" variant="text" severity="secondary" class="justify-start w-full" />
        <Button label="Duplizieren" icon="pi pi-copy" variant="text" severity="secondary" class="justify-start w-full" />
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

const op = ref();
const selectedProject = ref(null);

const projects = ref([
  { projekt: 'Webseite Relaunch', status: 'Aktiv', faellig: '15.04.2026' },
  { projekt: 'Mobile App', status: 'In Prüfung', faellig: '24.04.2026' },
  { projekt: 'Marketing Kampagne', status: 'Abgeschlossen', faellig: '09.05.2026' },
  { projekt: 'API Migration', status: 'Gestoppt', faellig: '12.06.2026' }
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

const toggleMenu = (event, data) => {
  selectedProject.value = data;
  op.value.toggle(event);
};
</script>