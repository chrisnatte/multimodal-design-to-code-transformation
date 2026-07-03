<template>
  <div class="flex flex-col gap-6 w-[216px]">
    <IconField>
      <Password
        v-model="form.password"
        :feedback="false"
        toggleMask
        placeholder="Passwort eingeben"
        inputClass="w-full"
        class="w-full"
      />
    </IconField>

    <Button label="Anmelden" class="w-full" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Password from 'primevue/password'
import Button from 'primevue/button'
import IconField from 'primevue/iconfield'

const form = reactive({
  password: '********'
})
</script>