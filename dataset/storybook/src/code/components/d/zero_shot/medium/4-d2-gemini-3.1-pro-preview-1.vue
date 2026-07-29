<template>
  <div class="p-6 bg-white flex flex-col">
    <div class="flex items-center p-3.5 bg-white rounded-md">
      <Breadcrumb :home="home" :model="items" class="bg-transparent p-0 border-none">
        <template #item="{ item, props }">
          <template v-if="item.isMenu">
            <Button
              type="button"
              :label="item.label"
              severity="secondary"
              @click="toggleMenu"
              aria-haspopup="true"
              aria-controls="overlay_menu"
              class="py-1.5 px-3 text-sm font-medium"
            />
          </template>
          <a v-else :href="item.url" v-bind="props.action" class="flex items-center gap-1.5 text-surface-600 hover:text-surface-900 transition-colors">
            <span v-if="item.icon" :class="item.icon" class="text-sm" />
            <span v-if="item.label" class="text-sm">{{ item.label }}</span>
          </a>
        </template>
      </Breadcrumb>
      
      <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import Menu from 'primevue/menu';

const menu = ref(null);

const home = ref({
  icon: 'pi pi-home'
});

const items = ref([
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-table' },
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