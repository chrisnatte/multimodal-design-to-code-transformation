<template>
  <div class="flex w-full max-w-[264px] flex-col gap-6 p-6">
    <Password
      v-model="password"
      toggle-mask
      :feedback="false"
      class="w-full"
      input-class="w-full"
    />
    <Button label="Anmelden" severity="primary" class="w-full" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Password from 'primevue/password'
  import Button from 'primevue/button'

  const password = ref('password')
</script>