<template>
  <div class="flex flex-col items-start bg-white p-6 min-h-screen">
    <div class="w-[600px]">
      <DataTable :value="products" showGridlines tableStyle="min-width: 600px">
        <Column field="project" header="Projekt" class="w-56"></Column>
        <Column field="status" header="Status" class="w-40">
          <template #body="slotProps">
            <Tag :value="slotProps.data.status" :severity="slotProps.data.severity" />
          </template>
        </Column>
        <Column field="due" header="Fällig" class="w-32"></Column>
        <Column header="Aktionen" class="w-24">
          <template #body="slotProps">
            <Button icon="pi pi-ellipsis-h" severity="secondary" variant="text" @click="toggle($event, slotProps.data)" aria-label="Aktionen" />
          </template>
        </Column>
      </DataTable>
    </div>

    <Popover ref="op">
      <div class="flex flex-col gap-2 w-48 p-2.5">
        <Button icon="pi pi-pencil" label="Bearbeiten" variant="outlined" severity="secondary" class="w-full justify-start" @click="op.hide()" />
        <Button icon="pi pi-copy" label="Duplizieren" variant="outlined" severity="secondary" class="w-full justify-start" @click="op.hide()" />
        <Button icon="pi pi-trash" label="Löschen" variant="outlined" severity="secondary" class="w-full justify-start" @click="op.hide()" />
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
const selectedRow = ref();

const products = ref([
  { project: 'Webseite Relaunch', status: 'Aktiv', severity: 'success', due: '15.04.2026' },
  { project: 'Mobile App', status: 'In Prüfung', severity: 'warn', due: '24.04.2026' },
  { project: 'Marketing Kampagne', status: 'Abgeschlossen', severity: 'secondary', due: '09.05.2026' },
  { project: 'API Migration', status: 'Gestoppt', severity: 'danger', due: '12.06.2026' }
]);

const toggle = (event, data) => {
  selectedRow.value = data;
  op.value.toggle(event);
};
</script>