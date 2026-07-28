<template>
  <div class="flex flex-col w-48 p-4 bg-white">
    <div class="flex items-center gap-3 py-3 border-b border-gray-100">
      <RadioButton v-model="selectedValue" inputId="option1" name="option" value="Option1" />
      <label for="option1" class="text-gray-700 cursor-pointer">Option1</label>
    </div>
    <div class="flex items-center gap-3 py-3 border-b border-gray-100">
      <RadioButton v-model="selectedValue" inputId="option2" name="option" value="Option2" />
      <label for="option2" class="text-gray-700 cursor-pointer">Option2</label>
    </div>
    <div class="flex items-center gap-3 py-3 border-b border-gray-100">
      <RadioButton v-model="selectedValue" inputId="option3" name="option" value="Option3" />
      <label for="option3" class="text-gray-700 cursor-pointer">Option3</label>
    </div>
    <div class="flex items-center gap-3 py-3">
      <RadioButton v-model="selectedValue" inputId="option4" name="option" value="Option4" />
      <label for="option4" class="text-gray-700 cursor-pointer">Option4</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RadioButton from 'primevue/radiobutton';

const selectedValue = ref('Option1');
</script>