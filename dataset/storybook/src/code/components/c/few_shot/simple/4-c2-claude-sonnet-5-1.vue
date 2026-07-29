<template>
  <div class="flex flex-col gap-3 p-4">
    <div class="flex items-center gap-2">
      <RadioButton v-model="selected" input-id="option1" name="options" value="Option1" />
      <label for="option1">Option1</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton v-model="selected" input-id="option2" name="options" value="Option2" />
      <label for="option2">Option2</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton v-model="selected" input-id="option3" name="options" value="Option3" />
      <label for="option3">Option3</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton v-model="selected" input-id="option4" name="options" value="Option4" />
      <label for="option4">Option4</label>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import RadioButton from 'primevue/radiobutton'

  const selected = ref('Option1')
</script>