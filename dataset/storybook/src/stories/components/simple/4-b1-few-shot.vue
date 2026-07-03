<template>
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-2">
      <RadioButton v-model="form.selectedOption" inputId="option1" name="options" value="Option1" />
      <label for="option1">Option1</label>
    </div>

    <Divider />

    <div class="flex items-center gap-2">
      <RadioButton v-model="form.selectedOption" inputId="option2" name="options" value="Option2" />
      <label for="option2">Option2</label>
    </div>

    <Divider />

    <div class="flex items-center gap-2">
      <RadioButton v-model="form.selectedOption" inputId="option3" name="options" value="Option3" />
      <label for="option3">Option3</label>
    </div>

    <Divider />

    <div class="flex items-center gap-2">
      <RadioButton v-model="form.selectedOption" inputId="option4" name="options" value="Option4" />
      <label for="option4">Option4</label>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import RadioButton from 'primevue/radiobutton'
import Divider from 'primevue/divider'

const form = reactive({
  selectedOption: 'Option1'
})
</script>