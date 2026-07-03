<template>
  <div class="p-8">
    <DataTable :value="state.projects" tableStyle="min-width: 42rem">
      <Column field="name" header="Projekt">
        <template #body="{ data }">
          <span class="text-slate-700">{{ data.name }}</span>
        </template>
      </Column>

      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.severity" />
        </template>
      </Column>

      <Column field="dueDate" header="Fällig">
        <template #body="{ data }">
          <span class="text-slate-700">{{ data.dueDate }}</span>
        </template>
      </Column>

      <Column header="Aktionen" headerClass="text-left">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            severity="secondary"
            rounded
            text
            aria-label="Aktionen"
            @click="toggleMenu($event, data)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op" appendTo="body">
      <div class="flex flex-col gap-2 w-48">
        <Button
          label="Bearbeiten"
          icon="pi pi-pencil"
          variant="outlined"
          severity="secondary"
          class="justify-start"
          @click="op?.hide()"
        />
        <Button
          label="Duplizieren"
          icon="pi pi-copy"
          variant="outlined"
          severity="secondary"
          class="justify-start"
          @click="op?.hide()"
        />
        <Button
          label="Löschen"
          icon="pi pi-trash"
          variant="outlined"
          severity="secondary"
          class="justify-start"
          @click="op?.hide()"
        />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import Popover from 'primevue/popover';

const op = ref(null);

const state = reactive({
  selectedProject: null,
  projects: [
    { id: 1, name: 'Webseite Relaunch', status: 'Aktiv', severity: 'success', dueDate: '15.04.2026' },
    { id: 2, name: 'Mobile App', status: 'In Prüfung', severity: 'warn', dueDate: '24.04.2026' },
    { id: 3, name: 'Marketing Kampagne', status: 'Abgeschlossen', severity: 'info', dueDate: '09.05.2026' },
    { id: 4, name: 'API Migration', status: 'Gestoppt', severity: 'danger', dueDate: '12.06.2026' }
  ]
});

const toggleMenu = (event, project) => {
  state.selectedProject = project;
  op.value.toggle(event);
};
</script>