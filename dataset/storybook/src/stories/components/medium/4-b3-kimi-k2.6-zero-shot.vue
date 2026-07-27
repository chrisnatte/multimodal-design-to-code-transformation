<template>
  <div class="flex flex-row gap-1">
    <div class="flex flex-row gap-2 p-3.5 bg-white rounded-md">
      <div class="flex flex-row items-center gap-2 py-2">
        <Breadcrumb :home="home" :model="breadcrumbItems" />
      </div>
      <div>
        <Button
          label="Dashboard anzeigen"
          severity="secondary"
          aria-haspopup="true"
          aria-controls="overlay_menu"
          @click="toggleMenu"
        />
        <Menu
          id="overlay_menu"
          ref="menu"
          :model="menuItems"
          :popup="true"
        />
      </div>
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
  url: '/'
});

const breadcrumbItems = ref([
  { label: 'Projekt1', url: '#' },
  { label: 'Gruppe1', icon: 'pi pi-table', url: '#' }
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