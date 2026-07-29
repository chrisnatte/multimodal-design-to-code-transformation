<template>
  <div class="bg-white p-6 w-[264px]">
    <div class="flex flex-col gap-6 w-full">
      <Password
        v-model="password"
        placeholder="Passwort eingeben"
        :feedback="false"
        toggleMask
        class="w-full"
        inputClass="w-full"
      />
      <Button label="Anmelden" severity="primary" class="w-full" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Password from 'primevue/password'
import Button from 'primevue/button'

const password = ref('')
</script>