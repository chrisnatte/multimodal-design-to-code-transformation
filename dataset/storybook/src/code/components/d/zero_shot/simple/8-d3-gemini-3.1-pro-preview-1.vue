<template>
  <div class="p-6 bg-white flex flex-col">
    <div class="flex flex-row items-end gap-3">
      <div class="flex flex-col gap-2">
        <label class="text-sm font-normal text-surface-700">Suche</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-search" />
          <InputText
            v-model="searchQuery"
            placeholder="Nach Namen suchen"
            variant="filled"
            class="w-[216px]"
          />
        </IconField>
      </div>
      <Button
        icon="pi pi-check"
        rounded
        class="w-[35px] h-[35px] flex items-center justify-center p-0"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

const searchQuery = ref('')
</script>