<template>
  <div class="flex flex-row gap-1">
    <div class="flex flex-row items-center gap-2 p-4 bg-white rounded-md">
      <Breadcrumb :home="home" :model="items" class="p-0" />

      <Button
        type="button"
        label="Dashboard anzeigen"
        severity="secondary"
        @click="toggleMenu"
        aria-haspopup="true"
        aria-controls="overlay_menu"
      />
      <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import Menu from 'primevue/menu';

const home = ref({
  icon: 'pi pi-home',
  url: '#'
});

const items = ref([
  { label: 'Projekt1', url: '#' },
  { label: 'Gruppe1', icon: 'pi pi-table', url: '#' }
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