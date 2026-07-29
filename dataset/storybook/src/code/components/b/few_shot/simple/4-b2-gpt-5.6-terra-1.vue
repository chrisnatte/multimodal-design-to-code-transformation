<template>
  <div class="flex w-fit flex-col bg-white p-6">
    <div class="flex w-[79.5px] flex-col gap-1">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="option1" name="options" value="Option1" />
        <label for="option1" class="text-sm">Option1</label>
      </div>

      <Divider class="!my-0" />

      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="option2" name="options" value="Option2" />
        <label for="option2" class="text-sm">Option2</label>
      </div>

      <Divider class="!my-0" />

      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="option3" name="options" value="Option3" />
        <label for="option3" class="text-sm">Option3</label>
      </div>

      <Divider class="!my-0" />

      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="option4" name="options" value="Option4" />
        <label for="option4" class="text-sm">Option4</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Divider from 'primevue/divider'
import RadioButton from 'primevue/radiobutton'

const selectedOption = ref('Option1')
</script>