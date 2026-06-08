<template>
  <div class="flex gap-1">
    <div class="flex gap-2 p-3.5 rounded-md bg-white">
      <div class="flex items-center gap-2 py-2">
        <Breadcrumb :home="home" :model="breadcrumbItems" />
      </div>
      <div class="flex items-start">
        <Button
          type="button"
          label="Dashboard anzeigen"
          severity="secondary"
          icon="pi pi-chevron-down"
          iconPos="right"
          aria-haspopup="true"
          aria-controls="dashboard_menu"
          @click="toggleMenu"
        />
        <Menu ref="menuRef" id="dashboard_menu" :model="menuItems" popup />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import Menu from 'primevue/menu';

const state = reactive({
  selectedDashboard: null
});

const menuRef = ref();

const home = ref({
  icon: 'pi pi-home'
});

const breadcrumbItems = ref([
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-table' }
]);

const menuItems = ref([
  {
    label: 'Dashboard 1',
    command: () => {
      state.selectedDashboard = 'Dashboard 1';
    }
  },
  {
    label: 'Dashboard 2',
    command: () => {
      state.selectedDashboard = 'Dashboard 2';
    }
  }
]);

const toggleMenu = (event) => {
  menuRef.value.toggle(event);
};
</script>