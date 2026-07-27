<template>
  <div class="flex flex-row gap-3 items-end">
    <div class="flex flex-col gap-2">
      <label for="searchInput" class="text-[14px] font-normal font-sans text-surface-700 dark:text-surface-0">
        Suche
      </label>
      <div class="relative flex items-center">
        <i class="pi pi-search absolute left-3 text-surface-500 dark:text-surface-400 z-10"></i>
        <InputText
          id="searchInput"
          v-model="searchQuery"
          variant="filled"
          placeholder="Nach Namen suchen"
          class="w-[216px] pl-9"
        />
      </div>
    </div>
    <Button
      icon="pi pi-check"
      rounded
      aria-label="Submit"
      class="w-[35px] h-[35px] !p-0 flex items-center justify-center shrink-0"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

const searchQuery = ref('')
</script>