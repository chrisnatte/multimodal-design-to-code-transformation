<template>
  <div class="flex flex-col gap-6 w-[216px]">
    <Password 
      v-model="password" 
      toggleMask 
      :feedback="false" 
      class="w-full [&>input]:w-full"
      inputClass="w-full"
    />
    <Button 
      label="Anmelden" 
      class="w-full !bg-[#10b981] !border-[#10b981]" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Password from 'primevue/password';
import Button from 'primevue/button';

const password = ref('mypassword');
</script>