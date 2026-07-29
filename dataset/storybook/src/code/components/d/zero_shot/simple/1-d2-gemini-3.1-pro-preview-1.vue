<template>
  <div class="flex flex-col p-6 gap-6 w-[264px] bg-white">
    <Password
      v-model="passwordValue"
      toggleMask
      :feedback="false"
      fluid
      placeholder="Passwort eingeben"
    />
    <Button 
      label="Anmelden" 
      fluid 
      class="!bg-[#10b981] !border-[#10b981] hover:!bg-[#0ea5e9] hover:!border-[#0ea5e9]" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Password from 'primevue/password'
import Button from 'primevue/button'

const passwordValue = ref('password')
</script>