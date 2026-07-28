<template>
  <div class="flex items-end gap-3">
    <div class="flex flex-col gap-[7px]">
      <label for="search" class="text-sm font-normal text-surface-700 dark:text-surface-300">Suche</label>
      <IconField>
        <InputIcon class="pi pi-search text-surface-400 dark:text-surface-500" />
        <InputText
          id="search"
          v-model="searchValue"
          placeholder="Nach Namen suchen"
          variant="filled"
          class="w-[216px]"
        />
      </IconField>
    </div>
    <Button icon="pi pi-check" severity="success" aria-label="Submit" />
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