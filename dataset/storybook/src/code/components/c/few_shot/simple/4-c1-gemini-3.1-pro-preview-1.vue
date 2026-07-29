<template>
  <div class="flex flex-col w-32">
    <div class="flex items-center gap-3 py-3 border-b border-surface-200">
      <RadioButton v-model="selectedOption" inputId="option1" name="option" value="Option1" />
      <label for="option1" class="text-surface-700">Option1</label>
    </div>
    <div class="flex items-center gap-3 py-3 border-b border-surface-200">
      <RadioButton v-model="selectedOption" inputId="option2" name="option" value="Option2" />
      <label for="option2" class="text-surface-700">Option2</label>
    </div>
    <div class="flex items-center gap-3 py-3 border-b border-surface-200">
      <RadioButton v-model="selectedOption" inputId="option3" name="option" value="Option3" />
      <label for="option3" class="text-surface-700">Option3</label>
    </div>
    <div class="flex items-center gap-3 py-3">
      <RadioButton v-model="selectedOption" inputId="option4" name="option" value="Option4" />
      <label for="option4" class="text-surface-700">Option4</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RadioButton from 'primevue/radiobutton';

const selectedOption = ref('Option1');
</script>