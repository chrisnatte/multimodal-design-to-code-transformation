<template>
  <div class="inline-flex items-end justify-end gap-3">
    <div class="flex flex-col gap-1.5 w-[216px]">
      <label for="searchInput" class="text-sm">Suche</label>
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText
          id="searchInput"
          v-model="searchValue"
          placeholder="Nach Namen suchen"
          variant="filled"
        />
      </IconField>
    </div>
    <Button
      icon="pi pi-check"
      rounded
      severity="success"
      aria-label="Submit"
      class="shrink-0 w-9 h-9"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

const searchValue = ref('')
</script>