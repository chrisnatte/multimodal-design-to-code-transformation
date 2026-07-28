<template>
  <Card class="w-full max-w-[488px] overflow-hidden">
    <template #header>
      <img
        alt="Header"
        src="https://primefaces.org/cdn/primevue/images/usercard.png"
        class="w-full h-[172px] object-cover"
      />
    </template>
    
    <template #title>
      <div class="text-[17.5px] font-medium text-surface-900 dark:text-surface-0 leading-tight">
        Anmelden
      </div>
    </template>
    
    <template #subtitle>
      <div class="text-sm font-normal text-surface-500 dark:text-surface-400 mt-1">
        Melde dich mit deiner E-Mail-Adresse und Passwort an.
      </div>
    </template>
    
    <template #content>
      <div class="flex flex-col gap-5 mt-2">
        <div class="flex flex-col gap-2">
          <label for="email" class="text-sm font-normal text-surface-700 dark:text-surface-100">
            E-Mail-Adresse
          </label>
          <InputText id="email" v-model="email" fluid />
        </div>
        
        <div class="flex flex-col gap-2">
          <label for="password" class="text-sm font-normal text-surface-700 dark:text-surface-100">
            Passwort
          </label>
          <Password 
            inputId="password" 
            v-model="password" 
            :feedback="false" 
            toggleMask 
            fluid 
          />
        </div>
        
        <div class="flex items-center gap-2 mt-1">
          <Checkbox inputId="remember" v-model="remember" binary />
          <label for="remember" class="text-sm text-surface-700 dark:text-surface-100">
            Angemeldet bleiben
          </label>
        </div>
      </div>
    </template>
    
    <template #footer>
      <div class="flex items-center gap-2 pt-2">
        <Button 
          label="Save" 
          severity="secondary" 
          rounded 
        />
        <Button 
          label="Anmelden" 
          icon="pi pi-unlock" 
          severity="success" 
          rounded 
        />
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
const remember = ref(false);
</script>