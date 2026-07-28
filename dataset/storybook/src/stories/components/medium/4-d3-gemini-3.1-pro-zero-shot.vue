<template>
  <div class="flex items-center gap-1.5 p-3.5 bg-white rounded-md shadow-sm w-max">
    <Breadcrumb :home="home" :model="items" class="bg-transparent p-0 border-none">
      <template #separator>
        <span class="pi pi-chevron-right text-xs text-surface-400"></span>
      </template>
      <template #item="{ item, props }">
        <a v-bind="props.action" class="flex items-center gap-1.5 text-surface-500 hover:text-surface-700 cursor-pointer transition-colors">
          <span v-if="item.icon" :class="item.icon"></span>
          <span v-if="item.label" class="text-sm">{{ item.label }}</span>
        </a>
      </template>
    </Breadcrumb>
    
    <span class="pi pi-chevron-right text-xs text-surface-400 ml-1 mr-1"></span>
    
    <div>
      <Button 
        label="Dashboard anzeigen" 
        severity="secondary" 
        @click="toggleMenu" 
        aria-haspopup="true" 
        aria-controls="overlay_menu"
        class="text-sm font-medium py-1.5 px-3"
      />
      <Menu 
        ref="menu" 
        id="overlay_menu" 
        :model="menuItems" 
        :popup="true" 
      />
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

const menuItems = ref([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
]);

const menu = ref();

const toggleMenu = (event) => {
  menu.value.toggle(event);
};
</script>