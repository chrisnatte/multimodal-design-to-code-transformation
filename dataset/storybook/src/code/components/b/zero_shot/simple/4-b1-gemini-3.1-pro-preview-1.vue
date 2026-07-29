<template>
  <div class="flex flex-col p-6 bg-white w-fit h-fit">
    <div class="flex flex-col gap-1">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option1" name="option" value="Option1" />
        <label for="option1" class="text-sm font-normal font-sans">Option1</label>
      </div>
      
      <Divider class="!my-1" />
      
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option2" name="option" value="Option2" />
        <label for="option2" class="text-sm font-normal font-sans">Option2</label>
      </div>
      
      <Divider class="!my-1" />
      
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option3" name="option" value="Option3" />
        <label for="option3" class="text-sm font-normal font-sans">Option3</label>
      </div>
      
      <Divider class="!my-1" />
      
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option4" name="option" value="Option4" />
        <label for="option4" class="text-sm font-normal font-sans">Option4</label>
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