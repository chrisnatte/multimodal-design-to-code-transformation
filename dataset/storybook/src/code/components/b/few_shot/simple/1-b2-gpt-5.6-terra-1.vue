<template>
  <div class="w-[264px] bg-white p-6">
    <div class="flex flex-col gap-6">
      <Password
        v-model="password"
        input-id="password"
        placeholder="Passwort eingeben"
        toggle-mask
        :feedback="false"
        fluid
      />
      <Button
        label="Anmelden"
        type="button"
        fluid
        :dt="{
          primary: {
            background: '#10B982',
            hoverBackground: '#10B982',
            activeBackground: '#10B982',
            borderColor: '#10B982',
            hoverBorderColor: '#10B982',
            activeBorderColor: '#10B982'
          }
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Password from 'primevue/password'

const password = ref('')
</script>