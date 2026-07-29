<template>
  <div class="p-6 bg-white flex justify-center items-start min-h-screen">
    <Card class="w-full max-w-[488px] rounded-xl shadow-sm border border-surface-200 overflow-hidden">
      <template #header>
        <div class="w-full h-[172px] bg-gradient-to-br from-green-950 to-green-900 relative overflow-hidden flex items-center justify-center">
          <!-- Placeholder for the 3D graphic in the header -->
          <div class="w-32 h-32 bg-green-500/20 rounded-full absolute -left-4 top-4 blur-xl"></div>
          <div class="w-24 h-24 bg-green-400/20 rounded-full absolute right-8 -bottom-4 blur-lg"></div>
        </div>
      </template>
      
      <template #title>
        <div class="text-[17.5px] font-medium text-surface-900 mt-2">Anmelden</div>
      </template>
      
      <template #subtitle>
        <div class="text-sm font-normal text-surface-600 mt-1">
          Melde dich mit deiner E-Mail-Adresse und Passwort an.
        </div>
      </template>
      
      <template #content>
        <div class="flex flex-col gap-6 mt-6">
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm text-surface-900">E-Mail-Adresse</label>
            <InputText id="email" v-model="email" class="w-full" />
          </div>
          
          <div class="flex flex-col gap-2">
            <label for="password" class="text-sm text-surface-900">Passwort</label>
            <Password id="password" v-model="password" toggleMask :feedback="false" fluid />
          </div>
          
          <div class="flex items-center gap-2">
            <Checkbox inputId="remember" v-model="rememberMe" binary />
            <label for="remember" class="text-sm text-surface-900 cursor-pointer">Angemeldet bleiben</label>
          </div>
        </div>
      </template>
      
      <template #footer>
        <div class="flex gap-2 mt-2">
          <Button 
            label="Save" 
            severity="secondary" 
            rounded 
            class="!bg-slate-100 !text-surface-900 !border-none hover:!bg-slate-200" 
          />
          <Button 
            label="Anmelden" 
            icon="pi pi-lock" 
            rounded 
            class="!bg-[#10b981] !border-[#10b981] hover:!bg-[#059669]" 
          />
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