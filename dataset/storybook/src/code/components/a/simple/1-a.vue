<template>
  <div class="flex flex-col gap-6">
    <Password
      v-model="_state.n10_4744"
      placeholder="Passwort eingeben"
      :toggleMask="true"
     />
    <Button label="Anmelden" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Password from 'primevue/password'

const _state = reactive({ n10_4744: null })
</script>
