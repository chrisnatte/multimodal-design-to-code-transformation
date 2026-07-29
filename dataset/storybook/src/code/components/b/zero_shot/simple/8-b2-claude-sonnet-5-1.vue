<template>
  <div class="flex flex-col p-6 bg-white">
    <div class="flex items-end gap-3">
      <div class="flex flex-col gap-1">
        <label for="search" class="text-sm font-normal">Suche</label>
        <InputText
          id="search"
          v-model="searchValue"
          placeholder="Nach Namen suchen"
          variant="filled"
        />
      </div>
      <Button icon="pi pi-search" rounded aria-label="Submit" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const searchValue = ref('');
</script>