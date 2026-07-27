<template>
  <div class="flex w-[216px] flex-col gap-6">
    <Password
      v-model="password"
      input-id="password"
      placeholder="Passwort eingeben"
      :feedback="false"
      toggle-mask
      fluid
      input-class="w-full !text-sm"
      aria-label="Passwort eingeben"
    />
    <Button label="Anmelden" type="button" fluid />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Password from 'primevue/password';

const password = ref('');
</script>