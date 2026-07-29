<template>
  <div class="flex w-[311px] flex-col bg-white p-6">
    <div class="flex items-end gap-3">
      <div class="flex w-[216px] flex-col gap-[7px]">
        <label for="search-input" class="text-sm font-normal text-slate-700">Suche</label>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText
            id="search-input"
            v-model="searchValue"
            placeholder="Nach Namen suchen"
            class="h-[33px] w-full bg-slate-50 text-sm"
          />
        </IconField>
      </div>

      <Button
        icon="pi pi-check"
        rounded
        class="h-[35px] w-[35px]"
        aria-label="Suche bestätigen"
        @click="submitSearch"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'

const searchValue = ref('')

const submitSearch = () => {
  return searchValue.value
}
</script>