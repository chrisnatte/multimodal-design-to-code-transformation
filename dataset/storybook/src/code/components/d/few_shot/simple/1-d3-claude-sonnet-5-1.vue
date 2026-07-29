<template>
  <div class="w-[264px] bg-white p-6">
    <div class="flex flex-col gap-6">
      <Password
        v-model="password"
        placeholder="Passwort eingeben"
        toggle-mask
        :feedback="false"
        input-class="w-full"
        fluid
      />
      <Button label="Anmelden" severity="primary" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Password from 'primevue/password'
  import Button from 'primevue/button'

  const password = ref('')
</script>