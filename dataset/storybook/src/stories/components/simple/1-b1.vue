<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-col gap-2">
      <Password
        v-model="form.password"
        placeholder="Passwort eingeben"
        :feedback="false"
        toggleMask
        :disabled="false"
        class="w-full"
      />
    </div>
    <Button
      label="Anmelden"
      severity="primary"
      :disabled="false"
    />
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