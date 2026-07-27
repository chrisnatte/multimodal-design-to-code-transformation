<template>
  <div class="flex items-end gap-3">
    <div class="flex flex-col gap-1">
      <label for="suche" class="text-sm">Suche</label>
      <InputText
        id="suche"
        v-model="searchValue"
        placeholder="Nach Namen suchen"
      >
        <template #default>
          <i class="pi pi-search" />
        </template>
      </InputText>
    </div>
    <Button icon="pi pi-check" rounded severity="primary" aria-label="Submit" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const searchValue = ref('');
</script>