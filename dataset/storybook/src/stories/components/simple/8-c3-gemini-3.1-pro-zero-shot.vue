<template>
  <div class="flex flex-col gap-1.5 p-4 font-sans">
    <label for="search-input" class="text-slate-700 text-sm">Suche</label>
    <div class="flex items-center gap-3">
      <div class="relative w-72">
        <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
        <InputText
          id="search-input"
          v-model="searchQuery"
          placeholder="Nach Namen suchen"
          class="w-full pl-9 py-2"
        />
      </div>
      <Button
        icon="pi pi-check"
        severity="success"
        class="w-10 h-10 p-0 flex items-center justify-center"
        aria-label="Submit search"
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