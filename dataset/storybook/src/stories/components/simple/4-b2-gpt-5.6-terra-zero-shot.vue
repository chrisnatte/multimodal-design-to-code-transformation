<template>
  <div class="flex w-[79.5px] flex-col gap-[4px]">
    <div class="flex h-[17.5px] items-center gap-[7px]">
      <RadioButton
        v-model="selectedOption"
        inputId="option1"
        name="options"
        value="Option1"
        aria-label="Option1"
      />
      <label for="option1" class="text-sm font-normal">Option1</label>
    </div>

    <Divider type="solid" class="!my-0 h-[13px]" />

    <div class="flex h-[17.5px] items-center gap-[7px]">
      <RadioButton
        v-model="selectedOption"
        inputId="option2"
        name="options"
        value="Option2"
        aria-label="Option2"
      />
      <label for="option2" class="text-sm font-normal">Option2</label>
    </div>

    <Divider type="solid" class="!my-0 h-[13px]" />

    <div class="flex h-[17.5px] items-center gap-[7px]">
      <RadioButton
        v-model="selectedOption"
        inputId="option3"
        name="options"
        value="Option3"
        aria-label="Option3"
      />
      <label for="option3" class="text-sm font-normal">Option3</label>
    </div>

    <Divider type="solid" class="!my-0 h-[13px]" />

    <div class="flex h-[17.5px] items-center gap-[7px]">
      <RadioButton
        v-model="selectedOption"
        inputId="option4"
        name="options"
        value="Option4"
        aria-label="Option4"
      />
      <label for="option4" class="text-sm font-normal">Option4</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Divider from 'primevue/divider';
import RadioButton from 'primevue/radiobutton';

const selectedOption = ref('Option1');
</script>