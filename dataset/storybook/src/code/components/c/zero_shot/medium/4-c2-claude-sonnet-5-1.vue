<template>
  <div class="flex items-center gap-2 p-4">
    <Breadcrumb :home="home" :model="items" />

    <div class="relative">
      <Button
        label="Dashboard anzeigen"
        severity="secondary"
        text
        class="text-surface-700"
        @click="toggleMenu"
        aria-haspopup="true"
        aria-controls="overlay_menu"
      />
      <Menu ref="menu" id="overlay_menu" :model="dashboardItems" :popup="true" />
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

const menu = ref();

const dashboardItems = ref([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
]);

const toggleMenu = (event) => {
  menu.value.toggle(event);
};
</script>