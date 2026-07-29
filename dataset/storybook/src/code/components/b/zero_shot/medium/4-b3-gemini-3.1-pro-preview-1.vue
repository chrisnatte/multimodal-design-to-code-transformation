<template>
  <div class="flex flex-col p-6 gap-[10px] bg-white">
    <div class="flex flex-row gap-1">
      <div class="flex flex-row items-center p-[14px] gap-[7px] rounded-md bg-white">
        <div class="flex flex-row items-center py-2 gap-[7px]">
          <Breadcrumb :home="home" :model="items" class="bg-transparent border-none p-0" />
        </div>
        <div class="relative">
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
      </div>
    </div>
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

const items = ref([
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-table' }
]);

const menu = ref();

const menuItems = ref([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
]);

const toggleMenu = (event) => {
  menu.value.toggle(event);
};
</script>