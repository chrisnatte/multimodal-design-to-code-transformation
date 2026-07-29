<template>
  <div class="flex w-fit flex-col p-6">
    <div class="flex items-end gap-3">
      <div class="flex w-[216px] flex-col gap-2">
        <label for="search-input" class="text-sm">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText
            v-model="searchQuery"
            input-id="search-input"
            placeholder="Nach Namen suchen"
            variant="filled"
            class="w-full"
          />
        </IconField>
      </div>
      <Button
        icon="pi pi-check"
        aria-label="Submit"
        severity="primary"
        rounded
        @click="submitSearch"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Button from 'primevue/button'
  import IconField from 'primevue/iconfield'
  import InputIcon from 'primevue/inputicon'
  import InputText from 'primevue/inputtext'

  const searchQuery = ref('')

  function submitSearch() {}
</script>