<template>
  <div class="flex flex-col gap-6 w-full">
    <div class="flex items-center gap-2.5 px-2.5 py-2 rounded-md w-full">
      <Password
        v-model="form.password"
        placeholder="Passwort eingeben"
        :feedback="false"
        :toggleMask="true"
        fluid
      />
    </div>

    <Button
      label="Anmelden"
      :disabled="false"
      severity="primary"
    />
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