<template>
  <div class="flex items-center gap-1 p-3 bg-white rounded-md">
    <Breadcrumb :home="home" :model="items" class="p-0">
      <template #item="{ item, props }">
        <a v-bind="props.action" class="flex items-center gap-1 no-underline text-color">
          <span v-if="item.icon" :class="item.icon" />
          <span>{{ item.label }}</span>
        </a>
      </template>
    </Breadcrumb>

    <Menu ref="menu" :model="menuItems" :popup="true" />
    <Button
      label="Dashboard anzeigen"
      severity="secondary"
      @click="toggleMenu"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import Menu from 'primevue/menu';
import Button from 'primevue/button';

const home = ref({
  icon: 'pi pi-home',
  url: '#'
});

const items = ref([
  { label: 'Projekt1', url: '#' },
  { label: 'Gruppe1', icon: 'pi pi-table', url: '#' }
]);

const menu = ref();
const menuItems = ref([
  { label: 'Dashboard 1', command: () => {} },
  { label: 'Dashboard 2', command: () => {} }
]);

const toggleMenu = (event) => {
  menu.value.toggle(event);
};
</script>