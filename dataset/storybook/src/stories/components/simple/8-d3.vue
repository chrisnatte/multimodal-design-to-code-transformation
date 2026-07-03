<template>
  <div class="flex items-end gap-3 p-6 bg-[#f3f4f6]">
    <div class="flex flex-col gap-2 w-[216px]">
      <label for="search" class="text-sm font-normal text-[#1f2937]">Suche</label>
      <div class="relative">
        <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8] text-sm"></i>
        <InputText
          id="search"
          v-model="state.search"
          placeholder="Nach Namen suchen"
          variant="filled"
          class="w-full h-[34px] pl-9 pr-3 !bg-[#f8fafc] !border-[#cbd5e1] !text-[#64748b] !rounded-md"
        />
      </div>
    </div>
    <Button
      icon="pi pi-check"
      rounded
      severity="success"
      aria-label="Suche bestätigen"
      class="!w-[34px] !h-[34px]"
      @click="onSubmit"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const state = reactive({
  search: ''
})

const onSubmit = () => {
  console.log('search:', state.search)
}
</script>