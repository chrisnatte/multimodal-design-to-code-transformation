<template>
  <div class="bg-gray-100 p-6 w-full max-w-sm">
    <div class="flex flex-col gap-3">
      <label for="search" class="text-slate-800 text-2xl font-normal">Suche</label>
      <div class="flex items-center gap-3">
        <IconField class="flex-1">
          <InputIcon class="pi pi-search" />
          <InputText
            id="search"
            v-model="form.search"
            placeholder="Nach Namen suchen"
            class="w-full"
          />
        </IconField>
        <Button
          icon="pi pi-check"
          rounded
          severity="success"
          aria-label="Bestätigen"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

const form = reactive({
  search: ''
})
</script>