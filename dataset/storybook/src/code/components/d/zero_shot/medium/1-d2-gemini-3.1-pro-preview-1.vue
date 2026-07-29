<template>
  <div class="p-6 flex justify-center bg-white">
    <Card class="w-full max-w-[488px] rounded-xl shadow-none border border-surface-200">
      <template #header>
        <div class="h-[172px] w-full bg-slate-900 rounded-t-xl overflow-hidden relative">
          <!-- Placeholder for the header image -->
          <div class="absolute inset-0 bg-gradient-to-b from-green-900/50 to-slate-900"></div>
        </div>
      </template>
      <template #title>
        <span class="text-[17.5px] font-medium text-surface-900">Anmelden</span>
      </template>
      <template #subtitle>
        <span class="text-sm font-normal text-surface-600">Melde dich mit deiner E-Mail-Adresse und Passwort an.</span>
      </template>
      <template #content>
        <div class="flex flex-col gap-4 mt-2">
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm font-normal text-surface-700">E-Mail-Adresse</label>
            <InputText id="email" v-model="email" class="w-full" />
          </div>
          
          <div class="flex flex-col gap-2">
            <label for="password" class="text-sm font-normal text-surface-700">Passwort</label>
            <Password inputId="password" v-model="password" toggleMask :feedback="false" fluid />
          </div>
          
          <div class="flex items-center gap-2 mt-1">
            <Checkbox inputId="remember" v-model="rememberMe" binary />
            <label for="remember" class="text-sm font-normal text-surface-700">Angemeldet bleiben</label>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex gap-2 mt-2">
          <Button label="Save" severity="secondary" rounded class="bg-surface-100 text-surface-700 border-none hover:bg-surface-200" />
          <Button label="Anmelden" icon="pi pi-unlock" severity="success" rounded />
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