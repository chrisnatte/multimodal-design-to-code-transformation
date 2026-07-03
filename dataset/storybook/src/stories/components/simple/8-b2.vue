<template>
  <div class="flex items-end gap-3">
    <div class="flex flex-col gap-2">
      <label for="search-input" class="text-sm">Suche</label>
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText
          id="search-input"
          v-model="form.search"
          type="text"
          placeholder="Nach Namen suchen"
          variant="filled"
        />
      </span>
    </div>
    <Button icon="pi pi-check" rounded aria-label="Submit" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const form = reactive({
  search: ''
})
</script>