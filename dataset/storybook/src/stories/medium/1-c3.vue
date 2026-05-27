<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <Card class="w-full max-w-[540px] overflow-hidden rounded-2xl shadow-sm">
      <template #header>
        <img
          src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80"
          alt="Login Header"
          class="w-full h-[170px] object-cover"
        />
      </template>

      <template #content>
        <div class="flex flex-col gap-5 p-1">
          <div class="flex flex-col gap-2">
            <h2 class="text-3xl font-semibold text-slate-700">Anmelden</h2>
            <p class="text-xl text-slate-500">Melde dich mit deiner E-Mail-Adresse und Passwort an.</p>
          </div>

          <div class="flex flex-col gap-2">
            <label for="email" class="text-2xl text-slate-700">E-Mail-Adresse</label>
            <InputText id="email" v-model="form.email" fluid class="h-12" />
          </div>

          <div class="flex flex-col gap-2">
            <label for="password" class="text-2xl text-slate-700">Passwort</label>
            <Password
              id="password"
              v-model="form.password"
              :feedback="false"
              toggleMask
              fluid
              inputClass="h-12 w-full"
            />
          </div>

          <div class="flex items-center gap-3">
            <Checkbox inputId="stayLoggedIn" v-model="form.stayLoggedIn" binary />
            <label for="stayLoggedIn" class="text-2xl text-slate-700">Angemeldet bleiben</label>
          </div>

          <div class="flex items-center gap-3 pt-1">
            <Button
              label="Save"
              severity="secondary"
              rounded
              class="px-5"
            />
            <Button
              label="Anmelden"
              icon="pi pi-lock"
              rounded
              class="px-6"
            />
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
  stayLoggedIn: false
})
</script>