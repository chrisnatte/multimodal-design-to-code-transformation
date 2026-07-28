<template>
  <div class="flex items-center p-6">
    <Breadcrumb :home="home" :model="items">
      <template #item="{ item }">
        <a v-if="item.url && !item.isMenu" :href="item.url" class="flex items-center gap-1.5 text-surface-600 hover:text-primary no-underline">
          <span v-if="item.icon" :class="item.icon"></span>
          <span>{{ item.label }}</span>
        </a>
        <span v-else-if="item.isMenu" class="relative flex items-center">
          <Button
            :label="item.label"
            variant="text"
            class="bg-surface-100 hover:bg-surface-200 text-surface-700 rounded-md px-3 py-1.5"
            @click="toggleMenu"
          />
          <Menu ref="menu" :model="menuItems" popup />
        </span>
        <span v-else class="flex items-center gap-1.5 text-surface-600">
          <span v-if="item.icon" :class="item.icon"></span>
          <span>{{ item.label }}</span>
        </span>
      </template>
      <template #separator>
        <span class="mx-2 text-surface-400 text-sm">></span>
      </template>
    </Breadcrumb>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import Menu from 'primevue/menu';

const menu = ref();

const home = ref({
  icon: 'pi pi-home',
  url: '/'
});

const items = ref([
  { label: 'Projekt1', url: '/projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-table', url: '/gruppe1' },
  { label: 'Dashboard anzeigen', isMenu: true }
]);

const menuItems = ref([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
]);

const toggleMenu = (event) => {
  menu.value.toggle(event);
};
</script>