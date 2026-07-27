<template>
  <div class="flex flex-row gap-1">
    <div class="flex flex-row items-center gap-2 bg-white rounded-md p-3.5">
      <Breadcrumb :home="home" :model="breadcrumbItems" />
      <Button
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
  route: '/'
});

const breadcrumbItems = ref([
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-table' }
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