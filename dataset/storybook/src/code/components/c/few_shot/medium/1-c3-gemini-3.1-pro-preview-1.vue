<template>
  <Card class="w-full max-w-md overflow-hidden">
    <template #header>
      <img
        alt="Header Image"
        src="https://primefaces.org/cdn/primevue/images/usercard.png"
        class="h-48 w-full object-cover"
      />
    </template>
    <template #title>
      <div class="text-xl font-semibold text-slate-800">Anmelden</div>
    </template>
    <template #subtitle>
      <div class="text-sm text-slate-500">Melde dich mit deiner E-Mail-Adresse und Passwort an.</div>
    </template>
    <template #content>
      <div class="flex flex-col gap-4 mt-4">
        <div class="flex flex-col gap-2">
          <label for="email" class="text-sm font-medium text-slate-700">E-Mail-Adresse</label>
          <InputText id="email" v-model="email" type="email" class="w-full" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="password" class="text-sm font-medium text-slate-700">Passwort</label>
          <Password
            id="password"
            v-model="password"
            :feedback="false"
            toggleMask
            inputClass="w-full"
            class="w-full"
          />
        </div>
        <div class="flex items-center gap-2 mt-2">
          <Checkbox id="remember" v-model="rememberMe" binary />
          <label for="remember" class="text-sm text-slate-600">Angemeldet bleiben</label>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex gap-3 mt-4">
        <Button label="Save" severity="secondary" class="bg-slate-100 text-slate-700 border-none hover:bg-slate-200" />
        <Button label="Anmelden" icon="pi pi-lock" severity="success" class="bg-emerald-500 border-none hover:bg-emerald-600" />
      </div>
    </template>
  </Card>
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