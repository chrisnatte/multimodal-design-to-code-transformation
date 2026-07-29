<template>
  <div class="bg-white w-[777px] h-[323px] relative">
    <div class="absolute left-[24px] top-[24px] w-[600px]">
      <DataTable :value="projects" class="w-full">
        <Column field="project" header="Projekt" style="width: 224px"></Column>
        <Column field="status" header="Status" style="width: 160px">
          <template #body="slotProps">
            <Tag :value="slotProps.data.status" :severity="slotProps.data.severity" />
          </template>
        </Column>
        <Column field="date" header="Fällig" style="width: 124px"></Column>
        <Column header="Aktionen" style="width: 92px">
          <template #body>
            <Button icon="pi pi-ellipsis-h" text plain @click="togglePopover" />
          </template>
        </Column>
      </DataTable>
    </div>

    <Popover ref="op">
      <div class="flex flex-col gap-2 w-[169px] p-1">
        <Button label="Bearbeiten" icon="pi pi-pencil" severity="secondary" variant="outlined" class="w-full justify-start" />
        <Button label="Duplizieren" icon="pi pi-copy" severity="secondary" variant="outlined" class="w-full justify-start" />
        <Button label="Löschen" icon="pi pi-trash" severity="secondary" variant="outlined" class="w-full justify-start" />
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
    project: 'Webseite Relaunch',
    status: 'Aktiv',
    severity: 'success',
    date: '15.04.2026'
  },
  {
    project: 'Mobile App',
    status: 'In Prüfung',
    severity: 'warn',
    date: '24.04.2026'
  },
  {
    project: 'Marketing Kampagne',
    status: 'Abgeschlossen',
    severity: 'secondary',
    date: '09.05.2026'
  },
  {
    project: 'API Migration',
    status: 'Gestoppt',
    severity: 'danger',
    date: '12.06.2026'
  }
]);

const op = ref();

const togglePopover = (event) => {
  op.value.toggle(event);
};
</script>