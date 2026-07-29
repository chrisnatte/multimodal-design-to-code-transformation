<template>
  <div class="flex flex-col gap-2 p-6">
    <label for="search-input" class="text-sm text-black">Suche</label>
    <div class="flex items-end gap-3">
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText v-model="search" input-id="search-input" placeholder="Nach Namen suchen" />
      </IconField>
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