<template>
  <div class="flex flex-col w-32 p-4">
    <div class="flex items-center gap-3 py-3">
      <RadioButton v-model="selectedOption" inputId="option1" value="Option1" />
      <label for="option1" class="text-slate-600 cursor-pointer">Option1</label>
    </div>
    
    <Divider class="m-0" />
    
    <div class="flex items-center gap-3 py-3">
      <RadioButton v-model="selectedOption" inputId="option2" value="Option2" />
      <label for="option2" class="text-slate-600 cursor-pointer">Option2</label>
    </div>
    
    <Divider class="m-0" />
    
    <div class="flex items-center gap-3 py-3">
      <RadioButton v-model="selectedOption" inputId="option3" value="Option3" />
      <label for="option3" class="text-slate-600 cursor-pointer">Option3</label>
    </div>
    
    <Divider class="m-0" />
    
    <div class="flex items-center gap-3 py-3">
      <RadioButton v-model="selectedOption" inputId="option4" value="Option4" />
      <label for="option4" class="text-slate-600 cursor-pointer">Option4</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RadioButton from 'primevue/radiobutton';
import Divider from 'primevue/divider';

const selectedOption = ref('Option1');
</script>