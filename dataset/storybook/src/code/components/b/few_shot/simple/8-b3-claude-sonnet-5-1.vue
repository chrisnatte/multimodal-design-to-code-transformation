<template>
  <div class="flex w-fit flex-col bg-white p-6">
    <div class="flex items-end gap-3">
      <div class="flex flex-col gap-2">
        <label for="search-input" class="text-sm">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText
            id="search-input"
            v-model="search"
            placeholder="Nach Namen suchen"
            variant="filled"
          />
        </IconField>
      </div>
      <Button icon="pi pi-check" severity="primary" rounded />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Button from 'primevue/button'
  import InputText from 'primevue/inputtext'
  import IconField from 'primevue/iconfield'
  import InputIcon from 'primevue/inputicon'

  const search = ref('')
</script>