<template>
  <div class="flex w-[311px] flex-col gap-2 p-6">
    <label for="search" class="text-sm text-surface-800">Suche</label>
    <div class="flex items-center gap-2">
      <span class="relative flex-1">
        <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-sm text-surface-400"></i>
        <InputText
          id="search"
          v-model="searchValue"
          placeholder="Nach Namen suchen"
          class="w-full !py-2 !pl-9 !text-sm"
        />
      </span>
      <Button icon="pi pi-check" aria-label="Suchen" class="!h-[34px] !w-[35px]" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const searchValue = ref('');
</script>