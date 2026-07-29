<template>
  <div class="w-[264px] p-6 bg-white">
    <div class="flex flex-col gap-6 w-full">
      <Password
        v-model="password"
        placeholder="Passwort eingeben"
        toggle-mask
        :feedback="false"
        input-class="w-full"
        fluid
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