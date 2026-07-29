<template>
  <div class="flex w-[264px] flex-col gap-6 bg-white p-6">
    <Password
      v-model="password"
      toggle-mask
      :feedback="false"
      placeholder="********"
      fluid
    />
    <Button label="Anmelden" fluid />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Button from 'primevue/button'
  import Password from 'primevue/password'

  const password = ref('')
</script>