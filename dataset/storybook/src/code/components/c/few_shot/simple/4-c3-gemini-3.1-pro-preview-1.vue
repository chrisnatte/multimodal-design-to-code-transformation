<template>
  <div class="flex flex-col gap-4 p-4 w-fit">
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="option1" name="option" value="Option1" />
      <label for="option1" class="text-slate-600">Option1</label>
    </div>
    <Divider class="!m-0" />
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="option2" name="option" value="Option2" />
      <label for="option2" class="text-slate-600">Option2</label>
    </div>
    <Divider class="!m-0" />
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="option3" name="option" value="Option3" />
      <label for="option3" class="text-slate-600">Option3</label>
    </div>
    <Divider class="!m-0" />
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="option4" name="option" value="Option4" />
      <label for="option4" class="text-slate-600">Option4</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RadioButton from 'primevue/radiobutton';
import Divider from 'primevue/divider';

const selectedOption = ref('Option1');
</script>