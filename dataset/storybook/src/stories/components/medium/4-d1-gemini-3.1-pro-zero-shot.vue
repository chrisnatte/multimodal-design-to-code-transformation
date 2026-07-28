<template>
  <div class="flex flex-row gap-1 p-3.5 bg-white rounded-md">
    <div class="flex flex-row items-center gap-[7px] py-2">
      <div class="flex flex-row items-center gap-[7px]">
        <i class="pi pi-home text-sm text-surface-500"></i>
        <i class="pi pi-chevron-right text-sm text-surface-400"></i>
        <span class="text-sm font-normal font-sans text-surface-600">Projekt1</span>
        <i class="pi pi-chevron-right text-sm text-surface-400"></i>
        <div class="flex flex-row items-center gap-1.5">
          <i class="pi pi-table text-sm text-surface-500"></i>
          <span class="text-sm font-normal font-sans text-surface-600">Gruppe1</span>
        </div>
        <i class="pi pi-chevron-right text-sm text-surface-400"></i>
      </div>
    </div>
    
    <div class="relative">
      <Button 
        type="button" 
        label="Dashboard anzeigen" 
        severity="secondary"
        @click="toggleMenu" 
        aria-haspopup="true" 
        aria-controls="overlay_menu" 
      />
      <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Menu from 'primevue/menu';

const menu = ref();

const items = ref([
    {
        label: 'Dashboard 1'
    },
    {
        label: 'Dashboard 2'
    }
]);

const toggleMenu = (event) => {
    menu.value.toggle(event);
};
</script>