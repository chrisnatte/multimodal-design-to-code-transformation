<template>
  <div class="flex flex-col gap-6 w-full">
    <Password
      v-model="password"
      placeholder="Passwort eingeben"
      toggleMask
      :feedback="false"
      variant="outlined"
      fluid
    />
    <Button
      label="Anmelden"
      fluid
      class="!bg-emerald-500 !border-emerald-500 text-white"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Password from 'primevue/password';
import Button from 'primevue/button';

const password = ref('');
</script>