<template>
  <div class="flex flex-col gap-6 w-[216px]">
    <Password 
      v-model="passwordValue" 
      placeholder="Passwort eingeben" 
      :feedback="false" 
      toggleMask 
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

const passwordValue = ref('password');
</script>