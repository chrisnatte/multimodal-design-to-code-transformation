<template>
  <div class="w-fit bg-white p-6">
    <div class="flex w-fit flex-col gap-1">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="option1" value="Option1" name="options" />
        <label for="option1">Option1</label>
      </div>
      <Divider />
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="option2" value="Option2" name="options" />
        <label for="option2">Option2</label>
      </div>
      <Divider />
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="option3" value="Option3" name="options" />
        <label for="option3">Option3</label>
      </div>
      <Divider />
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="option4" value="Option4" name="options" />
        <label for="option4">Option4</label>
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