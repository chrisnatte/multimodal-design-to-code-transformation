<template>
  <div class="flex flex-col gap-3 p-4">
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="option1" name="options" value="Option1" />
      <label for="option1" class="text-slate-700 cursor-pointer">Option1</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="option2" name="options" value="Option2" />
      <label for="option2" class="text-slate-700 cursor-pointer">Option2</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="option3" name="options" value="Option3" />
      <label for="option3" class="text-slate-700 cursor-pointer">Option3</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="option4" name="options" value="Option4" />
      <label for="option4" class="text-slate-700 cursor-pointer">Option4</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RadioButton from 'primevue/radiobutton'

const selectedOption = ref('Option1')
</script>