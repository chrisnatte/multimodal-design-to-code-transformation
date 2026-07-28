<template>
  <div class="flex flex-row items-end gap-3">
    <div class="flex flex-col gap-2">
      <label for="search-input" class="text-sm font-normal text-surface-700 dark:text-surface-300">Suche</label>
      <IconField iconPosition="left">
        <InputIcon class="pi pi-search" />
        <InputText id="search-input" v-model="searchQuery" placeholder="Nach Namen suchen" class="w-56" />
      </IconField>
    </div>
    <Button icon="pi pi-check" rounded aria-label="Submit" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Button from 'primevue/button';

const searchQuery = ref('');
</script>