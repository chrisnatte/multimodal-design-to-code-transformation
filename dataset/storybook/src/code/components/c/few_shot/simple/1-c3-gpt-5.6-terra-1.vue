<template>
  <div class="flex w-[216px] flex-col gap-6 p-6">
    <Password
      v-model="password"
      input-id="password"
      :feedback="false"
      toggle-mask
      fluid
      size="small"
    />
    <Button label="Anmelden" severity="success" size="small" fluid />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Password from 'primevue/password'

const password = ref('password')
</script>