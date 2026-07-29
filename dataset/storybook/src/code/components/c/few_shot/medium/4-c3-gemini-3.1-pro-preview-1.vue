<template>
  <div class="flex items-center gap-2 p-4">
    <Breadcrumb :home="home" :model="items">
      <template #item="{ item }">
        <a class="flex cursor-pointer items-center gap-2 text-slate-500 hover:text-slate-700">
          <span v-if="item.icon" :class="item.icon"></span>
          <span v-if="item.label">{{ item.label }}</span>
        </a>
      </template>
      <template #separator>
        <span class="pi pi-angle-right text-slate-400"></span>
      </template>
    </Breadcrumb>

    <div class="relative">
      <Button
        label="Dashboard anzeigen"
        severity="secondary"
        class="bg-slate-100 text-slate-700 hover:bg-slate-200 border-none"
        @click="toggleMenu"
        aria-haspopup="true"
        aria-controls="dashboard-menu"
      />
      <Menu
        ref="menu"
        id="dashboard-menu"
        :model="menuItems"
        :popup="true"
        class="mt-1 w-48"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import Menu from 'primevue/menu';

const home = ref({ icon: 'pi pi-home' });
const items = ref([
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-th-large' }
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