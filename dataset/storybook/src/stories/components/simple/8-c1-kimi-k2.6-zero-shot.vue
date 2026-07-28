<template>
  <div class="flex flex-col gap-2 p-4">
    <label class="text-sm font-medium text-gray-700">Suche</label>
    <div class="flex items-center gap-2">
      <IconField class="w-full">
        <InputIcon class="pi pi-search text-gray-400" />
        <InputText
          v-model="searchQuery"
          placeholder="Nach Namen suchen"
          class="w-full"
        />
      </IconField>
      <Button
        icon="pi pi-check"
        severity="success"
        class="shrink-0"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

const searchQuery = ref('')
</script>