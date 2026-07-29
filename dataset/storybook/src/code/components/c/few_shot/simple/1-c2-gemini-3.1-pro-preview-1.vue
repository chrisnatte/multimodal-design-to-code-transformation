<template>
  <div class="flex flex-col gap-6 w-80 p-4">
    <Password
      v-model="password"
      :feedback="false"
      toggleMask
      fluid
    />
    <Button
      label="Anmelden"
      severity="success"
      fluid
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Password from 'primevue/password'
import Button from 'primevue/button'

const password = ref('password')
</script>