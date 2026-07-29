<template>
  <div class="flex w-[264px] flex-col gap-6 bg-white p-6">
    <Password
      v-model="password"
      placeholder="Passwort eingeben"
      toggle-mask
      :feedback="false"
      input-class="w-full"
      class="w-full"
    />
    <Button label="Anmelden" severity="primary" class="w-full" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Password from 'primevue/password'
  import Button from 'primevue/button'

  const password = ref('')
</script>