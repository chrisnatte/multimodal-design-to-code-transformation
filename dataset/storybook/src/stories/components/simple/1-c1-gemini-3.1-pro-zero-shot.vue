<template>
  <div class="flex flex-col gap-6 w-[320px]">
    <Password
      v-model="password"
      :feedback="false"
      toggleMask
      class="w-full"
      inputClass="w-full py-3 px-4 text-lg"
    />
    <Button
      label="Anmelden"
      class="w-full py-3 text-lg font-medium bg-[#1eb386] border-[#1eb386] hover:bg-[#189a73] hover:border-[#189a73]"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Password from 'primevue/password';
import Button from 'primevue/button';

const password = ref('password123');
</script>