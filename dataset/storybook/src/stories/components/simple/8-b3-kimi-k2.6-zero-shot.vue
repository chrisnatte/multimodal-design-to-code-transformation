<template>
  <div class="flex flex-row gap-3 justify-end items-end">
    <div class="flex flex-col gap-2">
      <label class="text-sm font-normal text-gray-700">Suche</label>
      <div class="relative flex items-center">
        <svg class="absolute left-3 w-3.5 h-3.5 text-gray-500 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <InputText v-model="searchValue" placeholder="Nach Namen suchen" variant="filled" class="pl-9 w-54" />
      </div>
    </div>
    <Button icon="pi pi-check" rounded severity="primary" size="small" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const searchValue = ref('');
</script>