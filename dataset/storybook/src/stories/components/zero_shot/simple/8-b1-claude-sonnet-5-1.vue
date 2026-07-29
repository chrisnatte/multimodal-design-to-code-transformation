<template>
  <div class="flex flex-col p-6 bg-white">
    <div class="flex items-start gap-3">
      <div class="flex flex-col gap-2">
        <label for="suche" class="text-sm">Suche</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-search" />
          <InputText
            id="suche"
            v-model="searchValue"
            placeholder="Nach Namen suchen"
            class="w-full"
          />
        </IconField>
      </div>
      <Button
        icon="pi pi-check"
        severity="primary"
        rounded
        aria-label="Submit"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import Button from 'primevue/button'

const searchValue = ref('')
</script>