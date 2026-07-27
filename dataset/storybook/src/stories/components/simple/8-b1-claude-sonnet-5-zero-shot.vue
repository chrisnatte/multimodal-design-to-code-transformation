<template>
  <div class="flex items-end gap-3">
    <div class="flex flex-col gap-1">
      <label for="suche" class="text-sm">Suche</label>
      <IconField iconPosition="left">
        <InputIcon class="pi pi-search" />
        <InputText
          id="suche"
          v-model="searchValue"
          placeholder="Nach Namen suchen"
        />
      </IconField>
    </div>
    <Button
      icon="pi pi-check"
      severity="primary"
      rounded
      :disabled="false"
    />
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