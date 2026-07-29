<template>
  <div class="flex flex-col gap-2 p-4">
    <label class="text-sm text-gray-700">Suche</label>
    <div class="flex gap-2">
      <IconField iconPosition="left" class="flex-1">
        <InputIcon class="pi pi-search" />
        <InputText v-model="searchTerm" placeholder="Nach Namen suchen" class="w-full" />
      </IconField>
      <Button icon="pi pi-check" severity="success" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

const searchTerm = ref('')
</script>