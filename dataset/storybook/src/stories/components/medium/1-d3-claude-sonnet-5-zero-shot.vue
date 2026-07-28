<template>
  <div class="flex justify-center p-6">
    <Card class="w-[488px] overflow-hidden shadow-md rounded-xl">
      <template #header>
        <div
          class="relative w-full h-[172px] bg-gradient-to-br from-black via-emerald-950 to-emerald-900 overflow-hidden flex items-center justify-center"
        >
          <div
            class="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-900 shadow-lg flex items-center justify-center"
          >
            <i class="pi pi-box text-4xl text-emerald-200"></i>
          </div>
          <div
            class="absolute -bottom-6 right-4 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-900"
          ></div>
        </div>
      </template>

      <template #title>
        <span class="text-lg font-medium">Anmelden</span>
      </template>

      <template #subtitle>
        <span class="text-sm text-gray-500">
          Melde dich mit deiner E-Mail-Adresse und Passwort an.
        </span>
      </template>

      <template #content>
        <div class="flex flex-col gap-3">
          <div class="flex flex-col gap-1.5">
            <label for="email" class="text-sm text-gray-700">E-Mail-Adresse</label>
            <InputText id="email" v-model="email" type="text" class="w-full" />
          </div>

          <div class="flex flex-col gap-1.5">
            <label for="password" class="text-sm text-gray-700">Passwort</label>
            <Password
              id="password"
              v-model="password"
              :feedback="false"
              toggleMask
              class="w-full"
              inputClass="w-full"
            />
          </div>

          <div class="flex items-center gap-2 mt-1">
            <Checkbox v-model="rememberMe" binary inputId="rememberMe" />
            <label for="rememberMe" class="text-sm text-gray-700">Angemeldet bleiben</label>
          </div>
        </div>
      </template>

      <template #footer>
        <div class="flex gap-2">
          <Button label="Abbrechen" severity="secondary" rounded />
          <Button label="Anmelden" icon="pi pi-lock-open" rounded />
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