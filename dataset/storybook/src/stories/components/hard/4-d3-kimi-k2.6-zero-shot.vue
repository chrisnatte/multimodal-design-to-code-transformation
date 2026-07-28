<template>
  <div class="flex items-start justify-center min-h-screen bg-white p-8">
    <div class="w-[600px]">
      <DataTable :value="projects" tableStyle="min-width: 600px" class="w-full">
        <Column field="name" header="Projekt" style="width: 224px"></Column>
        <Column field="status" header="Status" style="width: 160px">
          <template #body="slotProps">
            <Tag :value="slotProps.data.statusLabel" :severity="slotProps.data.statusSeverity" />
          </template>
        </Column>
        <Column field="dueDate" header="Fällig" style="width: 124px"></Column>
        <Column header="Aktionen" style="width: 92px">
          <template #body>
            <div class="flex justify-center">
              <Button icon="pi pi-ellipsis-h" text @click="toggle" />
            </div>
          </template>
        </Column>
      </DataTable>

      <Popover ref="op">
        <div class="flex flex-col gap-2 p-2.5 w-48">
          <Button icon="pi pi-pencil" label="Bearbeiten" severity="secondary" outlined class="w-full justify-start" />
          <Button icon="pi pi-copy" label="Duplizieren" severity="secondary" outlined class="w-full justify-start" />
          <Button icon="pi pi-trash" label="Löschen" severity="secondary" outlined class="w-full justify-start" />
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

const op = ref();

const toggle = (event) => {
  op.value.toggle(event);
};

const projects = ref([
  {
    name: 'Webseite Relaunch',
    statusLabel: 'Aktiv',
    statusSeverity: 'success',
    dueDate: '15.04.2026'
  },
  {
    name: 'Mobile App',
    statusLabel: 'In Prüfung',
    statusSeverity: 'warn',
    dueDate: '24.04.2026'
  },
  {
    name: 'Marketing Kampagne',
    statusLabel: 'Abgeschlossen',
    statusSeverity: 'secondary',
    dueDate: '09.05.2026'
  },
  {
    name: 'API Migration',
    statusLabel: 'Gestoppt',
    statusSeverity: 'danger',
    dueDate: '12.06.2026'
  }
]);
</script>