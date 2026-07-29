<template>
  <div class="flex w-[264px] flex-col bg-white px-6 py-6">
    <div class="flex flex-col gap-6">
      <Password
        v-model="password"
        input-id="password"
        placeholder="Passwort eingeben"
        :feedback="false"
        toggle-mask
        fluid
        input-class="!h-[33px] !text-sm"
      />
      <Button label="Anmelden" severity="primary" fluid class="!h-[33px] !text-sm" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Password from 'primevue/password'

const password = ref('')
</script>