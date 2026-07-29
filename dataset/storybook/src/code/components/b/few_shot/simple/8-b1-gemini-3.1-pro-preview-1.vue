<template>
  <div class="flex flex-col bg-white p-6">
    <div class="flex items-end gap-3">
      <div class="flex flex-col gap-2">
        <label for="search-input" class="text-sm text-surface-700">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText
            id="search-input"
            v-model="searchQuery"
            placeholder="Nach Namen suchen"
            variant="filled"
          />
        </IconField>
      </div>
      <Button icon="pi pi-check" rounded severity="primary" aria-label="Submit" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import InputText from 'primevue/inputtext'
  import IconField from 'primevue/iconfield'
  import InputIcon from 'primevue/inputicon'
  import Button from 'primevue/button'

  const searchQuery = ref('')
</script>