<template>
  <div class="flex flex-col gap-2 p-6">
    <label for="search" class="text-sm text-surface-700">Suche</label>
    <div class="flex items-center gap-3">
      <InputText
        id="search"
        v-model="searchQuery"
        placeholder="Nach Namen suchen"
        class="w-56"
      >
        <template #prefix>
          <i class="pi pi-search text-surface-400" />
        </template>
      </InputText>
      <Button
        icon="pi pi-check"
        severity="success"
        aria-label="Suche bestätigen"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const searchQuery = ref('')
</script>