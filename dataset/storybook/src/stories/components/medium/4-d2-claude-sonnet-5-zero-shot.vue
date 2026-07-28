<template>
  <div class="flex items-center gap-1 p-3 bg-white rounded-md" style="width: fit-content;">
    <Breadcrumb :home="home" :model="items" class="border-none p-0" />

    <Button
      type="button"
      label="Dashboard anzeigen"
      severity="secondary"
      @click="toggleMenu"
      aria-haspopup="true"
      aria-controls="dashboard_menu"
    />
    <Menu ref="menu" id="dashboard_menu" :model="dashboardItems" :popup="true" />
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