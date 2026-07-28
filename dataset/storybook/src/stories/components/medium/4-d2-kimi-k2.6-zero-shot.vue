<template>
  <div class="flex items-center gap-1">
    <div class="flex items-center gap-2 bg-white rounded-md p-3.5">
      <div class="flex items-center py-2">
        <Breadcrumb :home="home" :model="breadcrumbItems" class="bg-transparent border-none p-0">
          <template #item="{ item, props }">
            <a :href="item.url || '#'" v-bind="props.action" class="flex items-center gap-1 text-sm text-surface-600 no-underline hover:text-surface-800">
              <span v-if="item.icon" :class="item.icon" class="text-surface-500" />
              <span>{{ item.label }}</span>
            </a>
          </template>
          <template #separator>
            <i class="pi pi-chevron-right text-xs text-surface-400" />
          </template>
        </Breadcrumb>
      </div>
      <Button type="button" label="Dashboard anzeigen" severity="secondary" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
      <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import Menu from 'primevue/menu';

const home = ref({ icon: 'pi pi-home', url: '/' });
const breadcrumbItems = ref([
  { label: 'Projekt1', url: '#' },
  { label: 'Gruppe1', icon: 'pi pi-table', url: '#' }
]);

const menu = ref();
const menuItems = ref([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
]);

const toggle = (event) => {
  menu.value.toggle(event);
};
</script>