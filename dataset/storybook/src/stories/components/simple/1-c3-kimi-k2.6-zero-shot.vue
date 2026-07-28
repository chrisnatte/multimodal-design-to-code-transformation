<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-4">
    <div class="flex flex-col gap-4 w-full max-w-xs">
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
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Password from 'primevue/password';
import Button from 'primevue/button';

const password = ref('');
</script>