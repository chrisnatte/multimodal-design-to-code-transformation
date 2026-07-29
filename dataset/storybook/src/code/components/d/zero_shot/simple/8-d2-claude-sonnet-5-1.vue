<template>
  <div class="p-6 bg-white inline-block">
    <div class="flex items-end gap-3">
      <div class="flex flex-col gap-1">
        <label for="search" class="text-sm text-gray-700">Suche</label>
        <InputText
          id="search"
          v-model="searchValue"
          placeholder="Nach Namen suchen"
          variant="filled"
        >
          <template #default>
            <i class="pi pi-search" />
          </template>
        </InputText>
      </div>
      <Button icon="pi pi-check" rounded aria-label="Submit" @click="onSubmit" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const searchValue = ref('');

const onSubmit = () => {
  console.log('Search submitted:', searchValue.value);
};
</script>