<template>
  <div class="bg-white p-6">
    <div class="flex flex-col gap-6 w-full">
      <Password
        v-model="password"
        placeholder="Passwort eingeben"
        toggleMask
        :feedback="false"
        fluid
        inputClass="w-full"
      />
      <Button label="Anmelden" class="w-full" style="background-color:#10b981;border-color:#10b981" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Password from 'primevue/password';
import Button from 'primevue/button';

const password = ref('');
</script>