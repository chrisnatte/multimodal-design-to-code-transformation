<template>
  <div class="flex w-32 flex-col">
    <div
      v-for="option in options"
      :key="option"
      class="flex items-center gap-2 border-b border-surface-200 px-6 py-2 last:border-b-0"
    >
      <RadioButton v-model="selectedOption" :input-id="option" name="options" :value="option" />
      <label :for="option" class="text-sm text-surface-700">{{ option }}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import RadioButton from 'primevue/radiobutton'

const selectedOption = ref('Option1')
const options = ['Option1', 'Option2', 'Option3', 'Option4']
</script>