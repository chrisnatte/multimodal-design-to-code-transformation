<template>
  <div class="flex flex-col p-6 bg-white w-fit">
    <div class="flex flex-col gap-1">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option1" value="Option1" />
        <label for="option1" class="text-sm font-normal font-sans text-gray-900 cursor-pointer">Option1</label>
      </div>
      
      <Divider class="my-1" />
      
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option2" value="Option2" />
        <label for="option2" class="text-sm font-normal font-sans text-gray-900 cursor-pointer">Option2</label>
      </div>
      
      <Divider class="my-1" />
      
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option3" value="Option3" />
        <label for="option3" class="text-sm font-normal font-sans text-gray-900 cursor-pointer">Option3</label>
      </div>
      
      <Divider class="my-1" />
      
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option4" value="Option4" />
        <label for="option4" class="text-sm font-normal font-sans text-gray-900 cursor-pointer">Option4</label>
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