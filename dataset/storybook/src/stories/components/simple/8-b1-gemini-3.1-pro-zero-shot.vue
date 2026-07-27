<template>
  <div class="flex flex-row items-end gap-3">
    <div class="flex flex-col gap-2">
      <label class="font-sans text-sm font-normal text-surface-700 dark:text-surface-0">
        Suche
      </label>
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText 
          v-model="searchQuery" 
          placeholder="Nach Namen suchen" 
          variant="filled" 
        />
      </IconField>
    </div>
    <Button 
      icon="pi pi-check" 
      rounded 
      severity="primary" 
      aria-label="Submit"
    />
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