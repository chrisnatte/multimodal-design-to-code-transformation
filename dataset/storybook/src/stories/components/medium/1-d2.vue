<template>
  <div class="min-h-screen bg-gray-100 p-6 flex items-start justify-center">
    <Card class="w-full max-w-[540px] rounded-xl overflow-hidden shadow-sm border border-gray-200">
      <template #header>
        <div class="p-0">
          <img
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1200&q=80"
            alt="Login Header"
            class="w-full h-[170px] object-cover"
          />
        </div>
      </template>

      <template #content>
        <div class="flex flex-col gap-6 p-2">
          <div class="flex flex-col gap-2">
            <h2 class="text-[34px] leading-none font-medium text-slate-700">Anmelden</h2>
            <p class="text-[28px] leading-tight text-slate-500">
              Melde dich mit deiner E-Mail-Adresse und Passwort an.
            </p>
          </div>

          <div class="flex flex-col gap-3">
            <div class="flex flex-col gap-2">
              <label for="email" class="text-[28px] text-slate-700">E-Mail-Adresse</label>
              <InputText
                id="email"
                v-model="form.email"
                type="email"
                class="w-full"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="password" class="text-[28px] text-slate-700">Passwort</label>
              <Password
                id="password"
                v-model="form.password"
                :feedback="false"
                toggleMask
                fluid
              />
            </div>

            <div class="flex items-center gap-3">
              <Checkbox v-model="form.remember" inputId="remember" binary />
              <label for="remember" class="text-[28px] text-slate-700 cursor-pointer">Angemeldet bleiben</label>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <Button
              label="Save"
              severity="secondary"
              rounded
              @click="onSave"
            />
            <Button
              label="Anmelden"
              icon="pi pi-lock"
              rounded
              @click="onLogin"
            />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const form = reactive({
  email: '',
  password: '',
  remember: false
});

const onSave = () => {};
const onLogin = () => {};
</script>