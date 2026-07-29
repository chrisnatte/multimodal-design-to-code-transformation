<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <Card class="w-[500px] overflow-hidden shadow-md">
      <template #header>
        <div class="relative h-44 bg-black overflow-hidden flex items-center justify-center">
          <img
            src="https://primefaces.org/cdn/primevue/images/usercard.png"
            alt="header graphic"
            class="w-full h-full object-cover opacity-80"
          />
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
            <InputText id="email" v-model="email" fluid />
          </div>

          <div class="flex flex-col gap-2">
            <label for="password" class="text-sm text-gray-700">Passwort</label>
            <Password id="password" v-model="password" :feedback="false" toggleMask fluid />
          </div>

          <div class="flex items-center gap-2 mt-1">
            <Checkbox v-model="rememberMe" binary inputId="remember" />
            <label for="remember" class="text-sm text-gray-700">Angemeldet bleiben</label>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex gap-3 mt-2">
          <Button label="Save" severity="secondary" outlined />
          <Button label="Anmelden" icon="pi pi-lock" severity="success" rounded />
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