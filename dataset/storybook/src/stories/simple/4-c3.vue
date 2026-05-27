<template>
  <div class="w-32 bg-gray-200 p-3">
    <div class="flex flex-col gap-2">
      <div class="flex items-center gap-2">
        <RadioButton v-model="state.selected" inputId="option1" name="options" value="Option1" />
        <label for="option1" class="text-2xl text-gray-700">Option1</label>
      </div>

      <Divider class="my-0" />

      <div class="flex items-center gap-2">
        <RadioButton v-model="state.selected" inputId="option2" name="options" value="Option2" />
        <label for="option2" class="text-2xl text-gray-700">Option2</label>
      </div>

      <Divider class="my-0" />

      <div class="flex items-center gap-2">
        <RadioButton v-model="state.selected" inputId="option3" name="options" value="Option3" />
        <label for="option3" class="text-2xl text-gray-700">Option3</label>
      </div>

      <Divider class="my-0" />

      <div class="flex items-center gap-2">
        <RadioButton v-model="state.selected" inputId="option4" name="options" value="Option4" />
        <label for="option4" class="text-2xl text-gray-700">Option4</label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import RadioButton from 'primevue/radiobutton'
import Divider from 'primevue/divider'

const state = reactive({
  selected: 'Option1'
})
</script>