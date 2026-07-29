<template>
  <div class="flex w-fit flex-col p-6">
    <div class="flex items-end gap-3">
      <div class="flex flex-col gap-1">
        <label for="search-input" class="text-sm">Suche</label>
        <InputText
          id="search-input"
          v-model="search"
          placeholder="Nach Namen suchen"
          variant="filled"
          class="!pl-8"
        >
          <template #default>
            <i class="pi pi-search" />
          </template>
        </InputText>
      </div>
      <Button icon="pi pi-search" severity="primary" rounded aria-label="Submit" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Button from 'primevue/button'
  import InputText from 'primevue/inputtext'

  const search = ref('')
</script>