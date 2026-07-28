<template>
  <div class="flex min-h-[138px] w-[264px] flex-col px-6 pt-6">
    <InputText
      v-model="password"
      type="password"
      placeholder="********"
      class="w-full"
      :feedback="false"
    />
    <Button
      label="Anmelden"
      class="mt-6 w-full"
      severity="success"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const password = ref('')
</script>