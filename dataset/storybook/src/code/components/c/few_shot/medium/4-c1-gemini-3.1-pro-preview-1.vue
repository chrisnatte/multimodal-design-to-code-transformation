<template>
  <div class="p-8">
    <Breadcrumb :model="items" :home="home" class="!border-none !bg-transparent !p-0">
      <template #item="{ item, props }">
        <a v-if="!item.isDropdown" :href="item.url" v-bind="props.action" class="!text-slate-500 hover:!text-slate-700">
          <span v-if="item.icon" :class="item.icon" class="mr-2"></span>
          <span v-if="item.label">{{ item.label }}</span>
        </a>
        <div v-else>
          <Button 
            :label="item.label" 
            severity="secondary" 
            class="!py-1.5 !px-3 !text-slate-700 !bg-slate-100 !border-none hover:!bg-slate-200"
            @click="toggleMenu" 
            aria-haspopup="true" 
            aria-controls="overlay_menu"
          />
          <Menu ref="menu" id="overlay_menu" :model="menuItems" popup />
        </div>
      </template>
      <template #separator>
        <i class="pi pi-angle-right text-slate-400 text-sm"></i>
      </template>
    </Breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import Menu from 'primevue/menu';

const home = ref({ icon: 'pi pi-home' });
const items = ref([
    { label: 'Projekt1' },
    { label: 'Gruppe1', icon: 'pi pi-table' },
    { label: 'Dashboard anzeigen', isDropdown: true }
]);

const menu = ref();
const menuItems = ref([
    { label: 'Dashboard 1' },
    { label: 'Dashboard 2' }
]);

const toggleMenu = (event: Event) => {
    menu.value.toggle(event);
};
</script>