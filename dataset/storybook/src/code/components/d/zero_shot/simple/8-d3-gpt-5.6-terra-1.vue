<template>
  <div class="flex w-[311px] flex-col bg-white p-6">
    <div class="flex items-end gap-3">
      <div class="flex w-[216px] flex-col gap-[7px]">
        <label for="search" class="text-sm font-normal text-slate-700">Suche</label>
        <div class="relative">
          <i class="pi pi-search absolute left-[11px] top-1/2 z-10 -translate-y-1/2 text-sm text-slate-400" />
          <InputText
            id="search"
            v-model="searchValue"
            placeholder="Nach Namen suchen"
            variant="filled"
            class="!h-[33px] !w-[216px] !rounded-md !border-[#cbd5e1] !bg-[#f8fafc] !py-[7px] !pl-[34px] !pr-[10px] !text-sm !text-slate-700 placeholder:!text-slate-500"
          />
        </div>
      </div>
      <Button
        icon="pi pi-check"
        rounded
        aria-label="Suche bestätigen"
        class="!h-[35px] !w-[35px] !min-w-0 !bg-[#10b981] !p-0 !text-white hover:!bg-[#059669]"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const searchValue = ref('')
</script>