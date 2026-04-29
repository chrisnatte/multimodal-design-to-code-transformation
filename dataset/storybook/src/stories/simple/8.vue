<template>
  <div class="flex items-end gap-3">
    <div class="flex flex-col gap-2">
      <label for="search-input" class="text-sm">Suche</label>
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText inputId="search-input" variant="filled" placeholder="Nach Name suchen" />
      </IconField>
    </div>
    <Button icon="pi pi-check" severity="primary" rounded />
  </div>
</template>

<script setup lang="ts">
  import Button from 'primevue/button'
  import InputText from 'primevue/inputtext'
  import IconField from 'primevue/iconfield'
  import InputIcon from 'primevue/inputicon'
</script>
