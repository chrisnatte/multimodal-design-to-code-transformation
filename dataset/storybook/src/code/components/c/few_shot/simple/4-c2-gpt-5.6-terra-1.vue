<template>
  <div class="flex w-32 flex-col gap-3 p-6">
    <div v-for="option in options" :key="option.value" class="flex items-center gap-2">
      <RadioButton
        v-model="selectedOption"
        :input-id="option.id"
        name="options"
        :value="option.value"
      />
      <label :for="option.id" class="text-sm">{{ option.label }}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import RadioButton from 'primevue/radiobutton'

const selectedOption = ref('Option1')

const options = ref([
  { id: 'option-1', label: 'Option1', value: 'Option1' },
  { id: 'option-2', label: 'Option2', value: 'Option2' },
  { id: 'option-3', label: 'Option3', value: 'Option3' },
  { id: 'option-4', label: 'Option4', value: 'Option4' },
])
</script>