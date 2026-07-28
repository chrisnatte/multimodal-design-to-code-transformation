<template>
  <div class="flex items-end gap-3">
    <div class="flex flex-col gap-1">
      <label for="search" class="text-sm text-gray-700">Suche</label>
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText
          id="search"
          v-model="searchValue"
          placeholder="Nach Namen suchen"
          class="w-full"
        />
      </IconField>
    </div>
    <Button icon="pi pi-check" rounded severity="primary" />
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