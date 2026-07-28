<template>
  <div class="flex flex-row items-end gap-3">
    <div class="flex flex-col gap-2">
      <label for="search-input" class="text-sm font-normal text-slate-700 font-sans">
        Suche
      </label>
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText 
          id="search-input" 
          v-model="searchQuery" 
          placeholder="Nach Namen suchen" 
          variant="filled" 
        />
      </IconField>
    </div>
    <Button 
      icon="pi pi-check" 
      rounded 
      aria-label="Submit search"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

const searchQuery = ref('');
</script>