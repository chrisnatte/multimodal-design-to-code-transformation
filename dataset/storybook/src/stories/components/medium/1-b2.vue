<template>
  <div class="flex flex-col gap-2 bg-white rounded-xl p-0 w-fit">
    <div class="flex flex-col gap-2.5 p-2.5"></div>

    <Card class="rounded-md">
      <template #content>
        <div class="flex flex-col gap-6 p-4">
          <div class="flex flex-col gap-2">
            <span class="text-[17.5px] font-medium">Anmelden</span>
            <span class="text-sm font-normal">Melde dich mit deiner E-Mail-Adresse und Passwort an.</span>
          </div>

          <div class="flex flex-col gap-3">
            <div class="flex flex-col gap-2">
              <label for="email" class="text-sm font-normal">E-Mail-Adresse</label>
              <InputText id="email" v-model="form.email" type="text" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="password" class="text-sm font-normal">Passwort</label>
              <Password
                inputId="password"
                v-model="form.password"
                :feedback="false"
                toggleMask
              />
            </div>

            <div class="flex items-center gap-2">
              <Checkbox inputId="remember" v-model="form.remember" binary />
              <label for="remember" class="text-sm font-normal">Angemeldet bleiben</label>
            </div>
          </div>

          <div class="flex gap-2">
            <Button label="Abbrechen" severity="secondary" rounded />
            <Button label="Anmelden" icon="pi pi-lock-open" rounded />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'

const form = reactive({
  email: '',
  password: '',
  remember: false
})
</script>