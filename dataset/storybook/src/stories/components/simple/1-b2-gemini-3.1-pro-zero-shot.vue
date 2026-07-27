<template>
  <div class="flex flex-col gap-6">
    <Password
      v-model="password"
      toggleMask
      placeholder="Passwort eingeben"
      :feedback="false"
      fluid
    />
    <Button label="Anmelden" fluid />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Password from 'primevue/password'
import Button from 'primevue/button'

const password = ref('')
</script>