<template>
  <div class="flex flex-col gap-2 rounded-xl bg-white">
    <div class="flex flex-col gap-2.5 p-2.5"></div>

    <div class="flex flex-col gap-6 rounded-md p-4">
      <div class="flex flex-col gap-2">
        <h2 class="text-[17.5px] font-medium">Anmelden</h2>
        <p class="text-sm font-normal">Melde dich mit deiner E-Mail-Adresse und Passwort an.</p>
      </div>

      <div class="flex flex-col gap-3">
        <div class="flex flex-col gap-1">
          <label class="text-sm font-normal">E-Mail-Adresse</label>
          <InputText v-model="form.email" placeholder="Placeholder" />
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-sm font-normal">Passwort</label>
          <Password v-model="form.password" :feedback="false" toggleMask />
        </div>

        <div class="flex items-center gap-2">
          <Checkbox v-model="form.remember" binary inputId="remember" />
          <label for="remember" class="text-sm font-normal">Angemeldet bleiben</label>
        </div>
      </div>

      <div class="flex gap-2">
        <Button label="Abbrechen" severity="secondary" rounded />
        <Button label="Anmelden" rounded icon="pi pi-lock" iconPos="left" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const form = reactive({
  email: '',
  password: '',
  remember: false
})
</script>