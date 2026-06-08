<template>
  <div class="flex flex-col gap-6">
    <Password
      v-model="form.password"
      placeholder="Passwort eingeben"
      :toggleMask="true"
      :feedback="false"
    />
    <Button label="Anmelden" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Password from 'primevue/password'
import Button from 'primevue/button'

const form = reactive({
  password: ''
})
</script>