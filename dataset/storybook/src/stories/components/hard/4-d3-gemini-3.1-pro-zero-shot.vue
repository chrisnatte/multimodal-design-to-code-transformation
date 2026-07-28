<template>
  <div class="relative w-full max-w-4xl p-6 bg-white flex flex-col gap-4">
    <DataTable :value="projects" tableClass="min-w-full">
      <Column field="title" header="Projekt" style="width: 30%">
        <template #body="{ data }">
          <span class="text-surface-900 dark:text-surface-0 font-normal">{{ data.title }}</span>
        </template>
      </Column>
      <Column field="status" header="Status" style="width: 25%">
        <template #body="{ data }">
          <Tag :value="data.status.label" :severity="data.status.severity" />
        </template>
      </Column>
      <Column field="dueDate" header="Fällig" style="width: 25%">
        <template #body="{ data }">
          <span class="text-surface-900 dark:text-surface-0 font-normal">{{ data.dueDate }}</span>
        </template>
      </Column>
      <Column header="Aktionen" style="width: 20%">
        <template #body="{ data, index }">
          <Button
            icon="pi pi-ellipsis-h"
            variant="text"
            severity="secondary"
            @click="toggle($event, data)"
            :class="{ 'bg-surface-100 dark:bg-surface-800': data.id === 2 }"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op" class="w-48 shadow-lg border border-surface-200 dark:border-surface-700 rounded-md">
      <div class="flex flex-col gap-2 p-2 bg-white dark:bg-surface-900">
        <Button
          icon="pi pi-pencil"
          label="Bearbeiten"
          variant="outlined"
          severity="secondary"
          class="w-full justify-start border-surface-200 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-800"
        />
        <Button
          icon="pi pi-copy"
          label="Duplizieren"
          variant="outlined"
          severity="secondary"
          class="w-full justify-start border-surface-200 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-800"
        />
        <Button
          icon="pi pi-trash"
          label="Löschen"
          variant="outlined"
          severity="secondary"
          class="w-full justify-start border-surface-200 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-800"
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
    title: 'Webseite Relaunch',
    status: { label: 'Aktiv', severity: 'success' },
    dueDate: '15.04.2026'
  },
  {
    id: 2,
    title: 'Mobile App',
    status: { label: 'In Prüfung', severity: 'warn' },
    dueDate: '24.04.2026'
  },
  {
    id: 3,
    title: 'Marketing Kampagne',
    status: { label: 'Abgeschlossen', severity: 'secondary' },
    dueDate: '09.05.2026'
  },
  {
    id: 4,
    title: 'API Migration',
    status: { label: 'Gestoppt', severity: 'danger' },
    dueDate: '12.06.2026'
  }
]);

const op = ref();
const selectedProject = ref(null);

const toggle = (event, project) => {
  selectedProject.value = project;
  op.value.toggle(event);
};
</script>