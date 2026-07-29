<template>
  <div class="flex items-center justify-center p-6">
    <Card class="w-full max-w-[488px] overflow-hidden rounded-xl border border-surface-200 shadow-sm">
      <template #header>
        <div class="h-[172px] w-full bg-gradient-to-r from-surface-800 to-surface-900 relative overflow-hidden">
          <!-- Placeholder for the complex 3D graphic in the header -->
          <div class="absolute inset-0 flex items-center justify-center opacity-50">
            <div class="w-48 h-48 bg-green-500 rounded-full blur-3xl"></div>
          </div>
        </div>
      </template>
      <template #title>
        <div class="text-xl font-medium text-surface-900">Anmelden</div>
      </template>
      <template #subtitle>
        <div class="text-sm text-surface-500 mt-1">Melde dich mit deiner E-Mail-Adresse und Passwort an.</div>
      </template>
      <template #content>
        <div class="flex flex-col gap-4 mt-4">
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm text-surface-700">E-Mail-Adresse</label>
            <InputText id="email" v-model="email" class="w-full" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="password" class="text-sm text-surface-700">Passwort</label>
            <Password id="password" v-model="password" toggleMask :feedback="false" fluid />
          </div>
          <div class="flex items-center gap-2 mt-1">
            <Checkbox id="remember" v-model="remember" binary />
            <label for="remember" class="text-sm text-surface-700">Angemeldet bleiben</label>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex gap-2 mt-2">
          <Button label="Save" severity="secondary" rounded />
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
const remember = ref(false);
</script>