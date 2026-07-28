<template>
  <div class="flex flex-col w-[80px] gap-1">
    <div class="flex items-center w-full">
      <RadioButton v-model="selectedValue" inputId="option1" name="option" value="Option1" />
      <label for="option1" class="ml-2 text-sm text-surface-700 dark:text-surface-0 cursor-pointer">Option1</label>
    </div>
    <Divider class="!my-1" />
    <div class="flex items-center w-full">
      <RadioButton v-model="selectedValue" inputId="option2" name="option" value="Option2" />
      <label for="option2" class="ml-2 text-sm text-surface-700 dark:text-surface-0 cursor-pointer">Option2</label>
    </div>
    <Divider class="!my-1" />
    <div class="flex items-center w-full">
      <RadioButton v-model="selectedValue" inputId="option3" name="option" value="Option3" />
      <label for="option3" class="ml-2 text-sm text-surface-700 dark:text-surface-0 cursor-pointer">Option3</label>
    </div>
    <Divider class="!my-1" />
    <div class="flex items-center w-full">
      <RadioButton v-model="selectedValue" inputId="option4" name="option" value="Option4" />
      <label for="option4" class="ml-2 text-sm text-surface-700 dark:text-surface-0 cursor-pointer">Option4</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RadioButton from 'primevue/radiobutton'
import Divider from 'primevue/divider'

const selectedValue = ref('Option1')
</script>