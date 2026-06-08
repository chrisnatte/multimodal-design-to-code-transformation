<template>
  <div class="flex flex-col gap-6 w-full">
    <div class="w-full">
      <Password
        v-model="form.password"
        placeholder="Passwort eingeben"
        :feedback="false"
        toggleMask
        class="w-full"
      />
    </div>
    <Button label="Anmelden" severity="primary" />
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