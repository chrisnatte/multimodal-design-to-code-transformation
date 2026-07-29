<template>
  <div class="p-8 bg-white">
    <DataTable :value="projects" class="w-full max-w-4xl">
      <Column field="name" header="Projekt" headerClass="text-surface-600 font-semibold"></Column>
      <Column header="Status" headerClass="text-surface-600 font-semibold">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.severity" class="font-semibold" />
        </template>
      </Column>
      <Column field="date" header="Fällig" headerClass="text-surface-600 font-semibold">
        <template #body="{ data }">
          <span class="text-surface-700">{{ data.date }}</span>
        </template>
      </Column>
      <Column header="Aktionen" headerClass="text-surface-600 font-semibold">
        <template #body="{ data, index }">
          <Button 
            icon="pi pi-ellipsis-h" 
            variant="text" 
            class="text-surface-500 hover:bg-surface-100"
            :class="{ 'bg-surface-100': index === 1 }"
            @click="togglePopover($event)" 
            aria-haspopup="true" 
            aria-controls="action_menu" 
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op" id="action_menu">
      <div class="flex flex-col gap-2 w-48 p-1">
        <Button 
          label="Bearbeiten" 
          icon="pi pi-file-edit" 
          variant="outlined" 
          class="w-full justify-start border-surface-200 text-surface-600 hover:bg-surface-50 font-medium" 
        />
        <Button 
          label="Duplizieren" 
          icon="pi pi-copy" 
          variant="outlined" 
          class="w-full justify-start border-surface-200 text-surface-600 hover:bg-surface-50 font-medium" 
        />
        <Button 
          label="Löschen" 
          icon="pi pi-trash" 
          variant="outlined" 
          class="w-full justify-start border-surface-200 text-surface-600 hover:bg-surface-50 font-medium" 
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
    id: 1,
    name: 'Webseite Relaunch',
    status: 'Aktiv',
    date: '15.04.2026',
    severity: 'success'
  },
  {
    id: 2,
    name: 'Mobile App',
    status: 'In Prüfung',
    date: '24.04.2026',
    severity: 'warn'
  },
  {
    id: 3,
    name: 'Marketing Kampagne',
    status: 'Abgeschlossen',
    date: '09.05.2026',
    severity: 'secondary'
  },
  {
    id: 4,
    name: 'API Migration',
    status: 'Gestoppt',
    date: '12.06.2026',
    severity: 'danger'
  }
]);

const op = ref();

const togglePopover = (event) => {
  op.value.toggle(event);
};
</script>