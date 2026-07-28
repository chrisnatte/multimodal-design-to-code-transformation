<template>
  <div class="p-4 bg-white">
    <DataTable :value="projects" tableStyle="min-width: 40rem">
      <Column field="projekt" header="Projekt"></Column>
      <Column field="status" header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="slotProps.data.severity" />
        </template>
      </Column>
      <Column field="faellig" header="Fällig"></Column>
      <Column header="Aktionen">
        <template #body="slotProps">
          <Button
            icon="pi pi-ellipsis-h"
            text
            rounded
            severity="secondary"
            @click="toggleMenu($event, slotProps.data)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="popoverRef">
      <div class="flex flex-col gap-2 w-[169px]">
        <Button
          label="Bearbeiten"
          icon="pi pi-pencil"
          severity="secondary"
          outlined
          class="w-full justify-start"
          @click="onEdit(selectedRow)"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-clone"
          severity="secondary"
          outlined
          class="w-full justify-start"
          @click="onDuplicate(selectedRow)"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          severity="secondary"
          outlined
          class="w-full justify-start"
          @click="onDelete(selectedRow)"
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
  {
    projekt: 'Webseite Relaunch',
    status: 'Aktiv',
    severity: 'success',
    faellig: '15.04.2026'
  },
  {
    projekt: 'Mobile App',
    status: 'In Prüfung',
    severity: 'warn',
    faellig: '24.04.2026'
  },
  {
    projekt: 'Marketing Kampagne',
    status: 'Abgeschlossen',
    severity: 'secondary',
    faellig: '09.05.2026'
  },
  {
    projekt: 'API Migration',
    status: 'Gestoppt',
    severity: 'danger',
    faellig: '12.06.2026'
  }
]);

const popoverRef = ref();
const selectedRow = ref(null);

const toggleMenu = (event, data) => {
  selectedRow.value = data;
  popoverRef.value.toggle(event);
};

const onEdit = (row) => {
  console.log('Bearbeiten', row);
  popoverRef.value.hide();
};

const onDuplicate = (row) => {
  console.log('Duplizieren', row);
  popoverRef.value.hide();
};

const onDelete = (row) => {
  console.log('Löschen', row);
  popoverRef.value.hide();
};
</script>