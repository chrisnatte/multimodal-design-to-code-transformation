<template>
  <div class="p-6 bg-white">
    <DataTable :value="state.projects" tableClass="w-full" class="text-slate-700">
      <Column field="projekt" header="Projekt">
        <template #body="{ data }">
          <span class="text-[28:3508] text-[14px]">{{ data.projekt }}</span>
        </template>
      </Column>

      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.severity" class="text-[12px] font-bold" />
        </template>
      </Column>

      <Column field="faellig" header="Fällig">
        <template #body="{ data }">
          <span class="text-[14px]">{{ data.faellig }}</span>
        </template>
      </Column>

      <Column header="Aktionen" headerClass="text-left" bodyClass="text-left">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            text
            rounded
            severity="secondary"
            @click="toggleActions($event, data)"
            class="!w-9 !h-9"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="actionsPopover">
      <div class="flex flex-col gap-2 p-1 w-44">
        <Button label="Bearbeiten" icon="pi pi-pencil" outlined severity="secondary" class="justify-start" />
        <Button label="Duplizieren" icon="pi pi-copy" outlined severity="secondary" class="justify-start" />
        <Button label="Löschen" icon="pi pi-trash" outlined severity="secondary" class="justify-start" />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import Popover from 'primevue/popover';

const actionsPopover = ref(null);

const state = reactive({
  selectedRow: null,
  projects: [
    { projekt: 'Webseite Relaunch', status: 'Aktiv', severity: 'success', faellig: '15.04.2026' },
    { projekt: 'Mobile App', status: 'In Prüfung', severity: 'warn', faellig: '24.04.2026' },
    { projekt: 'Marketing Kampagne', status: 'Abgeschlossen', severity: 'secondary', faellig: '09.05.2026' },
    { projekt: 'API Migration', status: 'Gestoppt', severity: 'danger', faellig: '12.06.2026' }
  ]
});

const toggleActions = (event, row) => {
  state.selectedRow = row;
  actionsPopover.value.toggle(event);
};
</script>