<template>
  <div class="flex w-32 flex-col p-6">
    <div v-for="option in options" :key="option.value" class="flex flex-col">
      <div class="flex items-center gap-2 py-2">
        <RadioButton
          v-model="selectedOption"
          :input-id="option.id"
          name="options"
          :value="option.value"
        />
        <label :for="option.id" class="text-sm text-slate-700">{{ option.label }}</label>
      </div>
      <Divider v-if="option.value !== 4" class="!my-0" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Divider from 'primevue/divider'
  import RadioButton from 'primevue/radiobutton'

  const selectedOption = ref(1)

  const options = [
    { id: 'option-1', label: 'Option1', value: 1 },
    { id: 'option-2', label: 'Option2', value: 2 },
    { id: 'option-3', label: 'Option3', value: 3 },
    { id: 'option-4', label: 'Option4', value: 4 },
  ]
</script>