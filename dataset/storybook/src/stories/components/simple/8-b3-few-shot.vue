<template>
  <div class="flex items-end gap-3">
    <div class="flex flex-col gap-2">
      <span>Suche</span>
      <div class="relative">
        <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-surface-500"></i>
        <InputText
          v-model="form.search"
          type="text"
          placeholder="Nach Namen suchen"
          variant="filled"
          class="pl-10"
        />
      </div>
    </div>
    <Button icon="pi pi-check" rounded />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

const form = reactive({
  search: ''
})
</script>