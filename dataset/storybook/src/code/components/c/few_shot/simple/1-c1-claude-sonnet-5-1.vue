<template>
  <div class="flex w-64 flex-col gap-3">
    <Password v-model="password" toggle-mask :feedback="false" input-class="w-full" />
    <Button label="Anmelden" severity="primary" class="w-full" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Password from 'primevue/password'
  import Button from 'primevue/button'

  const password = ref('password')
</script>