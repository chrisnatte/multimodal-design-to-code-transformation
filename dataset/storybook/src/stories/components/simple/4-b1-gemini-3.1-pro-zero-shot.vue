<template>
  <div class="flex flex-col gap-1 w-[79.5px]">
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedValue" inputId="option1" name="options" value="Option1" />
      <label for="option1" class="text-sm font-normal cursor-pointer">Option1</label>
    </div>
    
    <Divider class="m-0" />
    
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedValue" inputId="option2" name="options" value="Option2" />
      <label for="option2" class="text-sm font-normal cursor-pointer">Option2</label>
    </div>
    
    <Divider class="m-0" />
    
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedValue" inputId="option3" name="options" value="Option3" />
      <label for="option3" class="text-sm font-normal cursor-pointer">Option3</label>
    </div>
    
    <Divider class="m-0" />
    
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedValue" inputId="option4" name="options" value="Option4" />
      <label for="option4" class="text-sm font-normal cursor-pointer">Option4</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RadioButton from 'primevue/radiobutton';
import Divider from 'primevue/divider';

const selectedValue = ref('Option1');
</script>