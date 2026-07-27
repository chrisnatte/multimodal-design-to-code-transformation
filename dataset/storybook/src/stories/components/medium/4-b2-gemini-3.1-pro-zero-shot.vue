<template>
  <div class="flex flex-row gap-1">
    <div class="flex flex-row items-center gap-[7px] p-[14px] rounded-md bg-white">
      <Breadcrumb :home="home" :model="items" class="!p-0 !bg-transparent !border-none" />
      
      <div class="relative">
        <Button 
          type="button" 
          label="Dashboard anzeigen" 
          severity="secondary" 
          @click="toggle" 
          aria-haspopup="true" 
          aria-controls="overlay_menu" 
        />
        <Menu 
          ref="menu" 
          id="overlay_menu" 
          :model="menuItems" 
          :popup="true" 
        />
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

const toggle = (event) => {
  menu.value.toggle(event);
};
</script>