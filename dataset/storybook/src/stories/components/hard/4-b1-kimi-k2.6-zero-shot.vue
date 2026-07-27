<template>
  <div class="relative bg-white w-[777px] h-[323px]" style="font-family: Inter, sans-serif;">
    <div class="absolute left-6 top-6 w-[600px]">
      <DataTable :value="tableData" class="border border-slate-200 rounded-md overflow-hidden">
        <Column header="Projekt" style="width: 224px" headerClass="!px-3.5 !py-2.5 font-semibold text-sm" bodyClass="!px-3.5">
          <template #body="{ data }">
            <span class="text-sm">{{ data.project }}</span>
          </template>
        </Column>
        <Column header="Status" style="width: 160px" headerClass="!px-3.5 !py-2.5 font-semibold text-sm" bodyClass="!px-3.5">
          <template #body="{ data }">
            <div class="flex items-center">
              <Tag :value="data.status.label" :severity="data.status.severity" />
            </div>
          </template>
        </Column>
        <Column header="Fällig" style="width: 124px" headerClass="!px-3.5 !py-2.5 font-semibold text-sm" bodyClass="!px-3.5">
          <template #body="{ data }">
            <span class="text-sm">{{ data.due }}</span>
          </template>
        </Column>
        <Column header="Aktionen" style="width: 92px" headerClass="!px-3.5 !py-2.5 font-semibold text-sm" bodyClass="!px-3.5">
          <template #body="{ data }">
            <div class="flex items-center justify-center">
              <Button
                :icon="data.action.icon"
                :text="data.action.text"
                :severity="data.action.text ? 'secondary' : undefined"
                :class="data.action.active ? '!bg-slate-100' : ''"
                aria-label="Aktionen"
              />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>

    <div class="absolute left-[561px] top-[159px] w-[192px] bg-white border border-slate-200 rounded-md p-2.5 flex flex-col gap-2">
      <Button label="Bearbeiten" icon="pi pi-pencil" severity="secondary" outlined class="w-full justify-start text-sm" />
      <Button label="Duplizieren" icon="pi pi-copy" severity="secondary" outlined class="w-full justify-start text-sm" />
      <Button label="Löschen" icon="pi pi-trash" severity="secondary" outlined class="w-full justify-start text-sm" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import Button from 'primevue/button';

const tableData = ref([
  { project: 'Webseite Relaunch', status: { label: 'Aktiv', severity: 'success' }, due: '15.04.2026', action: { icon: 'pi pi-ellipsis-h', text: false, active: false } },
  { project: 'Mobile App', status: { label: 'In Prüfung', severity: 'warn' }, due: '24.04.2026', action: { icon: 'pi pi-ellipsis-h', text: true, active: true } },
  { project: 'Marketing Kampagne', status: { label: 'Abgeschlossen', severity: 'secondary' }, due: '09.05.2026', action: { icon: 'pi pi-ellipsis-h', text: true, active: false } },
  { project: 'API Migration', status: { label: 'Gestoppt', severity: 'danger' }, due: '12.06.2026', action: { icon: 'pi pi-ellipsis-h', text: true, active: false } }
]);
</script>