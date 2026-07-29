<template>
  <div class="p-6 bg-white flex flex-col w-[264px]">
    <div class="flex flex-col gap-6 w-full">
      <Password
        v-model="password"
        placeholder="********"
        :toggleMask="true"
        :feedback="false"
        class="w-full"
        inputClass="w-full"
      />
      <Button label="Anmelden" class="w-full" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Password from 'primevue/password';
import Button from 'primevue/button';

const password = ref('');
</script>