<template>
  <div class="w-[264px] bg-white p-6">
    <div class="flex w-full flex-col gap-6">
      <Password
        v-model="password"
        toggle-mask
        placeholder="Passwort eingeben"
        input-class="w-full"
        class="w-full"
      />
      <Button label="Anmelden" severity="success" class="w-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Password from 'primevue/password'
  import Button from 'primevue/button'

  const password = ref('')
</script>