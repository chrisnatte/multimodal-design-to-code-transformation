<template>
  <div class="flex flex-col w-48 p-4 bg-white">
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-3">
        <RadioButton v-model="selectedOption" inputId="option1" name="options" value="Option1" />
        <label for="option1" class="text-gray-700 text-lg">Option1</label>
      </div>
      <Divider class="!m-0" />
      <div class="flex items-center gap-3">
        <RadioButton v-model="selectedOption" inputId="option2" name="options" value="Option2" />
        <label for="option2" class="text-gray-700 text-lg">Option2</label>
      </div>
      <Divider class="!m-0" />
      <div class="flex items-center gap-3">
        <RadioButton v-model="selectedOption" inputId="option3" name="options" value="Option3" />
        <label for="option3" class="text-gray-700 text-lg">Option3</label>
      </div>
      <Divider class="!m-0" />
      <div class="flex items-center gap-3">
        <RadioButton v-model="selectedOption" inputId="option4" name="options" value="Option4" />
        <label for="option4" class="text-gray-700 text-lg">Option4</label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RadioButton from 'primevue/radiobutton';
import Divider from 'primevue/divider';

const selectedOption = ref('Option1');
</script>