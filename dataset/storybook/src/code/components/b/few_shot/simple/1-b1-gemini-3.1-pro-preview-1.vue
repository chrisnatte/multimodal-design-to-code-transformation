<template>
  <div class="flex w-[264px] flex-col bg-white p-6">
    <div class="flex w-full flex-col gap-6">
      <Password
        v-model="password"
        placeholder="Passwort eingeben"
        toggle-mask
        class="w-full"
        input-class="w-full"
      />
      <Button label="Anmelden" severity="primary" class="w-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Password from 'primevue/password'
  import Button from 'primevue/button'

  const password = ref('')
</script>