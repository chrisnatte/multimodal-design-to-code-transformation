<template>
  <div class="min-h-screen bg-gray-100 p-6 flex items-start justify-center">
    <Card class="w-full max-w-[560px] rounded-xl overflow-hidden shadow-sm border border-gray-200">
      <template #content>
        <div class="flex flex-col gap-2">
          <div class="p-0">
            <img
              src="https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&w=1200&q=80"
              alt="Header"
              class="w-full h-[180px] object-cover rounded-t-xl"
            />
          </div>

          <div class="flex flex-col gap-6 p-5">
            <div class="flex flex-col gap-2">
              <h2 class="text-[34px] leading-none font-medium text-slate-700">Anmelden</h2>
              <p class="text-[28px] text-slate-500 leading-tight">
                Melde dich mit deiner E-Mail-Adresse und Passwort an.
              </p>
            </div>

            <div class="flex flex-col gap-3">
              <div class="flex flex-col gap-2">
                <label for="email" class="text-[28px] text-slate-600">E-Mail-Adresse</label>
                <InputText
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="w-full h-12"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label for="password" class="text-[28px] text-slate-600">Passwort</label>
                <Password
                  id="password"
                  v-model="form.password"
                  :feedback="false"
                  toggleMask
                  fluid
                  inputClass="w-full h-12"
                />
              </div>

              <div class="flex items-center gap-2 mt-1">
                <Checkbox
                  inputId="remember"
                  v-model="form.remember"
                  binary
                />
                <label for="remember" class="text-[28px] text-slate-600">Angemeldet bleiben</label>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <Button
                label="Save"
                severity="secondary"
                rounded
                class="px-4"
              />
              <Button
                label="Anmelden"
                icon="pi pi-lock"
                rounded
                class="px-4"
              />
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