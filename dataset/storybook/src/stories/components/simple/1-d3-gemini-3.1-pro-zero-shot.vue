<template>
  <div class="flex flex-col gap-6 w-[216px]">
    <Password
      v-model="passwordValue"
      :feedback="false"
      toggleMask
      fluid
      placeholder="Passwort eingeben"
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

// Pre-fill with generic password to match the masked dots shown in the screenshot
const passwordValue = ref('password');
</script>