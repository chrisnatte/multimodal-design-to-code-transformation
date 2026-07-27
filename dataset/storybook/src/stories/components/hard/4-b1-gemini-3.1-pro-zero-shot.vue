<template>
  <div class="bg-white p-8 flex items-start justify-start">
    <div class="flex flex-col w-[600px]">
      <DataTable :value="projects" class="w-full">
        <Column field="projekt" header="Projekt" style="width: 224px">
          <template #body="{ data }">
            <span class="text-sm font-normal font-sans text-surface-900">{{ data.projekt }}</span>
          </template>
        </Column>
        <Column field="status" header="Status" style="width: 160px">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="data.severity" :rounded="false" class="font-bold text-xs" />
          </template>
        </Column>
        <Column field="faellig" header="Fällig" style="width: 124px">
          <template #body="{ data }">
            <span class="text-sm font-normal font-sans text-surface-900">{{ data.faellig }}</span>
          </template>
        </Column>
        <Column header="Aktionen" style="width: 92px">
          <template #body="{ data }">
            <Button 
              icon="pi pi-ellipsis-h" 
              severity="secondary" 
              text 
              @click="togglePopover($event, data)" 
            />
          </template>
        </Column>
      </DataTable>
    </div>

    <Popover ref="actionPopover">
      <div class="flex flex-col gap-2 p-1 w-[169px]">
        <Button 
          label="Bearbeiten" 
          icon="pi pi-pen-to-square" 
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
    id: 1, 
    projekt: 'Webseite Relaunch', 
    status: 'Aktiv', 
    severity: 'success', 
    faellig: '15.04.2026' 
  },
  { 
    id: 2, 
    projekt: 'Mobile App', 
    status: 'In Prüfung', 
    severity: 'warn', 
    faellig: '24.04.2026' 
  },
  { 
    id: 3, 
    projekt: 'Marketing Kampagne', 
    status: 'Abgeschlossen', 
    severity: 'secondary', 
    faellig: '09.05.2026' 
  },
  { 
    id: 4, 
    projekt: 'API Migration', 
    status: 'Gestoppt', 
    severity: 'danger', 
    faellig: '12.06.2026' 
  }
]);

const actionPopover = ref();
const selectedProject = ref(null);

const togglePopover = (event, project) => {
  selectedProject.value = project;
  actionPopover.value.toggle(event);
};
</script>