<template>
  <div class="flex items-center gap-2 text-slate-500 font-sans text-sm p-8">
    <i class="pi pi-home cursor-pointer hover:text-slate-800 transition-colors"></i>
    
    <i class="pi pi-angle-right text-xs text-slate-400"></i>
    
    <span class="cursor-pointer hover:text-slate-800 transition-colors">Projekt1</span>
    
    <i class="pi pi-angle-right text-xs text-slate-400"></i>
    
    <div class="flex items-center gap-1.5 cursor-pointer hover:text-slate-800 transition-colors">
      <i class="pi pi-table text-sm"></i>
      <span>Gruppe1</span>
    </div>
    
    <i class="pi pi-angle-right text-xs text-slate-400"></i>
    
    <div>
      <Button
        label="Dashboard anzeigen"
        @click="toggle"
        aria-haspopup="true"
        aria-controls="overlay_menu"
        class="!bg-slate-100 hover:!bg-slate-200 !text-slate-700 !border-none px-3 py-1.5 text-sm font-normal rounded-md shadow-none"
      />
      <Menu 
        ref="menu" 
        id="overlay_menu" 
        :model="items" 
        :popup="true" 
        class="mt-1 w-48" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Menu from 'primevue/menu';

const menu = ref();
const items = ref([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
]);

const toggle = (event) => {
  menu.value.toggle(event);
};
</script>