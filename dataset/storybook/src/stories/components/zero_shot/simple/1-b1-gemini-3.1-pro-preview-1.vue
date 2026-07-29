<template>
  <div class="flex flex-col p-6 bg-white">
    <div class="flex flex-col gap-6 w-full">
      <Password 
        v-model="passwordValue" 
        placeholder="Passwort eingeben" 
        :toggleMask="true" 
        :feedback="false"
        class="w-full" 
        inputClass="w-full" 
      />
      <Button 
        label="Anmelden" 
        severity="primary" 
        class="w-full" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Password from 'primevue/password';
import Button from 'primevue/button';

const passwordValue = ref('');
</script>