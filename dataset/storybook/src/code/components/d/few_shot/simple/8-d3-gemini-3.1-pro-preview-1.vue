<template>
  <div class="p-6">
    <div class="flex items-end gap-3">
      <div class="flex flex-col gap-2">
        <label for="search" class="text-sm text-surface-700 dark:text-surface-0">Suche</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-search" />
          <InputText
            id="search"
            v-model="searchQuery"
            placeholder="Nach Namen suchen"
            variant="filled"
          />
        </IconField>
      </div>
      <Button icon="pi pi-check" severity="primary" aria-label="Submit" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import InputText from 'primevue/inputtext'
  import Button from 'primevue/button'
  import IconField from 'primevue/iconfield'
  import InputIcon from 'primevue/inputicon'

  const searchQuery = ref('')
</script>