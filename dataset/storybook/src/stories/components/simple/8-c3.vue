<template>
  <div class="min-h-[110px] bg-[#f3f4f6] flex items-center px-6">
    <div class="flex flex-col gap-3 w-full max-w-sm">
      <label for="search" class="text-[#1f2937] text-2xl leading-none">Suche</label>
      <div class="flex items-center gap-3">
        <span class="p-input-icon-left flex-1">
          <i class="pi pi-search text-slate-400" />
          <InputText
            id="search"
            v-model="state.search"
            type="text"
            placeholder="Nach Namen suchen"
            fluid
            class="w-full"
          />
        </span>
        <Button icon="pi pi-check" severity="success" rounded />
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