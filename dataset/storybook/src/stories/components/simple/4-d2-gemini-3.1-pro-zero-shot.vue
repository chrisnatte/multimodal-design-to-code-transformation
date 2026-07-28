<template>
  <div class="flex flex-col gap-1 w-fit">
    <template v-for="(option, index) in options" :key="option.value">
      <div class="flex items-center gap-[7px]">
        <RadioButton 
          v-model="selectedValue" 
          :inputId="option.value" 
          name="options" 
          :value="option.value" 
        />
        <label 
          :for="option.value" 
          class="text-[14px] font-normal font-sans text-gray-700 cursor-pointer"
        >
          {{ option.label }}
        </label>
      </div>
      <Divider v-if="index < options.length - 1" type="solid" class="!my-1.5 !before:border-gray-200" />
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RadioButton from 'primevue/radiobutton';
import Divider from 'primevue/divider';

const selectedValue = ref('Option1');

const options = ref([
  { label: 'Option1', value: 'Option1' },
  { label: 'Option2', value: 'Option2' },
  { label: 'Option3', value: 'Option3' },
  { label: 'Option4', value: 'Option4' }
]);
</script>