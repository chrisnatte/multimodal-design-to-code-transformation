<template>
  <div class="flex w-[311px] flex-col gap-2 px-6 pt-6">
    <label for="search" class="text-sm text-slate-700">Suche</label>
    <div class="flex items-center gap-3">
      <IconField>
        <InputIcon class="pi pi-search text-sm" />
        <InputText
          id="search"
          v-model="searchQuery"
          placeholder="Nach Namen suchen"
          class="!h-[33px] !w-[216px] !text-sm"
        />
      </IconField>
      <Button
        icon="pi pi-check"
        severity="success"
        aria-label="Suchen"
        class="!h-[35px] !w-[35px] !p-0"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'

const searchQuery = ref('')
</script>