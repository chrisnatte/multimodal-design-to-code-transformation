<template>
  <div class="p-8">
    <DataTable :value="projects" tableStyle="min-width: 50rem">
      <Column field="name" header="Projekt" class="w-1/4"></Column>
      <Column field="status" header="Status" class="w-1/4">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getSeverity(data.status)" />
        </template>
      </Column>
      <Column field="date" header="Fällig" class="w-1/4"></Column>
      <Column header="Aktionen" class="w-1/4">
        <template #body="{ data, index }">
          <Button
            icon="pi pi-ellipsis-h"
            variant="text"
            severity="secondary"
            @click="togglePopover($event, data)"
            :class="{ 'bg-surface-100 dark:bg-surface-800': activeRow === data.name }"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op" @hide="activeRow = null">
      <div class="flex flex-col gap-2 w-48 p-1">
        <Button
          label="Bearbeiten"
          icon="pi pi-file-edit"
          variant="outlined"
          severity="secondary"
          class="w-full !justify-start"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-copy"
          variant="outlined"
          severity="secondary"
          class="w-full !justify-start"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          variant="outlined"
          severity="secondary"
          class="w-full !justify-start"
        />
      </div>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import Popover from 'primevue/popover';

const projects = ref([
  { name: 'Webseite Relaunch', status: 'Aktiv', date: '15.04.2026' },
  { name: 'Mobile App', status: 'In Prüfung', date: '24.04.2026' },
  { name: 'Marketing Kampagne', status: 'Abgeschlossen', date: '09.05.2026' },
  { name: 'API Migration', status: 'Gestoppt', date: '12.06.2026' }
]);

const op = ref();
const activeRow = ref<string | null>(null);

const togglePopover = (event: Event, data: any) => {
  activeRow.value = data.name;
  op.value.toggle(event);
};

const getSeverity = (status: string) => {
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