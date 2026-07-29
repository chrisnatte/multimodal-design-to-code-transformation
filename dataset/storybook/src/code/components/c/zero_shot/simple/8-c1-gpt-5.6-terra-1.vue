<template>
  <div class="flex items-end gap-3 p-6">
    <div class="flex flex-col gap-2">
      <label for="search" class="text-sm text-slate-700">Suche</label>
      <InputText
        id="search"
        v-model="searchQuery"
        placeholder="Nach Namen suchen"
        class="w-54"
      >
        <template #prepend>
          <i class="pi pi-search text-slate-400"></i>
        </template>
      </InputText>
    </div>
    <Button
      icon="pi pi-check"
      severity="success"
      aria-label="Suche bestätigen"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const searchQuery = ref('')
</script>