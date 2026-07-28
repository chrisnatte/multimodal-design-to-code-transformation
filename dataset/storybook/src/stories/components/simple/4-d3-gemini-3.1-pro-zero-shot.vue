<template>
  <div class="flex flex-col gap-1 w-fit">
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="option1" name="option" value="Option1" />
      <label for="option1" class="text-sm font-normal text-surface-700 dark:text-surface-0 cursor-pointer">Option1</label>
    </div>
    
    <Divider class="!m-0" />
    
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="option2" name="option" value="Option2" />
      <label for="option2" class="text-sm font-normal text-surface-700 dark:text-surface-0 cursor-pointer">Option2</label>
    </div>
    
    <Divider class="!m-0" />
    
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="option3" name="option" value="Option3" />
      <label for="option3" class="text-sm font-normal text-surface-700 dark:text-surface-0 cursor-pointer">Option3</label>
    </div>
    
    <Divider class="!m-0" />
    
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="option4" name="option" value="Option4" />
      <label for="option4" class="text-sm font-normal text-surface-700 dark:text-surface-0 cursor-pointer">Option4</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RadioButton from 'primevue/radiobutton'
import Divider from 'primevue/divider'

const selectedOption = ref('Option1')
</script>