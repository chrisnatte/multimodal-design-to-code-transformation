<template>
  <div class="flex w-32 flex-col px-6 py-5">
    <div
      v-for="option in options"
      :key="option.value"
      class="flex h-10 items-center gap-2 border-b border-slate-100"
    >
      <RadioButton
        v-model="selectedOption"
        :input-id="option.value"
        name="options"
        :value="option.value"
      />
      <label :for="option.value" class="cursor-pointer text-sm text-slate-700">
        {{ option.label }}
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RadioButton from 'primevue/radiobutton'

const selectedOption = ref('option1')

const options = ref([
  { label: 'Option1', value: 'option1' },
  { label: 'Option2', value: 'option2' },
  { label: 'Option3', value: 'option3' },
  { label: 'Option4', value: 'option4' }
])
</script>