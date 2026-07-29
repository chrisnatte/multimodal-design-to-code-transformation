<template>
  <div class="flex flex-col gap-2 p-4 font-sans">
    <label for="searchInput" class="text-slate-700 text-sm">Suche</label>
    <div class="flex items-center gap-3">
      <IconField iconPosition="left">
        <InputIcon class="pi pi-search text-slate-400" />
        <InputText
          id="searchInput"
          v-model="searchQuery"
          placeholder="Nach Namen suchen"
          class="w-64"
        />
      </IconField>
      <Button icon="pi pi-check" severity="success" aria-label="Bestätigen" />
    </div>
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