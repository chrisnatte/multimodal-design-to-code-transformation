<template>
  <div class="bg-white w-[777px] h-[323px] p-6 relative">
    <DataTable :value="projects" class="w-[600px]">
      <Column field="name" header="Projekt" headerClass="px-3.5 py-2.5 font-semibold text-sm" bodyClass="px-3.5 py-3 text-sm" style="width: 224px" />
      <Column field="status" header="Status" headerClass="px-3.5 py-2.5 font-semibold text-sm" bodyClass="px-3.5 py-3" style="width: 160px">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="data.statusSeverity" class="font-bold text-xs" />
        </template>
      </Column>
      <Column field="date" header="Fällig" headerClass="px-3.5 py-2.5 font-semibold text-sm" bodyClass="px-3.5 py-3 text-sm" style="width: 124px" />
      <Column header="Aktionen" headerClass="px-3.5 py-2.5 font-semibold text-sm" bodyClass="px-3.5 py-3" style="width: 92px">
        <template #body="{ data }">
          <Button
            icon="pi pi-ellipsis-h"
            :severity="data.buttonSeverity"
            text
            :rounded="false"
            size="small"
            class="h-7 w-9"
            :class="{ 'bg-slate-100': data.buttonState === 'Active' }"
          />
        </template>
      </Column>
    </DataTable>

    <div class="absolute top-[135px] left-[537px] w-[192px] bg-white border border-slate-200 rounded-md shadow-lg p-2.5 flex flex-col gap-2 z-10">
      <Button outlined severity="secondary" :rounded="false" icon="pi pi-pen-to-square" label="Bearbeiten" size="small" class="w-full justify-start" />
      <Button outlined severity="secondary" :rounded="false" icon="pi pi-copy" label="Duplizieren" size="small" class="w-full justify-start" />
      <Button outlined severity="secondary" :rounded="false" icon="pi pi-trash" label="Löschen" size="small" class="w-full justify-start" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import Button from 'primevue/button';

const projects = ref([
  {
    name: 'Webseite Relaunch',
    status: 'Aktiv',
    statusSeverity: 'success',
    date: '15.04.2026',
    buttonSeverity: 'primary',
    buttonState: 'Idle'
  },
  {
    name: 'Mobile App',
    status: 'In Prüfung',
    statusSeverity: 'warning',
    date: '24.04.2026',
    buttonSeverity: 'secondary',
    buttonState: 'Active'
  },
  {
    name: 'Marketing Kampagne',
    status: 'Abgeschlossen',
    statusSeverity: 'secondary',
    date: '09.05.2026',
    buttonSeverity: 'secondary',
    buttonState: 'Idle'
  },
  {
    name: 'API Migration',
    status: 'Gestoppt',
    statusSeverity: 'danger',
    date: '12.06.2026',
    buttonSeverity: 'secondary',
    buttonState: 'Idle'
  }
]);
</script>