<template>
  <div class="flex flex-col gap-6 w-full">
    <Password
      v-model="form.password"
      placeholder="Passwort eingeben"
      toggleMask
      :feedback="false"
      fluid
    />
    <Button label="Anmelden" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Password from 'primevue/password'

const form = reactive({
  password: ''
})
</script>