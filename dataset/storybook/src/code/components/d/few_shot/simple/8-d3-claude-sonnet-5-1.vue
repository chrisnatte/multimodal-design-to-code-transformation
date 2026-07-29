<template>
  <div class="flex flex-col gap-2 p-6">
    <label for="search-input" class="text-sm">Suche</label>
    <div class="flex items-end gap-3">
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText v-model="search" input-id="search-input" placeholder="Nach Namen suchen" variant="filled" />
      </IconField>
      <Button icon="pi pi-check" severity="primary" rounded />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import InputText from 'primevue/inputtext'
  import IconField from 'primevue/iconfield'
  import InputIcon from 'primevue/inputicon'
  import Button from 'primevue/button'

  const search = ref('')
</script>