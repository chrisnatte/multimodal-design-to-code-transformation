<template>
  <div class="flex flex-col gap-1 w-[79.5px]">
    <div class="flex items-center">
      <RadioButton v-model="selected" inputId="opt1" name="options" value="Option1" />
      <label for="opt1" class="ml-2 text-sm font-normal">Option1</label>
    </div>

    <Divider layout="horizontal" />

    <div class="flex items-center">
      <RadioButton v-model="selected" inputId="opt2" name="options" value="Option2" />
      <label for="opt2" class="ml-2 text-sm font-normal">Option2</label>
    </div>

    <Divider layout="horizontal" />

    <div class="flex items-center">
      <RadioButton v-model="selected" inputId="opt3" name="options" value="Option3" />
      <label for="opt3" class="ml-2 text-sm font-normal">Option3</label>
    </div>

    <Divider layout="horizontal" />

    <div class="flex items-center">
      <RadioButton v-model="selected" inputId="opt4" name="options" value="Option4" />
      <label for="opt4" class="ml-2 text-sm font-normal">Option4</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RadioButton from 'primevue/radiobutton'
import Divider from 'primevue/divider'

const selected = ref('Option1')
</script>