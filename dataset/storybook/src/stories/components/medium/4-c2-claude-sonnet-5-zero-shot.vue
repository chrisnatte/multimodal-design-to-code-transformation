<template>
  <div class="flex items-center p-4 gap-2 relative">
    <Breadcrumb :home="home" :model="items" class="border-none bg-transparent p-0">
      <template #item="{ item, props }">
        <a v-if="item.url" :href="item.url" v-bind="props.action" class="flex items-center gap-1">
          <span v-if="item.icon" :class="item.icon"></span>
          <span class="text-surface-500">{{ item.label }}</span>
        </a>
      </template>
    </Breadcrumb>

    <Button
      label="Dashboard anzeigen"
      severity="secondary"
      variant="text"
      class="bg-surface-100 text-surface-700 font-normal"
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
  icon: 'pi pi-home',
  url: '/'
});

const items = ref([
  { label: 'Projekt1', url: '/projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-table', url: '/gruppe1' }
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