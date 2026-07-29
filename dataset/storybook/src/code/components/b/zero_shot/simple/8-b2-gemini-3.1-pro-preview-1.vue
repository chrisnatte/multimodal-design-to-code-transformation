<template>
  <div class="flex flex-col p-6 bg-white">
    <div class="flex flex-row gap-3 items-end justify-end">
      <div class="flex flex-col gap-2">
        <label for="searchInput" class="text-sm font-normal text-gray-900 font-sans">Suche</label>
        <div class="relative">
          <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
          <InputText 
            id="searchInput" 
            v-model="searchValue" 
            placeholder="Nach Namen suchen" 
            variant="filled" 
            class="pl-10 w-[216px]" 
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

const searchValue = ref('');
</script>