<template>
  <div class="flex flex-col p-6 bg-white w-fit">
    <div class="flex flex-col gap-1">
      <template v-for="(option, index) in options" :key="option">
        <!-- Radio Button Row -->
        <div class="flex items-center gap-2">
          <RadioButton
            v-model="selectedOption"
            :inputId="option"
            name="options"
            :value="option"
          />
          <label
            :for="option"
            class="text-sm font-normal text-slate-700 cursor-pointer select-none"
          >
            {{ option }}
          </label>
        </div>

        <!-- Divider -->
        <div
          v-if="index < options.length - 1"
          class="flex items-center h-[13px] w-full"
        >
          <div class="w-full border-t border-slate-200"></div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RadioButton from 'primevue/radiobutton';

const selectedOption = ref('Option1');
const options = ['Option1', 'Option2', 'Option3', 'Option4'];
</script>