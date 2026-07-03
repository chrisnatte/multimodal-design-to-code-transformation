<template>
  <div class="flex w-fit flex-col">
    <div class="flex items-center gap-2">
      <RadioButton v-model="selected" input-id="option1" name="group" value="option1" />
      <label for="option1">Option 1</label>
    </div>

    <Divider type="solid" layout="horizontal" />

    <div class="flex items-center gap-2">
      <RadioButton v-model="selected" input-id="option2" name="group" value="option2" />
      <label for="option2">Option 2</label>
    </div>

    <Divider type="solid" layout="horizontal" />

    <div class="flex items-center gap-2">
      <RadioButton v-model="selected" input-id="option3" name="group" value="option3" />
      <label for="option3">Option 3</label>
    </div>

    <Divider type="solid" layout="horizontal" />

    <div class="flex items-center gap-2">
      <RadioButton v-model="selected" input-id="option4" name="group" value="option4" />
      <label for="option4">Option 4</label>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Divider from 'primevue/divider'
  import RadioButton from 'primevue/radiobutton'

  const selected = ref('option1')
</script>
