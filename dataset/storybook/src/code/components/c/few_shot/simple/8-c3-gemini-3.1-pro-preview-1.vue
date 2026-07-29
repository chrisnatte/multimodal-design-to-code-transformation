<template>
  <div class="flex flex-col gap-2 p-4">
    <label for="search-input" class="text-slate-700 text-sm font-medium">Suche</label>
    <div class="flex items-center gap-3">
      <IconField>
        <InputIcon class="pi pi-search text-slate-400" />
        <InputText
          id="search-input"
          v-model="searchQuery"
          placeholder="Nach Namen suchen"
          class="w-64"
        />
      </IconField>
      <Button icon="pi pi-check" severity="success" aria-label="Suchen" />
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