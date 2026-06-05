<template>
  <div class="min-h-screen bg-slate-100 p-6 flex items-start justify-center">
    <Card class="w-full max-w-[520px] overflow-hidden rounded-xl shadow-sm">
      <template #header>
        <div class="h-44 w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&w=1200&q=80"
            alt="Header"
            class="w-full h-full object-cover"
          />
        </div>
      </template>

      <template #content>
        <div class="flex flex-col gap-6 p-1">
          <div class="flex flex-col gap-2">
            <h2 class="text-[32px] leading-tight font-medium text-slate-700">Anmelden</h2>
            <p class="text-[28px] text-slate-500">Melde dich mit deiner E-Mail-Adresse und Passwort an.</p>
          </div>

          <div class="flex flex-col gap-3">
            <div class="flex flex-col gap-2">
              <label for="email" class="text-[28px] text-slate-700">E-Mail-Adresse</label>
              <InputText id="email" v-model="form.email" class="w-full" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="password" class="text-[28px] text-slate-700">Passwort</label>
              <Password
                id="password"
                v-model="form.password"
                :feedback="false"
                toggleMask
                class="w-full"
                inputClass="w-full"
              />
            </div>

            <div class="flex items-center gap-2 pt-1">
              <Checkbox v-model="form.remember" inputId="remember" binary />
              <label for="remember" class="text-[28px] text-slate-700">Angemeldet bleiben</label>
            </div>
          </div>

          <div class="flex items-center gap-2">
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