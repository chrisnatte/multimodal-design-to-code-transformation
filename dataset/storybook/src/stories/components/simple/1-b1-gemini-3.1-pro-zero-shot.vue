<template>
  <div class="flex flex-col gap-6 w-[216px]">
    <Password
      v-model="password"
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
</template>

<script setup>
import { ref } from 'vue'
import Password from 'primevue/password'
import Button from 'primevue/button'

const password = ref('')
</script>