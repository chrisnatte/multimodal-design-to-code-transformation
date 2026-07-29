<template>
  <div class="flex w-[311px] flex-col bg-white p-6">
    <div class="flex items-end gap-3">
      <div class="flex w-[216px] flex-col gap-2">
        <label for="search-input" class="text-sm">Suche</label>
        <IconField icon-position="left">
          <InputIcon class="pi pi-search" />
          <InputText
            id="search-input"
            v-model="searchQuery"
            placeholder="Nach Namen suchen"
            variant="filled"
            class="!h-[33px] w-full"
          />
        </IconField>
      </div>
      <Button
        icon="pi pi-check"
        rounded
        aria-label="Suche bestätigen"
        class="!h-[35px] !w-[35px]"
      />
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