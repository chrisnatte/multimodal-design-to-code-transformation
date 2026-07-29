<template>
  <div class="flex flex-col gap-6 p-4 w-full max-w-xs mx-auto">
    <Password
      v-model="password"
      toggleMask
      :feedback="false"
      fluid
    />
    <Button
      label="Anmelden"
      severity="success"
      fluid
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Password from 'primevue/password';
import Button from 'primevue/button';

const password = ref('password123');
</script>