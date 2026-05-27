<template>
  <div class="flex items-end gap-3">
    <div class="flex flex-col gap-1">
      <span class="text-sm font-normal">Suche</span>
      <div class="flex items-center gap-2.5 px-2.5 py-2 rounded-md bg-slate-100">
        <i class="pi pi-search text-slate-500"></i>
        <InputText
          v-model="state.search"
          placeholder="Nach Namen suchen"
          variant="filled"
          class="w-full"
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