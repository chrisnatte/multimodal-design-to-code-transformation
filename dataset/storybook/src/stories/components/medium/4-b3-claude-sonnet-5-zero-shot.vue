<template>
  <div class="flex gap-1">
    <div class="flex items-center gap-2 p-4 bg-white rounded-md">
      <Breadcrumb :home="home" :model="breadcrumbItems" />
      <Menu ref="menu" :model="menuItems" :popup="true" />
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
  url: '/'
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