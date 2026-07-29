<template>
  <div class="flex flex-col gap-3 p-4">
    <div v-for="option in options" :key="option.value" class="flex items-center gap-2">
      <RadioButton
        v-model="selectedOption"
        :inputId="option.value"
        :value="option.value"
      />
      <label :for="option.value">{{ option.label }}</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RadioButton from 'primevue/radiobutton'

const selectedOption = ref('Option1')

const options = ref([
  { label: 'Option1', value: 'Option1' },
  { label: 'Option2', value: 'Option2' },
  { label: 'Option3', value: 'Option3' },
  { label: 'Option4', value: 'Option4' }
])
</script>