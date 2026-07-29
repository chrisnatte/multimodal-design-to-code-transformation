<template>
  <div class="flex w-[311px] flex-col bg-white p-6">
    <div class="flex items-end gap-3">
      <div class="flex w-[216px] flex-col gap-2">
        <label for="search-input" class="text-sm">Suche</label>
        <InputGroup class="h-[33px]">
          <InputGroupAddon>
            <i class="pi pi-search text-sm" aria-hidden="true"></i>
          </InputGroupAddon>
          <InputText
            id="search-input"
            v-model="searchQuery"
            placeholder="Nach Namen suchen"
            variant="filled"
            class="w-full"
          />
        </InputGroup>
      </div>
      <Button
        icon="pi pi-check"
        severity="primary"
        rounded
        aria-label="Submit"
        class="!h-[35px] !w-[35px]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import InputText from 'primevue/inputtext'

const searchQuery = ref('')
</script>