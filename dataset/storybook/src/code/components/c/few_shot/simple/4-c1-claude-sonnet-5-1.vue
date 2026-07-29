<template>
  <div class="flex flex-col gap-3 p-4">
    <div v-for="option in options" :key="option" class="flex items-center gap-2">
      <RadioButton v-model="selected" :input-id="option" :value="option" />
      <label :for="option">{{ option }}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import RadioButton from 'primevue/radiobutton'

  const options = ['Option1', 'Option2', 'Option3', 'Option4']
  const selected = ref('Option1')
</script>