<template>
  <div class="flex gap-1">
    <div class="flex items-start gap-[7px] p-3.5 bg-white rounded-md">
      <div class="flex items-center py-2">
        <Breadcrumb :model="breadcrumbItems" />
      </div>
      <div class="flex flex-col">
        <Button
          type="button"
          label="Dashboard anzeigen"
          severity="secondary"
          @click="toggleMenu"
        />
        <Menu ref="menuRef" :model="menuItems" popup />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import Menu from 'primevue/menu';

const menuRef = ref();

const breadcrumbItems = ref([
  { icon: 'pi pi-home' },
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-table' }
]);

const menuItems = ref([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
]);

const toggleMenu = (event) => {
  menuRef.value?.toggle(event);
};
</script>