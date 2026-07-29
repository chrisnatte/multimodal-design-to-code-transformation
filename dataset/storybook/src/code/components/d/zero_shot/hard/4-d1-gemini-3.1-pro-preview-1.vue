<template>
  <div class="bg-white p-8 w-full max-w-4xl">
    <DataTable :value="projects" class="w-full">
      <Column field="projekt" header="Projekt" class="py-4">
        <template #body="{ data }">
          <span class="text-gray-800">{{ data.projekt }}</span>
        </template>
      </Column>
      <Column field="status" header="Status" class="py-4">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getSeverity(data.status)" :pt="{ root: { class: 'font-bold' } }" />
        </template>
      </Column>
      <Column field="faellig" header="Fällig" class="py-4">
        <template #body="{ data }">
          <span class="text-gray-600">{{ data.faellig }}</span>
        </template>
      </Column>
      <Column header="Aktionen" class="py-4">
        <template #body="{ data }">
          <Button 
            icon="pi pi-ellipsis-h" 
            text 
            plain 
            class="text-gray-500 hover:bg-gray-100"
            @click="togglePopover($event, data)" 
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op" class="w-48">
      <div class="flex flex-col gap-2 p-1">
        <Button 
          label="Bearbeiten" 
          icon="pi pi-pencil" 
          outlined 
          severity="secondary" 
          class="w-full justify-start border-gray-200 text-gray-700 hover:bg-gray-50" 
        />
        <Button 
          label="Duplizieren" 
          icon="pi pi-copy" 
          outlined 
          severity="secondary" 
          class="w-full justify-start border-gray-200 text-gray-700 hover:bg-gray-50" 
        />
        <Button 
          label="Löschen" 
          icon="pi pi-trash" 
          outlined 
          severity="secondary" 
          class="w-full justify-start border-gray-200 text-gray-700 hover:bg-gray-50" 
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
  { projekt: 'Webseite Relaunch', status: 'Aktiv', faellig: '15.04.2026' },
  { projekt: 'Mobile App', status: 'In Prüfung', faellig: '24.04.2026' },
  { projekt: 'Marketing Kampagne', status: 'Abgeschlossen', faellig: '09.05.2026' },
  { projekt: 'API Migration', status: 'Gestoppt', faellig: '12.06.2026' }
]);

const op = ref();
const selectedProject = ref(null);

const togglePopover = (event, project) => {
  selectedProject.value = project;
  op.value.toggle(event);
};

const getSeverity = (status) => {
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