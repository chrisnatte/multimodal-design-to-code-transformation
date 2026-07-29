<template>
  <div class="flex flex-col p-6 bg-white">
    <div class="flex flex-row items-end gap-3">
      <div class="flex flex-col gap-1">
        <span class="text-sm">Suche</span>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText
            v-model="searchValue"
            placeholder="Nach Namen suchen"
          />
        </IconField>
      </div>
      <Button
        icon="pi pi-check"
        severity="success"
        rounded
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

const searchValue = ref('');
</script>