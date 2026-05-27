<template>
  <div class="flex gap-1">
    <div class="flex gap-2 p-3.5 rounded-md bg-white">
      <div class="flex items-center gap-2 py-2">
        <Breadcrumb :home="state.breadcrumbHome" :model="state.breadcrumbItems" />
      </div>
      <div class="flex items-start">
        <Button
          label="Dashboard anzeigen"
          severity="secondary"
          type="button"
          @click="toggleMenu"
        />
        <Menu ref="menuRef" :model="state.menuItems" popup />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import Menu from 'primevue/menu';

const menuRef = ref();

const state = reactive({
  breadcrumbHome: {
    icon: 'pi pi-home'
  },
  breadcrumbItems: [
    { label: 'Projekt1' },
    { label: 'Gruppe1', icon: 'pi pi-table' }
  ],
  menuItems: [
    { label: 'Dashboard 1' },
    { label: 'Dashboard 2' }
  ]
});

const toggleMenu = (event) => {
  menuRef.value.toggle(event);
};
</script>