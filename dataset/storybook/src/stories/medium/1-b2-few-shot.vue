<template>
  <Card class="rounded-xl">
    <template #content>
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-2 p-2.5"></div>

        <div class="flex flex-col gap-6 p-4">
          <div class="flex flex-col gap-2">
            <h3 class="text-lg font-medium">Anmelden</h3>
            <span class="text-sm">Melde dich mit deiner E-Mail-Adresse und Passwort an.</span>
          </div>

          <div class="flex flex-col gap-3">
            <div class="flex flex-col gap-2">
              <label for="email" class="text-sm">E-Mail-Adresse</label>
              <InputText id="email" v-model="form.email" type="text" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="password" class="text-sm">Passwort</label>
              <Password id="password" v-model="form.password" :toggleMask="true" :feedback="false" />
            </div>

            <div class="flex items-center gap-2">
              <Checkbox id="remember" v-model="form.remember" binary />
              <label for="remember" class="text-sm">Angemeldet bleiben</label>
            </div>
          </div>

          <div class="flex gap-2">
            <Button label="Abbrechen" severity="secondary" rounded />
            <Button label="Anmelden" icon="pi pi-lock-open" rounded />
          </div>
        </div>
      </div>
    </template>
  </Card>
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