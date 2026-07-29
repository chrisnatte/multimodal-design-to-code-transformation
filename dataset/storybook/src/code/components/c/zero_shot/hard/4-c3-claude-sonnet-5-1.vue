<template>
  <div class="p-4">
    <DataTable :value="projects" tableStyle="min-width: 40rem">
      <Column field="projekt" header="Projekt"></Column>
      <Column field="status" header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
        </template>
      </Column>
      <Column field="faellig" header="Fällig"></Column>
      <Column header="Aktionen" style="width: 6rem">
        <template #body="slotProps">
          <Button icon="pi pi-ellipsis-h" text severity="secondary" @click="toggleMenu($event, slotProps.data)" />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-1 w-48">
        <Button label="Bearbeiten" icon="pi pi-pencil" text class="justify-start w-full" />
        <Button label="Duplizieren" icon="pi pi-copy" text class="justify-start w-full" />
        <Button label="Löschen" icon="pi pi-trash" text severity="danger" class="justify-start w-full" />
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
  { projekt: 'Webseite Relaunch', status: 'Aktiv', faellig: '15.04.2026' },
  { projekt: 'Mobile App', status: 'In Prüfung', faellig: '24.04.2026' },
  { projekt: 'Marketing Kampagne', status: 'Abgeschlossen', faellig: '09.05.2026' },
  { projekt: 'API Migration', status: 'Gestoppt', faellig: '12.06.2026' }
]);

const op = ref();
const selectedRow = ref(null);

const toggleMenu = (event, data) => {
  selectedRow.value = data;
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