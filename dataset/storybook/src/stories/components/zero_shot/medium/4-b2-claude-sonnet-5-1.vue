<template>
  <div class="flex flex-col gap-[10px] p-6 bg-white">
    <div class="flex gap-1 items-center">
      <div class="flex items-center bg-white rounded-md p-[14px] gap-[7px]">
        <Breadcrumb :home="home" :model="items" />
        <div class="relative">
          <Button
            label="Dashboard anzeigen"
            severity="secondary"
            @click="toggleMenu"
            aria-haspopup="true"
            aria-controls="dashboard_menu"
          />
          <Menu ref="menu" id="dashboard_menu" :model="menuItems" :popup="true" />
        </div>
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
  icon: 'pi pi-home'
});

const items = ref([
  { label: 'Projekt1' },
  { icon: 'pi pi-table', label: 'Gruppe1' }
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