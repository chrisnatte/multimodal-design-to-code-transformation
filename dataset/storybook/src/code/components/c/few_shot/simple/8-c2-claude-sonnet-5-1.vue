<template>
  <div class="flex flex-col gap-2">
    <label for="search-input" class="text-sm">Suche</label>
    <div class="flex items-center gap-2">
      <IconField class="flex-1">
        <InputIcon class="pi pi-search" />
        <InputText id="search-input" v-model="search" placeholder="Nach Namen suchen" class="w-full" />
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

  const search = ref('')
</script>