<template>
  <div class="relative w-[777px] h-[323px] bg-white">
    <div class="absolute left-[24px] top-[24px] w-[600px] flex flex-col">
      <DataTable :value="projects" class="w-full">
        <Column field="project" header="Projekt" style="width: 224px"></Column>
        <Column field="status" header="Status" style="width: 160px">
          <template #body="slotProps">
            <Tag :value="slotProps.data.status" :severity="slotProps.data.statusSeverity" :rounded="false" />
          </template>
        </Column>
        <Column field="dueDate" header="Fällig" style="width: 124px"></Column>
        <Column header="Aktionen" style="width: 92px">
          <template #body>
            <Button icon="pi pi-ellipsis-h" text plain @click="togglePopover" />
          </template>
        </Column>
      </DataTable>
    </div>

    <Popover ref="actionPopover">
      <div class="flex flex-col gap-2 p-2.5 w-[190px] bg-white rounded-md">
        <Button 
          label="Bearbeiten" 
          icon="pi pi-pencil" 
          severity="secondary" 
          outlined 
          class="w-full justify-start" 
        />
        <Button 
          label="Duplizieren" 
          icon="pi pi-clone" 
          severity="secondary" 
          outlined 
          class="w-full justify-start" 
        />
        <Button 
          label="Löschen" 
          icon="pi pi-trash" 
          severity="secondary" 
          outlined 
          class="w-full justify-start" 
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
    project: 'Webseite Relaunch', 
    status: 'Aktiv', 
    statusSeverity: 'success', 
    dueDate: '15.04.2026' 
  },
  { 
    project: 'Mobile App', 
    status: 'In Prüfung', 
    statusSeverity: 'warn', 
    dueDate: '24.04.2026' 
  },
  { 
    project: 'Marketing Kampagne', 
    status: 'Abgeschlossen', 
    statusSeverity: 'secondary', 
    dueDate: '09.05.2026' 
  },
  { 
    project: 'API Migration', 
    status: 'Gestoppt', 
    statusSeverity: 'danger', 
    dueDate: '12.06.2026' 
  }
]);

const actionPopover = ref();

const togglePopover = (event) => {
  actionPopover.value.toggle(event);
};
</script>