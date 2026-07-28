<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50 p-4">
    <Card class="w-full max-w-md shadow-xl overflow-hidden rounded-xl">
      <template #header>
        <div class="h-48 bg-gradient-to-br from-green-900 via-green-950 to-black relative overflow-hidden">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-green-500/20 blur-2xl"></div>
          <div class="absolute bottom-0 right-8 w-32 h-32 rounded-full bg-green-400/30 blur-xl"></div>
          <div class="absolute top-4 left-8 w-24 h-24 rounded-full bg-green-300/10 blur-lg"></div>
        </div>
      </template>
      <template #title>
        <div class="text-xl font-semibold text-gray-800">Anmelden</div>
      </template>
      <template #subtitle>
        <div class="text-gray-500 text-sm">Melde dich mit deiner E-Mail-Adresse und Passwort an.</div>
      </template>
      <template #content>
        <div class="flex flex-col gap-4 pt-2">
          <div class="flex flex-col gap-1.5">
            <label for="email" class="text-sm font-medium text-gray-700">E-Mail-Adresse</label>
            <InputText id="email" v-model="email" type="email" class="w-full" />
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="password" class="text-sm font-medium text-gray-700">Passwort</label>
            <Password id="password" v-model="password" :toggleMask="true" :feedback="false" :fluid="true" />
          </div>
          <div class="flex items-center gap-2 mt-1">
            <Checkbox v-model="rememberMe" :binary="true" inputId="remember" />
            <label for="remember" class="text-sm text-gray-700 cursor-pointer">Angemeldet bleiben</label>
          </div>
          <div class="flex items-center gap-3 mt-2">
            <Button label="Save" severity="secondary" />
            <Button label="Anmelden" icon="pi pi-lock" severity="success" rounded />
          </div>
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