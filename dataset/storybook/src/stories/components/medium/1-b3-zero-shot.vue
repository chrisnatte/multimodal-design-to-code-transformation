<template>
  <div class="flex flex-col gap-2 rounded-xl bg-white">
    <Card class="rounded-xl">
      <template #content>
        <div class="flex flex-col gap-2">
          <div class="flex flex-col gap-2 p-2"></div>

          <div class="flex flex-col gap-6 rounded-md p-4">
            <div class="flex flex-col gap-2">
              <span class="text-[17.5px] font-medium">Anmelden</span>
              <span class="text-sm font-normal">Melde dich mit deiner E-Mail-Adresse und Passwort an.</span>
            </div>

            <div class="flex flex-col gap-3">
              <div class="flex flex-col gap-2">
                <label class="text-sm font-normal">E-Mail-Adresse</label>
                <InputText v-model="form.email" type="text" fluid />
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-sm font-normal">Passwort</label>
                <Password v-model="form.password" :feedback="false" toggleMask fluid />
              </div>

              <div class="flex items-center gap-2">
                <Checkbox v-model="form.remember" binary inputId="remember" />
                <label for="remember" class="text-sm font-normal">Angemeldet bleiben</label>
              </div>
            </div>

            <div class="flex gap-2">
              <Button label="Abbrechen" severity="secondary" rounded class="flex-1" />
              <Button label="Anmelden" icon="pi pi-lock" rounded class="flex-1" />
            </div>
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