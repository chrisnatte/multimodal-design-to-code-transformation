<template>
  <div class="flex items-center justify-center p-6 bg-white">
    <Card class="w-full max-w-[488px] overflow-hidden rounded-xl shadow-sm border border-surface-200">
      <template #header>
        <div class="h-[172px] w-full bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] relative overflow-hidden flex items-center justify-center">
          <div class="absolute w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl -top-10 -left-10"></div>
          <div class="absolute w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl bottom-0 right-10"></div>
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
            <Password id="password" v-model="password" toggleMask :feedback="false" inputClass="w-full" class="w-full" />
          </div>
          <div class="flex items-center gap-2 mt-1">
            <Checkbox id="stayLoggedIn" v-model="stayLoggedIn" binary />
            <label for="stayLoggedIn" class="text-sm text-surface-700">Angemeldet bleiben</label>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex gap-2 mt-2">
          <Button label="Save" severity="secondary" rounded class="!bg-surface-100 !text-surface-700 !border-none hover:!bg-surface-200 px-5" />
          <Button label="Anmelden" icon="pi pi-lock" severity="primary" rounded class="!bg-[#06b6d4] !border-none hover:!bg-[#0891b2] px-5" />
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
const stayLoggedIn = ref(false);
</script>