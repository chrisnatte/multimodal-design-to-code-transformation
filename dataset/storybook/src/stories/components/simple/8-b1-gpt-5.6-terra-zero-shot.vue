<template>
  <div class="flex items-end gap-3">
    <div class="flex w-[216px] flex-col gap-[7px]">
      <label for="search" class="text-sm font-normal">
        Suche
      </label>

      <div class="relative">
        <i
          class="pi pi-search pointer-events-none absolute left-[11px] top-1/2 z-10 -translate-y-1/2 text-sm text-surface-500"
          aria-hidden="true"
        />
        <InputText
          id="search"
          v-model="searchQuery"
          placeholder="Nach Namen suchen"
          class="h-[35px] w-full !bg-surface-50 !py-[7px] !pl-9 !pr-[11px] text-sm"
        />
      </div>
    </div>

    <Button
      icon="pi pi-check"
      rounded
      aria-label="Submit"
      class="h-[35px] w-[35px] !p-0"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const searchQuery = ref('')
</script>