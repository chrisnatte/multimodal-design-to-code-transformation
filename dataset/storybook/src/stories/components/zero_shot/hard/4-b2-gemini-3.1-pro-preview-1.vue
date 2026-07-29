<template>
  <div class="bg-white p-4 flex gap-8 items-start">
    <DataTable :value="projects" class="w-[600px]">
      <Column field="name" header="Projekt" style="width: 224px">
        <template #body="slotProps">
          <span class="text-sm font-normal font-sans">{{ slotProps.data.name }}</span>
        </template>
      </Column>
      <Column field="status" header="Status" style="width: 160px">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" class="font-bold text-xs" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig" style="width: 124px">
        <template #body="slotProps">
          <span class="text-sm font-normal font-sans">{{ slotProps.data.dueDate }}</span>
        </template>
      </Column>
      <Column header="Aktionen" style="width: 92px">
        <template #body="slotProps">
          <Button icon="pi pi-ellipsis-h" variant="text" severity="secondary" rounded aria-label="Aktionen" @click="toggle" />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-2 w-[169px] p-1">
        <Button label="Bearbeiten" icon="pi pi-pencil" variant="outlined" severity="secondary" class="w-full justify-start text-sm font-medium" />
        <Button label="Duplizieren" icon="pi pi-copy" variant="outlined" severity="secondary" class="w-full justify-start text-sm font-medium" />
        <Button label="Löschen" icon="pi pi-trash" variant="outlined" severity="secondary" class="w-full justify-start text-sm font-medium" />
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

const toggle = (event) => {
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