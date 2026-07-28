<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-4">
    <div class="w-full max-w-xs flex flex-col gap-4">
      <Password v-model="password" :feedback="false" toggleMask fluid />
      <Button label="Anmelden" severity="success" fluid />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Password from 'primevue/password';
import Button from 'primevue/button';

const password = ref('');
</script>