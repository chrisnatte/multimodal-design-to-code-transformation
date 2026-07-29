<template>
  <div class="flex flex-col bg-white p-6 w-fit">
    <div class="flex flex-col gap-1">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="option1" value="Option1" />
        <label for="option1" class="text-sm text-surface-700">Option1</label>
      </div>
      <Divider class="!my-1" />
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="option2" value="Option2" />
        <label for="option2" class="text-sm text-surface-700">Option2</label>
      </div>
      <Divider class="!my-1" />
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="option3" value="Option3" />
        <label for="option3" class="text-sm text-surface-700">Option3</label>
      </div>
      <Divider class="!my-1" />
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="option4" value="Option4" />
        <label for="option4" class="text-sm text-surface-700">Option4</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import RadioButton from 'primevue/radiobutton'
  import Divider from 'primevue/divider'

  const selectedOption = ref('Option1')
</script>