<template>
  <div class="w-full max-w-[264px] bg-[#f5f5f5] p-6 flex flex-col gap-6">
    <Password
      v-model="form.password"
      placeholder="Passwort eingeben"
      :feedback="false"
      toggleMask
      fluid
      :inputClass="'text-sm'"
    />
    <Button
      label="Anmelden"
      fluid
      class="!bg-emerald-500 !border-emerald-500 !text-white !text-sm !font-medium !py-2.5"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Password from 'primevue/password'

const form = reactive({
  password: '********'
})
</script>