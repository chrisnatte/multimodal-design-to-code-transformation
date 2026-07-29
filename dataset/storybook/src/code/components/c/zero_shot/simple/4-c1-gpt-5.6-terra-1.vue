<template>
  <div class="w-32 px-6 pt-6">
    <div
      v-for="option in options"
      :key="option.value"
      class="flex h-10 items-center gap-2 border-b border-surface-200"
    >
      <RadioButton
        v-model="selectedOption"
        :inputId="option.value"
        name="option"
        :value="option.value"
      />
      <label :for="option.value" class="cursor-pointer text-sm text-surface-700">
        {{ option.label }}
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RadioButton from 'primevue/radiobutton'

const selectedOption = ref('option1')

const options = [
  { label: 'Option1', value: 'option1' },
  { label: 'Option2', value: 'option2' },
  { label: 'Option3', value: 'option3' },
  { label: 'Option4', value: 'option4' }
]
</script>