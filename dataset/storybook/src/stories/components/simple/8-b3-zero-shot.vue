<template>
  <div class="flex items-end gap-3">
    <div class="flex flex-col gap-1">
      <span class="text-sm">Suche</span>
      <div class="flex items-center gap-2.5">
        <span class="pi pi-search text-surface-500"></span>
        <InputText
          v-model="form.search"
          type="text"
          placeholder="Nach Namen suchen"
          variant="filled"
          class="w-64"
        />
      </div>
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