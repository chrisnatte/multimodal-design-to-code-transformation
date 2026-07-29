<template>
  <div class="flex flex-col p-6 bg-white">
    <Card class="rounded-xl shadow-sm">
      <template #content>
        <div class="flex flex-col gap-6 p-[17.5px]">
          
          <div class="flex flex-col gap-[7px]">
            <span class="text-[17.5px] font-medium font-sans text-surface-900">Anmelden</span>
            <span class="text-[14px] font-normal font-sans text-surface-600">Melde dich mit deiner E-Mail-Adresse und Passwort an.</span>
          </div>

          <div class="flex flex-col gap-3">
            <div class="flex flex-col gap-1">
              <label for="email" class="text-[14px] font-sans text-surface-700">E-Mail-Adresse</label>
              <InputText id="email" v-model="email" fluid />
            </div>

            <div class="flex flex-col gap-1">
              <label for="password" class="text-[14px] font-sans text-surface-700">Passwort</label>
              <Password id="password" v-model="password" toggleMask :feedback="false" fluid />
            </div>

            <div class="flex items-center gap-2 mt-1">
              <Checkbox id="remember" v-model="rememberMe" binary />
              <label for="remember" class="text-[14px] font-sans text-surface-700 cursor-pointer">Angemeldet bleiben</label>
            </div>
          </div>

          <div class="flex flex-row gap-[7px]">
            <Button label="Abbrechen" severity="secondary" rounded />
            <Button label="Anmelden" icon="pi pi-unlock" rounded />
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