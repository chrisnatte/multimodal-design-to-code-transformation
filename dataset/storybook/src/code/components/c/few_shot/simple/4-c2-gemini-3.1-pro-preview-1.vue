<template>
  <div class="flex w-fit flex-col p-4">
    <template v-for="(option, index) in options" :key="option.value">
      <div class="flex items-center gap-3 py-2">
        <RadioButton v-model="selectedOption" :inputId="option.id" :value="option.value" />
        <label :for="option.id" class="text-slate-700">{{ option.label }}</label>
      </div>
      <Divider v-if="index < options.length - 1" class="!my-1" />
    </template>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import RadioButton from 'primevue/radiobutton'
  import Divider from 'primevue/divider'

  const selectedOption = ref('Option1')
  const options = ref([
    { id: 'opt1', value: 'Option1', label: 'Option1' },
    { id: 'opt2', value: 'Option2', label: 'Option2' },
    { id: 'opt3', value: 'Option3', label: 'Option3' },
    { id: 'opt4', value: 'Option4', label: 'Option4' },
  ])
</script>