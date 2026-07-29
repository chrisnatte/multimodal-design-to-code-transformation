<template>
  <div class="flex flex-col p-6 bg-white" style="width:264px;">
    <div class="flex flex-col gap-6 w-full">
      <Password
        v-model="password"
        placeholder="Passwort eingeben"
        toggleMask
        :feedback="false"
        class="w-full"
        inputClass="w-full"
        fluid
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