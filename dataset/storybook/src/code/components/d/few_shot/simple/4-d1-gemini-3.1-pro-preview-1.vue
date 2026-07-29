<template>
  <div class="flex flex-col gap-1 bg-white p-6">
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="option1" name="option" value="Option1" />
      <label for="option1" class="text-sm text-slate-700">Option1</label>
    </div>
    <Divider class="!my-1" />
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="option2" name="option" value="Option2" />
      <label for="option2" class="text-sm text-slate-700">Option2</label>
    </div>
    <Divider class="!my-1" />
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="option3" name="option" value="Option3" />
      <label for="option3" class="text-sm text-slate-700">Option3</label>
    </div>
    <Divider class="!my-1" />
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="option4" name="option" value="Option4" />
      <label for="option4" class="text-sm text-slate-700">Option4</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import RadioButton from 'primevue/radiobutton'
import Divider from 'primevue/divider'

const selectedOption = ref('Option1')
</script>