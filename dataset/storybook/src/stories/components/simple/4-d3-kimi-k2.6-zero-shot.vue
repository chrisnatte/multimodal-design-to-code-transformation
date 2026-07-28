<template>
  <div class="flex flex-col gap-1 w-20">
    <div class="flex items-center gap-2">
      <RadioButton v-model="selected" inputId="opt1" name="options" value="Option1" />
      <label for="opt1" class="text-sm">Option1</label>
    </div>
    <Divider />
    <div class="flex items-center gap-2">
      <RadioButton v-model="selected" inputId="opt2" name="options" value="Option2" />
      <label for="opt2" class="text-sm">Option2</label>
    </div>
    <Divider />
    <div class="flex items-center gap-2">
      <RadioButton v-model="selected" inputId="opt3" name="options" value="Option3" />
      <label for="opt3" class="text-sm">Option3</label>
    </div>
    <Divider />
    <div class="flex items-center gap-2">
      <RadioButton v-model="selected" inputId="opt4" name="options" value="Option4" />
      <label for="opt4" class="text-sm">Option4</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RadioButton from 'primevue/radiobutton';
import Divider from 'primevue/divider';

const selected = ref('Option1');
</script>