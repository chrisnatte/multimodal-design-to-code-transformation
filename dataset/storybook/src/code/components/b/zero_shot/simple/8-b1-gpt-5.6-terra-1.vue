<template>
  <div class="flex w-fit flex-col bg-white p-6">
    <div class="flex items-end justify-end gap-3">
      <div class="flex w-[216px] flex-col gap-2">
        <label for="search-input" class="text-sm font-normal">Suche</label>
        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-search text-sm"></i>
          </InputGroupAddon>
          <InputText
            id="search-input"
            v-model="searchQuery"
            placeholder="Nach Namen suchen"
            filled
            class="w-full"
          />
        </InputGroup>
      </div>

      <Button
        icon="pi pi-check"
        rounded
        aria-label="Submit"
        class="h-[35px] w-[35px]"
        @click="submitSearch"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import InputText from 'primevue/inputtext'

const searchQuery = ref('')

const submitSearch = () => {}
</script>