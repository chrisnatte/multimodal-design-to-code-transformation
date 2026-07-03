<template>
  <div class="min-h-screen bg-neutral-100 flex items-center justify-center">
    <div class="w-[265px] bg-neutral-100 px-6 py-6">
      <div class="flex flex-col gap-6">
        <Password
          v-model="form.password"
          :feedback="false"
          toggleMask
          :inputClass="'w-full'"
          placeholder="********"
          aria-label="Passwort"
        />
        <Button
          label="Anmelden"
          class="w-full"
          severity="success"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Button from 'primevue/button';
import Password from 'primevue/password';

const form = reactive({
  password: '********'
});
</script>