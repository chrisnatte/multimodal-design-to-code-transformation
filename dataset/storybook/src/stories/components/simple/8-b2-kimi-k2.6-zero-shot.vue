<template>
  <div class="flex flex-row justify-end items-end gap-3">
    <div class="flex flex-col gap-2">
      <label for="search" class="text-sm font-normal">Suche</label>
      <div class="relative">
        <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"></i>
        <InputText id="search" v-model="searchValue" placeholder="Nach Namen suchen" variant="filled" class="pl-9" />
      </div>
    </div>
    <Button icon="pi pi-check" rounded aria-label="Submit" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const searchValue = ref('');
</script>