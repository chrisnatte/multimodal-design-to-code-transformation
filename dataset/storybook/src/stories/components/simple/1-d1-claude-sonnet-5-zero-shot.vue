<template>
  <div class="flex flex-col gap-6 w-full max-w-xs">
    <Password
      v-model="password"
      placeholder="Passwort eingeben"
      :feedback="false"
      toggleMask
      inputClass="w-full"
      class="w-full"
    />
    <Button label="Anmelden" severity="primary" class="w-full" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Password from 'primevue/password'
import Button from 'primevue/button'

const password = ref('')
</script>