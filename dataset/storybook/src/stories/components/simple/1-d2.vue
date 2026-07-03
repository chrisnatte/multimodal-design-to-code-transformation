<template>
  <div class="w-[264px] bg-[#f3f3f3] p-6">
    <div class="flex flex-col gap-6">
      <Password
        v-model="form.password"
        :feedback="false"
        toggleMask
        fluid
        placeholder="Passwort eingeben"
      />
      <Button
        label="Anmelden"
        fluid
        class="!bg-emerald-500 !border-emerald-500 hover:!bg-emerald-600 hover:!border-emerald-600"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Button from 'primevue/button';
import Password from 'primevue/password';

const form = reactive({
  password: '*******'
});
</script>