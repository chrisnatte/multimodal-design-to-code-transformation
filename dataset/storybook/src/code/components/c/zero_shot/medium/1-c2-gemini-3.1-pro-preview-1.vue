<template>
  <div class="flex justify-center items-center min-h-screen bg-surface-50 p-4">
    <Card class="w-full max-w-md overflow-hidden">
      <template #header>
        <img
          alt="Header Image"
          src="https://primefaces.org/cdn/primevue/images/usercard.png"
          class="w-full h-48 object-cover"
        />
      </template>
      <template #title>
        <div class="text-2xl font-bold text-surface-900">Anmelden</div>
      </template>
      <template #subtitle>
        <div class="text-surface-500 mt-1">
          Melde dich mit deiner E-Mail-Adresse und Passwort an.
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-4 mt-4">
          <div class="flex flex-col gap-2">
            <label for="email" class="text-surface-700 font-medium">E-Mail-Adresse</label>
            <InputText id="email" v-model="email" type="email" class="w-full" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="password" class="text-surface-700 font-medium">Passwort</label>
            <Password
              id="password"
              v-model="password"
              :feedback="false"
              toggleMask
              fluid
            />
          </div>
          <div class="flex items-center gap-2 mt-2">
            <Checkbox v-model="rememberMe" inputId="rememberMe" binary />
            <label for="rememberMe" class="text-surface-700">Angemeldet bleiben</label>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex gap-3 mt-4">
          <Button label="Save" severity="secondary" variant="text" class="bg-surface-100 hover:bg-surface-200 text-surface-700 rounded-full px-6" />
          <Button label="Anmelden" icon="pi pi-lock" class="bg-emerald-500 hover:bg-emerald-600 border-none rounded-full px-6" />
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