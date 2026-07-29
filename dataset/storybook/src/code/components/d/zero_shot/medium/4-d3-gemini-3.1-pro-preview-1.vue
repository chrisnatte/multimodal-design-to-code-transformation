<template>
  <div class="p-6 bg-white flex flex-col gap-2.5">
    <div class="flex flex-row items-center p-3.5 bg-white rounded-md">
      <Breadcrumb :home="home" :model="breadcrumbItems" class="border-none p-0 bg-transparent">
        <template #item="{ item }">
          <a class="cursor-pointer flex items-center gap-1.5 text-surface-500 hover:text-surface-700 px-1">
            <span v-if="item.icon" :class="item.icon" class="text-sm"></span>
            <span v-if="item.label" class="text-sm">{{ item.label }}</span>
          </a>
        </template>
        <template #separator>
          <i class="pi pi-chevron-right text-surface-400 text-xs mx-1"></i>
        </template>
      </Breadcrumb>
      
      <i class="pi pi-chevron-right text-surface-400 text-xs mx-2"></i>
      
      <div class="relative">
        <Button 
          label="Dashboard anzeigen" 
          severity="secondary" 
          @click="toggleMenu" 
          aria-haspopup="true" 
          aria-controls="overlay_menu"
          class="bg-slate-100 text-slate-700 border-none hover:bg-slate-200 text-sm font-medium py-1.5 px-3"
        />
        <Menu 
          ref="menu" 
          id="overlay_menu" 
          :model="menuItems" 
          :popup="true" 
          class="mt-1 w-44"
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

const home = ref({ icon: 'pi pi-home' });

const breadcrumbItems = ref([
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-th-large' }
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