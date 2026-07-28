<template>
  <div class="flex w-[216px] flex-col gap-6">
    <Password
      v-model="password"
      placeholder="Passwort eingeben"
      toggleMask
      :feedback="false"
      class="w-full"
      inputClass="w-full"
    />
    <Button
      label="Anmelden"
      class="h-[33px] w-full !border-[#10b981] !bg-[#10b981] !py-0"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Password from 'primevue/password'

const password = ref('')
</script>