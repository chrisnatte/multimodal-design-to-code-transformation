<template>
  <div class="flex w-fit flex-col gap-1 p-6">
    <div class="flex items-center gap-2 py-1">
      <RadioButton v-model="selectedOption" input-id="option1" name="option" value="Option1" />
      <label for="option1">Option1</label>
    </div>
    <Divider />
    <div class="flex items-center gap-2 py-1">
      <RadioButton v-model="selectedOption" input-id="option2" name="option" value="Option2" />
      <label for="option2">Option2</label>
    </div>
    <Divider />
    <div class="flex items-center gap-2 py-1">
      <RadioButton v-model="selectedOption" input-id="option3" name="option" value="Option3" />
      <label for="option3">Option3</label>
    </div>
    <Divider />
    <div class="flex items-center gap-2 py-1">
      <RadioButton v-model="selectedOption" input-id="option4" name="option" value="Option4" />
      <label for="option4">Option4</label>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import RadioButton from 'primevue/radiobutton'
  import Divider from 'primevue/divider'

  const selectedOption = ref('Option1')
</script>