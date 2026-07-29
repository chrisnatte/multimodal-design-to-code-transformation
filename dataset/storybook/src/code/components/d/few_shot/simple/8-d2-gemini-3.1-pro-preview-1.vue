<template>
  <div class="flex w-fit items-end gap-3 bg-white p-6">
    <div class="flex flex-col gap-2">
      <label for="search" class="text-sm text-slate-700">Suche</label>
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText
          id="search"
          v-model="searchQuery"
          placeholder="Nach Namen suchen"
          variant="filled"
          class="w-[216px]"
        />
      </IconField>
    </div>
    <Button icon="pi pi-check" severity="primary" class="h-[35px] w-[35px] !p-0" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Button from 'primevue/button'
  import InputText from 'primevue/inputtext'
  import IconField from 'primevue/iconfield'
  import InputIcon from 'primevue/inputicon'

  const searchQuery = ref('')
</script>