<template>
  <div class="flex gap-1">
    <div class="flex gap-2 p-3.5 bg-white rounded-md">
      <div class="flex items-center gap-2 py-2">
        <Breadcrumb :home="state.breadcrumbHome" :model="state.breadcrumbItems" />
      </div>

      <div class="flex">
        <Button
          type="button"
          label="Dashboard anzeigen"
          severity="secondary"
          icon="pi pi-chevron-down"
          iconPos="right"
          @click="toggleMenu"
          aria-haspopup="true"
          aria-controls="dashboard_menu"
        />
        <Menu
          ref="menuRef"
          id="dashboard_menu"
          :model="state.menuItems"
          :popup="true"
        />
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