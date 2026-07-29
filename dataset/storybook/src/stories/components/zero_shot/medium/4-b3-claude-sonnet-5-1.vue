<template>
  <div class="flex flex-col gap-[10px] p-6 bg-white">
    <div class="flex items-center gap-1">
      <Breadcrumb :home="home" :model="items" class="p-0" />
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
import Button from 'primevue/button';
import Menu from 'primevue/menu';

const menuRef = ref();

const home = ref({
  icon: 'pi pi-home',
  url: '/'
});

const items = ref([
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-table' }
]);

const menuItems = ref([
  { label: 'Dashboard 1', command: () => {} },
  { label: 'Dashboard 2', command: () => {} }
]);

const toggleMenu = (event) => {
  menuRef.value.toggle(event);
};
</script>