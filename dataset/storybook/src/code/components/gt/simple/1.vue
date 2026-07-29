<template>
  <div class="flex w-64 flex-col gap-6">
    <Password
      v-model="password"
      size="normal"
      placeholder="Passwort eingeben"
      toggle-mask
      input-class="w-full"
    />
    
    <Button label="Anmelden" severity="primary" class="w-full" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Button from 'primevue/button'
  import Password from 'primevue/password'

  const password = ref('')
</script>
