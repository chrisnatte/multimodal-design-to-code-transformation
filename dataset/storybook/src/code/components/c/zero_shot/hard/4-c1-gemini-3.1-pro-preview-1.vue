<template>
  <div class="p-6 bg-white rounded-lg">
    <DataTable :value="projects" class="w-full">
      <Column field="name" header="Projekt" class="py-4 text-slate-700 font-medium"></Column>
      <Column field="status" header="Status" class="py-4">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getSeverity(data.status)" class="font-medium px-2 py-1 text-xs" />
        </template>
      </Column>
      <Column field="date" header="Fällig" class="py-4 text-slate-600"></Column>
      <Column header="Aktionen" class="py-4">
        <template #body="{ data, index }">
          <Button 
            icon="pi pi-ellipsis-h" 
            text 
            rounded 
            class="text-slate-500 hover:bg-slate-100"
            :class="{ 'bg-slate-100': activeMenuIndex === index }"
            @click="toggleMenu($event, index)" 
            aria-haspopup="true" 
            aria-controls="overlay_menu" 
          />
        </template>
      </Column>
    </DataTable>

    <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" class="w-48" @hide="activeMenuIndex = null">
      <template #item="{ item, props }">
        <a v-bind="props.action" class="flex items-center px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-md m-1 border border-transparent hover:border-slate-200 transition-colors">
          <span :class="item.icon" class="mr-2 text-slate-500"></span>
          <span class="font-medium text-sm">{{ item.label }}</span>
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
  { id: 1, name: 'Webseite Relaunch', status: 'Aktiv', date: '15.04.2026' },
  { id: 2, name: 'Mobile App', status: 'In Prüfung', date: '24.04.2026' },
  { id: 3, name: 'Marketing Kampagne', status: 'Abgeschlossen', date: '09.05.2026' },
  { id: 4, name: 'API Migration', status: 'Gestoppt', date: '12.06.2026' }
]);

const menuItems = ref([
  { label: 'Bearbeiten', icon: 'pi pi-file-edit' },
  { label: 'Duplizieren', icon: 'pi pi-copy' },
  { label: 'Löschen', icon: 'pi pi-trash' }
]);

const menu = ref();
const activeMenuIndex = ref(null);

const toggleMenu = (event, index) => {
  activeMenuIndex.value = index;
  menu.value.toggle(event);
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