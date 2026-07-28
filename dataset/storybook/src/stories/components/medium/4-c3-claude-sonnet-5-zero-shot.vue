<template>
  <div class="flex items-center gap-2 p-4">
    <Breadcrumb :home="home" :model="items" />
    <Button
      label="Dashboard anzeigen"
      icon="pi pi-chevron-down"
      iconPos="right"
      severity="secondary"
      text
      class="bg-surface-100"
      @click="toggleMenu"
    />
    <Menu ref="menu" :model="dashboardItems" :popup="true" />
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
  { label: 'Gruppe1', icon: 'pi pi-th-large', url: '#' }
]);

const dashboardItems = ref([
  { label: 'Dashboard 1', command: () => {} },
  { label: 'Dashboard 2', command: () => {} }
]);

const menu = ref();

const toggleMenu = (event) => {
  menu.value.toggle(event);
};
</script>