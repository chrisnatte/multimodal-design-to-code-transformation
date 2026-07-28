<template>
  <div class="p-6 bg-white rounded-xl w-full max-w-4xl font-sans">
    <DataTable :value="projects" class="w-full text-sm">
      <Column field="project" header="Projekt" headerClass="text-gray-600 font-semibold pb-4 border-b border-gray-100" bodyClass="py-4 border-b border-gray-100 text-gray-700">
      </Column>
      
      <Column header="Status" headerClass="text-gray-600 font-semibold pb-4 border-b border-gray-100" bodyClass="py-4 border-b border-gray-100">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" class="font-medium px-2.5 py-1 text-xs rounded-md" />
        </template>
      </Column>
      
      <Column field="dueDate" header="Fällig" headerClass="text-gray-600 font-semibold pb-4 border-b border-gray-100" bodyClass="py-4 border-b border-gray-100 text-gray-600">
      </Column>
      
      <Column header="Aktionen" headerClass="text-gray-600 font-semibold pb-4 border-b border-gray-100" bodyClass="py-4 border-b border-gray-100">
        <template #body="slotProps">
          <Button 
            icon="pi pi-ellipsis-h" 
            text 
            severity="secondary" 
            class="w-8 h-8 p-0 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-md transition-colors"
            :class="{ 'bg-gray-100': selectedProject === slotProps.data && menuVisible }"
            @click="toggleMenu($event, slotProps.data)" 
            aria-haspopup="true" 
            aria-controls="overlay_menu" 
          />
        </template>
      </Column>
    </DataTable>

    <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" class="p-2 border border-gray-200 shadow-sm rounded-lg w-48 bg-white" @hide="onMenuHide">
      <template #item="{ item, props }">
        <a v-bind="props.action" class="flex items-center px-3 py-2 mb-1.5 last:mb-0 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer text-gray-600 transition-colors">
          <span :class="item.icon" class="mr-2.5 text-gray-500 text-sm"></span>
          <span class="text-sm font-medium">{{ item.label }}</span>
        </a>
      </template>
    </Menu>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import Menu from 'primevue/menu';

const projects = ref([
  { project: 'Webseite Relaunch', status: 'Aktiv', dueDate: '15.04.2026' },
  { project: 'Mobile App', status: 'In Prüfung', dueDate: '24.04.2026' },
  { project: 'Marketing Kampagne', status: 'Abgeschlossen', dueDate: '09.05.2026' },
  { project: 'API Migration', status: 'Gestoppt', dueDate: '12.06.2026' }
]);

const menu = ref();
const selectedProject = ref(null);
const menuVisible = ref(false);

const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-file-edit' },
  { label: 'Duplizieren', icon: 'pi pi-copy' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);

const toggleMenu = (event, data) => {
  selectedProject.value = data;
  menuVisible.value = true;
  menu.value.toggle(event);
};

const onMenuHide = () => {
  menuVisible.value = false;
  selectedProject.value = null;
};

const getSeverity = (status) => {
  switch (status) {
    case 'Aktiv':
      return 'success';
    case 'In Prüfung':
      return 'warning';
    case 'Abgeschlossen':
      return 'secondary';
    case 'Gestoppt':
      return 'danger';
    default:
      return 'info';
  }
};
</script>

<style>
/* Customizing PrimeVue Tag colors to better match the specific pastel shades in the mockup if Aura defaults aren't exact */
.p-tag.p-tag-success {
  background-color: #dcfce7;
  color: #166534;
}
.p-tag.p-tag-warning {
  background-color: #ffedd5;
  color: #9a3412;
}
.p-tag.p-tag-secondary {
  background-color: #f1f5f9;
  color: #334155;
}
.p-tag.p-tag-danger {
  background-color: #fee2e2;
  color: #991b1b;
}
</style>