<template>
  <div class="p-6">
    <div class="flex flex-row gap-3 items-end">
      <div class="flex flex-col gap-2">
        <label for="search" class="text-sm text-surface-700 dark:text-surface-300">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText 
            id="search" 
            v-model="searchQuery" 
            placeholder="Nach Namen suchen" 
            variant="filled" 
          />
        </IconField>
      </div>
      <Button 
        icon="pi pi-check" 
        severity="success" 
        aria-label="Submit" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

const searchQuery = ref('');
</script>