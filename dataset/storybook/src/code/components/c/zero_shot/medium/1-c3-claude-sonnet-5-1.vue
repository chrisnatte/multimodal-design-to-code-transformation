<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100 p-4">
    <Card class="w-full max-w-md overflow-hidden shadow-md">
      <template #header>
        <div class="relative h-40 bg-gradient-to-br from-black via-green-950 to-green-900 overflow-hidden">
          <div class="absolute -top-6 left-8 w-40 h-40 rounded-full bg-gradient-to-br from-green-600 to-green-900 flex items-center justify-center shadow-lg">
            <i class="pi pi-box text-teal-300 text-5xl"></i>
          </div>
          <div class="absolute -bottom-10 right-0 w-28 h-28 rounded-full bg-gradient-to-br from-green-600 to-green-900"></div>
        </div>
      </template>
      <template #title>
        <span class="text-xl font-semibold">Anmelden</span>
      </template>
      <template #subtitle>
        <span class="text-sm text-gray-500">Melde dich mit deiner E-Mail-Adresse und Passwort an.</span>
      </template>
      <template #content>
        <div class="flex flex-col gap-4 mt-2">
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm text-gray-700">E-Mail-Adresse</label>
            <InputText id="email" v-model="email" type="text" class="w-full" />
          </div>

          <div class="flex flex-col gap-2">
            <label for="password" class="text-sm text-gray-700">Passwort</label>
            <Password
              id="password"
              v-model="password"
              :feedback="false"
              toggleMask
              inputClass="w-full"
              class="w-full"
            />
          </div>

          <div class="flex items-center gap-2 mt-1">
            <Checkbox v-model="rememberMe" binary inputId="remember" />
            <label for="remember" class="text-sm text-gray-700">Angemeldet bleiben</label>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex gap-3 mt-4">
          <Button label="Save" severity="secondary" outlined />
          <Button label="Anmelden" icon="pi pi-lock" severity="success" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const email = ref('');
const password = ref('');
const rememberMe = ref(false);
</script>