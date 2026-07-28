<template>
  <div class="flex justify-center items-center min-h-screen bg-surface-50 p-4">
    <Card class="w-full max-w-[488px] overflow-hidden rounded-xl shadow-sm border border-surface-200">
      <template #header>
        <div class="w-full h-[172px] bg-gradient-to-r from-[#03131A] to-[#041D1A] overflow-hidden relative flex items-center justify-center">
          <div class="absolute inset-0 bg-[#0B1519] opacity-80 backdrop-blur-[2px]"></div>
          <div class="absolute w-[200px] h-[200px] bg-[#10B981] rounded-full blur-[80px] opacity-20 transform -translate-x-12 -translate-y-4"></div>
          <img 
            src="https://www.primefaces.org/cdn/primevue/images/card-vue.jpg" 
            alt="Header Background" 
            class="w-full h-full object-cover" 
          />
        </div>
      </template>

      <template #title>
        <div class="text-[17.5px] font-medium text-surface-900 mb-1">
          Anmelden
        </div>
      </template>

      <template #subtitle>
        <div class="text-[14px] font-normal text-surface-500 line-clamp-2">
          Melde dich mit deiner E-Mail-Adresse und Passwort an.
        </div>
      </template>

      <template #content>
        <div class="flex flex-col gap-3 mt-2">
          <div class="flex flex-col gap-2">
            <label for="email" class="text-[14px] text-surface-700">
              E-Mail-Adresse
            </label>
            <InputText id="email" v-model="email" class="w-full" />
          </div>

          <div class="flex flex-col gap-2">
            <label for="password" class="text-[14px] text-surface-700">
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
            <Checkbox inputId="remember" v-model="rememberMe" binary />
            <label for="remember" class="text-[14px] text-surface-600 cursor-pointer select-none">
              Angemeldet bleiben
            </label>
          </div>
        </div>
      </template>

      <template #footer>
        <div class="flex flex-row gap-2 mt-1">
          <Button 
            label="Save" 
            severity="secondary" 
            rounded 
          />
          <Button 
            label="Anmelden" 
            icon="pi pi-lock" 
            rounded 
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