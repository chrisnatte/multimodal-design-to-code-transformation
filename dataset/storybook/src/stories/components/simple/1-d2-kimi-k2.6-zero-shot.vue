<template>
  <div class="flex flex-col gap-6 w-[216px]">
    <Password
      v-model="password"
      toggleMask
      :feedback="false"
      placeholder="Passwort eingeben"
      fluid
    />
    <Button label="Anmelden" severity="primary" fluid />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Password from 'primevue/password';
import Button from 'primevue/button';

const password = ref('');
</script>