<template>
  <div class="w-[264px] h-[138px] bg-white flex flex-col gap-6 px-6 py-6">
    <Password
      v-model="form.password"
      :feedback="false"
      toggleMask
      fluid
      :inputProps="{ autocomplete: 'current-password' }"
      inputClass="text-sm"
    />
    <Button
      label="Anmelden"
      fluid
      class="!bg-emerald-500 !border-emerald-500 hover:!bg-emerald-600 hover:!border-emerald-600 !text-white !rounded-md !py-2"
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