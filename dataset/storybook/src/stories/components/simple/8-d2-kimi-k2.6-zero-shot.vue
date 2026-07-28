<template>
  <div class="flex justify-end items-end gap-3">
    <div class="flex flex-col gap-1">
      <label for="search-input" class="text-sm text-gray-700">Suche</label>
      <div class="relative">
        <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none"></i>
        <InputText
          id="search-input"
          v-model="searchQuery"
          placeholder="Nach Namen suchen"
          variant="filled"
          class="pl-10 w-[216px]"
        />
      </div>
    </div>
    <Button
      icon="pi pi-check"
      severity="success"
      rounded
      aria-label="Suchen"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const searchQuery = ref('');
</script>