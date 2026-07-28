<template>
  <div class="flex justify-center p-8 bg-gray-50">
    <Card style="width: 30.5rem; overflow: hidden" class="shadow-md">
      <template #header>
        <div
          class="w-full h-[172px] bg-gradient-to-br from-black via-green-950 to-green-900 flex items-center justify-center relative overflow-hidden"
        >
          <div
            class="w-28 h-28 rounded-full bg-gradient-to-br from-green-700 to-black flex items-center justify-center shadow-lg"
          >
            <i class="pi pi-shield text-4xl text-green-300"></i>
          </div>
          <div
            class="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-gradient-to-br from-green-700 to-black opacity-80"
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
          <div class="flex flex-col gap-1">
            <label for="email" class="text-sm">E-Mail-Adresse</label>
            <InputText id="email" v-model="email" class="w-full" />
          </div>

          <div class="flex flex-col gap-1">
            <label for="password" class="text-sm">Passwort</label>
            <Password
              id="password"
              v-model="password"
              :feedback="false"
              toggleMask
              inputClass="w-full"
              class="w-full"
            />
          </div>

          <div class="flex items-center gap-2">
            <Checkbox v-model="rememberMe" binary inputId="remember" />
            <label for="remember" class="text-sm">Angemeldet bleiben</label>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex gap-2">
          <Button label="Save" severity="secondary" rounded />
          <Button
            label="Anmelden"
            icon="pi pi-lock"
            severity="success"
            rounded
          />
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