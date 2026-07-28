<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <Card class="w-full max-w-md overflow-hidden shadow-md">
      <template #header>
        <div class="relative h-40 bg-black overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=600"
            alt="header"
            class="w-full h-full object-cover opacity-80"
          />
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-4 px-2">
          <div>
            <h2 class="text-xl font-semibold text-gray-800 mb-1">Anmelden</h2>
            <p class="text-sm text-gray-500 m-0">
              Melde dich mit deiner E-Mail-Adresse und Passwort an.
            </p>
          </div>

          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm font-medium text-gray-700">E-Mail-Adresse</label>
            <InputText id="email" v-model="email" type="text" class="w-full" />
          </div>

          <div class="flex flex-col gap-2">
            <label for="password" class="text-sm font-medium text-gray-700">Passwort</label>
            <Password
              id="password"
              v-model="password"
              :feedback="false"
              toggleMask
              class="w-full"
              inputClass="w-full"
            />
          </div>

          <div class="flex items-center gap-2">
            <Checkbox v-model="rememberMe" binary inputId="rememberMe" />
            <label for="rememberMe" class="text-sm text-gray-700">Angemeldet bleiben</label>
          </div>

          <div class="flex gap-3 mt-2">
            <Button label="Save" severity="secondary" variant="outlined" />
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