<template>
  <div class="flex items-end gap-3">
    <div class="flex w-[216px] flex-col gap-2">
      <label for="search" class="text-sm font-normal text-surface-700">Suche</label>
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText
          id="search"
          v-model="searchQuery"
          placeholder="Nach Namen suchen"
          class="h-[33px] w-full text-sm"
        />
      </IconField>
    </div>

    <Button
      icon="pi pi-check"
      rounded
      class="h-[35px] w-[35px]"
      aria-label="Submit"
      @click="submitSearch"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'

const searchQuery = ref('')

const submitSearch = () => {
  // Search submission action
}
</script>