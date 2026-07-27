<template>
  <div class="flex h-[61px] w-[263px] items-end justify-end gap-3">
    <div class="flex h-[61px] w-[216px] flex-col gap-[7px]">
      <label for="search-input" class="h-[21px] text-sm font-normal text-surface-900">
        Suche
      </label>

      <div class="relative h-[33px] w-full">
        <span
          class="pi pi-search pointer-events-none absolute left-[10.5px] top-1/2 z-10 -translate-y-1/2 text-sm text-surface-500"
          aria-hidden="true"
        />
        <InputText
          id="search-input"
          v-model="searchValue"
          placeholder="Nach Namen suchen"
          variant="filled"
          class="!h-[33px] !w-full !rounded-[6px] !border-[#cbd5e1] !bg-[#f8fafc] !py-[7px] !pl-[35.5px] !pr-[10.5px] !text-sm"
        />
      </div>
    </div>

    <Button
      icon="pi pi-check"
      rounded
      aria-label="Submit"
      class="!h-[35px] !w-[35px] !bg-[#10b981] !p-0 !text-white"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const searchValue = ref('')
</script>