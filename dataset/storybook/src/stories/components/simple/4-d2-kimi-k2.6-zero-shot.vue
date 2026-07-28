<template>
  <div class="flex flex-col gap-1 w-20">
    <template v-for="(option, index) in options" :key="option">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" :inputId="option" name="options" :value="option" />
        <label :for="option" class="text-sm text-gray-700 whitespace-nowrap">{{ option }}</label>
      </div>
      <Divider v-if="index < options.length - 1" />
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RadioButton from 'primevue/radiobutton';
import Divider from 'primevue/divider';

const selectedOption = ref('Option1');
const options = ['Option1', 'Option2', 'Option3', 'Option4'];
</script>