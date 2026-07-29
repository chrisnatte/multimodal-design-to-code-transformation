<template>
  <div class="p-6 flex flex-col">
    <div class="flex flex-row items-end gap-3">
      <div class="flex flex-col gap-2">
        <label for="search-input" class="text-sm font-normal text-surface-700">Suche</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-search" />
          <InputText
            id="search-input"
            v-model="searchQuery"
            placeholder="Nach Namen suchen"
            variant="filled"
          />
        </IconField>
      </div>
      <Button
        icon="pi pi-check"
        class="w-[35px] h-[35px] !bg-[#10b981] !border-[#10b981] !text-white p-0 flex items-center justify-center"
        aria-label="Submit"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Button from 'primevue/button';

const searchQuery = ref('');
</script>