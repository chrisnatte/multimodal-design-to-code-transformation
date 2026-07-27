<template>
  <div class="flex flex-col gap-1 w-20">
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" name="options" value="Option1" inputId="option1" />
      <label for="option1" class="text-sm font-normal">Option1</label>
    </div>
    <Divider type="solid" layout="horizontal" />
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" name="options" value="Option2" inputId="option2" />
      <label for="option2" class="text-sm font-normal">Option2</label>
    </div>
    <Divider type="solid" layout="horizontal" />
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" name="options" value="Option3" inputId="option3" />
      <label for="option3" class="text-sm font-normal">Option3</label>
    </div>
    <Divider type="solid" layout="horizontal" />
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" name="options" value="Option4" inputId="option4" />
      <label for="option4" class="text-sm font-normal">Option4</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RadioButton from 'primevue/radiobutton';
import Divider from 'primevue/divider';

const selectedOption = ref('Option1');
</script>