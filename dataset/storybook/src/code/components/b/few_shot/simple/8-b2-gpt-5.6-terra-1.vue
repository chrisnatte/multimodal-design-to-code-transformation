<template>
  <div class="flex w-[311px] flex-col bg-white p-6">
    <div class="flex items-end gap-3">
      <div class="flex flex-1 flex-col gap-2">
        <label for="search-input" class="text-sm">Suche</label>
        <InputText
          id="search-input"
          v-model="searchQuery"
          placeholder="Nach Namen suchen"
          variant="filled"
          fluid
        />
      </div>
      <Button
        icon="pi pi-check"
        rounded
        aria-label="Suche absenden"
        @click="submitSearch"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const searchQuery = ref('')

function submitSearch() {
  return searchQuery.value
}
</script>