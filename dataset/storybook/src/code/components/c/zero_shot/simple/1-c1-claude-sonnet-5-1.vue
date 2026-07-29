<template>
  <div class="flex flex-col gap-4 p-4 w-full max-w-sm">
    <Password
      v-model="password"
      :feedback="false"
      toggleMask
      placeholder="Password"
      inputClass="w-full"
      class="w-full"
    />
    <Button label="Anmelden" class="w-full" severity="success" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Password from 'primevue/password'
import Button from 'primevue/button'

const password = ref('')
</script>