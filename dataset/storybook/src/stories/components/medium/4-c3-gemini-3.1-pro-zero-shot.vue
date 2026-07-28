<template>
  <div class="p-8 flex items-center font-sans">
    <Breadcrumb :home="home" :model="items" class="bg-transparent border-none p-0">
      <template #item="{ item }">
        <template v-if="item.isMenu">
          <Button
            type="button"
            :label="item.label"
            @click="toggle"
            class="bg-slate-100 hover:bg-slate-200 text-slate-700 border-none px-3 py-1.5 text-sm font-medium rounded-md transition-colors shadow-none"
          />
          <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" class="mt-1" />
        </template>
        <template v-else>
          <a class="cursor-pointer flex items-center gap-1.5 text-slate-500 hover:text-slate-700 transition-colors text-sm font-medium">
            <span v-if="item.icon" :class="item.icon"></span>
            <span v-if="item.label">{{ item.label }}</span>
          </a>
        </template>
      </template>
      <template #separator>
        <i class="pi pi-angle-right text-slate-400 text-xs mx-1"></i>
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
  icon: 'pi pi-home'
});

const items = ref([
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-th-large' },
  { label: 'Dashboard anzeigen', isMenu: true }
]);

const menuItems = ref([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
]);

const toggle = (event) => {
  menu.value.toggle(event);
};
</script>