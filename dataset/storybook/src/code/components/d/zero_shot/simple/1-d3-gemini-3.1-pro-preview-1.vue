<template>
  <div class="p-6 bg-white flex flex-col w-[264px]">
    <div class="flex flex-col gap-6 w-full">
      <Password
        v-model="password"
        toggleMask
        :feedback="false"
        placeholder="Passwort eingeben"
        fluid
      />
      <Button 
        label="Anmelden" 
        fluid 
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Password from 'primevue/password'
import Button from 'primevue/button'

const password = ref('password')
</script>