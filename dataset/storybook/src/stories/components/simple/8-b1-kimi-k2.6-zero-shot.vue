<template>
  <div class="inline-flex flex-row justify-end items-end gap-3">
    <div class="flex flex-col gap-1.5 w-56">
      <label for="search-input">Suche</label>
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText
          id="search-input"
          v-model="searchValue"
          variant="filled"
          placeholder="Nach Namen suchen"
          class="w-full"
        />
      </IconField>
    </div>
    <Button icon="pi pi-check" severity="primary" rounded />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

const searchValue = ref('')
</script>