<template>
  <div class="inline-flex items-center gap-2 p-3.5 bg-white rounded-md">
    <Breadcrumb :home="home" :model="breadcrumbItems" class="bg-transparent border-none p-0">
      <template #item="{ item }">
        <a class="cursor-pointer flex items-center gap-1 text-sm text-slate-600 hover:text-slate-800 no-underline font-normal">
          <span v-if="item.icon" :class="item.icon"></span>
          <span>{{ item.label }}</span>
        </a>
      </template>
      <template #separator>
        <i class="pi pi-chevron-right text-xs text-slate-400 mx-1"></i>
      </template>
    </Breadcrumb>

    <i class="pi pi-chevron-right text-xs text-slate-400"></i>

    <div class="flex flex-col items-start">
      <Button
        ref="dashboardBtn"
        label="Dashboard anzeigen"
        severity="secondary"
        class="text-sm font-medium"
        @click="toggleMenu"
      />
      <Menu ref="menuRef" :model="menuItems" popup />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import Menu from 'primevue/menu';

const home = ref({
  icon: 'pi pi-home'
});

const breadcrumbItems = ref([
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-table' }
]);

const menuItems = ref([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
]);

const menuRef = ref();
const dashboardBtn = ref();

const toggleMenu = (event) => {
  menuRef.value.toggle(event);
};

onMounted(() => {
  if (dashboardBtn.value && menuRef.value) {
    menuRef.value.toggle({ currentTarget: dashboardBtn.value.$el });
  }
});
</script>