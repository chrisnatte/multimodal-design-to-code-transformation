<template>
  <div class="p-8 flex items-center font-sans">
    <Breadcrumb :model="breadcrumbItems" class="bg-transparent border-none p-0 m-0">
      <template #item="{ item, props }">
        <a v-if="!item.isDropdown" v-bind="props.action" class="text-slate-500 hover:text-slate-700 cursor-pointer flex items-center gap-1.5 decoration-none">
          <span v-if="item.icon" :class="item.icon" class="text-sm"></span>
          <span v-if="item.label" class="text-sm">{{ item.label }}</span>
        </a>
        <div v-else class="relative flex items-center">
          <Button
            type="button"
            :label="item.label"
            @click="toggleMenu"
            class="bg-slate-100 text-slate-700 border-none hover:bg-slate-200 px-3 py-1.5 rounded-md font-normal text-sm shadow-none m-0"
          />
          <Menu ref="menu" :model="menuItems" :popup="true" class="mt-1 w-40" />
        </div>
      </template>
      <template #separator>
        <i class="pi pi-angle-right text-slate-400 text-xs mx-1"></i>
      </template>
    </Breadcrumb>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import Menu from 'primevue/menu';

const menu = ref(null);

const breadcrumbItems = ref([
  { icon: 'pi pi-home' },
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-th-large' },
  { label: 'Dashboard anzeigen', isDropdown: true }
]);

const menuItems = ref([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
]);

const toggleMenu = (event) => {
  menu.value.toggle(event);
};
</script>