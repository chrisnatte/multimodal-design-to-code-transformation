<template>
  <div class="flex w-[264px] flex-col bg-white p-6">
    <div class="flex w-full flex-col gap-6">
      <Password
        v-model="password"
        input-id="password"
        placeholder="Passwort eingeben"
        :feedback="false"
        toggle-mask
        fluid
        input-class="text-sm"
      />
      <Button label="Anmelden" class="w-full" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Password from 'primevue/password'

const password = ref('')
</script>