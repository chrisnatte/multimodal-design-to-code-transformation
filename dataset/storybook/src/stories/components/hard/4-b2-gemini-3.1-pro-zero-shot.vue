<template>
  <div class="bg-white w-[777px] h-[323px] relative">
    <div class="absolute left-[24px] top-[24px] w-[600px]">
      <DataTable :value="projects" class="w-full">
        <Column field="name" header="Projekt" style="width: 224px">
          <template #body="slotProps">
            <span class="text-sm font-normal font-sans">{{ slotProps.data.name }}</span>
          </template>
        </Column>
        <Column field="status" header="Status" style="width: 160px">
          <template #body="slotProps">
            <Tag :value="slotProps.data.status" :severity="slotProps.data.severity" class="font-bold text-xs" />
          </template>
        </Column>
        <Column field="date" header="Fällig" style="width: 124px">
          <template #body="slotProps">
            <span class="text-sm font-normal font-sans">{{ slotProps.data.date }}</span>
          </template>
        </Column>
        <Column header="Aktionen" style="width: 92px">
          <template #body>
            <Button icon="pi pi-ellipsis-h" variant="text" severity="secondary" rounded aria-label="Aktionen" @click="togglePopover" />
          </template>
        </Column>
      </DataTable>
    </div>

    <Popover ref="op">
      <div class="flex flex-col gap-2 p-1 w-[169px]">
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
  { name: 'Webseite Relaunch', status: 'Aktiv', severity: 'success', date: '15.04.2026' },
  { name: 'Mobile App', status: 'In Prüfung', severity: 'warn', date: '24.04.2026' },
  { name: 'Marketing Kampagne', status: 'Abgeschlossen', severity: 'secondary', date: '09.05.2026' },
  { name: 'API Migration', status: 'Gestoppt', severity: 'danger', date: '12.06.2026' }
]);

const op = ref();

const togglePopover = (event) => {
  op.value.toggle(event);
};
</script>