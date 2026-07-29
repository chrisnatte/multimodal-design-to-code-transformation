<template>
  <div class="flex flex-col gap-5 w-[280px] p-4">
    <Password
      v-model="password"
      toggleMask
      :feedback="false"
      class="w-full"
      inputClass="w-full"
    />
    <Button
      label="Anmelden"
      class="w-full !bg-[#1eb589] !border-[#1eb589] hover:!bg-[#189b75]"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Password from 'primevue/password';
import Button from 'primevue/button';

const password = ref('password123');
</script>