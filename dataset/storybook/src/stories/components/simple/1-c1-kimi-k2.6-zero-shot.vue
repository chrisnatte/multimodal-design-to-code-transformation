<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
    <div class="w-full max-w-[320px] flex flex-col gap-4">
      <Password
        v-model="password"
        :feedback="false"
        toggleMask
        inputClass="w-full"
        class="w-full"
      />
      <Button
        label="Anmelden"
        class="w-full"
        severity="success"
        @click="handleLogin"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Password from 'primevue/password'
import Button from 'primevue/button'

const password = ref('')

const handleLogin = () => {
  console.log('Login attempted')
}
</script>