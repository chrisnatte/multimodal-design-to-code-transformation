<template>
  <div class="flex flex-col gap-2">
    <label class="text-sm text-gray-700">Suche</label>
    <div class="flex items-center gap-2">
      <IconField iconPosition="left">
        <InputIcon class="pi pi-search" />
        <InputText v-model="searchQuery" placeholder="Nach Namen suchen" />
      </IconField>
      <Button icon="pi pi-check" severity="success" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import Button from 'primevue/button'

const searchQuery = ref('')
</script>