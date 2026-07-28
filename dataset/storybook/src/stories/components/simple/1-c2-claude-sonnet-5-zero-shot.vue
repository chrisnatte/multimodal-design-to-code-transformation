<template>
  <div class="flex flex-col gap-4 p-4 w-80">
    <Password
      v-model="password"
      :feedback="false"
      toggleMask
      placeholder="Password"
      inputClass="w-full"
      fluid
    />
    <Button
      label="Anmelden"
      severity="success"
      class="w-full"
      @click="login"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Password from 'primevue/password';
import Button from 'primevue/button';

const password = ref('');

const login = () => {
  console.log('Login clicked', password.value);
};
</script>