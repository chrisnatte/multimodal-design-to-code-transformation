<template>
  <div class="flex w-[264px] flex-col bg-white p-6">
    <div class="flex w-full flex-col gap-6">
      <Password
        v-model="passwordValue"
        placeholder="Passwort eingeben"
        :feedback="false"
        toggle-mask
        fluid
      />
      <Button label="Anmelden" severity="primary" fluid />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Password from 'primevue/password'
  import Button from 'primevue/button'

  const passwordValue = ref('')
</script>