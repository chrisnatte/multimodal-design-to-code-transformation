<template>
  <div class="flex flex-col gap-2 p-4">
    <label class="text-sm font-medium text-gray-700">Suche</label>
    <div class="flex flex-row gap-2 items-center">
      <div class="relative flex-1">
        <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
        <InputText
          v-model="searchQuery"
          placeholder="Nach Namen suchen"
          class="w-full pl-10"
        />
      </div>
      <Button icon="pi pi-check" severity="success" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const searchQuery = ref('');
</script>