<template>
  <div class="w-[280px] h-[600px] bg-[#e8edf3] flex flex-col p-6 font-sans">
    <!-- Header -->
    <h1 class="text-[28px] text-[#3b4a5a] text-center mb-8 mt-2">Emails</h1>

    <!-- Menu Items -->
    <div class="flex flex-col gap-2 flex-grow">
      <div
        v-for="item in menuItems"
        :key="item.label"
        @click="activeItem = item.label"
        :class="[
          'flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer transition-colors',
          activeItem === item.label
            ? 'bg-white text-[#475569] shadow-sm'
            : 'text-[#6b7c93] hover:bg-white/40'
        ]"
      >
        <i :class="['pi', item.icon, 'text-lg']"></i>
        <span class="font-medium">{{ item.label }}</span>
      </div>
    </div>

    <!-- Footer -->
    <div class="mt-auto pt-6 border-t border-[#94a3b8]">
      <div class="flex items-center gap-4">
        <Avatar 
          label="B" 
          shape="circle" 
          class="bg-[#6b7c93] text-white text-xl font-normal" 
          size="large" 
          style="width: 3rem; height: 3rem;"
        />
        <span class="text-[#3b4a5a] font-medium text-[17px]">Benutzername</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';

const activeItem = ref('Postfach');

const menuItems = ref([
  { label: 'Postfach', icon: 'pi-inbox' },
  { label: 'Ordner', icon: 'pi-folder' },
  { label: 'Konto', icon: 'pi-user' }
]);
</script>