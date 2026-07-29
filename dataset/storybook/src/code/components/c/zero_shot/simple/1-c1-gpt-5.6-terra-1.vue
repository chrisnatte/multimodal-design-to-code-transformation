<template>
  <div class="flex min-h-[138px] flex-col px-6 pt-6">
    <InputText
      v-model="password"
      type="password"
      placeholder="********"
      class="w-full"
    />
    <Button
      label="Anmelden"
      class="mt-6 w-full"
      severity="success"
      @click="login"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

const password = ref('')

const login = () => {}
</script>