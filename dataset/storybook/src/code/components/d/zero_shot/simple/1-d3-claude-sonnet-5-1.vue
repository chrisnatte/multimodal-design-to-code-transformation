<template>
  <div class="bg-white p-6">
    <div class="flex flex-col gap-6 w-full">
      <Password
        v-model="password"
        placeholder="Passwort eingeben"
        :feedback="false"
        toggleMask
        fluid
      />
      <Button label="Anmelden" severity="primary" @click="handleLogin" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Password from 'primevue/password';
import Button from 'primevue/button';

const password = ref('');

const handleLogin = () => {
  console.log('Login clicked', password.value);
};
</script>