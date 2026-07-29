<template>
  <div class="max-w-[420px] mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden font-sans">
    <!-- Header Image Area -->
    <div class="h-48 bg-[#0a192f] relative overflow-hidden flex items-center justify-center">
      <!-- Using a placeholder gradient/shapes to simulate the image -->
      <div class="absolute inset-0 bg-gradient-to-b from-green-900/20 to-transparent"></div>
      <div class="w-32 h-32 rounded-full bg-gradient-to-br from-green-400/30 to-green-800/80 backdrop-blur-sm border border-green-500/30 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
         <div class="w-16 h-16 bg-green-500 rounded-lg rotate-45 opacity-80"></div>
      </div>
      <div class="w-24 h-24 rounded-full bg-gradient-to-br from-green-400/30 to-green-800/80 backdrop-blur-sm border border-green-500/30 absolute -bottom-8 right-8 z-0"></div>
    </div>

    <!-- Form Content -->
    <div class="p-6 flex flex-col gap-5">
      <div class="flex flex-col gap-1">
        <h1 class="text-xl font-semibold text-slate-800">Anmelden</h1>
        <p class="text-sm text-slate-500">Melde dich mit deiner E-Mail-Adresse und Passwort an.</p>
      </div>

      <div class="flex flex-col gap-1.5">
        <label for="email" class="text-sm font-medium text-slate-700">E-Mail-Adresse</label>
        <InputText id="email" v-model="email" class="w-full" />
      </div>

      <div class="flex flex-col gap-1.5">
        <label for="password" class="text-sm font-medium text-slate-700">Passwort</label>
        <Password 
          id="password" 
          v-model="password" 
          toggleMask 
          :feedback="false" 
          class="w-full" 
          inputClass="w-full" 
        />
      </div>

      <div class="flex items-center gap-2 mt-1">
        <Checkbox v-model="rememberMe" inputId="remember" binary />
        <label for="remember" class="text-sm text-slate-600 cursor-pointer select-none">Angemeldet bleiben</label>
      </div>

      <div class="flex items-center gap-3 mt-2">
        <Button 
          label="Save" 
          class="bg-slate-100 text-slate-700 border-none rounded-full px-6 py-2 hover:bg-slate-200 font-medium transition-colors" 
        />
        <Button 
          label="Anmelden" 
          icon="pi pi-lock" 
          class="bg-[#10b981] text-white border-none rounded-full px-6 py-2 hover:bg-[#059669] font-medium transition-colors" 
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const email = ref('');
const password = ref('');
const rememberMe = ref(false);
</script>