<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50 p-4">
    <Card class="w-[488px] overflow-hidden rounded-xl shadow-sm">
      <template #header>
        <div class="h-[172px] w-full bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950" />
      </template>

      <template #title>
        <span class="text-[17.5px] font-medium text-slate-800">Anmelden</span>
      </template>

      <template #subtitle>
        <span class="text-sm font-normal text-slate-500">
          Melde dich mit deiner E-Mail-Adresse und Passwort an.
        </span>
      </template>

      <template #content>
        <div class="flex flex-col gap-3">
          <div class="flex flex-col gap-1.5">
            <label for="email" class="text-sm text-slate-700">E-Mail-Adresse</label>
            <InputText id="email" v-model="email" class="w-full" />
          </div>

          <div class="flex flex-col gap-1.5">
            <label for="password" class="text-sm text-slate-700">Passwort</label>
            <Password
              id="password"
              v-model="password"
              :toggleMask="true"
              :feedback="false"
              fluid
              inputClass="w-full"
            />
          </div>

          <div class="flex items-center gap-2">
            <Checkbox id="remember" v-model="remember" binary inputId="remember" />
            <label for="remember" class="text-sm text-slate-700">Angemeldet bleiben</label>
          </div>
        </div>
      </template>

      <template #footer>
        <div class="flex gap-[7px]">
          <Button label="Abbrechen" severity="secondary" rounded />
          <Button label="Anmelden" icon="pi pi-lock-open" severity="success" rounded />
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
const remember = ref(false);
</script>