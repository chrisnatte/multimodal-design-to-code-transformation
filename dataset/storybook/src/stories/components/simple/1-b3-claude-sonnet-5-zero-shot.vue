<template>
  <div class="flex flex-col gap-6 w-[216px]">
    <Password
      v-model="password"
      placeholder="Passwort eingeben"
      toggleMask
      :feedback="false"
      class="w-full"
      inputClass="w-full"
      fluid
    />
    <Button label="Anmelden" severity="primary" class="w-full" @click="onSubmit" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Password from 'primevue/password'
import Button from 'primevue/button'

const password = ref('')

function onSubmit() {
  // handle login action
}
</script>