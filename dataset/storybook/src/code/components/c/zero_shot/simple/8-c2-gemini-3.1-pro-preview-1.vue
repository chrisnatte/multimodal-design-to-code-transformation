<template>
  <div class="flex flex-col gap-2 p-4">
    <label for="searchInput" class="text-surface-700 dark:text-surface-300 font-medium">
      Suche
    </label>
    <div class="flex items-center gap-3">
      <div class="relative flex-1">
        <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-surface-400 dark:text-surface-500"></i>
        <InputText 
          id="searchInput"
          v-model="searchQuery" 
          placeholder="Nach Namen suchen" 
          class="pl-10 w-full"
        />
      </div>
      <Button 
        icon="pi pi-check" 
        severity="success" 
        aria-label="Bestätigen"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const searchQuery = ref('');
</script>