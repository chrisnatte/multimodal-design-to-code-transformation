<template>
  <div class="flex flex-col gap-1">
    <label for="search-input" class="text-sm">Suche</label>
    <div class="flex items-center gap-3">
      <InputText
        v-model="search"
        input-id="search-input"
        placeholder="Nach Namen suchen"
        class="w-[216px]"
      />
      <Button icon="pi pi-check" severity="success" aria-label="Suche bestätigen" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const search = ref('')
</script>