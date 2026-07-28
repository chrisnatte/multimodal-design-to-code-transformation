<template>
  <div class="flex flex-col h-screen w-72 bg-slate-200 p-6">
    <h1 class="text-2xl text-slate-700 text-center mb-8">Emails</h1>
    
    <div class="flex flex-col gap-1">
      <Button
        v-for="item in navItems"
        :key="item.label"
        :label="item.label"
        :icon="item.icon"
        text
        :class="[
          'w-full justify-start !rounded-lg px-4 py-3',
          activeItem === item.label ? '!bg-slate-50 text-slate-700' : 'text-slate-500'
        ]"
        @click="activeItem = item.label"
      />
    </div>
    
    <div class="mt-auto">
      <Divider />
      <div class="flex items-center gap-3 px-2 py-3">
        <Avatar label="B" shape="circle" class="bg-slate-500 text-white" />
        <span class="text-slate-700">Benutzername</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
import Divider from 'primevue/divider';

const activeItem = ref('Postfach');

const navItems = [
  { label: 'Postfach', icon: 'pi pi-inbox' },
  { label: 'Ordner', icon: 'pi pi-folder' },
  { label: 'Konto', icon: 'pi pi-user' }
];
</script>