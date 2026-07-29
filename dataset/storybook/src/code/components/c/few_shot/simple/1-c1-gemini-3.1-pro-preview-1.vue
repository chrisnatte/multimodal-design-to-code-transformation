<template>
  <div class="flex w-80 flex-col gap-6 p-4">
    <Password
      v-model="password"
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

  const password = ref('password')
</script>