<template>
  <div class="flex w-[264px] flex-col bg-white p-6">
    <div class="flex w-full flex-col gap-6">
      <Password
        v-model="password"
        placeholder="Passwort eingeben"
        toggleMask
        class="w-full"
        inputClass="w-full"
      />
      <Button
        label="Anmelden"
        class="w-full"
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

const handleLogin = () => {}
</script>