<template>
  <div class="p-6 bg-white flex flex-col gap-2.5">
    <div class="flex items-center gap-1">
      <Breadcrumb :home="home" :model="items" class="!p-0 !border-none !bg-transparent" />
      <Menu ref="menuRef" :model="menuItems" :popup="true" />
      <Button
        label="Dashboard anzeigen"
        severity="secondary"
        @click="toggleMenu"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import Menu from 'primevue/menu';
import Button from 'primevue/button';

const home = ref({
  icon: 'pi pi-home',
  url: '#'
});

const items = ref([
  { label: 'Projekt1', url: '#' },
  { label: 'Gruppe1', icon: 'pi pi-table', url: '#' }
]);

const menuRef = ref();

const menuItems = ref([
  { label: 'Dashboard 1', command: () => {} },
  { label: 'Dashboard 2', command: () => {} }
]);

const toggleMenu = (event) => {
  menuRef.value.toggle(event);
};
</script>