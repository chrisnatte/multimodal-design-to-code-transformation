<template>
  <div class="flex w-[216px] flex-col gap-6">
    <Password
      v-model="password"
      placeholder="Passwort eingeben"
      toggleMask
      :feedback="false"
      class="w-full"
      inputClass="w-full"
    />
    <Button
      label="Anmelden"
      class="w-full"
      @click="handleLogin"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Password from 'primevue/password'
import Button from 'primevue/button'

const password = ref('')

const handleLogin = () => {}
</script>