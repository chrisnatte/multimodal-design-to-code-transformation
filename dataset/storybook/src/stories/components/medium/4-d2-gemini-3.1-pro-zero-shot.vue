<template>
  <div class="flex flex-row items-center gap-2 p-3.5 bg-surface-0 dark:bg-surface-900 rounded-md w-fit">
    <Breadcrumb :home="home" :model="breadcrumbItems" class="p-0 border-none bg-transparent">
      <template #item="{ item, props }">
        <a class="cursor-pointer flex items-center gap-1.5" v-bind="props.action">
          <span v-if="item.icon" :class="[item.icon, 'text-surface-500 dark:text-surface-400']"></span>
          <span v-if="item.label" class="text-surface-700 dark:text-surface-0 text-sm">{{ item.label }}</span>
        </a>
      </template>
    </Breadcrumb>
    
    <span class="pi pi-chevron-right text-surface-400 dark:text-surface-500 mx-1" style="font-size: 0.75rem;"></span>
    
    <Button 
      label="Dashboard anzeigen" 
      severity="secondary" 
      @click="toggleMenu" 
      aria-haspopup="true" 
      aria-controls="dashboard_menu" 
    />
    
    <Menu 
      ref="menu" 
      id="dashboard_menu" 
      :model="menuItems" 
      :popup="true" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import Menu from 'primevue/menu';

const home = ref({
  icon: 'pi pi-home'
});

const breadcrumbItems = ref([
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-table' }
]);

const menuItems = ref([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
]);

const menu = ref();

const toggleMenu = (event) => {
  menu.value.toggle(event);
};
</script>