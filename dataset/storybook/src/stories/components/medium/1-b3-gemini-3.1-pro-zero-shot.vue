<template>
  <Card class="w-[488px] rounded-xl bg-white shadow-sm overflow-hidden">
    <template #header>
      <div class="h-[172px] p-[10px] bg-gray-50"></div>
    </template>
    
    <template #title>
      <div class="text-[17.5px] font-medium font-sans text-gray-900">
        Anmelden
      </div>
    </template>
    
    <template #subtitle>
      <div class="text-[14px] font-normal font-sans text-gray-600 mt-[7px]">
        Melde dich mit deiner E-Mail-Adresse und Passwort an.
      </div>
    </template>
    
    <template #content>
      <div class="flex flex-col gap-[12px] mt-[24px]">
        <div class="flex flex-col gap-1">
          <label for="email" class="text-[14px] font-normal font-sans text-gray-700">E-Mail-Adresse</label>
          <InputText id="email" v-model="email" class="w-full" />
        </div>
        
        <div class="flex flex-col gap-1">
          <label for="password" class="text-[14px] font-normal font-sans text-gray-700">Passwort</label>
          <Password id="password" v-model="password" toggleMask :feedback="false" fluid />
        </div>
        
        <div class="flex items-center gap-2 mt-1">
          <Checkbox v-model="rememberMe" binary inputId="remember" />
          <label for="remember" class="text-[14px] font-normal font-sans text-gray-700 cursor-pointer">
            Angemeldet bleiben
          </label>
        </div>
      </div>
    </template>
    
    <template #footer>
      <div class="flex flex-row gap-[7px] mt-[24px]">
        <Button label="Abbrechen" severity="secondary" rounded />
        <Button label="Anmelden" icon="pi pi-unlock" rounded />
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