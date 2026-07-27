<template>
  <div class="flex flex-col gap-6 w-full">
    <Password
      v-model="password"
      placeholder="Passwort eingeben"
      :toggleMask="true"
      :feedback="false"
      fluid
    />
    <Button
      label="Anmelden"
      fluid
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Password from 'primevue/password';
import Button from 'primevue/button';

const password = ref('');
</script>