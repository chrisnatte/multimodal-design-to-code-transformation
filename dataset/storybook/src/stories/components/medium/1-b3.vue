<template>
  <div class="flex flex-col gap-2 p-0">
    <Card class="rounded-xl">
      <template #content>
        <div class="flex flex-col gap-6 rounded-md p-4">
          <div class="flex flex-col gap-2">
            <span class="text-[18px] font-medium">Anmelden</span>
            <span class="text-sm font-normal">Melde dich mit deiner E-Mail-Adresse und Passwort an.</span>
          </div>

          <div class="flex flex-col gap-3">
            <div class="flex flex-col gap-2">
              <label for="email" class="text-sm font-normal">E-Mail-Adresse</label>
              <InputText id="email" v-model="form.email" type="text" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="password" class="text-sm font-normal">Passwort</label>
              <Password id="password" v-model="form.password" :toggleMask="true" :feedback="false" />
            </div>

            <div class="flex items-center gap-2">
              <Checkbox v-model="form.remember" inputId="remember" binary />
              <label for="remember" class="text-sm font-normal">Angemeldet bleiben</label>
            </div>
          </div>

          <div class="flex gap-2">
            <Button label="Abbrechen" severity="secondary" rounded />
            <Button label="Anmelden" icon="pi pi-lock" rounded />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Card from 'primevue/card'
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