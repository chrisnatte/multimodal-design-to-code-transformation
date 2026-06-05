<template>
  <div class="bg-white p-6 w-[780px]">
    <div class="relative w-[600px]">
      <DataTable :value="state.projects" tableStyle="min-width: 600px" class="text-slate-700">
        <Column field="projekt" header="Projekt" />
        <Column header="Status">
          <template #body="{ data }">
            <Tag :value="data.statusLabel" :severity="data.statusSeverity" class="text-xs font-semibold" />
          </template>
        </Column>
        <Column field="faellig" header="Fällig" />
        <Column header="Aktionen" headerClass="text-left">
          <template #body="{ data, index }">
            <Button
              icon="pi pi-ellipsis-h"
              variant="text"
              severity="secondary"
              aria-label="Aktionen"
              class="!w-9 !h-9"
              :class="{ '!bg-slate-100 !text-slate-700 rounded-md': state.openMenuRow === index }"
              @click="toggleMenu($event, index, data)"
            />
          </template>
        </Column>
      </DataTable>

      <Popover ref="menuRef">
        <div class="flex flex-col gap-2 p-1 w-[180px]">
          <Button label="Bearbeiten" icon="pi pi-pencil" severity="secondary" variant="outlined" class="justify-start" />
          <Button label="Duplizieren" icon="pi pi-copy" severity="secondary" variant="outlined" class="justify-start" />
          <Button label="Löschen" icon="pi pi-trash" severity="secondary" variant="outlined" class="justify-start" />
        </div>
      </Popover>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import Popover from 'primevue/popover';

const menuRef = ref();

const state = reactive({
  openMenuRow: 1,
  selectedRow: null,
  projects: [
    { projekt: 'Webseite Relaunch', statusLabel: 'Aktiv', statusSeverity: 'success', faellig: '15.04.2026' },
    { projekt: 'Mobile App', statusLabel: 'In Prüfung', statusSeverity: 'warn', faellig: '24.04.2026' },
    { projekt: 'Marketing Kampagne', statusLabel: 'Abgeschlossen', statusSeverity: 'secondary', faellig: '09.05.2026' },
    { projekt: 'API Migration', statusLabel: 'Gestoppt', statusSeverity: 'danger', faellig: '12.06.2026' }
  ]
});

const toggleMenu = (event, index, row) => {
  state.openMenuRow = index;
  state.selectedRow = row;
  menuRef.value.toggle(event);
};
</script>