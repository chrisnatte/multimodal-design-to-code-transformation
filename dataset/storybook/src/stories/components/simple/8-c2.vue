<template>
  <div class="min-h-[109px] w-full bg-[#dcdcdc] flex items-center px-6">
    <div class="flex flex-col gap-3 w-full max-w-[280px]">
      <label for="search-input" class="text-[28px] leading-none text-[#1f2937]">Suche</label>
      <div class="flex items-center gap-3">
        <InputText
          id="search-input"
          v-model="state.search"
          type="text"
          placeholder="Nach Namen suchen"
          class="w-[220px]"
        />
        <Button icon="pi pi-check" aria-label="Suchen" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const state = reactive({
  search: ''
});
</script>