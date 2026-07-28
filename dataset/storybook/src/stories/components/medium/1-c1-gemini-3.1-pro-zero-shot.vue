<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50 p-4">
    <Card class="w-full max-w-[420px] shadow-sm border border-gray-200 rounded-2xl overflow-hidden !bg-white">
      <template #header>
        <div class="h-48 w-full bg-[#0a192f] relative overflow-hidden flex justify-center items-center">
          <!-- Abstract representation of the header image -->
          <div class="absolute w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -top-10 -left-10"></div>
          <div class="absolute w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl bottom-0 right-0"></div>
          <div class="relative z-10 w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.5)]">
             <i class="pi pi-shield text-4xl text-[#0a192f]"></i>
          </div>
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-6 pt-2">
          <div>
            <h2 class="text-xl font-semibold text-gray-800 mb-1.5">Anmelden</h2>
            <p class="text-sm text-gray-500">Melde dich mit deiner E-Mail-Adresse und Passwort an.</p>
          </div>

          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-1.5">
              <label for="email" class="text-sm font-medium text-gray-700">E-Mail-Adresse</label>
              <InputText id="email" v-model="email" class="w-full rounded-lg border-gray-300" />
            </div>

            <div class="flex flex-col gap-1.5">
              <label for="password" class="text-sm font-medium text-gray-700">Passwort</label>
              <Password 
                id="password" 
                v-model="password" 
                :toggleMask="true" 
                :feedback="false" 
                inputClass="w-full rounded-lg border-gray-300" 
                class="w-full" 
              />
            </div>

            <div class="flex items-center gap-2 mt-1">
              <Checkbox v-model="rememberMe" inputId="remember" :binary="true" class="border-gray-300" />
              <label for="remember" class="text-sm text-gray-600 cursor-pointer">Angemeldet bleiben</label>
            </div>
          </div>

          <div class="flex gap-3 mt-2">
            <Button 
              label="Save" 
              class="!bg-slate-100 !text-slate-700 !border-none hover:!bg-slate-200 !rounded-full px-6 py-2.5 font-medium transition-colors" 
            />
            <Button 
              label="Anmelden" 
              icon="pi pi-lock" 
              class="!bg-[#10b981] !border-none hover:!bg-[#059669] !rounded-full px-6 py-2.5 font-medium transition-colors" 
            />
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