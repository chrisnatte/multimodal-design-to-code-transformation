<template>
  <div class="flex flex-col gap-2 p-4">
    <label for="search" class="text-sm text-gray-700">Suche</label>
    <div class="flex gap-2">
      <IconField class="flex-1">
        <InputIcon class="pi pi-search" />
        <InputText id="search" v-model="searchValue" placeholder="Nach Namen suchen" class="w-full" />
      </IconField>
      <Button icon="pi pi-check" severity="success" />
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