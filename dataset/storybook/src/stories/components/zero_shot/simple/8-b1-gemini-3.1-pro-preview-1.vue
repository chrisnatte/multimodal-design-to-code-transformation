<template>
  <div class="flex flex-col p-6 bg-white">
    <div class="flex flex-row gap-3 items-end">
      <div class="flex flex-col gap-2">
        <label for="searchInput" class="text-sm font-normal font-sans text-surface-900">Suche</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-search" />
          <InputText 
            id="searchInput" 
            v-model="searchValue" 
            placeholder="Nach Namen suchen" 
            variant="filled" 
          />
        </IconField>
      </div>
      <Button icon="pi pi-check" rounded aria-label="Submit" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Button from 'primevue/button';

const searchValue = ref('');
</script>