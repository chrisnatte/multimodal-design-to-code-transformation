<template>
  <div class="flex w-[315px] flex-col gap-2 p-6">
    <label for="search-input" class="text-sm text-surface-700">Suche</label>
    <div class="flex items-center gap-3">
      <IconField class="w-[216px]">
        <InputIcon class="pi pi-search" />
        <InputText
          id="search-input"
          v-model="searchQuery"
          placeholder="Nach Namen suchen"
          class="w-full"
        />
      </IconField>
      <Button icon="pi pi-check" severity="success" aria-label="Suche bestätigen" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'

const searchQuery = ref('')
</script>