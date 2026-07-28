<template>
  <div class="flex w-[216px] flex-col gap-6">
    <Password
      v-model="password"
      placeholder="Passwort eingeben"
      :feedback="false"
      toggle-mask
      fluid
      input-class="!h-[33px] !text-sm"
    />
    <Button
      label="Anmelden"
      fluid
      class="!h-[33px] !border-0 !bg-emerald-500 !text-sm hover:!bg-emerald-600"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Password from 'primevue/password'

const password = ref('')
</script>