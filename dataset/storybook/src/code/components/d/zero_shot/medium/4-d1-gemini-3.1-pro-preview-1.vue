<template>
  <div class="p-6 bg-white flex flex-col gap-2.5">
    <div class="flex flex-row gap-1">
      <div class="flex flex-row gap-[7px] p-[14px] bg-white rounded-md items-center">
        <Breadcrumb :home="home" :model="items" class="border-none p-0 bg-transparent" />
        
        <div class="relative ml-2">
          <Button 
            label="Dashboard anzeigen" 
            severity="secondary" 
            @click="toggleMenu" 
            aria-haspopup="true" 
            aria-controls="dashboard_menu"
            class="bg-slate-100 text-slate-700 border-none font-medium"
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

const menu = ref(null);

const menuItems = ref([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
]);

const toggleMenu = (event) => {
  menu.value.toggle(event);
};
</script>