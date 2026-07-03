<template>
  <div class="flex items-end gap-3">
    <div class="flex flex-col gap-2">
      <label for="suche" class="text-sm">Suche</label>
      <div class="relative">
        <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-surface-500"></i>
        <InputText
          id="suche"
          v-model="state.search"
          type="text"
          variant="filled"
          placeholder="Nach Namen suchen"
          class="pl-10"
        />
      </div>
    </div>
    <Button
      icon="pi pi-check"
      rounded
      aria-label="Submit"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const state = reactive({
  search: ''
})
</script>