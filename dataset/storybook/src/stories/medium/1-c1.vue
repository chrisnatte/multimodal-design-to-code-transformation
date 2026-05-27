<template>
  <div class="min-h-screen bg-surface-100 flex items-start justify-center p-6">
    <Card class="w-full max-w-[540px] overflow-hidden rounded-2xl shadow-sm">
      <template #header>
        <img
          src="https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=1200&q=80"
          alt="Header"
          class="w-full h-44 object-cover"
        />
      </template>
      <template #content>
        <div class="flex flex-col gap-5 p-1">
          <div class="flex flex-col gap-2">
            <h1 class="text-3xl font-semibold text-surface-800">Anmelden</h1>
            <p class="text-surface-500 text-lg">Melde dich mit deiner E-Mail-Adresse und Passwort an.</p>
          </div>

          <div class="flex flex-col gap-2">
            <label for="email" class="text-surface-700 text-2xl">E-Mail-Adresse</label>
            <InputText id="email" v-model="form.email" class="w-full" />
          </div>

          <div class="flex flex-col gap-2">
            <label for="password" class="text-surface-700 text-2xl">Passwort</label>
            <Password
              id="password"
              v-model="form.password"
              :feedback="false"
              toggleMask
              class="w-full"
              inputClass="w-full"
            />
          </div>

          <div class="flex items-center gap-3">
            <Checkbox v-model="form.remember" inputId="remember" binary />
            <label for="remember" class="text-surface-700 text-2xl">Angemeldet bleiben</label>
          </div>

          <div class="flex items-center gap-3 pt-1">
            <Button label="Save" severity="secondary" rounded />
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