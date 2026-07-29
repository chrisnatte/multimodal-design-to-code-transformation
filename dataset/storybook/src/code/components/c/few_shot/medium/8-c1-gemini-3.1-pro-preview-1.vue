<template>
  <div class="w-64 h-[600px] bg-slate-100 flex flex-col p-6 font-sans">
    <h1 class="text-2xl text-slate-700 text-center mb-8 mt-2">Emails</h1>

    <div class="flex flex-col gap-2 flex-grow">
      <Button
        v-for="item in menuItems"
        :key="item.label"
        :icon="item.icon"
        :label="item.label"
        text
        @click="activeItem = item.label"
        :class="[
          'w-full justify-start font-medium rounded-md px-4 py-3 transition-colors',
          activeItem === item.label
            ? 'bg-white text-slate-700 hover:bg-white/90'
            : 'text-slate-500 hover:bg-slate-200/50'
        ]"
      />
    </div>

    <div class="mt-auto">
      <Divider class="border-slate-300 mb-6" />
      <div class="flex items-center gap-4 px-2">
        <Avatar label="B" shape="circle" size="large" class="bg-slate-500 text-white" />
        <span class="text-slate-700 font-medium">Benutzername</span>
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

const menuItems = [
  { label: 'Postfach', icon: 'pi pi-inbox' },
  { label: 'Ordner', icon: 'pi pi-folder' },
  { label: 'Konto', icon: 'pi pi-user' }
];
</script>