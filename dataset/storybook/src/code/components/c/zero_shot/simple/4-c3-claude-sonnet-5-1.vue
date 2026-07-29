<template>
  <div class="flex flex-col gap-3 p-4">
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="option1" value="Option1" />
      <label for="option1">Option1</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="option2" value="Option2" />
      <label for="option2">Option2</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="option3" value="Option3" />
      <label for="option3">Option3</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="option4" value="Option4" />
      <label for="option4">Option4</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RadioButton from 'primevue/radiobutton';

const selectedOption = ref('Option1');
</script>