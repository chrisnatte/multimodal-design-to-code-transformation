<template>
  <div class="flex flex-col w-fit bg-white p-4">
    <div
      v-for="(option, index) in options"
      :key="option.value"
      class="flex items-center gap-3 py-3"
      :class="{ 'border-b border-gray-100': index !== options.length - 1 }"
    >
      <RadioButton
        v-model="selectedOption"
        :inputId="option.value"
        name="optionsGroup"
        :value="option.value"
      />
      <label
        :for="option.value"
        class="text-gray-600 text-base cursor-pointer select-none"
      >
        {{ option.label }}
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RadioButton from 'primevue/radiobutton';

const selectedOption = ref('Option1');

const options = ref([
  { label: 'Option1', value: 'Option1' },
  { label: 'Option2', value: 'Option2' },
  { label: 'Option3', value: 'Option3' },
  { label: 'Option4', value: 'Option4' }
]);
</script>