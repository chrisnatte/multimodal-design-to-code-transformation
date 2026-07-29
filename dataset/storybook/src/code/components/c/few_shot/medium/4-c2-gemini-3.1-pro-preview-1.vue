<template>
  <div class="p-8 flex items-start">
    <Breadcrumb :home="home" :model="items" :pt="{ root: 'bg-transparent p-0 border-none' }">
      <template #item="{ item, props }">
        <a v-if="!item.isMenuTrigger" v-bind="props.action" class="flex items-center gap-2 text-slate-500 hover:text-slate-700 cursor-pointer font-medium">
          <span v-if="item.icon" :class="item.icon"></span>
          <span v-if="item.label">{{ item.label }}</span>
        </a>
        <Button
          v-else
          type="button"
          :label="item.label"
          @click="toggleMenu"
          aria-haspopup="true"
          aria-controls="dashboard_menu"
          class="bg-slate-100 text-slate-700 border-none hover:bg-slate-200 px-3 py-1.5 rounded-md font-medium shadow-none"
        />
      </template>
      <template #separator>
        <i class="pi pi-angle-right text-slate-400 text-sm mx-2"></i>
      </template>
    </Breadcrumb>
    <Menu ref="menu" id="dashboard_menu" :model="menuItems" :popup="true" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import Menu from 'primevue/menu';

const home = ref({ icon: 'pi pi-home' });
const items = ref([
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-th-large' },
  { label: 'Dashboard anzeigen', isMenuTrigger: true }
]);

const menu = ref();
const menuItems = ref([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
]);

const toggleMenu = (event: Event) => {
  menu.value?.toggle(event);
};
</script>