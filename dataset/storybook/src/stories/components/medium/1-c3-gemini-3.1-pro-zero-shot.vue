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

<template>
  <div class="flex justify-center items-center min-h-screen bg-surface-50 p-4 font-sans">
    <Card class="w-full max-w-[420px] overflow-hidden rounded-2xl shadow-sm border border-surface-200">
      <template #header>
        <div class="h-48 w-full bg-gradient-to-br from-[#0f172a] to-[#064e3b] relative overflow-hidden flex items-center justify-center">
          <!-- Simulating the abstract 3D graphic from the mockup -->
          <div class="absolute w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -top-10 -left-10"></div>
          <div class="absolute w-48 h-48 bg-emerald-400/20 rounded-full blur-2xl bottom-0 right-0"></div>
          <i class="pi pi-shield text-7xl text-emerald-400 drop-shadow-lg z-10"></i>
        </div>
      </template>
      
      <template #title>
        <div class="text-2xl font-semibold text-surface-800 mt-2">Anmelden</div>
      </template>
      
      <template #subtitle>
        <div class="text-surface-500 text-sm mt-1">
          Melde dich mit deiner E-Mail-Adresse und Passwort an.
        </div>
      </template>
      
      <template #content>
        <div class="flex flex-col gap-5 mt-4">
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm font-medium text-surface-700">E-Mail-Adresse</label>
            <InputText id="email" v-model="email" class="w-full" />
          </div>

          <div class="flex flex-col gap-2">
            <label for="password" class="text-sm font-medium text-surface-700">Passwort</label>
            <Password
              id="password"
              v-model="password"
              :feedback="false"
              toggleMask
              fluid
            />
          </div>

          <div class="flex items-center gap-2 mt-1">
            <Checkbox v-model="rememberMe" inputId="rememberMe" binary />
            <label for="rememberMe" class="text-sm text-surface-600 cursor-pointer">
              Angemeldet bleiben
            </label>
          </div>

          <div class="flex gap-3 mt-4">
            <Button
              label="Save"
              severity="secondary"
              rounded
              class="px-6 bg-slate-100 text-slate-700 border-none hover:bg-slate-200"
            />
            <Button
              label="Anmelden"
              icon="pi pi-lock"
              severity="success"
              rounded
              class="px-6 bg-[#00b87c] border-none hover:bg-[#00a06b]"
            />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>