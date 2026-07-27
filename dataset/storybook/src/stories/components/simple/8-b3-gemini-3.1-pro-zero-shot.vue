<template>
  <div class="flex flex-row items-end gap-3">
    <div class="flex flex-col gap-2">
      <label class="text-[14px] font-normal font-sans text-surface-700">Suche</label>
      <InputText 
        v-model="searchQuery" 
        placeholder="Nach Namen suchen" 
        variant="filled" 
        class="w-[216px]" 
      />
    </div>
    <Button 
      icon="pi pi-check" 
      rounded 
      class="w-[35px] h-[35px] !p-0 flex items-center justify-center" 
      aria-label="Submit"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const searchQuery = ref('');
</script>