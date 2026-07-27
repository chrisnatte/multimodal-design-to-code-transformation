<template>
  <div class="flex flex-row gap-1">
    <div class="flex flex-row items-center gap-[7px] p-[14px] rounded-md bg-white">
      <Breadcrumb 
        :home="breadcrumbHome" 
        :model="breadcrumbItems" 
        class="!p-0 !border-none !bg-transparent"
      >
        <template #item="{ item }">
          <a class="cursor-pointer flex items-center gap-2 text-surface-700 hover:text-surface-900">
            <span v-if="item.icon" :class="item.icon"></span>
            <span v-if="item.label" class="text-sm">{{ item.label }}</span>
          </a>
        </template>
      </Breadcrumb>

      <div class="relative">
        <Button 
          label="Dashboard anzeigen" 
          severity="secondary" 
          @click="toggleMenu" 
          class="!text-sm !font-medium"
        />
        <Menu 
          ref="menuRef" 
          :model="menuItems" 
          :popup="true" 
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import Menu from 'primevue/menu';

const breadcrumbHome = ref({
  icon: 'pi pi-home'
});

const breadcrumbItems = ref([
  { label: 'Projekt1' },
  { label: 'Gruppe1', icon: 'pi pi-table' }
]);

const menuRef = ref(null);

const menuItems = ref([
  { label: 'Dashboard 1' },
  { label: 'Dashboard 2' }
]);

const toggleMenu = (event) => {
  menuRef.value.toggle(event);
};
</script>