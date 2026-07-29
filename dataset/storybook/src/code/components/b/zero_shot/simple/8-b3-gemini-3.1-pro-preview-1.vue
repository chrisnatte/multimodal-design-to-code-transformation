<template>
  <div class="flex flex-col p-6 bg-white">
    <div class="flex flex-row gap-3 items-end">
      <div class="flex flex-col gap-1">
        <label class="font-sans text-[14px] font-normal text-surface-700">Suche</label>
        <div class="relative flex items-center">
          <i class="pi pi-search absolute left-3 text-surface-400"></i>
          <InputText
            v-model="searchQuery"
            placeholder="Nach Namen suchen"
            variant="filled"
            class="pl-9"
          />
        </div>
      </div>
      <Button 
        icon="pi pi-check" 
        rounded 
        aria-label="Submit" 
        class="w-[35px] h-[35px] !p-0 flex items-center justify-center"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const searchQuery = ref('');
</script>