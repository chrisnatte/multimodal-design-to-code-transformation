<template>
  <div class="flex flex-col items-center justify-between w-60 h-[512px] bg-slate-200 p-6">
    <div class="flex flex-col items-center gap-6 w-full">
      <span class="text-2xl font-normal text-slate-700">Emails</span>
      <div class="flex flex-col gap-4 w-full">
        <Button
          v-for="item in menuItems"
          :key="item.label"
          :label="item.label"
          :icon="item.icon"
          severity="secondary"
          outlined
          fluid
          class="!justify-start"
          :class="activeItem === item.label ? '!bg-slate-100 !text-slate-700 !border-transparent' : '!text-slate-500 !border-transparent'"
          @click="activeItem = item.label"
        />
      </div>
    </div>
    <div class="flex flex-col items-center w-full">
      <Divider class="w-full" />
      <div class="flex items-center gap-4 pt-4">
        <Avatar label="B" shape="circle" size="large" class="!bg-slate-500 !text-white" />
        <span class="text-base font-normal text-slate-700">Benutzername</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';

const activeItem = ref('Postfach');

const menuItems = ref([
  { label: 'Postfach', icon: 'pi pi-inbox' },
  { label: 'Ordner', icon: 'pi pi-folder' },
  { label: 'Konto', icon: 'pi pi-user' }
]);
</script>