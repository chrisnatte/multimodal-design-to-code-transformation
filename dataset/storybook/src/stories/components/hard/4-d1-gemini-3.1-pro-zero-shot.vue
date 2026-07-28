<template>
  <div class="bg-white relative">
    <div class="flex flex-col w-[600px]">
      <!-- DataTable Header -->
      <div class="flex border-b border-surface-200">
        <div class="w-[224px] py-2.5 px-3.5 flex items-center">
          <span class="font-semibold text-sm font-sans text-surface-700">Projekt</span>
        </div>
        <div class="w-[160px] py-2.5 px-3.5 flex items-center">
          <span class="font-semibold text-sm font-sans text-surface-700">Status</span>
        </div>
        <div class="w-[124px] py-2.5 px-3.5 flex items-center">
          <span class="font-semibold text-sm font-sans text-surface-700">Fällig</span>
        </div>
        <div class="w-[92px] py-2.5 px-3.5 flex items-center">
          <span class="font-semibold text-sm font-sans text-surface-700">Aktionen</span>
        </div>
      </div>

      <!-- DataTable Body -->
      <div class="flex flex-col">
        <!-- Row 1 -->
        <div class="flex border-b border-surface-200 h-[50px]">
          <div class="w-[224px] px-3.5 py-2.5 flex items-center">
            <span class="text-sm font-sans text-surface-700">Webseite Relaunch</span>
          </div>
          <div class="w-[160px] px-3.5 py-2.5 flex items-center">
            <Tag severity="success" value="Aktiv" />
          </div>
          <div class="w-[124px] px-3.5 py-2.5 flex items-center">
            <span class="text-sm font-sans text-surface-700">15.04.2026</span>
          </div>
          <div class="w-[92px] px-3.5 py-2.5 flex items-center">
             <Button icon="pi pi-ellipsis-h" text rounded />
          </div>
        </div>

        <!-- Row 2 -->
        <div class="flex border-b border-surface-200 h-[50px]">
          <div class="w-[224px] px-3.5 py-2.5 flex items-center">
            <span class="text-sm font-sans text-surface-700">Mobile App</span>
          </div>
          <div class="w-[160px] px-3.5 py-2.5 flex items-center">
            <Tag severity="warn" value="In Prüfung" />
          </div>
          <div class="w-[124px] px-3.5 py-2.5 flex items-center">
            <span class="text-sm font-sans text-surface-700">24.04.2026</span>
          </div>
          <div class="w-[92px] px-3.5 py-2.5 flex items-center relative">
             <Button icon="pi pi-ellipsis-h" text rounded @click="toggleMenu" aria-haspopup="true" aria-controls="overlay_menu" class="bg-surface-100" />
             
             <!-- Context Menu Popover simulating Figma absolute positioning -->
             <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" class="mt-2" />
          </div>
        </div>

        <!-- Row 3 -->
        <div class="flex border-b border-surface-200 h-[50px]">
          <div class="w-[224px] px-3.5 py-2.5 flex items-center">
            <span class="text-sm font-sans text-surface-700">Marketing Kampagne</span>
          </div>
          <div class="w-[160px] px-3.5 py-2.5 flex items-center">
             <Tag severity="secondary" value="Abgeschlossen" />
          </div>
          <div class="w-[124px] px-3.5 py-2.5 flex items-center">
            <span class="text-sm font-sans text-surface-700">09.05.2026</span>
          </div>
          <div class="w-[92px] px-3.5 py-2.5 flex items-center">
             <Button icon="pi pi-ellipsis-h" text rounded />
          </div>
        </div>

        <!-- Row 4 -->
        <div class="flex border-b border-surface-200 h-[50px]">
          <div class="w-[224px] px-3.5 py-2.5 flex items-center">
            <span class="text-sm font-sans text-surface-700">API Migration</span>
          </div>
          <div class="w-[160px] px-3.5 py-2.5 flex items-center">
             <Tag severity="danger" value="Gestoppt" />
          </div>
          <div class="w-[124px] px-3.5 py-2.5 flex items-center">
            <span class="text-sm font-sans text-surface-700">12.06.2026</span>
          </div>
          <div class="w-[92px] px-3.5 py-2.5 flex items-center">
             <Button icon="pi pi-ellipsis-h" text rounded />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import Menu from 'primevue/menu';

const menu = ref();
const menuItems = ref([
    {
        label: 'Bearbeiten',
        icon: 'pi pi-file-edit'
    },
    {
        label: 'Duplizieren',
        icon: 'pi pi-clone'
    },
    {
        label: 'Löschen',
        icon: 'pi pi-trash'
    }
]);

const toggleMenu = (event) => {
    menu.value.toggle(event);
};
</script>