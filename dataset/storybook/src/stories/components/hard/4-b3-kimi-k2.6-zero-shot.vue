<template>
  <div class="bg-white p-6 flex flex-col gap-4 w-full max-w-3xl">
    <DataTable :value="projects" class="w-full" tableClass="w-full">
      <Column field="project" header="Projekt" class="w-56"></Column>
      <Column field="status" header="Status" class="w-40">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status.label" :severity="slotProps.data.status.severity" />
        </template>
      </Column>
      <Column field="due" header="Fällig" class="w-32"></Column>
      <Column header="Aktionen" class="w-24">
        <template #body="slotProps">
          <Button icon="pi pi-ellipsis-h" v-bind="slotProps.data.actionProps" @click="togglePopover" />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-2 w-48 p-2.5">
        <Button label="Bearbeiten" icon="pi pi-pencil" outlined severity="secondary" class="w-full justify-start" />
        <Button label="Duplizieren" icon="pi pi-copy" outlined severity="secondary" class="w-full justify-start" />
        <Button label="Löschen" icon="pi pi-trash" outlined severity="secondary" class="w-full justify-start" />
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

const projects = ref([
  {
    project: 'Webseite Relaunch',
    status: { label: 'Aktiv', severity: 'success' },
    due: '15.04.2026',
    actionProps: { text: true }
  },
  {
    project: 'Mobile App',
    status: { label: 'In Prüfung', severity: 'warn' },
    due: '24.04.2026',
    actionProps: { plain: true }
  },
  {
    project: 'Marketing Kampagne',
    status: { label: 'Abgeschlossen', severity: 'secondary' },
    due: '09.05.2026',
    actionProps: { plain: true }
  },
  {
    project: 'API Migration',
    status: { label: 'Gestoppt', severity: 'danger' },
    due: '12.06.2026',
    actionProps: { plain: true }
  }
]);

const togglePopover = (event) => {
  op.value.toggle(event);
};
</script>