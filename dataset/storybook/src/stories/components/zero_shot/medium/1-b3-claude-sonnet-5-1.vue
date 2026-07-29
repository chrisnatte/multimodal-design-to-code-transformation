<template>
  <div class="flex flex-col items-start p-6 bg-white">
    <Card class="w-[488px]">
      <template #title>
        <div class="flex flex-col gap-2">
          <span class="text-lg font-medium">Anmelden</span>
          <span class="text-sm font-normal text-gray-500">Melde dich mit deiner E-Mail-Adresse und Passwort an.</span>
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-3 mt-4">
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm">E-Mail-Adresse</label>
            <InputText id="email" v-model="email" class="w-full" />
          </div>

          <div class="flex flex-col gap-2">
            <label for="password" class="text-sm">Passwort</label>
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
            <Checkbox v-model="keepSignedIn" binary inputId="keepSignedIn" />
            <label for="keepSignedIn" class="text-sm">Angemeldet bleiben</label>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex gap-2 mt-2">
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
const keepSignedIn = ref(false);
</script>