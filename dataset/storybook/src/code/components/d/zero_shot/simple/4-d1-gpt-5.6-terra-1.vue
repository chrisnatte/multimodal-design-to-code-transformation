<template>
  <div class="flex w-fit flex-col bg-white p-6">
    <div class="flex w-[80px] flex-col gap-1">
      <label for="option1" class="flex h-[18px] cursor-pointer items-center gap-[7px] whitespace-nowrap text-sm text-slate-700">
        <RadioButton v-model="selectedOption" input-id="option1" name="options" value="Option1" />
        <span>Option1</span>
      </label>

      <Divider class="!my-0" />

      <label for="option2" class="flex h-[18px] cursor-pointer items-center gap-[7px] whitespace-nowrap text-sm text-slate-700">
        <RadioButton v-model="selectedOption" input-id="option2" name="options" value="Option2" />
        <span>Option2</span>
      </label>

      <Divider class="!my-0" />

      <label for="option3" class="flex h-[18px] cursor-pointer items-center gap-[7px] whitespace-nowrap text-sm text-slate-700">
        <RadioButton v-model="selectedOption" input-id="option3" name="options" value="Option3" />
        <span>Option3</span>
      </label>

      <Divider class="!my-0" />

      <label for="option4" class="flex h-[18px] cursor-pointer items-center gap-[7px] whitespace-nowrap text-sm text-slate-700">
        <RadioButton v-model="selectedOption" input-id="option4" name="options" value="Option4" />
        <span>Option4</span>
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Divider from 'primevue/divider'
import RadioButton from 'primevue/radiobutton'

const selectedOption = ref('Option1')
</script>